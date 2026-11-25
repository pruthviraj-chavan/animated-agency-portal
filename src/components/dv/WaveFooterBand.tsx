"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  withDriftX,
  withFloatDown,
  withFloatUp,
  withScaleUp,
} from "@/components/home2/ScrollEffects";

const DriftTrack = withDriftX(motion.div);
const FloatUpCard = withFloatUp(motion.div);
const FloatDownCard = withFloatDown(motion.div);
const ScaleGlow = withScaleUp(motion.div);

interface WaveCard {
  title: string;
  tag: string;
  to: string;
  bg: string;
  accent: string;
  text: string;
  rot: number;
  floatDir: "up" | "down";
  sizeClass: string;
  offsetClass: string;
  previewImage?: string;
}

const waveCards: WaveCard[] = [
  {
    title: "AI Agents",
    tag: "Hindi · Marathi",
    to: "/services/ai-agents",
    bg: "#1c1917",
    accent: "#FF5422",
    text: "#ffffff",
    rot: -8,
    floatDir: "up",
    sizeClass: "w-[78px] sm:w-28 h-[82px] sm:h-28",
    offsetClass: "mt-4",
  },
  {
    title: "Bhrigu Tech",
    tag: "Live Web",
    to: "/projects",
    bg: "#141210",
    accent: "#FF5422",
    text: "#ffffff",
    rot: 6,
    floatDir: "down",
    sizeClass: "w-28 sm:w-32 h-20 sm:h-24",
    offsetClass: "-mt-4",
    previewImage: "/projects/bhrigu-tech.jpg",
  },
  {
    title: "Website Dev",
    tag: "Custom React",
    to: "/services/website-development",
    bg: "#fff4f0",
    accent: "#FF5422",
    text: "#141210",
    rot: -4,
    floatDir: "up",
    sizeClass: "w-[78px] sm:w-28 h-[82px] sm:h-28",
    offsetClass: "mt-1",
  },
  {
    title: "App Dev",
    tag: "iOS & Android",
    to: "/services/mobile-app-development",
    bg: "#291109",
    accent: "#ff723b",
    text: "#ffffff",
    rot: 7,
    floatDir: "down",
    sizeClass: "w-24 sm:w-28 h-22 sm:h-24",
    offsetClass: "-mt-6",
  },
  {
    title: "New Door",
    tag: "Real Estate",
    to: "/projects",
    bg: "#0f172a",
    accent: "#FF5422",
    text: "#ffffff",
    rot: -6,
    floatDir: "up",
    sizeClass: "w-[86px] sm:w-32 h-[72px] sm:h-24",
    offsetClass: "mt-5",
    previewImage: "/projects/new-door-properties.jpg",
  },
  {
    title: "Study Abroad",
    tag: "Germany & Global",
    to: "/study-abroad",
    bg: "#ffe8df",
    accent: "#FF5422",
    text: "#141210",
    rot: 5,
    floatDir: "down",
    sizeClass: "w-24 sm:w-28 h-24 sm:h-28",
    offsetClass: "-mt-4",
  },
  {
    title: "VFA Gym",
    tag: "Fitness Web",
    to: "/projects",
    bg: "#1b1817",
    accent: "#fb923c",
    text: "#ffffff",
    rot: -5,
    floatDir: "up",
    sizeClass: "w-[78px] sm:w-28 h-[80px] sm:h-24",
    offsetClass: "mt-2",
    previewImage: "/projects/vfa-gym.jpg",
  },
];

export function WaveFooterBackgroundGlow() {
  return (
    <ScaleGlow
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#FF5422]/12 blur-[120px]"
    />
  );
}

