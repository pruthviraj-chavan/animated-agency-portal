
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackgroundEffect } from "@/components/GradientBackgroundEffect";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, MessageSquare, Zap, Sparkles, Users, BarChart3, Settings, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const aiSolutions = [
  {
    id: 1,
    title: "Smart Customer Support Bot",
    description: "Transform your customer service with AI-powered support that never sleeps. Our intelligent chatbot handles inquiries, provides instant responses, and seamlessly escalates complex issues to human agents.",
    icon: MessageSquare,
    features: [
      "24/7 availability with instant responses",
      "Multi-language support (50+ languages)",
      "Seamless human handoff when needed",
      "CRM and helpdesk integrations",
      "Sentiment analysis and emotion detection",
      "Custom knowledge base training"
    ],
    useCases: [
      "E-commerce customer inquiries",
      "Technical support automation",
      "Order tracking and updates",
      "FAQ automation"
    ],
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50/50 dark:bg-blue-950/20"
  },
  {
    id: 2,
    title: "AI Data Analytics Agent",
    description: "Unlock the power of your business data with our intelligent analytics AI. Get real-time insights, predictive analytics, and automated reporting that drives informed decision-making.",
    icon: Brain,
    features: [
      "Predictive analytics and forecasting",
      "Real-time data processing",
      "Custom dashboard creation",
      "Automated report generation",
      "Pattern recognition and anomaly detection",
      "Integration with popular BI tools"
    ],
    useCases: [
      "Sales performance optimization",
      "Customer behavior analysis",
      "Inventory management",
      "Financial forecasting"
    ],
    gradient: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50/50 dark:bg-purple-950/20"
  },
  {
    id: 3,
    title: "Workflow Automation Bot",
    description: "Streamline your business processes with intelligent automation. Connect your favorite tools and let AI handle repetitive tasks while you focus on what matters most.",
    icon: Zap,
    features: [
      "500+ app integrations available",
      "Custom workflow builder",
      "Real-time monitoring and alerts",
      "Conditional logic and branching",
      "Error handling and retry mechanisms",
      "Performance analytics and optimization"
    ],
    useCases: [
      "Lead qualification and routing",
      "Invoice processing and approval",
      "Social media management",
      "Email marketing automation"
    ],
    gradient: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50/50 dark:bg-orange-950/20"
  },
  {
    id: 4,
    title: "AI Content Creator",
    description: "Generate high-quality, engaging content at scale. From blog posts to social media copy, our AI understands your brand voice and creates content that resonates with your audience.",
    icon: Sparkles,
    features: [
      "SEO-optimized content generation",
      "Brand voice training and consistency",
      "Multiple content formats (blogs, social, ads)",
      "Plagiarism detection and originality",
      "Content performance tracking",
      "Multi-language content creation"
    ],
    useCases: [
      "Blog and article writing",
      "Social media content",
      "Email marketing campaigns",
      "Product descriptions"
    ],
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50/50 dark:bg-green-950/20"
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

        {/* AI Solutions Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Our AI-Powered Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose from our suite of intelligent agents designed to transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiSolutions.map((solution, index) => (
                <Card key={solution.id} className={`${solution.bgColor} border-border/50 hover:shadow-xl transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 200}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-r ${solution.gradient}`}>
                        <solution.icon size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{solution.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Settings className="mr-2 h-4 w-4" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start text-sm text-muted-foreground">
                              <CheckCircle className="mr-2 h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Use Cases
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.useCases.map((useCase, idx) => (
                            <span key={idx} className="px-2 py-1 bg-background/80 rounded-md text-xs border">
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                  <div key={integration.name} className="flex flex-col items-center p-4 bg-background/60 rounded-lg border hover:shadow-md transition-all duration-300">
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
