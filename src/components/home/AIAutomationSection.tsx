import { Button } from "@/components/ui/button";
import { Brain, Cpu, Zap, Network, Database, Code } from "lucide-react";

export const AIAutomationSection = () => {
  const floatingIcons = [
    { Icon: Brain, delay: "0s", x: "20%", y: "20%" },
    { Icon: Cpu, delay: "1s", x: "70%", y: "15%" },
    { Icon: Zap, delay: "2s", x: "80%", y: "60%" },
    { Icon: Network, delay: "0.5s", x: "15%", y: "70%" },
    { Icon: Database, delay: "1.5s", x: "60%", y: "80%" },
    { Icon: Code, delay: "2.5s", x: "40%", y: "25%" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-agency-blue/5 to-agency-pink/5"></div>
      
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: x,
              top: y,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: delay,
            }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-agency-purple/20 to-agency-blue/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-agency-blue opacity-60" />
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
          Supercharge your apps with AI-powered automation
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
          Our AI-powered automation integrates with leading apps, ensuring smooth 
          workflows, real-time data sync, and enhanced productivity for your business.
        </p>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-agency-blue to-agency-purple hover:from-agency-purple hover:to-agency-blue text-white px-8 py-3 rounded-lg transform transition-all hover:scale-105 animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          View all Integrations
        </Button>
      </div>
    </section>
  );
};