import { useRef, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { SeoHead } from "@/components/seo/SeoHead";
import { buildLocalBusinessSchema, buildOrganizationSchema } from "@/data/seoConfig";
import {
  ArrowRight,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { STUDIO_PROJECTS } from "@/data/projects";
import {
  withDriftX,
  withTeamMiddle,
  withTeamSide,
  withWidthGrow,
} from "@/components/home2/ScrollEffects";

const DriftWatermark = withDriftX(motion.div);
const GrowBanner = withWidthGrow(motion.div);
const TeamSideMotion = withTeamSide(motion.div);
const TeamMiddleMotion = withTeamMiddle(motion.div);

interface TeamMember {
  index: string;
  monogram: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    index: "01",
    monogram: "PC",
    name: "Pruthviraj Chavan",
    role: "Founder & President",
    focus: "Product Vision · Full-Stack Systems",
    bio: "Leads dieVekter's long-term product direction, technical architecture, and client partnerships — Upwork Rising Talent with 100% Job Success.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/dievekter",
      instagram: "https://www.instagram.com/dievekter_tech/",
      github: "https://github.com/dievekter",
    },
  },
  {
    index: "02",
    monogram: "ZN",
    name: "Zaid Nandaniwala",
    role: "CEO & MD",
    focus: "Executive Strategy · Global Growth",
    bio: "Steers company operations, strategic expansion, and global client engagements to deliver reliable business outcomes at scale.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/dievekter",
      instagram: "https://www.instagram.com/dievekter_tech/",
    },
  },
  {
    index: "03",
    monogram: "AS",
    name: "Akash Sakhare",
    role: "CTO & AI Architect",
    focus: "Agentic AI · Cloud Architecture",
    bio: "Designs autonomous multi-agent systems, LLM orchestration, multilingual voice pipelines, and resilient cloud software foundations.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/dievekter",
      instagram: "https://www.instagram.com/dievekter_tech/",
      github: "https://github.com/dievekter",
    },
  },
];

const ruledMetrics = [
  {
    value: "40",
    suffix: "+",
    label: "Systems shipped",
    detail: "Production AI agents, websites & mobile apps across industries.",
    to: "/projects",
  },
  {
    value: "92",
    suffix: "%",
    label: "Workflow efficiency",
    detail: "Manual repetitive work automated with custom APIs and bots.",
    to: "/solutions/automation",
  },
  {
    value: "98",
    suffix: "%",
    label: "Client retention",
    detail: "Upwork Rising Talent · 100% Job Success · Udyam verified.",
    to: "/portfolio",
  },
  {
    value: "2k",
    suffix: "+",
    label: "Students mentored",
    detail: "Hands-on AI workshops across 20+ schools plus global study advice.",
    to: "/services/ai-training-workshops",
  },
];

const valuePillars = [
  {
    title: "Engineering craft",
    desc: "Clean, maintainable codebases and resilient cloud systems built to last in production.",
  },
  {
    title: "Built for real impact",
    desc: "Multilingual AI and software focused on measurable time saved and customer conversion.",
  },
  {
    title: "Direct leadership",
    desc: "Transparent communication, realistic timelines, and complete ownership at handover.",
  },
];

const showcaseStripImages = [
  { src: "/projects/bhrigu-tech.jpg", alt: "Bhrigu Tech web platform" },
  { src: "/projects/new-door-properties.jpg", alt: "New Door Properties website" },
  { src: "/projects/the-eventors.jpg", alt: "The Eventors showcase" },
  { src: "/dievektor.png", alt: "dieVekter studio emblem" },
  { src: "/projects/jaihind-electricals.jpg", alt: "Jaihind Electricals website" },
  { src: "/projects/mahaa-connect-news.jpg", alt: "Mahaa Connect News portal" },
  { src: "/projects/incite-computer-phondaghat.jpg", alt: "Incite Computer Phondaghat portal" },
];

