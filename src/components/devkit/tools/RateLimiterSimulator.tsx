import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, RotateCcw } from "lucide-react";

export function RateLimiterSimulator() {
  const [maxTokens, setMaxTokens] = useState(10);
  const [refillRate, setRefillRate] = useState(2);
  const [tokens, setTokens] = useState(10);
  const [log, setLog] = useState<{ msg: string; ok: boolean }[]>([]);
  const [running, setRunning] = useState(false);
  const [requestSpeed, setRequestSpeed] = useState(300);
  const requestIntervalRef = useRef<ReturnType<typeof setInterval>>();
  const refillIntervalRef = useRef<ReturnType<typeof setInterval>>();

  // Refill tokens
  useEffect(() => {
    refillIntervalRef.current = setInterval(() => {
      setTokens((t) => Math.min(t + refillRate, maxTokens));
    }, 1000);
    return () => clearInterval(refillIntervalRef.current);
  }, [refillRate, maxTokens]);

  const makeRequest = useCallback(() => {
    setTokens((t) => {
      if (t > 0) {
        setLog((l) => [{ msg: `Request ALLOWED (${t - 1} tokens left)`, ok: true }, ...l.slice(0, 24)]);
        return t - 1;
      } else {
        setLog((l) => [{ msg: `Request REJECTED (rate limited)`, ok: false }, ...l.slice(0, 24)]);
        return 0;
      }
    });
  }, []);

  useEffect(() => {
    if (running) {
      requestIntervalRef.current = setInterval(makeRequest, requestSpeed);
    } else {
      clearInterval(requestIntervalRef.current);
    }
    return () => clearInterval(requestIntervalRef.current);
  }, [running, requestSpeed, makeRequest]);

  const reset = () => { setRunning(false); setTokens(maxTokens); setLog([]); };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Max Tokens:</span>
          <Slider value={[maxTokens]} onValueChange={([v]) => { setMaxTokens(v); setTokens(v); }} min={3} max={20} step={1} className="w-24" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{maxTokens}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Refill/s:</span>
          <Slider value={[refillRate]} onValueChange={([v]) => setRefillRate(v)} min={1} max={10} step={1} className="w-20" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{refillRate}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Req Speed:</span>
          <Slider value={[requestSpeed]} onValueChange={([v]) => setRequestSpeed(v)} min={100} max={1000} step={50} className="w-20" />
          <span className="text-xs font-mono text-[hsl(0,0%,60%)]">{requestSpeed}ms</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setRunning(!running)} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">
          {running ? <><Pause className="h-4 w-4 mr-1" />Stop Flood</> : <><Play className="h-4 w-4 mr-1" />Start Flood</>}
        </Button>
        <Button onClick={makeRequest} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(230,20%,15%)]">Send One</Button>
        <Button onClick={reset} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
      </div>

      {/* Token Bucket Visual */}
      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Token Bucket</span>
          <span className="text-sm font-mono font-bold" style={{ color: tokens > 3 ? "hsl(140,60%,60%)" : tokens > 0 ? "hsl(40,80%,60%)" : "hsl(0,60%,60%)" }}>
            {tokens}/{maxTokens}
          </span>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {Array.from({ length: maxTokens }).map((_, i) => (
            <div key={i} className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
              i < tokens
                ? "bg-[hsl(250,50%,25%)] border border-[hsl(250,50%,40%)] text-[hsl(250,70%,75%)] scale-100"
                : "bg-[hsl(230,20%,8%)] border border-[hsl(230,15%,15%)] text-[hsl(0,0%,20%)] scale-90"
            }`}>
              {i < tokens ? "●" : "○"}
            </div>
          ))}
        </div>
        <div className="mt-3 w-full bg-[hsl(230,20%,12%)] rounded-full h-2">
          <div className="h-2 rounded-full transition-all duration-300"
            style={{ width: `${(tokens / maxTokens) * 100}%`, backgroundColor: tokens > 3 ? "hsl(140,60%,50%)" : tokens > 0 ? "hsl(40,80%,50%)" : "hsl(0,60%,50%)" }} />
        </div>
      </div>

      {/* Log */}
      {log.length > 0 && (
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 max-h-[140px] overflow-y-auto">
          {log.map((entry, i) => (
            <p key={i} className={`text-xs font-mono py-0.5 ${entry.ok ? "text-[hsl(140,60%,60%)]" : "text-[hsl(0,60%,60%)]"}`}>{entry.msg}</p>
          ))}
        </div>
      )}
    </div>
  );
}
