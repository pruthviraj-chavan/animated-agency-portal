import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FIELDS = [
  { name: "Minute", range: "0-59", specials: ", - * /" },
  { name: "Hour", range: "0-23", specials: ", - * /" },
  { name: "Day of Month", range: "1-31", specials: ", - * / L W" },
  { name: "Month", range: "1-12", specials: ", - * /" },
  { name: "Day of Week", range: "0-6", specials: ", - * / L #" },
];

function describeCronField(val: string, field: string): string {
  if (val === "*") return `every ${field.toLowerCase()}`;
  if (val.includes("/")) { const [, step] = val.split("/"); return `every ${step} ${field.toLowerCase()}(s)`; }
  if (val.includes(",")) return `${field.toLowerCase()} ${val}`;
  if (val.includes("-")) { const [a, b] = val.split("-"); return `${field.toLowerCase()} ${a} through ${b}`; }
  return `at ${field.toLowerCase()} ${val}`;
}

export function CronParserTool() {
  const [expression, setExpression] = useState("*/5 * * * *");

  const parts = expression.trim().split(/\s+/);
  const isValid = parts.length === 5;

  const descriptions = isValid ? parts.map((p, i) => describeCronField(p, FIELDS[i].name)) : [];

  return (
    <div className="space-y-4">
      <Input
        placeholder="*/5 * * * *"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        className="bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-lg text-center h-14 tracking-widest"
      />
      {isValid && (
        <>
          <div className="grid grid-cols-5 gap-1">
            {FIELDS.map((f, i) => (
              <div key={f.name} className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-2 text-center">
                <p className="text-lg font-mono font-bold text-[hsl(250,60%,70%)]">{parts[i]}</p>
                <p className="text-[10px] text-[hsl(0,0%,50%)] mt-1">{f.name}</p>
                <p className="text-[9px] text-[hsl(0,0%,35%)]">{f.range}</p>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
            <p className="text-xs font-semibold text-[hsl(250,60%,70%)] mb-2">Human-readable</p>
            <p className="text-sm text-[hsl(0,0%,75%)]">
              Runs {descriptions.join(", ")}
            </p>
          </div>
        </>
      )}
      {!isValid && expression.trim() && (
        <p className="text-[hsl(0,70%,60%)] text-sm">Invalid cron expression. Expected 5 fields separated by spaces.</p>
      )}
      <div className="flex flex-wrap gap-2">
        {["* * * * *", "*/5 * * * *", "0 * * * *", "0 0 * * *", "0 0 * * 0", "0 0 1 * *"].map((preset) => (
          <Button key={preset} size="sm" variant="outline" onClick={() => setExpression(preset)}
            className="text-xs font-mono border-[hsl(230,20%,22%)] text-[hsl(0,0%,60%)] hover:bg-[hsl(230,20%,15%)]">{preset}</Button>
        ))}
      </div>
    </div>
  );
}
