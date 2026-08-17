import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";

const steps = [
  { n: "01", t: "Discover", d: "We map the workflow, the data and the outcome that matters before writing a line of code." },
  { n: "02", t: "Design", d: "Architecture, interfaces and guardrails defined up front — so the system stays maintainable." },
  { n: "03", t: "Build", d: "Short iterative cycles with working software you can review every week." },
  { n: "04", t: "Deploy", d: "Production rollout with monitoring, fallbacks and clear ownership handover." },
  { n: "05", t: "Improve", d: "Measure, tune and extend — systems get better with usage, not worse." },
];

export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="How we work"
        title="An engineering process, not a project queue"
        subtitle="Every engagement follows the same disciplined path from problem to production."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.07}>
            <div className="relative h-full rounded-2xl border border-dv-line bg-dv-surface/60 p-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-dv-accent">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-dv-fg">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dv-muted">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
