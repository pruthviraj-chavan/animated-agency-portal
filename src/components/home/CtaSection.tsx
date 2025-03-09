
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Terminal } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/10 via-background to-agency-blue/10"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-agency-purple/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-agency-blue/5 to-transparent"></div>
        
        {/* Code decoration */}
        <div className="absolute top-10 left-10 font-mono text-sm text-agency-purple/20">
          function getStarted() {`{`}<br />
          &nbsp;&nbsp;return success;<br />
          {`}`}
        </div>
        <div className="absolute bottom-10 right-10 font-mono text-sm text-agency-blue/20">
          const future = await buildDigitalPresence();<br />
          console.log(future); // Amazing results
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="rounded-2xl bg-gradient p-2 shadow-xl shadow-agency-purple/5">
          <div className="bg-background/80 backdrop-blur-lg rounded-xl p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
            {/* Binary background */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute font-mono text-xs opacity-5"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    color: Math.random() > 0.5 ? '#9b87f5' : '#33C3F0'
                  }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-agency-purple to-agency-blue">
              <Code className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us today to start your project 
              and take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient hover:opacity-90 button-pop group">
                <Link to="/contact" className="flex items-center">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-agency-blue/50 hover:border-agency-blue button-pop">
                <Link to="/services" className="flex items-center">
                  <Terminal className="mr-2 h-4 w-4" /> View Services
                </Link>
              </Button>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-agency-purple/5 animate-pulse-slow"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-agency-blue/5 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
