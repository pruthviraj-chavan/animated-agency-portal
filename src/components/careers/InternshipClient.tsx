"use client";

import React, { useState } from "react";
import {
  Brain,
  Briefcase,
  CheckCircle,
  Code,
  Database,
  Download,
  Globe,
  GraduationCap,
  Laptop,
  PenTool,
  TrendingUp,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONFIG } from "@/config/site";

type InternshipRole = {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
  duration: string;
  stipend: string;
};

const internshipRoles: InternshipRole[] = [
  {
    id: "python",
    title: "Python Intern",
    icon: Code,
    description: "Develop Python applications, APIs, and data pipelines for client systems.",
    skills: ["Python", "Data Structures", "APIs", "FastAPI/Django"],
    duration: "3-6 months",
    stipend: "₹8,000-15,000/month",
  },
  {
    id: "ai",
    title: "AI Intern",
    icon: Brain,
    description: "Build conversational AI agents, RAG assistants, and automation workflows.",
    skills: ["Python", "LLMs", "RAG", "NLP"],
    duration: "4-6 months",
    stipend: "₹10,000-18,000/month",
  },
  {
    id: "web",
    title: "Web Developer Intern",
    icon: Globe,
    description: "Build fast, responsive websites and web applications using modern tooling.",
    skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design"],
    duration: "3-6 months",
    stipend: "₹8,000-15,000/month",
  },
  {
    id: "backend",
    title: "Backend Intern",
    icon: Database,
    description: "Design scalable server-side APIs and manage relational databases.",
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    duration: "3-6 months",
    stipend: "₹10,000-15,000/month",
  },
  {
    id: "frontend",
    title: "Frontend Intern",
    icon: Laptop,
    description: "Implement clean user interfaces for web platforms and dashboards.",
    skills: ["React", "TypeScript", "Tailwind CSS", "UI Polish"],
    duration: "3-6 months",
    stipend: "₹8,000-15,000/month",
  },
  {
    id: "uiux",
    title: "UI/UX Design Intern",
    icon: PenTool,
    description: "Create intuitive wireframes, visual design systems, and user flows.",
    skills: ["Figma", "User Research", "Prototyping", "Visual Design"],
    duration: "3-6 months",
    stipend: "₹8,000-15,000/month",
  },
  {
    id: "sales",
    title: "Sales Intern",
    icon: TrendingUp,
    description: "Help convert qualified leads and nurture long-term client relationships.",
    skills: ["Communication", "Negotiation", "CRM Tools", "Market Research"],
    duration: "3-6 months",
    stipend: "₹10,000-20,000/month + incentives",
  },
  {
    id: "lead",
    title: "Lead Generation Intern",
    icon: Users,
    description: "Research target accounts and support outbound growth strategies.",
    skills: ["Research", "Outreach", "Social Media", "Analytics"],
    duration: "3-6 months",
    stipend: "₹8,000-15,000/month + incentives",
  },
];

