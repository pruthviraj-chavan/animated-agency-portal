
import { Zap, Target, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AIMissionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large diamond shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 transform rotate-45 animate-float opacity-20"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 transform rotate-45 animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45 animate-float opacity-25" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating hexagons */}
        <div className="absolute top-32 right-20 w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-20 animate-float" style={{ animationDelay: '0.5s', clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
        <div className="absolute bottom-20 right-40 w-14 h-14 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-15 animate-float" style={{ animationDelay: '1.5s', clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - 3D Character representation */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Central platform */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-gradient-to-r from-cyan-400/30 via-blue-500/40 to-purple-600/30 rounded-full blur-sm"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-56 h-6 bg-gradient-to-r from-cyan-400/20 via-blue-500/30 to-purple-600/20 rounded-full"></div>
              
              {/* Character silhouette */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-32 bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-full relative animate-float">
                  {/* Head */}
                  <div className="w-16 h-16 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full absolute top-4 left-4 animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full absolute top-4 right-4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  {/* Arms */}
                  <div className="w-6 h-16 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full absolute top-4 -left-8 transform rotate-12"></div>
                  <div className="w-6 h-16 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full absolute top-4 -right-8 transform -rotate-12"></div>
                </div>
              </div>

              {/* Floating elements around character */}
              <div className="absolute top-16 left-8 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45 animate-float opacity-60"></div>
              <div className="absolute top-12 right-12 w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-32 right-4 w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 transform rotate-45 animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-24 left-4 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-float opacity-80" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-cyan-400 animate-fade-in">
              OVER 250 AI AGENTS TO CHAT WITH ABOUT ANYTHING
            </p>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight animate-scale-in">
              Our ambitious mission to build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                ASI starts with you.
              </span>
            </h2>

            <div className="space-y-4 text-gray-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <p className="text-lg leading-relaxed">
                Our mission is to revolutionize the world with an all-in-one platform that lets you accomplish anything with unparalleled speed.
              </p>
              
              <p className="leading-relaxed">
                As we step into an era where people and AI collaborate in all industries, we take it upon ourselves to ensure that AI is accessible to everyone, not just the privileged few.
              </p>
              
              <p className="leading-relaxed">
                We are not just a software provider; we are a movement to give the overlooked the correct resources to strive for success.
              </p>
              
              <p className="font-semibold text-white">
                Join us in a mission to surpass the limits of the human mind, to move from a place of "I can't" to "I will"
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 animate-slide-in-bottom" style={{ animationDelay: '400ms' }}>
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0" asChild>
                <Link to="/agents">
                  <Users className="mr-2 h-5 w-5" />
                  Join the Movement
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
