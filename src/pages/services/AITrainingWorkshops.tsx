import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  School, 
  Award, 
  BookOpen, 
  Sparkles, 
  Brain, 
  Code, 
  Laptop, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Calendar,
  Clock,
  MapPin
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const schoolsData = [
  {
    name: "Jagruti High School",
    location: "Kolhapur, Maharashtra",
    students: 85,
    teachers: 10,
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&h=400",
    topics: ["Introduction to AI", "ChatGPT Basics", "AI in Daily Life"]
  },
  {
    name: "Radhanagri High School and Jr College",
    location: "Radhanagari, Maharashtra",
    students: 120,
    teachers: 15,
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&h=400",
    topics: ["Machine Learning Basics", "AI Tools for Students", "Future of AI"]
  },
  {
    name: "New English Medium School",
    location: "Kolhapur, Maharashtra",
    students: 95,
    teachers: 12,
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=400",
    topics: ["AI for Education", "Prompt Engineering", "AI Ethics"]
  },
  {
    name: "राजर्षी शाहू विद्या मंदिर (कुमार विद्या मंदिर)",
    location: "Kolhapur, Maharashtra",
    students: 110,
    teachers: 14,
    date: "September 2024",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&h=400",
    topics: ["Advanced AI Concepts", "AI Projects", "Career in AI"]
  },
  {
    name: "महाराणी राधाबाई कन्या विद्यामंदिर",
    location: "Kolhapur, Maharashtra",
    students: 90,
    teachers: 11,
    date: "August 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&h=400",
    topics: ["AI Fundamentals", "Coding with AI", "AI Applications"]
  },
  {
    name: "अंगनवाडी शेटकेवाडी",
    location: "Shetkewadi, Maharashtra",
    students: 45,
    teachers: 5,
    date: "July 2024",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&h=400",
    topics: ["Introduction to AI", "AI for Kids", "Fun with AI"]
  },
  {
    name: "Vidya Mandir Banachiwadi",
    location: "Banachiwadi, Maharashtra",
    students: 75,
    teachers: 8,
    date: "June 2024",
    image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=600&h=400",
    topics: ["AI Basics", "ChatGPT Usage", "Digital Literacy"]
  },
  {
    name: "डॉ. बाबासाहेब आंबेडकर शासकीय निवासी शाळा",
    location: "Radhanagari, Maharashtra",
    students: 130,
    teachers: 18,
    date: "May 2024",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&h=400",
    topics: ["AI for Education", "Machine Learning", "Future Skills"]
  },
  {
    name: "New English School Kasarputale",
    location: "Kasarputale, Maharashtra",
    students: 65,
    teachers: 7,
    date: "April 2024",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&h=400",
    topics: ["Introduction to AI", "AI Tools", "Practical Applications"]
  },
  {
    name: "Madhyamik Vidyalay Piral",
    location: "Piral, Maharashtra",
    students: 80,
    teachers: 9,
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&h=400",
    topics: ["AI Fundamentals", "Digital Skills", "AI Ethics"]
  },
  {
    name: "Central School Durgmanvad",
    location: "Durgmanvad, Maharashtra",
    students: 70,
    teachers: 8,
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?auto=format&fit=crop&w=600&h=400",
    topics: ["AI Basics", "Prompt Writing", "AI in Daily Life"]
  },
  {
    name: "Vidya Mandir Chougulewadi",
    location: "Chougulewadi, Maharashtra",
    students: 55,
    teachers: 6,
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?auto=format&fit=crop&w=600&h=400",
    topics: ["Introduction to AI", "Creative AI", "Future of Technology"]
  },
  {
    name: "Kaka Athavale Vidyalaya (VHP Nivasi Shala)",
    location: "Kolhapur, Maharashtra",
    students: 100,
    teachers: 12,
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=600&h=400",
    topics: ["AI for Students", "ChatGPT Workshop", "AI Projects"]
  },
  {
    name: "Swaraj Chavan Primary School",
    location: "Kolhapur, Maharashtra",
    students: 60,
    teachers: 7,
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&h=400",
    topics: ["AI for Kids", "Fun with Technology", "Basic AI Concepts"]
  },
  {
    name: "Central School Tarale Khurd",
    location: "Tarale Khurd, Maharashtra",
    students: 50,
    teachers: 5,
    date: "October 2023",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&h=400",
    topics: ["Introduction to AI", "Digital Literacy", "AI Applications"]
  },
  {
    name: "Vidya Mandir Duval Katrewadi",
    location: "Duval Katrewadi, Maharashtra",
    students: 65,
    teachers: 6,
    date: "September 2023",
    image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=600&h=400",
    topics: ["AI Basics", "Coding Introduction", "Future Skills"]
  }
];

