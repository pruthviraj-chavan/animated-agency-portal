
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Emprise Study Abroad",
    description: "A sleek and informative website designed to help students explore global education opportunities with ease.",
    url: "#"
  },
  {
    id: 2,
    title: "LanguageBerg",
    description: "A language learning platform with an intuitive UI to enhance the digital learning experience.",
    url: "#"
  },
  {
    id: 3,
    title: "Incite Computers (Radhanagri)",
    description: "A professional website for a leading IT solutions provider, built with a responsive and user-friendly design.",
    url: "#"
  },
  {
    id: 4,
    title: "Numerologist Shivaani Kalle",
    description: "An elegant portfolio website for a renowned numerologist, showcasing services and testimonials.",
    url: "#"
  },
  {
    id: 5,
    title: "Kolhapur Bachat Gat",
    description: "A dynamic website designed to support and promote self-help groups in Kolhapur.",
    url: "#"
  },
  {
    id: 6,
    title: "Kolhapur Incubation Centre",
    description: "A platform designed to foster innovation and entrepreneurship, providing resources for startups and businesses.",
    url: "#"
  }
];

export function LatestProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't animate on mobile
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  // Calculate positions in a circle
  const getProjectStyle = (index: number) => {
    if (isMobile) {
      return {};
    }
    
    const totalProjects = projects.length;
    const angleStep = (2 * Math.PI) / totalProjects;
    const angle = angleStep * index - Math.PI / 2; // Start from top
    
    const radius = 180; // Circle radius
    const centerX = 0;
    const centerY = 0;
    
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    const isActive = index === activeIndex;
    
    return {
      transform: `translate(${x}px, ${y}px) scale(${isActive ? 1.1 : 0.9})`,
      zIndex: isActive ? 10 : 1,
      opacity: isActive ? 1 : 0.7,
      transition: 'all 0.7s ease-out'
    };
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-agency-purple/5 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient animate-scale-in">
          Our Latest Projects
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in">
          We take pride in delivering high-quality digital solutions that empower businesses and individuals. 
          Here are some of our latest projects:
        </p>

        {!isMobile ? (
          <div className="relative h-[500px] mx-auto max-w-4xl mb-16" ref={containerRef}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={cn(
                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    "w-64 p-4 rounded-lg bg-background/80 backdrop-blur-md border border-primary/20 shadow-lg",
                    "hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
                  )}
                  style={getProjectStyle(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="h-full flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-gradient">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
                    <div className="flex justify-end">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-primary hover:text-primary-foreground"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Center ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-primary/20 animate-spin-slow"></div>
            
            {/* Inner dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary animate-pulse-slow"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-lg bg-background/80 backdrop-blur-md border border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
              >
                <h3 className="text-xl font-bold mb-2 text-gradient">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex justify-end">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-primary-foreground"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient hover:opacity-90 button-pop">
            <Link to="/contact" className="flex items-center">
              <span>Got a project in mind? Let's build something amazing together!</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
