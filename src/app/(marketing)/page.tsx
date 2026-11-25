import type { Metadata } from "next";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Hero } from "@/components/home2/Hero";
import { AboutStudio } from "@/components/home2/AboutStudio";
import { Capabilities } from "@/components/home2/Capabilities";
import { Industries } from "@/components/home2/Industries";
import { StudyAbroadShowcase } from "@/components/home2/StudyAbroadShowcase";
import { ProjectsShowcase } from "@/components/home2/ProjectsShowcase";
import { Proof } from "@/components/home2/Proof";
import { Process } from "@/components/home2/Process";
import { TechStack } from "@/components/home2/TechStack";
import { AIVideoService } from "@/components/home2/AIVideoService";
import { CredentialsSection } from "@/components/home2/CredentialsSection";
import { FaqSection, HOME_FAQS } from "@/components/home2/FaqSection";
import { CtaBand } from "@/components/home2/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebPageSchema,
  buildWebSiteSchema,
} from "@/lib/seo/schema";

const HOME_TITLE = "DieVekter Tech | Software Solutions & Study Abroad Consultancy";
const HOME_DESC =
  "DieVekter Tech provides custom website development, mobile app development, AI agents, business automation and Study Abroad Consultancy across Kolhapur, Pune, Maharashtra, India and globally.";

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  title: HOME_TITLE,
  description: HOME_DESC,
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <div className="dv-home flex min-h-screen flex-col overflow-x-hidden bg-white">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: HOME_TITLE, description: HOME_DESC, path: "/" }),
          buildOrganizationSchema(),
          buildLocalBusinessSchema(),
          buildWebSiteSchema(),
          buildFaqSchema(HOME_FAQS),
        ]}
      />
      <SiteNav />
      <main className="flex-grow">
        <Hero />
        <AboutStudio />
        <Capabilities />
        <Industries />
        <StudyAbroadShowcase />
        <ProjectsShowcase />
        <Proof />
        <Process />
        <TechStack />
        <AIVideoService />
        <CredentialsSection />
        <FaqSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
