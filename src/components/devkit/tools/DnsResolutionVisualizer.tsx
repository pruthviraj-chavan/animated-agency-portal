import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RotateCcw } from "lucide-react";

const STEPS = (domain: string) => [
  { from: "Browser", to: "Local Cache", label: "Check browser cache", detail: `Looking for ${domain} in local DNS cache...`, result: "MISS", delay: "0ms" },
  { from: "Browser", to: "OS Resolver", label: "Check /etc/hosts", detail: `Checking OS-level DNS cache and hosts file...`, result: "MISS", delay: "1ms" },
  { from: "OS Resolver", to: "Recursive Resolver", label: "Query ISP DNS", detail: `Sending query to recursive resolver (e.g., 8.8.8.8)...`, result: "MISS", delay: "5ms" },
  { from: "Recursive Resolver", to: "Root Server", label: "Query root (.):", detail: `"I don't know ${domain}, but try .${domain.split('.').pop()} TLD server"`, result: "REFERRAL", delay: "15ms" },
  { from: "Recursive Resolver", to: "TLD Server", label: `Query .${domain.split('.').pop()} TLD`, detail: `"I don't know ${domain}, but try NS: ns1.${domain.split('.').slice(-2).join('.')}"`, result: "REFERRAL", delay: "25ms" },
  { from: "Recursive Resolver", to: "Auth NS", label: "Query authoritative NS", detail: `"${domain} → A record: 93.184.216.34, TTL: 300s"`, result: "ANSWER", delay: "35ms" },
  { from: "Recursive Resolver", to: "Browser", label: "Return IP + cache", detail: `Caching result (TTL=300s). Returning 93.184.216.34 to browser.`, result: "RESOLVED", delay: "36ms" },
];

const RESULT_COLORS: Record<string, string> = {
  MISS: "hsl(40,80%,55%)", REFERRAL: "hsl(280,60%,60%)", ANSWER: "hsl(140,60%,50%)", RESOLVED: "hsl(200,70%,55%)",
};

export function DnsResolutionVisualizer() {
  const [domain, setDomain] = useState("example.com");
  const [step, setStep] = useState(-1);
  const steps = STEPS(domain);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input value={domain} onChange={e => { setDomain(e.target.value); setStep(-1); }}
          placeholder="Enter domain..." className="bg-[hsl(230,25%,10%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] text-xs font-mono" />
      </div>

      <div className="space-y-2 max-h-[280px] overflow-y-auto">
        {steps.map((s, i) => (
          <div key={i}
            className={`p-3 rounded-lg border transition-all cursor-pointer ${i <= step ? "bg-[hsl(230,25%,12%)] border-[hsl(250,40%,35%)]" : "bg-[hsl(230,25%,8%)] border-[hsl(230,20%,16%)] opacity-30"}`}
            onClick={() => setStep(i)}>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[hsl(200,70%,60%)] font-bold">{s.from}</span>
              <span className="text-[hsl(0,0%,35%)]">→</span>
              <span className="text-[hsl(140,60%,60%)] font-bold">{s.to}</span>
              <span className="ml-auto text-[hsl(0,0%,60%)]">{s.label}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{
                backgroundColor: `${RESULT_COLORS[s.result]}20`, color: RESULT_COLORS[s.result],
              }}>{s.result}</span>
            </div>
            {i <= step && (
              <div className="mt-1 flex justify-between">
                <p className="text-[10px] text-[hsl(0,0%,50%)] font-mono">{s.detail}</p>
                <span className="text-[10px] text-[hsl(0,0%,40%)]">{s.delay}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setStep(s => Math.min(s + 1, steps.length - 1))} className="bg-[hsl(250,50%,45%)] hover:bg-[hsl(250,50%,40%)] text-white text-xs">
          {step < 0 ? "Start Resolution" : step < steps.length - 1 ? "Next Hop" : "Complete ✓"}
        </Button>
        <Button onClick={() => setStep(steps.length - 1)} variant="outline" size="sm" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)] text-xs">Show All</Button>
        <Button onClick={() => setStep(-1)} variant="outline" size="sm" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}
