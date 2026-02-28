import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RotateCcw } from "lucide-react";

type FlowType = "auth_code" | "pkce" | "client_creds" | "implicit";

const FLOWS: Record<FlowType, { name: string; steps: { from: string; to: string; label: string; detail: string }[] }> = {
  auth_code: {
    name: "Authorization Code",
    steps: [
      { from: "Client", to: "Auth Server", label: "1. Authorization Request", detail: "GET /authorize?response_type=code&client_id=...&redirect_uri=..." },
      { from: "Auth Server", to: "User", label: "2. Login Prompt", detail: "User authenticates and consents" },
      { from: "Auth Server", to: "Client", label: "3. Authorization Code", detail: "302 Redirect → redirect_uri?code=AUTH_CODE" },
      { from: "Client", to: "Auth Server", label: "4. Token Exchange", detail: "POST /token { code, client_id, client_secret }" },
      { from: "Auth Server", to: "Client", label: "5. Access Token", detail: "{ access_token, refresh_token, expires_in }" },
      { from: "Client", to: "Resource", label: "6. API Request", detail: "GET /api/data  Authorization: Bearer <token>" },
    ],
  },
  pkce: {
    name: "Authorization Code + PKCE",
    steps: [
      { from: "Client", to: "Client", label: "1. Generate PKCE", detail: "code_verifier = random(43-128 chars), code_challenge = SHA256(verifier)" },
      { from: "Client", to: "Auth Server", label: "2. Auth Request + Challenge", detail: "GET /authorize?code_challenge=...&code_challenge_method=S256" },
      { from: "Auth Server", to: "User", label: "3. Login Prompt", detail: "User authenticates" },
      { from: "Auth Server", to: "Client", label: "4. Authorization Code", detail: "302 Redirect → redirect_uri?code=AUTH_CODE" },
      { from: "Client", to: "Auth Server", label: "5. Token + Verifier", detail: "POST /token { code, code_verifier } (no client_secret needed!)" },
      { from: "Auth Server", to: "Client", label: "6. Access Token", detail: "Server verifies: SHA256(code_verifier) == code_challenge" },
    ],
  },
  client_creds: {
    name: "Client Credentials",
    steps: [
      { from: "Client", to: "Auth Server", label: "1. Token Request", detail: "POST /token { grant_type=client_credentials, client_id, client_secret }" },
      { from: "Auth Server", to: "Client", label: "2. Access Token", detail: "{ access_token, expires_in } (no user context)" },
      { from: "Client", to: "Resource", label: "3. API Request", detail: "GET /api/data  Authorization: Bearer <token>" },
    ],
  },
  implicit: {
    name: "Implicit (Legacy)",
    steps: [
      { from: "Client", to: "Auth Server", label: "1. Auth Request", detail: "GET /authorize?response_type=token (⚠️ token in URL fragment)" },
      { from: "Auth Server", to: "User", label: "2. Login Prompt", detail: "User authenticates" },
      { from: "Auth Server", to: "Client", label: "3. Access Token", detail: "302 → redirect_uri#access_token=... (⚠️ exposed in browser history)" },
    ],
  },
};

const ACTORS_COLORS: Record<string, string> = {
  Client: "hsl(200,70%,55%)", "Auth Server": "hsl(280,60%,60%)", User: "hsl(140,60%,50%)", Resource: "hsl(40,80%,55%)",
};

export function OAuthFlowSimulator() {
  const [flow, setFlow] = useState<FlowType>("auth_code");
  const [step, setStep] = useState(-1);
  const current = FLOWS[flow];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center flex-wrap">
        <Select value={flow} onValueChange={(v) => { setFlow(v as FlowType); setStep(-1); }}>
          <SelectTrigger className="w-[220px] bg-[hsl(230,25%,10%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[hsl(230,25%,12%)] border-[hsl(230,20%,20%)]">
            {Object.entries(FLOWS).map(([k, v]) => (
              <SelectItem key={k} value={k} className="text-[hsl(0,0%,85%)]">{v.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={() => setStep(-1)} variant="outline" size="sm" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]"><RotateCcw className="h-4 w-4" /></Button>
      </div>

      <div className="flex gap-3 justify-center flex-wrap">
        {Object.entries(ACTORS_COLORS).map(([name, color]) => (
          <div key={name} className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-[10px] font-bold" style={{ borderColor: color, color }}>
              {name.split(" ")[0]}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2 max-h-[250px] overflow-y-auto">
        {current.steps.map((s, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg border transition-all cursor-pointer ${i <= step ? "bg-[hsl(230,25%,12%)] border-[hsl(250,40%,35%)]" : "bg-[hsl(230,25%,8%)] border-[hsl(230,20%,16%)] opacity-40"}`}
            onClick={() => setStep(i)}
          >
            <div className="flex items-center gap-2 text-xs">
              <span style={{ color: ACTORS_COLORS[s.from] }} className="font-bold">{s.from}</span>
              <span className="text-[hsl(0,0%,35%)]">→</span>
              <span style={{ color: ACTORS_COLORS[s.to] }} className="font-bold">{s.to}</span>
              <span className="text-[hsl(0,0%,70%)] font-semibold ml-auto">{s.label}</span>
            </div>
            {i <= step && <p className="text-[10px] text-[hsl(0,0%,45%)] font-mono mt-1 break-all">{s.detail}</p>}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setStep(s => Math.min(s + 1, current.steps.length - 1))} className="bg-[hsl(250,50%,45%)] hover:bg-[hsl(250,50%,40%)] text-white">
          {step < 0 ? "Start Flow" : step < current.steps.length - 1 ? "Next Step" : "Complete ✓"}
        </Button>
        <Button onClick={() => setStep(current.steps.length - 1)} variant="outline" className="border-[hsl(230,20%,25%)] text-[hsl(0,0%,60%)]">Show All</Button>
      </div>
    </div>
  );
}
