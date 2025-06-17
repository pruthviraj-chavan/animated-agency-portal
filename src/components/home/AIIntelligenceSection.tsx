
import { Bot, Sparkles, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AIIntelligenceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-pink-400 rounded-full animate-float opacity-50" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-cyan-400/20 rounded-full animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-purple-400/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-400/20 rounded-full animate-spin-slow" style={{ animationDuration: '8s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Central AI orb */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse-slow shadow-2xl shadow-cyan-400/50"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 bg-slate-900 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              {/* Orbiting dots */}
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 animate-spin-slow" style={{ transformOrigin: '50% 48px' }}></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 animate-spin-slow" style={{ transformOrigin: '50% -48px', animationDirection: 'reverse' }}></div>
            </div>
          </div>

          <p className="text-sm uppercase tracking-wider text-cyan-400 mb-4 animate-fade-in">
            ONE PLATFORM, HUNDREDS OF THINGS TO DO
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-scale-in">
            The intelligence barrier is down.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Your imagination is the last frontier.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-slide-in-bottom">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
              <Bot className="mr-2 h-5 w-5" />
              Explore AI Agents
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
