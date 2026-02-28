import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check, Plus, Trash2 } from "lucide-react";

interface Header { key: string; value: string }

export function CurlBuilderTool() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState<Header[]>([{ key: "", value: "" }]);
  const [body, setBody] = useState("");
  const [copied, setCopied] = useState(false);

  const addHeader = () => setHeaders([...headers, { key: "", value: "" }]);
  const removeHeader = (i: number) => setHeaders(headers.filter((_, idx) => idx !== i));
  const updateHeader = (i: number, field: "key" | "value", val: string) => {
    const next = [...headers]; next[i][field] = val; setHeaders(next);
  };

  const buildCurl = () => {
    let cmd = `curl -X ${method}`;
    headers.filter((h) => h.key && h.value).forEach((h) => { cmd += ` \\\n  -H "${h.key}: ${h.value}"`; });
    if (body && ["POST", "PUT", "PATCH"].includes(method)) cmd += ` \\\n  -d '${body}'`;
    cmd += ` \\\n  "${url}"`;
    return cmd;
  };

  const copy = () => { navigator.clipboard.writeText(buildCurl()); setCopied(true); setTimeout(() => setCopied(false), 1200); };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Select value={method} onValueChange={setMethod}>
          <SelectTrigger className="w-28 bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[hsl(230,25%,12%)] border-[hsl(230,20%,20%)]">
            {["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].map((m) => (
              <SelectItem key={m} value={m} className="text-[hsl(0,0%,85%)]">{m}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input placeholder="https://api.example.com/endpoint" value={url} onChange={(e) => setUrl(e.target.value)}
          className="flex-1 bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[hsl(250,60%,70%)]">Headers</span>
          <Button size="sm" variant="ghost" onClick={addHeader} className="text-[hsl(0,0%,60%)] hover:text-white h-6"><Plus className="h-3 w-3 mr-1" />Add</Button>
        </div>
        {headers.map((h, i) => (
          <div key={i} className="flex gap-2">
            <Input placeholder="Key" value={h.key} onChange={(e) => updateHeader(i, "key", e.target.value)}
              className="flex-1 bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-xs h-8" />
            <Input placeholder="Value" value={h.value} onChange={(e) => updateHeader(i, "value", e.target.value)}
              className="flex-1 bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-xs h-8" />
            <Button size="icon" variant="ghost" onClick={() => removeHeader(i)} className="h-8 w-8 text-[hsl(0,0%,40%)] hover:text-[hsl(0,60%,60%)]"><Trash2 className="h-3 w-3" /></Button>
          </div>
        ))}
      </div>
      {["POST","PUT","PATCH"].includes(method) && (
        <Textarea placeholder='{"key": "value"}' value={body} onChange={(e) => setBody(e.target.value)}
          className="min-h-[80px] bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm" />
      )}
      {url && (
        <div className="relative">
          <pre className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4 text-sm text-[hsl(30,70%,70%)] font-mono overflow-x-auto">{buildCurl()}</pre>
          <Button size="icon" variant="ghost" onClick={copy} className="absolute top-2 right-2 text-[hsl(0,0%,60%)] hover:text-white">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      )}
    </div>
  );
}
