import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Code,
  GraduationCap,
  MapPin,
  MessageSquare,
  School,
  Users,
} from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { BookWorkshopButton } from "@/components/services/TrainingInteractive";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  buildWebPageSchema,
} from "@/lib/seo/schema";

const TITLE = "AI Training & Workshops for Schools and Educators";
const DESC =
  "Practical AI literacy workshops and bootcamps delivered across schools and colleges in Kolhapur and Radhanagari, Maharashtra.";

export const metadata: Metadata = buildPageMetadata({
  path: "/services/ai-training-workshops",
  title: TITLE,
  description: DESC,
});

const schoolsData = [
  {
    name: "Jagruti High School",
    location: "Kolhapur, Maharashtra",
    students: 85,
    teachers: 10,
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&h=400",
    topics: ["Introduction to AI", "ChatGPT Basics", "AI in Daily Life"],
  },
  {
    name: "Radhanagri High School and Jr College",
    location: "Radhanagari, Maharashtra",
    students: 120,
    teachers: 15,
    date: "November 2024",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&h=400",
    topics: ["Machine Learning Basics", "AI Tools for Students", "Future of AI"],
  },
  {
    name: "New English Medium School",
    location: "Kolhapur, Maharashtra",
    students: 95,
    teachers: 12,
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=400",
    topics: ["AI for Education", "Prompt Engineering", "AI Ethics"],
  },
  {
    name: "राजर्षी शाहू विद्या मंदिर (कुमार विद्या मंदिर)",
    location: "Kolhapur, Maharashtra",
    students: 110,
    teachers: 14,
    date: "September 2024",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&h=400",
    topics: ["Advanced AI Concepts", "AI Projects", "Career in AI"],
  },
  {
    name: "महाराणी राधाबाई कन्या विद्यामंदिर",
    location: "Kolhapur, Maharashtra",
    students: 90,
    teachers: 11,
    date: "August 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&h=400",
    topics: ["AI Fundamentals", "Coding with AI", "AI Applications"],
  },
  {
    name: "अंगनवाडी शेटकेवाडी",
    location: "Shetkewadi, Maharashtra",
    students: 45,
    teachers: 5,
    date: "July 2024",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&h=400",
    topics: ["Introduction to AI", "AI for Kids", "Fun with AI"],
  },
];

const stats = [
  { icon: School, value: "20+", label: "Schools Trained" },
  { icon: Users, value: "2,000+", label: "Students Trained" },
  { icon: GraduationCap, value: "100+", label: "Teachers Trained" },
  { icon: Award, value: "50+", label: "Workshops Conducted" },
];

const workshopTypes = [
  {
    title: "Student AI Workshop",
    duration: "4-6 Hours",
    icon: Users,
    description:
      "Interactive sessions introducing students to AI concepts, tools, and practical projects.",
    topics: [
      "What is Artificial Intelligence?",
      "How AI Assistants Work",
      "Using AI for Projects",
      "AI Ethics & Responsible Use",
    ],
  },
  {
    title: "Teacher Training Program",
    duration: "2-3 Days",
    icon: GraduationCap,
    description:
      "Comprehensive training for educators to integrate AI tools into daily teaching.",
    topics: [
      "AI Tools for Lesson Planning",
      "Automated Assessment Helpers",
      "Personalized Learning",
      "Classroom Workflows",
    ],
  },
  {
    title: "AI Bootcamp",
    duration: "1 Week",
    icon: Code,
    description:
      "Intensive program for advanced students interested in AI programming and real builds.",
    topics: [
      "Python for AI",
      "Machine Learning Basics",
      "Building Simple Models",
      "Deploying AI Apps",
    ],
  },
];

export default function AITrainingWorkshopsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({
            title: TITLE,
            description: DESC,
            path: "/services/ai-training-workshops",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "AI Training & Workshops", path: "/services/ai-training-workshops" },
          ]),
          buildServiceSchema({
            name: TITLE,
            description: DESC,
            path: "/services/ai-training-workshops",
            serviceType: "AI Education Workshops",
          }),
        ]}
      />
      <SiteNav />

      <main className="flex-grow pt-24">
        <section className="dv-dot-bg py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-4xl">
            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
              AI Education Initiative
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#141210] mb-5">
              AI Training &amp; Workshops <span className="text-[#FF5422]">for Schools</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
              Empowering students and teachers with practical AI knowledge through interactive
              workshops across Maharashtra.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <BookWorkshopButton
                label="Book a Workshop"
                className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white px-7"
              />
              <Button size="lg" variant="outline" asChild className="rounded-full border-stone-200">
                <Link href="/contact">
                  <MessageSquare className="w-4 h-4 mr-2" /> Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-stone-100 bg-[#FFF8F5]">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="dv-dot-orange rounded-2xl p-6 text-center shadow-sm">
                  <s.icon className="w-6 h-6 mx-auto mb-2 text-[#141210]" />
                  <div className="text-3xl sm:text-4xl font-black text-[#141210]">{s.value}</div>
                  <div className="text-xs sm:text-sm font-medium text-[#141210]/85 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dv-dot-bg py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#141210] mb-12">
              Our <span className="text-[#FF5422]">Training Programs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {workshopTypes.map((w) => (
                <Card key={w.title} className="border-[#FBE0D4] bg-white rounded-2xl shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#FF5422] text-white rounded-xl flex items-center justify-center mb-4">
                      <w.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#141210] mb-1">{w.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-3">
                      <Clock className="w-3.5 h-3.5 text-[#FF5422]" /> {w.duration}
                    </div>
                    <p className="text-sm text-stone-600 mb-4">{w.description}</p>
                    <div className="space-y-2 border-t border-stone-100 pt-4">
                      {w.topics.map((t) => (
                        <div key={t} className="flex items-start gap-2 text-xs text-stone-600">
                          <CheckCircle className="w-4 h-4 text-[#FF5422] shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#141210] mb-12">
              Schools We&apos;ve <span className="text-[#FF5422]">Trained</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolsData.map((school) => (
                <Card
                  key={school.name}
                  className="overflow-hidden border-[#FBE0D4] bg-white rounded-2xl shadow-sm"
                >
                  <div className="aspect-video overflow-hidden relative bg-stone-100">
                    <Image
                      src={school.image}
                      alt={`AI Training at ${school.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="font-bold text-base leading-snug">{school.name}</h3>
                      <p className="text-xs text-white/80 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {school.location}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between text-xs text-stone-600 mb-3">
                      <span>{school.students} Students</span>
                      <span>{school.teachers} Teachers</span>
                      <span>{school.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {school.topics.map((topic) => (
                        <span
                          key={topic}
                          className="bg-[#FFF4F0] border border-[#FBE0D4] text-[#FF5422] text-xs px-2.5 py-0.5 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="dv-dot-orange py-16 text-white text-center">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bring AI Education to Your School
            </h2>
            <p className="text-white/90 mb-8">
              Customized sessions tailored to your students&apos; grade levels and curriculum.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <BookWorkshopButton
                label="Schedule a Workshop"
                className="rounded-full bg-[#141210] text-white hover:bg-black px-7"
              />
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-white text-white bg-transparent hover:bg-white/10"
              >
                <Link href="/contact">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
