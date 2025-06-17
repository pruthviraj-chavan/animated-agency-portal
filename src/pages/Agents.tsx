
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackgroundEffect } from "@/components/GradientBackgroundEffect";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, MessageSquare, Zap, Sparkles, Users, BarChart3, Settings, ArrowRight, CheckCircle, MessageCircle, Calendar, Mail, FileText, TrendingUp, Search, Database, ShoppingCart, Star, Heart, Scale, UserCheck, Mic, Target, Clock, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { AIWorkflowAnimation } from "@/components/home/AIWorkflowAnimation";

const agentCategories = [
  {
    id: "business",
    title: "🔧 Business & Productivity Agents",
    description: "Streamline operations and boost productivity",
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50/50 dark:bg-blue-950/20",
    agents: [
      {
        title: "AI Customer Support Agent",
        description: "Instantly answers customer queries across chat, email, and support tickets, reducing response time and support costs.",
        icon: MessageCircle,
        features: ["24/7 instant responses", "Multi-channel support", "Ticket auto-routing", "Sentiment analysis"]
      },
      {
        title: "AI Sales Assistant",
        description: "Engages leads on your site or via email, qualifies them, and books meetings automatically with your sales team.",
        icon: Target,
        features: ["Lead qualification", "Meeting scheduling", "CRM integration", "Follow-up automation"]
      },
      {
        title: "AI Meeting Summarizer",
        description: "Joins Zoom/Meet calls, transcribes discussions, and sends smart summaries and next steps to all participants.",
        icon: Calendar,
        features: ["Auto transcription", "Smart summaries", "Action item extraction", "Meeting insights"]
      },
      {
        title: "AI Email Responder",
        description: "Automatically drafts and sends email replies based on context and tone, perfect for busy professionals and teams.",
        icon: Mail,
        features: ["Context-aware replies", "Tone matching", "Auto-scheduling", "Priority filtering"]
      }
    ]
  },
  {
    id: "marketing",
    title: "📊 Marketing & Content Agents",
    description: "Amplify your marketing efforts with AI",
    gradient: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50/50 dark:bg-purple-950/20",
    agents: [
      {
        title: "AI Content Creator",
        description: "Generates SEO blogs, social media posts, and ad copy tailored to brand voice and current trends.",
        icon: FileText,
        features: ["SEO optimization", "Brand voice matching", "Trend analysis", "Multi-format content"]
      },
      {
        title: "AI Social Media Manager",
        description: "Plans, schedules, and posts content while analyzing engagement for optimal growth strategies.",
        icon: TrendingUp,
        features: ["Content scheduling", "Engagement analytics", "Growth strategies", "Hashtag optimization"]
      },
      {
        title: "AI Ad Optimizer",
        description: "Creates, tests, and optimizes ad campaigns (Google/Facebook) using data to improve ROI.",
        icon: Target,
        features: ["A/B testing", "ROI optimization", "Audience targeting", "Budget allocation"]
      }
    ]
  },
  {
    id: "knowledge",
    title: "🧠 Knowledge & Research Agents",
    description: "Transform data into actionable insights",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50/50 dark:bg-green-950/20",
    agents: [
      {
        title: "AI Research Assistant",
        description: "Gathers and summarizes information from academic papers, blogs, or web pages for any topic or niche.",
        icon: Search,
        features: ["Academic research", "Web scraping", "Content summarization", "Citation management"]
      },
      {
        title: "AI Data Analyst Agent",
        description: "Accepts spreadsheets and dashboards, then explains trends, anomalies, or creates insights in plain language.",
        icon: Database,
        features: ["Trend analysis", "Anomaly detection", "Visual insights", "Plain language reports"]
      }
    ]
  },
  {
    id: "ecommerce",
    title: "🛒 E-Commerce Agents",
    description: "Boost sales and customer experience",
    gradient: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50/50 dark:bg-orange-950/20",
    agents: [
      {
        title: "AI Shopping Assistant",
        description: "Helps users find products based on preferences and FAQs, boosting conversion and reducing cart abandonment.",
        icon: ShoppingCart,
        features: ["Product recommendations", "Preference matching", "FAQ automation", "Cart recovery"]
      },
      {
        title: "AI Review Generator",
        description: "Creates believable customer reviews based on product details or usage patterns.",
        icon: Star,
        features: ["Authentic reviews", "Product analysis", "Usage patterns", "Review optimization"]
      }
    ]
  },
  {
    id: "specialized",
    title: "👩‍⚕️ Specialized Agents",
    description: "Industry-specific AI solutions",
    gradient: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50/50 dark:bg-pink-950/20",
    agents: [
      {
        title: "AI Healthcare Chatbot",
        description: "Assists patients with symptoms, appointment scheduling, or FAQ handling for clinics and hospitals.",
        icon: Heart,
        features: ["Symptom assessment", "Appointment booking", "Medical FAQs", "Patient support"]
      },
      {
        title: "AI Legal Document Drafting Agent",
        description: "Drafts basic contracts, NDAs, and agreements from templates with custom user inputs.",
        icon: Scale,
        features: ["Contract drafting", "Legal templates", "Custom inputs", "Compliance checking"]
      }
    ]
  },
  {
    id: "hr",
    title: "💼 HR & Talent Agents",
    description: "Streamline hiring and talent management",
    gradient: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50/50 dark:bg-teal-950/20",
    agents: [
      {
        title: "AI Resume Screener",
        description: "Scans resumes and filters top candidates based on job role and company priorities.",
        icon: UserCheck,
        features: ["Resume parsing", "Candidate ranking", "Skill matching", "Bias reduction"]
      },
      {
        title: "AI Interview Coach",
        description: "Prepares candidates with mock interviews, feedback, and real-time tips.",
        icon: Mic,
        features: ["Mock interviews", "Real-time feedback", "Performance analytics", "Skill improvement"]
      }
    ]
  }
];

