import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronRight } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { CtaBand } from "@/components/home2/CtaBand";
import { SeoHead } from "@/components/seo/SeoHead";
import {
  OfficialSourcesGrid,
  StudyAbroadDisclaimer,
} from "@/components/studyAbroad/StudyAbroadDisclaimer";
import { InteractiveGlobeSection } from "@/components/studyAbroad/InteractiveGlobeSection";
import { GERMANY_FAQS } from "@/data/studyAbroadData";
import { buildFaqSchema, buildServiceSchema } from "@/data/seoConfig";
import { trackStudyAbroadCta } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const roadmapSteps = [
  {
    phase: "9–12 Months Prior",
    title: "Profile Evaluation & DAAD Shortlisting",
    items: [
      "Identify Bachelor's or Master's programs on DAAD & official university portals",
      "Check credit-point, subject prerequisite and grading expectations",
      "Confirm whether courses run in English, German or bilingual mode",
    ],
  },
  {
    phase: "6–9 Months Prior",
    title: "APS India Verification & Language Tests",
    items: [
      "Verify APS certificate eligibility and current checklist at aps-india.de",
      "Appear for required IELTS/TOEFL and/or TestDaF/Goethe-Zertifikat",
      "Prepare certified academic transcripts, passport and resume",
    ],
  },
  {
    phase: "4–6 Months Prior",
    title: "University Applications (uni-assist / Direct)",
    items: [
      "Tailor Statement of Purpose / Letter of Motivation per degree program",
      "Submit applications before Summer (April) or Winter (October) deadlines",
      "Arrange Letters of Recommendation where requested by faculties",
    ],
  },
  {
    phase: "Post-Offer",
    title: "Blocked Account & National Student Visa",
    items: [
      "Verify current blocked account (Sperrkonto) rules on German Missions India",
      "Secure statutory or approved student health insurance confirmation",
      "File National (D) Student Visa via the official diplomatic mission instructions",
    ],
  },
];

export default function StudyInGermany() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <SeoHead
        path="/study-abroad/germany"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Study Abroad", path: "/study-abroad" },
          { name: "Study in Germany", path: "/study-abroad/germany" },
        ]}
        schemas={[
          buildServiceSchema({
            name: "Study in Germany Guidance for Indian Students",
            description:
              "Structured advisory for German university shortlisting, APS verification checklists, uni-assist filings and student visa documentation.",
            path: "/study-abroad/germany",
            serviceType: "Study in Germany Education Consultancy",
            areaServed: ["Kolhapur", "Pune", "Maharashtra", "India"],
          }),
          buildFaqSchema(GERMANY_FAQS),
        ]}
      />
      <SiteNav />

      <main className="flex-grow pt-24">
        <section className="dv-dot-bg relative overflow-hidden py-14 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl text-center">
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
              <ol className="inline-flex flex-wrap items-center gap-1.5 text-xs text-stone-500">
                <li>
                  <Link to="/" className="hover:text-[#FF5422]">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                </li>
                <li>
                  <Link to="/study-abroad" className="hover:text-[#FF5422]">
                    Study Abroad
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                </li>
                <li className="font-semibold text-[#141210]" aria-current="page">
                  Study in Germany
                </li>
              </ol>
            </nav>

            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
              Destination Focus · Germany
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#141210] leading-[1.07] mb-5">
              Study in Germany for{" "}
              <span className="text-[#FF5422]">Indian Students.</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-stone-600 mb-8">
              Navigate German public universities, APS India credential checks, uni-assist filings
              and National (D) student visa documentation with accurate checklists anchored in
              official sources.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact?vertical=study-abroad&brief=Study%20in%20Germany%20Counselling"
                onClick={() => trackStudyAbroadCta("/contact#germany", "/study-abroad/germany")}
                className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#e8460e] transition-colors"
              >
                Request Germany Profile Review <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/study-abroad/visa-guidance"
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422] transition-colors"
              >
                Visa Documentation Checklist
              </Link>
            </div>
          </div>
        </section>

        {/* Institution types */}
        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141210] text-center mb-10">
              Understanding German Higher Education Options
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Public Research Universities (Universität)",
                  body: "Strong theoretical and research orientation across engineering, sciences and humanities. Many state-funded universities charge modest semester contributions, subject to state and program exceptions.",
                },
                {
                  title: "Universities of Applied Sciences (FH / Hochschule)",
                  body: "Practice-oriented programs emphasizing industry projects, laboratory application and structured internships aligned with engineering, IT and management careers.",
                },
                {
                  title: "State-Recognized Private Institutions",
                  body: "Smaller cohorts, specialized English tracks and rolling admission windows — always check institutional state accreditation on DAAD and tuition terms before applying.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-[#FBE0D4] bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#141210] mb-2">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-600">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-t border-stone-100 bg-white py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141210] text-center mb-10">
                Typical Application &amp; Visa Preparation Timeline
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {roadmapSteps.map((step) => (
                  <div
                    key={step.phase}
                    className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                  >
                    <span className="inline-block rounded-full bg-[#FFF5F1] border border-[#FBE0D4] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF5422]">
                      {step.phase}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-[#141210] mb-3">{step.title}</h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF5422] mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <StudyAbroadDisclaimer />
          </div>
        </section>

        {/* Official Sources */}
        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141210] text-center mb-10">
              Official German Study &amp; Visa Resources
            </h2>
            <OfficialSourcesGrid />
          </div>
        </section>

        {/* Visible FAQs */}
        <section className="border-t border-stone-100 bg-white py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#141210] mb-10">
              Study in Germany FAQs
            </h2>
            <div className="space-y-3">
              {GERMANY_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-[#FBE0D4] bg-[#FFF8F5]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <h3 className="text-sm sm:text-base font-semibold text-[#141210]">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 shrink-0 text-[#FF5422] transition-transform",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-[#FBE0D4] bg-white px-5 pb-4 pt-3 text-sm leading-relaxed text-stone-600 rounded-b-2xl">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <InteractiveGlobeSection sourcePage="/study-abroad/germany" />

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
