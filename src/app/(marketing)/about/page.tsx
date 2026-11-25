import type { Metadata } from "next";
import Link from "next/link";
import { Globe, ShieldCheck } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { CtaBand } from "@/components/home2/CtaBand";
import {
  AboutCrossedRibbons,
  AboutHeroMedia,
  AboutRuledMetrics,
  AboutShowcaseMarquee,
  AboutTeamCardsGrid,
} from "@/components/about/AboutInteractiveStrips";
import { JsonLd } from "@/components/seo/JsonLd";
import { STUDIO_PROJECTS } from "@/data/projects";
import { SITE_CONFIG } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
} from "@/lib/seo/schema";

const TITLE = "About dieVekter | Technology Studio & Study Abroad Advisory in India";
const DESC =
  "Meet the Udyam-registered DIEVEKTER team in Radhanagari, Kolhapur building custom software, AI systems and overseas education guidance for students and businesses.";

export const metadata: Metadata = buildPageMetadata({
  path: "/about",
  title: TITLE,
  description: DESC,
});

const valuePillars = [
  {
    title: "Engineering craft",
    desc: "Clean, maintainable codebases and resilient cloud systems built to last in production.",
  },
  {
    title: "Measurable impact",
    desc: "Multilingual AI and software focused on measurable time saved and customer conversion.",
  },
  {
    title: "Transparent partnership",
    desc: "Direct founder communication, weekly milestones and clear Study Abroad advisory without fake promises.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/about" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
          buildOrganizationSchema(),
          buildLocalBusinessSchema(),
        ]}
      />
      <SiteNav />

      <main className="dv-dot-bg flex-grow pt-24 sm:pt-28">
        {/* 1. Editorial Hero */}
        <section className="relative pt-8 sm:pt-12 pb-4">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <div className="relative mx-auto max-w-2xl">
              <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                About us
              </span>

              <h1
                className="mt-4 font-bold tracking-tight text-[#141210]"
                style={{ fontSize: "clamp(38px, 5.2vw, 64px)", lineHeight: 1.03 }}
              >
                A studio built for teams &amp; students with big plans.
              </h1>

              <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-stone-500">
                Custom software, multilingual AI agents, and transparent Study Abroad guidance from
                Kolhapur &amp; Pune.
              </p>

              <div
                aria-hidden="true"
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 items-center justify-center rounded-full border border-[#FF5422]/40"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5422]" />
              </div>
            </div>
          </div>

          <AboutHeroMedia />
        </section>

        {/* 2. Split Narrative + Ruled Metrics List */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              What we do
            </span>

            <div className="mt-5 grid gap-6 md:grid-cols-[1.25fr_0.9fr] md:items-end">
              <h2
                className="font-bold tracking-tight text-[#141210]"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.08 }}
              >
                A focused technology studio shipping digital products &amp; overseas education
                pathways.
              </h2>

              <p className="text-xs sm:text-sm leading-relaxed text-stone-500">
                Founded in {SITE_CONFIG.city}, {SITE_CONFIG.district} ({SITE_CONFIG.udyam}),
                dieVekter works closely with businesses across India and students targeting
                universities in Germany and globally.
              </p>
            </div>

            <AboutRuledMetrics />

            <p className="mt-10 text-center text-xs sm:text-sm text-stone-500">
              Let&apos;s build something meaningful together.{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#141210] underline underline-offset-4 hover:text-[#FF5422]"
              >
                Start a conversation
              </Link>
            </p>
          </div>
        </section>

        {/* 3. Crossed Diagonal Ticker Ribbons */}
        <AboutCrossedRibbons />

        {/* 4. Trusted by Client Brands Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl text-center">
            <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              Clients &amp; Partners
            </span>

            <h2
              className="mt-4 font-bold tracking-tight text-[#141210]"
              style={{ fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: 1.15 }}
            >
              Trusted by growing organizations.
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

        {/* 5. Continuous Horizontal Showcase Gallery Strip */}
        <AboutShowcaseMarquee />

        {/* 6. Leadership & Engineering Team Section */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <div className="max-w-lg mb-8">
              <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white mb-4">
                The Team
              </span>
              <h2
                className="font-bold tracking-tight text-[#141210]"
                style={{ fontSize: "clamp(28px, 3.6vw, 42px)", lineHeight: 1.1 }}
              >
                Our leadership shapes systems people rely on.
              </h2>
            </div>

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

            <AboutTeamCardsGrid />

            <div className="mt-10 rounded-2xl border border-stone-200 bg-[#FFF8F5] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-[#FF5422] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#141210]">
                    Verified Indian Enterprise — {SITE_CONFIG.legalName}
                  </p>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Udyam Registration: {SITE_CONFIG.udyam} · D-U-N-S: {SITE_CONFIG.duns} ·{" "}
                    {SITE_CONFIG.city}, {SITE_CONFIG.district}, {SITE_CONFIG.region}
                  </p>
                </div>
              </div>
              <Link
                href="/privacy"
                className="shrink-0 text-xs font-semibold text-[#FF5422] hover:underline"
              >
                Verification &amp; privacy disclosures →
              </Link>
            </div>

            <p className="mt-12 text-center text-xs sm:text-sm text-stone-500">
              Want to collaborate on software or plan your studies abroad?{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#141210] underline underline-offset-4 hover:text-[#FF5422]"
              >
                Get in touch
              </Link>
            </p>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