export function InternshipClient() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    portfolio: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId === selectedRole ? null : roleId);
    if (roleId !== selectedRole) {
      window.setTimeout(() => {
        document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) {
      toast.error("Please select an internship role");
      return;
    }
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsSubmitting(true);
    const roleName = internshipRoles.find((r) => r.id === selectedRole)?.title || selectedRole;
    const message = encodeURIComponent(
      `*New Internship Application*\n*Role:* ${roleName}\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Education:* ${formData.education}\n*Portfolio:* ${formData.portfolio}\n*Experience:* ${formData.experience}\n*Message:* ${formData.message}`,
    );
    window.open(`${SITE_CONFIG.whatsappUrl}?text=${message}`, "_blank");
    toast.success("Application prepared in WhatsApp!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      education: "",
      portfolio: "",
      experience: "",
      message: "",
    });
    setSelectedRole(null);
    setIsSubmitting(false);
  };

  return (
    <main className="flex-grow pt-24">
      <section className="dv-dot-bg py-16 sm:py-24">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
            Internships
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#141210] mb-5">
            Launch Your Career with <span className="text-[#FF5422]">dieVekter</span>
          </h1>
          <p className="text-base sm:text-lg text-stone-600 mb-8">
            Work directly on production AI agents, software platforms, and client projects with
            mentorship from our core team.
          </p>
          <Button
            onClick={() => document.getElementById("roles")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white px-7"
            size="lg"
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            Explore Internships
          </Button>
        </div>
      </section>

      <section id="roles" className="border-t border-stone-100 bg-[#FFF8F5] py-16">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#141210] mb-12">
            Available <span className="text-[#FF5422]">Internship Roles</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {internshipRoles.map((role) => {
              const selected = selectedRole === role.id;
              return (
                <div
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  className={`rounded-2xl border p-6 transition-all cursor-pointer flex flex-col justify-between ${
                    selected
                      ? "border-[#FF5422] bg-[#FFF4F0] shadow-md"
                      : "border-[#FBE0D4] bg-white hover:border-[#FF5422]/60"
                  }`}
                >
                  <div>
                    <div className="flex items-start gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#FF5422] text-white flex items-center justify-center shrink-0">
                        <role.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#141210]">{role.title}</h3>
                        <p className="text-xs text-stone-500">
                          {role.duration} · {role.stipend}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-stone-600 mb-4">{role.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant={selected ? "default" : "outline"}
                    size="sm"
                    className={`w-full rounded-full ${
                      selected
                        ? "bg-[#FF5422] text-white hover:bg-[#e8460e]"
                        : "border-stone-200 hover:border-[#FF5422] hover:text-[#FF5422]"
                    }`}
                  >
                    {selected ? "Selected" : "Apply Now"}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="application-form" className="dv-dot-bg py-16">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#141210] mb-3">
              Apply for an <span className="text-[#FF5422]">Internship</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Select a role above and fill out the application details below.
            </p>
          </div>

          <div className="bg-white border border-[#FBE0D4] rounded-2xl shadow-sm p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {selectedRole ? (
                <div className="p-3.5 bg-[#FFF4F0] border border-[#FBE0D4] rounded-xl flex items-center gap-3">
                  <CheckCircle className="text-[#FF5422]" size={20} />
                  <p className="text-sm font-medium text-[#141210]">
                    Applying for:{" "}
                    <span className="font-bold text-[#FF5422]">
                      {internshipRoles.find((r) => r.id === selectedRole)?.title}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-center text-stone-600">
                  Please select a role above to continue
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name <span className="text-[#FF5422]">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-[#FF5422]">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number <span className="text-[#FF5422]">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="education" className="text-sm font-medium">
                    Education
                  </label>
                  <Input
                    id="education"
                    name="education"
                    placeholder="B.Tech in Computer Science"
                    value={formData.education}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label htmlFor="portfolio" className="text-sm font-medium">
                    Portfolio / GitHub URL
                  </label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    placeholder="https://github.com/yourusername"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label htmlFor="experience" className="text-sm font-medium">
                    Relevant Experience
                  </label>
                  <Textarea
                    id="experience"
                    name="experience"
                    placeholder="Briefly describe your projects or experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="min-h-[90px]"
                  />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Why do you want to join dieVekter?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your interests and goals"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="min-h-[90px]"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  type="submit"
                  className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white flex-1"
                  size="lg"
                  disabled={isSubmitting || !selectedRole}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="rounded-full border-stone-200"
                  onClick={() => {
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      education: "",
                      portfolio: "",
                      experience: "",
                      message: "",
                    });
                    setSelectedRole(null);
                  }}
                >
                  Reset
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-100 bg-[#FFF8F5] py-16">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#141210] mb-12">
            Why <span className="text-[#FF5422]">Join Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, title: "Real-World Projects", desc: "Work on live client platforms and build a strong engineering portfolio." },
              { icon: GraduationCap, title: "Mentorship", desc: "Learn directly from experienced engineers throughout your internship." },
              { icon: Download, title: "Skill Development", desc: "Gain hands-on experience with AI agents, TypeScript, and automation." },
              { icon: TrendingUp, title: "Career Growth", desc: "Full-time opportunities based on performance and team fit." },
              { icon: Users, title: "Collaborative Culture", desc: "Work closely with product designers and developers." },
              { icon: CheckCircle, title: "Completion Certificate", desc: "Receive a verified certificate and recommendation letter." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-[#FBE0D4] bg-white p-6 shadow-sm">
                <b.icon className="h-7 w-7 text-[#FF5422] mb-3" />
                <h3 className="text-lg font-bold text-[#141210] mb-1.5">{b.title}</h3>
                <p className="text-sm text-stone-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
