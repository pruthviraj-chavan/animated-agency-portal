import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mic, Languages, Workflow, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const bars = [12, 26, 40, 18, 52, 34, 60, 28, 44, 20, 38, 56, 24, 46, 16, 32, 50, 22, 36, 14];

const transcript = [
  { role: "customer", lang: "Hindi", text: "मुझे आपके product के बारे में information चाहिए." },
  { role: "agent", lang: "Hindi", text: "बिल्कुल. मैं आपको product details और pricing बता सकता हूँ." },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[hsl(232,32%,7%)]">
      {/* subtle grid + glow */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none [background-image:linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-cyan-300 uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI Agents • Voice • Automation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white"
            >
              AI Agents That Speak{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                India's Languages.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl"
            >
              dieVektor builds intelligent voice and conversational agents for Indian businesses and
              institutions — helping teams automate customer conversations, qualify leads and connect
              AI directly to business workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button asChild size="lg" className="rounded-full px-7 bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold">
                <Link to="/agents">
                  Explore AI Agents
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-7 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white font-semibold"
              >
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 border-t border-white/10 pt-6"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                Built for Indian-language conversations
              </p>
              <p className="mt-2 text-sm font-medium text-slate-200">
                Marathi • Hindi • English • Hinglish
              </p>
            </motion.div>
          </div>

          {/* Right: voice agent visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6 shadow-2xl">
              {/* header */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/15 border border-cyan-300/30 flex items-center justify-center text-cyan-300 flex-shrink-0">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">Voice Agent</p>
                    <p className="text-[11px] text-slate-400 truncate">Live conversation</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LISTENING
                </span>
              </div>

              {/* waveform */}
              <div className="flex items-center justify-between gap-[3px] h-16 sm:h-20 py-4">
                {bars.map((h, i) => (
                  <motion.span
                    key={i}
                    className="flex-1 rounded-full bg-gradient-to-t from-cyan-500/40 to-cyan-300"
                    animate={{ height: [`${h * 0.35}%`, `${h * 1.4}%`, `${h * 0.5}%`] }}
                    transition={{ duration: 1.2 + (i % 5) * 0.15, repeat: Infinity, ease: "easeInOut" }}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* language indicator */}
              <div className="flex items-center gap-2 text-[11px] text-slate-300 mb-4">
                <Languages className="w-3.5 h-3.5 text-indigo-300" />
                <span className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5">Detected: हिन्दी</span>
                <span className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5">Code-mixed</span>
              </div>

              {/* transcript */}
              <div className="space-y-3">
                {transcript.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.3, duration: 0.5 }}
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed border ${
                      t.role === "customer"
                        ? "bg-white/[0.06] border-white/10 text-slate-200"
                        : "bg-cyan-400/10 border-cyan-300/20 text-cyan-50"
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-wider mb-1 text-slate-400">
                      {t.role === "customer" ? "Customer" : "AI Agent"} · {t.lang}
                    </p>
                    <p className="break-words">{t.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* action */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="mt-4 flex items-center gap-2 rounded-xl border border-indigo-300/20 bg-indigo-400/10 px-3 py-2.5 text-xs text-indigo-100"
              >
                <Workflow className="w-4 h-4 flex-shrink-0 text-indigo-300" />
                <span className="truncate">Action triggered — lead captured &amp; sent to CRM</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
