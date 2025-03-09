
import { 
  Code, 
  ShoppingCart, 
  Search, 
  PenTool, 
  Server, 
  Layers, 
  Smartphone, 
  Link 
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Custom Website Development",
    description: "We build tailor-made websites that perfectly align with your brand and business goals.",
    icon: Code,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "E-commerce Solutions",
    description: "Create powerful online stores that drive sales and deliver exceptional shopping experiences.",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "SEO Optimization",
    description: "Improve your visibility in search engines and drive more organic traffic to your website.",
    icon: Search,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging and conversion-optimized interfaces.",
    icon: PenTool,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Web Hosting & Maintenance",
    description: "Reliable hosting solutions and ongoing maintenance to keep your website secure and fast.",
    icon: Server,
    color: "from-amber-500 to-yellow-600",
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress solutions from blogs to complex applications and e-commerce stores.",
    icon: Layers,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that work flawlessly across all devices.",
    icon: Smartphone,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "API Development & Integration",
    description: "Connect your systems and applications to streamline operations and improve efficiency.",
    icon: Link,
    color: "from-red-500 to-orange-600",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-background rounded-lg shadow-lg border border-border p-6 hover-scale group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 transition-all duration-300 bg-gradient-to-r",
                service.color
              )}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
