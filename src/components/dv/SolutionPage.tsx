import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";
import { CtaBand } from "@/components/home2/CtaBand";
import { SeoHead } from "@/components/seo/SeoHead";
import { buildServiceSchema } from "@/data/seoConfig";

export type SolutionBlock = {
  title: string;
  desc: string;
  bullets: string[];
};

export function SolutionPage({
  path = "/solutions",
  serviceType,
  eyebrow,
  title,
  intro,
  blocks,
  outcomes,
  children,
}: {
  path?: string;
  serviceType?: string;
  eyebrow: string;
  title: ReactNode;
  intro: string;
  blocks: SolutionBlock[];
  outcomes: string[];
  children?: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <SeoHead
        path={path}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          ...(path !== "/solutions" ? [{ name: eyebrow, path }] : []),
        ]}
        schemas={[
          buildServiceSchema({
            name: serviceType || eyebrow,
            description: intro,
            path,
            serviceType: serviceType || eyebrow,
          }),
        ]}
      />
      <SiteNav />
      <main className="flex-grow">
        <section className="dv-dot-bg relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 left-1/4 h-[380px] w-[380px] rounded-full bg-[#FF5422]/10 blur-[130px]"
          />
          <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              {eyebrow}
            </span>
            <h1 className="mt-5 max-w-3xl text-[2.2rem] leading-[1.06] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#141210]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
              {intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to={`/contact?vertical=technology&brief=${encodeURIComponent(eyebrow)}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5422] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#e8460e]"
              >
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#141210] transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>

        <Section tone="raised">
          <SectionHeading eyebrow="Capabilities" title="What this includes" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-[#FBE0D4] bg-white p-6 sm:p-7 shadow-sm">
                  <h3 className="text-lg font-bold text-[#141210]">{b.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone-600">{b.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-[#FBE0D4] pt-5">
                    {b.bullets.map((x) => (
                      <li key={x} className="flex items-start gap-2.5 text-sm text-stone-600">
                        <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF5422]" />
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
                <div className="flex items-start gap-3 rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-5">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF5422]" />
                  <p className="text-sm leading-relaxed text-stone-700">{o}</p>
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
