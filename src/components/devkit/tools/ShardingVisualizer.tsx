import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { RotateCcw } from "lucide-react";

type Strategy = "hash" | "range" | "directory";

const SHARD_COLORS = ["hsl(200,70%,55%)", "hsl(140,60%,50%)", "hsl(40,80%,55%)", "hsl(280,60%,60%)", "hsl(0,60%,55%)", "hsl(320,60%,55%)"];

function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const SAMPLE_KEYS = ["user_1", "user_2", "user_50", "user_100", "user_200", "user_350", "user_500", "user_750", "user_999", "order_42", "order_100", "order_500", "product_1", "product_200", "session_abc", "session_xyz"];

const DIRECTORY: Record<string, number> = { user: 0, order: 1, product: 2, session: 3 };

export function ShardingVisualizer() {
  const [strategy, setStrategy] = useState<Strategy>("hash");
  const [numShards, setNumShards] = useState(4);

  const distribution = useMemo(() => {
    const shards: string[][] = Array.from({ length: numShards }, () => []);
    SAMPLE_KEYS.forEach(key => {
      let idx: number;
      if (strategy === "hash") {
        idx = hashCode(key) % numShards;
      } else if (strategy === "range") {
        const num = parseInt(key.replace(/\D/g, "")) || 0;
        idx = Math.min(Math.floor(num / (1000 / numShards)), numShards - 1);
      } else {
        const prefix = key.split("_")[0];
        idx = (DIRECTORY[prefix] ?? 0) % numShards;
      }
      shards[idx].push(key);
    });
    return shards;
  }, [strategy, numShards]);

  const maxCount = Math.max(...distribution.map(s => s.length), 1);
  const isBalanced = distribution.every(s => Math.abs(s.length - SAMPLE_KEYS.length / numShards) <= 2);

  return (
    <div className="space-y-4">
      <div className="flex gap-3 flex-wrap items-center">
        <Select value={strategy} onValueChange={(v) => setStrategy(v as Strategy)}>
          <SelectTrigger className="w-[160px] bg-[hsl(230,25%,10%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] text-xs"><SelectValue /></SelectTrigger>
          <SelectContent className="bg-[hsl(230,25%,12%)] border-[hsl(230,20%,20%)]">
            <SelectItem value="hash" className="text-[hsl(0,0%,85%)] text-xs">Hash Sharding</SelectItem>
            <SelectItem value="range" className="text-[hsl(0,0%,85%)] text-xs">Range Sharding</SelectItem>
            <SelectItem value="directory" className="text-[hsl(0,0%,85%)] text-xs">Directory-Based</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[hsl(0,0%,50%)]">Shards:</span>
          <Slider value={[numShards]} onValueChange={([v]) => setNumShards(v)} min={2} max={6} step={1} className="w-20" />
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{numShards}</span>
        </div>
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4 space-y-3">
        {distribution.map((shard, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xs font-bold w-20" style={{ color: SHARD_COLORS[i % SHARD_COLORS.length] }}>Shard {i}</span>
            <div className="flex-1 flex items-center gap-1">
              <div className="h-5 rounded transition-all" style={{
                width: `${(shard.length / maxCount) * 100}%`,
                backgroundColor: SHARD_COLORS[i % SHARD_COLORS.length],
                opacity: 0.6,
                minWidth: shard.length > 0 ? 8 : 0,
              }} />
              <span className="text-[10px] text-[hsl(0,0%,50%)] font-mono">{shard.length}</span>
            </div>
          </div>
        ))}
        <div className={`text-xs font-bold ${isBalanced ? "text-[hsl(140,60%,55%)]" : "text-[hsl(40,80%,55%)]"}`}>
          {isBalanced ? "✓ Well-balanced distribution" : "⚠ Uneven distribution — hot partitions detected"}
        </div>
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3">
        <p className="text-[10px] text-[hsl(0,0%,45%)] mb-2">Key → Shard mapping</p>
        <div className="flex flex-wrap gap-1">
          {SAMPLE_KEYS.map(key => {
            let idx: number;
            if (strategy === "hash") idx = hashCode(key) % numShards;
            else if (strategy === "range") { const num = parseInt(key.replace(/\D/g, "")) || 0; idx = Math.min(Math.floor(num / (1000 / numShards)), numShards - 1); }
            else { const prefix = key.split("_")[0]; idx = (DIRECTORY[prefix] ?? 0) % numShards; }
            return (
              <span key={key} className="text-[9px] font-mono px-1.5 py-0.5 rounded" style={{
                backgroundColor: `${SHARD_COLORS[idx % SHARD_COLORS.length]}20`,
                color: SHARD_COLORS[idx % SHARD_COLORS.length],
              }}>
                {key}→S{idx}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
