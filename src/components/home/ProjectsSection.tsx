
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    description: "A complete overhaul of an online store with improved UX and conversion optimization.",
    category: "Web Design",
    image: "bg-gradient-to-br from-blue-400 to-purple-600",
  },
  {
    id: 2,
    title: "Finance Dashboard Application",
    description: "Interactive dashboard for financial data visualization and analysis.",
    category: "Web Application",
    image: "bg-gradient-to-br from-emerald-400 to-teal-600",
  },
  {
    id: 3,
    title: "Restaurant Booking System",
    description: "A user-friendly reservation system with real-time availability updates.",
    category: "Software Development",
    image: "bg-gradient-to-br from-amber-400 to-orange-600",
  },
  {
    id: 4,
    title: "Travel Guide Mobile App",
    description: "A feature-rich mobile application for travelers with offline functionality.",
    category: "Mobile Development",
    image: "bg-gradient-to-br from-pink-400 to-rose-600",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our latest work and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
          <Link 
            to="/portfolio" 
            className="mt-4 md:mt-0 group flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View All Projects 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group hover-scale rounded-lg overflow-hidden shadow-lg border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                "h-60 w-full flex items-center justify-center",
                project.image
              )}>
                <span className="text-white text-5xl font-bold opacity-20">P{project.id}</span>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Link 
                  to={`/portfolio/${project.id}`} 
                  className="text-primary hover:text-primary/80 inline-flex items-center transition-all group-hover:translate-x-1"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
