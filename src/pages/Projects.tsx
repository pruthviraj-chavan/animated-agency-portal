import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { CtaBand } from "@/components/home2/CtaBand";
import {
  AnimatedProjectsShowcase,
  ProjectDomainMarquee,
} from "@/components/dv/AnimatedProjectsShowcase";
import { withDriftX, withScaleUp } from "@/components/home2/ScrollEffects";
import { STUDIO_PROJECTS } from "@/data/projects";
import { SeoHead } from "@/components/seo/SeoHead";

const DriftWatermark = withDriftX(motion.div);
const ScaleGlow = withScaleUp(motion.div);

export default function Projects() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <SeoHead
        path="/projects"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />
      <SiteNav />
      <main className="flex-grow pt-24">
        <section className="dv-dot-bg relative overflow-hidden pt-16 sm:pt-20 pb-8">
          <ScaleGlow
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#FF5422]/12 blur-3xl"
          />

          <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
            <motion.span
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5"
            >
              Dievekter Tech · Live Websites
            </motion.span>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141210] mb-5"
            >
              Our Shipped <span className="text-[#FF5422]">Projects.</span>
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-base sm:text-lg text-stone-600 leading-relaxed"
            >
              Explore {STUDIO_PROJECTS.length} live client websites and web platforms crafted by
              Dievekter Tech across technology, education, real estate, fitness, events, and digital
              media.
            </motion.p>
          </div>

          <div className="pointer-events-none select-none overflow-hidden pt-8" aria-hidden="true">
            <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-200/75 text-[46px] sm:text-[84px] lg:text-[118px] leading-none">
              live websites · custom web engineering
            </DriftWatermark>
          </div>
        </section>

        {/* Continuous clickable domain marquee ribbon */}
        <ProjectDomainMarquee className="border-y" />

        <section className="dv-dot-bg py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <AnimatedProjectsShowcase showFilters showSpotlight />

            <div className="text-center mt-20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#141210]">
                Want Us to Build Your Website or App?
              </h2>
              <p className="text-stone-600 mb-6 max-w-xl mx-auto text-sm sm:text-base">
                Let&apos;s design, engineer, and launch a high-converting digital platform tailored to
                your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF5422] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#e8460e]"
                >
                  Start Your Project <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/919404895667?text=Hi%20Dievekter%20Tech!%20I%20would%20like%20to%20start%20a%20website%20or%20app%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#141210] transition-colors hover:border-[#FF5422] hover:text-[#FF5422]"
                >
                  WhatsApp (+91 94048 95667) <ArrowUpRight className="h-4 w-4 text-[#FF5422]" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
