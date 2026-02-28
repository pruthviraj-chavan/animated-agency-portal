import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ATTACKS = [
  {
    id: "expired",
    name: "Expired Token",
    desc: "Token with past expiration date",
    header: { alg: "HS256", typ: "JWT" },
    payload: { sub: "1234567890", name: "John Doe", iat: 1516239022, exp: 1516239022 },
    result: "REJECTED",
    explanation: "Token expired at 2018-01-18. Server checks `exp` claim against current time and rejects stale tokens.",
    fix: "Always validate `exp` claim. Set short-lived tokens (15min) + refresh tokens.",
  },
  {
    id: "none_alg",
    name: "None Algorithm",
    desc: "Attacker sets alg to 'none'",
    header: { alg: "none", typ: "JWT" },
    payload: { sub: "1234567890", name: "Admin", role: "admin" },
    result: "VULNERABLE",
    explanation: "If server accepts alg:'none', signature verification is skipped entirely. Attacker can forge any payload.",
    fix: "NEVER accept 'none' algorithm. Whitelist allowed algorithms explicitly: ['HS256', 'RS256'].",
  },
  {
    id: "tampered",
    name: "Tampered Payload",
    desc: "Modified role from 'user' to 'admin'",
    header: { alg: "HS256", typ: "JWT" },
    payload: { sub: "1234567890", name: "Hacker", role: "admin", original_role: "user" },
    result: "REJECTED",
    explanation: "Modifying the payload changes the base64 content, invalidating the signature. HMAC verification fails.",
    fix: "Always verify signature before trusting payload. Never decode without verification.",
  },
  {
    id: "clock_skew",
    name: "Clock Skew Attack",
    desc: "Token from server with different clock",
    header: { alg: "HS256", typ: "JWT" },
    payload: { sub: "user123", iat: Date.now() / 1000 + 300, nbf: Date.now() / 1000 + 300 },
    result: "AMBIGUOUS",
    explanation: "Token's `iat` (issued at) is 5 minutes in the future. Could be clock drift or time manipulation attack.",
    fix: "Allow small clock skew tolerance (30-60s). Use NTP sync. Validate `nbf` (not before) claim.",
  },
  {
    id: "key_confusion",
    name: "RS256→HS256 Confusion",
    desc: "Attacker switches from RS256 to HS256",
    header: { alg: "HS256", typ: "JWT" },
    payload: { sub: "attacker", role: "admin" },
    result: "VULNERABLE",
    explanation: "If server uses RS256 public key as HS256 secret, attacker can sign tokens with the public key (which is public!).",
    fix: "Pin algorithm per key. Never allow algorithm switching. Use separate keys for different algorithms.",
  },
];

const RESULT_COLORS: Record<string, string> = {
  REJECTED: "hsl(140,60%,50%)", VULNERABLE: "hsl(0,60%,55%)", AMBIGUOUS: "hsl(40,80%,55%)",
};

export function JwtAttackPlayground() {
  const [selected, setSelected] = useState(0);
  const attack = ATTACKS[selected];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 flex-wrap">
        {ATTACKS.map((a, i) => (
          <Button key={a.id} size="sm" onClick={() => setSelected(i)}
            className={`text-xs ${i === selected ? "bg-[hsl(250,50%,40%)] text-white" : "bg-[hsl(230,25%,12%)] text-[hsl(0,0%,60%)] hover:bg-[hsl(230,25%,16%)]"}`}>
            {a.name}
          </Button>
        ))}
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[hsl(0,0%,90%)]">{attack.name}</h3>
          <Badge style={{ backgroundColor: `${RESULT_COLORS[attack.result]}20`, color: RESULT_COLORS[attack.result], borderColor: `${RESULT_COLORS[attack.result]}40` }}>
            {attack.result}
          </Badge>
        </div>
        <p className="text-xs text-[hsl(0,0%,50%)]">{attack.desc}</p>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-[10px] text-[hsl(0,0%,45%)] mb-1">Header</p>
            <pre className="text-[10px] font-mono text-[hsl(200,70%,65%)] bg-[hsl(230,25%,6%)] p-2 rounded overflow-x-auto">{JSON.stringify(attack.header, null, 2)}</pre>
          </div>
          <div>
            <p className="text-[10px] text-[hsl(0,0%,45%)] mb-1">Payload</p>
            <pre className="text-[10px] font-mono text-[hsl(140,60%,65%)] bg-[hsl(230,25%,6%)] p-2 rounded overflow-x-auto">{JSON.stringify(attack.payload, null, 2)}</pre>
          </div>
        </div>

        <div className="bg-[hsl(230,25%,6%)] rounded p-3 space-y-2">
          <p className="text-xs text-[hsl(0,0%,70%)]"><span className="font-bold">Analysis: </span>{attack.explanation}</p>
          <p className="text-xs text-[hsl(140,60%,60%)]"><span className="font-bold">Fix: </span>{attack.fix}</p>
        </div>
      </div>
    </div>
  );
}
