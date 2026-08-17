import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";

const groups = [
  { t: "AI & ML", items: ["LLM orchestration", "RAG pipelines", "Speech-to-text / TTS", "Vector databases"] },
  { t: "Engineering", items: ["React & TypeScript", "Node & Python services", "REST & realtime APIs", "PostgreSQL"] },
  { t: "Automation", items: ["Workflow engines", "CRM & webhook integrations", "Event-driven jobs", "Scheduled pipelines"] },
  { t: "Platform", items: ["Cloud deployment", "CI/CD", "Observability & logging", "Access control"] },
];

export function TechStack() {
  return (
    <Section id="technology">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          eyebrow="Technology"
          title="A stack chosen for reliability"
          subtitle="No black boxes. Every system we ship is observable, testable and owned by your team when we hand it over."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.t} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-dv-line bg-dv-surface/60 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-dv-accent">
                  {g.t}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-dv-muted">
                      <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-dv-accent-2" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
