import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RotateCcw, Zap } from "lucide-react";

interface AlgoState {
  name: string;
  color: string;
  allowed: number;
  blocked: number;
  history: boolean[];
}

export function RateLimiterLabTool() {
  const [windowSize, setWindowSize] = useState(10);
  const [limit, setLimit] = useState(5);
  const countersRef = useRef({ fixed: 0, sliding: [] as number[], token: 5, leaky: 0 });
  const tickRef = useRef(0);
  const [algos, setAlgos] = useState<AlgoState[]>(() => initAlgos());

  function initAlgos(): AlgoState[] {
    return [
      { name: "Fixed Window", color: "hsl(200,70%,55%)", allowed: 0, blocked: 0, history: [] },
      { name: "Sliding Window", color: "hsl(140,60%,50%)", allowed: 0, blocked: 0, history: [] },
      { name: "Token Bucket", color: "hsl(40,80%,55%)", allowed: 0, blocked: 0, history: [] },
      { name: "Leaky Bucket", color: "hsl(280,60%,60%)", allowed: 0, blocked: 0, history: [] },
    ];
  }

  const sendRequest = useCallback(() => {
    tickRef.current++;
    const t = tickRef.current;
    const c = countersRef.current;
    const results: boolean[] = [];

    // Fixed Window
    if (t % windowSize === 1) c.fixed = 0;
    if (c.fixed < limit) { c.fixed++; results.push(true); } else results.push(false);

    // Sliding Window
    c.sliding.push(t);
    c.sliding = c.sliding.filter(x => x > t - windowSize);
    results.push(c.sliding.length <= limit);
    if (c.sliding.length > limit) c.sliding.pop();

    // Token Bucket
    if (c.token < limit) c.token += 0.3;
    if (c.token >= 1) { c.token--; results.push(true); } else results.push(false);

    // Leaky Bucket
    c.leaky = Math.max(0, c.leaky - 0.5);
    if (c.leaky < limit) { c.leaky++; results.push(true); } else results.push(false);

    setAlgos(prev => prev.map((a, i) => ({
      ...a,
      allowed: a.allowed + (results[i] ? 1 : 0),
      blocked: a.blocked + (results[i] ? 0 : 1),
      history: [...a.history.slice(-29), results[i]],
    })));
  }, [limit, windowSize]);

  const burst = useCallback(() => {
    for (let i = 0; i < 8; i++) setTimeout(() => sendRequest(), i * 50);
  }, [sendRequest]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Rate Limit:</span>
          <Slider value={[limit]} onValueChange={([v]) => setLimit(v)} min={1} max={15} step={1} className="w-20" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{limit}/window</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Window:</span>
          <Slider value={[windowSize]} onValueChange={([v]) => setWindowSize(v)} min={5} max={20} step={1} className="w-20" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{windowSize}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button onClick={sendRequest} className="bg-[hsl(250,50%,45%)] hover:bg-[hsl(250,50%,40%)] text-white">Send Request</Button>
        <Button onClick={burst} className="bg-[hsl(40,70%,45%)] hover:bg-[hsl(40,70%,40%)] text-white"><Zap className="h-4 w-4 mr-1" />Burst (8)</Button>
        <Button onClick={() => { countersRef.current = { fixed: 0, sliding: [], token: 5, leaky: 0 }; tickRef.current = 0; setAlgos(initAlgos()); }} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {algos.map(a => (
          <div key={a.name} className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold" style={{ color: a.color }}>{a.name}</span>
              <span className="text-[10px] text-[hsl(0,0%,45%)]">{a.allowed}✓ {a.blocked}✗</span>
            </div>
            <div className="flex gap-0.5 h-6 items-end">
              {a.history.map((ok, i) => (
                <div key={i} className="w-2 rounded-sm transition-all" style={{
                  height: ok ? "100%" : "40%",
                  backgroundColor: ok ? a.color : "hsl(0,60%,45%)",
                  opacity: ok ? 0.8 : 0.5,
                }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
