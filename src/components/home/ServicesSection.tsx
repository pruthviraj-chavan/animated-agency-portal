
import { 
  Code, 
  ShoppingCart, 
  Search, 
  PenTool, 
  Server, 
  Layers, 
  Smartphone, 
  Link,
  ExternalLink,
  Star,
  Users,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Custom Website Development",
    subtitle: "Premium Sites",
    clients: "500+",
    rating: "4.9",
    description: "We build tailor-made websites that perfectly align with your brand and business goals using cutting-edge technologies.",
    icon: Code,
    bgGradient: "from-orange-400 via-orange-500 to-orange-600",
    tags: ["Technology", "Web Design"],
    socialIcons: [ExternalLink, Star]
  },
  {
    title: "E-commerce Solutions", 
    subtitle: "Online Stores",
    clients: "300+",
    rating: "4.8",
    description: "Create powerful online stores that drive sales and deliver exceptional shopping experiences with advanced features.",
    icon: ShoppingCart,
    bgGradient: "from-blue-400 via-blue-500 to-blue-600",
    tags: ["E-commerce", "Sales"],
    socialIcons: [TrendingUp, Users]
  },
  {
    title: "SEO Optimization",
    subtitle: "Organic Growth",
    clients: "700+",
    rating: "4.9",
    description: "Improve your visibility in search engines and drive more organic traffic with proven SEO strategies.",
    icon: Search,
    bgGradient: "from-green-400 via-green-500 to-green-600",
    tags: ["SEO", "Marketing"],
    socialIcons: [TrendingUp, Star]
  },
  {
    title: "UI/UX Design",
    subtitle: "Design Excellence",
    clients: "400+",
    rating: "4.9",
    description: "User-centered design that creates intuitive, engaging and conversion-optimized interfaces for modern web.",
    icon: PenTool,
    bgGradient: "from-pink-400 via-pink-500 to-pink-600",
    tags: ["Design", "User Experience"],
    socialIcons: [Star, Users]
  },
  {
    title: "Web Hosting & Maintenance",
    subtitle: "24/7 Support",
    clients: "600+",
    rating: "4.8",
    description: "Reliable hosting solutions and ongoing maintenance to keep your website secure, fast, and optimized.",
    icon: Server,
    bgGradient: "from-purple-400 via-purple-500 to-purple-600",
    tags: ["Hosting", "Maintenance"],
    socialIcons: [ExternalLink, Star]
  },
  {
    title: "WordPress Development",
    subtitle: "CMS Solutions",
    clients: "800+",
    rating: "4.9",
    description: "Custom WordPress solutions from blogs to complex applications and e-commerce stores with advanced functionality.",
    icon: Layers,
    bgGradient: "from-cyan-400 via-cyan-500 to-cyan-600",
    tags: ["WordPress", "CMS"],
    socialIcons: [Users, TrendingUp]
  },
  {
    title: "Mobile App Development",
    subtitle: "Cross Platform",
    clients: "250+",
    rating: "4.8",
    description: "Native and cross-platform mobile applications that work flawlessly across all devices with modern UI.",
    icon: Smartphone,
    bgGradient: "from-violet-400 via-violet-500 to-violet-600",
    tags: ["Mobile", "Apps"],
    socialIcons: [Star, ExternalLink]
  },
  {
    title: "API Development & Integration",
    subtitle: "System Integration",
    clients: "350+",
    rating: "4.9",
    description: "Connect your systems and applications to streamline operations and improve efficiency with robust APIs.",
    icon: Link,
    bgGradient: "from-red-400 via-red-500 to-red-600",
    tags: ["API", "Integration"],
    socialIcons: [TrendingUp, Users]
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden relative" id="services">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Empowering businesses with world-class
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            digital solutions and services
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional digital experiences that drive growth and innovation for companies worldwide.
          </p>
        </div>

        {/* Floating Cards Container */}
        <div className="relative">
          <div className="flex gap-6 animate-[scroll-right-to-left_40s_linear_infinite] hover:[animation-play-state:paused]">
            {/* First set of cards */}
            {services.map((service, index) => (
              <div
                key={`first-${service.title}`}
                className={cn(
                  "flex-shrink-0 w-80 md:w-96 p-6 rounded-2xl shadow-2xl backdrop-blur-sm",
                  "transform hover:scale-105 hover:shadow-3xl transition-all duration-500",
                  "border border-white/20 bg-gradient-to-br",
                  service.bgGradient,
                  "group cursor-pointer"
                )}
                style={{
                  animationDelay: `${index * 200}ms`,
                  transform: `translateY(${Math.sin(index * 0.5) * 20}px)`
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{service.title}</h3>
                      <p className="text-white/80 text-sm">{service.clients}</p>
                    </div>
                  </div>
                  <ExternalLink className="text-white/60 group-hover:text-white transition-colors" size={20} />
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 mb-4">
                  {service.socialIcons.map((IconComponent, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      <IconComponent size={16} className="text-white" />
                    </div>
                  ))}
                </div>

                {/* Service Info */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold">{service.subtitle}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-300 fill-yellow-300" size={14} />
                      <span className="text-white/90 text-sm">{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-3 text-white/60 text-xs">
                    ⚡ Weekly updates • 🎯 Results driven
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {services.map((service, index) => (
              <div
                key={`second-${service.title}`}
                className={cn(
                  "flex-shrink-0 w-80 md:w-96 p-6 rounded-2xl shadow-2xl backdrop-blur-sm",
                  "transform hover:scale-105 hover:shadow-3xl transition-all duration-500",
                  "border border-white/20 bg-gradient-to-br",
                  service.bgGradient,
                  "group cursor-pointer"
                )}
                style={{
                  animationDelay: `${index * 200}ms`,
                  transform: `translateY(${Math.sin(index * 0.5) * 20}px)`
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{service.title}</h3>
                      <p className="text-white/80 text-sm">{service.clients}</p>
                    </div>
                  </div>
                  <ExternalLink className="text-white/60 group-hover:text-white transition-colors" size={20} />
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 mb-4">
                  {service.socialIcons.map((IconComponent, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      <IconComponent size={16} className="text-white" />
                    </div>
                  ))}
                </div>

                {/* Service Info */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold">{service.subtitle}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-300 fill-yellow-300" size={14} />
                      <span className="text-white/90 text-sm">{service.rating}</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-3 text-white/60 text-xs">
                    ⚡ Weekly updates • 🎯 Results driven
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
