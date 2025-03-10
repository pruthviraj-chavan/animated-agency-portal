
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [currentLoopIndex, setCurrentLoopIndex] = useState(0);
  
  // AI-themed terminal loops
  const terminalLoops = [
    [
      "> Initializing AI system...",
      "> Loading neural networks...",
      "> Calibrating natural language processing...",
      "> AI system ready!"
    ],
    [
      "> Analyzing business requirements...",
      "> Generating technical architecture...",
      "> Coding implementation plan...",
      "> Digital solution blueprint ready!"
    ],
    [
      "> import intelligence from 'artificial-intelligence'",
      "> const solution = await ai.solve(businessChallenge)",
      "> solution.deploy()",
      "> Digital transformation complete!"
    ]
  ];
  
  useEffect(() => {
    if (!terminalRef.current) return;
    
    const currentLoop = terminalLoops[currentLoopIndex];
    let commandIndex = 0;
    let charIndex = 0;
    let currentTimeout: NodeJS.Timeout;
    
    const type = () => {
      if (commandIndex >= currentLoop.length) {
        // End of current loop
        currentTimeout = setTimeout(() => {
          setCurrentLoopIndex((prevIndex) => (prevIndex + 1) % terminalLoops.length);
        }, 3000);
        return;
      }
      
      const currentCommand = currentLoop[commandIndex];
      
      if (terminalRef.current) {
        terminalRef.current.innerText = currentCommand.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex < currentCommand.length) {
          // Continue typing current command
          const delay = Math.random() * 40 + 30; // Random typing speed
          currentTimeout = setTimeout(type, delay);
        } else {
          // Move to next command
          charIndex = 0;
          commandIndex++;
          currentTimeout = setTimeout(type, 1200); // Pause before next command
        }
      }
    };
    
    // Start typing
    currentTimeout = setTimeout(type, 1000);
    
    return () => {
      clearTimeout(currentTimeout);
    };
  }, [currentLoopIndex]);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4 animate-fade-in">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-2 mx-auto md:mx-0 w-fit">
                <BrainCircuit size={16} />
                AI-Powered Digital Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-scale-in">
              Transform Business with{" "}
              <span className="bg-gradient-to-r from-agency-purple via-agency-blue to-agency-pink bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              We harness the power of AI to create intelligent digital solutions that automate processes, 
              gain insights from data, and deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-agency-purple to-agency-blue hover:opacity-90 button-pop relative overflow-hidden group">
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
                  Explore AI Services
                </Link>
                <span className="absolute inset-0 bg-agency-purple/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md animate-fade-in" style={{ animationDelay: "600ms" }}>
            {/* AI-themed terminal animation */}
            <div className="relative">
              {/* Decorative binary code in background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-agency-purple/20 to-agency-blue/20 rounded-lg blur-xl opacity-70 animate-pulse-slow"></div>
              
              <div className="relative bg-black rounded-lg border border-agency-purple/30 shadow-xl overflow-hidden">
                {/* Terminal header */}
                <div className="bg-gray-900 p-2 flex items-center">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-gray-400 font-mono">ai-terminal</span>
                  </div>
                </div>
                
                {/* Terminal content */}
                <div className="p-4 h-72 bg-gradient-to-b from-gray-900 to-black font-mono text-sm">
                  <div className="text-agency-blue mb-2">$ ai-system init</div>
                  <div ref={terminalRef} className="text-agency-purple h-6"></div>
                  <div className="inline-block h-4 w-2 bg-agency-blue/70 ml-1 animate-pulse">
                    <span className="sr-only">Cursor</span>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="mt-6 text-xs opacity-40">
                    <div className="text-agency-blue">// AI model statistics</div>
                    <div className="grid grid-cols-2 gap-1 mt-2">
                      <div>Parameters: <span className="text-agency-purple">1.5B</span></div>
                      <div>Training Data: <span className="text-agency-purple">2.8TB</span></div>
                      <div>Accuracy: <span className="text-agency-purple">98.7%</span></div>
                      <div>Response Time: <span className="text-agency-purple">47ms</span></div>
                    </div>
                    
                    {/* Animated binary/hex data */}
                    <div className="mt-4 text-agency-blue/40 animate-pulse">
                      0x7F45E2A1 0x8B21F9C3 0x3D7A0E5F 0x92C6B1D8
                    </div>
                    <div className="mt-1 text-agency-purple/40 animate-pulse" style={{ animationDelay: "300ms" }}>
                      10110010 01111000 11001101 01010111 
                    </div>
                  </div>
                  
                  {/* Neural network visualization */}
                  <div className="absolute bottom-2 right-2 opacity-20">
                    <svg width="100" height="80" viewBox="0 0 100 80">
                      {/* Input layer */}
                      {[0, 1, 2, 3].map(i => (
                        <circle key={`input-${i}`} cx="10" cy={10 + i * 20} r="3" className="fill-agency-purple animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                      ))}
                      
                      {/* Hidden layer */}
                      {[0, 1, 2].map(i => (
                        <circle key={`hidden-${i}`} cx="50" cy={20 + i * 20} r="3" className="fill-agency-blue animate-pulse" style={{ animationDelay: `${(i+4) * 200}ms` }} />
                      ))}
                      
                      {/* Output layer */}
                      {[0, 1].map(i => (
                        <circle key={`output-${i}`} cx="90" cy={30 + i * 20} r="3" className="fill-agency-pink animate-pulse" style={{ animationDelay: `${(i+7) * 200}ms` }} />
                      ))}
                      
                      {/* Connections */}
                      {[0, 1, 2, 3].map(input => (
                        [0, 1, 2].map(hidden => (
                          <line key={`in-hid-${input}-${hidden}`} x1="10" y1={10 + input * 20} x2="50" y2={20 + hidden * 20} 
                                className="stroke-agency-purple/30" strokeWidth="0.5" />
                        ))
                      ))}
                      
                      {[0, 1, 2].map(hidden => (
                        [0, 1].map(output => (
                          <line key={`hid-out-${hidden}-${output}`} x1="50" y1={20 + hidden * 20} x2="90" y2={30 + output * 20} 
                                className="stroke-agency-blue/30" strokeWidth="0.5" />
                        ))
                      ))}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
