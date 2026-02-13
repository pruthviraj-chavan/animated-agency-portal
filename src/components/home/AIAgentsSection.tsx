import { motion } from "framer-motion";
import { Bot, Brain, MessageSquare, Zap, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const agents = [
  {
    name: "Maya",
    role: "Customer Support AI",
    detail: "Handles **24/7 inquiries**",
    icon: MessageSquare,
    position: { top: "58%", left: "8%" },
    mobilePosition: { top: "52%", left: "4%" },
  },
  {
    name: "Atlas",
    role: "Data Analytics Agent",
    detail: "Interested in **Business Intelligence**",
    icon: Brain,
    position: { top: "62%", right: "6%" },
    mobilePosition: { top: "72%", right: "4%" },
  },
];

const floatingBadges = [
  { label: "Shared", sub: "Maya's insight", top: "48%", left: "42%", delay: 0.6 },
  { label: "Recommended", sub: "Atlas", top: "68%", left: "48%", delay: 0.9 },
];

const avatars = [
  { top: "38%", left: "36%", delay: 0.2, color: "from-blue-400 to-cyan-400" },
  { top: "36%", right: "38%", delay: 0.4, color: "from-purple-400 to-pink-400" },
  { top: "56%", left: "52%", delay: 0.5, color: "from-orange-400 to-amber-400" },
  { top: "70%", left: "38%", delay: 0.7, color: "from-emerald-400 to-teal-400" },
];

export function AIAgentsSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Warm gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/50 via-orange-200/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-200/40 via-purple-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] bg-gradient-to-br from-pink-200/30 via-rose-200/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
            Find incredible AI agents,{" "}
            <br className="hidden md:block" />
            <span className="italic">through solutions you trust.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6"
        >
          An AI platform where exceptional agents connect — and start automating your business together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <Button
            asChild
            size="lg"
            className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full px-8 py-6 text-base font-semibold hover:bg-slate-800 dark:hover:bg-slate-100"
          >
            <Link to="/agents">
              Explore AI Agents
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Interactive card area */}
        <div className="relative w-full max-w-4xl mx-auto h-[340px] md:h-[420px]">
          {/* Agent Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-5 w-[260px] md:w-[300px] z-10"
            style={{ top: agents[0].position.top, left: agents[0].position.left }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Maya</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Customer Support AI</p>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Handles <span className="font-bold">24/7 Customer Inquiries</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-5 w-[260px] md:w-[300px] z-10"
            style={{ top: agents[1].position.top, right: agents[1].position.right }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">Atlas</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Data Analytics Agent</p>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Interested in <span className="font-bold">Business Intelligence</span>
            </p>
          </motion.div>

          {/* Floating badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: badge.delay }}
              viewport={{ once: true }}
              className="absolute z-20"
              style={{ top: badge.top, left: badge.left }}
            >
              <div className="bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 rounded-xl px-4 py-2 shadow-md flex items-center gap-2">
                <span className="text-orange-500">→</span>
                <div>
                  <p className="text-xs font-bold">{badge.label}</p>
                  <p className="text-[10px] text-orange-600 dark:text-orange-300">{badge.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Floating avatar circles */}
          {avatars.map((av, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: av.delay }}
              viewport={{ once: true }}
              className="absolute z-10"
              style={{ top: av.top, left: av.left, right: (av as any).right }}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${av.color} shadow-lg flex items-center justify-center`}>
                <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
