
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-agency-purple/20 via-agency-blue/20 to-agency-pink/20 animate-bg-pan"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-purple/20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-pink/20 animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-agency-blue/20 animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-4 animate-fade-in">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Digital Solutions for Modern Businesses
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient animate-scale-in">
            Transforming Ideas Into Digital Reality
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            We create stunning websites, powerful applications, and engaging digital experiences that drive growth and delight users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button asChild size="lg" className="bg-gradient hover:opacity-90 button-pop">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="button-pop">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
