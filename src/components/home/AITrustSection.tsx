import { motion } from "framer-motion";
import { Shield, Zap, Users, Clock, DollarSign, TrendingUp, CheckCircle, BarChart3, Star, Award } from "lucide-react";

export const AITrustSection = () => {
  const trustFeatures = [
    {
      icon: CheckCircle,
      title: "Proven Accuracy and Reliability",
      description: "99.9% uptime with enterprise-grade security",
      color: "from-emerald-400 via-cyan-400 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Real-Time Insights and Analytics", 
      description: "Live dashboards with actionable intelligence",
      color: "from-purple-400 via-pink-400 to-red-500"
    },
    {
      icon: Users,
      title: "Scalable for Any Business Size",
      description: "From startups to Fortune 500 companies",
      color: "from-orange-400 via-yellow-400 to-green-500"
    },
    {
      icon: Zap,
      title: "Customizable to Industry Needs",
      description: "Tailored solutions for your specific requirements",
      color: "from-indigo-400 via-purple-400 to-pink-500"
    }
  ];

  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7 Support and Maintenance",
      description: "Round-the-clock support to keep your AI solutions running smoothly",
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
      bgGradient: "from-cyan-500/10 via-blue-500/10 to-purple-600/10"
    },
    {
      icon: DollarSign,
      title: "Cost-Efficient and ROI-Driven",
      description: "Maximize your return on investment with our optimized AI solutions",
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      bgGradient: "from-green-500/10 via-emerald-500/10 to-teal-600/10"
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_70%)]" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
          
          {/* Left side - Enhanced 3D Robot with better mobile responsive */}
          <motion.div 
            className="relative flex justify-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.7, rotateY: -40 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative scale-75 sm:scale-90 lg:scale-100">
              {/* Glowing base with enhanced animation */}
              <motion.div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-12 bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Main robot body with enhanced gradients and responsive sizing */}
              <div className="relative w-64 sm:w-72 lg:w-80 h-80 sm:h-96 lg:h-[26rem] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-600 rounded-3xl lg:rounded-[2rem] shadow-2xl border border-slate-300/50">
                {/* Multiple glowing outlines for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/30 to-purple-400/30 rounded-3xl lg:rounded-[2rem] blur-sm" />
                <div className="absolute inset-2 bg-gradient-to-b from-white/20 to-transparent rounded-2xl lg:rounded-3xl" />
                
                {/* Enhanced robot head */}
                <div className="absolute -top-8 sm:-top-12 lg:-top-16 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-gradient-to-b from-slate-100 to-slate-400 rounded-2xl lg:rounded-3xl shadow-2xl border border-slate-200/50">
                  {/* Head glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/20 to-purple-300/20 rounded-2xl lg:rounded-3xl blur-sm" />
                  
                  {/* Animated eyes with enhanced glow */}
                  <motion.div 
                    className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
                    animate={{ 
                      opacity: [1, 0.3, 1],
                      boxShadow: [
                        "0 0 20px rgba(34, 211, 238, 0.6)",
                        "0 0 30px rgba(34, 211, 238, 0.8)",
                        "0 0 20px rgba(34, 211, 238, 0.6)"
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
                    animate={{ 
                      opacity: [1, 0.3, 1],
                      boxShadow: [
                        "0 0 20px rgba(34, 211, 238, 0.6)",
                        "0 0 30px rgba(34, 211, 238, 0.8)",
                        "0 0 20px rgba(34, 211, 238, 0.6)"
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
                  />
                  
                  {/* Mouth with animation */}
                  <motion.div 
                    className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 lg:w-12 h-2 sm:h-3 lg:h-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full"
                    animate={{ scaleX: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                
                {/* Enhanced arms with complex animation */}
                <motion.div 
                  className="absolute top-16 sm:top-20 lg:top-24 -left-8 sm:-left-10 lg:-left-12 w-16 sm:w-20 lg:w-24 h-6 sm:h-8 lg:h-10 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 rounded-full shadow-xl border border-slate-200/50"
                  animate={{ 
                    rotate: [-8, 8, -8],
                    x: [-2, 2, -2]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-16 sm:top-20 lg:top-24 -right-8 sm:-right-10 lg:-right-12 w-16 sm:w-20 lg:w-24 h-6 sm:h-8 lg:h-10 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 rounded-full shadow-xl border border-slate-200/50"
                  animate={{ 
                    rotate: [8, -8, 8],
                    x: [2, -2, 2]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                
                {/* Enhanced body details */}
                <motion.div 
                  className="absolute top-20 sm:top-24 lg:top-32 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl lg:rounded-2xl shadow-xl"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                >
                  <div className="absolute inset-2 bg-gradient-to-br from-cyan-300 to-purple-500 rounded-lg lg:rounded-xl" />
                  <motion.div 
                    className="absolute inset-4 bg-white/30 rounded-md lg:rounded-lg"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 lg:w-28 h-8 sm:h-12 lg:h-16 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-500 rounded-xl lg:rounded-2xl shadow-xl"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    rotateX: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="absolute inset-2 bg-gradient-to-br from-purple-300 to-orange-400 rounded-lg lg:rounded-xl" />
                </motion.div>
              </div>
              
              {/* Enhanced floating elements with complex animations */}
              <motion.div 
                className="absolute -top-4 sm:-top-8 lg:-top-12 -right-4 sm:-right-8 lg:-right-12 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl lg:rounded-2xl shadow-2xl"
                animate={{ 
                  y: [-20, 20, -20],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute bottom-4 sm:bottom-8 lg:bottom-12 -left-4 sm:-left-8 lg:-left-12 w-6 sm:w-10 lg:w-14 h-6 sm:h-10 lg:h-14 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-lg lg:rounded-xl shadow-2xl"
                animate={{ 
                  y: [20, -20, 20],
                  rotate: [360, 180, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute top-1/2 -right-8 sm:-right-12 lg:-right-16 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-full shadow-2xl"
                animate={{ 
                  x: [-15, 15, -15],
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Right side - Enhanced Content with better mobile layout */}
          <div className="space-y-8 lg:space-y-12 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center space-x-2 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Star className="w-5 h-5 text-yellow-400" />
                <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 uppercase tracking-wider">
                  WHY CHOOSE US
                </h3>
                <Award className="w-5 h-5 text-yellow-400" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                Discover why{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  businesses
                </span>
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                  trust our AI solutions
                </span>
              </h2>
              
              <p className="text-slate-300 text-lg lg:text-xl leading-relaxed">
                Reliable, scalable, and tailored to drive smarter decisions and measurable results for your business growth.
              </p>
            </motion.div>

            {/* Enhanced trust features grid with better mobile layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="relative p-4 lg:p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300 overflow-hidden">
                    {/* Animated background gradient */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      initial={false}
                      animate={{ opacity: [0, 0.05, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <div className="relative flex items-start space-x-4">
                      <motion.div 
                        className={`flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-sm lg:text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-slate-400 text-xs lg:text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced support features with better mobile design */}
            <div className="space-y-4 lg:space-y-6">
              {supportFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  {/* Enhanced glowing border */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  <div className="relative border border-slate-700/50 rounded-2xl p-6 lg:p-8 bg-slate-900/80 backdrop-blur-sm group-hover:bg-slate-900/90 transition-all duration-300 overflow-hidden">
                    {/* Background gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <motion.div 
                        className={`flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-lg lg:text-xl mb-3 group-hover:text-cyan-300 transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-slate-300 text-base lg:text-lg leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};