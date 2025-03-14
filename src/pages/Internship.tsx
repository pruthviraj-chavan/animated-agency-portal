
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import InternshipHero from "@/components/internship/InternshipHero";
import RolesSection, { InternshipRole } from "@/components/internship/RolesSection";
import ApplicationForm from "@/components/internship/ApplicationForm";
import BenefitsSection from "@/components/internship/BenefitsSection";
import WhatsAppCTA from "@/components/internship/WhatsAppCTA";

const Internship = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  
  const internshipRoles: InternshipRole[] = [
    {
      id: "python",
      title: "Python Intern",
      icon: () => null, // These are passed to child components but defined there
      description: "Join our team to develop Python applications and data solutions for our clients.",
      skills: ["Python", "Data Structures", "APIs", "Flask/Django"],
      duration: "3-6 months",
      stipend: "₹8,000-15,000/month",
    },
    {
      id: "ai",
      title: "AI Intern",
      icon: () => null,
      description: "Work on cutting-edge AI projects and implement machine learning models.",
      skills: ["Python", "TensorFlow/PyTorch", "Data Analysis", "NLP"],
      duration: "4-6 months",
      stipend: "₹10,000-18,000/month",
    },
    {
      id: "web",
      title: "Web Developer Intern",
      icon: () => null,
      description: "Create modern, responsive websites and web applications for various industries.",
      skills: ["HTML/CSS", "JavaScript", "React/Vue", "Responsive Design"],
      duration: "3-6 months",
      stipend: "₹8,000-15,000/month",
    },
    {
      id: "backend",
      title: "Backend Intern",
      icon: () => null,
      description: "Build robust server-side architecture and maintain database systems.",
      skills: ["Node.js", "Express", "MongoDB/SQL", "API Development"],
      duration: "3-6 months",
      stipend: "₹10,000-15,000/month",
    },
    {
      id: "frontend",
      title: "Frontend Intern",
      icon: () => null,
      description: "Design and implement user-facing features for web and mobile applications.",
      skills: ["React", "JavaScript/TypeScript", "CSS/Tailwind", "State Management"],
      duration: "3-6 months",
      stipend: "₹8,000-15,000/month",
    },
    {
      id: "uiux",
      title: "UI/UX Design Intern",
      icon: () => null,
      description: "Create beautiful, intuitive interfaces and enhance user experiences.",
      skills: ["Figma", "User Research", "Prototyping", "Visual Design"],
      duration: "3-6 months",
      stipend: "₹8,000-15,000/month",
    },
    {
      id: "sales",
      title: "Sales Intern",
      icon: () => null,
      description: "Help our team convert leads and build client relationships.",
      skills: ["Communication", "Negotiation", "CRM Tools", "Market Research"],
      duration: "3-6 months",
      stipend: "₹10,000-20,000/month + incentives",
    },
    {
      id: "lead",
      title: "Lead Generation Intern",
      icon: () => null,
      description: "Identify potential clients and develop strategies to attract new business.",
      skills: ["Research", "Outreach", "Social Media", "Analytics"],
      duration: "3-6 months",
      stipend: "₹8,000-15,000/month + incentives",
    },
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId === selectedRole ? null : roleId);
    // Scroll to form when a role is selected
    if (roleId !== selectedRole) {
      setTimeout(() => {
        document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        <InternshipHero />
        <RolesSection selectedRole={selectedRole} onRoleSelect={handleRoleSelect} />
        <ApplicationForm selectedRole={selectedRole} internshipRoles={internshipRoles} />
        <BenefitsSection />
        <WhatsAppCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Internship;
