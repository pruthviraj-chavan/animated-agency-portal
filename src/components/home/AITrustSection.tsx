import { Check, Shield, TrendingUp, Settings, BarChart3, Headphones } from "lucide-react";

export const AITrustSection = () => {
  const features = [
    { icon: Check, text: "Proven Accuracy and Reliability" },
    { icon: BarChart3, text: "Real-Time Insights and Analytics" },
    { icon: TrendingUp, text: "Scalable for Any Business Size" },
    { icon: Settings, text: "Customizable to Industry Needs" },
  ];

  const additionalFeatures = [
    {
      icon: Headphones,
      title: "24/7 Support and Maintenance",
      description: "Round-the-clock support to keep your AI solutions running smoothly",
    },
    {
      icon: Shield,
      title: "Cost-Efficient and ROI-Driven",
      description: "Maximize your return on investment with our optimized AI solutions",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-background/80 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-agency-blue/5 to-agency-pink/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Robot-like Element */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Main Robot Body */}
              <div className="w-64 h-80 relative">
                {/* Head */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-400 rounded-xl border-2 border-slate-300 shadow-lg">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-agency-blue rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-agency-blue rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                </div>
                
                {/* Body */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-gradient-to-br from-slate-300 to-slate-500 rounded-2xl border-2 border-slate-400 shadow-xl">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-agency-purple to-agency-blue rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-agency-blue/50 rounded-full"></div>
                </div>
                
                {/* Arms */}
                <div className="absolute top-20 left-2 w-12 h-6 bg-gradient-to-r from-slate-200 to-slate-400 rounded-full border border-slate-300 shadow-md transform rotate-12"></div>
                <div className="absolute top-20 right-2 w-12 h-6 bg-gradient-to-r from-slate-200 to-slate-400 rounded-full border border-slate-300 shadow-md transform -rotate-12"></div>
                
                {/* Legs */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-x-4 w-8 h-16 bg-gradient-to-b from-slate-300 to-slate-500 rounded-lg border border-slate-400 shadow-lg"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-4 w-8 h-16 bg-gradient-to-b from-slate-300 to-slate-500 rounded-lg border border-slate-400 shadow-lg"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-agency-purple to-agency-blue rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-br from-agency-blue to-agency-pink rounded-full animate-bounce" style={{ animationDelay: "2s" }}></div>
              <div className="absolute bottom-4 -right-6 w-4 h-4 bg-gradient-to-br from-agency-pink to-agency-purple rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <p className="text-agency-purple font-semibold mb-2 uppercase tracking-wide">Why Choose Us</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
                Discover why businesses trust our AI solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
                Discover why businesses trust our AI solutions: reliable, scalable, and tailored to 
                drive smarter decisions and measurable results.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-agency-purple to-agency-blue flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Additional Features */}
            <div className="space-y-4">
              {additionalFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-agency-purple/20 animate-fade-in"
                  style={{ animationDelay: `${(index + 4) * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-agency-purple to-agency-blue flex items-center justify-center mt-1">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Circular Badge */}
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full border-2 border-dashed border-agency-purple/30 flex items-center justify-center animate-spin-slow">
                <div className="text-center">
                  <p className="text-xs text-agency-purple font-semibold">Get Started Today</p>
                  <p className="text-xs text-muted-foreground">↗</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};