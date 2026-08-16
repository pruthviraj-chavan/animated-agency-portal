import { motion } from "framer-motion";
import { Globe2, Zap, Plug, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Globe2,
    title: "Indian-first AI",
    desc: "Built around the way Indian customers actually communicate — spoken, informal and code-mixed.",
  },
  {
    icon: Zap,
    title: "Action-oriented agents",
    desc: "Agents don't just answer — they connect conversations to workflows and complete tasks.",
  },
  {
    icon: Plug,
    title: "Business integration",
    desc: "CRM, APIs, databases, notifications and the systems a business already runs on.",
  },
  {
    icon: ShieldCheck,
    title: "Built for production",
    desc: "Designed with scalability, observability, reliability and real business workflows in mind.",
  },
];

export function WhyDieVektorSection() {
  return (
    <section className="py-20 md:py-24 bg-[hsl(232,32%,9%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-3">Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Why dieVektor</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-300/30 transition-colors"
            >
              <p.icon className="w-6 h-6 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
