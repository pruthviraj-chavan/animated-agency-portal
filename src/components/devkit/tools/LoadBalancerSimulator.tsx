import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, RotateCcw } from "lucide-react";

interface Server { id: number; load: number; requests: number; color: string }

const COLORS = ["hsl(250,70%,65%)", "hsl(140,60%,50%)", "hsl(30,80%,55%)", "hsl(340,60%,55%)", "hsl(190,70%,50%)"];

export function LoadBalancerSimulator() {
  const [serverCount, setServerCount] = useState(3);
  const [servers, setServers] = useState<Server[]>(() => Array.from({ length: 3 }, (_, i) => ({ id: i, load: 0, requests: 0, color: COLORS[i] })));
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [totalRequests, setTotalRequests] = useState(0);
  const [activeServer, setActiveServer] = useState<number | null>(null);
  const nextServerRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const resetServers = useCallback((count: number) => {
    setServers(Array.from({ length: count }, (_, i) => ({ id: i, load: 0, requests: 0, color: COLORS[i % COLORS.length] })));
    setTotalRequests(0);
    nextServerRef.current = 0;
    setActiveServer(null);
  }, []);

  useEffect(() => { resetServers(serverCount); }, [serverCount]);

  const sendRequest = useCallback(() => {
    const idx = nextServerRef.current % serverCount;
    nextServerRef.current++;
    setActiveServer(idx);
    setTotalRequests((t) => t + 1);
    setServers((prev) => prev.map((s, i) => i === idx ? { ...s, load: Math.min(s.load + 15, 100), requests: s.requests + 1 } : { ...s, load: Math.max(s.load - 3, 0) }));
    setTimeout(() => setActiveServer(null), 200);
  }, [serverCount]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(sendRequest, speed);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, speed, sendRequest]);

  const reset = () => { setRunning(false); resetServers(serverCount); };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Servers:</span>
          <Slider value={[serverCount]} onValueChange={([v]) => { setRunning(false); setServerCount(v); }} min={2} max={5} step={1} className="w-24" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{serverCount}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Speed:</span>
          <Slider value={[speed]} onValueChange={([v]) => setSpeed(v)} min={100} max={1500} step={100} className="w-24" />
          <span className="text-xs font-mono text-[hsl(0,0%,60%)]">{speed}ms</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setRunning(!running)} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">
          {running ? <><Pause className="h-4 w-4 mr-1" />Pause</> : <><Play className="h-4 w-4 mr-1" />Start</>}
        </Button>
        <Button onClick={() => sendRequest()} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(230,20%,15%)]">Send One</Button>
        <Button onClick={reset} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
        <span className="text-xs text-[hsl(0,0%,45%)] self-center ml-auto">Total: {totalRequests}</span>
      </div>

      {/* Load Balancer Visual */}
      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-[hsl(250,50%,40%)] bg-[hsl(250,30%,15%)] flex items-center justify-center">
            <span className="text-[10px] font-bold text-[hsl(250,60%,70%)]">LB</span>
          </div>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          {servers.map((s) => (
            <div key={s.id} className={`flex flex-col items-center transition-all duration-200 ${activeServer === s.id ? "scale-110" : ""}`}>
              <div className={`w-16 h-20 rounded-lg border-2 relative overflow-hidden ${activeServer === s.id ? "border-white" : "border-[hsl(230,20%,22%)]"}`}
                style={{ backgroundColor: "hsl(230,25%,6%)" }}>
                <div className="absolute bottom-0 left-0 right-0 transition-all duration-300 rounded-b-md"
                  style={{ height: `${s.load}%`, backgroundColor: s.color, opacity: 0.7 }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-white drop-shadow-md">{s.load}%</span>
                </div>
              </div>
              <span className="text-[10px] text-[hsl(0,0%,50%)] mt-1">S{s.id + 1}</span>
              <span className="text-[10px] font-mono" style={{ color: s.color }}>{s.requests} req</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
