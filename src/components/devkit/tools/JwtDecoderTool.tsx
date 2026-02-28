import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function decodeJwt(token: string) {
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("Invalid JWT: must have 3 parts");
  const decode = (s: string) => {
    const padded = s.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(padded));
  };
  return { header: decode(parts[0]), payload: decode(parts[1]), signature: parts[2] };
}

export function JwtDecoderTool() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ header: any; payload: any; signature: string } | null>(null);
  const [error, setError] = useState("");

  const decode = () => {
    try {
      setResult(decodeJwt(input.trim()));
      setError("");
    } catch (e: any) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Paste your JWT token here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-h-[80px] bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
      />
      <Button onClick={decode} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">Decode</Button>
      {error && <p className="text-[hsl(0,70%,60%)] text-sm">{error}</p>}
      {result && (
        <div className="space-y-3">
          {[
            { label: "Header", data: result.header, color: "hsl(0,70%,70%)" },
            { label: "Payload", data: result.payload, color: "hsl(250,70%,70%)" },
          ].map((section) => (
            <div key={section.label} className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3">
              <span className="text-xs font-bold" style={{ color: section.color }}>{section.label}</span>
              <pre className="text-xs font-mono text-[hsl(0,0%,75%)] mt-1 overflow-x-auto">{JSON.stringify(section.data, null, 2)}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
