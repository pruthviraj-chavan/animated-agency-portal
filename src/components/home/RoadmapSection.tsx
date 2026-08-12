import { motion } from "framer-motion";

const stages = [
  {
    tag: "Today",
    title: "AI chat and voice agents",
    desc: "Conversational and voice agents deployed for customer interactions.",
    state: "current",
  },
  {
    tag: "Next",
    title: "Multilingual business agents",
    desc: "Agents that hold natural Hindi, Marathi and code-mixed conversations end to end.",
    state: "next",
  },
  {
    tag: "Then",
    title: "Agents connected to business systems",
    desc: "CRM, ERP, booking and workflow execution driven directly from conversation.",
    state: "planned",
  },
  {
    tag: "Future",
    title: "An ecosystem of specialised agents",
    desc: "A scalable library of domain agents that Indian businesses can deploy quickly.",
    state: "planned",
  },
];

export function RoadmapSection() {
  return (
    <section className="py-20 md:py-24 bg-[hsl(232,32%,9%)] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-3">Vision</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Building the AI Agent Layer for Indian Businesses
          </h2>
          <p className="mt-4 text-slate-400">
            Where we are today and what we are building next. Items marked as roadmap are not yet
            available.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stages.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{s.tag}</span>
                <span
                  className={`text-[10px] font-semibold uppercase rounded-full px-2 py-0.5 border ${
                    s.state === "current"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                      : "border-white/10 bg-white/5 text-slate-400"
                  }`}
                >
                  {s.state === "current" ? "Live" : "Roadmap"}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
