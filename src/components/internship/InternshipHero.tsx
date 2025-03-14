
import React from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const InternshipHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-ai-grid opacity-30 z-0"></div>
      
      {/* Neural network animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 800 600">
          <g className="neural-connection">
            {[...Array(20)].map((_, i) => (
              <line 
                key={`line-${i}`} 
                x1={Math.random() * 800} 
                y1={Math.random() * 600} 
                x2={Math.random() * 800} 
                y2={Math.random() * 600} 
                stroke="rgba(155, 135, 245, 0.5)" 
                strokeWidth="1"
              />
            ))}
          </g>
          <g className="neural-pulse">
            {[...Array(30)].map((_, i) => (
              <circle
                key={`circle-${i}`}
                cx={Math.random() * 800}
                cy={Math.random() * 600}
                r="3"
                fill="rgba(51, 195, 240, 0.6)"
                style={{ animationDelay: `${Math.random() * 2}s` }}
              />
            ))}
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Launch Your Career</span> with dieVektor
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Join our team as an intern and work on cutting-edge projects in a collaborative environment.
            Gain valuable skills, mentorship, and real-world experience.
          </p>
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button 
              onClick={() => document.getElementById("roles")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient hover:opacity-90 button-pop flex items-center gap-2"
              size="lg"
            >
              <GraduationCap size={20} />
              Explore Internships
            </Button>
          </div>
        </div>
        
        {/* Animated code section */}
        <div className="max-w-lg mx-auto rounded-lg p-4 bg-background/80 border border-border backdrop-blur-sm code-highlight overflow-hidden">
          <pre className="text-xs md:text-sm font-mono overflow-x-auto animate-typing">
            <code>
{`// dieVektor Internship Program
const joinInternship = async (you) => {
  const skills = await you.learn(["realWorldSkills", "teamwork"]);
  const experience = await dieVektor.provide(["mentorship", "projects"]);
  
  return {
    career: "launched",
    future: "bright",
    opportunities: "unlimited"
  };
};

// Are you ready to begin?
joinInternship(you);`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default InternshipHero;
