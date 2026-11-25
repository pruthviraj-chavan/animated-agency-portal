import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { CtaBand } from "@/components/home2/CtaBand";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  OfficialSourcesGrid,
  StudyAbroadDisclaimer,
} from "@/components/studyAbroad/StudyAbroadDisclaimer";
import { FaqAccordion } from "@/components/seo/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildWebPageSchema,
  type FaqSchemaItem,
} from "@/lib/seo/schema";

export type StudyAbroadSubKey =
  | "university-selection"
  | "admission-assistance"
  | "visa-guidance"
  | "student-resources";

interface SubpageSpec {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  serviceType: string;
  checklistHeading: string;
  checklist: string[];
  sections: { title: string; body: string }[];
  faqs: FaqSchemaItem[];
}

export const STUDY_ABROAD_SUBPAGES: Record<StudyAbroadSubKey, SubpageSpec> = {
  "university-selection": {
    path: "/study-abroad/university-selection",
    metaTitle: "Country & University Selection Counselling | Shortlisting Support",
    metaDescription:
      "Profile-based country and university shortlisting aligned with your academic background, language proficiency, intake timelines and career goals.",
    eyebrow: "Step 01 · Shortlisting",
    title: "Country & University Selection Counselling",
    description:
      "Honest shortlisting anchored to your academic profile, degree prerequisites, language level and target career track.",
    serviceType: "University Selection and Education Counselling",
    checklistHeading: "Criteria we evaluate before shortlisting",
    checklist: [
      "Bachelor's / Class 12 academic scores and credit matching",
      "German Grade (Bavarian Formula) orientation vs program thresholds",
      "English-taught vs German-taught curriculum requirements",
      "uni-assist VPD vs direct university submission deadlines",
      "Balanced mix of ambitious, target and practical fallback choices",
      "City living cost & part-time regulation overview from official portals",
    ],
    sections: [
      {
        title: "Course Fit Over Blind Rankings",
        body: "German and international universities weigh subject-specific credit requirements heavily — especially in Computer Science, Data Science, Mechanical Engineering and Management. Matching syllabus prerequisites reduces avoidable rejections.",
      },
      {
        title: "Zero Commission-Biased Pressure",
        body: "Our shortlists include public German institutions indexed on DAAD as well as recognized universities matching your budget, rather than pushing options indiscriminately.",
      },
    ],
    faqs: [
      {
        question: "How many universities should a student shortlist for Germany or Europe?",
        answer:
          "Most applicants prepare a focused shortlist of 5 to 8 programs balancing competitive technical universities and practical applied-sciences tracks, keeping uni-assist fees and deadline windows manageable.",
      },
    ],
  },
  "admission-assistance": {
    path: "/study-abroad/admission-assistance",
    metaTitle: "University Application & Admission Assistance | SOP, LOR & Portal Filing",
    metaDescription:
      "Structured admission assistance covering transcript checklists, CV formatting, SOP/motivation letter review, LOR planning and portal submissions.",
    eyebrow: "Step 02 · Applications",
    title: "University Application & Admission Assistance",
    description:
      "Thorough application document preparation including transcript checks, CV formatting, SOP / motivation letter feedback and portal filing.",
    serviceType: "University Admission Application Assistance",
    checklistHeading: "Documents reviewed during admission preparation",
    checklist: [
      "Academic transcripts, degree certificates and grading scale explanations",
      "APS India application packet readiness (where applicable for Germany)",
      "Concise European-style CV without unsupported claims",
      "Original SOP / Letter of Motivation clarity review tailored per course",
      "Letter of Recommendation (LOR) planning & timeline tracking",
      "Clean digital scans naming and upload verification",
    ],
    sections: [
      {
        title: "Authentic Motivation Letters",
        body: "Admissions committees look closely for authentic academic motivation rather than recycled templates. We help structure your genuine projects, coursework and career logic cleanly.",
      },
      {
        title: "Deadline & Portal Hygiene",
        body: "Missing a single signature, notarization or module handbook summary can delay evaluation. We maintain a single structured folder checklist before final submission.",
      },
    ],
    faqs: [
      {
        question: "Do you write fake SOPs or guarantee offer letters?",
        answer:
          "Never. We provide editorial structure, grammar and clarity review grounded strictly in your real academic record and goals. All offer decisions stay solely with university admissions boards.",
      },
    ],
  },
  "visa-guidance": {
    path: "/study-abroad/visa-guidance",
    metaTitle: "Student Visa Documentation Guidance & Pre-Departure Support",
    metaDescription:
      "Organized student visa document checklists, financial proof preparation, APS verification readiness and pre-departure briefing based on official mission guidelines.",
    eyebrow: "Step 03 · Visa Checklist",
    title: "Student Visa Documentation & Pre-Departure Support",
    description:
      "Organized student visa checklist preparation based strictly on official embassy guidelines plus practical travel & arrival orientation.",
    serviceType: "Student Visa Documentation Guidance",
    checklistHeading: "Core student visa file areas we organize",
    checklist: [
      "Valid passport, application forms and VIDEX / portal confirmation",
      "Unconditional admission letter or prerequisite bridging confirmation",
      "APS certificate or statutory exemption proof (Germany)",
      "Financial means proof (e.g., official blocked account / scholarship letter)",
      "Recognized travel and statutory/student health insurance proof",
      "Pre-departure briefing on housing, city registration and bank activation",
    ],
    sections: [
      {
        title: "Aligned With Official Diplomatic Missions",
        body: "We cross-reference the current checklist published by the German Missions in India and relevant official embassies so no required attestation or sequence is overlooked.",
      },
      {
        title: "Post-Approval Arrival Readiness",
        body: "Once a visa is issued by the authorities, we help students plan airport arrival, temporary accommodation checks, university enrollment (Immatrikulation) and address registration (Anmeldung).",
      },
    ],
    faqs: [
      {
        question: "Who decides student visa approvals and processing times?",
        answer:
          "Only the concerned Embassy or Consulate General evaluates and decides student visa applications. Processing durations depend on mission workload and peak intake seasons.",
      },
    ],
  },
  "student-resources": {
    path: "/study-abroad/student-resources",
    metaTitle: "Official Study Abroad Student Resources, FAQs & Checklists",
    metaDescription:
      "Curated official links to DAAD, German Missions in India, APS India, uni-assist and study abroad preparation checklists.",
    eyebrow: "Verified Portals & Checklists",
    title: "Official Study Abroad Student Resources",
    description:
      "Authoritative external links, document preparation checklists and frequently asked questions for aspiring international students.",
    serviceType: "Study Abroad Student Resources",
    checklistHeading: "Essential master checklist for first-time applicants",
    checklist: [
      "Valid Indian passport with minimum recommended validity well beyond travel",
      "Verified Class 10, Class 12 and Bachelor's semester mark sheets",
      "Official language scorecards (IELTS/TOEFL or Goethe/TestDaF)",
      "Module descriptions / syllabus summaries for German credit verification",
      "APS India portal account and fee/receipt record",
      "Backup PDF scans stored neatly in dated folders",
    ],
    sections: [
      {
        title: "Start With Official Primary Sources",
        body: "Always treat DAAD, APS India, uni-assist and the German Missions in India as the binding authority for eligibility rules, statutory financial amounts and consular procedures.",
      },
    ],
    faqs: [
      {
        question: "How often should students check official study portals before applying?",
        answer:
          "Check DAAD, uni-assist and German Missions India before opening every application portal and again before booking a visa appointment, as statutory amounts and document sequences can update seasonally.",
      },
    ],
  },
};

