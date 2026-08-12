import { motion } from "framer-motion";
import { Brain, Server, Database, Workflow, Cloud } from "lucide-react";

const groups = [
  { icon: Brain, title: "AI & Language", items: ["LLMs", "RAG", "NLP", "Speech"] },
  { icon: Server, title: "Backend", items: ["Python", "FastAPI", "Django", "APIs"] },
  { icon: Database, title: "Data", items: ["PostgreSQL", "Supabase", "Vector Databases"] },
  { icon: Workflow, title: "Automation", items: ["Workflow automation", "CRM", "Webhooks"] },
  { icon: Cloud, title: "Cloud", items: ["Cloud infrastructure", "Monitoring", "APIs"] },
];

export function TechStackSection() {
  return (
    <section className="py-20 md:py-24 bg-[hsl(232,32%,9%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-3">Technology</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Built for AI. Designed for Integration.
          </h2>
          <p className="mt-4 text-slate-400">
            The stack we actually build on — chosen for language understanding, integration and
            production reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <g.icon className="w-5 h-5 text-cyan-300" />
              <h3 className="mt-3 text-base font-semibold text-white">{g.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-slate-400 flex items-start gap-2">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-cyan-400/70 flex-shrink-0" />
                    <span className="break-words">{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Built for India's Languages */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/[0.07] via-white/[0.03] to-indigo-400/[0.07] p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white">Built for India's Languages</h3>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Our architecture keeps speech, language, voice and automation as separate, swappable
            layers — so Indian-language models can be adopted as the ecosystem matures.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Speech", "Language", "Voice", "Automation"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
