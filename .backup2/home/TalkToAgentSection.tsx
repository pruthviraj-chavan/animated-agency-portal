import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mic, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const languages = ["English", "Hindi", "Marathi"];
const agentTypes = ["Customer Support", "Sales", "Receptionist"];

export function TalkToAgentSection() {
  const [lang, setLang] = useState("English");
  const [agent, setAgent] = useState("Customer Support");

  return (
    <section className="py-20 md:py-28 bg-[hsl(232,32%,7%)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-3">Demo</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Talk to an AI Agent
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-lg">
              Choose a language and an agent type to see how a dieVektor agent would handle the
              conversation. Want to try it on your own workflow? Book a walkthrough with our team.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full px-7 bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold">
                <Link to="/contact">Book a Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-7 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white font-semibold"
              >
                <Link to="/agents">Explore AI Agents</Link>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-7"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-3">Select language</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    aria-pressed={lang === l}
                    className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                      lang === l
                        ? "border-cyan-300/50 bg-cyan-400/15 text-cyan-100"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-3">Select agent</p>
              <div className="flex flex-wrap gap-2">
                {agentTypes.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAgent(a)}
                    aria-pressed={agent === a}
                    className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                      agent === a
                        ? "border-indigo-300/50 bg-indigo-400/15 text-indigo-100"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-cyan-400/10 border border-cyan-300/20 flex items-center justify-center text-cyan-300 flex-shrink-0">
                  <Mic className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{agent} Agent</p>
                  <p className="text-xs text-slate-400 truncate">Language: {lang}</p>
                </div>
              </div>

              <Button
                disabled
                className="mt-5 w-full rounded-full bg-white/10 text-slate-300 hover:bg-white/10 cursor-not-allowed"
              >
                Start Conversation
              </Button>

              <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-amber-300/90">
                <Info className="w-3.5 h-3.5 flex-shrink-0" />
                Interactive demo coming soon
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
