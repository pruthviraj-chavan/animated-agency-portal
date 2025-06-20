import { HeroSection } from "@/components/home/HeroSection";
import { AIAgentsSection } from "@/components/home/AIAgentsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { TechCircle } from "@/components/home/TechCircle";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackgroundEffect } from "@/components/GradientBackgroundEffect";
import { AIChatBot } from "@/components/home/AIChatBot";
import { LatestProjectsSection } from "@/components/home/LatestProjectsSection";
import { TeamSection } from "@/components/home/TeamSection";
import { ReferralSection } from "@/components/home/ReferralSection";
import { GalaxyVideoSection } from "@/components/home/GalaxyVideoSection";
import { RobotAnimation } from "@/components/home/RobotAnimation";
import { AIIntelligenceSection } from "@/components/home/AIIntelligenceSection";
import { AIAgentProfilesSection } from "@/components/home/AIAgentProfilesSection";
import { AIMissionSection } from "@/components/home/AIMissionSection";
import { ScheduleMeetingSection } from "@/components/home/ScheduleMeetingSection";

const AICodeSection = () => {
  return (
    <section className="py-20 bg-background/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-agency-blue/5 to-agency-pink/5"></div>
      
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute text-xs font-mono text-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
              transform: `rotate(${Math.random() * 90 - 45}deg)`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Math.random() > 0.5 ? '10110101' : '01001011'}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient animate-scale-in">
          Our AI-Powered Development Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-agency-purple/20 shadow-lg transform transition-all hover:translate-y-[-5px] hover:shadow-agency-purple/10 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-agency-purple to-agency-blue flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
              </svg>
            </div>
            
            <div className="text-xs font-mono mb-4 text-agency-purple opacity-70">
              <span className="text-agency-blue">async function</span> <span>analyzeRequirements</span><span>(</span><span>clientData</span><span>) {`{`}</span>
              <div className="pl-4 text-muted-foreground">
                <p>// AI analysis of business needs</p>
                <p><span className="text-agency-blue">const</span> insights = <span className="text-agency-blue">await</span> ai.process(clientData);</p>
                <p><span className="text-agency-blue">return</span> generateStrategy(insights);</p>
              </div>
              <span>{`}`}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">1. AI Analysis</h3>
            <p className="text-muted-foreground">Our AI analyzes your business requirements to identify the optimal digital strategy and technical approach.</p>
          </div>
          
          <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-agency-blue/20 shadow-lg transform transition-all hover:translate-y-[-5px] hover:shadow-agency-blue/10 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-agency-blue to-agency-pink flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu">
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <path d="M15 2v2"></path>
                <path d="M15 20v2"></path>
                <path d="M2 15h2"></path>
                <path d="M2 9h2"></path>
                <path d="M20 15h2"></path>
                <path d="M20 9h2"></path>
                <path d="M9 2v2"></path>
                <path d="M9 20v2"></path>
              </svg>
            </div>
            
            <div className="text-xs font-mono mb-4 text-agency-blue opacity-70">
              <span className="text-agency-purple">function</span> <span>developSolution</span><span>(</span><span>strategy</span><span>) {`{`}</span>
              <div className="pl-4 text-muted-foreground">
                <p>// AI-accelerated development</p>
                <p><span className="text-agency-purple">const</span> prototype = ai.generateCode(strategy);</p>
                <p><span className="text-agency-purple">return</span> engineers.refine(prototype);</p>
              </div>
              <span>{`}`}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">2. AI-Assisted Development</h3>
            <p className="text-muted-foreground">Our engineers work alongside AI to rapidly build and iterate on your digital solution with unprecedented efficiency.</p>
          </div>
          
          <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border border-agency-pink/20 shadow-lg transform transition-all hover:translate-y-[-5px] hover:shadow-agency-pink/10 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-agency-pink to-agency-purple flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            
            <div className="text-xs font-mono mb-4 text-agency-pink opacity-70">
              <span className="text-agency-purple">function</span> <span>optimizeAndScale</span><span>(</span><span>solution</span><span>) {`{`}</span>
              <div className="pl-4 text-muted-foreground">
                <p>// Continuous AI optimization</p>
                <p>deployToCloud(solution);</p>
                <p>ai.monitor(solution);</p>
                <p><span className="text-agency-purple">return</span> ai.continuouslyImprove(solution);</p>
              </div>
              <span>{`}`}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">3. AI Optimization</h3>
            <p className="text-muted-foreground">Our AI continuously monitors and optimizes your solution, ensuring peak performance and adapting to changing needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <GradientBackgroundEffect />
      </div>
      
      <Header />
      <main className="flex-grow pt-16 relative z-10">
        <HeroSection />
        <AIIntelligenceSection />
        <AIAgentsSection />
        <AIAgentProfilesSection />
        <AIMissionSection />
        <RobotAnimation />
        <ServicesSection />
        <section className="py-20 bg-background/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/10 via-agency-blue/10 to-agency-pink/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient animate-scale-in">
              AI-Powered Technology Stack
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
              Our AI systems are built on cutting-edge technologies that enable us to deliver intelligent, 
              scalable solutions that drive your business forward.
            </p>
            <TechCircle />
          </div>
        </section>
        <GalaxyVideoSection />
        <AICodeSection />
        <ScheduleMeetingSection />
        <TestimonialsSection />
        <ClientsSection />
        <TeamSection />
        <ReferralSection />
        <LatestProjectsSection />
        
        <CtaSection />
      </main>
      <Footer />
      
      <AIChatBot />
    </div>
  );
};

export default Index;
