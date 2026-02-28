import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, Play, AlertTriangle } from "lucide-react";

interface Thread { id: string; name: string; holds: string; wants: string; color: string; }

const SCENARIOS = [
  {
    name: "Classic Deadlock",
    threads: [
      { id: "t1", name: "Thread A", holds: "Lock 1", wants: "Lock 2", color: "hsl(200,70%,55%)" },
      { id: "t2", name: "Thread B", holds: "Lock 2", wants: "Lock 1", color: "hsl(0,60%,55%)" },
    ],
    deadlock: true,
  },
  {
    name: "Dining Philosophers",
    threads: [
      { id: "p1", name: "Phil 1", holds: "Fork 1", wants: "Fork 2", color: "hsl(200,70%,55%)" },
      { id: "p2", name: "Phil 2", holds: "Fork 2", wants: "Fork 3", color: "hsl(140,60%,50%)" },
      { id: "p3", name: "Phil 3", holds: "Fork 3", wants: "Fork 1", color: "hsl(40,80%,55%)" },
    ],
    deadlock: true,
  },
  {
    name: "No Deadlock (Ordered)",
    threads: [
      { id: "t1", name: "Thread A", holds: "Lock 1", wants: "Lock 2", color: "hsl(200,70%,55%)" },
      { id: "t2", name: "Thread B", holds: "", wants: "Lock 1", color: "hsl(140,60%,50%)" },
    ],
    deadlock: false,
  },
];

export function ThreadDeadlockVisualizer() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [running, setRunning] = useState(false);
  const [detected, setDetected] = useState(false);
  const scenario = SCENARIOS[scenarioIdx];

  const detect = () => {
    setRunning(true);
    setTimeout(() => {
      setDetected(true);
      setRunning(false);
    }, 1500);
  };

  const reset = () => { setDetected(false); setRunning(false); };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {SCENARIOS.map((s, i) => (
          <Button key={s.name} size="sm" onClick={() => { setScenarioIdx(i); reset(); }}
            className={`text-xs ${i === scenarioIdx ? "bg-[hsl(250,50%,40%)] text-white" : "bg-[hsl(230,25%,12%)] text-[hsl(0,0%,60%)]"}`}>
            {s.name}
          </Button>
        ))}
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {scenario.threads.map(t => (
            <div key={t.id} className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all ${running ? "animate-pulse" : ""}`}
                style={{ borderColor: t.color, color: t.color, backgroundColor: `${t.color}15` }}>
                {t.name}
              </div>
              <div className="text-center space-y-0.5">
                {t.holds && <p className="text-[10px]"><span className="text-[hsl(140,60%,50%)]">holds:</span> <span className="text-[hsl(0,0%,70%)]">{t.holds}</span></p>}
                <p className="text-[10px]"><span className="text-[hsl(40,80%,55%)]">wants:</span> <span className="text-[hsl(0,0%,70%)]">{t.wants}</span></p>
              </div>
            </div>
          ))}
        </div>

        {detected && (
          <div className={`mt-4 p-3 rounded-lg border ${scenario.deadlock ? "bg-[hsl(0,60%,55%,0.1)] border-[hsl(0,60%,55%,0.3)]" : "bg-[hsl(140,60%,50%,0.1)] border-[hsl(140,60%,50%,0.3)]"}`}>
            <div className="flex items-center gap-2">
              {scenario.deadlock ? <AlertTriangle className="h-4 w-4 text-[hsl(0,60%,55%)]" /> : null}
              <span className={`text-xs font-bold ${scenario.deadlock ? "text-[hsl(0,60%,65%)]" : "text-[hsl(140,60%,65%)]"}`}>
                {scenario.deadlock ? "🔴 DEADLOCK DETECTED — Circular wait condition found!" : "🟢 NO DEADLOCK — Resource ordering prevents circular wait."}
              </span>
            </div>
            {scenario.deadlock && (
              <p className="text-[10px] text-[hsl(0,0%,50%)] mt-1">
                Cycle: {scenario.threads.map(t => `${t.name} → ${t.wants}`).join(" → ")}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <Button onClick={detect} disabled={running || detected} className="bg-[hsl(250,50%,45%)] hover:bg-[hsl(250,50%,40%)] text-white text-xs">
          <Play className="h-3 w-3 mr-1" /> Detect Deadlock
        </Button>
        <Button onClick={reset} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}
