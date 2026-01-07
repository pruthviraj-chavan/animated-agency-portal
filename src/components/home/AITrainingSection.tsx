import { GraduationCap, Users, School, Award, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const schoolsData = [
  {
    name: "St. Xavier's High School",
    location: "Kolhapur",
    students: 120,
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "DAV Public School",
    location: "Sangli",
    students: 85,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Shivaji Vidyalaya",
    location: "Satara",
    students: 95,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Kendriya Vidyalaya",
    location: "Pune",
    students: 150,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&h=400"
  },
  {
    name: "Modern English School",
    location: "Ichalkaranji",
    students: 75,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&h=400"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolsData.slice(0, 3).map((school, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={school.image}
                    alt={`AI Training at ${school.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-white font-semibold text-lg mb-1">{school.name}</h4>
                  <p className="text-white/70 text-sm">{school.location}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-white/90 text-sm">{school.students}+ Students Trained</span>
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
    </section>
  );
}
