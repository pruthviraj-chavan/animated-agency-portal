import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Database,
  FileText,
  GraduationCap,
  MessageCircle,
  MessageSquare,
  Network,
  Phone,
  Receipt,
  Shield,
  Star,
  Store,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/home2/CtaBand";
import { SeoHead } from "@/components/seo/SeoHead";

const attendanceFeatures = [
  "Biometric Integration",
  "Mobile App Support",
  "Real-time Analytics",
  "Automated Reports",
  "Multi-location Support",
  "Cloud Backup",
];

const crmFeatures = [
  "WhatsApp Integration",
  "Lead Management",
  "Customer Segmentation",
  "Automated Follow-ups",
  "Sales Pipeline",
  "Performance Analytics",
];

const alumniFeatures = [
  "Alumni Directory",
  "Event Management",
  "Job Board Integration",
  "Donation Management",
  "Networking Tools",
  "Success Stories",
];

const slackMigrationFeatures = [
  "End-to-end Migration",
  "Secure Data Transfer",
  "Messages & Channels",
  "Files & Attachments",
  "User Data Migration",
  "Zero Data Loss Guarantee",
];

const billingStockFeatures = [
  "Smart Billing System",
  "AI Demand Prediction",
  "Low-stock Alerts",
  "Sales Analytics",
  "Multi-store Support",
  "Retail-ready Interface",
];

