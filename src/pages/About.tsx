
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Cpu, Monitor, Zap, Award, Users, Globe, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const About = () => {
  const teamMembers = [
    {
      name: "Pruthviraj Chavan",
      role: "Founder & CEO",
      bio: "Computer Science Engineer from DYP Salokhenagar. Experience in software engineering at Infomatics & Intellipaat.",
      skills: ["Django", "Python", "SQL", "HTML", "CSS", "JavaScript", "React"],
      background: "Computer Science Engineer from DYP Salokhenagar."
    }
  ];

  const milestones = [
    {
      year: "January 2024",
      title: "Company Founded",
      description: "Started as a small team of passionate designers and developers in a tiny office.",
      icon: Code
    },
    {
      year: "March 2024",
      title: "First Major Client",
      description: "Partnered with a Fortune 500 company to redesign their digital presence and saw 300% increase in conversions.",
      icon: Monitor
    },
    {
      year: "June 2024",
      title: "Team Expansion",
      description: "Grew to a team of 15 specialists across design, development, and marketing, moved to a larger office.",
      icon: Users
    },
    {
      year: "August 2024",
      title: "Technology Innovation",
      description: "Developed proprietary framework for rapid development of high-performance web applications.",
      icon: Zap
    },
    {
      year: "October 2024",
      title: "Remote Work Transition",
      description: "Successfully transitioned to fully remote operations while maintaining productivity and client satisfaction.",
      icon: Globe
    },
    {
      year: "December 2024",
      title: "International Recognition",
      description: "Won multiple industry awards for innovative digital solutions and design excellence.",
      icon: Award
    },
    {
      year: "February 2025",
      title: "AI/ML Integration",
      description: "Began offering AI-powered solutions for clients, resulting in 200% growth in this service area.",
      icon: Cpu
    },
    {
      year: "April 2025",
      title: "New Office Opening",
      description: "Expanded operations with a new headquarters in the heart of the city and satellite offices in two countries.",
      icon: Database
    }
  ];

  // Values section with animation
  const values = [
    { title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
    { title: "Excellence", description: "Delivering high-quality work that exceeds expectations" },
    { title: "Collaboration", description: "Working closely with clients as true partners" },
    { title: "Integrity", description: "Honest communication and transparent practices" },
    { title: "Adaptability", description: "Evolving with changing technologies and needs" },
    { title: "Impact", description: "Creating meaningful results that drive business growth" }
  ];

  // Matrix code effect for the background
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const fontSize = 12;
    const columns = canvas.width / fontSize;

    // Array to store the y position of each character
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      // Semi-transparent black background to show trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the color and font of the text
      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      // Loop through each drop
      for (let i = 0; i < drops.length; i++) {
        // Pick a random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));

        // Draw the character
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%, 0.3)`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset when it reaches the bottom and randomize the speed
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment y coordinate
        drops[i]++;
      }
    };

    const animation = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(animation);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0"
      />
      
      <Header />
      <main className="flex-grow pt-24 relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 bg-muted/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-agency-purple/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-agency-pink/10 animate-float"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-scale-in glitch">
                About Dievektor
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                We're a team of passionate designers, developers, and digital marketers dedicated to creating exceptional digital experiences.
              </p>
              
              <div className="terminal mb-8">
                <span className="terminal-text">Parsing company_data.json...</span>
              </div>
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
                  Founded in 2024, Dievektor was born from a vision to bridge the gap between technology and creativity. We believed that exceptional digital experiences could transform businesses and connect them with their audiences in meaningful ways.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a small team of passionate innovators has grown into a full-service digital agency with a reputation for excellence. Our journey has been defined by our commitment to quality, innovation, and client success.
                </p>
                <p className="text-muted-foreground mb-6">
                  Over the years, we've worked with startups, mid-sized businesses, and Fortune 500 companies across various industries including finance, healthcare, education, retail, and technology. Our diverse experience allows us to bring unique perspectives to every project.
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
                      'from-agency-blue to-agency-purple'} hover-scale relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 p-3 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-xs font-mono text-white/90 text-center">
                        {item === 1 && "// Building innovative websites since 2024"}
                        {item === 2 && "// 200+ successful projects delivered"}
                        {item === 3 && "// 50+ expert team members worldwide"}
                        {item === 4 && "// 98% client satisfaction rate"}
                      </div>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient animate-scale-in">
              Our Core Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-background/40 backdrop-blur-sm rounded-lg p-6 border border-border/30 hover-scale animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="code-line py-2">
                    <div className="text-xs font-mono mb-4">
                      <span className="text-agency-purple">function</span> <span className="text-agency-blue">practice{value.title}</span><span className="text-white">() {`{`}</span>
                      <div className="pl-4 text-muted-foreground">
                        <p><span className="text-agency-blue">return</span> <span className="text-agency-pink">"{value.description}"</span>;</p>
                      </div>
                      <span className="text-white">{`}`}</span>
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient animate-scale-in">
              Our Journey
            </h2>
            
            <div className="relative max-w-4xl mx-auto pl-8 border-l border-primary/30">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className="mb-12 relative animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full border-4 border-background bg-primary flex items-center justify-center">
                    <milestone.icon className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <div className="absolute -left-3 mt-2 w-6 h-6 bg-primary rounded-full opacity-20 animate-pulse-slow"></div>
                  
                  <div className="pl-4">
                    <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                    <div className="mt-2 border-t border-border/20 pt-2">
                      <div className="text-xs font-mono text-muted-foreground code-line">
                        <span className="text-agency-purple">git</span> commit -m <span className="text-agency-pink">"feat: {milestone.title.toLowerCase()}"</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { number: "200+", label: "Projects Completed", icon: BarChart },
                { number: "50+", label: "Team Members", icon: Users },
                { number: "15+", label: "Industry Awards", icon: Award },
                { number: "35+", label: "Countries Served", icon: Globe }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-background/40 backdrop-blur-sm rounded-lg p-6 animate-slide-in-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-6 w-6 text-primary animate-pulse-slow" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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
            
            <div className="flex justify-center">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name}
                  className="bg-muted/30 backdrop-blur-sm rounded-lg p-6 text-center hover-scale animate-slide-in-bottom perspective-card max-w-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flip-card-inner relative">
                    <div className="flip-card-front">
                      <div className="w-24 h-24 bg-gradient-to-br from-agency-purple to-agency-pink rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                        PC
                      </div>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary text-sm mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                      
                      <button className="mt-4 text-xs text-primary hover:text-primary-foreground transition-colors">
                        View More
                      </button>
                    </div>
                    <div className="flip-card-back absolute inset-0 bg-muted rounded-lg p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-primary mb-1">Skills:</h4>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.skills.map(skill => (
                            <span key={skill} className="text-xs bg-primary/20 text-primary-foreground px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-1">Background:</h4>
                        <p className="text-xs text-muted-foreground">{member.background}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-agency-purple/20 via-agency-blue/20 to-agency-pink/20 backdrop-blur-sm rounded-xl p-12 text-center max-w-4xl mx-auto animate-fade-in border border-primary/20">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Start Your Digital Journey?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help transform your digital presence and achieve your business goals.
              </p>
              <Button asChild size="lg" className="bg-gradient hover:opacity-90 button-pop animate-pulse-slow">
                <Link to="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <div className="mt-6 text-xs font-mono text-muted-foreground">
                <span className="text-agency-purple">new</span> <span className="text-agency-blue">Project</span>(<span className="text-agency-pink">yourIdea</span>).<span className="text-agency-blue">start</span>();
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
