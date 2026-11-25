import Link from "next/link";
import { ArrowUpRight, AudioLines, BadgeCheck, Clapperboard, Film, Sparkles } from "lucide-react";
import { MotionFadeIn } from "@/components/animation/MotionPrimitives";

const stages = [
  { icon: Sparkles, label: "Concept", detail: "Your idea" },
  { icon: Clapperboard, label: "Create", detail: "AI-assisted scenes" },
  { icon: AudioLines, label: "Finish", detail: "Voice & edit" },
];

export function AIVideoService() {
  return (
    <section className="dv-dot-bg py-20 sm:py-24" id="ai-video">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <MotionFadeIn direction="left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF4F0] border border-[#FF5422]/25 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF5422] mb-5">
              <Film className="h-3.5 w-3.5" aria-hidden="true" /> Creative technology
            </div>
            <h2
              className="font-bold tracking-tight text-[#141210] leading-tight mb-5"
              style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
            >
              AI video generation,
              <br />
              from idea to <span className="text-[#FF5422]">screen.</span>
            </h2>
            <p className="text-stone-600 leading-relaxed text-base mb-8 max-w-lg">
              Turn a brief into distinctive videos for product launches, explainers, and campaigns.
              We bring together AI-assisted visuals, storytelling, and editing to make every frame
              count.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#e8460e]"
            >
              Discuss a video project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </MotionFadeIn>

          <MotionFadeIn
            direction="right"
            delay={0.08}
            className="rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-5 sm:p-7 shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-[#F5D6C8] pb-4 text-xs font-medium text-stone-500 mb-5">
              <span className="inline-flex items-center gap-2 text-[#141210] font-semibold">
                <span className="h-2 w-2 rounded-full bg-[#FF5422]" /> VIDEO STUDIO
              </span>
              <span>CONCEPT → FINAL CUT</span>
            </div>

            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-[#F5D6C8] bg-white mb-5">
              <div className="absolute inset-0 grid grid-cols-3 gap-1.5 p-2.5 opacity-60" aria-hidden="true">
                <div className="rounded-lg bg-[#FFF0EA]" />
                <div className="rounded-lg bg-[#FFE2D6]" />
                <div className="rounded-lg bg-[#FFF5F1]" />
              </div>
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF5422] text-white shadow-lg">
                <Film className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="absolute bottom-3.5 left-4 z-10 text-xs font-medium text-stone-600">
                An idea, in motion.
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {stages.map(({ icon: Icon, label, detail }, index) => (
                <div
                  key={label}
                  className="min-w-0 rounded-xl border border-[#F5D6C8] bg-white p-3 sm:p-4"
                >
                  <div className="flex items-center justify-between text-[#FF5422]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span className="text-[10px] font-semibold text-stone-400">0{index + 1}</span>
                  </div>
                  <p className="mt-2.5 text-sm font-semibold text-[#141210]">{label}</p>
                  <p className="mt-0.5 text-xs text-stone-500">{detail}</p>
                </div>
              ))}
            </div>
          </MotionFadeIn>
        </div>

        <div className="mt-12 rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between shadow-sm">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5422]">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" /> Upwork profile · Verified
            </p>
            <h3 className="mt-2 text-xl font-bold text-[#141210]">Work with Pruthviraj C.</h3>
            <p className="mt-1 text-sm text-stone-600">
              Radhanagari, India · Rising Talent · 100% Job Success · $800+ total earnings · 7 total
              jobs · 19 total hours
            </p>
          </div>
          <a
            href="https://www.upwork.com/freelancers/pruthviraj?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-stone-200 bg-[#FFF5F1] px-5 py-3 text-sm font-semibold text-[#141210] transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
          >
            View Upwork profile <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
