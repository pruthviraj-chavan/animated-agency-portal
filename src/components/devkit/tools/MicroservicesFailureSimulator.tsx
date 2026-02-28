import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RotateCcw, Play, Pause, XCircle } from "lucide-react";

interface Service {
  id: string; name: string; color: string; status: "healthy" | "degraded" | "down";
  latency: number; deps: string[];
}

const INITIAL_SERVICES: Service[] = [
  { id: "gateway", name: "API Gateway", color: "hsl(200,70%,55%)", status: "healthy", latency: 5, deps: ["auth", "orders"] },
  { id: "auth", name: "Auth Service", color: "hsl(140,60%,50%)", status: "healthy", latency: 10, deps: ["userdb"] },
  { id: "orders", name: "Order Service", color: "hsl(40,80%,55%)", status: "healthy", latency: 15, deps: ["inventory", "payments"] },
  { id: "inventory", name: "Inventory", color: "hsl(280,60%,60%)", status: "healthy", latency: 8, deps: ["productdb"] },
  { id: "payments", name: "Payments", color: "hsl(320,60%,55%)", status: "healthy", latency: 20, deps: [] },
  { id: "userdb", name: "User DB", color: "hsl(160,50%,50%)", status: "healthy", latency: 3, deps: [] },
  { id: "productdb", name: "Product DB", color: "hsl(30,70%,55%)", status: "healthy", latency: 3, deps: [] },
];

export function MicroservicesFailureSimulator() {
  const [services, setServices] = useState<Service[]>(JSON.parse(JSON.stringify(INITIAL_SERVICES)));
  const [circuitBreaker, setCircuitBreaker] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const cascadeFailure = useCallback((failedId: string) => {
    setServices(prev => {
      const next = prev.map(s => ({ ...s }));
      const failed = next.find(s => s.id === failedId);
      if (failed) failed.status = "down";

      // Cascade
      let changed = true;
      while (changed) {
        changed = false;
        for (const svc of next) {
          if (svc.status === "down") continue;
          const downDeps = svc.deps.filter(d => next.find(s => s.id === d)?.status === "down");
          if (downDeps.length > 0) {
            if (circuitBreaker) {
              if (svc.status !== "degraded") { svc.status = "degraded"; svc.latency *= 2; changed = true; }
            } else {
              svc.status = "down"; changed = true;
            }
          }
        }
      }
      return next;
    });
    setLog(l => [`💥 ${failedId} killed → cascade propagating${circuitBreaker ? " (breaker ON)" : ""}`, ...l.slice(0, 14)]);
  }, [circuitBreaker]);

  const reset = () => {
    clearInterval(intervalRef.current);
    setServices(JSON.parse(JSON.stringify(INITIAL_SERVICES)));
    setLog([]);
    setRunning(false);
  };

  const STATUS_COLORS = { healthy: "hsl(140,60%,50%)", degraded: "hsl(40,80%,55%)", down: "hsl(0,60%,55%)" };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Switch checked={circuitBreaker} onCheckedChange={setCircuitBreaker} />
          <span className="text-xs text-[hsl(0,0%,60%)]">Circuit Breaker</span>
        </div>
        <Button onClick={reset} variant="outline" size="sm" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {services.map(svc => (
            <div key={svc.id} className="flex flex-col items-center gap-1">
              <button onClick={() => svc.status !== "down" && cascadeFailure(svc.id)}
                className={`w-16 h-16 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${svc.status === "down" ? "opacity-40" : "hover:scale-105 cursor-pointer"}`}
                style={{ borderColor: STATUS_COLORS[svc.status], backgroundColor: `${STATUS_COLORS[svc.status]}10` }}>
                {svc.status === "down" && <XCircle className="h-4 w-4 text-[hsl(0,60%,55%)]" />}
                <span className="text-[8px] font-bold" style={{ color: svc.color }}>{svc.name}</span>
              </button>
              <span className="text-[8px] text-[hsl(0,0%,40%)]">{svc.latency}ms • {svc.status}</span>
              {svc.deps.length > 0 && <span className="text-[7px] text-[hsl(0,0%,30%)]">→ {svc.deps.join(", ")}</span>}
            </div>
          ))}
        </div>
      </div>

      <p className="text-[10px] text-[hsl(0,0%,40%)]">Click a service to kill it and watch failures cascade.</p>

      {log.length > 0 && (
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 max-h-[100px] overflow-y-auto">
          {log.map((msg, i) => <p key={i} className="text-xs font-mono text-[hsl(0,60%,65%)] py-0.5">{msg}</p>)}
        </div>
      )}
    </div>
  );
}
