import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Lock, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { trackStudyAbroadCta } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface GlobeDestination {
  id: string;
  label: string;
  x: number;
  y: number;
  tag: string;
  detail: string;
  to: string;
}

const DESTINATIONS: GlobeDestination[] = [
  {
    id: "germany",
    label: "Germany",
    x: 56,
    y: 34,
    tag: "Primary Hub",
    detail: "Public universities, APS India, uni-assist & Type D student visa checklists",
    to: "/study-abroad/germany",
  },
  {
    id: "uk",
    label: "UK",
    x: 47,
    y: 32,
    tag: "1-Year Masters",
    detail: "Course shortlisting, SOP review & university portal readiness",
    to: "/study-abroad/university-selection",
  },
  {
    id: "europe",
    label: "Europe / EU",
    x: 61,
    y: 41,
    tag: "STEM & Design",
    detail: "English-taught European degrees, scholarship research & timeline prep",
    to: "/study-abroad/university-selection",
  },
  {
    id: "canada",
    label: "Canada",
    x: 24,
    y: 31,
    tag: "Co-op Programs",
    detail: "DLI shortlisting, academic profile positioning & visa file organization",
    to: "/study-abroad/admission-assistance",
  },
  {
    id: "usa",
    label: "USA",
    x: 21,
    y: 43,
    tag: "Research Tracks",
    detail: "MS/BS program fit, GRE/TOEFL planning & application checklist review",
    to: "/study-abroad/admission-assistance",
  },
  {
    id: "australia",
    label: "Australia",
    x: 80,
    y: 72,
    tag: "Global Track",
    detail: "Intake planning, genuine student statement clarity & visa file prep",
    to: "/study-abroad/visa-guidance",
  },
];

const STARS = [
  { x: 10, y: 14, s: 2, d: 2.8 },
  { x: 22, y: 8, s: 1.5, d: 3.4 },
  { x: 78, y: 12, s: 2.5, d: 2.4 },
  { x: 90, y: 24, s: 1.5, d: 3.8 },
  { x: 14, y: 62, s: 2, d: 3.1 },
  { x: 86, y: 58, s: 2, d: 2.9 },
  { x: 16, y: 86, s: 1.5, d: 3.6 },
  { x: 72, y: 88, s: 2, d: 2.7 },
  { x: 42, y: 10, s: 1.5, d: 3.2 },
  { x: 93, y: 78, s: 1.8, d: 3.5 },
  { x: 6, y: 40, s: 1.8, d: 3.0 },
  { x: 62, y: 92, s: 1.5, d: 2.6 },
];

