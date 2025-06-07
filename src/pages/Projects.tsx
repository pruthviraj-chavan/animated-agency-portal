
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Users, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and customer analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    category: "Web Development",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2024-03",
    clientType: "Retail Business"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Digital platform for managing patient records, appointments, and medical history with HIPAA compliance.",
    technologies: ["Next.js", "PostgreSQL", "TypeScript", "Docker", "Azure"],
    category: "Healthcare",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2024-02",
    clientType: "Medical Clinic"
  },
  {
    id: 3,
    title: "Real Estate Portal",
    description: "Modern real estate platform with advanced search, virtual tours, and agent management system.",
    technologies: ["React", "Django", "MySQL", "Redis", "Google Maps API"],
    category: "Real Estate",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2024-01",
    clientType: "Real Estate Agency"
  },
  {
    id: 4,
    title: "Educational LMS",
    description: "Learning management system with course creation, student tracking, and interactive assessments.",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "AWS S3"],
    category: "Education",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2023-12",
    clientType: "Educational Institute"
  },
  {
    id: 5,
    title: "Restaurant Management App",
    description: "Complete restaurant management solution with POS, inventory, staff scheduling, and analytics.",
    technologies: ["React Native", "Firebase", "Node.js", "Express", "Stripe"],
    category: "Mobile App",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2023-11",
    clientType: "Restaurant Chain"
  },
  {
    id: 6,
    title: "Social Media Analytics Dashboard",
    description: "AI-powered analytics dashboard for social media performance tracking and audience insights.",
    technologies: ["Angular", "Python", "TensorFlow", "PostgreSQL", "D3.js"],
    category: "Analytics",
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
    completedDate: "2023-10",
    clientType: "Marketing Agency"
  }
];

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful projects across various industries. 
              Each project showcases our commitment to delivering innovative, scalable solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/60 backdrop-blur-sm border-border/50">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl">{project.title}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="p-2">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.completedDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{project.clientType}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <Button size="lg" className="bg-gradient hover:opacity-90">
              Start Your Project
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
