
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Briefcase, 
  MapPin, 
  Search, 
  Code, 
  Brain, 
  PenTool, 
  Layers, 
  Server, 
  Users, 
  TrendingUp, 
  Building2, 
  FileText, 
  HeartHandshake,
  ArrowRight,
  Phone,
  Mail,
  Robot
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// Job Data
const techJobs = [
  {
    id: 1,
    title: "Python Developer Intern",
    description: "Work with data-driven applications and machine learning pipelines.",
    location: "Remote",
    icon: Code,
    color: "from-agency-purple to-blue-500"
  },
  {
    id: 2,
    title: "AI Engineer Intern",
    description: "Assist in building AI models and automation solutions.",
    location: "Hybrid",
    icon: Brain,
    color: "from-agency-pink to-purple-600"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description: "Create user-friendly and engaging designs for web and mobile.",
    location: "On-site",
    icon: PenTool,
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 4,
    title: "Full Stack Developer",
    description: "Work on both frontend and backend using modern technologies.",
    location: "Remote",
    icon: Layers,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    description: "Manage cloud infrastructure and deployment pipelines.",
    location: "Hybrid",
    icon: Server,
    color: "from-emerald-500 to-teal-600"
  }
];

const salesJobs = [
  {
    id: 6,
    title: "Lead Generation Specialist",
    description: "Identify potential clients and analyze market trends.",
    location: "Remote",
    icon: Users,
    color: "from-blue-500 to-sky-600"
  },
  {
    id: 7,
    title: "Marketing Executive",
    description: "Plan and execute digital marketing strategies across channels.",
    location: "On-site",
    icon: TrendingUp,
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: 8,
    title: "Business Development Manager",
    description: "Drive partnerships and growth opportunities for expansion.",
    location: "Hybrid",
    icon: Building2,
    color: "from-red-500 to-rose-600"
  },
  {
    id: 9,
    title: "Content Marketing Specialist",
    description: "Create engaging blog posts, videos, and website content.",
    location: "Remote",
    icon: FileText,
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 10,
    title: "Customer Success Manager",
    description: "Ensure client satisfaction and build long-term relationships.",
    location: "Hybrid",
    icon: HeartHandshake,
    color: "from-yellow-500 to-amber-600"
  }
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredJobs = () => {
    let jobs = [...techJobs, ...salesJobs];
    
    // Apply category filter
    if (categoryFilter === "tech") {
      jobs = [...techJobs];
    } else if (categoryFilter === "sales") {
      jobs = [...salesJobs];
    }
    
    // Apply search filter
    if (searchTerm) {
      return jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return jobs;
  };

  const handleApply = (jobTitle: string) => {
    // Create WhatsApp message
    const whatsappNumber = "9404895667";
    const message = `I'm interested in applying for the ${jobTitle} position at dieVektor.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show toast
    toast.success("Redirecting you to WhatsApp to submit your application!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-muted/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-purple/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-pink/10 animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
                Jobs – Join Our Team
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Join our innovative team and be part of building the digital future. We're looking for passionate individuals who are excited about technology and ready to make an impact.
              </p>
              
              <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                <div className="relative w-full md:w-3/4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search for jobs..."
                    className="pl-10 w-full hover-scale"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant={categoryFilter === "all" ? "default" : "outline"} 
                    className="button-pop" 
                    onClick={() => setCategoryFilter("all")}
                  >
                    All Jobs
                  </Button>
                  <Button 
                    variant={categoryFilter === "tech" ? "default" : "outline"} 
                    className="button-pop" 
                    onClick={() => setCategoryFilter("tech")}
                  >
                    Tech
                  </Button>
                  <Button 
                    variant={categoryFilter === "sales" ? "default" : "outline"}
                    className="button-pop" 
                    onClick={() => setCategoryFilter("sales")}
                  >
                    Sales
                  </Button>
                </div>
              </div>
              
              <Button onClick={() => handleApply("General Application")} size="lg" className="bg-gradient hover:opacity-90 button-pop">
                <Phone className="mr-2 h-4 w-4" /> Apply Now
              </Button>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Floating Robot Animation */}
            <div className="absolute right-10 md:right-20 top-10 animate-float" style={{zIndex: 1}}>
              <div className="relative">
                <Robot className="h-32 w-32 md:h-40 md:w-40 text-agency-purple/60" />
                <div className="absolute inset-0 blur-xl bg-agency-purple/20 rounded-full"></div>
                {/* Orbiting elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute rounded-full bg-gradient w-3 h-3"
                      style={{
                        top: `${50 + 40 * Math.sin(i * Math.PI / 2.5)}%`,
                        left: `${50 + 40 * Math.cos(i * Math.PI / 2.5)}%`,
                        animation: `float ${3 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          
            {/* Technology Jobs */}
            {(categoryFilter === "all" || categoryFilter === "tech") && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gradient inline-block">Technology Jobs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techJobs
                    .filter(job => 
                      !searchTerm || 
                      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                      job.description.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((job) => (
                      <Card key={job.id} className="border border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                        <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${job.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white mr-4 bg-gradient-to-r", job.color)}>
                              <job.icon size={20} />
                            </div>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </Badge>
                          </div>
                          <CardTitle className="mt-4">{job.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-muted-foreground min-h-[60px]">
                            {job.description}
                          </CardDescription>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            onClick={() => handleApply(job.title)} 
                            variant="outline" 
                            className="w-full border-agency-purple/50 hover:bg-agency-purple/10 button-pop group"
                          >
                            Apply Now 
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))
                  }
                </div>
              </div>
            )}
            
            {/* Sales & Marketing Jobs */}
            {(categoryFilter === "all" || categoryFilter === "sales") && (
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gradient inline-block">Sales & Marketing Jobs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {salesJobs
                    .filter(job => 
                      !searchTerm || 
                      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                      job.description.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((job) => (
                      <Card key={job.id} className="border border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                        <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${job.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white mr-4 bg-gradient-to-r", job.color)}>
                              <job.icon size={20} />
                            </div>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </Badge>
                          </div>
                          <CardTitle className="mt-4">{job.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-muted-foreground min-h-[60px]">
                            {job.description}
                          </CardDescription>
                        </CardContent>
                        <CardFooter>
                          <Button 
                            onClick={() => handleApply(job.title)} 
                            variant="outline" 
                            className="w-full border-agency-blue/50 hover:bg-agency-blue/10 button-pop group"
                          >
                            Apply Now 
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))
                  }
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Application Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-agency-purple/5 animate-pulse-slow"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-agency-blue/5 animate-pulse-slow delay-300"></div>
              
              <div className="text-center max-w-3xl mx-auto relative z-10">
                <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
                <p className="text-muted-foreground mb-8">
                  If you don't see a position that matches your skills, but are still interested in joining our team, 
                  feel free to send us your application. We're always looking for talented individuals!
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button 
                    onClick={() => handleApply("General Application")} 
                    className="bg-gradient hover:opacity-90 button-pop flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call Us
                  </Button>
                  <Button 
                    variant="outline" 
                    className="button-pop flex items-center justify-center"
                    onClick={() => {
                      navigator.clipboard.writeText("info@digitalagency.com");
                      toast.success("Email copied to clipboard!");
                    }}
                  >
                    <Mail className="mr-2 h-4 w-4" /> info@digitalagency.com
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