export function InteractiveGlobeSection({
  sourcePage = "/study-abroad",
  className,
}: {
  sourcePage?: string;
  className?: string;
}) {
  const reduceMotion = Boolean(useReducedMotion());
  const [activeId, setActiveId] = useState<string>("germany");
  const activeDest = DESTINATIONS.find((d) => d.id === activeId) || DESTINATIONS[0];

  return (
    <section
      className={cn("py-8 sm:py-12 px-4 sm:px-6 lg:px-8", className)}
      aria-labelledby="free-call-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#161514] text-white border border-white/10 shadow-[0_32px_70px_-28px_rgba(20,18,16,0.65)] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Subtle ambient radial orange & charcoal lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FF5422]/15 blur-[130px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-white/[0.03] blur-[100px]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.95fr] gap-10 lg:gap-12 items-center">
            {/* Left Copy Column matching reference composition */}
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF8864] mb-5">
                <Sparkles className="h-3 w-3 text-[#FF5422]" />
                1-on-1 Overseas Education Advisory
              </span>

              <h2
                id="free-call-heading"
                className="font-bold tracking-tight text-white"
                style={{ fontSize: "clamp(34px, 4.6vw, 56px)", lineHeight: 1.04 }}
              >
                Your new chapter
                <br />
                starts with a{" "}
                <span className="font-serif italic font-normal text-[#FF8864]">
                  free call.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm sm:text-base leading-relaxed text-stone-300">
                30 minutes. No sales pressure. Honest guidance on Study in Germany, university
                shortlisting, APS preparation and your best path forward.
              </p>

              {/* CTA pill with Framer hover + press physics */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <motion.div
                  whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                >
                  <Link
                    to="/contact?vertical=study-abroad&brief=Free%20Study%20Abroad%20Consultation"
                    onClick={() => trackStudyAbroadCta("/contact#globe-call", sourcePage)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] hover:bg-[#e8460e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(255,84,34,0.35)] transition-colors"
                  >
                    Free consultation
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                <Link
                  to={activeDest.to}
                  className="text-xs sm:text-sm font-medium text-stone-300 hover:text-white underline underline-offset-4 transition-colors"
                >
                  Explore {activeDest.label} track →
                </Link>
              </div>

              {/* Verified honest trust strip (no unverified claims) */}
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-stone-300">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF5422]" />
                  No obligation
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#FF5422]" />
                  UDYAM-MH-15-0320983
                </span>
                <span className="inline-flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#FF5422]" />
                  Fully confidential
                </span>
              </div>
            </div>

            {/* Right Interactive Rotating 3D Globe Visual */}
            <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] flex flex-col items-center">
              <div className="relative aspect-square w-full flex items-center justify-center">
                {/* Twinkling background star field */}
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                  {STARS.map((star, idx) => (
                    <motion.span
                      key={idx}
                      animate={
                        reduceMotion
                          ? undefined
                          : { opacity: [0.25, 0.9, 0.25], scale: [1, 1.35, 1] }
                      }
                      transition={{
                        duration: star.d,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.2,
                      }}
                      className="absolute rounded-full bg-white/70"
                      style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.s}px`,
                        height: `${star.s}px`,
                      }}
                    />
                  ))}
                </div>

                {/* Outer subtle rotating orbital ring (inspired by withRotate) */}
                <motion.div
                  aria-hidden="true"
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute inset-3 rounded-full border border-dashed border-white/15"
                />

                {/* Interactive Globe Sphere */}
                <motion.div
                  whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="relative h-[82%] w-[82%] overflow-hidden rounded-full border border-white/15 shadow-[inset_-24px_-24px_60px_rgba(0,0,0,0.85),inset_16px_16px_45px_rgba(255,255,255,0.08),0_0_55px_rgba(255,84,34,0.14)]"
                  style={{
                    background:
                      "radial-gradient(circle at 34% 32%, #3a3836 0%, #242220 45%, #121110 86%, #0b0a09 100%)",
                  }}
                >
                  {/* Animated longitude graticules & simplified continents */}
                  <motion.svg
                    viewBox="0 0 200 200"
                    className="h-full w-full opacity-55"
                    animate={reduceMotion ? undefined : { x: ["0%", "-14%", "0%"] }}
                    transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden="true"
                  >
                    {/* Latitude ellipses */}
                    <ellipse cx="100" cy="100" rx="92" ry="26" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" />
                    <ellipse cx="100" cy="100" rx="84" ry="56" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.7" />
                    <line x1="6" y1="100" x2="194" y2="100" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" />
                    {/* Meridian arcs */}
                    <ellipse cx="100" cy="100" rx="28" ry="96" fill="none" stroke="rgba(255,255,255,0.11)" strokeWidth="0.7" />
                    <ellipse cx="100" cy="100" rx="64" ry="96" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.7" />

                    {/* Stylized Continent Silhouettes (Americas, Europe/Germany, Asia, Australia) */}
                    <path
                      d="M28 52 C40 44 58 48 64 62 C68 74 52 84 56 98 C62 114 70 128 60 148 C50 162 42 152 44 134 C46 116 32 104 28 84 Z"
                      fill="rgba(255,255,255,0.12)"
                      stroke="rgba(255,255,255,0.22)"
                      strokeWidth="0.8"
                    />
                    <path
                      d="M88 46 C108 38 142 42 162 56 C174 68 168 88 152 94 C138 98 128 114 114 108 C102 102 98 118 110 132 C104 150 92 146 86 126 C80 106 94 94 84 74 C80 60 82 50 88 46 Z"
                      fill="rgba(255,255,255,0.14)"
                      stroke="rgba(255,255,255,0.24)"
                      strokeWidth="0.8"
                    />
                    <path
                      d="M148 126 C162 120 176 128 174 142 C172 152 156 154 146 144 Z"
                      fill="rgba(255,255,255,0.12)"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="0.8"
                    />
                  </motion.svg>

                  {/* Soft dark vignette terminator shading matching screenshot */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 38% 45%, rgba(255,255,255,0.03) 0%, rgba(16,14,13,0.45) 62%, rgba(8,7,6,0.9) 100%)",
                    }}
                  />

                  {/* Interactive Glowing Destination Pins */}
                  {DESTINATIONS.map((dest) => {
                    const isSelected = dest.id === activeId;
                    return (
                      <button
                        key={dest.id}
                        type="button"
                        onClick={() => setActiveId(dest.id)}
                        onMouseEnter={() => setActiveId(dest.id)}
                        aria-label={`Select destination ${dest.label}`}
                        className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-20"
                        style={{ left: `${dest.x}%`, top: `${dest.y}%` }}
                      >
                        {/* Pulsing beacon halo */}
                        <span
                          className={cn(
                            "absolute inset-0 -m-1.5 rounded-full transition-opacity",
                            isSelected
                              ? "animate-ping bg-[#FF5422]/60 opacity-90"
                              : "bg-[#FF5422]/30 opacity-40 group-hover:opacity-80",
                          )}
                        />
                        <span
                          className={cn(
                            "relative flex items-center gap-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold transition-all duration-200",
                            isSelected
                              ? "scale-110 text-white"
                              : "text-stone-300/80 hover:text-white",
                          )}
                        >
                          <span
                            className={cn(
                              "h-2.5 w-2.5 rounded-full ring-2",
                              isSelected
                                ? "bg-[#FF5422] ring-[#FF8C66]/70 shadow-[0_0_12px_#FF5422]"
                                : "bg-[#FF5422]/85 ring-white/25",
                            )}
                          />
                          <span className="whitespace-nowrap drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                            {dest.label}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              </div>

              {/* Interactive active destination readout */}
              <motion.div
                key={activeDest.id}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-sm text-left"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-white">{activeDest.label}</span>
                  <span className="rounded-full bg-[#FF5422]/20 border border-[#FF5422]/40 px-2.5 py-0.5 text-[10px] font-semibold text-[#FF8864]">
                    {activeDest.tag}
                  </span>
                </div>
                <p className="mt-1 text-xs text-stone-300 leading-relaxed">{activeDest.detail}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
