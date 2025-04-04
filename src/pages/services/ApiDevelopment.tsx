
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ApiDevelopment = () => {
  const features = [
    {
      title: "Custom API Development",
      description: "Building robust, scalable APIs tailored to your specific business needs.",
      icon: CheckCircle2,
    },
    {
      title: "Third-party API Integration",
      description: "Seamless integration with external services and platforms through their APIs.",
      icon: CheckCircle2,
    },
    {
      title: "API Documentation",
      description: "Comprehensive documentation to ensure smooth integration and usage of your APIs.",
      icon: CheckCircle2,
    },
    {
      title: "Authentication & Security",
      description: "Implementing secure authentication mechanisms and data protection for your APIs.",
      icon: CheckCircle2,
    },
    {
      title: "Performance Optimization",
      description: "Ensuring your APIs are fast, responsive, and can handle high traffic loads.",
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
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-red/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-orange/10 animate-float"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
                API Development & Integration
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Connect your systems and applications to streamline operations and improve efficiency with custom API development and third-party integrations.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
              API Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 bg-gradient-to-r from-red-500 to-orange-600">
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
            <div className="bg-gradient-to-br from-agency-red/20 via-agency-orange/20 to-agency-yellow/20 rounded-xl p-12 text-center max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Connect Your Systems?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us help you develop powerful APIs and integrate with third-party services to streamline your operations.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white hover:opacity-90 transition-opacity duration-300"
              >
                <Link to="/contact">
                  Start API Project <ArrowRight className="ml-2 h-4 w-4 inline-block" />
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

export default ApiDevelopment;
