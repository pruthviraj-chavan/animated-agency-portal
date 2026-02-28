import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function RegexTesterTool() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("gi");
  const [testString, setTestString] = useState("");

  const matches = useMemo(() => {
    if (!pattern || !testString) return [];
    try {
      const regex = new RegExp(pattern, flags);
      const results: { match: string; index: number; groups?: Record<string, string> }[] = [];
      let m;
      if (flags.includes("g")) {
        while ((m = regex.exec(testString)) !== null) {
          results.push({ match: m[0], index: m.index, groups: m.groups });
          if (!m[0]) break;
        }
      } else {
        m = regex.exec(testString);
        if (m) results.push({ match: m[0], index: m.index, groups: m.groups });
      }
      return results;
    } catch {
      return [];
    }
  }, [pattern, flags, testString]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Regex pattern (e.g. \\d+)"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          className="flex-1 bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
        />
        <Input
          placeholder="Flags"
          value={flags}
          onChange={(e) => setFlags(e.target.value)}
          className="w-20 bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
        />
      </div>
      <Textarea
        placeholder="Enter test string..."
        value={testString}
        onChange={(e) => setTestString(e.target.value)}
        className="min-h-[120px] bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
      />
      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
        <p className="text-xs font-semibold text-[hsl(250,60%,70%)] mb-2">{matches.length} match{matches.length !== 1 ? "es" : ""} found</p>
        {matches.length > 0 ? (
          <div className="space-y-1.5 max-h-[200px] overflow-y-auto">
            {matches.map((m, i) => (
              <div key={i} className="flex items-center gap-3 text-xs font-mono">
                <span className="text-[hsl(0,0%,50%)]">#{i + 1}</span>
                <span className="text-[hsl(140,60%,70%)] bg-[hsl(140,40%,15%)] px-2 py-0.5 rounded">{m.match}</span>
                <span className="text-[hsl(0,0%,45%)]">@{m.index}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-[hsl(0,0%,45%)]">No matches yet</p>
        )}
      </div>
    </div>
  );
}
