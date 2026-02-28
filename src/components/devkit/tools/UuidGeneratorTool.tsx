import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, RefreshCw } from "lucide-react";

function generateUUID() {
  return crypto.randomUUID();
}

export function UuidGeneratorTool() {
  const [uuids, setUuids] = useState<string[]>([generateUUID()]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const addUuid = () => setUuids((prev) => [generateUUID(), ...prev]);
  const bulkGenerate = () => setUuids(Array.from({ length: 10 }, () => generateUUID()));

  const copy = (uuid: string, idx: number) => {
    navigator.clipboard.writeText(uuid);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={addUuid} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">
          <RefreshCw className="h-4 w-4 mr-2" /> Generate UUID
        </Button>
        <Button onClick={bulkGenerate} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(230,20%,15%)]">
          Bulk (10)
        </Button>
      </div>
      <div className="space-y-2 max-h-[350px] overflow-y-auto">
        {uuids.map((uuid, i) => (
          <div key={i} className="flex items-center gap-2 bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg px-4 py-2.5">
            <code className="flex-1 text-sm font-mono text-[hsl(40,80%,70%)]">{uuid}</code>
            <Button size="icon" variant="ghost" onClick={() => copy(uuid, i)} className="text-[hsl(0,0%,60%)] hover:text-white shrink-0">
              {copiedIdx === i ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
