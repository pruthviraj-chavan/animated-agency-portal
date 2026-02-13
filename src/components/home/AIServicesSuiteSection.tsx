import { motion } from "framer-motion";
import { Brain, Bot, Globe, Palette, Cpu, Rocket, GraduationCap } from "lucide-react";

const services = [
  { icon: Brain, label: "AI\nAutomation", color: "#facc15" },
  { icon: Bot, label: "Custom\nChatbots", color: "#4ade80" },
  { icon: Globe, label: "Web\nDevelopment", color: "#38bdf8" },
  { icon: Palette, label: "UI/UX\nDesign", color: "#c084fc" },
  { icon: Cpu, label: "AI\nIntegration", color: "#fb923c" },
  { icon: Rocket, label: "App\nDevelopment", color: "#f472b6" },
  { icon: GraduationCap, label: "AI Training\n& Workshops", color: "#34d399" },
];

const trustedBy = [
  "Radhanagri Schools",
  "Kolhapur Startups",
  "E-Commerce Brands",
  "Healthcare Clinics",
  "Real Estate Firms",
  "Education Institutes",
  "Tech Companies",
  "NGOs & Trusts",
  "Manufacturing Units",
  "Retail Businesses",
  "Hospitality Groups",
  "Financial Services",
];

export const AIServicesSuiteSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight tracking-tight">
            AI-Powered Digital
            <br />
            <span className="relative inline-block">
              Solutions Suite
              {/* Colorful underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 400 12" fill="none" preserveAspectRatio="none">
                <path d="M0 6 Q100 0 200 6 Q300 12 400 6" stroke="url(#underlineGrad)" strokeWidth="4" strokeLinecap="round" fill="none" />
                <defs>
                  <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="25%" stopColor="#4ade80" />
                    <stop offset="50%" stopColor="#facc15" />
                    <stop offset="75%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* Cards Row */}
        <div className="relative max-w-6xl mx-auto mb-24">
          {/* Connecting colored rings/arcs behind cards */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid meet">
            {/* Arc 1 - yellow/green */}
            <ellipse cx="200" cy="200" rx="80" ry="60" fill="none" stroke="#facc15" strokeWidth="6" strokeLinecap="round"
              strokeDasharray="120 300" transform="rotate(-15, 200, 200)" opacity="0.6" />
            {/* Arc 2 - green */}
            <ellipse cx="340" cy="180" rx="80" ry="60" fill="none" stroke="#4ade80" strokeWidth="6" strokeLinecap="round"
              strokeDasharray="140 280" transform="rotate(10, 340, 180)" opacity="0.6" />
            {/* Arc 3 - cyan */}
            <ellipse cx="500" cy="190" rx="90" ry="65" fill="none" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round"
              strokeDasharray="130 300" transform="rotate(-5, 500, 190)" opacity="0.6" />
            {/* Arc 4 - purple */}
            <ellipse cx="650" cy="185" rx="75" ry="55" fill="none" stroke="#c084fc" strokeWidth="6" strokeLinecap="round"
              strokeDasharray="110 280" transform="rotate(12, 650, 185)" opacity="0.6" />
            {/* Arc 5 - orange */}
            <ellipse cx="800" cy="195" rx="85" ry="60" fill="none" stroke="#fb923c" strokeWidth="6" strokeLinecap="round"
              strokeDasharray="150 270" transform="rotate(-8, 800, 195)" opacity="0.7" />
          </svg>

          {/* Service Cards */}
          <div className="flex items-end justify-center gap-3 md:gap-5 overflow-x-auto pb-4 px-4 relative z-10">
            {services.map((service, index) => {
              const rotation = (index - 3) * 3;
              const yOffset = Math.abs(index - 3) * 8;
              return (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, y: 40, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, rotate: 0, scale: 1.05 }}
                  className="flex-shrink-0"
                  style={{ marginBottom: `${yOffset}px` }}
                >
                  <div className="w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-44 bg-background rounded-2xl border border-border/50 shadow-lg flex flex-col items-center justify-center gap-3 cursor-pointer transition-shadow hover:shadow-xl"
                    style={{ boxShadow: `0 8px 30px -12px ${service.color}30` }}
                  >
                    {/* Icon circle */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}15`, border: `1.5px solid ${service.color}30` }}
                    >
                      <service.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: service.color }} />
                    </div>
                    {/* Label */}
                    <p className="text-xs md:text-sm font-semibold text-foreground text-center leading-tight whitespace-pre-line">
                      {service.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground mb-8 font-medium">
            Trusted by businesses & institutions across India
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {trustedBy.map((name, index) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
                className="text-sm md:text-base font-bold text-muted-foreground/60 hover:text-foreground transition-colors cursor-default tracking-wide"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
