import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DriftWatermark, ScaleGlow } from "@/components/animation/MotionPrimitives";
import {
  AnimatedProjectsShowcase,
  ProjectDomainMarquee,
} from "@/components/dv/AnimatedProjectsShowcase";

export function ProjectsShowcase() {
  return (
    <section
      className="dv-dot-bg relative overflow-hidden py-20 sm:py-28 border-t border-stone-100"
      id="projects"
    >
      <ScaleGlow
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-80 sm:h-[420px] sm:w-[420px] rounded-full bg-[#FF5422]/10 blur-[120px]"
      />

      <div className="pointer-events-none select-none overflow-hidden pb-4" aria-hidden="true">
        <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-100 text-[48px] sm:text-[90px] lg:text-[124px] leading-none">
          dievekter tech live websites &amp; client platforms
        </DriftWatermark>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="inline-block rounded-full bg-[#FF5422] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            Dievekter Tech Portfolio
          </span>
          <h2
            className="mt-5 font-bold tracking-tight text-[#141210]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.08 }}
          >
            Real websites shipped for{" "}
            <span className="text-[#FF5422]">growing businesses.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
            Explore live web platforms crafted by Dievekter Tech across enterprise technology,
            education, real estate, fitness, digital news, and local services.
          </p>
        </div>

        <ProjectDomainMarquee className="mb-12 rounded-full border" />

        <AnimatedProjectsShowcase showFilters showSpotlight />

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-[#141210] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF5422]"
          >
            Open Full Projects Showcase <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/919404895667?text=Hi%20Dievekter%20Tech!%20I%20saw%20your%20websites%20and%20want%20to%20build%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-[#141210] transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
          >
            Chat on WhatsApp (+91 94048 95667) <ArrowUpRight className="h-4 w-4 text-[#FF5422]" />
          </a>
        </div>
      </div>
    </section>
  );
}
