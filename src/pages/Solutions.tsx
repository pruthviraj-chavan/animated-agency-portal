import { Link } from "react-router-dom";
import { ArrowUpRight, Bot, Code2, Workflow } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";
import { Process } from "@/components/home2/Process";
import { CtaBand } from "@/components/home2/CtaBand";

const verticals = [
  {
    icon: Bot,
    title: "AI Solutions",
    path: "/solutions/ai",
    desc: "Multilingual AI agents, RAG assistants and LLM systems connected to your real business tools.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    path: "/solutions/software",
    desc: "Web platforms, mobile apps and APIs engineered for scale, clarity and long-term maintenance.",
  },
  {
    icon: Workflow,
    title: "Automation",
    path: "/solutions/automation",
    desc: "Process automation across CRM, operations, support and reporting — fewer manual steps, fewer errors.",
  },
];

const Solutions = () => {
  return (
    <div className="dv-root flex min-h-screen flex-col overflow-x-hidden">
      <SiteNav />
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-dv-bg pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="dv-grid absolute inset-0 opacity-30" aria-hidden />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/3 h-[420px] w-[420px] rounded-full bg-dv-accent-2/10 blur-[150px]"
          />
          <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dv-accent">
              Solutions
            </p>
            <h1 className="mt-5 max-w-3xl text-[2.2rem] leading-[1.08] sm:text-5xl lg:text-[3.6rem] font-semibold tracking-tight text-dv-fg">
              Systems that think, ship and <span className="dv-text-gradient">run themselves</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-dv-muted sm:text-lg">
              Three connected practices — AI, software engineering and automation — combined into
              production systems for growing businesses.
            </p>
          </div>
        </section>

        <Section tone="raised">
          <SectionHeading eyebrow="Practices" title="Choose where to start" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {verticals.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <Link
                  to={v.path}
                  className="group flex h-full flex-col rounded-2xl border border-dv-line bg-dv-bg/60 p-7 transition-all hover:-translate-y-1 hover:border-dv-accent/40 hover:shadow-[var(--dv-glow)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-dv-line bg-dv-elevated text-dv-accent">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold text-dv-fg">{v.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-dv-muted">{v.desc}</p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-dv-fg">
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>

        <Process />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Solutions;
