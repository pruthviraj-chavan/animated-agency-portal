import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Copy, Check, RefreshCw } from "lucide-react";

function generate(length: number, upper: boolean, lower: boolean, digits: boolean, symbols: boolean) {
  let chars = "";
  if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
  if (digits) chars += "0123456789";
  if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  if (!chars) chars = "abcdefghijklmnopqrstuvwxyz";
  const arr = new Uint32Array(length);
  crypto.getRandomValues(arr);
  return Array.from(arr, (v) => chars[v % chars.length]).join("");
}

export function PasswordGeneratorTool() {
  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [digits, setDigits] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState(() => generate(16, true, true, true, true));
  const [copied, setCopied] = useState(false);

  const regen = () => setPassword(generate(length, upper, lower, digits, symbols));

  const copy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="space-y-5">
      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-4 flex items-center gap-3">
        <code className="flex-1 text-lg font-mono text-[hsl(140,60%,70%)] break-all">{password}</code>
        <Button size="icon" variant="ghost" onClick={copy} className="text-[hsl(0,0%,60%)] hover:text-white shrink-0">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
        <Button size="icon" variant="ghost" onClick={regen} className="text-[hsl(0,0%,60%)] hover:text-white shrink-0">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[hsl(0,0%,60%)]">Length</span>
          <span className="text-sm font-mono text-[hsl(250,60%,70%)]">{length}</span>
        </div>
        <Slider value={[length]} onValueChange={([v]) => { setLength(v); setPassword(generate(v, upper, lower, digits, symbols)); }} min={4} max={64} step={1} className="w-full" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Uppercase", checked: upper, set: setUpper },
          { label: "Lowercase", checked: lower, set: setLower },
          { label: "Digits", checked: digits, set: setDigits },
          { label: "Symbols", checked: symbols, set: setSymbols },
        ].map((opt) => (
          <label key={opt.label} className="flex items-center gap-2 cursor-pointer">
            <Switch checked={opt.checked} onCheckedChange={(v) => { opt.set(v); setPassword(generate(length, opt.label === "Uppercase" ? v : upper, opt.label === "Lowercase" ? v : lower, opt.label === "Digits" ? v : digits, opt.label === "Symbols" ? v : symbols)); }} />
            <span className="text-sm text-[hsl(0,0%,75%)]">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
