
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "10+ years of experience in digital marketing and web development."
    },
    {
      name: "Samantha Lee",
      role: "Creative Director",
      bio: "Award-winning designer with a passion for creating memorable brand experiences."
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in React and Node.js applications."
    },
    {
      name: "Emma Williams",
      role: "Marketing Strategist",
      bio: "Digital marketing expert with a focus on SEO and content strategy."
    }
  ];

  const milestones = [
    {
      year: 2018,
      title: "Company Founded",
      description: "Started as a small team of passionate designers and developers."
    },
    {
      year: 2019,
      title: "First Major Client",
      description: "Partnered with a Fortune 500 company to redesign their digital presence."
    },
    {
      year: 2020,
      title: "Team Expansion",
      description: "Grew to a team of 15 specialists across design, development, and marketing."
    },
    {
      year: 2022,
      title: "International Recognition",
      description: "Won multiple industry awards for our innovative digital solutions."
    },
    {
      year: 2023,
      title: "New Office Opening",
      description: "Expanded operations with a new headquarters in the heart of the city."
    }
  ];

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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in">
                About Our Agency
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                We're a team of passionate designers, developers, and digital marketers dedicated to creating exceptional digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-bottom" style={{ animationDelay: "100ms" }}>
                <h2 className="text-3xl font-bold mb-6 text-gradient">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2018, Digital Agency was born from a vision to bridge the gap between technology and creativity. We believed that exceptional digital experiences could transform businesses and connect them with their audiences in meaningful ways.
                </p>
                <p className="text-muted-foreground mb-6">
                  What started as a small team of passionate innovators has grown into a full-service digital agency with a reputation for excellence. Our journey has been defined by our commitment to quality, innovation, and client success.
                </p>
                <Button asChild className="bg-gradient hover:opacity-90 button-pop">
                  <Link to="/contact">
                    Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
                {[1, 2, 3, 4].map((item) => (
                  <div 
                    key={item} 
                    className={`aspect-square rounded-lg bg-gradient-to-br flex items-center justify-center text-white font-bold text-2xl
                    ${item === 1 ? 'from-agency-purple to-agency-blue' : 
                      item === 2 ? 'from-agency-blue to-agency-pink' : 
                      item === 3 ? 'from-agency-pink to-agency-purple' : 
                      'from-agency-blue to-agency-purple'} hover-scale`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient animate-scale-in">
              Our Journey
            </h2>
            
            <div className="relative max-w-3xl mx-auto pl-8 border-l border-primary/30">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className="mb-12 relative animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full border-4 border-background bg-primary"></div>
                  <div className="absolute -left-3 mt-2 w-6 h-6 bg-primary rounded-full opacity-20 animate-pulse-slow"></div>
                  
                  <div className="pl-4">
                    <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient animate-scale-in">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-muted/30 rounded-lg p-6 text-center hover-scale animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-agency-purple to-agency-pink rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
