import { motion } from "framer-motion";
import { ArrowRight, Bot, MessageCircle, Zap, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  { icon: TrendingUp, text: "Automation up to 42%" },
  { icon: Users, text: "Turn visitors into paying customers" },
  { icon: Zap, text: "Supercharge your customer service team" },
];

export const ChatBotServiceSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">ChatBot </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent italic">
                Auto
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent italic">
                Service
              </span>
            </h2>

            <p className="text-slate-300 text-lg mb-8 max-w-lg">
              Transform your customer experience with AI-powered chatbots. 
              Our intelligent automation solutions handle inquiries 24/7, 
              freeing your team to focus on what matters most.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <Button 
              asChild
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-full group"
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {/* Dots indicator */}
            <div className="flex gap-3 mt-8">
              <div className="w-10 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <div className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
          </motion.div>

          {/* Right content - Chat interface mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Floating alert bubble */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 right-8 z-20"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
                <span className="text-white text-2xl">!</span>
              </div>
            </motion.div>

            {/* Chat window */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">AI Assistant</p>
                  <p className="text-green-400 text-xs">● Online</p>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex justify-end"
                >
                  <div className="bg-purple-500/30 rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                    <p className="text-white text-sm">How can I integrate AI chatbot into my website?</p>
                    <span className="text-white/50 text-xs">22:00</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-end gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/20 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                    <p className="text-white text-sm">Great question! We offer seamless integration with just a few lines of code. Our team will set everything up for you!</p>
                    <span className="text-white/50 text-xs">22:01</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex justify-end"
                >
                  <div className="bg-purple-500/30 rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                    <p className="text-white text-sm">That sounds perfect! Let's get started.</p>
                    <span className="text-white/50 text-xs">22:02</span>
                  </div>
                </motion.div>
              </div>

              {/* Input */}
              <div className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-3">
                <MessageCircle className="w-5 h-5 text-white/50" />
                <span className="text-white/50 text-sm flex-1">Type your message...</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Robot decoration */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 z-10"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="flex justify-center gap-4 mb-2">
                    <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse" />
                    <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
                  </div>
                  <div className="w-8 h-1 bg-cyan-400 mx-auto rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