const integrationLogos = [
  { name: "Slack", icon: "💬" },
  { name: "Salesforce", icon: "☁️" },
  { name: "HubSpot", icon: "🔶" },
  { name: "Zapier", icon: "⚡" },
  { name: "Google Analytics", icon: "📊" },
  { name: "WordPress", icon: "📝" },
  { name: "Shopify", icon: "🛒" },
  { name: "Microsoft Teams", icon: "👥" }
];

export default function Agents() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <GradientBackgroundEffect />
      </div>
      
      <Header />
      <main className="flex-grow pt-16 relative z-10">
        {/* Hero Section */}
        <section className="py-20 bg-background/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/10 via-agency-blue/10 to-agency-pink/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-scale-in">
                AI Agents & Chatbots
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
                Automation for your customers with access to 500+ app integrations to automate their own workflows. 
                Your branding. Our cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-bottom">
                <Button size="lg" className="bg-gradient hover:opacity-90 button-pop">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Workflow Animation */}
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
                How Our AI Agents Work Together
              </h2>
              <p className="text-lg text-muted-foreground">
                Watch our intelligent agents collaborate in real-time to process and deliver results
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <AIWorkflowAnimation />
            </div>
          </div>
        </section>

        {/* AI Agents Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Our Complete AI Agent Suite
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover specialized AI agents designed for every aspect of your business
              </p>
            </div>

            <div className="space-y-16">
              {agentCategories.map((category, categoryIndex) => (
                <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.agents.map((agent, agentIndex) => (
                      <Card 
                        key={agent.title} 
                        className={`${category.bgColor} border-border/50 hover:shadow-xl transition-all duration-300 animate-fade-in group hover:scale-105`} 
                        style={{ animationDelay: `${(categoryIndex * 200) + (agentIndex * 100)}ms` }}
                      >
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-r ${category.gradient} group-hover:scale-110 transition-transform duration-300`}>
                              <agent.icon size={24} />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                                {agent.title}
                              </CardTitle>
                            </div>
                          </div>
                          <CardDescription className="text-base leading-relaxed">
                            {agent.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center">
                              <Settings className="mr-2 h-4 w-4" />
                              Key Features
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {agent.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start text-sm text-muted-foreground">
                                  <CheckCircle className="mr-2 h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-background/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Seamless Integrations
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with your favorite tools and platforms
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {integrationLogos.map((integration, index) => (
                  <div key={integration.name} className="flex flex-col items-center p-4 bg-background/60 rounded-lg border hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <span className="text-2xl mb-2">{integration.icon}</span>
                    <span className="text-sm font-medium">{integration.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                And 500+ more integrations to power your workflows
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="text-muted-foreground">App Integrations</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-muted-foreground">Availability</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-muted-foreground">Languages Supported</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-agency-purple/10 via-agency-blue/10 to-agency-pink/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of businesses already using our AI agents to automate workflows, 
                enhance customer experience, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient hover:opacity-90 button-pop" asChild>
                  <Link to="/contact" className="flex items-center">
                    <Bot className="mr-2 h-5 w-5" />
                    <span>Start Your AI Journey</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
