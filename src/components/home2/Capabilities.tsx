import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DriftWatermark, MotionFadeIn } from "@/components/animation/MotionPrimitives";
import {
  Sculptural3DBurst,
  Sculptural3DCapsules,
  Sculptural3DTorus,
} from "@/components/dv/Sculptural3DIcons";

const services = [
  {
    id: "ai-agents",
    title: "AI & Voice Agents",
    desc: "Multilingual voice and chat agents built around real customer conversations and measurable outcomes.",
    path: "/solutions/ai",
    Sculpture: Sculptural3DTorus,
  },
  {
    id: "software",
    title: "Software Engineering",
    desc: "Product-grade web platforms, mobile apps and APIs engineered cleanly so every system scales smoothly.",
    path: "/solutions/software",
    Sculpture: Sculptural3DCapsules,
  },
  {
    id: "automation",
    title: "Workflow Automation",
    desc: "From CRM routing to billing and reporting, we connect your tools and remove repetitive manual work.",
    path: "/solutions/automation",
    Sculpture: Sculptural3DBurst,
  },
];

export function Capabilities() {
  return (
    <section className="dv-dot-bg relative overflow-hidden py-16 sm:py-24" id="capabilities">
      <div className="pointer-events-none select-none overflow-hidden pb-6" aria-hidden="true">
        <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-100 text-[52px] sm:text-[96px] lg:text-[132px] leading-none">
          ai agents, software &amp; automation studio
        </DriftWatermark>
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-5">
          <span className="inline-block rounded-full bg-[#FF5422] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            Agency Services
          </span>
        </div>

        <h2
          className="mx-auto max-w-2xl text-center font-bold tracking-tight text-[#141210] mb-12"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.08 }}
        >
          We help businesses launch,
          <br />
          stand out and scale <span className="text-[#FF5422]">faster.</span>
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <MotionFadeIn key={s.id} delay={i * 0.08}>
              <Link
                href={s.path}
                className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5422]/40 hover:shadow-[0_24px_48px_-20px_rgba(255,84,34,0.22)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-[#FFEAE1]/75 transition-transform duration-500 group-hover:scale-110"
                />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold tracking-tight text-[#141210]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone-600 max-w-[30ch]">
                    {s.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-8 flex items-end justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5422] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                  <div className="transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
                    <s.Sculpture />
                  </div>
                </div>
              </Link>
            </MotionFadeIn>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-stone-500">
          Let&apos;s make great work together.{" "}
          <Link
            href="/contact"
            className="font-medium text-[#141210] underline underline-offset-4 hover:text-[#FF5422] transition-colors"
          >
            Start a project.
          </Link>
        </p>
      </div>
    </section>
  );
}
