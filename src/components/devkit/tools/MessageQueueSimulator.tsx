import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RotateCcw, Play, Pause } from "lucide-react";

interface Message { id: number; partition: number; status: "queued" | "processing" | "done" | "dlq"; }

export function MessageQueueSimulator() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [running, setRunning] = useState(false);
  const [producerSpeed, setProducerSpeed] = useState(3);
  const [consumerSpeed, setConsumerSpeed] = useState(2);
  const [partitions, setPartitions] = useState(3);
  const [failRate, setFailRate] = useState(10);
  const idRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const tick = useCallback(() => {
    // Produce
    for (let i = 0; i < producerSpeed; i++) {
      const id = ++idRef.current;
      const partition = id % partitions;
      setMessages(m => [...m.slice(-80), { id, partition, status: "queued" }]);
    }
    // Consume
    setMessages(prev => {
      const next = [...prev];
      let consumed = 0;
      for (let i = 0; i < next.length && consumed < consumerSpeed; i++) {
        if (next[i].status === "queued") {
          if (Math.random() * 100 < failRate) {
            next[i] = { ...next[i], status: "dlq" };
          } else {
            next[i] = { ...next[i], status: "done" };
          }
          consumed++;
        }
      }
      return next;
    });
  }, [producerSpeed, consumerSpeed, partitions, failRate]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(tick, 500);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, tick]);

  const stats = {
    queued: messages.filter(m => m.status === "queued").length,
    done: messages.filter(m => m.status === "done").length,
    dlq: messages.filter(m => m.status === "dlq").length,
  };

  const lag = Math.max(0, stats.queued);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Producer:</span>
          <Slider value={[producerSpeed]} onValueChange={([v]) => setProducerSpeed(v)} min={1} max={8} step={1} className="w-16" />
          <span className="text-sm font-mono text-[hsl(140,60%,60%)]">{producerSpeed}/tick</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Consumer:</span>
          <Slider value={[consumerSpeed]} onValueChange={([v]) => setConsumerSpeed(v)} min={1} max={8} step={1} className="w-16" />
          <span className="text-sm font-mono text-[hsl(200,70%,60%)]">{consumerSpeed}/tick</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Fail%:</span>
          <Slider value={[failRate]} onValueChange={([v]) => setFailRate(v)} min={0} max={50} step={5} className="w-16" />
          <span className="text-sm font-mono text-[hsl(0,60%,60%)]">{failRate}%</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setRunning(!running)} className="bg-[hsl(250,50%,45%)] hover:bg-[hsl(250,50%,40%)] text-white text-xs">
          {running ? <><Pause className="h-3 w-3 mr-1" />Pause</> : <><Play className="h-3 w-3 mr-1" />Start</>}
        </Button>
        <Button onClick={() => { setMessages([]); idRef.current = 0; setRunning(false); }} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 text-center">
          <p className="text-lg font-mono font-bold text-[hsl(40,80%,55%)]">{stats.queued}</p>
          <p className="text-[10px] text-[hsl(0,0%,45%)]">Queued</p>
        </div>
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 text-center">
          <p className="text-lg font-mono font-bold text-[hsl(140,60%,55%)]">{stats.done}</p>
          <p className="text-[10px] text-[hsl(0,0%,45%)]">Processed</p>
        </div>
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 text-center">
          <p className="text-lg font-mono font-bold text-[hsl(0,60%,55%)]">{stats.dlq}</p>
          <p className="text-[10px] text-[hsl(0,0%,45%)]">Dead Letter</p>
        </div>
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3">
        <p className="text-[10px] text-[hsl(0,0%,45%)] mb-2">Partitions ({partitions})</p>
        {Array.from({ length: partitions }, (_, p) => {
          const pMsgs = messages.filter(m => m.partition === p && m.status === "queued");
          return (
            <div key={p} className="flex items-center gap-2 mb-1">
              <span className="text-[10px] text-[hsl(0,0%,50%)] w-8">P{p}</span>
              <div className="flex gap-0.5">
                {pMsgs.slice(-20).map(m => (
                  <div key={m.id} className="w-2 h-3 rounded-sm bg-[hsl(40,80%,55%)]" />
                ))}
              </div>
              <span className="text-[10px] text-[hsl(0,0%,40%)]">{pMsgs.length}</span>
            </div>
          );
        })}
        <p className={`text-xs font-bold mt-2 ${lag > 10 ? "text-[hsl(0,60%,55%)]" : "text-[hsl(140,60%,55%)]"}`}>
          Consumer Lag: {lag} {lag > 10 ? "⚠ Falling behind!" : "✓ Healthy"}
        </p>
      </div>
    </div>
  );
}
