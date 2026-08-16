import { motion } from "framer-motion";
import { Languages } from "lucide-react";

const conversations = [
  {
    label: "Hindi + English (Hinglish)",
    turns: [
      { role: "Customer", text: "मुझे आपके product के बारे में information चाहिए." },
      { role: "Agent", text: "बिल्कुल. मैं आपको product details और pricing के बारे में बता सकता हूँ." },
    ],
  },
  {
    label: "Marathi + English",
    turns: [
      { role: "Customer", text: "मला उद्या साठी appointment book करायची आहे." },
      { role: "Agent", text: "नक्की. उद्या सकाळी ११ किंवा दुपारी ४ यापैकी कोणती वेळ चालेल?" },
    ],
  },
];

export function IndianLanguageSection() {
  return (
    <section className="py-20 md:py-28 bg-[hsl(232,32%,9%)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.035] select-none">
        <span className="text-[22vw] font-black text-white leading-none whitespace-nowrap">भाषा</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-3">Indian-language AI</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              AI That Understands How India Communicates
            </h2>
            <p className="mt-5 text-slate-400 leading-relaxed">
              Real customers rarely speak one clean language. They switch between Hindi, Marathi and
              English inside a single sentence. Most conversational systems are built for clean,
              single-language input — which is why they break on real Indian conversations.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              We are building our agents around code-mixed, spoken, everyday Indian conversation.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Hindi", "Marathi", "English", "Hinglish", "Code-mixed"].map((l) => (
                <span
                  key={l}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  <Languages className="w-3 h-3 text-indigo-300" />
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {conversations.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 sm:p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 mb-4">{c.label}</p>
                <div className="space-y-3">
                  {c.turns.map((t, j) => (
                    <div
                      key={j}
                      className={`rounded-2xl px-4 py-3 border text-sm leading-relaxed ${
                        t.role === "Customer"
                          ? "bg-white/[0.05] border-white/10 text-slate-200"
                          : "bg-cyan-400/10 border-cyan-300/20 text-cyan-50"
                      }`}
                    >
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">{t.role}</p>
                      <p className="break-words">{t.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
