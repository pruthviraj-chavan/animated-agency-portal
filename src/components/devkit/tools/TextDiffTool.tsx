import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function TextDiffTool() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [diff, setDiff] = useState<{ type: "same" | "add" | "remove"; text: string }[]>([]);

  const compare = () => {
    const linesA = textA.split("\n");
    const linesB = textB.split("\n");
    const maxLen = Math.max(linesA.length, linesB.length);
    const result: { type: "same" | "add" | "remove"; text: string }[] = [];
    for (let i = 0; i < maxLen; i++) {
      const a = linesA[i];
      const b = linesB[i];
      if (a === b) result.push({ type: "same", text: a || "" });
      else {
        if (a !== undefined) result.push({ type: "remove", text: a });
        if (b !== undefined) result.push({ type: "add", text: b });
      }
    }
    setDiff(result);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold text-[hsl(250,60%,70%)] mb-1 block">Original</label>
          <Textarea placeholder="Original text..." value={textA} onChange={(e) => setTextA(e.target.value)}
            className="min-h-[140px] bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-[hsl(250,60%,70%)] mb-1 block">Modified</label>
          <Textarea placeholder="Modified text..." value={textB} onChange={(e) => setTextB(e.target.value)}
            className="min-h-[140px] bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm" />
        </div>
      </div>
      <Button onClick={compare} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">Compare</Button>
      {diff.length > 0 && (
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 max-h-[300px] overflow-y-auto font-mono text-xs">
          {diff.map((d, i) => (
            <div key={i} className={`px-2 py-0.5 rounded-sm ${
              d.type === "add" ? "bg-[hsl(140,30%,12%)] text-[hsl(140,60%,70%)]" :
              d.type === "remove" ? "bg-[hsl(0,30%,12%)] text-[hsl(0,60%,70%)] line-through" :
              "text-[hsl(0,0%,55%)]"
            }`}>
              <span className="inline-block w-4 mr-2 text-[hsl(0,0%,35%)]">{d.type === "add" ? "+" : d.type === "remove" ? "-" : " "}</span>
              {d.text || " "}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
