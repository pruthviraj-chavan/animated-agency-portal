import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Compass,
  FileCheck2,
  FileText,
  Globe2,
  GraduationCap,
  PlaneTakeoff,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { CtaBand } from "@/components/home2/CtaBand";
import { SeoHead } from "@/components/seo/SeoHead";
import { InteractiveGlobeSection } from "@/components/studyAbroad/InteractiveGlobeSection";
import {
  OfficialSourcesGrid,
  StudyAbroadDisclaimer,
} from "@/components/studyAbroad/StudyAbroadDisclaimer";
import {
  withDriftX,
  withFlyInLeft,
  withFlyInRight,
  withScaleUp,
} from "@/components/home2/ScrollEffects";
import {
  Sculptural3DBurst,
  Sculptural3DCapsules,
  Sculptural3DKnot,
  Sculptural3DStack,
  Sculptural3DTorus,
} from "@/components/dv/Sculptural3DIcons";
import { STUDY_ABROAD_FAQS } from "@/data/studyAbroadData";
import { buildFaqSchema, buildServiceSchema } from "@/data/seoConfig";
import { trackStudyAbroadCta } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const DriftWatermark = withDriftX(motion.div);
const FlyInLeft = withFlyInLeft(motion.div);
const FlyInRight = withFlyInRight(motion.div);
const ScaleUp = withScaleUp(motion.div);

interface StudyAbroadServiceItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
  deliverables: string[];
  to: string;
  icon: React.ElementType;
  Sculpture: React.ComponentType;
}

const STUDY_ABROAD_SERVICES: StudyAbroadServiceItem[] = [
  {
    id: "counselling",
    tag: "Advisory",
    title: "Overseas Education Counselling",
    desc: "1-on-1 profile assessment reviewing academic background, language readiness, target degrees and realistic intake timing.",
    deliverables: [
      "Academic fit & grade conversion clarity",
      "Honest budget & public vs private overview",
      "Clear intake roadmap (Winter & Summer)",
    ],
    to: "/contact?vertical=study-abroad&brief=Overseas%20Education%20Counselling",
    icon: GraduationCap,
    Sculpture: Sculptural3DTorus,
  },
  {
    id: "selection",
    tag: "Shortlisting",
    title: "Country & University Selection",
    desc: "Commission-free shortlisting curated around course prerequisites, subject credits and official admission rules.",
    deliverables: [
      "5–8 balanced university & program picks",
      "English-taught vs German-taught checks",
      "DAAD & official institutional links",
    ],
    to: "/study-abroad/university-selection",
    icon: Compass,
    Sculpture: Sculptural3DCapsules,
  },
  {
    id: "germany",
    tag: "Flagship",
    title: "Study in Germany Guidance",
    desc: "End-to-end roadmap covering German public universities (Universität & FH), APS India and semester timelines.",
    deliverables: [
      "APS India credential verification readiness",
      "uni-assist VPD vs direct portal sorting",
      "Blocked account (Sperrkonto) orientation",
    ],
    to: "/study-abroad/germany",
    icon: Globe2,
    Sculpture: Sculptural3DStack,
  },
  {
    id: "admissions",
    tag: "Applications",
    title: "University Application Assistance",
    desc: "Clean digital filing across uni-assist and institutional admissions portals with verified document naming and tracking.",
    deliverables: [
      "Portal registration & submission checks",
      "Module summary & transcript formatting",
      "Application deadline tracking calendar",
    ],
    to: "/study-abroad/admission-assistance",
    icon: BookOpenCheck,
    Sculpture: Sculptural3DBurst,
  },
  {
    id: "documents",
    tag: "Positioning",
    title: "SOP, LOR & Academic CV Guidance",
    desc: "Structured clarity and editorial feedback for Motivation Letters, academic CVs and recommender preparation without templates.",
    deliverables: [
      "Program-specific SOP / LOM feedback",
      "Clean chronological European CV check",
      "LOR request planning with faculty",
    ],
    to: "/study-abroad/admission-assistance",
    icon: FileText,
    Sculpture: Sculptural3DKnot,
  },
  {
    id: "visa",
    tag: "Compliance",
    title: "Student Visa Documentation Support",
    desc: "Organized visa file assembly strictly aligned to current German Missions in India & official embassy checklists.",
    deliverables: [
      "National (Type D) checklist verification",
      "Financial & health insurance proof check",
      "Embassy/VFS file indexing & sequence",
    ],
    to: "/study-abroad/visa-guidance",
    icon: FileCheck2,
    Sculpture: Sculptural3DTorus,
  },
  {
    id: "pre-departure",
    tag: "Settlement",
    title: "Pre-Departure & Arrival Support",
    desc: "Practical orientation on travel readiness, accommodation verification, enrollment (Immatrikulation) and city registration.",
    deliverables: [
      "Pre-travel packing & forex checklist",
      "Housing contract red-flag orientation",
      "University enrollment & bank steps",
    ],
    to: "/study-abroad/student-resources",
    icon: PlaneTakeoff,
    Sculpture: Sculptural3DStack,
  },
  {
    id: "aps-prep",
    tag: "India Pathway",
    title: "APS Verification & Official Links",
    desc: "Step-by-step preparation around primary official resources (DAAD, APS India, uni-assist and Federal Foreign Office).",
    deliverables: [
      "Official primary source checklist cards",
      "Transcript & certificate audit before filing",
      "Policy updates awareness & reminders",
    ],
    to: "/study-abroad/student-resources",
    icon: ShieldCheck,
    Sculpture: Sculptural3DBurst,
  },
];

