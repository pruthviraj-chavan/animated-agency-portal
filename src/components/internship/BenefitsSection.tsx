
import React from "react";
import { Briefcase, GraduationCap, Download, TrendingUp, Users, CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Briefcase className="h-8 w-8 text-agency-purple" />,
      title: "Real-World Projects",
      description: "Work on actual client projects and build a strong portfolio that stands out to future employers."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-agency-blue" />,
      title: "Mentorship",
      description: "Learn directly from industry professionals who will guide you throughout your internship journey."
    },
    {
      icon: <Download className="h-8 w-8 text-agency-pink" />,
      title: "Skill Development",
      description: "Gain practical experience with cutting-edge technologies and methodologies."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-agency-blue" />,
      title: "Career Growth",
      description: "Opportunities for full-time positions based on performance and organizational needs."
    },
    {
      icon: <Users className="h-8 w-8 text-agency-purple" />,
      title: "Collaborative Environment",
      description: "Work alongside talented professionals in a supportive and innovative atmosphere."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-agency-pink" />,
      title: "Certificate & Recommendation",
      description: "Receive a completion certificate and recommendation letter upon successful completion."
    }
  ];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Why <span className="text-gradient">Join Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
            Our internship program is designed to provide valuable experience
            and help you grow personally and professionally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card/30 border border-border rounded-lg p-6 hover-scale transition-all duration-300 hover:bg-card/60"
              data-aos="fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
