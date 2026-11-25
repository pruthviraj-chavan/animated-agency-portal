import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { CtaBand } from "@/components/home2/CtaBand";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  DriftWatermark,
  FlyLeftBlock,
  FlyRightBlock,
  ScaleGlow,
} from "@/components/animation/MotionPrimitives";
import { InteractiveGlobeSection } from "@/components/studyAbroad/InteractiveGlobeSection";
import {
  OfficialSourcesGrid,
  StudyAbroadDisclaimer,
} from "@/components/studyAbroad/StudyAbroadDisclaimer";
import {
  StudyAbroadProcessStages,
  StudyAbroadServicesGrid,
  StudyAbroadTickerRibbons,
} from "@/components/studyAbroad/StudyAbroadServicesGrid";
import { FaqAccordion } from "@/components/seo/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { STUDY_ABROAD_FAQS } from "@/data/studyAbroadData";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildWebPageSchema,
} from "@/lib/seo/schema";

const TITLE = "Study Abroad Consultancy in Kolhapur & India | Germany & Global Admissions";
const DESC =
  "Transparent overseas education consultancy from Kolhapur & Pune: country & university shortlisting, Study in Germany guidance, admission paperwork, student visa documentation checklist and pre-departure support.";

export const metadata: Metadata = buildPageMetadata({
  path: "/study-abroad",
  title: TITLE,
  description: DESC,
});

export default function StudyAbroadPage() {
  const faqSchema = buildFaqSchema(STUDY_ABROAD_FAQS);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/study-abroad" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Study Abroad", path: "/study-abroad" },
          ]),
          buildServiceSchema({
            name: "Study Abroad Consultancy & Study in Germany Guidance",
            description:
              "Overseas education counselling, country and university selection, admission documentation and student visa checklist guidance.",
            path: "/study-abroad",
            serviceType: "Overseas Education Consultancy",
          }),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />
      <SiteNav />

      <main className="dv-dot-bg flex-grow pt-24">
        <section className="relative overflow-hidden py-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#FF5422]/10 blur-3xl"
          />
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
              <ol className="inline-flex items-center gap-1.5 text-xs text-stone-500">
                <li>
                  <Link href="/" className="hover:text-[#FF5422] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                </li>
                <li className="font-semibold text-[#141210]" aria-current="page">
                  Study Abroad
                </li>
              </ol>
            </nav>

            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
              Study Abroad Consultancy
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-[#141210] leading-[1.06] mb-5">
              Structured Overseas Education Guidance for{" "}
              <span className="text-[#FF5422]">Germany &amp; Global Admissions.</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-stone-600 mb-8">
              Serving students in Kolhapur, Pune, Maharashtra and across India with transparent
              counselling — from realistic course shortlisting and APS checklists to university
              applications and student visa file preparation.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <TrackedLink
                href="/contact?vertical=study-abroad&brief=Study%20Abroad%20Consultation"
                track={{ kind: "study_abroad", destination: "/contact", sourcePage: "/study-abroad" }}
                className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#e8460e] transition-colors"
              >
                Book Counselling Enquiry <ArrowUpRight className="h-4 w-4" />
              </TrackedLink>
              <TrackedLink
                href="/study-abroad/germany"
                track={{ kind: "study_abroad", destination: "/study-abroad/germany", sourcePage: "/study-abroad" }}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422] transition-colors"
              >
                Read Study in Germany Guide
              </TrackedLink>
            </div>
          </div>
        </section>

        <InteractiveGlobeSection sourcePage="/study-abroad" />

        <div className="pointer-events-none select-none overflow-hidden py-4 sm:py-6" aria-hidden="true">
          <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-200/75 text-[46px] sm:text-[88px] lg:text-[128px] leading-none">
            study abroad, germany admissions &amp; visa guidance
          </DriftWatermark>
        </div>

        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-4">
                Consultancy Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141210]">
                Complete Study Abroad{" "}
                <span className="text-[#FF5422]">Services &amp; Guidance</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-600">
                Hover or select any service below to explore checklists, application milestones and
                dedicated destination guides.
              </p>
            </div>

            <StudyAbroadServicesGrid />
          </div>
        </section>

        <StudyAbroadTickerRibbons />

        <section className="border-t border-stone-100 bg-white py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-3">
                Student Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141210]">
                How Our Study Abroad Process Works
              </h2>
            </div>

            <StudyAbroadProcessStages />

            <div className="grid gap-6 md:grid-cols-2 mb-10">
              <FlyLeftBlock className="rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-6">
                <h2 className="text-lg font-bold text-[#141210] mb-3">
                  What Students Expect From Us
                </h2>
                <ul className="space-y-2.5 text-sm text-stone-700">
                  {[
                    "Program shortlisting based on merit and official admission prerequisites",
                    "Organized document checklists for APS India, uni-assist and university portals",
                    "Clarity on English-taught vs German-taught degree options",
                    "Honest feedback on application readiness, timelines and fallback intakes",
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF5422] mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </FlyLeftBlock>

              <FlyRightBlock className="rounded-2xl border border-stone-200 bg-stone-50 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold text-[#141210] mb-3">
                    Regional &amp; Remote Counselling
                  </h2>
                  <p className="text-sm leading-relaxed text-stone-600">
                    Based in Radhanagari, Kolhapur, Maharashtra (UDYAM-MH-15-0320983), we advise
                    students across Kolhapur, Pune, Sangli, Satara and Mumbai alongside online
                    video and WhatsApp counselling nationwide.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href="/study-abroad/student-resources"
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422]"
                  >
                    Student Resources &amp; Checklists <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/blog/study-in-germany"
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422]"
                  >
                    Read Germany Guides <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </FlyRightBlock>
            </div>

            <ScaleGlow>
              <StudyAbroadDisclaimer />
            </ScaleGlow>
          </div>
        </section>

        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF5422]">
                Primary Verification Sources
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#141210]">
                Official Portals We Align Every Application With
              </h2>
            </div>
            <OfficialSourcesGrid />
          </div>
        </section>

        <section className="border-t border-stone-100 bg-white py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#141210] mb-10">
              Study Abroad Consultancy FAQs
            </h2>
            <FaqAccordion items={STUDY_ABROAD_FAQS} />
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
