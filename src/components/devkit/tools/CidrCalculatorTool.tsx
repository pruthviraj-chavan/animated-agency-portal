import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function parseCIDR(cidr: string) {
  const [ip, prefix] = cidr.split("/");
  const prefixLen = parseInt(prefix);
  if (!ip || isNaN(prefixLen) || prefixLen < 0 || prefixLen > 32) throw new Error("Invalid CIDR");
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some((p) => isNaN(p) || p < 0 || p > 255)) throw new Error("Invalid IP");
  const ipNum = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
  const mask = prefixLen === 0 ? 0 : (~0 << (32 - prefixLen)) >>> 0;
  const network = (ipNum & mask) >>> 0;
  const broadcast = (network | ~mask) >>> 0;
  const toIP = (n: number) => `${(n >>> 24) & 255}.${(n >>> 16) & 255}.${(n >>> 8) & 255}.${n & 255}`;
  const totalHosts = Math.pow(2, 32 - prefixLen);
  const usableHosts = totalHosts > 2 ? totalHosts - 2 : totalHosts;
  return {
    network: toIP(network),
    broadcast: toIP(broadcast),
    firstUsable: toIP((network + 1) >>> 0),
    lastUsable: toIP((broadcast - 1) >>> 0),
    subnetMask: toIP(mask),
    totalHosts,
    usableHosts,
    prefixLen,
  };
}

export function CidrCalculatorTool() {
  const [input, setInput] = useState("192.168.1.0/24");
  const [result, setResult] = useState<ReturnType<typeof parseCIDR> | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    try { setResult(parseCIDR(input)); setError(""); } catch (e: any) { setError(e.message); setResult(null); }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input placeholder="192.168.1.0/24" value={input} onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-[hsl(230,25%,8%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] font-mono text-sm" />
        <Button onClick={calculate} className="bg-[hsl(250,80%,60%)] hover:bg-[hsl(250,80%,50%)] text-white">Calculate</Button>
      </div>
      {error && <p className="text-[hsl(0,70%,60%)] text-sm">{error}</p>}
      {result && (
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Network", value: result.network },
            { label: "Broadcast", value: result.broadcast },
            { label: "First Usable", value: result.firstUsable },
            { label: "Last Usable", value: result.lastUsable },
            { label: "Subnet Mask", value: result.subnetMask },
            { label: "Prefix Length", value: `/${result.prefixLen}` },
            { label: "Total Hosts", value: result.totalHosts.toLocaleString() },
            { label: "Usable Hosts", value: result.usableHosts.toLocaleString() },
          ].map((item) => (
            <div key={item.label} className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3">
              <p className="text-[10px] text-[hsl(0,0%,45%)]">{item.label}</p>
              <p className="text-sm font-mono text-[hsl(180,60%,70%)] font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
