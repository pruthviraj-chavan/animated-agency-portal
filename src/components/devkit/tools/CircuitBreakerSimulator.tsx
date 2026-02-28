import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, RotateCcw } from "lucide-react";

type CBState = "CLOSED" | "OPEN" | "HALF_OPEN";

const STATE_COLORS: Record<CBState, string> = {
  CLOSED: "hsl(140,60%,50%)",
  OPEN: "hsl(0,60%,55%)",
  HALF_OPEN: "hsl(40,80%,55%)",
};

export function CircuitBreakerSimulator() {
  const [state, setState] = useState<CBState>("CLOSED");
  const [failThreshold, setFailThreshold] = useState(3);
  const [resetTimeout, setResetTimeout] = useState(5);
  const [failures, setFailures] = useState(0);
  const [successes, setSuccesses] = useState(0);
  const [log, setLog] = useState<{ msg: string; state: CBState }[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const addLog = useCallback((msg: string, s: CBState) => {
    setLog((l) => [{ msg, state: s }, ...l.slice(0, 19)]);
  }, []);

  const sendSuccess = useCallback(() => {
    if (state === "OPEN") {
      addLog("Request BLOCKED — circuit is OPEN", "OPEN");
      return;
    }
    setSuccesses((s) => s + 1);
    if (state === "HALF_OPEN") {
      setState("CLOSED");
      setFailures(0);
      addLog("Success in HALF_OPEN → circuit CLOSED", "CLOSED");
    } else {
      addLog("Request succeeded", "CLOSED");
    }
  }, [state, addLog]);

  const sendFailure = useCallback(() => {
    if (state === "OPEN") {
      addLog("Request BLOCKED — circuit is OPEN", "OPEN");
      return;
    }
    const newFails = failures + 1;
    setFailures(newFails);
    if (state === "HALF_OPEN") {
      setState("OPEN");
      addLog("Failure in HALF_OPEN → circuit OPEN", "OPEN");
      timerRef.current = setTimeout(() => {
        setState("HALF_OPEN");
        addLog(`Timeout expired → circuit HALF_OPEN (testing)`, "HALF_OPEN");
      }, resetTimeout * 1000);
    } else if (newFails >= failThreshold) {
      setState("OPEN");
      addLog(`Threshold hit (${newFails}/${failThreshold}) → circuit OPEN`, "OPEN");
      timerRef.current = setTimeout(() => {
        setState("HALF_OPEN");
        addLog(`Timeout expired → circuit HALF_OPEN (testing)`, "HALF_OPEN");
      }, resetTimeout * 1000);
    } else {
      addLog(`Failure ${newFails}/${failThreshold}`, "CLOSED");
    }
  }, [state, failures, failThreshold, resetTimeout, addLog]);

  const reset = () => {
    clearTimeout(timerRef.current);
    setState("CLOSED");
    setFailures(0);
    setSuccesses(0);
    setLog([]);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Fail Threshold:</span>
          <Slider value={[failThreshold]} onValueChange={([v]) => setFailThreshold(v)} min={1} max={10} step={1} className="w-20" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{failThreshold}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Reset (s):</span>
          <Slider value={[resetTimeout]} onValueChange={([v]) => setResetTimeout(v)} min={2} max={15} step={1} className="w-20" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{resetTimeout}s</span>
        </div>
      </div>

      {/* State Visual */}
      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-6 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-4 flex items-center justify-center transition-all duration-500"
          style={{ borderColor: STATE_COLORS[state], boxShadow: `0 0 30px ${STATE_COLORS[state]}40` }}>
          <span className="text-xs font-bold text-center" style={{ color: STATE_COLORS[state] }}>{state.replace("_", "\n")}</span>
        </div>
        <div className="flex gap-6 mt-4 text-center">
          <div>
            <p className="text-lg font-mono font-bold text-[hsl(0,60%,60%)]">{failures}</p>
            <p className="text-[10px] text-[hsl(0,0%,45%)]">Failures</p>
          </div>
          <div>
            <p className="text-lg font-mono font-bold text-[hsl(140,60%,60%)]">{successes}</p>
            <p className="text-[10px] text-[hsl(0,0%,45%)]">Successes</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button onClick={sendSuccess} className="bg-[hsl(140,50%,35%)] hover:bg-[hsl(140,50%,30%)] text-white">✓ Success</Button>
        <Button onClick={sendFailure} className="bg-[hsl(0,50%,40%)] hover:bg-[hsl(0,50%,35%)] text-white">✗ Failure</Button>
        <Button onClick={reset} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
      </div>

      {log.length > 0 && (
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 max-h-[150px] overflow-y-auto">
          {log.map((entry, i) => (
            <p key={i} className="text-xs font-mono py-0.5" style={{ color: STATE_COLORS[entry.state] }}>{entry.msg}</p>
          ))}
        </div>
      )}
    </div>
  );
}
