import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  withDriftX,
  withFloatDown,
  withFloatUp,
  withScaleUp,
} from "@/components/home2/ScrollEffects";
import { trackContactAction } from "@/lib/analytics";

const DriftTrack = withDriftX(motion.div);
const FloatUpCard = withFloatUp(motion.div);
const FloatDownCard = withFloatDown(motion.div);
const ScaleGlow = withScaleUp(motion.div);

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dievekter" },
  { label: "GitHub", href: "https://github.com/dievekter" },
  { label: "Instagram", href: "https://www.instagram.com/dievekter_tech/" },
  {
    label: "WhatsApp",
    href: "https://wa.me/919404895667?text=Hi%20Dievekter%20Tech!%20I%20would%20like%20to%20discuss%20a%20project.",
  },
];

const footerColumns = [
  {
    heading: "Technology Solutions",
    links: [
      { name: "All Technology Services", path: "/services" },
      { name: "Website Development", path: "/services/website-development" },
      { name: "Mobile App Development", path: "/services/mobile-app-development" },
      { name: "Custom Software", path: "/services/custom-software-development" },
      { name: "AI Agents & Voicebots", path: "/services/ai-agents" },
      { name: "Business & CRM Automation", path: "/services/business-automation" },
      { name: "API & Cloud Solutions", path: "/services/api-integration" },
    ],
  },
  {
    heading: "Study Abroad",
    links: [
      { name: "Study Abroad Consultancy", path: "/study-abroad" },
      { name: "Study in Germany Guide", path: "/study-abroad/germany" },
      { name: "University Selection", path: "/study-abroad/university-selection" },
      { name: "Admission Assistance", path: "/study-abroad/admission-assistance" },
      { name: "Visa & Pre-Departure", path: "/study-abroad/visa-guidance" },
      { name: "Student Resources & FAQs", path: "/study-abroad/student-resources" },
    ],
  },
  {
    heading: "Company & Journal",
    links: [
      { name: "About dieVekter", path: "/about" },
      { name: "Shipped Projects", path: "/projects" },
      { name: "Systems Portfolio", path: "/portfolio" },
      { name: "Software Products", path: "/products" },
      { name: "Editorial Journal", path: "/blog" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    heading: "Legal & Region",
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms & Disclaimers", path: "/terms" },
      { name: "Careers & Jobs", path: "/jobs" },
      { name: "Internships", path: "/internship" },
      { name: "Developer Kit", path: "/development-kit" },
    ],
  },
];

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

export function SiteFooter() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <footer className="relative overflow-hidden bg-white text-[#141210]">
      {/* 4-column social strip */}
      <div className="border-t border-stone-200 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
          {socials.map((s, idx) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => {
                if (s.label === "WhatsApp") {
                  trackContactAction("whatsapp", "footer");
                }
              }}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.35 }}
              className="group relative flex items-center justify-center gap-1.5 py-5 sm:py-6 text-sm font-medium text-[#141210] transition-colors hover:bg-[#FFF4F0]"
            >
              <span>{s.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#FF5422] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Dark charcoal editorial band */}
      <div className="relative overflow-hidden bg-[#161514] text-white pt-12 sm:pt-14 pb-10">
        <ScaleGlow
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#FF5422]/12 blur-[120px]"
        />

        {/* Flowing Orange Wave Ribbon + Floating Cards */}
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
                        to={c.to}
                        className={`group relative overflow-hidden rounded-xl border border-white/15 p-2 sm:p-2.5 shadow-2xl flex flex-col justify-between transition-shadow hover:shadow-[0_20px_40px_rgba(255,84,34,0.35)] ${c.sizeClass}`}
                        style={{ background: c.bg }}
                      >
                        {c.previewImage && (
                          <>
                            <img
                              src={c.previewImage}
                              alt=""
                              aria-hidden="true"
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover object-top opacity-45 transition-all duration-300 group-hover:scale-105 group-hover:opacity-65"
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

        <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
          {/* Brand Logo + Giant animated copyright statement */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center py-4 sm:py-6 flex flex-col items-center"
          >
            <Link
              to="/"
              aria-label="dieVekter home"
              className="mb-5 sm:mb-6 inline-flex items-center justify-center rounded-2xl bg-[#FFF9F4] px-5 py-3 shadow-xl ring-1 ring-white/20 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/dievektor_full_logo.png"
                alt="dieVekter logo"
                className="h-12 sm:h-16 w-auto object-contain"
                loading="lazy"
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
              <span>{new Date().getFullYear()} dieVekter</span>
            </p>
          </motion.div>

          {/* Direct contact & regional strip */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs text-stone-400">
            <a
              href="mailto:team.dievekter@gmail.com"
              onClick={() => trackContactAction("email", "footer")}
              className="hover:text-white transition-colors"
            >
              team.dievekter@gmail.com
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://wa.me/919404895667"
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => trackContactAction("whatsapp", "footer")}
              className="hover:text-[#FF5422] transition-colors"
            >
              WhatsApp: +91 94048 95667
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="tel:+919404895667"
              onClick={() => trackContactAction("phone", "footer")}
              className="hover:text-white transition-colors"
            >
              Call: +91 94048 95667
            </a>
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
            <span>Radhanagari, Kolhapur, Maharashtra, India</span>
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
            <span>UDYAM-MH-15-0320983</span>
          </div>

          {/* Structured 4-column navigation directory */}
          <nav
            aria-label="Footer sitemap"
            className="mt-10 border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs"
          >
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF5422] mb-3">
                  {col.heading}
                </p>
                <ul className="space-y-2">
                  {col.links.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="text-stone-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Bottom bar */}
          <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-stone-400">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} DIEVEKTER (dieVekter). All rights reserved.
            </p>
            <p className="text-stone-400 text-center">
              Serving Kolhapur · Pune · Maharashtra · India &amp; Global Clients
            </p>
            <p className="text-stone-400 text-center md:text-right">
              Technology Solutions &amp; Study Abroad Consultancy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
