import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Play } from "lucide-react";
import aiFaceHero from "@/assets/ai-face-hero.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/30" />
      {/* Pastel rainbow accent at top */}
      <div className="absolute top-0 left-1/4 right-1/4 h-40 bg-gradient-to-r from-pink-200/40 via-yellow-200/30 to-blue-200/40 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 pt-8 pb-4 min-h-screen flex flex-col justify-between">
        {/* Top Row */}
        <div className="flex items-start justify-between mt-4 md:mt-8">
          {/* Left: tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-light text-foreground/80 tracking-tight">
              Unleash the Power of
            </p>
          </motion.div>

          {/* Right: AI AUTOMATION badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden sm:block"
          >
            <h2 className="text-sm md:text-base font-black tracking-[0.15em] uppercase text-foreground">
              AI AUTOMATION
            </h2>
          </motion.div>
        </div>

        {/* Giant TECH heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative -mt-2 md:-mt-6"
        >
          <h1
            className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] font-black leading-[0.85] tracking-tighter text-foreground select-none"
            style={{ fontFamily: "'Inter', 'Arial Black', sans-serif" }}
          >
            TECH
          </h1>
        </motion.div>

        {/* Middle section: description left, image center, social right */}
        <div className="flex flex-col md:flex-row items-end md:items-end justify-between gap-6 md:gap-0 relative -mt-[8vw] md:-mt-[10vw]">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xs md:max-w-sm order-2 md:order-1 z-10"
          >
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
              Unleash the true potential of your business through our advanced AI-driven solutions. 
              Streamline workflows, optimize decision-making, and enhance customer experiences like never before.
            </p>
            <Link
              to="/contact"
              className="inline-block text-sm md:text-base font-black uppercase tracking-wide text-foreground border-b-2 border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              GET STARTED NOW!
            </Link>
          </motion.div>

          {/* Center: AI Face Image */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-shrink-0 order-1 md:order-2 mx-auto md:mx-0 relative z-0"
          >
            <img
              src={aiFaceHero}
              alt="AI Robot Face - dieVektor AI Technology"
              className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px] xl:w-[560px] h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Right: Discover + Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="order-3 z-10 hidden md:flex flex-col items-end gap-5"
          >
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-3">Discover more about us!</p>
              <div className="flex items-center gap-3 justify-end">
                <Link
                  to="/about"
                  className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Play className="w-5 h-5 ml-0.5" />
                </Link>
                <div className="w-24 h-12 rounded-full bg-muted overflow-hidden flex items-center justify-center">
                  <span className="text-xs text-muted-foreground font-medium">dieVektor</span>
                </div>
              </div>
            </div>
            
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom: "AI AUTOMATION" large watermark text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative -mt-4 md:-mt-8 overflow-hidden"
        >
          <h2
            className="text-[12vw] sm:text-[10vw] md:text-[9vw] font-black tracking-tight leading-none text-foreground/[0.04] select-none whitespace-nowrap"
            style={{ fontFamily: "'Inter', 'Arial Black', sans-serif" }}
          >
            AI AUTOMATION
          </h2>
        </motion.div>

        {/* Mobile: Social + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex md:hidden items-center justify-between pb-4"
        >
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <Link
            to="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Discover more →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
