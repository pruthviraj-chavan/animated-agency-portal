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
    id: 3,
    title: "Incite Computers (Radhanagri)",
    description: "A professional website for a leading IT solutions provider, built with a responsive and user-friendly design.",
    url: "https://www.incitecomputer.com"
  },
  {
    id: 4,
    title: "Numerologist Shivaani Kalle",
    description: "An elegant portfolio website for a renowned numerologist, showcasing services and testimonials.",
    url: "https://shivannikalle.vercel.app/"
  },
  {
    id: 5,
    title: "Kolhapur Bachat Gat",
    description: "A dynamic website designed to support and promote self-help groups in Kolhapur.",
    url: "https://kolhapurbachatgat.com/"
  },
  {
    id: 6,
    title: "Kolhapur Incubation Centre",
    description: "A platform designed to foster innovation and entrepreneurship, providing resources for startups and businesses.",
    url: "https://kolhapurincubation.com/"
  },
  {
    id: 7,
    title: "Linda Cars",
    description: "Website made for a car dealership through MarketMedia.",
    url: "https://lindacars.com/"
  },
  {
    id: 8,
    title: "Heal's Way",
    description: "Website made for a luxury furniture brand through MarketMedia.",
    url: "https://healsway.in/"
  },
  {
    id: 9,
    title: "Kaksha Live",
    description: "Website made for an educational platform through MarketMedia.",
    url: "https://kaksha.live/"
  },
  {
    id: 10,
    title: "Rotorooter",
    description: "Website made for a plumber association through MarketMedia.",
    url: "https://rotorooter.com/"
  },
  {
    id: 11,
    title: "Shraddha Institution",
    description: "Website made for an institution through MarketMedia.",
    url: "https://shraddhainstitution.com/"
  },
  {
    id: 12,
    title: "Maguire Shoes",
    description: "Website made for an e-commerce store through MarketMedia.",
    url: "https://maguireshoes.com/"
  },
  {
    id: 13,
    title: "Brand Alley",
    description: "Website made for an online clothing store through MarketMedia.",
    url: "https://brandalley.com/"
  },
  {
    id: 14,
    title: "Open House Cafe",
    description: "Website made for a cafe through MarketMedia.",
    url: "https://openhousecafe.in/"
  },
  {
    id: 15,
    title: "Cardtonic",
    description: "Website made for an online banking firm through MarketMedia.",
    url: "https://cardtonic.com/"
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
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
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
      transition: "all 0.7s ease-out"
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
          <div className="grid grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "relative p-6 rounded-lg bg-background/80 backdrop-blur-md border border-primary/20 shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-fade-in",
                  index === activeIndex && "scale-105 shadow-xl"
                )}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
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
            ))}
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
