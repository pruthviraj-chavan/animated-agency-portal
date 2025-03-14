
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Brain, 
  Globe, 
  Database, 
  Laptop, 
  PenTool, 
  TrendingUp, 
  Users
} from "lucide-react";

export type InternshipRole = {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
  duration: string;
  stipend: string;
};

interface RolesSectionProps {
  selectedRole: string | null;
  onRoleSelect: (roleId: string) => void;
}

const RolesSection: React.FC<RolesSectionProps> = ({ selectedRole, onRoleSelect }) => {
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

  return (
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
              onClick={() => onRoleSelect(role.id)}
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
  );
};

export default RolesSection;
export { type InternshipRole };
