import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check } from "lucide-react";

export function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const encode = () => {
    try {
      setOutput(btoa(input));
      setError("");
    } catch {
      setError("Invalid input for encoding");
    }
  };

  const decode = () => {
    try {
      setOutput(atob(input));
      setError("");
    } catch {
      setError("Invalid Base64 string");
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter text to encode or Base64 to decode..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-h-[120px] bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
      />
      <div className="flex gap-2">
        <Button onClick={encode} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">Encode</Button>
        <Button onClick={decode} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(230,20%,15%)]">Decode</Button>
      </div>
      {error && <p className="text-[hsl(0,70%,60%)] text-sm">{error}</p>}
      {output && (
        <div className="relative">
          <pre className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4 text-sm text-[hsl(170,60%,70%)] font-mono break-all whitespace-pre-wrap">{output}</pre>
          <Button size="icon" variant="ghost" onClick={copy} className="absolute top-2 right-2 text-[hsl(0,0%,60%)] hover:text-white">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      )}
    </div>
  );
}
