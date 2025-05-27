import { Bot, Brain, MessageSquare, Zap, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AIWorkflowAnimation } from "./AIWorkflowAnimation";

const aiAgents = [
  {
    id: 1,
    title: "Smart Customer Support Bot",
    description: "24/7 automated customer service with intelligent responses and seamless handoff to human agents.",
    icon: MessageSquare,
    features: ["Multi-language support", "Real-time analytics", "CRM integration"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: 2,
    title: "AI Data Analytics Agent",
    description: "Transform your business data into actionable insights with our intelligent analytics AI.",
    icon: Brain,
    features: ["Predictive analytics", "Custom dashboards", "Auto-reporting"],
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Workflow Automation Bot",
    description: "Streamline your business processes with AI-powered automation and smart integrations.",
    icon: Zap,
    features: ["500+ integrations", "Custom workflows", "Real-time monitoring"],
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "AI Content Creator",
    description: "Generate high-quality content, copy, and marketing materials with advanced AI models.",
    icon: Sparkles,
    features: ["SEO optimized", "Brand voice training", "Multi-format output"],
    gradient: "from-green-500 to-emerald-600",
  },
];

export function AIAgentsSection() {
  return (
    <section className="py-20 bg-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-agency-blue/5 to-agency-pink/5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-2 h-2 bg-primary rounded-full animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animate-scale-in">
            AI Agents & Chatbots
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            Plug AI into your own data & over <span className="text-agency-blue font-semibold">500 integrations</span>
          </p>
          <p className="text-base text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
            Empower your business with intelligent automation that learns, adapts, and delivers results 24/7.
          </p>
        </div>

        {/* AI Workflow Animation */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <AIWorkflowAnimation />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiAgents.map((agent, index) => (
            <div 
              key={agent.id}
              className="group bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 bg-gradient-to-r ${agent.gradient} group-hover:scale-110 transition-transform duration-300`}>
                <agent.icon size={24} />
              </div>
              
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {agent.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {agent.description}
              </p>
              
              <div className="space-y-2 mb-4">
                {agent.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                <Link to="/agents" className="flex items-center justify-center">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient hover:opacity-90 button-pop">
            <Link to="/agents" className="flex items-center">
              <Bot className="mr-2 h-5 w-5" />
              <span>Explore All AI Solutions</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
