
import { Bot, Sparkles, Brain, Zap, Rocket, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AIIntelligenceSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950">
      {/* Advanced animated background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-500/10 animate-pulse"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-pulse rounded-full opacity-30 ${
              i % 4 === 0 ? 'bg-purple-400 w-2 h-2' :
              i % 4 === 1 ? 'bg-cyan-400 w-3 h-3' :
              i % 4 === 2 ? 'bg-blue-400 w-1 h-1' :
              'bg-pink-400 w-4 h-4'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Morphing shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-bounce opacity-60"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse opacity-40"></div>
        <div className="absolute top-1/3 right-32 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-lg animate-ping opacity-50"></div>

        {/* Advanced orbital system */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Outer ring with gradient */}
          <div className="w-[500px] h-[500px] border-2 border-gradient-to-r from-purple-500/30 via-cyan-500/30 to-blue-500/30 rounded-full animate-spin opacity-20" style={{ animationDuration: '20s' }}>
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-2 shadow-lg shadow-purple-500/50"></div>
          </div>
          
          {/* Middle ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cyan-500/40 rounded-full animate-spin opacity-30" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1.5 shadow-lg shadow-cyan-500/50"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2 translate-y-1 shadow-lg shadow-blue-500/50"></div>
          </div>
          
          {/* Inner ring */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-pink-500/50 rounded-full animate-spin opacity-40" style={{ animationDuration: '10s' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1 shadow-lg shadow-pink-500/50"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300 tracking-wide">
                Creativity, Unleashed ✨
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white block mb-2">Sites beyond</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 block mb-2">
                imagination,
              </span>
              <span className="text-white block">one prompt away.</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Harness AI-powered creativity tools to effectively communicate your concepts to a 
              global audience with unprecedented innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-700 hover:via-purple-600 hover:to-cyan-600 text-white border-0 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 backdrop-blur-sm transition-all duration-300"
              >
                Developer API
              </Button>
            </div>

            {/* Stats */}
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 max-w-sm mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">20k+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Customers</div>
                <div className="text-xs text-gray-500 mt-2">Download our Apps to Get Started Today</div>
              </div>
            </div>
          </div>

          {/* Right visual element */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Central orb with enhanced design */}
            <div className="relative">
              {/* Main gradient sphere */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-600 rounded-full relative overflow-hidden shadow-2xl">
                {/* Inner glow effect */}
                <div className="absolute inset-4 bg-gradient-to-br from-purple-400/50 via-cyan-400/50 to-blue-500/50 rounded-full blur-xl animate-pulse"></div>
                
                {/* Core center */}
                <div className="absolute inset-8 bg-slate-900/80 backdrop-blur rounded-full flex items-center justify-center border border-purple-400/30">
                  <Brain className="w-16 h-16 text-cyan-400 animate-pulse" />
                </div>

                {/* Floating icons around the sphere */}
                <div className="absolute top-8 left-8 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-bounce">
                  <Stars className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-12 right-12 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <div className="absolute bottom-16 left-12 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-8 right-8 w-7 h-7 bg-pink-500 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '2s' }}>
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute -top-4 left-1/2 w-3 h-3 bg-purple-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-purple-400/50"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 translate-y-4 shadow-lg shadow-cyan-400/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
