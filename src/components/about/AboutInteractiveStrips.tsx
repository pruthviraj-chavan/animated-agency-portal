"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, Github, Instagram, Linkedin, Sparkles } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  DriftWatermark,
  GrowBanner,
  TeamMiddleMotion,
  TeamSideMotion,
} from "@/components/animation/MotionPrimitives";

export interface TeamMemberItem {
  index: string;
  monogram: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
}

export interface RuledMetricItem {
  value: string;
  suffix: string;
  label: string;
  detail: string;
}

export const TEAM_MEMBERS: TeamMemberItem[] = [
  {
    index: "01",
    monogram: "PC",
    name: "Pruthviraj Chavan",
    role: "Founder & President",
    specialty: "System Architecture · Growth",
    bio: "Leads engineering architecture, client delivery, and AI automation systems at dieVekter.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    github: "https://github.com",
  },
  {
    index: "02",
    monogram: "ZN",
    name: "Zaid Nandaniwala",
    role: "CEO & MD",
    specialty: "Operations · Partnerships",
    bio: "Oversees strategic partnerships, delivery quality, and international client growth.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    github: "https://github.com",
  },
  {
    index: "03",
    monogram: "AS",
    name: "Akash Sakhare",
    role: "CTO & AI Architect",
    specialty: "AI Agents · Full-Stack",
    bio: "Directs agentic AI workflows, LLM pipelines, and scalable full-stack architecture.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

export const RULED_METRICS: RuledMetricItem[] = [
  {
    value: "40",
    suffix: "+",
    label: "Products & systems shipped",
    detail: "Live AI tools, websites and apps",
  },
  {
    value: "2k",
    suffix: "+",
    label: "Students & founders mentored",
    detail: "AI training across Maharashtra",
  },
  {
    value: "98",
    suffix: "%",
    label: "Client retention score",
    detail: "Long-term engineering partnerships",
  },
  {
    value: "50",
    suffix: "+",
    label: "Languages & workflows automated",
    detail: "Hindi, Marathi, Hinglish & English",
  },
];

const ORANGE_RIBBON = [
  "Systems that carry your voice.",
  "Websites visitors remember twice.",
  "AI agents that work like teammates.",
  "Built to scale cleanly.",
];

const GRAY_RIBBON = [
  "Automation with human empathy.",
  "Ideas engineered cleanly for scale.",
  "Software that ships on schedule.",
  "Built for ambitious growing teams.",
];

const SHOWCASE_STRIP_IMAGES = [
  { src: "/projects/bhrigu-tech.jpg", alt: "Bhrigu Tech web platform" },
  { src: "/projects/new-door-properties.jpg", alt: "New Door Properties website" },
  { src: "/projects/the-eventors.jpg", alt: "The Eventors showcase" },
  { src: "/projects/incite-computer.jpg", alt: "Incite Computer education portal" },
  { src: "/projects/vfa-gym.jpg", alt: "VFA Gym digital platform" },
  { src: "/projects/mahaa-connect-news.jpg", alt: "Mahaa Connect News portal" },
];

export function AboutHeroMedia() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none select-none overflow-hidden py-2" aria-hidden="true">
        <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-200/80 text-[52px] sm:text-[96px] lg:text-[138px] leading-none">
          software, AI &amp; study abroad
        </DriftWatermark>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl pb-6">
        <GrowBanner className="relative overflow-hidden rounded-3xl border border-stone-200/80 shadow-xl aspect-[16/9] bg-stone-100">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&h=820"
            alt="dieVekter engineering and advisory team collaborating on systems architecture"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#141210]/30 via-transparent to-transparent"
          />
        </GrowBanner>
      </div>
    </div>
  );
}

