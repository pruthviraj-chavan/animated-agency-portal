
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const terminalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!terminalRef.current) return;
    
    const commands = [
      "npm create digital-agency",
      "Installing dependencies...",
      "Setting up project structure...",
      "Initializing components...",
      "Starting development server...",
      "Digital Agency ready! ✨"
    ];
    
    let commandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentCommand = commands[commandIndex];
      
      if (isDeleting) {
        if (terminalRef.current) {
          terminalRef.current.innerText = currentCommand.substring(0, charIndex - 1);
          charIndex--;
        }
        
        typingSpeed = 50;
        
        if (charIndex === 0) {
          isDeleting = false;
          commandIndex++;
          if (commandIndex === commands.length) commandIndex = 0;
          typingSpeed = 1000;
        }
      } else {
        if (terminalRef.current) {
          terminalRef.current.innerText = currentCommand.substring(0, charIndex + 1);
          charIndex++;
        }
        
        typingSpeed = 100;
        
        if (charIndex === currentCommand.length) {
          isDeleting = true;
          typingSpeed = 2000;
        }
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-agency-purple/30 via-agency-blue/30 to-agency-pink/30 animate-bg-pan"></div>
        
        {/* Enhanced animated shapes with code-like elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-purple/20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-pink/20 animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-agency-blue/20 animate-spin-slow"></div>
        
        {/* Code brackets decoration */}
        <div className="absolute top-[15%] left-[10%] text-6xl text-agency-purple/10 font-mono animate-float">{`{`}</div>
        <div className="absolute bottom-[15%] right-[10%] text-6xl text-agency-blue/10 font-mono animate-float" style={{ animationDelay: "1s" }}>{`}`}</div>
        <div className="absolute top-[40%] right-[5%] text-4xl text-agency-pink/10 font-mono animate-float" style={{ animationDelay: "1.5s" }}>{`<>`}</div>
        <div className="absolute bottom-[40%] left-[5%] text-4xl text-agency-purple/10 font-mono animate-float" style={{ animationDelay: "2s" }}>{`</>`}</div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-4 animate-fade-in">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-2">
              <Code size={16} />
              Digital Solutions for Modern Businesses
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient animate-scale-in">
            Transforming Ideas Into <br /> 
            <span className="bg-gradient-to-r from-agency-purple via-agency-blue to-agency-pink bg-clip-text text-transparent">Digital Reality</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            We create stunning websites, powerful applications, and engaging digital experiences that drive growth and delight users.
          </p>
          
          {/* Terminal animation */}
          <div className="w-full max-w-lg mx-auto mb-8 bg-black/50 border border-agency-purple/30 rounded-lg p-4 overflow-hidden animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-white/70 ml-2">terminal</span>
            </div>
            <div className="font-mono text-sm">
              <span className="text-agency-blue">$ </span>
              <span ref={terminalRef} className="text-agency-purple"></span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button asChild size="lg" className="bg-gradient hover:opacity-90 button-pop relative overflow-hidden group">
              <Link to="/contact">
                <span className="relative z-10 flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="button-pop border-agency-purple/50 hover:border-agency-purple/80 relative overflow-hidden group">
              <Link to="/services" className="relative z-10 flex items-center">
                <Terminal className="mr-2 h-4 w-4" /> 
                Explore Services
              </Link>
              <span className="absolute inset-0 bg-agency-purple/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
