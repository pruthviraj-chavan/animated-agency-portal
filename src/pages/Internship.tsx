
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { 
  Code, 
  Brain, 
  Globe, 
  Database, 
  Laptop, 
  PenTool, 
  TrendingUp, 
  Users,
  GraduationCap,
  BriefCase,
  CheckCircle,
  Download
} from "lucide-react";

type InternshipRole = {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
  duration: string;
  stipend: string;
};

const Internship = () => {
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

  const internshipRoles: InternshipRole[] = [
    {
      id: "python",
      title: "Python Intern",
      icon: Code,
      description: "Join our team to develop Python applications and data solutions for our clients.",
      skills: ["Python", "Data Structures", "APIs", "Flask/Django"],
      duration: "3-6 months",
      stipend: "₹8,000-15,000/month",
    },
    {
      id: "ai",
      title: "AI Intern",
      icon: Brain,
      description: "Work on cutting-edge AI projects and implement machine learning models.",
      skills: ["Python", "TensorFlow/PyTorch", "Data Analysis", "NLP"],
      duration: "4-6 months",
      stipend: "₹10,000-18,000/month",
    },
    {
      id: "web",
      title: "Web Developer Intern",
      icon: Globe,
      description: "Create modern, responsive websites and web applications for various industries.",
      skills: ["HTML/CSS", "JavaScript", "React/Vue", "Responsive Design"],
      duration: "3-6 months",
      stipend: "₹8,000-15,000/month",
    },
    {
      id: "backend",
      title: "Backend Intern",
      icon: Database,
      description: "Build robust server-side architecture and maintain database systems.",
      skills: ["Node.js", "Express", "MongoDB/SQL", "API Development"],
      duration: "3-6 months",
      stipend: "₹10,000-15,000/month",
    },
    {
      id: "frontend",
      title: "Frontend Intern",
      icon: Laptop,
      description: "Design and implement user-facing features for web and mobile applications.",
      skills: ["React", "JavaScript/TypeScript", "CSS/Tailwind", "State Management"],
      duration: "3-6 months",
      stipend: "₹8,000-15,000/month",
    },
    {
      id: "uiux",
      title: "UI/UX Design Intern",
      icon: PenTool,
      description: "Create beautiful, intuitive interfaces and enhance user experiences.",
      skills: ["Figma", "User Research", "Prototyping", "Visual Design"],
      duration: "3-6 months",
      stipend: "₹8,000-15,000/month",
    },
    {
      id: "sales",
      title: "Sales Intern",
      icon: TrendingUp,
      description: "Help our team convert leads and build client relationships.",
      skills: ["Communication", "Negotiation", "CRM Tools", "Market Research"],
      duration: "3-6 months",
      stipend: "₹10,000-20,000/month + incentives",
    },
    {
      id: "lead",
      title: "Lead Generation Intern",
      icon: Users,
      description: "Identify potential clients and develop strategies to attract new business.",
      skills: ["Research", "Outreach", "Social Media", "Analytics"],
      duration: "3-6 months",
      stipend: "₹8,000-15,000/month + incentives",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId === selectedRole ? null : roleId);
    // Scroll to form when a role is selected
    if (roleId !== selectedRole) {
      setTimeout(() => {
        document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
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

    // Get selected role title
    const roleName = internshipRoles.find(role => role.id === selectedRole)?.title || selectedRole;
    
    // Format the WhatsApp message with form data
    const message = encodeURIComponent(`
*New Internship Application*

*Role:* ${roleName}
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Education:* ${formData.education}
*Portfolio:* ${formData.portfolio}
*Experience:* ${formData.experience}
*Message:* ${formData.message}
    `);

    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/919404895667?text=${message}`, "_blank");
    
    // Show success message
    toast.success("Application submitted successfully!");
    
    // Reset form
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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-ai-grid opacity-30 z-0"></div>
          
          {/* Neural network animation */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full opacity-10" viewBox="0 0 800 600">
              <g className="neural-connection">
                {[...Array(20)].map((_, i) => (
                  <line 
                    key={`line-${i}`} 
                    x1={Math.random() * 800} 
                    y1={Math.random() * 600} 
                    x2={Math.random() * 800} 
                    y2={Math.random() * 600} 
                    stroke="rgba(155, 135, 245, 0.5)" 
                    strokeWidth="1"
                  />
                ))}
              </g>
              <g className="neural-pulse">
                {[...Array(30)].map((_, i) => (
                  <circle
                    key={`circle-${i}`}
                    cx={Math.random() * 800}
                    cy={Math.random() * 600}
                    r="3"
                    fill="rgba(51, 195, 240, 0.6)"
                    style={{ animationDelay: `${Math.random() * 2}s` }}
                  />
                ))}
              </g>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
                <span className="text-gradient">Launch Your Career</span> with dieVektor
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Join our team as an intern and work on cutting-edge projects in a collaborative environment.
                Gain valuable skills, mentorship, and real-world experience.
              </p>
              <div className="flex justify-center animate-fade-in" style={{ animationDelay: "400ms" }}>
                <Button 
                  onClick={() => document.getElementById("roles")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient hover:opacity-90 button-pop flex items-center gap-2"
                  size="lg"
                >
                  <GraduationCap size={20} />
                  Explore Internships
                </Button>
              </div>
            </div>
            
            {/* Animated code section */}
            <div className="max-w-lg mx-auto rounded-lg p-4 bg-background/80 border border-border backdrop-blur-sm code-highlight overflow-hidden">
              <pre className="text-xs md:text-sm font-mono overflow-x-auto animate-typing">
                <code>
{`// dieVektor Internship Program
const joinInternship = async (you) => {
  const skills = await you.learn(["realWorldSkills", "teamwork"]);
  const experience = await dieVektor.provide(["mentorship", "projects"]);
  
  return {
    career: "launched",
    future: "bright",
    opportunities: "unlimited"
  };
};

// Are you ready to begin?
joinInternship(you);`}
                </code>
              </pre>
            </div>
          </div>
        </section>
        
        {/* Internship Roles Section */}
        <section id="roles" className="py-16 bg-background relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Available <span className="text-gradient">Internship Roles</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {internshipRoles.map((role, index) => (
                <div 
                  key={role.id}
                  className={`
                    rounded-lg border border-border p-6 transition-all duration-300
                    hover-scale cursor-pointer
                    ${selectedRole === role.id ? 'ring-2 ring-primary bg-secondary/20' : 'bg-card/30 hover:bg-card/60'}
                  `}
                  onClick={() => handleRoleSelect(role.id)}
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-aos="fade-up"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 mr-4 rounded-full bg-gradient flex items-center justify-center text-white flex-shrink-0 pulse-glow">
                      <role.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                      <p className="text-sm text-muted-foreground">{role.duration} • {role.stipend}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">{role.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    variant={selectedRole === role.id ? "default" : "outline"}
                    size="sm"
                    className="w-full button-pop"
                  >
                    {selectedRole === role.id ? 'Selected' : 'Apply Now'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Application Form Section */}
        <section id="application-form" className="py-16 bg-secondary/5 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-agency-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-agency-blue/10 rounded-full blur-3xl"></div>
            
            {/* Code raining effect (Matrix style) */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={`code-rain-${i}`}
                  className="absolute text-xs font-mono text-primary matrix-rain"
                  style={{
                    left: `${i * 10}%`,
                    top: 0,
                    '--offset': i * 0.2,
                    '--delay': i * 0.5
                  } as React.CSSProperties}
                >
                  {[...Array(20)].map((_, j) => (
                    <div key={j} style={{ marginTop: `${Math.random() * 10}px` }}>
                      {Math.random() > 0.5 ? '1' : '0'}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                  Apply for an <span className="text-gradient">Internship</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
                  Fill out the form below to apply for your selected internship role. 
                  All applications will be reviewed by our team.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg shadow-lg backdrop-blur-sm p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {selectedRole ? (
                    <div className="p-3 bg-secondary/20 rounded-md flex items-center gap-3 animate-scale-in">
                      <CheckCircle className="text-primary" size={20} />
                      <p className="text-sm font-medium">
                        Applying for: <span className="text-primary">
                          {internshipRoles.find(role => role.id === selectedRole)?.title}
                        </span>
                      </p>
                    </div>
                  ) : (
                    <div className="p-3 bg-secondary/20 rounded-md text-sm text-center">
                      Please select a role from above to continue
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="hover-scale"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="hover-scale"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="hover-scale"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="education" className="text-sm font-medium">
                        Education
                      </label>
                      <Input
                        id="education"
                        name="education"
                        placeholder="B.Tech in Computer Science"
                        value={formData.education}
                        onChange={handleInputChange}
                        className="hover-scale"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="portfolio" className="text-sm font-medium">
                        Portfolio/GitHub URL
                      </label>
                      <Input
                        id="portfolio"
                        name="portfolio"
                        placeholder="https://github.com/yourusername"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="hover-scale"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="experience" className="text-sm font-medium">
                        Relevant Experience
                      </label>
                      <Textarea
                        id="experience"
                        name="experience"
                        placeholder="Briefly describe your relevant experience or projects"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="hover-scale min-h-[100px]"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Why do you want to join dieVektor?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us why you're interested in this role and what you hope to achieve"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="hover-scale min-h-[100px]"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      className="bg-gradient hover:opacity-90 button-pop flex-1"
                      size="lg"
                      disabled={isSubmitting || !selectedRole}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="button-pop"
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
                      Reset Form
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
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
              {[
                {
                  icon: <BriefCase className="h-8 w-8 text-agency-purple" />,
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
              ].map((benefit, index) => (
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
        
        {/* WhatsApp CTA Section */}
        <section className="py-12 bg-gradient text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Have questions about our internship program?</h2>
                <p className="text-primary-foreground/90">Reach out to us directly via WhatsApp for quick responses!</p>
              </div>
              <Button 
                onClick={() => window.open("https://wa.me/919404895667", "_blank")}
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/20 button-pop"
              >
                Contact via WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Internship;
