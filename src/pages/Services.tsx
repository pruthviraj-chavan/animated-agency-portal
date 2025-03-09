
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, ShoppingCart, Search, PenTool, Server, Layers, Smartphone, Link as LinkIcon, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Defining a service type for better type checking
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
}

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Custom Website Development",
      description: "We build tailor-made websites that perfectly align with your brand and business goals, focusing on user experience and conversion optimization.",
      icon: Code,
      color: "from-purple-500 to-indigo-600",
      features: [
        "Responsive design for all devices",
        "Custom CMS integration",
        "Performance optimization",
        "Cross-browser compatibility",
        "Accessibility compliance"
      ]
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description: "Create powerful online stores that drive sales and deliver exceptional shopping experiences with secure payment processing and inventory management.",
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Shopping cart functionality",
        "Secure payment gateways",
        "Inventory management",
        "Customer account management",
        "Order processing & tracking"
      ]
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Improve your visibility in search engines and drive more organic traffic to your website with our comprehensive SEO strategies.",
      icon: Search,
      color: "from-green-500 to-emerald-600",
      features: [
        "Keyword research & optimization",
        "On-page SEO implementation",
        "Technical SEO audits",
        "Link building strategies",
        "Analytics & reporting"
      ]
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging and conversion-optimized interfaces that delight your users and achieve business goals.",
      icon: PenTool,
      color: "from-pink-500 to-rose-600",
      features: [
        "User research & personas",
        "Wireframing & prototyping",
        "Interactive design mockups",
        "Usability testing",
        "Design system creation"
      ]
    },
    {
      id: 5,
      title: "Web Hosting & Maintenance",
      description: "Reliable hosting solutions and ongoing maintenance to keep your website secure, fast, and up-to-date with the latest technologies.",
      icon: Server,
      color: "from-amber-500 to-yellow-600",
      features: [
        "Secure cloud hosting",
        "Regular backups & updates",
        "Performance monitoring",
        "24/7 technical support",
        "Security scanning & protection"
      ]
    },
    {
      id: 6,
      title: "WordPress Development",
      description: "Custom WordPress solutions from blogs to complex applications and e-commerce stores, with tailored themes and plugins for your specific needs.",
      icon: Layers,
      color: "from-sky-500 to-blue-600",
      features: [
        "Custom theme development",
        "Plugin integration & customization",
        "WooCommerce integration",
        "Performance optimization",
        "Security hardening"
      ]
    },
    {
      id: 7,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that work flawlessly across all devices, delivering exceptional user experiences to your audience.",
      icon: Smartphone,
      color: "from-violet-500 to-purple-600",
      features: [
        "iOS & Android development",
        "Cross-platform solutions",
        "UI/UX design for mobile",
        "App store optimization",
        "Ongoing maintenance & updates"
      ]
    },
    {
      id: 8,
      title: "API Development & Integration",
      description: "Connect your systems and applications to streamline operations and improve efficiency with custom API development and third-party integrations.",
      icon: LinkIcon,
      color: "from-red-500 to-orange-600",
      features: [
        "Custom API development",
        "Third-party API integration",
        "API documentation",
        "Authentication & security",
        "Performance optimization"
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-muted/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-purple/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-pink/10 animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className={cn(
                    "bg-background rounded-lg border border-border p-6 transition-all duration-300 cursor-pointer animate-fade-in",
                    activeServiceId === service.id ? "shadow-lg scale-[1.02] border-primary" : "hover-scale hover:shadow-md",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setActiveServiceId(activeServiceId === service.id ? null : service.id)}
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
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    activeServiceId === service.id ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
                  )}>
                    <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 animate-slide-in-bottom" style={{ animationDelay: `${idx * 100}ms` }}>
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="sm" className="w-full bg-gradient hover:opacity-90 button-pop mt-2">
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient animate-scale-in">
              Our Process
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {["Discovery", "Strategy", "Design", "Development", "Testing", "Launch", "Support"].map((step, index) => (
                <div 
                  key={step} 
                  className="flex items-center mb-8 animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br 
                    ${index % 2 === 0 ? 'from-agency-purple to-agency-blue' : 'from-agency-blue to-agency-pink'}`}>
                    {index + 1}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold mb-1">{step}</h3>
                    <p className="text-muted-foreground">
                      {index === 0 && "We get to know your business, goals, and target audience."}
                      {index === 1 && "We develop a tailored strategy to meet your specific needs."}
                      {index === 2 && "Our designers create intuitive, engaging interfaces."}
                      {index === 3 && "Our developers bring the designs to life with clean code."}
                      {index === 4 && "Rigorous testing ensures everything works flawlessly."}
                      {index === 5 && "We deploy your project and ensure a smooth rollout."}
                      {index === 6 && "Ongoing support and maintenance keep everything running smoothly."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-agency-purple/20 via-agency-blue/20 to-agency-pink/20 rounded-xl p-12 text-center max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help your business grow. Contact us today for a free consultation.
              </p>
              <Button asChild size="lg" className="bg-gradient hover:opacity-90 button-pop animate-pulse-slow">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
