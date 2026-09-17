import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Node = {
  id: string;
  label: string;
  tip: string;
};

const nodes: Node[] = [
  { id: "customer", label: "Customer", tip: "Inbound call, WhatsApp or web chat" },
  { id: "channel", label: "Voice / Chat", tip: "Speech-to-text, language detection" },
  { id: "agent", label: "AI Agent", tip: "Conversation policy and tools" },
  { id: "reason", label: "Reasoning", tip: "Intent, context, retrieval (RAG)" },
  { id: "data", label: "Business Data", tip: "Catalogue, availability, knowledge base" },
  { id: "exec", label: "CRM / API / Workflow", tip: "Bookings, tickets, records, routing" },
  { id: "action", label: "Business Action", tip: "A completed outcome — not a transcript" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-dv-bg pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      <div className="dv-grid absolute inset-0 opacity-[0.35]" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-[460px] w-[460px] rounded-full bg-dv-accent/10 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-dv-accent-2/10 blur-[150px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-dv-bg"
      />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dv-accent"
            >
              AI • Software • Automation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="mt-5 text-[2.4rem] leading-[1.05] sm:text-5xl lg:text-[4rem] font-semibold tracking-tight text-dv-fg"
            >
              Build <span className="dv-text-gradient">intelligent systems</span>.
              <br className="hidden sm:block" /> Not just software.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-dv-muted"
            >
              dieVektor builds AI agents, software and automation systems that help businesses
              communicate, operate and scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-dv-fg px-7 py-3.5 text-sm font-semibold text-dv-bg transition-transform hover:-translate-y-0.5"
              >
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-dv-line bg-dv-surface px-7 py-3.5 text-sm font-semibold text-dv-fg transition-colors hover:border-dv-accent/40"
              >
                Explore Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 border-t border-dv-line pt-6 text-xs sm:text-sm text-dv-dim"
            >
              AI Agents · Voice AI · Software · Automation · Web · Mobile
            </motion.p>
          </div>

          {/* System visualisation */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl border border-dv-line bg-dv-surface/70 p-4 sm:p-6 shadow-[var(--dv-shadow)] backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-dv-line pb-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dv-dim">
                  Live system
                </p>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-dv-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-dv-accent animate-pulse" />
                  running
                </span>
              </div>

              <ol className="mt-4 space-y-2">
                {nodes.map((n, i) => {
                  const isActive = active === n.id;
                  return (
                    <li key={n.id} className="relative">
                      <motion.div
                        onMouseEnter={() => setActive(n.id)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(n.id)}
                        onBlur={() => setActive(null)}
                        tabIndex={0}
                        initial={reduce ? false : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.09, duration: 0.45 }}
                        className={`group flex cursor-default items-center gap-3 rounded-xl border px-3.5 py-3 transition-all outline-none ${
                          isActive
                            ? "border-dv-accent/50 bg-dv-accent/[0.07] shadow-[var(--dv-glow)]"
                            : "border-dv-line bg-dv-elevated/60"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 flex-shrink-0 rounded-full transition-colors ${
                            isActive ? "bg-dv-accent" : "bg-dv-dim"
                          }`}
                        />
                        <span className="text-sm font-medium text-dv-fg">{n.label}</span>
                        <span
                          className={`ml-auto text-right text-[11px] leading-tight text-dv-muted transition-opacity duration-200 ${
                            isActive ? "opacity-100" : "opacity-0 hidden sm:inline"
                          }`}
                        >
                          {n.tip}
                        </span>
                      </motion.div>
                      {i < nodes.length - 1 && (
                        <div className="ml-[1.15rem] h-3 w-px bg-gradient-to-b from-dv-line to-dv-accent/40" />
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
