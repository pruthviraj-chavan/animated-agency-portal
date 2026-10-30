import type { CSSProperties } from "react";
import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";

const steps = [
  { n: "01", t: "Discover", ca: "199 95% 60%", ca2: "217 90% 62%", d: "We map the workflow, the data and the outcome that matters before writing a line of code." },
  { n: "02", t: "Design", ca: "246 84% 68%", ca2: "280 70% 66%", d: "Architecture, interfaces and guardrails defined up front — so the system stays maintainable." },
  { n: "03", t: "Build", ca: "38 92% 58%", ca2: "26 90% 60%", d: "Short iterative cycles with working software you can review every week." },
  { n: "04", t: "Deploy", ca: "330 85% 62%", ca2: "300 80% 64%", d: "Production rollout with monitoring, fallbacks and clear ownership handover." },
  { n: "05", t: "Improve", ca: "158 84% 45%", ca2: "187 92% 55%", d: "Measure, tune and extend — systems get better with usage, not worse." },
];

export function Process() {
  return (
    <Section id="process">
      <div
        aria-hidden
        className="dv-sec-glow top-[-4rem] left-1/3 h-72 w-[520px]"
        style={{ "--ca": "246 84% 68%" } as CSSProperties}
      />

      <SectionHeading
        eyebrow="How we work"
        title={
          <>
            An engineering process,{" "}
            <span className="dv-text-gradient">not a project queue</span>
          </>
        }
        subtitle="Every engagement follows the same disciplined path from problem to production."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.07}>
            <div
              className="dv-cardx relative h-full rounded-2xl border border-dv-line bg-dv-surface/60 p-6"
              style={{ "--ca": s.ca, "--ca2": s.ca2 } as CSSProperties}
            >
              <span className="dv-num-grad text-sm font-semibold tracking-[0.2em]">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-dv-fg">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dv-muted">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
