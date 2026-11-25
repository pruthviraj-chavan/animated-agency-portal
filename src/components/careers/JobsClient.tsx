"use client";

import { useState } from "react";
import {
  ArrowRight,
  Brain,
  Building2,
  Code,
  FileText,
  HeartHandshake,
  Layers,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Search,
  Server,
  TrendingUp,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SITE_CONFIG } from "@/config/site";

const techJobs = [
  { id: 1, title: "Python Developer Intern", description: "Work with data-driven applications and machine learning pipelines.", location: "Remote", icon: Code },
  { id: 2, title: "AI Engineer Intern", description: "Assist in building AI models, voice agents, and automation solutions.", location: "Hybrid", icon: Brain },
  { id: 3, title: "UI/UX Designer", description: "Create user-friendly and engaging designs for web and mobile.", location: "On-site", icon: PenTool },
  { id: 4, title: "Full Stack Developer", description: "Work across frontend and backend using React, TypeScript, and Node.", location: "Remote", icon: Layers },
  { id: 5, title: "DevOps Engineer", description: "Manage cloud infrastructure and CI/CD deployment pipelines.", location: "Hybrid", icon: Server },
];

const salesJobs = [
  { id: 6, title: "Lead Generation Specialist", description: "Identify potential clients and analyze market opportunities.", location: "Remote", icon: Users },
  { id: 7, title: "Marketing Executive", description: "Plan and execute digital marketing campaigns across channels.", location: "On-site", icon: TrendingUp },
  { id: 8, title: "Business Development Manager", description: "Drive partnerships and expansion across key industries.", location: "Hybrid", icon: Building2 },
  { id: 9, title: "Content Marketing Specialist", description: "Create engaging blog posts, videos, and case studies.", location: "Remote", icon: FileText },
  { id: 10, title: "Customer Success Manager", description: "Ensure smooth onboarding and long-term client retention.", location: "Hybrid", icon: HeartHandshake },
];

export function JobsClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "tech" | "sales">("all");

  const filterList = (list: typeof techJobs) =>
    list.filter(
      (job) =>
        !searchTerm ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const handleApply = (jobTitle: string) => {
    const whatsappUrl = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
      `I'm interested in applying for the ${jobTitle} position at dieVekter.`,
    )}`;
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting you to WhatsApp to submit your application!");
  };

  return (
    <main className="flex-grow pt-24">
      <section className="dv-dot-bg py-16 sm:py-24">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl text-center">
          <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
            Careers
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#141210] mb-5">
            Jobs – Join Our <span className="text-[#FF5422]">Team</span>
          </h1>
          <p className="text-base sm:text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Join dieVekter and build AI agents, software, and automation systems that run in
            production.
          </p>

          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search open roles..."
                className="pl-10 rounded-full bg-white border-stone-200 focus-visible:ring-[#FF5422]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2 shrink-0">
              {(["all", "tech", "sales"] as const).map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={categoryFilter === cat ? "default" : "outline"}
                  className={`rounded-full capitalize ${
                    categoryFilter === cat
                      ? "bg-[#FF5422] hover:bg-[#e8460e] text-white"
                      : "border-stone-200"
                  }`}
                  onClick={() => setCategoryFilter(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-100 bg-[#FFF8F5] py-16">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
          {(categoryFilter === "all" || categoryFilter === "tech") && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141210] mb-8">
                Technology Roles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterList(techJobs).map((job) => (
                  <div
                    key={job.id}
                    className="rounded-2xl border border-[#FBE0D4] bg-white p-6 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:border-[#FF5422]/40 transition-all"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#FF5422] text-white flex items-center justify-center">
                          <job.icon className="h-5 w-5" />
                        </div>
                        <Badge variant="outline" className="border-[#FBE0D4] bg-[#FFF8F5] text-stone-700">
                          <MapPin className="h-3 w-3 mr-1 text-[#FF5422]" />
                          {job.location}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-[#141210] mb-2">{job.title}</h3>
                      <p className="text-sm text-stone-600 mb-6">{job.description}</p>
                    </div>
                    <Button
                      onClick={() => handleApply(job.title)}
                      variant="outline"
                      className="w-full rounded-full border-[#FBE0D4] hover:bg-[#FF5422] hover:text-white hover:border-[#FF5422]"
                    >
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(categoryFilter === "all" || categoryFilter === "sales") && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141210] mb-8">
                Sales &amp; Marketing Roles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterList(salesJobs).map((job) => (
                  <div
                    key={job.id}
                    className="rounded-2xl border border-[#FBE0D4] bg-white p-6 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:border-[#FF5422]/40 transition-all"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#141210] text-white flex items-center justify-center">
                          <job.icon className="h-5 w-5 text-[#FF5422]" />
                        </div>
                        <Badge variant="outline" className="border-[#FBE0D4] bg-[#FFF8F5] text-stone-700">
                          <MapPin className="h-3 w-3 mr-1 text-[#FF5422]" />
                          {job.location}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-[#141210] mb-2">{job.title}</h3>
                      <p className="text-sm text-stone-600 mb-6">{job.description}</p>
                    </div>
                    <Button
                      onClick={() => handleApply(job.title)}
                      variant="outline"
                      className="w-full rounded-full border-[#FBE0D4] hover:bg-[#FF5422] hover:text-white hover:border-[#FF5422]"
                    >
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="dv-dot-bg py-16">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-3xl text-center">
          <div className="rounded-3xl border border-[#FBE0D4] bg-white p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141210] mb-3">Ready to Apply?</h2>
            <p className="text-stone-600 mb-8 text-sm sm:text-base">
              Don&apos;t see an exact fit? Send us your profile anyway — we&apos;re always excited
              to meet builders.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button
                onClick={() => handleApply("General Application")}
                className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white"
              >
                <Phone className="mr-2 h-4 w-4" /> Apply via WhatsApp
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-stone-200"
                onClick={() => {
                  navigator.clipboard.writeText(SITE_CONFIG.email);
                  toast.success("Email copied to clipboard!");
                }}
              >
                <Mail className="mr-2 h-4 w-4 text-[#FF5422]" /> {SITE_CONFIG.email}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
