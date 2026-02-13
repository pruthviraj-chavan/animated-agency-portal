import { motion } from "framer-motion";
import { Bot, Globe, Code, Search, PenTool, Server, Layers, Smartphone, Link as LinkIcon, Brain } from "lucide-react";

const services = [
  { title: "Custom Website Development", icon: Code, tags: ["React", "Next.js", "Tasks +3"] },
  { title: "AI Chatbot Solutions", icon: Bot, tags: ["GPT", "Custom"] },
  { title: "E-commerce Solutions", icon: Globe, tags: ["Shopify", "WooCommerce"] },
  { title: "SEO Optimization", icon: Search, tags: ["On-Page", "Analytics"] },
  { title: "UI/UX Design", icon: PenTool, tags: ["Figma", "Prototyping"] },
  { title: "Web Hosting", icon: Server, tags: ["Cloud", "24/7"] },
  { title: "WordPress Development", icon: Layers, tags: ["CMS", "Plugins"] },
  { title: "Mobile App Development", icon: Smartphone, tags: ["iOS", "Android"] },
  { title: "API Integration", icon: LinkIcon, tags: ["REST", "GraphQL"] },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-background" id="services">
      {/* Colorful gradient light panels on left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-4 -translate-x-1/3 opacity-70">
        <div className="w-20 h-[500px] bg-gradient-to-b from-orange-500 via-red-500 to-orange-400 rounded-2xl blur-sm" />
        <div className="w-16 h-[450px] bg-gradient-to-b from-orange-400 via-orange-600 to-red-500 rounded-2xl blur-sm" />
        <div className="w-12 h-[400px] bg-gradient-to-b from-yellow-400 via-orange-500 to-red-400 rounded-2xl blur-sm" />
      </div>

      {/* Colorful gradient light panels on right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-4 translate-x-1/3 opacity-70">
        <div className="w-12 h-[400px] bg-gradient-to-b from-purple-400 via-blue-500 to-purple-600 rounded-2xl blur-sm" />
        <div className="w-16 h-[450px] bg-gradient-to-b from-pink-500 via-purple-600 to-blue-500 rounded-2xl blur-sm" />
        <div className="w-20 h-[500px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm" />
      </div>

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-green-400/15 to-cyan-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-foreground">AI-Powered Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
            Empowering businesses with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-cyan-400">
              world-class digital services
            </span>
          </h2>
        </motion.div>

        {/* Glassmorphic Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl p-1 bg-gradient-to-br from-blue-400/40 via-green-400/30 to-cyan-400/40">
            {/* Inner glassmorphic container */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-500/10 via-green-500/10 to-cyan-500/10 backdrop-blur-xl p-6 md:p-8 border border-white/10">
              {/* 3x3 Grid of service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className={`group cursor-pointer ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  >
                    <div className="rounded-2xl p-5 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 h-full">
                      {/* Icon + Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-foreground/70" />
                        </div>
                        <h3 className="font-bold text-foreground text-sm leading-tight">
                          {service.title}
                        </h3>
                      </div>

                      {/* Fake content lines */}
                      <div className="space-y-2 mb-4">
                        <div className="h-2 bg-foreground/10 rounded-full w-full" />
                        <div className="h-2 bg-foreground/10 rounded-full w-4/5" />
                        <div className="h-2 bg-foreground/10 rounded-full w-3/5" />
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-foreground/10 rounded-md text-foreground/60 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
