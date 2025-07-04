import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/ui/footer';
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
        <section className="relative py-20 bg-gradient-to-br from-orange-400 via-pink-400 to-red-500 overflow-hidden text-white">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-500/30 to-pink-500/30 animate-pulse blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-red-500/30 to-orange-500/30 animate-float blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-pink-400/20 to-red-400/20 animate-pulse blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-scale-in">
                    Master Agentic AI & Vibe Coding
                  </h1>
                  <h2 className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-in">
                    Learn to build intelligent agents, automate workflows, and unleash your creativity with AI-powered coding.
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-bottom">
                    <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all">
                      <Play className="mr-2 h-5 w-5" />
                      Enroll Now
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/40 hover:bg-white/10 hover:border-white/60 shadow-md hover:shadow-lg transition-all text-white">
                      Get Started
                    </Button>
                  </div>
                </div>

                {/* Vibrant Brain Animation */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div
                      className="w-80 h-80 relative"
                      style={{ transform: `rotateY(${brainRotation}deg) rotateX(${Math.sin(brainRotation * 0.01) * 10}deg)` }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/40 to-red-500/40 backdrop-blur-sm border border-orange-300 shadow-2xl shadow-orange-400">
                        <Brain className="w-32 h-32 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg" />
                      </div>
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-pink-400 animate-pulse"
                          style={{
                            top: `${50 + Math.sin(i * Math.PI / 4) * 35}%`,
                            left: `${50 + Math.cos(i * Math.PI / 4) * 35}%`,
                            animationDelay: `${i * 200}ms`
                          }}
                        >
                          <div className="absolute inset-0 rounded-full bg-pink-300/60 animate-ping"></div>
                        </div>
                      ))}
                      <svg className="absolute inset-0 w-full h-full opacity-30">
                        {[...Array(8)].map((_, i) => (
                          <line
                            key={i}
                            x1="50%"
                            y1="50%"
                            x2={`${50 + Math.cos(i * Math.PI / 4) * 35}%`}
                            y2={`${50 + Math.sin(i * Math.PI / 4) * 35}%`}
                            stroke="hsl(340, 90%, 60%)" // pinkish
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
        <section className="py-16 bg-gradient-to-b from-pink-100 to-red-100 dark:from-pink-950 dark:to-red-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Why Learn with Us?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Join thousands of developers who have transformed their careers with our expert-led training
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: "Hands-on Training", description: "Real-world AI tools and practical projects" },
                { icon: Users, title: "Expert Instructors", description: "Learn from experienced developers and AI experts" },
                { icon: MessageSquare, title: "Community Access", description: "Project-based learning with peer support" },
                { icon: Sparkles, title: "Beginner Friendly", description: "No prior AI experience needed to start" }
              ].map((item, index) => (
                <Card key={index} className="group hover:shadow-xl hover:shadow-orange-400/30 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-200 dark:from-orange-900 dark:to-pink-900 dark:border-orange-700 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-300 to-red-300 flex items-center justify-center group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What You Will Learn */}
        <section className="py-20 bg-gradient-to-b from-green-100 to-orange-100 dark:from-green-950 dark:to-orange-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-600">
                What You Will Learn
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Comprehensive curriculum designed to make you an AI automation expert
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Agentic AI Automation */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-orange-50 border border-green-200 hover:border-green-400 hover:shadow-2xl hover:shadow-green-400/30 transition-all duration-500 animate-fade-in">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200 to-orange-200 rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-orange-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                      Agentic AI Automation
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-400">
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
                        <CheckCircle className="mr-3 h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              {/* Vibe Coding */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-pink-50 to-orange-50 border border-pink-200 hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-400/30 transition-all duration-500 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-pink-600 transition-colors">
                      Vibe Coding
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-400">
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
                        <CheckCircle className="mr-3 h-4 w-4 text-pink-500 flex-shrink-0 mt-0.5" />
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
        <section className="py-16 bg-gradient-to-b from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Upcoming Batches & Schedule
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Choose the perfect batch that fits your schedule and learning goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {upcomingBatches.map((batch, index) => (
                <Card key={index} className="group hover:shadow-xl hover:shadow-orange-400/30 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 dark:from-orange-900 dark:to-red-900 dark:border-orange-700 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Calendar className="w-6 h-6 text-orange-600" />
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-orange-400 to-red-400 text-white">
                        {batch.mode}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                      {batch.name}
                    </CardTitle>
                    <CardDescription>
                      Duration: {batch.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Start Date:</span>
                        <span className="font-medium">{batch.date}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Price:</span>
                        <span className="font-bold text-lg text-orange-600">{batch.price}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-md hover:shadow-lg transition-all">
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
        <section className="py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-red-600 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-orange-400 to-red-400 animate-pulse blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 animate-float blur-3xl" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-pink-200">
              Ready to Build the Future with AI?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join the next generation of developers who are shaping the future with intelligent automation and AI-powered development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all">
                <Users className="mr-2 h-5 w-5" />
                Join the Waitlist
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 hover:bg-white/10 hover:border-white/60 shadow-md hover:shadow-lg transition-all text-white">
                <MessageSquare className="mr-2 h-5 w-5" />
                Talk to an Expert
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gradient-to-b from-pink-100 to-orange-100 dark:from-pink-950 dark:to-orange-950">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-600">
                  Get More Information
                </h2>
                <p className="text-muted-foreground">
                  Have questions? Want to know more about our training programs? Get in touch!
                </p>
              </div>
              <Card className="bg-gradient-to-br from-pink-50 to-orange-50 border border-pink-200 shadow-xl dark:from-pink-900 dark:to-orange-900 dark:border-pink-700">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your name" className="bg-white/70 border-pink-300 focus:border-pink-500" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" className="bg-white/70 border-pink-300 focus:border-pink-500" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="interest">Interest Level</Label>
                      <select id="interest" className="w-full p-2 border border-pink-300 rounded-md bg-white/70 focus:border-pink-500 focus:outline-none">
                        <option>Just browsing</option>
                        <option>Seriously considering</option>
                        <option>Ready to enroll</option>
                        <option>Need more information</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea id="message" placeholder="Tell us about your goals and questions..." className="bg-white/70 border-pink-300 focus:border-pink-500" />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all">
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
