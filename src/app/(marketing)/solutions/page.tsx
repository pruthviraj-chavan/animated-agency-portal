import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bot, Code2, Workflow } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Reveal, Section, SectionHeading } from "@/components/dv/primitives";
import { Process } from "@/components/home2/Process";
import { CtaBand } from "@/components/home2/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "Business Technology Solutions | AI, Software Engineering & Automation";
const DESC =
  "Connected software engineering, AI agent deployment and process automation systems tailored to growing organizations.";

export const metadata: Metadata = buildPageMetadata({
  path: "/solutions",
  title: TITLE,
  description: DESC,
});

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

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/solutions" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
          ]),
        ]}
      />
      <SiteNav />
      <main className="flex-grow">
        <section className="dv-dot-bg relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 left-1/3 h-[380px] w-[380px] rounded-full bg-[#FF5422]/10 blur-[130px]"
          />
          <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              Solutions
            </span>
            <h1 className="mt-5 max-w-3xl text-[2.2rem] leading-[1.06] sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#141210]">
              Systems that think, ship and{" "}
              <span className="text-[#FF5422]">run themselves</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
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
                  href={v.path}
                  className="group flex h-full flex-col rounded-2xl border border-[#FBE0D4] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#FF5422]/50 hover:shadow-[0_24px_48px_-20px_rgba(255,84,34,0.2)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF5422] text-white">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 text-xl font-bold text-[#141210]">{v.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{v.desc}</p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF5422]">
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
}
