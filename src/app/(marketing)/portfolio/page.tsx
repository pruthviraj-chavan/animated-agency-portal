import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Layers } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { CtaBand } from "@/components/home2/CtaBand";
import { AnimatedProjectsShowcase } from "@/components/dv/AnimatedProjectsShowcase";
import { MotionFadeIn } from "@/components/animation/MotionPrimitives";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "Systems Portfolio & Selected Product Builds";
const DESC =
  "Selected AI assistants, retail billing systems, websites and mobile apps engineered by DieVekter Tech.";

export const metadata: Metadata = buildPageMetadata({
  path: "/portfolio",
  title: TITLE,
  description: DESC,
});

const featuredSystems = [
  {
    tag: "AI Agents",
    title: "Multilingual Voice & WhatsApp Assistant",
    desc: "Automated inbound enquiry handling in Hindi, Marathi, Hinglish, and English with clean CRM lead sync.",
    metrics: ["24/7 coverage", "Instant CRM routing"],
    to: "/solutions/ai",
  },
  {
    tag: "Retail SaaS",
    title: "AI Billing & Stock Management",
    desc: "Smart retail checkout, barcode billing, low-stock alerts, and demand forecasting powering active apparel stores.",
    metrics: ["3 active stores", "Real-time inventory"],
    to: "/products",
  },
  {
    tag: "App & Advisory",
    title: "Custom Apps & Abroad Study Consultation",
    desc: "End-to-end iOS/Android engineering paired with global admissions & visa consultation workflows.",
    metrics: ["Cross-platform apps", "Global counselling"],
    to: "/services/mobile-app-development",
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/portfolio" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
        ]}
      />
      <SiteNav />
      <main className="flex-grow pt-24">
        <section className="dv-dot-bg py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
              Portfolio &amp; Work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141210] mb-5">
              Selected <span className="text-[#FF5422]">systems &amp; live builds.</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Web platforms, mobile apps, multilingual AI assistants, and retail systems shipped by
              Dievekter Tech.
            </p>
          </div>
        </section>

        <section className="border-t border-stone-100 bg-white py-14 sm:py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredSystems.map((item, idx) => (
                <MotionFadeIn key={item.title} delay={idx * 0.08}>
                  <div className="h-full rounded-2xl border border-[#FBE0D4] bg-[#FFF8F5] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:-translate-y-1.5 hover:border-[#FF5422]/40 hover:shadow-md transition-all">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="rounded-full bg-white border border-[#FBE0D4] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF5422]">
                          {item.tag}
                        </span>
                        <Layers className="h-4 w-4 text-stone-400" />
                      </div>
                      <h2 className="text-xl font-bold text-[#141210] mb-2">{item.title}</h2>
                      <p className="text-sm text-stone-600 leading-relaxed mb-5">{item.desc}</p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {item.metrics.map((m) => (
                          <span
                            key={m}
                            className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700 border border-stone-200/70"
                          >
                            {m}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={item.to}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF5422] hover:underline"
                      >
                        Explore solution <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </MotionFadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-10">
              <span className="inline-block rounded-full bg-[#141210] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-3">
                Client Websites
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141210]">
                Deployed Websites by <span className="text-[#FF5422]">Dievekter Tech</span>
              </h2>
            </div>

            <AnimatedProjectsShowcase showFilters />
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