export function WaveFooterRibbon() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div className="relative h-40 sm:h-48 w-full overflow-hidden mb-6 sm:mb-8">
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: ["0%", "-2.5%", "0%"],
                y: [0, 3, 0],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -inset-x-8 inset-y-0"
      >
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0,88 C240,145 420,22 720,82 C1020,138 1220,28 1440,78 L1440,114 C1220,64 1020,170 720,116 C420,58 240,178 0,122 Z"
            fill="#FF5422"
          />
        </svg>
      </motion.div>

      <DriftTrack className="relative mx-auto h-full max-w-7xl px-3 flex items-center justify-evenly sm:justify-between gap-1.5 sm:gap-4">
        {waveCards.map((c, idx) => {
          const FloatWrapper = c.floatDir === "up" ? FloatUpCard : FloatDownCard;
          const hideOnNarrow = idx % 2 === 1;

          return (
            <FloatWrapper
              key={c.title}
              className={`${hideOnNarrow ? "hidden sm:block" : "block"} shrink-0 ${c.offsetClass}`}
            >
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <motion.div
                  animate={
                    reduceMotion
                      ? { rotate: c.rot }
                      : {
                          y: [0, idx % 2 === 0 ? -7 : 7, 0],
                          rotate: [c.rot, c.rot + (idx % 2 === 0 ? 1.8 : -1.8), c.rot],
                        }
                  }
                  transition={{
                    y: { duration: 4.5 + idx * 0.4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 5 + idx * 0.35, repeat: Infinity, ease: "easeInOut" },
                  }}
                  whileHover={reduceMotion ? undefined : { scale: 1.12, y: -10, rotate: 0 }}
                  className="relative z-10 hover:z-30"
                >
                  <Link
                    href={c.to}
                    className={`group relative overflow-hidden rounded-xl border border-white/15 p-2 sm:p-2.5 shadow-2xl flex flex-col justify-between transition-shadow hover:shadow-[0_20px_40px_rgba(255,84,34,0.35)] ${c.sizeClass}`}
                    style={{ background: c.bg }}
                  >
                    {c.previewImage && (
                      <>
                        <Image
                          src={c.previewImage}
                          alt=""
                          aria-hidden="true"
                          fill
                          sizes="140px"
                          className="object-cover object-top opacity-45 transition-all duration-300 group-hover:scale-105 group-hover:opacity-65"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20"
                        />
                      </>
                    )}

                    <span
                      className="relative z-10 text-[7px] sm:text-[8px] font-bold uppercase tracking-wider leading-none"
                      style={{ color: c.accent }}
                    >
                      {c.tag}
                    </span>
                    <span
                      className="relative z-10 text-[10px] sm:text-xs font-bold leading-tight"
                      style={{ color: c.text }}
                    >
                      {c.title}
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </FloatWrapper>
          );
        })}
      </DriftTrack>
    </div>
  );
}

export function FooterCopyrightMark({ year }: { year: number }) {
  const reduceMotion = Boolean(useReducedMotion());
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-center py-4 sm:py-6 flex flex-col items-center"
    >
      <Link
        href="/"
        aria-label="dieVekter home"
        className="mb-5 sm:mb-6 inline-flex items-center justify-center rounded-2xl bg-[#FFF9F4] px-5 py-3 shadow-xl ring-1 ring-white/20 transition-transform duration-300 hover:scale-105"
      >
        <Image
          src="/dievektor_full_logo.png"
          alt="dieVekter logo"
          width={180}
          height={64}
          className="h-12 sm:h-16 w-auto object-contain"
        />
      </Link>

      <p
        className="font-bold tracking-tight text-white flex items-center justify-center gap-3 sm:gap-5 flex-wrap"
        style={{ fontSize: "clamp(34px, 8vw, 108px)", lineHeight: 1 }}
      >
        <motion.span
          whileHover={reduceMotion ? undefined : { rotate: 180, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="inline-flex items-center justify-center rounded-full border-[4px] sm:border-[7px] border-[#FF5422] text-[#FF5422] w-[1em] h-[1em] text-[0.78em] leading-none font-bold cursor-default"
        >
          C
        </motion.span>
        <span>{year} dieVekter</span>
      </p>
    </motion.div>
  );
}
