import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Hero } from "@/components/home2/Hero";
import { IntelligentSystemsShowcase } from "@/components/home2/IntelligentSystemsShowcase";
import { Capabilities } from "@/components/home2/Capabilities";
import { Process } from "@/components/home2/Process";
import { Industries } from "@/components/home2/Industries";
import { TechStack } from "@/components/home2/TechStack";
import { Proof } from "@/components/home2/Proof";
import { AIVideoService } from "@/components/home2/AIVideoService";
import { CredentialsSection } from "@/components/home2/CredentialsSection";
import { CtaBand } from "@/components/home2/CtaBand";
import { AIChatBot } from "@/components/home/AIChatBot";

const Index = () => {
  const location = useLocation();

  // Scroll to in-page targets linked from the main nav (e.g. /#technology).
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (!el) return;
    const t = window.setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    return () => window.clearTimeout(t);
  }, [location]);

  return (
    <div className="dv-root flex min-h-screen flex-col overflow-x-hidden">
      <SiteNav />
      <main className="flex-grow">
        <Hero />
        <IntelligentSystemsShowcase />
        <Capabilities />
        <Proof />
        <Process />
        <Industries />
        <TechStack />
        <AIVideoService />
        <CredentialsSection />
        <CtaBand />
      </main>
      <SiteFooter />
      <AIChatBot />
    </div>
  );
};

export default Index;
