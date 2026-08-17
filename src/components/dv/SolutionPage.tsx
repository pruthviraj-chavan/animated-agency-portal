import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";
import { CtaBand } from "@/components/home2/CtaBand";

export type SolutionBlock = {
  title: string;
  desc: string;
  bullets: string[];
};

export function SolutionPage({
  eyebrow,
  title,
  intro,
  blocks,
  outcomes,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  blocks: SolutionBlock[];
  outcomes: string[];
  children?: ReactNode;
}) {
  return (
    <div className="dv-root flex min-h-screen flex-col overflow-x-hidden">
      <SiteNav />
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-dv-bg pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="dv-grid absolute inset-0 opacity-30" aria-hidden />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-dv-accent/10 blur-[150px]"
          />
          <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dv-accent">
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-[2.2rem] leading-[1.08] sm:text-5xl lg:text-[3.6rem] font-semibold tracking-tight text-dv-fg">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-dv-muted sm:text-lg">
              {intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-dv-fg px-7 py-3.5 text-sm font-semibold text-dv-bg transition-transform hover:-translate-y-0.5"
              >
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-dv-line bg-dv-surface px-7 py-3.5 text-sm font-semibold text-dv-fg transition-colors hover:border-dv-accent/40"
              >
                All solutions
              </Link>
            </div>
          </div>
        </section>

        <Section tone="raised">
          <SectionHeading eyebrow="Capabilities" title="What this includes" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-dv-line bg-dv-bg/60 p-6 sm:p-7">
                  <h3 className="text-lg font-semibold text-dv-fg">{b.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-dv-muted">{b.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-dv-line pt-5">
                    {b.bullets.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-sm text-dv-muted">
                        <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-dv-accent" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {children}

        <Section>
          <SectionHeading eyebrow="Outcomes" title="What changes for your business" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-2xl border border-dv-line bg-dv-surface/60 p-5">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-dv-accent" />
                  <p className="text-sm leading-relaxed text-dv-muted">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
