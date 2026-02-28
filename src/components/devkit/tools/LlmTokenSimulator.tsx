import { useState, useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MODELS = [
  { id: "gpt4o", name: "GPT-4o", inputCost: 2.5, outputCost: 10, speed: 80 },
  { id: "gpt4", name: "GPT-4 Turbo", inputCost: 10, outputCost: 30, speed: 40 },
  { id: "gpt35", name: "GPT-3.5 Turbo", inputCost: 0.5, outputCost: 1.5, speed: 120 },
  { id: "claude3", name: "Claude 3.5 Sonnet", inputCost: 3, outputCost: 15, speed: 70 },
  { id: "claude3h", name: "Claude 3 Haiku", inputCost: 0.25, outputCost: 1.25, speed: 150 },
  { id: "gemini", name: "Gemini 1.5 Pro", inputCost: 1.25, outputCost: 5, speed: 90 },
  { id: "llama", name: "Llama 3.1 70B", inputCost: 0.5, outputCost: 0.7, speed: 60 },
];

function estimateTokens(text: string): number {
  if (!text.trim()) return 0;
  return Math.ceil(text.length / 3.8);
}

export function LlmTokenSimulator() {
  const [text, setText] = useState("");
  const [model, setModel] = useState("gpt4o");
  const [outputRatio, setOutputRatio] = useState(2);

  const m = MODELS.find(m => m.id === model)!;
  const inputTokens = useMemo(() => estimateTokens(text), [text]);
  const outputTokens = inputTokens * outputRatio;
  const inputCost = (inputTokens / 1_000_000) * m.inputCost;
  const outputCost = (outputTokens / 1_000_000) * m.outputCost;
  const totalCost = inputCost + outputCost;
  const latency = outputTokens / m.speed;

  return (
    <div className="space-y-4">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your prompt here..."
        className="bg-[hsl(230,25%,10%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] min-h-[100px] font-mono text-xs"
      />

      <div className="flex gap-3 flex-wrap items-center">
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger className="w-[180px] bg-[hsl(230,25%,10%)] border-[hsl(230,20%,20%)] text-[hsl(0,0%,90%)] text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[hsl(230,25%,12%)] border-[hsl(230,20%,20%)]">
            {MODELS.map(m => <SelectItem key={m.id} value={m.id} className="text-[hsl(0,0%,85%)] text-xs">{m.name}</SelectItem>)}
          </SelectContent>
        </Select>
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-[hsl(0,0%,50%)]">Output ratio:</span>
          {[1, 2, 4].map(r => (
            <button key={r} onClick={() => setOutputRatio(r)}
              className={`px-2 py-0.5 rounded text-[10px] font-mono ${r === outputRatio ? "bg-[hsl(250,50%,40%)] text-white" : "bg-[hsl(230,25%,12%)] text-[hsl(0,0%,50%)]"}`}>
              {r}x
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Input Tokens", value: inputTokens.toLocaleString(), color: "hsl(200,70%,55%)" },
          { label: "Output Tokens", value: outputTokens.toLocaleString(), color: "hsl(140,60%,50%)" },
          { label: "Total Cost", value: `$${totalCost < 0.001 ? totalCost.toExponential(1) : totalCost.toFixed(4)}`, color: "hsl(40,80%,55%)" },
          { label: "Est. Latency", value: `${latency.toFixed(1)}s`, color: "hsl(280,60%,60%)" },
        ].map(s => (
          <div key={s.label} className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3 text-center">
            <p className="text-lg font-mono font-bold" style={{ color: s.color }}>{s.value}</p>
            <p className="text-[10px] text-[hsl(0,0%,45%)]">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(230,25%,8%)] border border-[hsl(230,20%,20%)] rounded-lg p-3">
        <p className="text-[10px] text-[hsl(0,0%,45%)] mb-2">Cost per model (same prompt)</p>
        <div className="space-y-1">
          {MODELS.map(mod => {
            const cost = (inputTokens / 1e6) * mod.inputCost + (outputTokens / 1e6) * mod.outputCost;
            const maxCost = Math.max(...MODELS.map(m2 => (inputTokens / 1e6) * m2.inputCost + (outputTokens / 1e6) * m2.outputCost), 0.0001);
            return (
              <div key={mod.id} className="flex items-center gap-2">
                <span className={`text-[10px] w-28 truncate ${mod.id === model ? "text-[hsl(250,60%,70%)] font-bold" : "text-[hsl(0,0%,50%)]"}`}>{mod.name}</span>
                <div className="flex-1 h-2 bg-[hsl(230,25%,12%)] rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-[hsl(250,50%,50%)] transition-all" style={{ width: `${(cost / maxCost) * 100}%` }} />
                </div>
                <span className="text-[10px] font-mono text-[hsl(0,0%,60%)] w-16 text-right">${cost < 0.001 ? cost.toExponential(1) : cost.toFixed(4)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
