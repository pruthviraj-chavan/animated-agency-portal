
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Maguire Shoes",
    description: "Website made for an e-commerce store through dieVektor.",
    technologies: ["React", "E-commerce", "Responsive Design"],
    category: "E-commerce",
    url: "https://maguireshoes.com/",
    completedDate: "2024-03",
    clientType: "E-commerce Store"
  },
  {
    id: 3,
    title: "Linda Cars",
    description: "Website made for a car dealership through dieVektor.",
    technologies: ["React", "Automotive", "Business Website"],
    category: "Automotive",
    url: "https://lindacars.com/",
    completedDate: "2024-01",
    clientType: "Car Dealership"
  },
  {
    id: 4,
    title: "Lagori Foundation Kolhapur",
    description: "An elegant portfolio website for a renowned NGO.",
    technologies: ["React", "NGO Website", "Portfolio"],
    category: "Non-Profit",
    url: "https://www.lagorifoundation.in/",
    completedDate: "2023-10",
    clientType: "NGO"
  },
  {
    id: 5,
    title: "Incite Computers (Radhanagri)",
    description: "A professional website for a leading IT solutions provider, built with a responsive and user-friendly design.",
    technologies: ["React", "IT Services", "Professional"],
    category: "Technology",
    url: "https://www.incitecomputer.com",
    completedDate: "2023-07",
    clientType: "IT Solutions Provider"
  },
  {
    id: 6,
    title: "Samarth Infotech",
    description: "Website made for an Computer Training Institute.",
    technologies: ["React", "Training Institute", "Educational"],
    category: "Education",
    url: "https://mscit.ssitindia.com/",
    completedDate: "2023-05",
    clientType: "Computer Training Institute"
  },
  {
    id: 8,
    title: "Phonda Education Society",
    description: "Website made for an College From Phonda.",
    technologies: ["React", "College", "Education"],
    category: "Colleges",
    url: "http://phondaeducationsociety.com/",
    completedDate: "2023-03",
    clientType: "College"
  },
  {
    id: 9,
    title: "Jaihind Electricals",
    description: "Professional website for a leading electrical equipment and appliances retailer with comprehensive product catalog.",
    technologies: ["React", "E-commerce", "Retail"],
    category: "Retail",
    url: "https://www.jaihindelectricals.co.in/",
    completedDate: "2024-06",
    clientType: "Electrical Store"
  },
  {
    id: 10,
    title: "Incite Computer Phondaghat",
    description: "Website for a computer training and IT services center providing quality education and technical solutions.",
    technologies: ["React", "Educational", "IT Services"],
    category: "Education",
    url: "http://incitecomputerphondaghat.co.in/",
    completedDate: "2024-05",
    clientType: "Computer Training Center"
  }
];

// Generate screenshot URL using a screenshot service
const getScreenshotUrl = (url: string) => {
  // Using microlink.io for website screenshots
  const encodedUrl = encodeURIComponent(url);
  return `https://api.microlink.io/?url=${encodedUrl}&screenshot=true&meta=false&embed=screenshot.url`;
};

const ProjectImage = ({ url, title }: { url: string; title: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Direct screenshot approach using screenshot API
  const screenshotUrl = `https://image.thum.io/get/width/600/crop/400/noanimate/${url}`;
  
  return (
    <div className="relative overflow-hidden rounded-t-lg h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      {!imageError ? (
        <>
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold animate-pulse">
                {title.charAt(0)}
              </div>
            </div>
          )}
          <img
            src={screenshotUrl}
            alt={`${title} website preview`}
            className={`w-full h-full object-cover object-top transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
              {title.charAt(0)}
            </div>
          </div>
        </div>
      )}
      <div className="absolute top-3 right-3">
        <Badge variant="secondary" className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
          {projects.find(p => p.title === title)?.category}
        </Badge>
      </div>
    </div>
  );
};

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
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/60 backdrop-blur-sm border-border/50 overflow-hidden">
                <ProjectImage url={project.url} title={project.title} />
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl">{project.title}</span>
                    <div className="flex gap-2">
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="ghost" className="p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
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
