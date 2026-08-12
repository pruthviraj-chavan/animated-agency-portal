import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PhoneCall, Target, Headphones, Workflow, Mic, MessageSquare, ArrowRight } from "lucide-react";

const agents = [
  {
    title: "AI Voice Receptionist",
    icon: PhoneCall,
    mode: "Voice",
    modeIcon: Mic,
    outcome: "Never miss an inbound call or enquiry.",
    desc: "Handles inbound calls, FAQs, enquiries and customer support.",
    flow: "Call received → intent understood → answer or route → enquiry logged",
  },
  {
    title: "AI Lead Qualification Agent",
    icon: Target,
    mode: "Voice + Chat",
    modeIcon: Mic,
    outcome: "Sales teams only talk to qualified prospects.",
    desc: "Talks to prospects, understands requirements, qualifies leads and sends structured information to the sales team.",
    flow: "Conversation → requirement captured → scored → structured lead to CRM",
  },
  {
    title: "AI Customer Support Agent",
    icon: Headphones,
    mode: "Chat",
    modeIcon: MessageSquare,
    outcome: "Repetitive questions answered without human effort.",
    desc: "Answers repetitive questions and handles multilingual conversations 24/7.",
    flow: "Question → knowledge lookup → multilingual answer → escalate if needed",
  },
  {
    title: "AI Workflow Agent",
    icon: Workflow,
    mode: "Chat + API",
    modeIcon: MessageSquare,
    outcome: "Conversations turn into completed business actions.",
    desc: "Connects conversations to CRM, APIs, bookings, notifications and internal workflows.",
    flow: "Intent → validation → API/CRM call → confirmation back to customer",
  },
];

export function AIAgentsSection() {
  return (
    <section className="py-20 md:py-28 bg-[hsl(232,32%,7%)] relative overflow-hidden">
      <div className="absolute -top-24 left-1/3 w-[420px] h-[420px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-3">AI Agents</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            AI Agents Built for Real Business Work
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Move beyond chatbots. Deploy agents that understand conversations and take action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {agents.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-7 hover:border-cyan-300/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-300/20 flex items-center justify-center text-cyan-300 flex-shrink-0">
                  <a.icon className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-300 uppercase tracking-wider flex-shrink-0">
                  <a.modeIcon className="w-3 h-3" />
                  {a.mode}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{a.desc}</p>

              <p className="mt-4 text-sm text-cyan-200/90 font-medium">{a.outcome}</p>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Example workflow</p>
                <p className="text-xs font-mono text-slate-300 break-words">{a.flow}</p>
              </div>

              <Link
                to="/agents"
                className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                Explore Agent
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
