
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { type InternshipRole } from "./RolesSection";

interface ApplicationFormProps {
  selectedRole: string | null;
  internshipRoles: InternshipRole[];
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ selectedRole, internshipRoles }) => {
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
    setIsSubmitting(false);
  };

  return (
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
  );
};

export default ApplicationForm;
