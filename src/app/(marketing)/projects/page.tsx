import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { CtaBand } from "@/components/home2/CtaBand";
import {
  AnimatedProjectsShowcase,
  ProjectDomainMarquee,
} from "@/components/dv/AnimatedProjectsShowcase";
import { DriftWatermark, MotionFadeIn, ScaleGlow } from "@/components/animation/MotionPrimitives";
import { JsonLd } from "@/components/seo/JsonLd";
import { STUDIO_PROJECTS } from "@/data/projects";
import { SITE_CONFIG } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "Shipped Websites & Client Projects Portfolio";
const DESC =
  "Browse live client websites and web platforms built by DieVekter Tech across technology, education, real estate, fitness, events and digital media.";

export const metadata: Metadata = buildPageMetadata({
  path: "/projects",
  title: TITLE,
  description: DESC,
});

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/projects" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
      <SiteNav />
      <main className="flex-grow pt-24">
        <section className="dv-dot-bg relative overflow-hidden pt-16 sm:pt-20 pb-8">
          <ScaleGlow
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#FF5422]/12 blur-3xl"
          />

          <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
            <MotionFadeIn>
              <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
                Dievekter Tech · Live Websites
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141210] mb-5">
                Our Shipped <span className="text-[#FF5422]">Projects.</span>
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Explore {STUDIO_PROJECTS.length} live client websites and web platforms crafted by
                Dievekter Tech across technology, education, real estate, fitness, events, and
                digital media.
              </p>
            </MotionFadeIn>
          </div>

          <div className="pointer-events-none select-none overflow-hidden pt-8" aria-hidden="true">
            <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-200/75 text-[46px] sm:text-[84px] lg:text-[118px] leading-none">
              live websites · custom web engineering
            </DriftWatermark>
          </div>
        </section>

        <ProjectDomainMarquee className="border-y" />

        <section className="dv-dot-bg py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <AnimatedProjectsShowcase showFilters showSpotlight />

            <div className="text-center mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#141210]">
                Want Us to Build Your Website or App?
              </h2>
              <p className="text-stone-600 mb-6 max-w-xl mx-auto text-sm sm:text-base">
                Let&apos;s design, engineer, and launch a high-converting digital platform tailored
                to your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#e8460e]"
                >
                  Start Your Project <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    "Hi Dievekter Tech! I would like to start a website or app project.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#141210] transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
                >
                  WhatsApp ({SITE_CONFIG.telephone}) <ArrowUpRight className="h-4 w-4 text-[#FF5422]" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
