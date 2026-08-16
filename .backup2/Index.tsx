import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ConversationToActionSection } from "@/components/home/ConversationToActionSection";
import { AIAgentsSection } from "@/components/home/AIAgentsSection";
import { IndianLanguageSection } from "@/components/home/IndianLanguageSection";
import { VoiceArchitectureSection } from "@/components/home/VoiceArchitectureSection";
import { WhyDieVektorSection } from "@/components/home/WhyDieVektorSection";
import { RealWorldWorkSection } from "@/components/home/RealWorldWorkSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { SecondaryServicesSection } from "@/components/home/SecondaryServicesSection";
import { TalkToAgentSection } from "@/components/home/TalkToAgentSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AIChatBot } from "@/components/home/AIChatBot";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[hsl(232,32%,7%)] overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <TrustStrip />
        <ConversationToActionSection />
        <AIAgentsSection />
        <IndianLanguageSection />
        <VoiceArchitectureSection />
        <WhyDieVektorSection />
        <RealWorldWorkSection />
        <TechStackSection />
        <RoadmapSection />
        <SecondaryServicesSection />
        <TestimonialsSection />
        <TalkToAgentSection />
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};

export default Index;
