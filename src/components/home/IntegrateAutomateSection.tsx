import { motion } from "framer-motion";
import { Code, Globe, Palette, MessageSquare, ShoppingCart, BarChart3 } from "lucide-react";

const capabilities = [
  { icon: Code, label: "Custom Development", color: "from-purple-500 to-indigo-500" },
  { icon: Globe, label: "Web Applications", color: "from-blue-500 to-cyan-500" },
  { icon: Palette, label: "UI/UX Design", color: "from-pink-500 to-rose-500" },
  { icon: MessageSquare, label: "AI Chatbots", color: "from-emerald-500 to-teal-500" },
  { icon: ShoppingCart, label: "E-commerce", color: "from-orange-500 to-amber-500" },
  { icon: BarChart3, label: "Analytics", color: "from-violet-500 to-purple-500" },
];

const floatingIcons = [
  { icon: "🚀", x: "10%", y: "20%", delay: 0 },
  { icon: "⚡", x: "85%", y: "15%", delay: 0.5 },
  { icon: "🎯", x: "15%", y: "75%", delay: 1 },
  { icon: "💡", x: "80%", y: "70%", delay: 1.5 },
  { icon: "🔧", x: "5%", y: "45%", delay: 2 },
  { icon: "📊", x: "90%", y: "45%", delay: 2.5 },
];

export const IntegrateAutomateSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: item.delay }}
          viewport={{ once: true }}
          animate={{ y: [0, -15, 0] }}
          className="absolute text-3xl"
          style={{ left: item.x, top: item.y }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Integrate and Automate
            <br />
            <span className="text-primary">with Ease</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From connecting with your favorite tools to automating workflows, 
            dieVektor simplifies business tasks.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap lg:flex-col gap-4 justify-center"
          >
            {capabilities.slice(0, 3).map((cap, index) => (
              <motion.div
                key={cap.label}
                whileHover={{ scale: 1.05, x: 10 }}
                className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center cursor-pointer group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cap.color} flex items-center justify-center`}>
                  <cap.icon className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-72 h-[500px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-slate-900/30">
              {/* Phone frame */}
              <div className="w-full h-full bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-10" />
                
                {/* Screen content */}
                <div className="pt-10 px-4">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-foreground font-semibold">Our Abilities</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div className="w-2 h-2 bg-muted rounded-full" />
                    </div>
                  </div>

                  {/* Capability cards */}
                  <div className="grid grid-cols-2 gap-3">
                    {capabilities.map((cap, index) => (
                      <motion.div
                        key={cap.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 dark:bg-slate-700 rounded-xl p-3 group hover:shadow-md transition-all"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cap.color} flex items-center justify-center mb-2`}>
                          <cap.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-medium text-foreground">{cap.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-[4rem] blur-2xl -z-10" />
          </motion.div>

          {/* Right icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap lg:flex-col gap-4 justify-center"
          >
            {capabilities.slice(3, 6).map((cap, index) => (
              <motion.div
                key={cap.label}
                whileHover={{ scale: 1.05, x: -10 }}
                className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center cursor-pointer group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cap.color} flex items-center justify-center`}>
                  <cap.icon className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
