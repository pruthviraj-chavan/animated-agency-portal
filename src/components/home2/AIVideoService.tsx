import { Link } from "react-router-dom";
import { ArrowUpRight, AudioLines, BadgeCheck, Clapperboard, Film, Sparkles } from "lucide-react";
import { Reveal, Section } from "@/components/dv/primitives";

const stages = [
  { icon: Sparkles, label: "Concept", detail: "Your idea" },
  { icon: Clapperboard, label: "Create", detail: "AI-assisted scenes" },
  { icon: AudioLines, label: "Finish", detail: "Voice & edit" },
];

export function AIVideoService() {
  return (
    <Section id="ai-video" className="border-y border-dv-line">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-dv-accent">
            <Film className="h-4 w-4" aria-hidden="true" /> Creative technology
          </div>
          <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight text-dv-fg sm:text-5xl">
            AI video generation, from idea to screen.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-dv-muted">
            Turn a brief into distinctive videos for product launches, explainers, and campaigns. We bring together AI-assisted visuals, storytelling, and editing to make every frame count.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-dv-accent px-6 py-3 text-sm font-semibold text-dv-bg transition-opacity hover:opacity-85"
          >
            Discuss a video project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-md border border-dv-line bg-dv-elevated p-4 sm:p-6">
            <div className="flex items-center justify-between border-b border-dv-line pb-4 text-xs text-dv-muted">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-dv-accent" /> VIDEO STUDIO</span>
              <span>CONCEPT → FINAL CUT</span>
            </div>
            <div className="relative mt-5 flex aspect-video items-center justify-center overflow-hidden rounded-md border border-dv-line bg-dv-bg">
              <div className="absolute inset-0 grid grid-cols-3 gap-1 p-2 opacity-60" aria-hidden="true">
                <div className="bg-dv-accent/20" /><div className="bg-dv-accent-2/20" /><div className="bg-dv-accent/10" />
              </div>
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-dv-accent/40 bg-dv-surface text-dv-accent shadow-[var(--dv-glow)]">
                <Film className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="absolute bottom-4 left-4 z-10 text-xs font-medium text-dv-fg">An idea, in motion.</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              {stages.map(({ icon: Icon, label, detail }, index) => (
                <div key={label} className="min-w-0 rounded-md border border-dv-line bg-dv-surface p-3 sm:p-4">
                  <div className="flex items-center justify-between text-dv-accent"><Icon className="h-4 w-4" aria-hidden="true" /><span className="text-[10px] text-dv-dim">0{index + 1}</span></div>
                  <p className="mt-3 text-sm font-semibold text-dv-fg">{label}</p>
                  <p className="mt-1 text-xs text-dv-muted">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-12 border-t border-dv-line pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-dv-accent"><BadgeCheck className="h-4 w-4" aria-hidden="true" /> Upwork profile · Verified</p>
            <h3 className="mt-2 text-xl font-semibold text-dv-fg">Work with Pruthviraj C.</h3>
            <p className="mt-1 text-sm text-dv-muted">Radhanagari, India · Rising Talent · 100% Job Success</p>
            <p className="mt-2 text-sm text-dv-muted">$800+ total earnings · 7 total jobs · 19 total hours</p>
          </div>
          <a
            href="https://www.upwork.com/freelancers/pruthviraj?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md border border-dv-line px-5 py-3 text-sm font-semibold text-dv-fg transition-colors hover:border-dv-accent"
          >
            View Upwork profile <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}