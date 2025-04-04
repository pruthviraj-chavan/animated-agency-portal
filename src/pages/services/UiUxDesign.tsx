
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const UiUxDesign = () => {
  const features = [
    {
      title: "User Research & Personas",
      description: "Deep understanding of your users through research and persona development.",
      icon: CheckCircle2,
    },
    {
      title: "Wireframing & Prototyping",
      description: "Creating wireframes and interactive prototypes to visualize the user experience.",
      icon: CheckCircle2,
    },
    {
      title: "Interactive Design Mockups",
      description: "High-fidelity mockups that showcase the final design vision.",
      icon: CheckCircle2,
    },
    {
      title: "Usability Testing",
      description: "Testing designs with real users to ensure intuitive and efficient experiences.",
      icon: CheckCircle2,
    },
    {
      title: "Design System Creation",
      description: "Developing comprehensive design systems for consistency across platforms.",
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
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-pink/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-purple/10 animate-float"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
                UI/UX Design
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                User-centered design that creates intuitive, engaging and conversion-optimized interfaces that delight your users and achieve business goals.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
              Our Design Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 bg-gradient-to-r from-pink-500 to-rose-600">
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
            <div className="bg-gradient-to-br from-agency-pink/20 via-agency-purple/20 to-agency-blue/20 rounded-xl p-12 text-center max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Ready for a Design Transformation?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us help you create intuitive, engaging interfaces that delight your users and achieve your business goals.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:opacity-90 transition-opacity duration-300"
              >
                <Link to="/contact">
                  Elevate Your Design <ArrowRight className="ml-2 h-4 w-4 inline-block" />
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

export default UiUxDesign;
