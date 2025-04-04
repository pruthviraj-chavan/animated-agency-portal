
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const WordpressDevelopment = () => {
  const features = [
    {
      title: "Custom Theme Development",
      description: "Unique WordPress themes tailored to your brand identity and business requirements.",
      icon: CheckCircle2,
    },
    {
      title: "Plugin Integration & Customization",
      description: "Integration and customization of plugins to extend your website's functionality.",
      icon: CheckCircle2,
    },
    {
      title: "WooCommerce Integration",
      description: "Setting up and customizing WooCommerce for your online store needs.",
      icon: CheckCircle2,
    },
    {
      title: "Performance Optimization",
      description: "Optimizing your WordPress site for speed and performance across all devices.",
      icon: CheckCircle2,
    },
    {
      title: "Security Hardening",
      description: "Implementing security measures to protect your WordPress site from threats.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-muted/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-sky/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-blue/10 animate-float"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
                WordPress Development
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Custom WordPress solutions from blogs to complex applications and e-commerce stores, with tailored themes and plugins for your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
              WordPress Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 bg-gradient-to-r from-sky-500 to-blue-600">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-agency-sky/20 via-agency-blue/20 to-agency-purple/20 rounded-xl p-12 text-center max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Need a Custom WordPress Site?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us build a powerful WordPress solution that meets your specific needs and helps you achieve your business goals.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:opacity-90 transition-opacity duration-300"
              >
                <Link to="/contact">
                  Start WordPress Project <ArrowRight className="ml-2 h-4 w-4 inline-block" />
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

export default WordpressDevelopment;
