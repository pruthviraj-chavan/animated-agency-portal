
import { Bot, Brain, MessageSquare, Code, Camera, Mic, Calculator, FileText, ShoppingCart, Heart, Users, TrendingUp } from "lucide-react";

const aiAgentProfiles = [
  {
    name: "Maya",
    role: "Customer Support Specialist",
    icon: MessageSquare,
    gradient: "from-pink-500 to-rose-600",
    delay: "0ms"
  },
  {
    name: "Felix",
    role: "Content Creator",
    icon: FileText,
    gradient: "from-blue-500 to-cyan-600",
    delay: "100ms"
  },
  {
    name: "Lucas",
    role: "Marketing Strategist",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-600",
    delay: "200ms"
  },
  {
    name: "Jake",
    role: "Data Analyst",
    icon: Brain,
    gradient: "from-purple-500 to-indigo-600",
    delay: "300ms"
  },
  {
    name: "Emma",
    role: "Code Assistant",
    icon: Code,
    gradient: "from-orange-500 to-red-600",
    delay: "400ms"
  },
  {
    name: "Julian",
    role: "Design Consultant",
    icon: Camera,
    gradient: "from-teal-500 to-cyan-600",
    delay: "500ms"
  },
  {
    name: "Hazel",
    role: "Voice Assistant",
    icon: Mic,
    gradient: "from-violet-500 to-purple-600",
    delay: "600ms"
  },
  {
    name: "Juniper",
    role: "Financial Advisor",
    icon: Calculator,
    gradient: "from-amber-500 to-orange-600",
    delay: "700ms"
  },
  {
    name: "Asher",
    role: "E-commerce Helper",
    icon: ShoppingCart,
    gradient: "from-lime-500 to-green-600",
    delay: "800ms"
  },
  {
    name: "Charles",
    role: "Healthcare Assistant",
    icon: Heart,
    gradient: "from-red-500 to-pink-600",
    delay: "900ms"
  }
];

export function AIAgentProfilesSection() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(144)].map((_, i) => (
            <div 
              key={i} 
              className="border border-cyan-400/20 animate-pulse-slow"
              style={{ animationDelay: `${(i % 12) * 100}ms` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-cyan-400 mb-4">
            OVER 250 AI AGENTS TO CHAT WITH ABOUT ANYTHING
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ask an AI Agent Anything
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            With an ever-growing pool of hundreds of experts, you can pick an agent in any industry and chat with them as if they were human.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {aiAgentProfiles.map((agent, index) => (
            <div
              key={agent.name}
              className="group bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 animate-fade-in"
              style={{ animationDelay: agent.delay }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Agent Avatar */}
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${agent.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <agent.icon size={20} className="text-white md:w-6 md:h-6" />
                </div>
                
                {/* Agent Info */}
                <h3 className="text-white font-semibold text-sm md:text-base mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                  {agent.name}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-tight">
                  {agent.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating characters section */}
        <div className="relative h-32 mb-8">
          <div className="absolute right-0 top-0 flex space-x-4">
            {/* Chef character */}
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center animate-float">
              <div className="text-white text-2xl">👨‍🍳</div>
            </div>
            
            {/* Business character */}
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-white text-2xl">👨‍💼</div>
            </div>
            
            {/* Doctor character */}
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-white text-2xl">👩‍⚕️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
