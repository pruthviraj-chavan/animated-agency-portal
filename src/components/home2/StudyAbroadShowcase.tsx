import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpenCheck, FileCheck2, Globe2, GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  withDriftX,
  withFlyInLeft,
  withFlyInRight,
  withScaleUp,
} from "@/components/home2/ScrollEffects";
import { trackStudyAbroadCta } from "@/lib/analytics";

const DriftWatermark = withDriftX(motion.div);
const FlyInLeft = withFlyInLeft(motion.div);
const FlyInRight = withFlyInRight(motion.div);
const ScaleUp = withScaleUp(motion.div);

const pathways = [
  {
    icon: Globe2,
    title: "Study in Germany",
    desc: "Structured overview of German public universities, APS India documentation, uni-assist timelines, blocked accounts and student visa checklists.",
    to: "/study-abroad/germany",
  },
  {
    icon: GraduationCap,
    title: "University Selection",
    desc: "Profile-based shortlisting aligned with your academic background, language readiness, deadlines and target degree tracks.",
    to: "/study-abroad/university-selection",
  },
  {
    icon: BookOpenCheck,
    title: "Admission & SOP Assistance",
    desc: "Checklist support for transcripts, academic CVs, SOP/motivation letters, LOR planning and portal submissions.",
    to: "/study-abroad/admission-assistance",
  },
  {
    icon: FileCheck2,
    title: "Visa & Pre-Departure Guidance",
    desc: "Organized student visa documentation checklists grounded in official embassy sources plus practical pre-departure preparation.",
    to: "/study-abroad/visa-guidance",
  },
];

const includedTags = [
  "Overseas Counselling",
  "Country & University Selection",
  "Germany Public & FH Tracks",
  "APS & Portal Filing",
  "SOP / LOR Review",
  "Visa Documentation",
  "Pre-Departure Briefing",
];

export function StudyAbroadShowcase() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      className="dv-dot-bg relative overflow-hidden border-t border-stone-100 py-16 sm:py-24"
      id="study-abroad"
    >
      <div className="pointer-events-none select-none overflow-hidden pb-6" aria-hidden="true">
        <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-100 text-[46px] sm:text-[90px] lg:text-[124px] leading-none">
          study abroad · germany admissions &amp; visa guidance
        </DriftWatermark>
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.35fr] items-start">
          {/* Left narrative column */}
          <div>
            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              Study Abroad Consultancy
            </span>

            <h2
              className="mt-5 font-bold tracking-tight text-[#141210]"
              style={{ fontSize: "clamp(28px, 3.8vw, 46px)", lineHeight: 1.07 }}
            >
              Guided global education pathways,{" "}
              <span className="text-[#FF5422]">built around clarity.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600 max-w-xl">
              Alongside our engineering studio, dieVekter supports students across Kolhapur,
              Pune and Maharashtra with honest overseas education counselling — from course
              shortlisting and Study in Germany checklists to organised admission and student visa
              documentation.
            </p>

            {/* Quick service tags */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {includedTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#FBE0D4] bg-[#FFF5F1] px-3 py-1 text-[11px] font-medium text-[#141210]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Editorial contrast card */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <FlyInLeft className="rounded-2xl bg-[#1F1C18] p-5 text-white shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF8C66]">
                  Free 30-Min Consultation
                </p>
                <p className="mt-2 text-lg font-semibold">Germany &amp; Global Destinations</p>
                <p className="mt-1.5 text-xs leading-relaxed text-stone-300">
                  Public &amp; state-recognized universities, English &amp; German taught degrees,
                  and official DAAD / APS checklist mapping.
                </p>
              </FlyInLeft>

              <ScaleUp className="dv-dot-orange rounded-2xl p-5 text-white shadow-sm flex flex-col justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/90">
                  Transparent Advisory
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-white">
                  Admissions and student visa decisions are strictly made by universities and
                  official embassies/consulates — zero false guarantees.
                </p>
              </ScaleUp>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <motion.div
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                <Link
                  to="/study-abroad"
                  onClick={() => trackStudyAbroadCta("/study-abroad", "/")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#e8460e]"
                >
                  Explore Study Abroad Hub <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <Link
                to="/study-abroad/germany"
                onClick={() => trackStudyAbroadCta("/study-abroad/germany", "/")}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-[#141210] transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
              >
                Study in Germany Guide
              </Link>
            </div>
          </div>

          {/* Right 4-card structured grid */}
          <FlyInRight className="grid gap-4 sm:grid-cols-2">
            {pathways.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={reduceMotion ? undefined : { y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => trackStudyAbroadCta(item.to, "/")}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-6 transition-colors duration-300 hover:border-[#FF5422]/45 hover:shadow-[0_20px_40px_-20px_rgba(255,84,34,0.25)]"
                  >
                    <div>
                      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF5422] text-white transition-transform duration-300 group-hover:rotate-6">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold tracking-tight text-[#141210]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.desc}</p>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF5422]">
                      Read pathway details{" "}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </FlyInRight>
        </div>
      </div>
    </section>
  );
}
