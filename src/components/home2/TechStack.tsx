import type { CSSProperties } from "react";
import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";

const groups = [
  { t: "AI & ML", ca: "199 95% 60%", ca2: "217 90% 62%", items: ["LLM orchestration", "RAG pipelines", "Speech-to-text / TTS", "Vector databases"] },
  { t: "Engineering", ca: "246 84% 68%", ca2: "280 70% 66%", items: ["React & TypeScript", "Node & Python services", "REST & realtime APIs", "PostgreSQL"] },
  { t: "Automation", ca: "38 92% 58%", ca2: "26 90% 60%", items: ["Workflow engines", "CRM & webhook integrations", "Event-driven jobs", "Scheduled pipelines"] },
  { t: "Platform", ca: "158 84% 45%", ca2: "187 92% 55%", items: ["Cloud deployment", "CI/CD", "Observability & logging", "Access control"] },
];

export function TechStack() {
  return (
    <Section id="technology">
      <div
        aria-hidden
        className="dv-sec-glow top-[-4rem] left-[12%] h-72 w-[500px]"
        style={{ "--ca": "199 95% 60%" } as CSSProperties}
      />

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              A stack chosen for <span className="dv-text-gradient">reliability</span>
            </>
          }
          subtitle="No black boxes. Every system we ship is observable, testable and owned by your team when we hand it over."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.t} delay={i * 0.07}>
              <div
                className="dv-cardx h-full rounded-2xl border border-dv-line bg-dv-surface/60 p-6"
                style={{ "--ca": g.ca, "--ca2": g.ca2 } as CSSProperties}
              >
                <h3 className="dv-num-grad text-sm font-semibold uppercase tracking-[0.16em]">
                  {g.t}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-dv-muted">
                      <span className="dv-dot mt-[7px] h-1 w-1 flex-shrink-0 rounded-full" />
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
