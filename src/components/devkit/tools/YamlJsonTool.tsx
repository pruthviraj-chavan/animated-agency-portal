import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check } from "lucide-react";

function jsonToYaml(obj: any, indent = 0): string {
  const pad = "  ".repeat(indent);
  if (obj === null) return "null";
  if (typeof obj === "boolean" || typeof obj === "number") return String(obj);
  if (typeof obj === "string") return obj.includes(":") || obj.includes("#") ? `"${obj}"` : obj;
  if (Array.isArray(obj)) return obj.map((v) => `${pad}- ${jsonToYaml(v, indent + 1).trimStart()}`).join("\n");
  if (typeof obj === "object") {
    return Object.entries(obj)
      .map(([k, v]) => {
        const val = jsonToYaml(v, indent + 1);
        return typeof v === "object" && v !== null ? `${pad}${k}:\n${val}` : `${pad}${k}: ${val}`;
      })
      .join("\n");
  }
  return String(obj);
}

function yamlToJson(yaml: string): any {
  const lines = yaml.split("\n").filter((l) => l.trim() && !l.trim().startsWith("#"));
  const result: any = {};
  let currentKey = "";
  for (const line of lines) {
    const match = line.match(/^(\s*)(\w[\w\s]*?):\s*(.*)/);
    if (match) {
      const [, , key, value] = match;
      if (value) {
        let parsed: any = value;
        if (value === "true") parsed = true;
        else if (value === "false") parsed = false;
        else if (value === "null") parsed = null;
        else if (!isNaN(Number(value))) parsed = Number(value);
        else parsed = value.replace(/^["']|["']$/g, "");
        result[key.trim()] = parsed;
      } else {
        currentKey = key.trim();
        result[currentKey] = {};
      }
    }
  }
  return result;
}

export function YamlJsonTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const toYaml = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(jsonToYaml(parsed));
      setError("");
    } catch (e: any) { setError(e.message); }
  };

  const toJson = () => {
    try {
      const parsed = yamlToJson(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e: any) { setError(e.message); }
  };

  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1200); };

  return (
    <div className="space-y-4">
      <Textarea placeholder="Paste JSON or YAML..." value={input} onChange={(e) => setInput(e.target.value)}
        className="min-h-[150px] bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm" />
      <div className="flex gap-2">
        <Button onClick={toYaml} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">JSON → YAML</Button>
        <Button onClick={toJson} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(230,20%,15%)]">YAML → JSON</Button>
      </div>
      {error && <p className="text-[hsl(0,70%,60%)] text-sm font-mono">{error}</p>}
      {output && (
        <div className="relative">
          <pre className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4 text-sm text-[hsl(50,60%,70%)] font-mono overflow-x-auto max-h-[300px]">{output}</pre>
          <Button size="icon" variant="ghost" onClick={copy} className="absolute top-2 right-2 text-[hsl(0,0%,60%)] hover:text-white">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      )}
    </div>
  );
}
