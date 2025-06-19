
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
  Briefcase
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
          </div>

          {/* Pricing Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-8">Simple, Transparent Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="relative overflow-hidden">
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

              <Card className="relative overflow-hidden border-primary">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-purple-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    CRM Solution
                  </CardTitle>
                  <div className="text-3xl font-bold">$149<span className="text-sm font-normal">/month</span></div>
                  <CardDescription>Complete business solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient hover:opacity-90">Choose Plan</Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
