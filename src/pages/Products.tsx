
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  BarChart3, 
  Shield, 
  MessageSquare, 
  Phone, 
  Mail, 
  Database,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  GraduationCap,
  Network,
  Briefcase,
  MessageCircle,
  FileText,
  Zap,
  Package,
  TrendingUp,
  Bell,
  Store,
  Receipt,
  Brain,
  Building2
} from "lucide-react";

const Products = () => {
  const attendanceFeatures = [
    "Biometric Integration",
    "Mobile App Support", 
    "Real-time Analytics",
    "Automated Reports",
    "Multi-location Support",
    "Cloud Backup"
  ];

  const crmFeatures = [
    "WhatsApp Integration",
    "Lead Management",
    "Customer Segmentation", 
    "Automated Follow-ups",
    "Sales Pipeline",
    "Performance Analytics"
  ];

  const alumniFeatures = [
    "Alumni Directory",
    "Event Management",
    "Job Board Integration",
    "Donation Management",
    "Networking Tools",
    "Success Stories"
  ];

  const slackMigrationFeatures = [
    "End-to-end Migration",
    "Secure Data Transfer",
    "Messages & Channels",
    "Files & Attachments",
    "User Data Migration",
    "Zero Data Loss Guarantee"
  ];

  const billingStockFeatures = [
    "Smart Billing System",
    "AI Demand Prediction",
    "Low-stock Alerts",
    "Sales Analytics",
    "Multi-store Support",
    "Retail-ready Interface"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our flagship products designed to streamline operations and enhance productivity 
              for businesses of all sizes.
            </p>
          </div>

          {/* Products Section */}
          <div className="space-y-20">
            {/* Attendance Management System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    Education & Business
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Attendance Management System
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Streamline attendance tracking for small-scale institutes with our comprehensive 
                    management system. Perfect for schools, coaching centers, and training institutes.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {attendanceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient hover:opacity-90">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button>
                </div>
              </div>

              <Card className="bg-background/60 backdrop-blur-sm border-border/50 shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/40">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Smart Scheduling</p>
                      <p className="text-sm text-muted-foreground">Automated timetable management</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/40">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Analytics Dashboard</p>
                      <p className="text-sm text-muted-foreground">Real-time attendance insights</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/40">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Secure & Reliable</p>
                      <p className="text-sm text-muted-foreground">GDPR compliant data protection</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CRM System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="bg-background/60 backdrop-blur-sm border-border/50 shadow-xl lg:order-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>CRM Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/40">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Multi-Channel Communication</p>
                      <p className="text-sm text-muted-foreground">WhatsApp, SMS, Email integration</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/40">
                    <Database className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Customer Database</p>
                      <p className="text-sm text-muted-foreground">Centralized customer information</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/40">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Automation</p>
                      <p className="text-sm text-muted-foreground">Automated workflows & follow-ups</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6 lg:order-2">
                <div>
                  <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/20">
                    Business Communication
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Professional CRM Solution
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Replace WhatsApp with our professional CRM system designed for businesses. 
                    Manage customer relationships, track sales, and automate communications seamlessly.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {crmFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient hover:opacity-90">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>

            {/* Alumni Portal System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-purple-500/10 text-purple-600 border-purple-500/20">
                    Higher Education
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Alumni Portal Platform
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Connect and engage your alumni community with our comprehensive portal solution. 
                    Perfect for degree colleges and high schools to maintain lifelong connections.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {alumniFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient hover:opacity-90">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button>
                </div>
              </div>

              <Card className="bg-background/60 backdrop-blur-sm border-border/50 shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Alumni Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/40">
                    <Network className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Alumni Network</p>
                      <p className="text-sm text-muted-foreground">Connect graduates across batches</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/40">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Career Services</p>
                      <p className="text-sm text-muted-foreground">Job opportunities and mentorship</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-background/40">
                    <Star className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Achievement Tracking</p>
                      <p className="text-sm text-muted-foreground">Showcase alumni success stories</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Slack Data Migration Service */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 shadow-2xl relative overflow-hidden lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
                <CardHeader className="text-center relative z-10">
                  <Badge className="w-fit mx-auto mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">
                    Enterprise Service
                  </Badge>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">Migration Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <FileText className="w-6 h-6 text-orange-400" />
                    <div>
                      <p className="font-semibold text-white">Complete Message History</p>
                      <p className="text-sm text-slate-400">All channels, DMs, and threads preserved</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <Shield className="w-6 h-6 text-orange-400" />
                    <div>
                      <p className="font-semibold text-white">Enterprise Security</p>
                      <p className="text-sm text-slate-400">SOC 2 compliant data handling</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <Zap className="w-6 h-6 text-orange-400" />
                    <div>
                      <p className="font-semibold text-white">Fast Onboarding</p>
                      <p className="text-sm text-slate-400">Teams of any size, minimal downtime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6 lg:order-2">
                <div>
                  <Badge className="mb-4 bg-orange-500/10 text-orange-500 border-orange-500/20 px-4 py-1">
                    Professional Service
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Slack Data Migration
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    End-to-end Slack workspace data migration with guaranteed accuracy and zero data loss. 
                    We securely transfer messages, channels, files, and users for teams of all sizes.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {slackMigrationFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-orange-500/5 border border-orange-500/10">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
                  <p className="text-sm font-medium text-orange-400 mb-1">Why Choose Us?</p>
                  <p className="text-sm text-muted-foreground">
                    Trusted by enterprises worldwide. 100% data accuracy guarantee with dedicated support throughout the migration process.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/25">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-orange-500/30 hover:bg-orange-500/10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* AI-Powered Billing & Stock Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-4 py-1">
                      Our Product
                    </Badge>
                    <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 px-3 py-1">
                      <Store className="w-3 h-3 mr-1" /> Used by 3 Shops
                    </Badge>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    AI-Powered Billing & Stock Management
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our flagship SaaS product built for retail success. Currently powering 3 clothing shops 
                    with smart billing, automated inventory, and AI-driven demand prediction.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {billingStockFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-500">3</p>
                    <p className="text-xs text-muted-foreground">Active Stores</p>
                  </div>
                  <div className="text-center border-x border-emerald-500/20">
                    <p className="text-2xl font-bold text-emerald-500">99.9%</p>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-500">24/7</p>
                    <p className="text-xs text-muted-foreground">Support</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-emerald-500/30 hover:bg-emerald-500/10">
                    Watch Demo
                  </Button>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 border-emerald-700/30 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
                <CardHeader className="text-center relative z-10">
                  <Badge className="w-fit mx-auto mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                    SaaS Solution
                  </Badge>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">Smart Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <Receipt className="w-6 h-6 text-emerald-400" />
                    <div>
                      <p className="font-semibold text-white">Smart Billing</p>
                      <p className="text-sm text-slate-400">Fast checkout with barcode scanning</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                    <div>
                      <p className="font-semibold text-white">AI Predictions</p>
                      <p className="text-sm text-slate-400">Demand forecasting & trend analysis</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <Bell className="w-6 h-6 text-emerald-400" />
                    <div>
                      <p className="font-semibold text-white">Smart Alerts</p>
                      <p className="text-sm text-slate-400">Low-stock notifications & reorder points</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <Building2 className="w-6 h-6 text-emerald-400" />
                    <div>
                      <p className="font-semibold text-white">Multi-Store</p>
                      <p className="text-sm text-slate-400">Manage multiple locations easily</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h3>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">Choose the perfect plan for your business needs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Users className="w-5 h-5" />
                    Attendance System
                  </CardTitle>
                  <div className="text-3xl font-bold">$99<span className="text-sm font-normal">/month</span></div>
                  <CardDescription>Perfect for small institutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    CRM Solution
                  </CardTitle>
                  <div className="text-3xl font-bold">$149<span className="text-sm font-normal">/month</span></div>
                  <CardDescription>Complete business solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Alumni Portal
                  </CardTitle>
                  <div className="text-3xl font-bold">$199<span className="text-sm font-normal">/month</span></div>
                  <CardDescription>Connect your alumni community</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-2 text-sm font-medium">
                  Enterprise Service
                </div>
                <CardHeader className="pt-10">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5 text-orange-500" />
                    Slack Migration
                  </CardTitle>
                  <div className="text-3xl font-bold">Custom<span className="text-sm font-normal"> pricing</span></div>
                  <CardDescription>Based on workspace size</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">Get Quote</Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all md:col-span-2 lg:col-span-2">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center py-2 text-sm font-medium">
                  🚀 Most Popular - Our Product
                </div>
                <CardHeader className="pt-10">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Brain className="w-5 h-5 text-emerald-500" />
                    AI Billing & Stock Management
                  </CardTitle>
                  <div className="text-3xl font-bold">$79<span className="text-sm font-normal">/month</span></div>
                  <CardDescription>Perfect for retail & clothing shops</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">Start Free Trial</Button>
                  <Button variant="outline" className="border-emerald-500/30">Watch Demo</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
