import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: "retail",
    label: "Retail, Fitness & D2C",
    cardTag: "COMMERCE & FITNESS WEB",
    cardTitle: "VFA Gym",
    backTitle: "Smart Billing",
    cardPalette: { primaryBg: "#FBE3D7", primaryText: "#23140E", accent: "#FF5422", backBg: "#EFE6DE" },
    desc: "Membership platforms, AI shopping assistants, automated billing & stock prediction, and WhatsApp order workflows.",
    stat1: { v: "+38%", l: "avg. conversion lift" },
    stat2: { v: "12 wks", l: "idea to launch" },
    to: "/products",
  },
  {
    id: "healthcare",
    label: "Real Estate & Events",
    cardTag: "PROPERTY & BRAND BUILDS",
    cardTitle: "New Door",
    backTitle: "Eventors",
    cardPalette: { primaryBg: "#FFF0EB", primaryText: "#1C1410", accent: "#FF5422", backBg: "#E8DDD6" },
    desc: "High-converting property showcases, luxury event storytelling portals, and 24/7 multilingual WhatsApp intake bots.",
    stat1: { v: "3x", l: "faster lead response" },
    stat2: { v: "24/7", l: "multilingual intake" },
    to: "/projects",
  },
  {
    id: "education",
    label: "Education & Study Abroad",
    cardTag: "CAMPUS & CONSULTING",
    cardTitle: "Phonda Edu",
    backTitle: "Study Abroad",
    cardPalette: { primaryBg: "#FCE6DC", primaryText: "#1F1410", accent: "#E8460E", backBg: "#EAE3DC" },
    desc: "College and IT training portals like Phonda Education & Incite Computer, plus AI workshops and abroad study consultation.",
    stat1: { v: "20+", l: "schools & institutes" },
    stat2: { v: "2,000+", l: "students guided" },
    to: "/services/ai-training-workshops",
  },
  {
    id: "tech",
    label: "Enterprise & Media",
    cardTag: "PRODUCT ENGINEERING",
    cardTitle: "Bhrigu Tech",
    backTitle: "Mahaa News",
    cardPalette: { primaryBg: "#FFEBE3", primaryText: "#141210", accent: "#FF5422", backBg: "#E6DFDA" },
    desc: "Full-stack React & Python platforms, regional news portals, industrial catalogues, and CRM automation built to scale.",
    stat1: { v: "98%", l: "client retention" },
    stat2: { v: "9+", l: "live flagship builds" },
    to: "/solutions/software",
  },
];

export function Industries() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section className="dv-dot-orange relative overflow-hidden py-20 sm:py-28" id="industries">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 items-center">
          {/* Left: Dark Studio Preview Box matching Screenshot 5 */}
          <div className="dv-dot-dark relative rounded-2xl p-6 sm:p-10 aspect-[4/3.6] flex flex-col items-center justify-center overflow-hidden shadow-2xl border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[300px] h-[250px] sm:h-[280px]"
              >
                {/* Back tilted card */}
                <div
                  className="absolute right-0 top-6 w-[68%] h-[84%] rounded-2xl p-5 shadow-xl flex flex-col justify-between rotate-[7deg]"
                  style={{ background: cat.cardPalette.backBg }}
                >
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone-500">
                    SYSTEM 02
                  </span>
                  <div className="mx-auto my-auto h-20 w-20 rounded-full border-4 border-[#FF5422]/40 flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-[#FF5422]" />
                  </div>
                  <p className="font-serif italic text-xl font-bold text-stone-800">
                    {cat.backTitle}
                  </p>
                </div>

                {/* Front primary card */}
                <div
                  className="absolute left-0 top-0 w-[72%] h-[92%] rounded-2xl p-6 shadow-2xl flex flex-col justify-between -rotate-[4deg] border border-black/5"
                  style={{
                    background: cat.cardPalette.primaryBg,
                    color: cat.cardPalette.primaryText,
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-serif italic text-2xl sm:text-3xl font-bold leading-none">
                      {cat.cardTitle}
                    </p>
                    <span className="text-[8px] font-bold uppercase tracking-widest opacity-60 text-right">
                      {cat.cardTag}
                    </span>
                  </div>

                  {/* Minimalist geometric bottle/module illustration matching Screenshot 5 */}
                  <div className="my-auto flex items-end justify-center gap-2.5 pt-4">
                    <div className="h-24 w-9 rounded-t-md bg-white shadow-sm flex flex-col items-center">
                      <div className="h-3 w-4 -mt-2 rounded-sm bg-[#141210]" />
                      <span className="mt-8 text-[6px] font-bold tracking-widest text-stone-500">
                        CORE
                      </span>
                    </div>
                    <div className="h-18 w-9 rounded-t-md bg-[#FF5422] shadow-sm flex flex-col items-center py-4">
                      <div className="h-2.5 w-4 -mt-6 rounded-sm bg-[#141210]" />
                      <span className="mt-3 text-[6px] font-bold tracking-widest text-white">
                        AI
                      </span>
                    </div>
                    <div className="h-14 w-8 rounded-t-md bg-[#141210] shadow-sm flex flex-col items-center">
                      <div className="h-2 w-3.5 -mt-1.5 rounded-sm bg-[#FF5422]" />
                      <span className="mt-4 text-[6px] font-bold tracking-widest text-white">
                        API
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <Link
              to={cat.to}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-stone-300 hover:text-white transition-colors"
            >
              Explore solutions <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Right: Industry Switcher + Detail Panel */}
          <div>
            <span className="inline-block rounded-full bg-[#141210] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              Industries we work with
            </span>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-white/95 leading-snug max-w-md">
              Systems we build,
              <br />
              across every shelf and screen.
            </p>

            <ul className="mt-8 space-y-1">
              {categories.map((c, i) => {
                const isActive = i === active;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="w-full text-left py-2.5 transition-all duration-200 flex items-center justify-between"
                      style={{
                        color: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.52)",
                        fontSize: isActive ? "clamp(24px, 3vw, 34px)" : "clamp(20px, 2.4vw, 28px)",
                        fontWeight: isActive ? 700 : 500,
                        lineHeight: 1.15,
                      }}
                    >
                      <span>{c.label}</span>
                      {isActive && <ArrowUpRight className="h-5 w-5 text-white shrink-0" />}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-7 border-t border-white/25 pt-6">
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
              >
                <p className="text-sm font-bold text-[#141210]">{cat.label}</p>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#141210]/85">
                  {cat.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-10">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#141210]">{cat.stat1.v}</p>
                    <p className="text-xs font-medium text-[#141210]/75 mt-0.5">{cat.stat1.l}</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#141210]">{cat.stat2.v}</p>
                    <p className="text-xs font-medium text-[#141210]/75 mt-0.5">{cat.stat2.l}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