export default function Products() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <SeoHead
        path="/products"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ]}
      />
      <SiteNav />
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="dv-dot-bg py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
              Flagship Software
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141210] mb-5">
              Our <span className="text-[#FF5422]">Products</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Ready-to-deploy software products designed to streamline operations, customer
              communication, and retail billing.
            </p>
          </div>
        </section>

        {/* Products List */}
        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 space-y-20">
            {/* 1. Attendance Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#FFF4F0] text-[#FF5422] border border-[#FBE0D4]">
                  Education &amp; Business
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#141210]">
                  Attendance Management System
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Streamline attendance tracking for schools, coaching centers, and training
                  institutes with automated reports and multi-location support.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {attendanceFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-[#FF5422] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white">
                    <Link to="/contact">
                      Get Started <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-[#FBE0D4] bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF5422] text-white flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#141210]">Key Features</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Calendar, t: "Smart Scheduling", d: "Automated timetable management" },
                    { icon: BarChart3, t: "Analytics Dashboard", d: "Real-time attendance insights" },
                    { icon: Shield, t: "Secure & Reliable", d: "Role-based access & cloud backup" },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFF8F5] border border-[#FBE0D4]"
                    >
                      <item.icon className="w-5 h-5 text-[#FF5422] shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-[#141210]">{item.t}</p>
                        <p className="text-xs text-stone-500">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. CRM Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl border border-[#FBE0D4] bg-white p-6 sm:p-8 shadow-sm lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF5422] text-white flex items-center justify-center">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#141210]">CRM Capabilities</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Phone, t: "Multi-Channel Sync", d: "WhatsApp, SMS & Email unified" },
                    { icon: Database, t: "Customer Database", d: "Centralized pipeline visibility" },
                    { icon: Clock, t: "Follow-up Automation", d: "Scheduled reminders & routing" },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFF8F5] border border-[#FBE0D4]"
                    >
                      <item.icon className="w-5 h-5 text-[#FF5422] shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-[#141210]">{item.t}</p>
                        <p className="text-xs text-stone-500">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 lg:order-2">
                <Badge className="bg-[#FFF4F0] text-[#FF5422] border border-[#FBE0D4]">
                  Business Communication
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#141210]">
                  Professional CRM Solution
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Move beyond scattered chats with a structured CRM built for growing teams. Manage
                  leads, sales stages, and automated follow-ups seamlessly.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {crmFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-[#FF5422] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white">
                  <Link to="/contact">
                    Schedule Demo <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* 3. Alumni Portal */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[#FFF4F0] text-[#FF5422] border border-[#FBE0D4]">
                  Higher Education
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#141210]">
                  Alumni Portal Platform
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Connect and engage graduates across batches with directory search, events, job
                  referrals, and community updates.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {alumniFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-[#FF5422] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white">
                  <Link to="/contact">
                    Request Demo <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
              </div>

              <div className="rounded-2xl border border-[#FBE0D4] bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF5422] text-white flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#141210]">Alumni Features</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Network, t: "Alumni Network", d: "Connect graduates across cohorts" },
                    { icon: Briefcase, t: "Career Services", d: "Job opportunities and mentorship" },
                    { icon: Star, t: "Achievement Tracking", d: "Showcase alumni milestones" },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFF8F5] border border-[#FBE0D4]"
                    >
                      <item.icon className="w-5 h-5 text-[#FF5422] shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-[#141210]">{item.t}</p>
                        <p className="text-xs text-stone-500">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Slack Data Migration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl border border-[#FBE0D4] bg-white p-6 sm:p-8 shadow-sm lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF5422] text-white flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5422]">
                      Enterprise Service
                    </span>
                    <h3 className="text-xl font-bold text-[#141210]">Migration Capabilities</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: FileText, t: "Complete History", d: "Channels, DMs, and threads preserved" },
                    { icon: Shield, t: "Data Integrity", d: "Verified end-to-end transfer" },
                    { icon: Zap, t: "Minimal Downtime", d: "Smooth transition for teams of any size" },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFF8F5] border border-[#FBE0D4]"
                    >
                      <item.icon className="w-5 h-5 text-[#FF5422] shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-[#141210]">{item.t}</p>
                        <p className="text-xs text-stone-500">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 lg:order-2">
                <Badge className="bg-[#FFF4F0] text-[#FF5422] border border-[#FBE0D4]">
                  Professional Service
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#141210]">
                  Slack Data Migration
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  End-to-end Slack workspace data migration with guaranteed accuracy — securely
                  transferring messages, channels, files, and users.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {slackMigrationFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-[#FF5422] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white">
                  <Link to="/contact">
                    Get Quote <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* 5. AI Billing & Stock Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#FF5422] text-white border-0">Flagship SaaS</Badge>
                  <Badge variant="outline" className="border-[#FBE0D4] bg-white text-stone-700">
                    <Store className="w-3 h-3 mr-1 text-[#FF5422]" /> Active in 3 Shops
                  </Badge>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#141210]">
                  AI-Powered Billing &amp; Stock Management
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Currently powering active clothing shops with fast barcode billing, automated
                  inventory tracking, and AI-driven demand forecasting.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {billingStockFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-[#FF5422] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl border border-[#FBE0D4] bg-white">
                  <div className="text-center">
                    <p className="text-2xl font-black text-[#FF5422]">3</p>
                    <p className="text-xs text-stone-500">Active Stores</p>
                  </div>
                  <div className="text-center border-x border-stone-100">
                    <p className="text-2xl font-black text-[#FF5422]">99.9%</p>
                    <p className="text-xs text-stone-500">Uptime</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-black text-[#FF5422]">24/7</p>
                    <p className="text-xs text-stone-500">Support</p>
                  </div>
                </div>
                <Button asChild className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white">
                  <Link to="/contact">
                    Start Free Trial <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
              </div>

              <div className="rounded-2xl border border-[#FBE0D4] bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FF5422] text-white flex items-center justify-center">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#141210]">Smart Retail Features</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Receipt, t: "Smart Billing", d: "Fast checkout with barcode scanning" },
                    { icon: TrendingUp, t: "AI Predictions", d: "Demand forecasting & trend signals" },
                    { icon: Bell, t: "Smart Alerts", d: "Low-stock notifications & reorder points" },
                    { icon: Building2, t: "Multi-Store", d: "Manage multiple outlets from one view" },
                  ].map((item) => (
                    <div
                      key={item.t}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFF8F5] border border-[#FBE0D4]"
                    >
                      <item.icon className="w-5 h-5 text-[#FF5422] shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-[#141210]">{item.t}</p>
                        <p className="text-xs text-stone-500">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="dv-dot-bg py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-4">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141210] mb-3">
              Simple, Transparent Pricing
            </h2>
            <p className="text-stone-600 mb-12 max-w-xl mx-auto">
              Choose the plan that fits your organization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Attendance System", price: "$99", unit: "/month", desc: "Perfect for institutes", highlight: false },
                { name: "CRM Solution", price: "$149", unit: "/month", desc: "Complete business pipeline", highlight: false },
                { name: "Alumni Portal", price: "$199", unit: "/month", desc: "Connect your alumni community", highlight: false },
                { name: "Slack Migration", price: "Custom", unit: " pricing", desc: "Based on workspace size", highlight: false },
                { name: "AI Billing & Stock", price: "$79", unit: "/month", desc: "Most popular for retail & clothing shops", highlight: true },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-7 text-center flex flex-col justify-between transition-all ${
                    plan.highlight
                      ? "dv-dot-orange text-white shadow-lg md:col-span-2 lg:col-span-2"
                      : "border border-[#FBE0D4] bg-white text-[#141210] shadow-sm"
                  }`}
                >
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-4 text-3xl font-black">
                      {plan.price}
                      <span className="text-sm font-medium opacity-80">{plan.unit}</span>
                    </div>
                    <p
                      className={`mt-2 text-sm ${
                        plan.highlight ? "text-white/90" : "text-stone-500"
                      }`}
                    >
                      {plan.desc}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                        plan.highlight
                          ? "bg-[#141210] text-white hover:bg-black"
                          : "bg-[#FF5422] text-white hover:bg-[#e8460e]"
                      }`}
                    >
                      Choose Plan
                    </Link>
                  </div>
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