const ORANGE_RIBBON = [
  "AI agents built for real business work.",
  "Websites and apps people rely on.",
  "Multilingual voice & chat automation.",
  "Abroad study consultation & tech guidance.",
];

const GRAY_RIBBON = [
  "Software systems with a clear point of view.",
  "Ideas engineered cleanly for scale.",
  "From customer conversation to completed action.",
  "Built in India for global teams.",
];

function TeamMemberCard3D({ member, delay }: { member: TeamMember; delay: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [10, -10]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), {
    stiffness: 220,
    damping: 22,
  });
  const sheenBg = useTransform([mouseX, mouseY], ([x, y]) => {
    const px = Number(x) * 100;
    const py = Number(y) * 100;
    return `radial-gradient(380px circle at ${px}% ${py}%, rgba(255, 84, 34, 0.16), transparent 65%)`;
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.article
        ref={cardRef}
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
        whileHover={reduceMotion ? undefined : { y: -6 }}
        className="group relative h-full min-h-[320px] rounded-3xl border border-[#FBE0D4] bg-white p-6 sm:p-7 shadow-[0_14px_40px_-18px_rgba(20,18,16,0.12)] transition-colors duration-300 hover:border-[#FF5422]/60 hover:shadow-[0_30px_60px_-20px_rgba(255,84,34,0.28)] flex flex-col justify-between"
      >
        {/* Clipped decorative effects container so preserve-3d never flattens */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: sheenBg }}
            />
          )}

          <div
            aria-hidden="true"
            className="absolute -right-6 -bottom-6 flex items-center justify-center select-none"
          >
            <motion.div
              animate={reduceMotion ? undefined : { rotate: 360 }}
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

        {/* Top header layer floating in Z-space */}
        <div
          className="relative z-10 flex items-center justify-between gap-3"
          style={reduceMotion ? undefined : { transform: "translateZ(36px)" }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.2em] text-stone-400 group-hover:text-[#FF5422] transition-colors">
            <span className="h-2 w-2 rounded-full bg-[#FF5422] animate-pulse" />
            {member.index} · EXEC
          </span>
          <Sparkles
            className="h-4 w-4 text-[#FF5422]/60 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:text-[#FF5422]"
            aria-hidden="true"
          />
        </div>

        {/* Center Hero Name + Role popping deepest in Z-space */}
        <div
          className="relative z-10 my-6"
          style={reduceMotion ? undefined : { transform: "translateZ(60px)" }}
        >
          <div className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_6px_16px_rgba(255,84,34,0.3)] mb-3">
            {member.role}
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#141210] leading-tight group-hover:text-[#FF5422] transition-colors duration-300">
            {member.name}
          </h3>

          <div className="mt-2.5 h-[3px] w-10 rounded-full bg-[#FF5422] transition-all duration-300 group-hover:w-20" />

          <p className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-400">
            {member.focus}
          </p>
          <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">{member.bio}</p>
        </div>

        {/* Bottom social links */}
        <div
          className="relative z-10 mt-auto pt-4 border-t border-stone-100 flex items-center justify-between gap-3"
          style={reduceMotion ? undefined : { transform: "translateZ(32px)" }}
        >
          <div className="flex items-center gap-2">
            {member.socialLinks.linkedin && (
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                className="p-2 rounded-full border border-stone-200 bg-white text-stone-600 hover:border-[#FF5422] hover:bg-[#FF5422] hover:text-white transition-all hover:scale-110"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            )}
            {member.socialLinks.instagram && (
              <a
                href={member.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} Instagram`}
                className="p-2 rounded-full border border-stone-200 bg-white text-stone-600 hover:border-[#FF5422] hover:bg-[#FF5422] hover:text-white transition-all hover:scale-110"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
            )}
            {member.socialLinks.github && (
              <a
                href={member.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} GitHub`}
                className="p-2 rounded-full border border-stone-200 bg-white text-stone-600 hover:border-[#FF5422] hover:bg-[#FF5422] hover:text-white transition-all hover:scale-110"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}
          </div>

          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400 group-hover:text-[#141210] transition-colors">
            dieVekter
          </span>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function About() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <SeoHead
        path="/about"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ]}
        schemas={[buildOrganizationSchema(), buildLocalBusinessSchema()]}
      />

      <SiteNav />

      <main className="dv-dot-bg flex-grow pt-24 sm:pt-28">
        {/* 1. Editorial Hero Header matching reference */}
        <section className="relative pt-8 sm:pt-12 pb-4">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <div className="relative mx-auto max-w-2xl">
              <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                Our Studio
              </span>

              <h1
                className="mt-4 font-bold tracking-tight text-[#141210]"
                style={{ fontSize: "clamp(30px, 4.3vw, 50px)", lineHeight: 1.06 }}
              >
                A focused studio for
                <br />
                businesses with big plans.
              </h1>

              <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-stone-500">
                We build multilingual AI agents, reliable software and production automation for
                ambitious teams.
              </p>

              <div
                aria-hidden="true"
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 items-center justify-center rounded-full border border-[#FF5422]/45 bg-white/80"
              >
                <span className="h-1 w-1 rounded-full bg-[#FF5422]" />
              </div>
            </div>
          </div>

          {/* 2. Drifting Watermark + Scroll-Expanding Wide Studio Photo (withWidthGrow) */}
          <div
            className="pointer-events-none select-none overflow-hidden pt-8 sm:pt-10"
            aria-hidden="true"
          >
            <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-200/75 text-[52px] sm:text-[92px] lg:text-[134px] leading-none">
              ai agents, software &amp; automation studio
            </DriftWatermark>
          </div>

          <div className="mt-2 sm:mt-4 flex justify-center px-0 lg:px-6">
            <GrowBanner className="relative overflow-hidden lg:rounded-3xl border-y lg:border border-stone-200 bg-white shadow-xl aspect-[16/8.2] sm:aspect-[16/7]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&h=820"
                alt="dieVekter engineering and AI product collaboration"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
              />
            </GrowBanner>
          </div>
        </section>

        {/* 3. Studio Split Intro + Horizontal Ruled Metrics */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] items-end pb-12">
              <div>
                <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  About Us
                </span>
                <h2
                  className="mt-4 font-bold tracking-tight text-[#141210]"
                  style={{ fontSize: "clamp(26px, 3.6vw, 42px)", lineHeight: 1.08 }}
                >
                  We are an AI &amp; engineering studio working with teams across India and
                  globally.
                </h2>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-stone-500">
                Registered Indian Micro Enterprise (Udyam UDYAM-MH-15-0320983 &amp; D-U-N-S
                312163123), built around small senior teams shipping dependable production software.
              </p>
            </div>

            <div className="border-b border-stone-200">
              {ruledMetrics.map((m, idx) => (
                <motion.div
                  key={m.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.35 }}
                >
                  <Link
                    to={m.to}
                    className="group grid grid-cols-[100px_1fr_auto] sm:grid-cols-[150px_1fr_1.3fr_auto] items-center gap-4 border-t border-stone-200 py-5 sm:py-6 transition-colors hover:bg-[#FFF8F5]/75 px-2 -mx-2 rounded-lg"
                  >
                    <span className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141210]">
                      {m.value}
                      <sup className="text-lg sm:text-2xl font-bold text-[#FF5422] ml-0.5">
                        {m.suffix}
                      </sup>
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#141210] group-hover:text-[#FF5422] transition-colors">
                      {m.label}
                    </span>
                    <span className="hidden sm:block text-xs text-stone-500">{m.detail}</span>
                    <ArrowRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-[#FF5422]" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 text-center text-xs sm:text-sm text-stone-500">
              Let&apos;s make great work together.{" "}
              <Link
                to="/contact"
                className="font-semibold text-[#141210] underline underline-offset-4 hover:text-[#FF5422]"
              >
                Start a project.
              </Link>
            </p>
          </div>
        </section>

        {/* 4. Crossed Diagonal Ticker Ribbons */}
        <div className="relative overflow-hidden py-10 sm:py-14 bg-white border-y border-stone-100">
          <div className="-mx-6 rotate-[-1.8deg] bg-[#F4F3F1] border-y border-stone-200/80 py-3.5 shadow-sm overflow-hidden">
            <motion.div
              className="flex w-max"
              animate={reduceMotion ? undefined : { x: ["-50%", "0%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...GRAY_RIBBON, ...GRAY_RIBBON, ...GRAY_RIBBON].map((text, idx) => (
                <span
                  key={`ab-g-${idx}`}
                  className="inline-flex items-center gap-6 px-4 text-sm sm:text-lg font-semibold text-[#141210] whitespace-nowrap"
                >
                  {text}
                  <span className="h-1.5 w-1.5 rounded-full bg-stone-400" aria-hidden="true" />
                </span>
              ))}
            </motion.div>
          </div>

          <div className="-mx-6 -mt-4 rotate-[1.8deg] bg-[#FF5422] py-3.5 shadow-lg overflow-hidden">
            <motion.div
              className="flex w-max"
              animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              {[...ORANGE_RIBBON, ...ORANGE_RIBBON, ...ORANGE_RIBBON].map((text, idx) => (
                <span
                  key={`ab-o-${idx}`}
                  className="inline-flex items-center gap-6 px-4 text-sm sm:text-lg font-semibold text-white whitespace-nowrap"
                >
                  {text}
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" aria-hidden="true" />
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 5. Trusted Clients Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl text-center">
            <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              Our Clients
            </span>
            <h2
              className="mt-4 font-bold tracking-tight text-[#141210]"
              style={{ fontSize: "clamp(26px, 3.6vw, 40px)", lineHeight: 1.1 }}
            >
              Trusted by businesses that
              <br />
              care about craft.
            </h2>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 items-center">
              {STUDIO_PROJECTS.slice(0, 8).map((client) => (
                <a
                  key={client.id}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 text-sm font-semibold text-stone-700 hover:text-[#FF5422] transition-colors"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#141210] text-white group-hover:bg-[#FF5422] transition-colors">
                    <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="truncate">{client.title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Continuous Horizontal Showcase Gallery Strip */}
        <div className="relative overflow-hidden py-4" aria-label="Selected client launches gallery">
          <motion.div
            className="flex w-max gap-4 px-2"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          >
            {[...showcaseStripImages, ...showcaseStripImages].map((item, idx) => (
              <div
                key={`${item.alt}-${idx}`}
                className="h-44 w-64 sm:h-52 sm:w-72 shrink-0 overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* 7. Values Trio + Meet Our Team (3D Cards, Zero Photos) */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <div className="max-w-lg mb-8">
              <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white mb-4">
                Leadership
              </span>
              <h2
                className="font-bold tracking-tight text-[#141210]"
                style={{ fontSize: "clamp(26px, 3.6vw, 40px)", lineHeight: 1.12 }}
              >
                Meet Our Team — shaping systems people rely on.
              </h2>
            </div>

            {/* 3 Soft Blush Studio Principle Cards matching reference */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {valuePillars.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-5 sm:p-6"
                >
                  <h3 className="text-sm font-bold text-[#141210]">{v.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* 3D Leadership Cards (Pruthviraj Chavan, Zaid Nandaniwala, Akash Sakhare — NO images) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 py-6 px-3 sm:px-0">
              {teamMembers.map((member, idx) => {
                const Wrapper = idx === 1 ? TeamMiddleMotion : TeamSideMotion;
                return (
                  <Wrapper key={member.name} className="h-full">
                    <TeamMemberCard3D member={member} delay={idx * 0.08} />
                  </Wrapper>
                );
              })}
            </div>

            <p className="mt-14 text-center text-xs sm:text-sm text-stone-500">
              Want to collaborate with our team on your next product?{" "}
              <Link
                to="/contact"
                className="font-semibold text-[#141210] underline underline-offset-4 hover:text-[#FF5422]"
              >
                Contact us.
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