const stats = [
  { icon: School, value: "20+", label: "Schools Trained" },
  { icon: Users, value: "2000+", label: "Students Trained" },
  { icon: GraduationCap, value: "100+", label: "Teachers Trained" },
  { icon: Award, value: "50+", label: "Workshops Conducted" }
];

const workshopTypes = [
  {
    title: "Student AI Workshop",
    duration: "4-6 Hours",
    icon: Users,
    description: "Interactive hands-on sessions introducing students to AI concepts, tools, and practical applications.",
    topics: [
      "What is Artificial Intelligence?",
      "How ChatGPT & AI Assistants Work",
      "Using AI for Homework & Projects",
      "Creating with AI (Images, Text, Code)",
      "AI Ethics & Responsible Use",
      "Future Career Opportunities in AI"
    ]
  },
  {
    title: "Teacher Training Program",
    duration: "2-3 Days",
    icon: GraduationCap,
    description: "Comprehensive training for educators to integrate AI tools into teaching methodologies.",
    topics: [
      "AI Tools for Lesson Planning",
      "Automated Grading & Assessment",
      "Personalized Learning with AI",
      "Creating Educational Content with AI",
      "AI-Powered Classroom Management",
      "Detecting AI-Generated Content"
    ]
  },
  {
    title: "AI Bootcamp",
    duration: "1 Week",
    icon: Code,
    description: "Intensive program for advanced students interested in AI development and programming.",
    topics: [
      "Python for AI",
      "Machine Learning Basics",
      "Building Simple AI Models",
      "Natural Language Processing",
      "Computer Vision Projects",
      "Deploying AI Applications"
    ]
  }
];

const benefits = [
  "Hands-on practical experience with latest AI tools",
  "Certificate of completion for all participants",
  "Follow-up support and resources",
  "Customized curriculum based on grade level",
  "Interactive demonstrations and activities",
  "Real-world AI application examples"
];

export default function AITrainingWorkshops() {
  const handleBookWorkshop = () => {
    const whatsappNumber = "9404895667";
    const message = "Hi, I'm interested in booking an AI Training Workshop for our school. Please share more details.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Training & Workshops for Schools | dieVektor</title>
        <meta name="description" content="We provide AI training workshops for students and teachers. Over 20+ schools trained with 2000+ students and 100+ teachers equipped with AI skills." />
        <meta name="keywords" content="AI training schools, AI workshops students, teacher AI training, artificial intelligence education, AI curriculum schools, dieVektor AI training" />
      </Helmet>
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI Education Initiative
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Training & Workshops{" "}
              <span className="text-gradient">for Schools</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empowering students and teachers with cutting-edge AI knowledge through 
              interactive workshops and hands-on training programs.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient hover:opacity-90" onClick={handleBookWorkshop}>
                <Calendar className="w-5 h-5 mr-2" />
                Book a Workshop
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Training Programs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Customized AI training programs designed for different audiences and skill levels.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workshopTypes.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient rounded-xl flex items-center justify-center mb-4">
                      <workshop.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold">{workshop.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock className="w-4 h-4" />
                      {workshop.duration}
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{workshop.description}</p>
                    
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Topics Covered:</p>
                      {workshop.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schools We've <span className="text-gradient">Trained</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse of our AI training sessions across various schools.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolsData.map((school, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={school.image}
                      alt={`AI Training at ${school.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg">{school.name}</h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <MapPin className="w-3 h-3" />
                        {school.location}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-primary" />
                          {school.students} Students
                        </span>
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          {school.teachers} Teachers
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {school.date}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {school.topics.map((topic, i) => (
                        <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our <span className="text-gradient">AI Training?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our workshops are designed to make AI accessible and engaging for students of all ages 
                and teachers from all backgrounds.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-border">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&h=800"
                  alt="AI Training Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">AI Certified</div>
                    <div className="text-sm text-muted-foreground">Training Program</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Bring AI Education to Your School?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Contact us to schedule a workshop or training program. We offer customized 
              sessions based on your school's requirements and student levels.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={handleBookWorkshop}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Workshop
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
