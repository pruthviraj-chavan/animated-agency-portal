import { motion } from "framer-motion";
import { Mic, Languages, Workflow, Building2 } from "lucide-react";

const items = [
  { icon: Mic, label: "Voice & conversational agents" },
  { icon: Languages, label: "Indian-language conversations" },
  { icon: Workflow, label: "CRM, API & workflow integration" },
  { icon: Building2, label: "Businesses & institutions in India" },
];

export function TrustStrip() {
  return (
    <section className="bg-[hsl(232,32%,9%)] border-y border-white/10">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-center gap-3"
            >
              <it.icon className="w-4 h-4 text-cyan-300 flex-shrink-0" />
              <span className="text-sm text-slate-300">{it.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