const ORANGE_TICKER = [
  "Study in Germany pathways guided with clarity.",
  "APS India, uni-assist & student visa checklists.",
  "Course shortlisting without commission bias.",
  "Transparent support from Kolhapur & Pune.",
];

const GRAY_TICKER = [
  "Public research universities & FH guidance.",
  "Authentic SOP, LOR & Europass CV reviews.",
  "Pre-departure housing & arrival orientation.",
  "Aligned strictly with DAAD & embassy guidelines.",
];

const processMilestones = [
  {
    step: "01",
    title: "Profile & Eligibility Audit",
    detail:
      "Review academic percentages, grading scale conversion, language scores and preferred degree disciplines.",
  },
  {
    step: "02",
    title: "Country & Course Shortlisting",
    detail:
      "Curate realistic public and recognized university options with deadline calendars — led by Germany and global study hubs.",
  },
  {
    step: "03",
    title: "Documentation & Portal Filing",
    detail:
      "Prepare transcripts, APS checklists, motivation letters (SOP), CVs, LOR readiness and uni-assist or direct submissions.",
  },
  {
    step: "04",
    title: "Student Visa File & Arrival",
    detail:
      "Organize financial proof (e.g., blocked account orientation), mission checklist verification and pre-departure onboarding.",
  },
];

