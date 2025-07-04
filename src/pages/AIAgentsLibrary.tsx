
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Mail, Users, Share2, Calendar, Database, UserPlus, FileText, 
  MessageSquare, Search, BookOpen, FileSpreadsheet, BarChart3, 
  Mic, Phone, Twitter, Bot, Sparkles, Settings, Zap, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const aiAgents = [
  {
    id: 1,
    name: "Email Responder Agent",
    description: "Auto-replies to emails intelligently based on context and tone",
    icon: Mail,
    category: "Communication",
    freeTier: true,
    tools: ["n8n", "Zapier"]
  },
  {
    id: 2,
    name: "Lead Generation Agent", 
    description: "Extracts potential leads from LinkedIn and Google automatically",
    icon: Users,
    category: "Sales",
    freeTier: true,
    tools: ["Phantombuster", "Bardeen"]
  },
  {
    id: 3,
    name: "Social Media Posting Agent",
    description: "Auto-schedules posts with captions and hashtags across platforms",
    icon: Share2,
    category: "Marketing",
    freeTier: true,
    tools: ["Bardeen", "Buffer"]
  },
  {
    id: 4,
    name: "Meeting Scheduler Agent",
    description: "Books meetings automatically based on calendar availability",
    icon: Calendar,
    category: "Productivity",
    freeTier: true,
    tools: ["TidyCal", "Cronofy", "n8n"]
  },
  {
    id: 5,
    name: "Data Scraper Agent",
    description: "Extracts data from websites to Google Sheets or databases",
    icon: Database,
    category: "Data",
    freeTier: true,
    tools: ["Bardeen", "Phantombuster"]
  },
  {
    id: 6,
    name: "CRM Updater Agent",
    description: "Auto-updates CRM systems like HubSpot with customer information",
    icon: UserPlus,
    category: "Sales",
    freeTier: true,
    tools: ["Zapier", "n8n"]
  },
  {
    id: 7,
    name: "Invoice Generator Agent",
    description: "Auto-creates invoices from order data or form submissions",
    icon: FileText,
    category: "Finance",
    freeTier: true,
    tools: ["Zapier", "n8n"]
  },
  {
    id: 8,
    name: "Auto Email Summarizer Agent",
    description: "Summarizes lengthy emails and sends concise versions",
    icon: MessageSquare,
    category: "Communication",
    freeTier: true,
    tools: ["Zapier AI", "Flowise"]
  },
  {
    id: 9,
    name: "SEO Audit Agent",
    description: "Auto-checks websites for SEO issues and creates detailed reports",
    icon: Search,
    category: "Marketing",
    freeTier: true,
    tools: ["Free SEO tools", "AI"]
  },
  {
    id: 10,
    name: "Content Summarizer Agent",
    description: "Summarizes articles, blogs, and PDFs into key actionable points",
    icon: BookOpen,
    category: "Content",
    freeTier: true,
    tools: ["ChatGPT API", "LangChain"]
  },
  {
    id: 11,
    name: "Form-to-Database Agent",
    description: "Auto-adds form responses to Google Sheets or databases",
    icon: FileSpreadsheet,
    category: "Data",
    freeTier: true,
    tools: ["n8n", "Zapier", "Bardeen"]
  },
  {
    id: 12,
    name: "Daily Report Generator Agent",
    description: "Sends automated daily summaries of emails, sales, and statistics",
    icon: BarChart3,
    category: "Analytics",
    freeTier: true,
    tools: ["Zapier", "n8n"]
  },
  {
    id: 13,
    name: "Voice to Text Meeting Agent",
    description: "Converts meeting recordings into text and sends summaries",
    icon: Mic,
    category: "Productivity",
    freeTier: true,
    tools: ["Whisper", "n8n"]
  },
  {
    id: 14,
    name: "WhatsApp Auto-Reply Agent",
    description: "Auto-responds to WhatsApp messages based on AI rules",
    icon: Phone,
    category: "Communication",
    freeTier: true,
    tools: ["Twilio", "n8n"]
  },
  {
    id: 15,
    name: "Twitter Follower Analyzer Agent",
    description: "Analyzes Twitter followers and engagement statistics automatically",
    icon: Twitter,
    category: "Analytics",
    freeTier: true,
    tools: ["Twitter API", "AI Analytics"]
  }
];

const categories = ["All", "Communication", "Sales", "Marketing", "Productivity", "Data", "Finance", "Content", "Analytics"];

export default function AIAgentsLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAgents = aiAgents.filter(agent => {
    const matchesCategory = selectedCategory === "All" || agent.category === selectedCategory;
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>AI Agents Library - Dievektor - Web Development & Digital Agency</title>
        <meta name="description" content="Ready-to-deploy AI automation agents to simplify your work. Browse our collection of 15+ intelligent agents for business automation." />
        <meta name="keywords" content="AI agents, automation, business intelligence, workflow automation" />
        <link rel="canonical" href="https://yourdomain.com/ai-agents-library" />
      </Helmet>

      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 animate-float blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 animate-pulse blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Bot className="w-16 h-16 text-primary mr-4 drop-shadow-lg" />
                  <Sparkles className="w-8 h-8 text-accent absolute -top-2 -right-2 animate-pulse" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-scale-in">
                AI Agents Library
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
                Ready-to-Deploy AI Automation Agents to Simplify Your Work
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto mb-8 space-y-4">
                <div className="relative">
                  <Input 
                    type="text"
                    placeholder="Search AI agents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-background/80 backdrop-blur-sm border-primary/30 h-12 text-lg pl-12 shadow-lg focus:shadow-xl transition-shadow"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/60 h-5 w-5" />
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((category) => (
                    <Badge 
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={`cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105 shadow-md hover:shadow-lg ${
                        selectedCategory === category 
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-primary/25" 
                          : "bg-background/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 border-primary/20"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAgents.map((agent, index) => (
                <Card 
                  key={agent.id}
                  className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border border-primary/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 animate-fade-in backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20">
                        <agent.icon size={28} className="text-primary drop-shadow-sm" />
                      </div>
                      {agent.freeTier && (
                        <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0 shadow-lg">
                          ✨ Free Tier
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {agent.name}
                    </CardTitle>
                    
                    <CardDescription className="text-base leading-relaxed">
                      {agent.description}
                    </CardDescription>
                    
                    <div className="flex items-center mt-4">
                      <Badge variant="outline" className="bg-gradient-to-r from-accent/20 to-primary/20 text-primary border-primary/30 shadow-sm">
                        {agent.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 flex items-center text-primary">
                        <Settings className="w-4 h-4 mr-2" />
                        Compatible Tools
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {agent.tools.map((tool, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-gradient-to-r from-muted to-muted/50 border-primary/20 hover:border-primary/40 transition-colors">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        Activate Agent
                      </Button>
                      <Button size="sm" variant="outline" className="px-3 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredAgents.length === 0 && (
              <div className="text-center py-16">
                <Bot className="w-24 h-24 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-2xl font-bold mb-2">No agents found</h3>
                <p className="text-muted-foreground">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 animate-float blur-3xl" />
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Ready to Automate Your Workflow?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Deploy these AI agents in minutes and transform how you work. 
              Each agent comes with full setup support and integration guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                <Bot className="mr-2 h-5 w-5" />
                Add New Agent
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 shadow-md hover:shadow-lg transition-all" asChild>
                <Link to="/contact">Request Custom Agent</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
