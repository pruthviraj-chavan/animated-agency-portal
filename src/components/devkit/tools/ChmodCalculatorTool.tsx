import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const PERMS = [
  { label: "Read", val: 4 },
  { label: "Write", val: 2 },
  { label: "Execute", val: 1 },
];
const ROLES = ["Owner", "Group", "Others"];

export function ChmodCalculatorTool() {
  const [perms, setPerms] = useState([[true, true, false], [true, false, false], [true, false, false]]);

  const togglePerm = (role: number, perm: number) => {
    const next = perms.map((r) => [...r]);
    next[role][perm] = !next[role][perm];
    setPerms(next);
  };

  const getOctal = (role: number) => perms[role].reduce((sum, on, i) => sum + (on ? PERMS[i].val : 0), 0);
  const getSymbolic = (role: number) => perms[role].map((on, i) => on ? "rwx"[i] : "-").join("");
  const octal = `${getOctal(0)}${getOctal(1)}${getOctal(2)}`;
  const symbolic = `-${getSymbolic(0)}${getSymbolic(1)}${getSymbolic(2)}`;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
          <p className="text-xs text-[hsl(0,0%,50%)] mb-1">Octal</p>
          <p className="text-3xl font-mono font-bold text-[hsl(40,80%,70%)]">{octal}</p>
        </div>
        <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4">
          <p className="text-xs text-[hsl(0,0%,50%)] mb-1">Symbolic</p>
          <p className="text-3xl font-mono font-bold text-[hsl(140,60%,70%)]">{symbolic}</p>
        </div>
      </div>
      <div className="space-y-4">
        {ROLES.map((role, ri) => (
          <div key={role} className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3">
            <p className="text-sm font-semibold text-[hsl(250,60%,70%)] mb-2">{role}</p>
            <div className="flex gap-6">
              {PERMS.map((perm, pi) => (
                <label key={perm.label} className="flex items-center gap-2 cursor-pointer">
                  <Switch checked={perms[ri][pi]} onCheckedChange={() => togglePerm(ri, pi)} />
                  <span className="text-sm text-[hsl(0,0%,70%)]">{perm.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-[hsl(0,0%,40%)] text-center font-mono">chmod {octal} filename</p>
    </div>
  );
}
