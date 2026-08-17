import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Hero } from "@/components/home2/Hero";
import { Capabilities } from "@/components/home2/Capabilities";
import { Process } from "@/components/home2/Process";
import { Industries } from "@/components/home2/Industries";
import { TechStack } from "@/components/home2/TechStack";
import { Proof } from "@/components/home2/Proof";
import { CtaBand } from "@/components/home2/CtaBand";
import { AIChatBot } from "@/components/home/AIChatBot";

const Index = () => {
  return (
    <div className="dv-root flex min-h-screen flex-col overflow-x-hidden">
      <SiteNav />
      <main className="flex-grow">
        <Hero />
        <Capabilities />
        <Proof />
        <Process />
        <Industries />
        <TechStack />
        <CtaBand />
      </main>
      <SiteFooter />
      <AIChatBot />
    </div>
  );
};

export default Index;
