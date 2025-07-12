import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, Zap, Network, Database, Code, Sparkles, Rocket, ArrowRight, Globe } from "lucide-react";

export const AIAutomationSection = () => {
  const floatingIcons = [
    { 
      Icon: Brain, 
      delay: 0, 
      x: "15%", 
      y: "20%", 
      color: "from-purple-500 to-pink-500",
      size: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
    },
    { 
      Icon: Cpu, 
      delay: 1, 
      x: "75%", 
      y: "15%", 
      color: "from-blue-500 to-cyan-500",
      size: "w-10 h-10 sm:w-14 sm:h-14 lg:w-18 lg:h-18"
    },
    { 
      Icon: Zap, 
      delay: 2, 
      x: "85%", 
      y: "65%", 
      color: "from-yellow-500 to-orange-500",
      size: "w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
    },
    { 
      Icon: Network, 
      delay: 0.5, 
      x: "10%", 
      y: "70%", 
      color: "from-green-500 to-emerald-500",
      size: "w-10 h-10 sm:w-14 sm:h-14 lg:w-18 lg:h-18"
    },
    { 
      Icon: Database, 
      delay: 1.5, 
      x: "65%", 
      y: "80%", 
      color: "from-indigo-500 to-purple-500",
      size: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
    },
    { 
      Icon: Code, 
      delay: 2.5, 
      x: "45%", 
      y: "25%", 
      color: "from-rose-500 to-pink-500",
      size: "w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_70%)]" />
      
      {/* Enhanced animated stars with varying sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${i % 3 === 0 ? 'w-1.5 h-1.5' : i % 2 === 0 ? 'w-1 h-1' : 'w-0.5 h-0.5'} bg-white rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Enhanced floating tech icons with advanced animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, delay, x, y, color, size }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: [0, 1, 0.8, 1],
              scale: [0, 1.2, 1, 1.1, 1],
              rotate: [0, 360],
              y: [-20, 20, -20],
            }}
            transition={{
              opacity: { duration: 2, delay },
              scale: { duration: 2, delay },
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
            }}
          >
            <motion.div 
              className={`${size} rounded-2xl lg:rounded-3xl bg-gradient-to-br ${color} backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl`}
              whileHover={{ 
                scale: 1.2,
                rotate: 15,
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)"
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(168, 85, 247, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{
                boxShadow: { duration: 4, repeat: Infinity }
              }}
            >
              <Icon className="w-1/2 h-1/2 text-white" />
              
              {/* Inner glow effect */}
              <motion.div
                className="absolute inset-2 rounded-xl lg:rounded-2xl bg-white/10"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            
            {/* Orbit rings */}
            <motion.div
              className="absolute inset-0 border-2 border-white/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Connecting lines between icons */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          {floatingIcons.slice(0, -1).map((_, index) => (
            <motion.line
              key={index}
              x1={`${parseFloat(floatingIcons[index].x)}%`}
              y1={`${parseFloat(floatingIcons[index].y)}%`}
              x2={`${parseFloat(floatingIcons[index + 1].x)}%`}
              y2={`${parseFloat(floatingIcons[index + 1].y)}%`}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                delay: index * 0.5 
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Enhanced header with icon */}
          <motion.div 
            className="flex items-center justify-center space-x-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400" />
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b)",
                backgroundSize: "300% 300%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Supercharge your apps with
            </motion.h2>
            <Rocket className="w-6 h-6 lg:w-8 lg:h-8 text-blue-400" />
          </motion.div>
          
          <motion.h3 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI-powered automation
            </span>
          </motion.h3>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-12 lg:mb-16 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our AI-powered automation integrates seamlessly with leading applications, ensuring 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-semibold"> smooth workflows</span>, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> real-time data synchronization</span>, and 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 font-semibold"> enhanced productivity</span> for your business.
          </motion.p>

          {/* Enhanced CTA button with complex animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glowing background effect */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6 rounded-2xl font-bold shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden group"
              >
                {/* Button inner glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative flex items-center space-x-3">
                  <Globe className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span>View all Integrations</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </motion.div>
                </div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Additional stats or badges */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "500+", text: "Integrations", color: "from-blue-400 to-cyan-400" },
              { number: "99.9%", text: "Uptime", color: "from-emerald-400 to-green-400" },
              { number: "24/7", text: "Support", color: "from-purple-400 to-pink-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.text}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm lg:text-base font-medium">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};