import { Link } from "react-router-dom";
import { ArrowUpRight, Bot, Code2, Workflow } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";

const verticals = [
  {
    icon: Bot,
    title: "AI & Agents",
    path: "/solutions/ai",
    desc: "Multilingual voice and chat agents, RAG assistants and LLM systems wired into real business tools.",
    points: ["Voice & chat agents", "RAG knowledge assistants", "Multilingual (Hindi, Hinglish, regional)"],
  },
  {
    icon: Code2,
    title: "Software Engineering",
    path: "/solutions/software",
    desc: "Product-grade web platforms, mobile apps and APIs built with modern, maintainable architecture.",
    points: ["Web platforms & dashboards", "Mobile applications", "APIs & integrations"],
  },
  {
    icon: Workflow,
    title: "Automation",
    path: "/solutions/automation",
    desc: "Workflow automation that removes manual steps across CRM, operations, support and reporting.",
    points: ["Workflow orchestration", "CRM & tooling integration", "Ops & reporting automation"],
  },
];

export function Capabilities() {
  return (
    <Section id="capabilities" tone="raised">
      <SectionHeading
        eyebrow="What we build"
        title="Three capabilities, one engineering standard"
        subtitle="dieVektor works across AI, software and automation — combined into systems that actually run in production."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {verticals.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <Link
              to={v.path}
              className="group flex h-full flex-col rounded-2xl border border-dv-line bg-dv-bg/60 p-6 sm:p-7 transition-all hover:-translate-y-1 hover:border-dv-accent/40 hover:shadow-[var(--dv-glow)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-dv-line bg-dv-elevated text-dv-accent">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-dv-fg">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-dv-muted">{v.desc}</p>
              <ul className="mt-5 space-y-2 border-t border-dv-line pt-5">
                {v.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-dv-muted">
                    <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-dv-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-dv-fg">
                Explore
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
