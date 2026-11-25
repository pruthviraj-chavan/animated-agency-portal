import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight, type LucideIcon } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { CtaBand } from "@/components/home2/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/seo/FaqAccordion";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildWebPageSchema,
  type FaqSchemaItem,
} from "@/lib/seo/schema";

export type ServiceFeature = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export interface RelatedServiceLink {
  label: string;
  path: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  detail: string;
}

export interface ServiceDetailLayoutProps {
  path?: string;
  seoTitle?: string;
  seoDescription?: string;
  serviceType?: string;
  eyebrow?: string;
  title: string;
  description: string;
  overviewHeading?: string;
  overviewBody?: string;
  problemsSolved?: string[];
  sectionTitle: string;
  features: ServiceFeature[];
  techStack?: string[];
  industries?: string[];
  processSteps?: ProcessStepItem[];
  faqs?: FaqSchemaItem[];
  relatedServices?: RelatedServiceLink[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}

export function ServiceDetailLayout({
  path = "/services",
  seoTitle,
  seoDescription,
  serviceType,
  eyebrow = "Service",
  title,
  description,
  overviewHeading,
  overviewBody,
  problemsSolved,
  sectionTitle,
  features,
  techStack,
  industries,
  processSteps,
  faqs = [],
  relatedServices = [],
  ctaTitle,
  ctaDescription,
  ctaButtonText,
}: ServiceDetailLayoutProps) {
  const resolvedSlug = path.split("/").filter(Boolean).pop() || "service";

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: title, path },
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({
            title: seoTitle || title,
            description: seoDescription || description,
            path,
          }),
          buildBreadcrumbSchema(breadcrumbs),
          buildServiceSchema({
            name: title,
            description: seoDescription || description,
            path,
            serviceType: serviceType || title,
          }),
          faqs.length > 0 ? buildFaqSchema(faqs) : null,
        ]}
      />
      <SiteNav />
      <main className="flex-grow pt-24">
        <section className="dv-dot-bg relative overflow-hidden py-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-[#FF5422]/10 blur-3xl"
          />
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
              <ol className="inline-flex flex-wrap items-center gap-1.5 text-xs text-stone-500">
                <li>
                  <Link href="/" className="hover:text-[#FF5422] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#FF5422] transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                </li>
                <li className="font-semibold text-[#141210]" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
                {eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#141210] mb-5">
                {title}
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <TrackedLink
                  href={`/contact?vertical=technology&brief=${encodeURIComponent(
                    `Technology Enquiry: ${title}`,
                  )}`}
                  track={{ kind: "service", slug: resolvedSlug, sourcePage: path }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#e8460e] transition-colors"
                >
                  {ctaButtonText} <ArrowUpRight className="h-4 w-4" />
                </TrackedLink>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422] transition-colors"
                >
                  View Shipped Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {(overviewBody || (problemsSolved && problemsSolved.length > 0)) && (
          <section className="border-t border-stone-100 bg-white py-14 sm:py-16">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF5422]">
                    Why It Matters
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#141210]">
                    {overviewHeading || `How dieVekter delivers ${title}`}
                  </h2>
                  {overviewBody && (
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
                      {overviewBody}
                    </p>
                  )}
                </div>

                {problemsSolved && problemsSolved.length > 0 && (
                  <div className="rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF5422] mb-4">
                      Problems We Solve
                    </p>
                    <ul className="space-y-3">
                      {problemsSolved.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-stone-700">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF5422] mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-[#141210] mb-12">{sectionTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon || CheckCircle2;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#FBE0D4] bg-white p-6 sm:p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#FF5422]/40 hover:shadow-md"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF5422] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#141210] mb-2">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-stone-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {((techStack && techStack.length > 0) ||
          (processSteps && processSteps.length > 0) ||
          (industries && industries.length > 0)) && (
          <section className="border-t border-stone-100 bg-white py-14 sm:py-20">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl space-y-14">
              {processSteps && processSteps.length > 0 && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#141210] mb-8 text-center">
                    Delivery Process
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {processSteps.map((step) => (
                      <div
                        key={step.step}
                        className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
                      >
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF5422]">
                          Step {step.step}
                        </span>
                        <h3 className="mt-2 text-lg font-bold text-[#141210]">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid gap-8 md:grid-cols-2">
                {techStack && techStack.length > 0 && (
                  <div className="rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-6">
                    <h2 className="text-lg font-bold text-[#141210] mb-4">
                      Technologies &amp; Stack Used
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#FBE0D4] bg-white px-3.5 py-1 text-xs font-semibold text-[#141210]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {industries && industries.length > 0 && (
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                    <h2 className="text-lg font-bold text-[#141210] mb-4">
                      Target Use Cases &amp; Sectors
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {industries.map((ind) => (
                        <span
                          key={ind}
                          className="rounded-full border border-stone-200 bg-white px-3.5 py-1 text-xs font-medium text-stone-700"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {faqs.length > 0 && (
          <section className="border-t border-stone-100 bg-[#FFF8F5] py-14 sm:py-20">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#141210] mb-10">
                Frequently Asked Questions
              </h2>
              <FaqAccordion items={faqs} tone="white" />
            </div>
          </section>
        )}

        {relatedServices.length > 0 && (
          <section className="border-t border-stone-100 bg-white py-12">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF5422] mb-4">
                Related Services &amp; Resources
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.path}
                    href={rel.path}
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422] transition-colors"
                  >
                    {rel.label} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="dv-dot-bg py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="dv-dot-orange rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto text-white shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{ctaTitle}</h2>
              <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                {ctaDescription}
              </p>
              <TrackedLink
                href={`/contact?vertical=technology&brief=${encodeURIComponent(
                  `Technology Enquiry: ${title}`,
                )}`}
                track={{ kind: "service", slug: resolvedSlug, sourcePage: `${path}#banner` }}
                className="inline-flex items-center gap-2 rounded-full bg-[#141210] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                {ctaButtonText} <ArrowUpRight className="h-4 w-4" />
              </TrackedLink>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
