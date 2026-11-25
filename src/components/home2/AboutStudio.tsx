import Image from "next/image";
import { Bot, Languages, Star, Workflow } from "lucide-react";
import { FlyLeftBlock, FlyRightBlock, ScaleGlow } from "@/components/animation/MotionPrimitives";

const stats = [
  { v: "40+", l: "Systems shipped" },
  { v: "6+", l: "Industries served" },
  { v: "98%", l: "Client retention" },
  { v: "24/7", l: "AI availability" },
];

export function AboutStudio() {
  return (
    <section className="dv-dot-bg py-16 sm:py-24" id="about">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-20 sm:mb-28">
          {stats.map((s) => (
            <div
              key={s.l}
              className="dv-dot-orange rounded-2xl px-5 py-6 sm:px-7 sm:py-8 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 shadow-sm"
            >
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#141210]">
                {s.v}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#141210]/85">{s.l}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.58fr_1.15fr] items-stretch">
          <div className="flex flex-col justify-between py-2">
            <div>
              <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                About the studio
              </span>
              <h2
                className="mt-5 font-bold tracking-tight text-[#141210]"
                style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05 }}
              >
                We&apos;re an AI &amp; software studio.
              </h2>
              <p className="mt-5 max-w-sm text-sm sm:text-base leading-relaxed text-stone-500">
                We love the craft and the measurable impact it creates for our clients. For years
                we&apos;ve helped businesses launch multilingual AI agents, reliable software, and
                production automation.
              </p>
            </div>

            <p className="mt-10 text-xs font-medium text-stone-400">
              Registered Indian Enterprise · 2026
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <FlyLeftBlock className="flex-1 min-h-[210px] rounded-2xl bg-[#1F1C18] p-5 text-white flex flex-col justify-between overflow-hidden relative shadow-lg">
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#FF5422]/35 blur-2xl"
              />
              <div className="relative z-10 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-orange-300">
                <span>Multilingual AI</span>
                <Bot className="h-4 w-4 text-[#FF5422]" />
              </div>
              <div className="relative z-10 my-4 space-y-2">
                <div className="rounded-lg bg-white/10 px-3 py-2 text-xs text-white/90">
                  &ldquo;Namaste! How can I help your business today?&rdquo;
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-stone-300">
                  <Languages className="h-3.5 w-3.5 text-[#FF5422]" />
                  Hindi · Marathi · Hinglish · English
                </div>
              </div>
              <p className="relative z-10 text-[11px] text-stone-400">
                Voice &amp; chat agents in production
              </p>
            </FlyLeftBlock>

            <ScaleGlow className="dv-dot-orange rounded-2xl p-6 text-white flex flex-col justify-between min-h-[145px] shadow-sm">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight">40+</span>
              <span className="text-xs font-medium text-white/90">
                Products &amp; systems deployed
              </span>
            </ScaleGlow>
          </div>

          <FlyRightBlock className="relative min-h-[340px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-stone-200 bg-[#FFF4F0] shadow-lg">
            <Image
              src="/dievektor.png"
              alt="dieVekter engineering studio showcase"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#141210]/65 via-transparent to-transparent"
            />

            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-[#141210] shadow-sm">
              <Workflow className="h-3.5 w-3.5 text-[#FF5422]" />
              AI · Software · Automation
            </div>

            <div className="absolute bottom-4 right-4 rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4 text-center shadow-xl border border-white">
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141210]">4.9</p>
              <div className="mt-1 flex items-center justify-center gap-0.5 text-[#FF5422]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#FF5422]" />
                ))}
              </div>
              <p className="mt-1 text-[11px] font-medium text-stone-500">
                100% Verified Success
              </p>
            </div>
          </FlyRightBlock>
        </div>
      </div>
    </section>
  );
}
