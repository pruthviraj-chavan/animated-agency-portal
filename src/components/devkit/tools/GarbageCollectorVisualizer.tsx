import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Plus, Trash2, Play } from "lucide-react";

interface GCObject {
  id: number;
  name: string;
  refs: number[];
  marked: boolean;
  swept: boolean;
}

let nextId = 1;

export function GarbageCollectorVisualizer() {
  const [objects, setObjects] = useState<GCObject[]>([
    { id: 1, name: "Root", refs: [2, 3], marked: false, swept: false },
    { id: 2, name: "A", refs: [4], marked: false, swept: false },
    { id: 3, name: "B", refs: [], marked: false, swept: false },
    { id: 4, name: "C", refs: [], marked: false, swept: false },
    { id: 5, name: "D (orphan)", refs: [6], marked: false, swept: false },
    { id: 6, name: "E (orphan)", refs: [], marked: false, swept: false },
  ]);
  const [phase, setPhase] = useState<"idle" | "mark" | "sweep" | "done">("idle");
  const [log, setLog] = useState<string[]>([]);

  nextId = Math.max(...objects.map(o => o.id), 0) + 1;

  const addObject = () => {
    const id = nextId++;
    setObjects(o => [...o, { id, name: `Obj${id}`, refs: [], marked: false, swept: false }]);
  };

  const addRef = (fromId: number, toId: number) => {
    setObjects(o => o.map(obj => obj.id === fromId ? { ...obj, refs: [...new Set([...obj.refs, toId])] } : obj));
  };

  const runMark = useCallback(() => {
    const roots = objects.filter(o => o.name.includes("Root"));
    const reachable = new Set<number>();
    const stack = roots.map(r => r.id);
    while (stack.length) {
      const id = stack.pop()!;
      if (reachable.has(id)) continue;
      reachable.add(id);
      const obj = objects.find(o => o.id === id);
      if (obj) stack.push(...obj.refs);
    }
    setObjects(o => o.map(obj => ({ ...obj, marked: reachable.has(obj.id) })));
    setLog(l => [...l, `MARK: ${reachable.size} reachable, ${objects.length - reachable.size} unreachable`]);
    setPhase("mark");
  }, [objects]);

  const runSweep = useCallback(() => {
    const swept = objects.filter(o => !o.marked);
    setObjects(o => o.filter(obj => obj.marked).map(obj => ({ ...obj, marked: false })));
    setLog(l => [...l, `SWEEP: freed ${swept.map(s => s.name).join(", ") || "nothing"}`]);
    setPhase("done");
  }, [objects]);

  const reset = () => {
    setObjects([
      { id: 1, name: "Root", refs: [2, 3], marked: false, swept: false },
      { id: 2, name: "A", refs: [4], marked: false, swept: false },
      { id: 3, name: "B", refs: [], marked: false, swept: false },
      { id: 4, name: "C", refs: [], marked: false, swept: false },
      { id: 5, name: "D (orphan)", refs: [6], marked: false, swept: false },
      { id: 6, name: "E (orphan)", refs: [], marked: false, swept: false },
    ]);
    setPhase("idle");
    setLog([]);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        <Button onClick={runMark} disabled={phase === "mark"} className="bg-[hsl(40,70%,45%)] hover:bg-[hsl(40,70%,40%)] text-white text-xs">
          <Play className="h-3 w-3 mr-1" /> Mark Phase
        </Button>
        <Button onClick={runSweep} disabled={phase !== "mark"} className="bg-[hsl(0,60%,45%)] hover:bg-[hsl(0,60%,40%)] text-white text-xs">
          <Trash2 className="h-3 w-3 mr-1" /> Sweep Phase
        </Button>
        <Button onClick={addObject} variant="outline" size="sm" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)] text-xs">
          <Plus className="h-3 w-3 mr-1" /> Add Object
        </Button>
        <Button onClick={reset} variant="outline" size="sm" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
        <p className="text-[10px] text-[hsl(0,0%,45%)] mb-3">Heap Objects (click two objects to add reference)</p>
        <div className="flex gap-3 flex-wrap">
          {objects.map(obj => (
            <div key={obj.id} className="relative flex flex-col items-center group">
              <div
                className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all"
                style={{
                  borderColor: obj.marked ? "hsl(140,60%,50%)" : phase === "mark" && !obj.marked ? "hsl(0,60%,50%)" : "hsl(230,20%,30%)",
                  backgroundColor: obj.marked ? "hsl(140,60%,50%,0.1)" : phase === "mark" && !obj.marked ? "hsl(0,60%,50%,0.1)" : "hsl(230,25%,10%)",
                  color: obj.marked ? "hsl(140,60%,70%)" : "hsl(0,0%,70%)",
                }}
              >
                {obj.name.slice(0, 4)}
              </div>
              <span className="text-[8px] text-[hsl(0,0%,40%)] mt-1">
                refs: [{obj.refs.join(",")}]
              </span>
            </div>
          ))}
        </div>
      </div>

      {log.length > 0 && (
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 max-h-[100px] overflow-y-auto">
          {log.map((msg, i) => (
            <p key={i} className="text-xs font-mono text-[hsl(250,60%,70%)] py-0.5">{msg}</p>
          ))}
        </div>
      )}
    </div>
  );
}
