import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Bot,
  Calendar,
  CheckCircle,
  Database,
  FileText,
  Heart,
  Mail,
  MessageCircle,
  MessageSquare,
  Mic,
  Scale,
  Search,
  Settings,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { AIWorkflowDiagram } from "@/components/dv/AIWorkflowDiagram";
import { CtaBand } from "@/components/home2/CtaBand";
import { SeoHead } from "@/components/seo/SeoHead";
import { buildServiceSchema } from "@/data/seoConfig";

const agentCategories = [
  {
    id: "business",
    title: "Business & Productivity Agents",
    description: "Streamline operations and automate customer workflows.",
    agents: [
      {
        title: "AI Customer Support Agent",
        description:
          "Instantly answers customer queries across chat, email, and support tickets, reducing response time and support costs.",
        icon: MessageCircle,
        features: ["24/7 instant responses", "Multi-channel support", "Ticket auto-routing", "Sentiment analysis"],
      },
      {
        title: "AI Sales Assistant",
        description:
          "Engages leads on your site or WhatsApp, qualifies them, and books meetings automatically with your sales team.",
        icon: Target,
        features: ["Lead qualification", "Meeting scheduling", "CRM integration", "Follow-up automation"],
      },
      {
        title: "AI Meeting Summarizer",
        description:
          "Transcribes discussions and sends smart summaries and action items to all participants.",
        icon: Calendar,
        features: ["Auto transcription", "Smart summaries", "Action item extraction", "Meeting insights"],
      },
      {
        title: "AI Email Responder",
        description:
          "Automatically drafts and sends context-aware email replies tailored to your tone.",
        icon: Mail,
        features: ["Context-aware replies", "Tone matching", "Auto-scheduling", "Priority filtering"],
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Content Agents",
    description: "Amplify content workflows with AI tailored to your brand.",
    agents: [
      {
        title: "AI Content Creator",
        description:
          "Generates SEO blogs, social media posts, and product copy aligned to your brand voice.",
        icon: FileText,
        features: ["SEO optimization", "Brand voice matching", "Trend analysis", "Multi-format content"],
      },
      {
        title: "AI Social Media Manager",
        description: "Plans, schedules, and analyzes engagement for consistent growth.",
        icon: TrendingUp,
        features: ["Content scheduling", "Engagement analytics", "Growth strategies", "Hashtag optimization"],
      },
      {
        title: "AI Ad Optimizer",
        description: "Creates, tests, and refines ad campaigns to improve campaign ROI.",
        icon: Target,
        features: ["A/B testing", "ROI optimization", "Audience targeting", "Budget allocation"],
      },
    ],
  },
  {
    id: "knowledge",
    title: "Knowledge & Research Agents",
    description: "Turn documents and spreadsheets into instant answers.",
    agents: [
      {
        title: "AI Research Assistant",
        description: "Synthesizes reports, papers, and documentation with cited takeaways.",
        icon: Search,
        features: ["Deep research", "Document parsing", "Content summarization", "Source citation"],
      },
      {
        title: "AI Data Analyst Agent",
        description: "Explains trends, anomalies, and metrics from spreadsheets in plain language.",
        icon: Database,
        features: ["Trend analysis", "Anomaly detection", "Visual insights", "Plain language reports"],
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Agents",
    description: "Boost store conversion and reduce cart abandonment.",
    agents: [
      {
        title: "AI Shopping Assistant",
        description: "Helps shoppers discover products based on preferences and sizing.",
        icon: ShoppingCart,
        features: ["Product recommendations", "Preference matching", "FAQ automation", "Cart recovery"],
      },
      {
        title: "AI Review Insights",
        description: "Summarizes customer feedback trends to surface product improvements.",
        icon: Star,
        features: ["Feedback clustering", "Product analysis", "Sentiment tracking", "Conversion insights"],
      },
    ],
  },
  {
    id: "specialized",
    title: "Specialized Industry Agents",
    description: "Purpose-built assistants for healthcare, legal, and talent teams.",
    agents: [
      {
        title: "AI Healthcare Assistant",
        description: "Handles clinic appointments, triage FAQs, and patient reminders.",
        icon: Heart,
        features: ["Symptom guidance", "Appointment booking", "Medical FAQs", "Patient support"],
      },
      {
        title: "AI Legal Document Assistant",
        description: "Drafts standard contracts, NDAs, and checklists from vetted templates.",
        icon: Scale,
        features: ["Contract drafting", "Legal templates", "Custom inputs", "Clause checks"],
      },
      {
        title: "AI Resume Screener",
        description: "Filters candidates transparently against role requirements.",
        icon: UserCheck,
        features: ["Resume parsing", "Candidate ranking", "Skill matching", "Structured scorecards"],
      },
      {
        title: "Multilingual Voice Coach",
        description: "Natural voice conversations across Hindi, Marathi, Hinglish, and English.",
        icon: Mic,
        features: ["Low-latency voice", "Regional accents", "Escalation handoff", "Call summaries"],
      },
    ],
  },
];

const integrations = [
  "WhatsApp Business",
  "Slack",
  "Salesforce",
  "HubSpot",
  "Zapier",
  "Google Workspace",
  "Shopify",
  "Microsoft Teams",
];

export default function Agents() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <SeoHead
        path="/agents"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "AI Agents", path: "/agents" },
        ]}
        schemas={[
          buildServiceSchema({
            name: "AI Agents & Voice Assistants Suite",
            description:
              "Domain-specific AI sales, support, voice and workflow agents built by DieVekter Tech.",
            path: "/agents",
            serviceType: "AI Agent Development",
          }),
        ]}
      />
      <SiteNav />
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="dv-dot-bg relative overflow-hidden py-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#FF5422]/10 blur-3xl"
          />
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
              AI Agents Suite
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141210] mb-5">
              AI Agents &amp;{" "}
              <span className="text-[#FF5422]">Voice Assistants</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Multilingual automation wired into 500+ business tools — built under your brand with
              dieVekter engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                to="/ai-agents-library"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5422] px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e8460e] transition-colors"
              >
                <MessageSquare className="h-4 w-4" /> Explore Interactive Library
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422] transition-colors"
              >
                Schedule Demo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Collaboration Diagram */}
        <section className="border-y border-stone-100 bg-[#FFF8F5] py-14 sm:py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141210] mb-2">
                How Our AI Agents Work Together
              </h2>
              <p className="text-stone-600 text-sm sm:text-base">
                Coordinated agents routing intent, knowledge, and action in real time
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <AIWorkflowDiagram />
            </div>
          </div>
        </section>

        {/* Agent Categories */}
        <section className="dv-dot-bg py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
            {agentCategories.map((cat) => (
              <div key={cat.id}>
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF5422]">
                    Category
                  </span>
                  <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#141210]">
                    {cat.title}
                  </h2>
                  <p className="mt-1 text-sm text-stone-600">{cat.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.agents.map((agent) => (
                    <div
                      key={agent.title}
                      className="rounded-2xl border border-[#FBE0D4] bg-white p-6 shadow-sm hover:-translate-y-1 hover:border-[#FF5422]/40 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF5422] text-white">
                          <agent.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold text-[#141210]">{agent.title}</h3>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed mb-5">
                        {agent.description}
                      </p>
                      <div className="border-t border-stone-100 pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                          <Settings className="h-3.5 w-3.5 text-[#FF5422]" /> Key Capabilities
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {agent.features.map((f) => (
                            <div key={f} className="flex items-center gap-2 text-xs text-stone-600">
                              <CheckCircle className="h-3.5 w-3.5 text-[#FF5422] shrink-0" />
                              {f}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations & Metrics */}
        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141210] mb-3">
              Seamless Integrations
            </h2>
            <p className="text-stone-600 mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Connect your agents directly with your existing CRM, support desk, and commerce stack.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {integrations.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#FBE0D4] bg-white px-4 py-2 text-xs font-semibold text-[#141210] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { v: "500+", l: "App Integrations" },
                { v: "24/7", l: "Availability" },
                { v: "50+", l: "Languages Supported" },
                { v: "99.9%", l: "Target Uptime" },
              ].map((s) => (
                <div key={s.l} className="dv-dot-orange rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl font-black text-[#141210]">{s.v}</div>
                  <div className="text-xs font-medium text-[#141210]/85 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