export function StudyAbroadSubPageView({ subKey }: { subKey: StudyAbroadSubKey }) {
  const spec = STUDY_ABROAD_SUBPAGES[subKey];
  const faqSchema = buildFaqSchema(spec.faqs);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({
            title: spec.metaTitle,
            description: spec.metaDescription,
            path: spec.path,
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Study Abroad", path: "/study-abroad" },
            { name: spec.title, path: spec.path },
          ]),
          buildServiceSchema({
            name: spec.title,
            description: spec.description,
            path: spec.path,
            serviceType: spec.serviceType,
          }),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />
      <SiteNav />

      <main className="flex-grow pt-24">
        <section className="dv-dot-bg py-14 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl text-center">
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
              <ol className="inline-flex flex-wrap items-center gap-1.5 text-xs text-stone-500">
                <li>
                  <Link href="/" className="hover:text-[#FF5422]">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                </li>
                <li>
                  <Link href="/study-abroad" className="hover:text-[#FF5422]">
                    Study Abroad
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                </li>
                <li className="font-semibold text-[#141210]" aria-current="page">
                  {spec.title}
                </li>
              </ol>
            </nav>

            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
              {spec.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#141210] mb-5">
              {spec.title}
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8">
              {spec.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <TrackedLink
                href={`/contact?vertical=study-abroad&brief=${encodeURIComponent(spec.title)}`}
                track={{ kind: "study_abroad", destination: spec.path, sourcePage: spec.path }}
                className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-6 py-3 text-sm font-semibold text-white hover:bg-[#e8460e] transition-colors"
              >
                Book Consultation <ArrowUpRight className="h-4 w-4" />
              </TrackedLink>
              <Link
                href="/study-abroad/germany"
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422]"
              >
                Study in Germany Guide
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {spec.sections.map((sec) => (
                <div
                  key={sec.title}
                  className="rounded-2xl border border-[#FBE0D4] bg-white p-6 shadow-sm"
                >
                  <h2 className="text-lg font-bold text-[#141210] mb-2">{sec.title}</h2>
                  <p className="text-sm leading-relaxed text-stone-600">{sec.body}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[#FBE0D4] bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#141210] mb-5">{spec.checklistHeading}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {spec.checklist.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-stone-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF5422] mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <StudyAbroadDisclaimer />
          </div>
        </section>

        <section className="border-t border-stone-100 bg-white py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-center text-[#141210] mb-8">
                Official Verification Resources
              </h2>
              <OfficialSourcesGrid />
            </div>

            {spec.faqs.length > 0 && (
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-center text-[#141210] mb-6">
                  Frequently Asked Questions
                </h2>
                <FaqAccordion items={spec.faqs} />
              </div>
            )}
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
