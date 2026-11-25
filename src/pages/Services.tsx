import { Link } from "react-router-dom";
import { ArrowUpRight, Compass, Search, Send, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { SeoHead } from "@/components/seo/SeoHead";
import {
  Sculptural3DBurst,
  Sculptural3DCapsules,
  Sculptural3DCross,
  Sculptural3DKnot,
  Sculptural3DStack,
  Sculptural3DTorus,
} from "@/components/dv/Sculptural3DIcons";
import { withDriftX, withWidthGrow } from "@/components/home2/ScrollEffects";
import { buildServiceSchema } from "@/data/seoConfig";
import { trackServiceCta } from "@/lib/analytics";

const DriftWatermark = withDriftX(motion.div);
const GrowBanner = withWidthGrow(motion.div);

const coreServices = [
  {
    id: "website-dev",
    title: "Website development",
    desc: "Fast, search-ready React websites and bespoke web platforms crafted to convert visitors.",
    path: "/services/website-development",
    Sculpture: Sculptural3DTorus,
  },
  {
    id: "ai-agents",
    title: "AI agents & voicebots",
    desc: "Multilingual voice and autonomous AI assistants wired into your real docs and CRM.",
    path: "/services/ai-agents",
    Sculpture: Sculptural3DCapsules,
  },
  {
    id: "automation",
    title: "Workflow automation",
    desc: "From CRM routing to notifications and reporting, eliminate repetitive manual busywork.",
    path: "/services/business-automation",
    Sculpture: Sculptural3DBurst,
  },
  {
    id: "ecommerce",
    title: "E-commerce solutions",
    desc: "Online storefronts with Razorpay/UPI checkout, live stock sync and mobile speed.",
    path: "/services/ecommerce-development",
    Sculpture: Sculptural3DCross,
  },
  {
    id: "mobile-apps",
    title: "Mobile app engineering",
    desc: "Cross-platform Android and iOS applications engineered with reliable APIs and clean UX.",
    path: "/services/mobile-app-development",
    Sculpture: Sculptural3DKnot,
  },
  {
    id: "study-abroad",
    title: "Study Abroad consultancy",
    desc: "Structured admissions counselling, Study in Germany checklists and student visa documentation support.",
    path: "/study-abroad",
    Sculpture: Sculptural3DStack,
  },
];

const additionalServices = [
  { label: "Custom Software", path: "/services/custom-software-development" },
  { label: "AI Chatbots", path: "/services/ai-chatbots" },
  { label: "CRM Automation", path: "/services/crm-automation" },
  { label: "API Integration", path: "/services/api-integration" },
  { label: "Cloud Solutions", path: "/services/cloud-solutions" },
  { label: "UI/UX Design", path: "/services/ui-ux-design" },
  { label: "SEO Optimization", path: "/services/seo-optimization" },
  { label: "WordPress Dev", path: "/services/wordpress-development" },
  { label: "AI Workshops", path: "/services/ai-training-workshops" },
];

const ORANGE_TICKER = [
  "Software engineered to convert and endure.",
  "Multilingual AI agents built for real business work.",
  "Global Study Abroad checklists tailored cleanly.",
  "Workflows automated with clarity and speed.",
];

const GRAY_TICKER = [
  "Custom web platforms, mobile apps & APIs.",
  "Ideas built cleanly from first wireframe to production.",
  "From customer conversation to completed action.",
  "Trusted in Kolhapur, Pune, India & beyond.",
];

const processSteps = [
  {
    icon: Search,
    title: "Research and positioning",
    desc: "We audit workflows, audience intent and constraints so every technical decision starts from real signal.",
  },
  {
    icon: Compass,
    title: "Shape the architecture",
    desc: "We structure the UX flow, data schemas and integrations that keep systems straightforward to run.",
  },
  {
    icon: TrendingUp,
    title: "Build all the details",
    desc: "We implement production code, responsive polish, SEO foundations and test edge cases end to end.",
  },
  {
    icon: Send,
    title: "Launch and support",
    desc: "We deploy cleanly to production with analytics, backups and responsive iteration as usage grows.",
  },
];

export default function Services() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <SeoHead
        path="/services"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        schemas={[
          buildServiceSchema({
            name: "Technology & Software Development Services",
            description:
              "Custom websites, mobile apps, custom software, AI agents, chatbots, CRM & process automation, API integrations and cloud engineering.",
            path: "/services",
            serviceType: "Software Engineering & AI Development",
          }),
        ]}
      />

      <SiteNav />

      <main className="dv-dot-bg flex-grow pt-24 sm:pt-28">
        {/* 1. Editorial Left-Aligned Hero Header (matching Agenciex Services visual hierarchy) */}
        <section className="relative pt-8 sm:pt-12 pb-4">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <div className="relative mx-auto max-w-xl">
              <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                Our Services
              </span>

              <h1
                className="mt-4 font-bold tracking-tight text-[#141210]"
                style={{ fontSize: "clamp(30px, 4.3vw, 50px)", lineHeight: 1.06 }}
              >
                Websites, AI agents and
                <br />
                software with a
                <br />
                point of view.
              </h1>

              <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-stone-500">
                We engineer resilient websites, apps, AI assistants and Study Abroad guidance that
                deliver measurable outcomes.
              </p>

              {/* Discreet right orange target dot accent */}
              <div
                aria-hidden="true"
                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 items-center justify-center rounded-full border border-[#FF5422]/45 bg-white/85"
              >
                <span className="h-1 w-1 rounded-full bg-[#FF5422]" />
              </div>
            </div>
          </div>

          {/* 2. Drifting Watermark + Stepped Centerpiece Image */}
          <div
            className="pointer-events-none select-none overflow-hidden pt-8 sm:pt-10"
            aria-hidden="true"
          >
            <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-200/75 text-[50px] sm:text-[92px] lg:text-[134px] leading-none">
              engineering with a point of view
            </DriftWatermark>
          </div>

          <div className="mt-2 sm:mt-4 flex justify-center px-0 lg:px-6">
            <GrowBanner className="relative overflow-hidden bg-white aspect-[16/8.2] sm:aspect-[16/7.2] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&h=820"
                alt="dieVekter engineering team collaborating on software and AI products"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
              />
              {/* Iconic stepped architectural corner cutouts matching reference */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 h-[40%] w-[10%] bg-white"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 h-[40%] w-[10%] bg-white"
              />
            </GrowBanner>
          </div>
        </section>

        {/* 3. Centered 6-Card Blush-Peach 3D Sculpture Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                Capabilities
              </span>
              <h2
                className="mt-4 mx-auto max-w-md font-bold tracking-tight text-[#141210]"
                style={{ fontSize: "clamp(24px, 3.3vw, 38px)", lineHeight: 1.1 }}
              >
                We help businesses launch,
                <br />
                stand out and scale faster.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {coreServices.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={s.path}
                    onClick={() => trackServiceCta(s.path, "/services")}
                    className="group relative flex h-full min-h-[268px] flex-col overflow-hidden rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5422]/45 hover:shadow-[0_24px_48px_-20px_rgba(255,84,34,0.22)]"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -bottom-10 h-52 w-52 rounded-full bg-[#FFEAE1]/80 transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="relative z-10">
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#141210]">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-stone-600 max-w-[28ch]">
                        {s.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto pt-6 flex items-end justify-between">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5422] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                      <div className="transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
                        <s.Sculpture />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Compact directory pills preserving all internal service links */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {additionalServices.map((srv) => (
                <Link
                  key={srv.path}
                  to={srv.path}
                  onClick={() => trackServiceCta(srv.path, "/services")}
                  className="rounded-full border border-stone-200 bg-white px-3.5 py-1.5 text-[11px] font-medium text-stone-600 transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
                >
                  {srv.label}
                </Link>
              ))}
            </div>

            <p className="mt-8 text-center text-xs sm:text-sm text-stone-500">
              Let&apos;s make great work together.{" "}
              <Link
                to="/contact"
                className="font-semibold text-[#141210] underline underline-offset-4 hover:text-[#FF5422] transition-colors"
              >
                Start a project.
              </Link>
            </p>
          </div>
        </section>

        {/* 4. Crossed Diagonal Ticker Ribbons */}
        <section className="relative overflow-hidden py-12 sm:py-16 bg-white" aria-hidden="true">
          <div className="-mx-6 rotate-[-1.8deg] bg-[#F4F3F1] border-y border-stone-200/80 py-3.5 shadow-sm">
            <div className="dv-ribbon-track dv-ribbon-track--reverse">
              {[...GRAY_TICKER, ...GRAY_TICKER, ...GRAY_TICKER].map((text, idx) => (
                <span
                  key={`sg-${idx}`}
                  className="inline-flex items-center gap-6 px-4 text-sm sm:text-lg font-semibold text-[#141210]"
                >
                  {text}
                  <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
                </span>
              ))}
            </div>
          </div>

          <div className="-mx-6 -mt-4 rotate-[1.8deg] bg-[#FF5422] py-3.5 shadow-lg">
            <div className="dv-ribbon-track">
              {[...ORANGE_TICKER, ...ORANGE_TICKER, ...ORANGE_TICKER].map((text, idx) => (
                <span
                  key={`so-${idx}`}
                  className="inline-flex items-center gap-6 px-4 text-sm sm:text-lg font-semibold text-white"
                >
                  {text}
                  <span className="h-1.5 w-1.5 rounded-full bg-white/75" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. 4-Column Horizontal Process Row (matching "We craft digital experiences people remember.") */}
        <section className="dv-dot-bg pt-14 sm:pt-20 pb-8">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <div className="max-w-lg">
              <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                Our Process
              </span>
              <h2
                className="mt-4 font-bold tracking-tight text-[#141210]"
                style={{ fontSize: "clamp(24px, 3.2vw, 38px)", lineHeight: 1.08 }}
              >
                We engineer digital systems teams remember and rely on.
              </h2>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-medium text-[#141210] shadow-sm transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
              >
                Book a consultation <ArrowUpRight className="h-3.5 w-3.5 text-[#FF5422]" />
              </Link>
            </div>

            <div className="mt-10 border-t border-stone-200 pt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title}>
                    <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#FBE0D4] bg-[#FFF5F1] text-[#FF5422]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-bold text-[#141210] mb-2">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-stone-500">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom full-width watermark flowing cleanly into dark footer */}
          <div
            className="pointer-events-none select-none overflow-hidden pt-12 sm:pt-16 pb-2"
            aria-hidden="true"
          >
            <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-200/75 text-[52px] sm:text-[96px] lg:text-[138px] leading-none">
              dieVekter technology &amp; study abroad
            </DriftWatermark>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