export default function StudyAbroadHub() {
  const reduceMotion = Boolean(useReducedMotion());
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedServiceId, setSelectedServiceId] = useState<string>("germany");

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <SeoHead
        path="/study-abroad"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Study Abroad", path: "/study-abroad" },
        ]}
        schemas={[
          buildServiceSchema({
            name: "Study Abroad Consultancy & Study in Germany Guidance",
            description:
              "Overseas education counselling, country and university selection, admission documentation and student visa checklist guidance.",
            path: "/study-abroad",
            serviceType: "Overseas Education Consultancy",
          }),
          buildFaqSchema(STUDY_ABROAD_FAQS),
        ]}
      />
      <SiteNav />

      <main className="dv-dot-bg flex-grow pt-24">
        {/* 1. Editorial Hero */}
        <section className="relative overflow-hidden py-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#FF5422]/10 blur-3xl"
          />
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
            <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
              <ol className="inline-flex items-center gap-1.5 text-xs text-stone-500">
                <li>
                  <Link to="/" className="hover:text-[#FF5422] transition-colors">
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
              <Link
                to="/contact?vertical=study-abroad&brief=Study%20Abroad%20Consultation"
                onClick={() => trackStudyAbroadCta("/contact", "/study-abroad")}
                className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#e8460e] transition-colors"
              >
                Book Counselling Enquiry <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/study-abroad/germany"
                onClick={() => trackStudyAbroadCta("/study-abroad/germany", "/study-abroad")}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422] transition-colors"
              >
                Read Study in Germany Guide
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Dark Rotating Globe Free Consultation Section (from reference screenshot) */}
        <InteractiveGlobeSection sourcePage="/study-abroad" />

        {/* 3. Drifting Editorial Watermark */}
        <div
          className="pointer-events-none select-none overflow-hidden py-4 sm:py-6"
          aria-hidden="true"
        >
          <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-200/75 text-[46px] sm:text-[88px] lg:text-[128px] leading-none">
            study abroad, germany admissions &amp; visa guidance
          </DriftWatermark>
        </div>

        {/* 4. Full Animated Study Abroad Services Suite */}
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

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STUDY_ABROAD_SERVICES.map((srv, idx) => {
                const Icon = srv.icon;
                const active = selectedServiceId === srv.id;
                return (
                  <motion.div
                    key={srv.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: (idx % 4) * 0.06, duration: 0.4 }}
                    whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
                    onMouseEnter={() => setSelectedServiceId(srv.id)}
                  >
                    <Link
                      to={srv.to}
                      onClick={() => trackStudyAbroadCta(srv.to, `/study-abroad#${srv.id}`)}
                      className={cn(
                        "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300",
                        active
                          ? "border-[#FF5422] bg-white shadow-[0_24px_48px_-20px_rgba(255,84,34,0.25)]"
                          : "border-[#FBE0D4] bg-white hover:border-[#FF5422]/60",
                      )}
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-[#FFF5F1] transition-transform duration-500 group-hover:scale-125"
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <motion.div
                            whileHover={reduceMotion ? undefined : { rotate: 8, scale: 1.08 }}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF5422] text-white"
                          >
                            <Icon className="h-5 w-5" />
                          </motion.div>
                          <span className="rounded-full bg-[#FFF5F1] border border-[#FBE0D4] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#FF5422]">
                            {srv.tag}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-[#141210] group-hover:text-[#FF5422] transition-colors">
                          {srv.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-stone-600">
                          {srv.desc}
                        </p>

                        <ul className="mt-4 space-y-1.5 border-t border-stone-100 pt-3">
                          {srv.deliverables.map((pt) => (
                            <li key={pt} className="flex items-start gap-2 text-xs text-stone-600">
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#FF5422] mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="relative z-10 mt-6 flex items-end justify-between">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF5422]">
                          Explore <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                        <div className="scale-[0.42] origin-bottom-right -mr-3 -mb-3 opacity-85 transition-transform duration-300 group-hover:scale-[0.48] group-hover:-rotate-6">
                          <srv.Sculpture />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Crossed Diagonal Ticker Ribbons */}
        <section className="relative overflow-hidden py-12 sm:py-16 bg-white" aria-hidden="true">
          <div className="-mx-6 rotate-[-1.8deg] bg-[#F4F3F1] border-y border-stone-200/80 py-3.5 shadow-sm">
            <div className="dv-ribbon-track dv-ribbon-track--reverse">
              {[...GRAY_TICKER, ...GRAY_TICKER, ...GRAY_TICKER].map((text, idx) => (
                <span
                  key={`abg-${idx}`}
                  className="inline-flex items-center gap-6 px-4 text-sm sm:text-lg font-semibold text-[#141210]"
                >
                  {text}
                  <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
                </span>
              ))}
            </div>
          </div>

          <div className="-mx-6 -mt-4 rotate-[1.8deg] bg-[#FF5422] py-3.5 shadow-lg">
            <div className="dv-ribbon-track">
              {[...ORANGE_TICKER, ...ORANGE_TICKER, ...ORANGE_TICKER].map((text, idx) => (
                <span
                  key={`abo-${idx}`}
                  className="inline-flex items-center gap-6 px-4 text-sm sm:text-lg font-semibold text-white"
                >
                  {text}
                  <span className="h-1.5 w-1.5 rounded-full bg-white/75" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Scroll-Driven Process Stages + Regional Cards */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {processMilestones.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.4 }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className="rounded-2xl border border-[#FBE0D4] bg-[#FFF8F5] p-6 shadow-sm"
                >
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5422]">
                    <Award className="h-3.5 w-3.5" /> Stage {item.step}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#141210]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-10">
              <FlyInLeft className="rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-6">
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
              </FlyInLeft>

              <FlyInRight className="rounded-2xl border border-stone-200 bg-stone-50 p-6 flex flex-col justify-between">
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
                    to="/study-abroad/student-resources"
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422]"
                  >
                    Student Resources &amp; Checklists <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/blog/study-in-germany"
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422]"
                  >
                    Read Germany Guides <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </FlyInRight>
            </div>

            <ScaleUp>
              <StudyAbroadDisclaimer />
            </ScaleUp>
          </div>
        </section>

        {/* 7. Official Reference Portals */}
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

        {/* 8. Visible FAQs */}
        <section className="border-t border-stone-100 bg-white py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#141210] mb-10">
              Study Abroad Consultancy FAQs
            </h2>
            <div className="space-y-3">
              {STUDY_ABROAD_FAQS.map((faq, idx) => {
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

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
