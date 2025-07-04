import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Brain, Bot, Zap, Users, Calendar, CheckCircle, 
  Code, Sparkles, ArrowRight, Play, MessageSquare,
  Network, Cpu, Database, GitBranch, Workflow
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const AgenticAITraining = () => {
  const [brainRotation, setBrainRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBrainRotation(prev => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const upcomingBatches = [
    {
      name: "Agentic AI Fundamentals",
      date: "March 15, 2025",
      duration: "4 weeks",
      mode: "Online",
      price: "$299"
    },
    {
      name: "Vibe Coding Masterclass",
      date: "March 22, 2025", 
      duration: "3 weeks",
      mode: "Hybrid",
      price: "$199"
    },
    {
      name: "Complete AI Automation Bundle",
      date: "April 1, 2025",
      duration: "8 weeks",
      mode: "Online",
      price: "$499"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Agentic AI Training - Master AI Automation & Vibe Coding - Dievektor</title>
        <meta name="description" content="Learn to build intelligent agents, automate workflows, and master AI-powered coding with our comprehensive Agentic AI and Vibe Coding training programs." />
        <meta name="keywords" content="Agentic AI, AI automation, Vibe Coding, AI training, LangChain, AutoGen, CrewAI" />
      </Helmet>

      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
          {/* Animated Background Effects */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 animate-float blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 animate-pulse blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-scale-in">
                    Master Agentic AI & Vibe Coding
                  </h1>
                  <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
                    Learn to build intelligent agents, automate workflows, and unleash your creativity with AI-powered coding.
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-bottom">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                      <Play className="mr-2 h-5 w-5" />
                      Enroll Now
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 shadow-md hover:shadow-lg transition-all">
                      Get Started
                    </Button>
                  </div>
                </div>

                {/* 3D Brain Animation */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div 
                      className="w-80 h-80 relative"
                      style={{ transform: `rotateY(${brainRotation}deg) rotateX(${Math.sin(brainRotation * 0.01) * 10}deg)` }}
                    >
                      {/* Main Brain */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/20">
                        <Brain className="w-32 h-32 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg" />
                      </div>
                      
                      {/* Neural Network Connections */}
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-accent animate-pulse"
                          style={{
                            top: `${50 + Math.sin(i * Math.PI / 4) * 35}%`,
                            left: `${50 + Math.cos(i * Math.PI / 4) * 35}%`,
                            animationDelay: `${i * 200}ms`
                          }}
                        >
                          <div className="absolute inset-0 rounded-full bg-accent/50 animate-ping"></div>
                        </div>
                      ))}
                      
                      {/* Connecting Lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-30">
                        {[...Array(8)].map((_, i) => (
                          <line
                            key={i}
                            x1="50%"
                            y1="50%"
                            x2={`${50 + Math.cos(i * Math.PI / 4) * 35}%`}
                            y2={`${50 + Math.sin(i * Math.PI / 4) * 35}%`}
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Learn with Us */}
        <section className="py-16 bg-background/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Why Learn with Us?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of developers who have transformed their careers with our expert-led training
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Hands-on Training",
                  description: "Real-world AI tools and practical projects"
                },
                {
                  icon: Users,
                  title: "Expert Instructors", 
                  description: "Learn from experienced developers and AI experts"
                },
                {
                  icon: MessageSquare,
                  title: "Community Access",
                  description: "Project-based learning with peer support"
                },
                {
                  icon: Sparkles,
                  title: "Beginner Friendly",
                  description: "No prior AI experience needed to start"
                }
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50 border border-primary/10 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What You Will Learn */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                What You Will Learn
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive curriculum designed to make you an AI automation expert
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Agentic AI Automation */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 animate-fade-in">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      Agentic AI Automation
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Master the art of building autonomous AI agents that can perform complex tasks independently.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Introduction to autonomous agents",
                      "LangChain, AutoGen, CrewAI overview", 
                      "Task automation using LLMs",
                      "Real-life automation projects",
                      "Agent communication & coordination",
                      "Deployment & monitoring strategies"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="mr-3 h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Vibe Coding */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                      Vibe Coding
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Learn creative and flexible coding approaches using AI tools for rapid development.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Coding with AI assistance (GitHub Copilot, ChatGPT)",
                      "Creative coding flows & methodologies",
                      "API integration and rapid prototyping",
                      "Project collaboration using AI tools",
                      "Code review & optimization with AI",
                      "Building AI-enhanced development workflows"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="mr-3 h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Batches */}
        <section className="py-16 bg-background/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Upcoming Batches & Schedule
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the perfect batch that fits your schedule and learning goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {upcomingBatches.map((batch, index) => (
                <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50 border border-primary/10 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Calendar className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                        {batch.mode}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {batch.name}
                    </CardTitle>
                    <CardDescription>
                      Duration: {batch.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Start Date:</span>
                        <span className="font-medium">{batch.date}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Price:</span>
                        <span className="font-bold text-lg text-primary">{batch.price}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all">
                        Reserve Seat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 animate-float blur-3xl" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Ready to Build the Future with AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the next generation of developers who are shaping the future with intelligent automation and AI-powered development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                <Users className="mr-2 h-5 w-5" />
                Join the Waitlist
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 shadow-md hover:shadow-lg transition-all">
                <MessageSquare className="mr-2 h-5 w-5" />
                Talk to an Expert
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
                  Get More Information
                </h2>
                <p className="text-muted-foreground">
                  Have questions? Want to know more about our training programs? Get in touch!
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-card to-card/50 border border-primary/10 shadow-xl">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your name" className="bg-background/50 border-primary/20 focus:border-primary/40" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" className="bg-background/50 border-primary/20 focus:border-primary/40" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="interest">Interest Level</Label>
                      <select id="interest" className="w-full p-2 border border-primary/20 rounded-md bg-background/50 focus:border-primary/40 focus:outline-none">
                        <option>Just browsing</option>
                        <option>Seriously considering</option>
                        <option>Ready to enroll</option>
                        <option>Need more information</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea id="message" placeholder="Tell us about your goals and questions..." className="bg-background/50 border-primary/20 focus:border-primary/40" />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AgenticAITraining;
