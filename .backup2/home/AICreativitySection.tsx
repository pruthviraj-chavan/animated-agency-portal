import { Button } from "@/components/ui/button";
import { Sparkles, Globe, Rocket } from "lucide-react";

export const AICreativitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-agency-purple/5 to-agency-pink/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-agency-purple/20 to-agency-pink/20 animate-float"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-agency-purple to-agency-pink text-white px-4 py-2 rounded-full text-sm font-semibold animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Creativity, Unleashed.</span>
              <Sparkles className="w-4 h-4" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gradient animate-scale-in">
              Sites beyond imagination, one prompt away.
            </h2>

            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Harness AI-powered creativity tools to effectively communicate 
              your concepts to a global audience with unprecedented innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-agency-purple to-agency-pink hover:from-agency-pink hover:to-agency-purple text-white px-8 py-3 rounded-lg transform transition-all hover:scale-105"
              >
                Get Started
                <Rocket className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-agency-purple/30 text-agency-purple hover:bg-agency-purple/10 px-8 py-3 rounded-lg"
              >
                Developer API
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-8 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <div className="inline-flex items-center space-x-8 bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-agency-purple/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">20k+</div>
                  <div className="text-sm text-muted-foreground">CUSTOMERS</div>
                </div>
                <div className="w-px h-12 bg-agency-purple/20"></div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Download our Apps to</div>
                  <div className="text-xs text-agency-purple font-semibold">Get Started Today</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3D Globe */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80">
              {/* Main Globe */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-agency-purple via-agency-blue to-agency-pink opacity-80 animate-spin-slow">
                {/* Globe Surface Pattern */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-agency-purple/60 to-agency-blue/60 overflow-hidden">
                  {/* Continents/Patterns */}
                  <div className="absolute top-1/4 left-1/4 w-16 h-8 bg-agency-pink/40 rounded-full"></div>
                  <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-agency-purple/40 rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-20 h-6 bg-agency-blue/40 rounded-full"></div>
                  
                  {/* Glowing lines */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute border border-white/20 rounded-full"
                        style={{
                          width: `${100 - i * 10}%`,
                          height: `${100 - i * 10}%`,
                          top: `${i * 5}%`,
                          left: `${i * 5}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Glowing Ring */}
              <div className="absolute inset-[-20px] rounded-full border-2 border-gradient-to-r from-agency-purple via-agency-blue to-agency-pink opacity-50 animate-pulse"></div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-agency-purple to-agency-blue rounded-full animate-bounce" style={{ animationDelay: "1s" }}>
                <Globe className="w-4 h-4 text-white m-2" />
              </div>
              
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-br from-agency-blue to-agency-pink rounded-full animate-bounce" style={{ animationDelay: "2s" }}>
                <Sparkles className="w-3 h-3 text-white m-1.5" />
              </div>
              
              <div className="absolute bottom-4 -right-6 w-10 h-10 bg-gradient-to-br from-agency-pink to-agency-purple rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}>
                <Rocket className="w-5 h-5 text-white m-2.5" />
              </div>

              {/* Energy Rays */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 bg-gradient-to-t from-transparent via-agency-purple/50 to-transparent"
                    style={{
                      height: "200%",
                      left: "50%",
                      top: "-50%",
                      transform: `rotate(${i * 60}deg)`,
                      transformOrigin: "bottom center",
                      animation: `pulse ${2 + i * 0.3}s infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};