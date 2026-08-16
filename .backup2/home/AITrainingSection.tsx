import { GraduationCap, Users, School, Award, BookOpen, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const schoolsData = [
  {
    name: "Jagruti High School",
    location: "Kolhapur",
    students: 85,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Radhanagri High School and Jr College",
    location: "Radhanagari",
    students: 120,
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "New English Medium School",
    location: "Kolhapur",
    students: 95,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "राजर्षी शाहू विद्या मंदिर (कुमार विद्या मंदिर)",
    location: "Kolhapur",
    students: 110,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "महाराणी राधाबाई कन्या विद्यामंदिर",
    location: "Kolhapur",
    students: 90,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "अंगनवाडी शेटकेवाडी",
    location: "Shetkewadi",
    students: 45,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Vidya Mandir Banachiwadi",
    location: "Banachiwadi",
    students: 75,
    image: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "डॉ. बाबासाहेब आंबेडकर शासकीय निवासी शाळा",
    location: "Radhanagari",
    students: 130,
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "New English School Kasarputale",
    location: "Kasarputale",
    students: 65,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Madhyamik Vidyalay Piral",
    location: "Piral",
    students: 80,
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Central School Durgmanvad",
    location: "Durgmanvad",
    students: 70,
    image: "https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Vidya Mandir Chougulewadi",
    location: "Chougulewadi",
    students: 55,
    image: "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Kaka Athavale Vidyalaya (VHP Nivasi Shala)",
    location: "Kolhapur",
    students: 100,
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Swaraj Chavan Primary School",
    location: "Kolhapur",
    students: 60,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Central School Tarale Khurd",
    location: "Tarale Khurd",
    students: 50,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Vidya Mandir Duval Katrewadi",
    location: "Duval Katrewadi",
    students: 65,
    image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=600&h=400"
  }
];

const stats = [
  { icon: School, value: "20+", label: "Schools Trained" },
  { icon: Users, value: "2000+", label: "Students Trained" },
  { icon: GraduationCap, value: "100+", label: "Teachers Trained" },
  { icon: Award, value: "50+", label: "Workshops Conducted" }
];

export function AITrainingSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            AI Education Initiative
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Empowering the Next Generation with{" "}
            <span className="text-gradient">AI Training & Workshops</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We've trained over 2000+ students and 100+ teachers across 20+ schools, equipping them 
            with cutting-edge AI knowledge and practical skills for the future.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Schools Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Schools We've Trained
          </h3>
          
          {/* Scrolling school cards */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[...schoolsData, ...schoolsData].map((school, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * (index % 6) }}
                  className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 flex-shrink-0 w-[320px]"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={school.image}
                      alt={`AI Training at ${school.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h4 className="text-white font-semibold text-base mb-1 line-clamp-2">{school.name}</h4>
                    <div className="flex items-center gap-1 text-white/70 text-sm mb-2">
                      <MapPin className="w-3 h-3" />
                      <span>{school.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-white/90 text-sm">{school.students}+ Students Trained</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Static grid for smaller display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {schoolsData.slice(0, 8).map((school, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-4 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <School className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-medium text-sm line-clamp-2 mb-1">{school.name}</h5>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {school.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Want to bring AI education to your school? We offer customized workshops for students and teachers.
          </p>
          <Link to="/services/ai-training-workshops">
            <Button size="lg" className="bg-gradient hover:opacity-90">
              <GraduationCap className="w-5 h-5 mr-2" />
              Explore AI Training Programs
            </Button>
          </Link>
        </motion.div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
