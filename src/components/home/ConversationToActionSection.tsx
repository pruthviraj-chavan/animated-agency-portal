import { motion } from "framer-motion";
import { Ear, Brain, MessageSquare, Zap, LineChart } from "lucide-react";

const steps = [
  { n: "01", title: "Understand", icon: Ear, text: "Speech and conversational input" },
  { n: "02", title: "Reason", icon: Brain, text: "Understand intent and context" },
  { n: "03", title: "Respond", icon: MessageSquare, text: "Natural multilingual conversation" },
  { n: "04", title: "Act", icon: Zap, text: "CRM, booking, lead capture, APIs and workflows" },
  { n: "05", title: "Learn", icon: LineChart, text: "Analytics and continuous improvement" },
];

export function ConversationToActionSection() {
  return (
    <section className="py-20 md:py-24 bg-[hsl(232,32%,9%)] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-3">Product flow</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">From Conversation to Action</h2>
          <p className="mt-4 text-slate-400">
            A customer speaks, the agent understands, responds, performs a real action and the business
            gets the result — not just a transcript.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-300/30 transition-colors"
            >
              <span className="text-xs font-mono text-slate-500">{s.n}</span>
              <s.icon className="w-6 h-6 text-cyan-300 mt-3" />
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
