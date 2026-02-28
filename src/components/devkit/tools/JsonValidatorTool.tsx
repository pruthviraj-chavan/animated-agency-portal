import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Check, X } from "lucide-react";

export function JsonValidatorTool() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ valid: boolean; error?: string; info?: string } | null>(null);

  const validate = () => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      const type = Array.isArray(parsed) ? "Array" : typeof parsed;
      const keys = typeof parsed === "object" && parsed !== null ? Object.keys(parsed).length : 0;
      setResult({ valid: true, info: `Type: ${type} | ${Array.isArray(parsed) ? `${parsed.length} items` : `${keys} keys`}` });
    } catch (e: any) {
      const match = e.message.match(/position (\d+)/);
      setResult({ valid: false, error: e.message, info: match ? `Error near character ${match[1]}` : undefined });
    }
  };

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Paste JSON to validate..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-h-[180px] bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
      />
      <Button onClick={validate} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">Validate</Button>
      {result && (
        <div className={`flex items-start gap-3 p-4 rounded-lg border ${result.valid ? "bg-[hsl(140,30%,10%)] border-[hsl(140,40%,25%)]" : "bg-[hsl(0,30%,10%)] border-[hsl(0,40%,25%)]"}`}>
          {result.valid ? <Check className="h-5 w-5 text-[hsl(140,60%,60%)] shrink-0 mt-0.5" /> : <X className="h-5 w-5 text-[hsl(0,60%,60%)] shrink-0 mt-0.5" />}
          <div>
            <p className={`text-sm font-semibold ${result.valid ? "text-[hsl(140,60%,70%)]" : "text-[hsl(0,60%,70%)]"}`}>
              {result.valid ? "Valid JSON ✓" : "Invalid JSON ✗"}
            </p>
            {result.error && <p className="text-xs text-[hsl(0,50%,60%)] mt-1 font-mono">{result.error}</p>}
            {result.info && <p className="text-xs text-[hsl(0,0%,50%)] mt-1">{result.info}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
