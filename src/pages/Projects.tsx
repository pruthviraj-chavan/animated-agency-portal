
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users } from "lucide-react";

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
    id: 2,
    title: "Fortune Technology",
    description: "Website made for an institution through dieVektor.",
    technologies: ["React", "Institutional Website", "Modern UI"],
    category: "Education",
    url: "https://fortunekolhapur.com/",
    completedDate: "2024-02",
    clientType: "Educational Institution"
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
    title: "Heal's Way",
    description: "Website made for a luxury furniture brand through dieVektor.",
    technologies: ["React", "E-commerce", "Luxury Brand"],
    category: "Furniture",
    url: "https://healsway.in/",
    completedDate: "2023-12",
    clientType: "Luxury Furniture Brand"
  },
  {
    id: 5,
    title: "Open House Cafe",
    description: "Website made for a cafe through dieVektor.",
    technologies: ["React", "Restaurant", "Modern Design"],
    category: "Food & Beverage",
    url: "https://openhousecafe.in/",
    completedDate: "2023-11",
    clientType: "Cafe"
  },
  {
    id: 6,
    title: "Lagori Foundation Kolhapur",
    description: "An elegant portfolio website for a renowned NGO.",
    technologies: ["React", "NGO Website", "Portfolio"],
    category: "Non-Profit",
    url: "https://www.lagorifoundation.in/",
    completedDate: "2023-10",
    clientType: "NGO"
  },
  {
    id: 7,
    title: "Kolhapur Incubation Centre",
    description: "A platform designed to foster innovation and entrepreneurship, providing resources for startups and businesses.",
    technologies: ["React", "Business Platform", "Startup Hub"],
    category: "Business",
    url: "https://kolhapurincubation.com/",
    completedDate: "2023-09",
    clientType: "Incubation Center"
  },
  {
    id: 8,
    title: "Kaksha Live",
    description: "Website made for an educational platform through dieVektor.",
    technologies: ["React", "Educational Platform", "Live Learning"],
    category: "Education",
    url: "https://kaksha.live/",
    completedDate: "2023-08",
    clientType: "Educational Platform"
  },
  {
    id: 9,
    title: "Incite Computers (Radhanagri)",
    description: "A professional website for a leading IT solutions provider, built with a responsive and user-friendly design.",
    technologies: ["React", "IT Services", "Professional"],
    category: "Technology",
    url: "https://www.incitecomputer.com",
    completedDate: "2023-07",
    clientType: "IT Solutions Provider"
  },
  {
    id: 10,
    title: "Rotorooter",
    description: "Website made for a plumber association through dieVektor.",
    technologies: ["React", "Service Provider", "Professional"],
    category: "Services",
    url: "https://rotorooter.com/",
    completedDate: "2023-06",
    clientType: "Plumber Association"
  },
  {
    id: 11,
    title: "Samarth Infotech",
    description: "Website made for an Computer Training Institute.",
    technologies: ["React", "Training Institute", "Educational"],
    category: "Education",
    url: "https://mscit.ssitindia.com/",
    completedDate: "2023-05",
    clientType: "Computer Training Institute"
  },
  {
    id: 12,
    title: "Cardtonic",
    description: "Website made for an online banking firm through dieVektor.",
    technologies: ["React", "FinTech", "Banking"],
    category: "Finance",
    url: "https://cardtonic.com/",
    completedDate: "2023-04",
    clientType: "Online Banking Firm"
  },
  {
    id: 13,
    title: "Solar Infotech",
    description: "Website made for an Solar Company.",
    technologies: ["React", "Solar Energy", "Green Tech"],
    category: "Energy",
    url: "http://sspowertech.in/",
    completedDate: "2023-03",
    clientType: "Solar Company"
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
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                      {project.title.charAt(0)}
                    </div>
                    <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
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
