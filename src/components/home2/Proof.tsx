import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";

const stats = [
  { v: "40+", l: "Products & systems shipped" },
  { v: "6+", l: "Industries served" },
  { v: "3", l: "Core capability verticals" },
  { v: "24/7", l: "Agent availability" },
];

const work = [
  {
    t: "Multilingual support agent",
    d: "A voice and chat agent handling customer queries in Hindi, English and code-mixed conversations, escalating cleanly to humans.",
    tag: "AI Agents",
  },
  {
    t: "Operations dashboard platform",
    d: "A web platform unifying scattered spreadsheets into one live operational view with role-based access.",
    tag: "Software",
  },
  {
    t: "Lead-to-CRM automation",
    d: "Inbound enquiries captured, qualified and written into CRM automatically, with follow-up sequences.",
    tag: "Automation",
  },
];

export function Proof() {
  return (
    <Section id="work" tone="raised">
      <SectionHeading
        eyebrow="Proof"
        title="Work that runs in the real world"
        subtitle="Selected examples of the systems we design, build and maintain."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.06}>
            <div className="rounded-2xl border border-dv-line bg-dv-bg/60 p-5">
              <p className="text-3xl font-semibold tracking-tight text-dv-fg sm:text-4xl">{s.v}</p>
              <p className="mt-1.5 text-xs leading-snug text-dv-dim sm:text-sm">{s.l}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {work.map((w, i) => (
          <Reveal key={w.t} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-dv-line bg-dv-bg/60 p-6">
              <span className="w-fit rounded-full border border-dv-line bg-dv-elevated px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-dv-accent">
                {w.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-dv-fg">{w.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dv-muted">{w.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-dv-line bg-dv-bg px-6 py-3 text-sm font-semibold text-dv-fg transition-colors hover:border-dv-accent/40"
        >
          View more work <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </Section>
  );
}
