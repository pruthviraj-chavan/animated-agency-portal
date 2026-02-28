import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RotateCcw } from "lucide-react";

interface Replica { id: number; value: number; version: number; synced: boolean; }

export function EventualConsistencyVisualizer() {
  const [N, setN] = useState(3);
  const [W, setW] = useState(2);
  const [R, setR] = useState(2);
  const [delay, setDelay] = useState(2);
  const [replicas, setReplicas] = useState<Replica[]>(() => Array.from({ length: 3 }, (_, i) => ({ id: i, value: 0, version: 0, synced: true })));
  const [log, setLog] = useState<string[]>([]);
  const versionRef = useRef(0);

  useEffect(() => {
    setReplicas(Array.from({ length: N }, (_, i) => ({ id: i, value: 0, version: 0, synced: true })));
  }, [N]);

  const write = useCallback(() => {
    const v = ++versionRef.current;
    const newVal = Math.floor(Math.random() * 100);

    // Write to W replicas immediately
    setReplicas(prev => {
      const next = prev.map(r => ({ ...r }));
      const writeTargets = next.slice(0, W);
      writeTargets.forEach(r => { r.value = newVal; r.version = v; r.synced = true; });
      next.slice(W).forEach(r => { r.synced = false; });
      return next;
    });
    setLog(l => [`WRITE v${v}: value=${newVal} → ${W}/${N} replicas ack'd`, ...l.slice(0, 14)]);

    // Eventual sync to remaining replicas
    setTimeout(() => {
      setReplicas(prev => prev.map(r => r.version < v ? { ...r, value: newVal, version: v, synced: true } : r));
      setLog(l => [`SYNC v${v}: all replicas converged (after ${delay}s)`, ...l.slice(0, 14)]);
    }, delay * 1000);
  }, [N, W, delay]);

  const read = useCallback(() => {
    const readTargets = replicas.slice(0, R);
    const maxVersion = Math.max(...readTargets.map(r => r.version));
    const latest = readTargets.find(r => r.version === maxVersion)!;
    const isStale = replicas.some(r => r.version > latest.version);
    const consistent = R + W > N;
    setLog(l => [
      `READ from ${R} replicas → value=${latest.value} v${latest.version} ${isStale ? "⚠ STALE" : "✓ FRESH"} ${consistent ? "(R+W>N: strong)" : "(R+W≤N: eventual)"}`,
      ...l.slice(0, 14)
    ]);
  }, [replicas, R, W, N]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {[
          { label: "N (Replicas)", val: N, set: setN, min: 2, max: 5, color: "hsl(200,70%,55%)" },
          { label: "W (Write Quorum)", val: W, set: setW, min: 1, max: N, color: "hsl(140,60%,50%)" },
          { label: "R (Read Quorum)", val: R, set: setR, min: 1, max: N, color: "hsl(40,80%,55%)" },
          { label: "Sync Delay (s)", val: delay, set: setDelay, min: 1, max: 5, color: "hsl(280,60%,60%)" },
        ].map(s => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="text-xs text-[hsl(0,0%,50%)]">{s.label}:</span>
            <Slider value={[s.val]} onValueChange={([v]) => s.set(v)} min={s.min} max={s.max} step={1} className="w-16" />
            <span className="text-sm font-mono" style={{ color: s.color }}>{s.val}</span>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
        <div className="flex justify-center gap-4 flex-wrap">
          {replicas.map(r => (
            <div key={r.id} className="flex flex-col items-center gap-1">
              <div className={`w-16 h-16 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${r.synced ? "border-[hsl(140,60%,50%)]" : "border-[hsl(40,80%,55%)] animate-pulse"}`}>
                <span className="text-sm font-mono font-bold text-[hsl(0,0%,80%)]">{r.value}</span>
                <span className="text-[8px] text-[hsl(0,0%,45%)]">v{r.version}</span>
              </div>
              <span className="text-[8px] text-[hsl(0,0%,45%)]">Replica {r.id}</span>
              <span className={`text-[8px] ${r.synced ? "text-[hsl(140,60%,55%)]" : "text-[hsl(40,80%,55%)]"}`}>
                {r.synced ? "synced" : "stale"}
              </span>
            </div>
          ))}
        </div>
        <p className={`text-xs text-center mt-3 font-bold ${R + W > N ? "text-[hsl(140,60%,55%)]" : "text-[hsl(40,80%,55%)]"}`}>
          R({R}) + W({W}) = {R + W} {R + W > N ? `> N(${N}) → Strong Consistency` : `≤ N(${N}) → Eventual Consistency`}
        </p>
      </div>

      <div className="flex gap-2">
        <Button onClick={write} className="bg-[hsl(140,50%,35%)] hover:bg-[hsl(140,50%,30%)] text-white text-xs">Write Value</Button>
        <Button onClick={read} className="bg-[hsl(200,50%,40%)] hover:bg-[hsl(200,50%,35%)] text-white text-xs">Read Value</Button>
        <Button onClick={() => { setReplicas(Array.from({ length: N }, (_, i) => ({ id: i, value: 0, version: 0, synced: true }))); setLog([]); versionRef.current = 0; }}
          variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
      </div>

      {log.length > 0 && (
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 max-h-[120px] overflow-y-auto">
          {log.map((msg, i) => <p key={i} className="text-xs font-mono text-[hsl(250,60%,70%)] py-0.5">{msg}</p>)}
        </div>
      )}
    </div>
  );
}
