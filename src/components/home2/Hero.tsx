import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  DriftWatermark,
  FloatingScrollCta,
  ScaleGlow,
  ScrollWipeBg,
  ScrollWipeClip,
} from "@/components/animation/MotionPrimitives";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { HeroCarouselClient } from "@/components/home2/HeroCarouselClient";

const HERO_PILLARS = [
  "AI Agents",
  "Website Dev",
  "App Dev",
  "Workflow Automation",
  "Abroad Study Consultation",
];

function PillarItems({ dotClassName }: { dotClassName: string }) {
  return (
    <>
      {HERO_PILLARS.map((pillar, i) => (
        <span key={pillar} className="inline-flex items-center gap-2 sm:gap-3">
          <span>{pillar}</span>
          {i < HERO_PILLARS.length - 1 && (
            <span className={`h-1 w-1 rounded-full ${dotClassName}`} aria-hidden="true" />
          )}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section
      className="dv-dot-bg relative overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12 lg:min-h-[84vh] flex flex-col justify-center"
      aria-label="dieVekter 3D project showcase"
    >
      <ScaleGlow
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 sm:h-[440px] sm:w-[440px] rounded-full bg-[#FF5422]/[0.07] blur-[110px]"
      />

      <div
        className="pointer-events-none select-none overflow-hidden absolute inset-x-0 top-24 sm:top-28"
        aria-hidden="true"
      >
        <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-200/45 text-[42px] sm:text-[84px] lg:text-[118px] leading-none">
          ai agents · web dev · app dev · abroad study
        </DriftWatermark>
      </div>

      {/* Isolated 3D Carousel Client Island inside deterministic height container */}
      <HeroCarouselClient />

      {/* Minimal drag cue */}
      <div className="mt-1 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-400">
        <span className="h-1 w-1 rounded-full bg-[#FF5422]" />
        Drag to spin
        <span className="h-1 w-1 rounded-full bg-[#FF5422]" />
      </div>

      {/* Server-rendered Primary H1, Brand Intro & Dual-Vertical CTAs */}
      <div className="container relative z-10 mx-auto mt-6 sm:mt-7 max-w-4xl px-5 sm:px-6 text-center">
        <h1
          className="font-bold tracking-tight text-[#141210]"
          style={{ fontSize: "clamp(26px, 3.6vw, 44px)", lineHeight: 1.08 }}
        >
          Technology Solutions.{" "}
          <span className="text-[#FF5422]">Global Education Opportunities.</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-stone-600">
          DieVekter Tech engineers custom websites, mobile apps, AI agents and business automation
          for growing teams—alongside dedicated Study Abroad Consultancy for Germany and global
          universities.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <TrackedLink
            href="/services"
            track={{ kind: "service", slug: "all-services", sourcePage: "/" }}
            className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#e8460e]"
          >
            Explore Technology Services <ArrowUpRight className="h-4 w-4" />
          </TrackedLink>
          <TrackedLink
            href="/study-abroad"
            track={{ kind: "study_abroad", destination: "/study-abroad", sourcePage: "/" }}
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#141210] transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
          >
            Explore Study Abroad Consultancy <ArrowUpRight className="h-4 w-4" />
          </TrackedLink>
        </div>
      </div>

      {/* Scroll-width expanding Hero capabilities wipe strip */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 mt-6 sm:mt-8 relative z-10 max-w-4xl">
        <div className="relative overflow-hidden rounded-full border border-[#FBE0D4] bg-[#FFF5F1] shadow-sm">
          <ScrollWipeBg aria-hidden className="pointer-events-none absolute inset-y-0 left-0 bg-[#FF5422]" />

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 px-4 sm:px-7 py-2.5 text-[11px] sm:text-xs font-semibold text-[#141210]">
            <PillarItems dotClassName="bg-[#FF5422]/60" />
          </div>

          <ScrollWipeClip
            aria-hidden
            className="pointer-events-none flex absolute inset-0 z-20 flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 px-4 sm:px-7 py-2.5 text-[11px] sm:text-xs font-semibold text-white"
          >
            <PillarItems dotClassName="bg-white/80" />
          </ScrollWipeClip>
        </div>
      </div>

      {/* Floating CTA button */}
      <FloatingScrollCta className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_12px_28px_rgba(255,84,34,0.38)] transition-transform hover:scale-105 hover:bg-[#e8460e]"
        >
          Start a project
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </FloatingScrollCta>
    </section>
  );
}
