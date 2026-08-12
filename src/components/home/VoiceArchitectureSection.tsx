import { motion } from "framer-motion";
import { Mic, AudioLines, Languages, Brain, Database, Settings2, Plug, Volume2 } from "lucide-react";

const layers = [
  { icon: Mic, title: "Voice", desc: "Inbound call or spoken input" },
  { icon: AudioLines, title: "Speech Recognition", desc: "Audio converted to text" },
  { icon: Languages, title: "Language + Intent Understanding", desc: "Language detection, code-mix handling, intent extraction" },
  { icon: Brain, title: "AI Reasoning", desc: "Context, conversation state and decision making" },
  { icon: Database, title: "Knowledge / RAG", desc: "Grounded answers from business documents and data" },
  { icon: Settings2, title: "Business Logic", desc: "Validation, rules and eligibility checks" },
  { icon: Plug, title: "CRM / API / Workflow", desc: "Actions executed in real systems" },
  { icon: Volume2, title: "Voice Response", desc: "Natural spoken reply back to the customer" },
];

export function VoiceArchitectureSection() {
  return (
    <section className="py-20 md:py-28 bg-[hsl(232,32%,7%)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none [background-image:linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-3">Architecture</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            From Voice to Business Action
          </h2>
          <p className="mt-4 text-slate-400">
            Each agent is a pipeline, not a single prompt. Every layer is designed so conversations end
            in a verifiable business outcome.
          </p>
        </div>

        <div className="max-w-3xl mx-auto lg:mx-0">
          {layers.map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative pl-10 sm:pl-14 pb-5 last:pb-0"
            >
              {i < layers.length - 1 && (
                <span className="absolute left-[15px] sm:left-[21px] top-10 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 to-indigo-400/10" />
              )}
              <span className="absolute left-0 top-1 w-8 h-8 sm:w-11 sm:h-11 rounded-xl border border-white/10 bg-white/[0.05] flex items-center justify-center text-cyan-300">
                <l.icon className="w-4 h-4" />
              </span>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 sm:px-5 py-3.5">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="text-base sm:text-lg font-semibold text-white">{l.title}</h3>
                  <span className="text-[10px] font-mono text-slate-500">
                    LAYER {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{l.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
