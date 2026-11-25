import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  Brain,
  Calendar,
  CheckCircle,
  Code,
  MessageSquare,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import {
  AgenticTrainingInquiryForm,
  ScrollToInquiryButton,
} from "@/components/services/TrainingInteractive";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  buildWebPageSchema,
} from "@/lib/seo/schema";

const TITLE = "Agentic AI & Vibe Coding Training Program";
const DESC =
  "Hands-on technical training covering autonomous AI agents, tool calling, workflow automation and AI-assisted full-stack engineering.";

export const metadata: Metadata = buildPageMetadata({
  path: "/services/agentic-ai-training",
  title: TITLE,
  description: DESC,
});

const upcomingBatches = [
  {
    name: "Agentic AI Fundamentals",
    date: "Next Cohort Open",
    duration: "4 weeks",
    mode: "Online",
    price: "$99",
  },
  {
    name: "Vibe Coding Masterclass",
    date: "Next Cohort Open",
    duration: "3 weeks",
    mode: "Hybrid",
    price: "$99",
  },
  {
    name: "Complete AI Automation Bundle",
    date: "Next Cohort Open",
    duration: "8 weeks",
    mode: "Online",
    price: "$199",
  },
];

export default function AgenticAITrainingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({
            title: TITLE,
            description: DESC,
            path: "/services/agentic-ai-training",
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Agentic AI Training", path: "/services/agentic-ai-training" },
          ]),
          buildServiceSchema({
            name: TITLE,
            description: DESC,
            path: "/services/agentic-ai-training",
            serviceType: "AI Engineering Training",
          }),
        ]}
      />
      <SiteNav />

      <main className="flex-grow pt-24">
        <section className="dv-dot-bg py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
                  AI Engineering Program
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#141210] mb-5">
                  Master Agentic AI &amp; <span className="text-[#FF5422]">Vibe Coding</span>
                </h1>
                <p className="text-base sm:text-lg text-stone-600 mb-8 leading-relaxed">
                  Learn to architect autonomous agents, automate business workflows, and build
                  full-stack applications with modern AI tooling.
                </p>
                <div className="flex flex-wrap gap-3">
                  <ScrollToInquiryButton
                    label="Enroll Now"
                    className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white px-7"
                  />
                  <Button size="lg" variant="outline" asChild className="rounded-full border-stone-200">
                    <Link href="/contact">Talk to Instructors</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-3xl border border-[#FBE0D4] bg-[#FFF5F1] p-10 flex flex-col items-center justify-center text-center shadow-sm">
                <div className="w-36 h-36 rounded-full bg-[#FF5422] text-white flex items-center justify-center shadow-xl mb-6">
                  <Brain className="w-16 h-16" />
                </div>
                <p className="font-bold text-xl text-[#141210]">Hands-On Agent Architecture</p>
                <p className="text-sm text-stone-600 mt-2 max-w-xs">
                  Build production tool-calling agents, RAG pipelines, and automated API workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-100 bg-[#FFF8F5] py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#141210] mb-12">
              Why Learn With <span className="text-[#FF5422]">dieVekter?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: "Hands-on Training", desc: "Build real AI workflows and projects." },
                { icon: Users, title: "Practitioners", desc: "Learn from engineers shipping AI daily." },
                { icon: MessageSquare, title: "Peer Community", desc: "Project feedback and live Q&A." },
                { icon: Sparkles, title: "Beginner Friendly", desc: "Clear progression from fundamentals." },
              ].map((item) => (
                <Card key={item.title} className="border-[#FBE0D4] bg-white rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#FFF4F0] text-[#FF5422] flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#141210] mb-1.5">{item.title}</h3>
                    <p className="text-sm text-stone-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="dv-dot-bg py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-[#141210] mb-12">
              Curriculum Tracks
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-[#FBE0D4] bg-white rounded-2xl shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-11 h-11 rounded-xl bg-[#FF5422] text-white flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-xl text-[#141210]">Agentic AI Automation</CardTitle>
                  </div>
                  <CardDescription>
                    Design autonomous agents that reason, call APIs, and execute business workflows.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Autonomous agent foundations",
                      "Tool calling, RAG & memory",
                      "Multi-agent orchestration",
                      "Production guardrails & deployment",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-stone-700">
                        <CheckCircle className="h-4 w-4 text-[#FF5422] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#FBE0D4] bg-white rounded-2xl shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-11 h-11 rounded-xl bg-[#141210] text-white flex items-center justify-center">
                      <Code className="w-5 h-5 text-[#FF5422]" />
                    </div>
                    <CardTitle className="text-xl text-[#141210]">AI-Assisted Engineering</CardTitle>
                  </div>
                  <CardDescription>
                    Ship web apps, APIs, and full products faster using structured AI workflows.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {[
                      "Rapid architecture & prototyping",
                      "API integration with AI assistants",
                      "Automated testing & code review",
                      "Shipping clean production apps",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-stone-700">
                        <CheckCircle className="h-4 w-4 text-[#FF5422] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-[#141210] mb-12">
              Programs &amp; Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingBatches.map((batch) => (
                <Card key={batch.name} className="border-[#FBE0D4] bg-white rounded-2xl shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Calendar className="w-5 h-5 text-[#FF5422]" />
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FFF4F0] text-[#FF5422]">
                        {batch.mode}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-[#141210]">{batch.name}</CardTitle>
                    <CardDescription>Duration: {batch.duration}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Schedule:</span>
                      <span className="font-medium">{batch.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">Tuition:</span>
                      <span className="font-bold text-lg text-[#FF5422]">{batch.price}</span>
                    </div>
                    <ScrollToInquiryButton
                      label="Reserve Seat"
                      showIcon={false}
                      className="w-full rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="inquiry" className="dv-dot-bg py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-xl">
            <AgenticTrainingInquiryForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
