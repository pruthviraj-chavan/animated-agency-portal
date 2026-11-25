import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import { SeoHead } from "@/components/seo/SeoHead";
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/data/seoConfig";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (!el) return;
    const t = window.setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    return () => window.clearTimeout(t);
  }, [location]);

  return (
    <div className="dv-home flex min-h-screen flex-col overflow-x-hidden bg-white">
      <SeoHead
        path="/"
        schemas={[
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
};

export default Index;
