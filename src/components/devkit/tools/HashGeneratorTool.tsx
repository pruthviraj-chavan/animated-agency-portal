import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check } from "lucide-react";

async function hashText(text: string, algo: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algo, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function HashGeneratorTool() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<{ algo: string; hash: string }[]>([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const generate = async () => {
    if (!input) return;
    const algos = [
      { name: "SHA-1", id: "SHA-1" },
      { name: "SHA-256", id: "SHA-256" },
      { name: "SHA-384", id: "SHA-384" },
      { name: "SHA-512", id: "SHA-512" },
    ];
    const hashes = await Promise.all(
      algos.map(async (a) => ({ algo: a.name, hash: await hashText(input, a.id) }))
    );
    setResults(hashes);
  };

  const copy = (hash: string, idx: number) => {
    navigator.clipboard.writeText(hash);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter text to hash..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-h-[100px] bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
      />
      <Button onClick={generate} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">Generate Hashes</Button>
      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((r, i) => (
            <div key={i} className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-[hsl(250,60%,70%)]">{r.algo}</span>
                <Button size="icon" variant="ghost" onClick={() => copy(r.hash, i)} className="h-6 w-6 text-[hsl(0,0%,60%)] hover:text-white">
                  {copiedIdx === i ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </Button>
              </div>
              <code className="text-xs font-mono text-[hsl(0,0%,70%)] break-all">{r.hash}</code>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
