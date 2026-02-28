import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RotateCcw, Play, Pause } from "lucide-react";

export function KubernetesAutoscaleSimulator() {
  const [pods, setPods] = useState(2);
  const [cpuLoad, setCpuLoad] = useState(30);
  const [hpaThreshold, setHpaThreshold] = useState(70);
  const [maxPods, setMaxPods] = useState(8);
  const [minPods, setMinPods] = useState(1);
  const [running, setRunning] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [history, setHistory] = useState<{ cpu: number; pods: number }[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const tick = useCallback(() => {
    setCpuLoad(prev => {
      const jitter = (Math.random() - 0.5) * 20;
      return Math.max(5, Math.min(100, prev + jitter));
    });
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(tick, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, tick]);

  // HPA logic
  useEffect(() => {
    setHistory(h => [...h.slice(-30), { cpu: cpuLoad, pods }]);
    if (cpuLoad > hpaThreshold && pods < maxPods) {
      setPods(p => p + 1);
      setLog(l => [`⬆ Scale UP: CPU ${cpuLoad.toFixed(0)}% > ${hpaThreshold}% → ${pods + 1} pods`, ...l.slice(0, 14)]);
    } else if (cpuLoad < hpaThreshold * 0.5 && pods > minPods) {
      setPods(p => p - 1);
      setLog(l => [`⬇ Scale DOWN: CPU ${cpuLoad.toFixed(0)}% < ${(hpaThreshold * 0.5).toFixed(0)}% → ${pods - 1} pods`, ...l.slice(0, 14)]);
    }
  }, [cpuLoad]);

  const spike = () => setCpuLoad(95);
  const reset = () => { clearInterval(intervalRef.current); setPods(2); setCpuLoad(30); setLog([]); setHistory([]); setRunning(false); };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">HPA Threshold:</span>
          <Slider value={[hpaThreshold]} onValueChange={([v]) => setHpaThreshold(v)} min={30} max={90} step={5} className="w-20" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{hpaThreshold}%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Max Pods:</span>
          <Slider value={[maxPods]} onValueChange={([v]) => setMaxPods(v)} min={2} max={12} step={1} className="w-16" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{maxPods}</span>
        </div>
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
        <div className="flex items-end gap-1 h-20 mb-3">
          {history.map((h, i) => (
            <div key={i} className="flex-1 rounded-t transition-all" style={{
              height: `${h.cpu}%`,
              backgroundColor: h.cpu > hpaThreshold ? "hsl(0,60%,50%)" : h.cpu > hpaThreshold * 0.5 ? "hsl(40,80%,50%)" : "hsl(140,60%,45%)",
              opacity: 0.7,
            }} />
          ))}
        </div>

        <div className="flex justify-center gap-2 flex-wrap">
          {Array.from({ length: pods }, (_, i) => (
            <div key={i} className="w-10 h-10 rounded-lg border-2 border-[hsl(200,70%,50%)] bg-[hsl(200,70%,50%,0.1)] flex items-center justify-center text-[8px] font-bold text-[hsl(200,70%,65%)]">
              Pod{i}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-3">
          <span className="text-xs text-[hsl(0,0%,50%)]">CPU: <span className={`font-bold ${cpuLoad > hpaThreshold ? "text-[hsl(0,60%,55%)]" : "text-[hsl(140,60%,55%)]"}`}>{cpuLoad.toFixed(0)}%</span></span>
          <span className="text-xs text-[hsl(0,0%,50%)]">Pods: <span className="text-[hsl(200,70%,60%)] font-bold">{pods}</span>/{maxPods}</span>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button onClick={() => setRunning(!running)} className="bg-[hsl(250,50%,45%)] hover:bg-[hsl(250,50%,40%)] text-white text-xs">
          {running ? <><Pause className="h-3 w-3 mr-1" />Pause</> : <><Play className="h-3 w-3 mr-1" />Start</>}
        </Button>
        <Button onClick={spike} className="bg-[hsl(0,50%,40%)] hover:bg-[hsl(0,50%,35%)] text-white text-xs">🔥 Traffic Spike</Button>
        <Button onClick={reset} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
      </div>

      {log.length > 0 && (
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 max-h-[100px] overflow-y-auto">
          {log.map((msg, i) => <p key={i} className="text-xs font-mono text-[hsl(250,60%,70%)] py-0.5">{msg}</p>)}
        </div>
      )}
    </div>
  );
}
