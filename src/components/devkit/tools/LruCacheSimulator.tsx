import { useState, useCallback, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { RotateCcw, Play } from "lucide-react";

interface CacheItem { key: string; value: string; order: number }

export function LruCacheSimulator() {
  const [capacity, setCapacity] = useState(4);
  const [cache, setCache] = useState<CacheItem[]>([]);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [highlight, setHighlight] = useState<string | null>(null);
  const orderRef = useRef(0);

  const access = useCallback(() => {
    if (!key.trim()) return;
    const val = value || `v${key}`;
    setCache((prev) => {
      const existing = prev.find((i) => i.key === key);
      orderRef.current++;
      if (existing) {
        setLog((l) => [`HIT: "${key}" → moved to front`, ...l.slice(0, 19)]);
        setHighlight(key);
        return prev.map((i) => i.key === key ? { ...i, value: val, order: orderRef.current } : i).sort((a, b) => b.order - a.order);
      }
      let next = [{ key, value: val, order: orderRef.current }, ...prev].sort((a, b) => b.order - a.order);
      if (next.length > capacity) {
        const evicted = next[next.length - 1];
        next = next.slice(0, capacity);
        setLog((l) => [`MISS+EVICT: "${key}" added, "${evicted.key}" evicted`, ...l.slice(0, 19)]);
      } else {
        setLog((l) => [`MISS: "${key}" added to cache`, ...l.slice(0, 19)]);
      }
      setHighlight(key);
      return next;
    });
    setKey("");
    setValue("");
  }, [key, value, capacity]);

  useEffect(() => {
    if (highlight) { const t = setTimeout(() => setHighlight(null), 800); return () => clearTimeout(t); }
  }, [highlight]);

  const reset = () => { setCache([]); setLog([]); orderRef.current = 0; };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-xs text-[hsl(0,0%,50%)]">Capacity:</span>
        <Slider value={[capacity]} onValueChange={([v]) => { setCapacity(v); reset(); }} min={2} max={8} step={1} className="w-32" />
        <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{capacity}</span>
      </div>
      <div className="flex gap-2">
        <Input placeholder="Key" value={key} onChange={(e) => setKey(e.target.value)}
          className="flex-1 bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
          onKeyDown={(e) => e.key === "Enter" && access()} />
        <Input placeholder="Value (optional)" value={value} onChange={(e) => setValue(e.target.value)}
          className="flex-1 bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
          onKeyDown={(e) => e.key === "Enter" && access()} />
        <Button onClick={access} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white"><Play className="h-4 w-4" /></Button>
        <Button onClick={reset} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
      </div>

      {/* Visual Cache */}
      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
        <p className="text-xs text-[hsl(0,0%,45%)] mb-3">Cache State (MRU → LRU)</p>
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: capacity }).map((_, i) => {
            const item = cache[i];
            return (
              <div key={i} className={`w-20 h-20 rounded-lg border-2 flex flex-col items-center justify-center transition-all duration-300 ${
                item
                  ? highlight === item.key
                    ? "border-[hsl(140,60%,50%)] bg-[hsl(140,30%,12%)] scale-110"
                    : "border-[hsl(250,40%,35%)] bg-[hsl(250,20%,12%)]"
                  : "border-[hsl(230,20%,18%)] border-dashed bg-[hsl(230,25%,6%)]"
              }`}>
                {item ? (
                  <>
                    <span className="text-xs font-mono font-bold text-[hsl(40,80%,70%)]">{item.key}</span>
                    <span className="text-[10px] font-mono text-[hsl(0,0%,50%)] mt-0.5">{item.value}</span>
                  </>
                ) : (
                  <span className="text-xs text-[hsl(0,0%,25%)]">empty</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Log */}
      {log.length > 0 && (
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 max-h-[150px] overflow-y-auto">
          {log.map((entry, i) => (
            <p key={i} className={`text-xs font-mono py-0.5 ${
              entry.startsWith("HIT") ? "text-[hsl(140,60%,60%)]" :
              entry.startsWith("MISS+EVICT") ? "text-[hsl(0,60%,60%)]" :
              "text-[hsl(40,60%,60%)]"
            }`}>{entry}</p>
          ))}
        </div>
      )}
    </div>
  );
}
