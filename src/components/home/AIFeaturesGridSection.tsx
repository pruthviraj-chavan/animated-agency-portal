import { Zap, Brain, Shield, Lightbulb, Target, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Ultrafast Response Rate",
    description: "Get instant responses, whether you're generating content, websites, or AI-powered applications.",
    gradient: "from-blue-500 to-cyan-400",
    delay: 0,
  },
  {
    icon: Brain,
    title: "Powered by Advanced AI",
    description: "Leverage cutting-edge AI models to deliver smarter, faster, and more accurate results for all your tasks.",
    gradient: "from-indigo-500 to-purple-400",
    delay: 0.1,
    large: true,
  },
  {
    icon: Lightbulb,
    title: "Always Learning",
    description: "Continuously evolving to deliver better outputs and stay ahead of technology trends.",
    gradient: "from-purple-500 to-pink-400",
    delay: 0.2,
  },
  {
    icon: Shield,
    title: "Secure and Reliable",
    description: "Built with robust and advanced security measures to protect your data and projects.",
    gradient: "from-emerald-500 to-teal-400",
    delay: 0.3,
  },
  {
    icon: Target,
    title: "Bring Any Imagination to Life",
    description: "From creative designs to practical solutions, dieVektor transforms your imagination into tangible results with ease.",
    gradient: "from-orange-500 to-amber-400",
    delay: 0.4,
  },
  {
    icon: CheckCircle,
    title: "Designed for Versatility",
    description: "From content creation to automation, making it the ultimate productivity tool for businesses.",
    gradient: "from-rose-500 to-pink-400",
    delay: 0.5,
  },
];

export const AIFeaturesGridSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Intelligence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From building intelligent websites to automating workflows, 
            dieVektor simplifies complex business tasks.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative">
          {/* Central orb decoration */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 shadow-2xl shadow-primary/30 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
            </motion.div>
          </div>

          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              className={`group relative ${index === 1 ? 'lg:col-span-1' : ''}`}
            >
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center">
                    <feature.icon className={`w-8 h-8 bg-gradient-to-br ${feature.gradient} bg-clip-text`} style={{ color: 'transparent', background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`, WebkitBackgroundClip: 'text', backgroundClip: 'text' }} />
                    <feature.icon className={`w-8 h-8 text-primary`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient}`} />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Connection lines (desktop only) */}
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};
