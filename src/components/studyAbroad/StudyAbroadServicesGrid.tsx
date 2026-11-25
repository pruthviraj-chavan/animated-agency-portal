"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  Compass,
  FileCheck2,
  FileText,
  Globe2,
  GraduationCap,
  PlaneTakeoff,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sculptural3DBurst,
  Sculptural3DCapsules,
  Sculptural3DKnot,
  Sculptural3DStack,
  Sculptural3DTorus,
} from "@/components/dv/Sculptural3DIcons";
import { trackStudyAbroadCta } from "@/lib/analytics/gtag";
import { cn } from "@/lib/utils";

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

export function StudyAbroadServicesGrid() {
  const reduceMotion = Boolean(useReducedMotion());
  const [selectedServiceId, setSelectedServiceId] = useState<string>("germany");

  return (
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
              href={srv.to}
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
                  Explore{" "}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
  );
}

export function StudyAbroadTickerRibbons() {
  return (
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
  );
}

export function StudyAbroadProcessStages() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
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
  );
}
