import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check } from "lucide-react";

export function JsonFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e: any) {
      setError(e.message);
      setOutput("");
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
        placeholder="Paste your JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-h-[150px] bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm"
      />
      <div className="flex gap-2">
        <Button onClick={format} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">Format</Button>
        <Button onClick={minify} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(230,20%,15%)]">Minify</Button>
      </div>
      {error && <p className="text-[hsl(0,70%,60%)] text-sm font-mono">{error}</p>}
      {output && (
        <div className="relative">
          <pre className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4 text-sm text-[hsl(140,60%,70%)] font-mono overflow-x-auto max-h-[300px]">{output}</pre>
          <Button size="icon" variant="ghost" onClick={copy} className="absolute top-2 right-2 text-[hsl(0,0%,60%)] hover:text-white">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      )}
    </div>
  );
}