export function AboutRuledMetrics() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
      {RULED_METRICS.map((m, idx) => (
        <motion.div
          key={m.label}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, delay: idx * 0.05 }}
          className="group grid grid-cols-[110px_1fr_auto] sm:grid-cols-[160px_1fr_1fr_auto] items-center gap-4 py-6 sm:py-7 transition-colors hover:bg-[#FFF8F5]/75 px-2 -mx-2 rounded-lg"
        >
          <div className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141210]">
            {m.value}
            <sup className="text-lg sm:text-2xl font-bold text-[#FF5422] ml-0.5">{m.suffix}</sup>
          </div>
          <div className="text-sm sm:text-base font-medium text-[#141210] group-hover:text-[#FF5422] transition-colors">
            {m.label}
          </div>
          <div className="hidden sm:block text-xs text-stone-500">{m.detail}</div>
          <Link href="/projects" aria-label={`Explore projects related to ${m.label}`}>
            <ArrowRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-[#FF5422]" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export function AboutCrossedRibbons() {
  return (
    <div className="relative overflow-hidden py-10 sm:py-14 bg-white border-y border-stone-100" aria-hidden="true">
      <div className="-mx-6 rotate-[-1.8deg] bg-[#F4F3F1] border-y border-stone-200/80 py-3.5 shadow-sm overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...GRAY_RIBBON, ...GRAY_RIBBON, ...GRAY_RIBBON].map((text, idx) => (
            <span
              key={`gr-${idx}`}
              className="inline-flex items-center gap-6 px-4 text-sm sm:text-lg font-semibold text-[#141210] whitespace-nowrap"
            >
              {text}
              <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="-mx-6 -mt-4 rotate-[1.8deg] bg-[#FF5422] py-3.5 shadow-lg overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...ORANGE_RIBBON, ...ORANGE_RIBBON, ...ORANGE_RIBBON].map((text, idx) => (
            <span
              key={`or-${idx}`}
              className="inline-flex items-center gap-6 px-4 text-sm sm:text-lg font-semibold text-white whitespace-nowrap"
            >
              {text}
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function AboutShowcaseMarquee() {
  return (
    <div className="relative overflow-hidden py-4" aria-label="Selected client launches gallery">
      <motion.div
        className="flex w-max gap-4 px-2"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {[...SHOWCASE_STRIP_IMAGES, ...SHOWCASE_STRIP_IMAGES].map((item, idx) => (
          <div
            key={`${item.alt}-${idx}`}
            className="relative h-44 w-64 sm:h-52 sm:w-72 shrink-0 overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 256px, 288px"
              className="object-cover object-top"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function TeamMemberCard3D({ member, delay }: { member: TeamMemberItem; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(0, { stiffness: 260, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 22 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${glowX}% ${glowY}%, rgba(255, 84, 34, 0.16), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 14);
    rotateY.set((px - 0.5) * 14);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1100 }}
      className="h-full"
    >
      <motion.article
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        whileHover={reduceMotion ? undefined : { y: -8 }}
        className="group relative h-full min-h-[320px] rounded-3xl border border-[#FBE0D4] bg-white p-6 sm:p-7 shadow-[0_14px_40px_-18px_rgba(20,18,16,0.12)] transition-colors duration-300 hover:border-[#FF5422]/60 hover:shadow-[0_30px_60px_-20px_rgba(255,84,34,0.28)] flex flex-col justify-between"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          {!reduceMotion && (
            <motion.div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: spotlight }}
            />
          )}

          <div aria-hidden="true" className="absolute -right-6 -bottom-6 flex items-center justify-center select-none">
            <motion.div
              animate={reduceMotion ? undefined : { rotate: hovered ? 360 : 180 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="h-40 w-40 rounded-full border border-dashed border-[#FF5422]/20 flex items-center justify-center"
            >
              <div className="h-24 w-24 rounded-full border border-[#FBE0D4]" />
            </motion.div>
            <span className="absolute font-black text-6xl tracking-tighter text-[#FF5422]/[0.07] group-hover:text-[#FF5422]/[0.14] transition-colors duration-300">
              {member.monogram}
            </span>
          </div>
        </div>

        <div
          style={reduceMotion ? undefined : { transform: "translateZ(24px)" }}
          className="relative z-10 flex items-center justify-between gap-3"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.2em] text-stone-400 group-hover:text-[#FF5422] transition-colors">
            <span className="h-2 w-2 rounded-full bg-[#FF5422] animate-pulse" />
            {member.index}
          </span>
          <Sparkles className="h-4 w-4 text-[#FF5422]/60 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:text-[#FF5422]" />
        </div>

        <div
          style={reduceMotion ? undefined : { transform: "translateZ(36px)" }}
          className="relative z-10 my-6"
        >
          <div className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_6px_16px_rgba(255,84,34,0.3)] mb-3">
            {member.role}
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#141210] leading-tight group-hover:text-[#FF5422] transition-colors duration-300">
            {member.name}
          </h3>

          <div className="mt-2.5 h-[3px] w-10 rounded-full bg-[#FF5422] transition-all duration-300 group-hover:w-20" />

          <p className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-400">
            {member.specialty}
          </p>
          <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">{member.bio}</p>
        </div>

        <div
          style={reduceMotion ? undefined : { transform: "translateZ(28px)" }}
          className="relative z-10 mt-auto pt-4 border-t border-stone-100 flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="p-2 rounded-full border border-stone-200 bg-white text-stone-600 hover:border-[#FF5422] hover:bg-[#FF5422] hover:text-white transition-all hover:scale-110"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            )}
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on Instagram`}
                className="p-2 rounded-full border border-stone-200 bg-white text-stone-600 hover:border-[#FF5422] hover:bg-[#FF5422] hover:text-white transition-all hover:scale-110"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on GitHub`}
                className="p-2 rounded-full border border-stone-200 bg-white text-stone-600 hover:border-[#FF5422] hover:bg-[#FF5422] hover:text-white transition-all hover:scale-110"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400 group-hover:text-[#141210] transition-colors">
            Leadership
          </span>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function AboutTeamCardsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 py-6 px-3 sm:px-0">
      {TEAM_MEMBERS.map((member, idx) => {
        const Wrapper = idx === 1 ? TeamMiddleMotion : TeamSideMotion;
        return (
          <Wrapper key={member.name} className="h-full">
            <TeamMemberCard3D member={member} delay={idx * 0.08} />
          </Wrapper>
        );
      })}
    </div>
  );
}
