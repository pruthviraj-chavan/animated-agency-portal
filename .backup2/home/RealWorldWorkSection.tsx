import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, Workflow, GraduationCap, Code2, ArrowRight } from "lucide-react";

const areas = [
  {
    icon: Bot,
    title: "AI chatbot & voicebot work",
    desc: "Conversational assistants built and deployed on real business websites and customer touchpoints.",
  },
  {
    icon: Workflow,
    title: "CRM & automation projects",
    desc: "Lead capture, notifications, internal tooling and workflow automation connected to business systems.",
  },
  {
    icon: GraduationCap,
    title: "AI training & education initiatives",
    desc: "Workshops and agentic-AI training programmes delivered to students and professionals.",
  },
  {
    icon: Code2,
    title: "Custom software & product engineering",
    desc: "Web platforms, dashboards, APIs and business applications delivered end to end.",
  },
];

export function RealWorldWorkSection() {
  return (
    <section className="py-20 md:py-24 bg-[hsl(232,32%,7%)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-3">Proof</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Built Through Real-World AI Work
            </h2>
            <p className="mt-4 text-slate-400">
              We are an early-stage company. Our AI agent products are built on top of the delivery
              experience we already have — not on projections.
            </p>
          </div>
          <Link to="/portfolio" className="inline-flex items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200">
            View our projects
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-400/10 border border-indigo-300/20 flex items-center justify-center text-indigo-300 flex-shrink-0">
                <a.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-white">{a.title}</h3>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
