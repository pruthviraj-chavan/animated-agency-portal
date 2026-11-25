import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle, Code, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { SeoHead } from "@/components/seo/SeoHead";
import { buildLocalBusinessSchema } from "@/data/seoConfig";
import {
  AnalyticsVertical,
  trackContactAction,
  trackEnquiryVerticalSelect,
  trackLeadSubmission,
} from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const VERTICAL_OPTIONS: Array<{
  id: AnalyticsVertical;
  label: string;
  helper: string;
}> = [
  {
    id: "technology",
    label: "Technology Solutions",
    helper: "Websites, Mobile Apps, Custom Software, AI Agents & Automation",
  },
  {
    id: "study_abroad",
    label: "Study Abroad Consultancy",
    helper: "Study in Germany, University Shortlisting, Admissions & Visa Checklist",
  },
  {
    id: "general",
    label: "General / Partnership",
    helper: "Workshops, Internships or General Business Enquiries",
  },
];

export default function Contact() {
  const location = useLocation();
  const [vertical, setVertical] = useState<AnalyticsVertical>("technology");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const brief = params.get("brief");
    const vParam = params.get("vertical");
    if (vParam === "study-abroad" || vParam === "study_abroad") {
      setVertical("study_abroad");
    } else if (vParam === "technology") {
      setVertical("technology");
    } else if (brief && /study abroad|germany|abroad study|visa/i.test(brief)) {
      setVertical("study_abroad");
    }
    if (brief) {
      setFormData((prev) => ({ ...prev, message: brief }));
    }
  }, [location.search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields");
      return;
    }
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    const activeVerticalLabel =
      VERTICAL_OPTIONS.find((item) => item.id === vertical)?.label || "General";

    trackLeadSubmission({
      vertical,
      serviceInterest: activeVerticalLabel,
      channel: "whatsapp",
      sourcePage: "/contact",
    });

    const whatsappNumber = "919404895667";
    const text = `New ${activeVerticalLabel} Enquiry from dievekter.tech:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Vertical: ${activeVerticalLabel}
Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Redirecting you to WhatsApp to send your enquiry!");
      window.open(whatsappUrl, "_blank");

      window.setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    }, 600);
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <SeoHead
        path="/contact"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        schemas={[buildLocalBusinessSchema()]}
      />
      <SiteNav />
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="dv-dot-bg relative overflow-hidden py-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#FF5422]/10 blur-3xl"
          />
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141210] mb-5">
              Let&apos;s build or plan{" "}
              <span className="text-[#FF5422]">together.</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Reach DieVekter Tech in Radhanagari, Kolhapur, Maharashtra for custom software, AI
              agents &amp; web engineering or Study Abroad Consultancy across India and globally.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16 sm:py-24">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Info Column */}
              <div>
                <h2 className="text-3xl font-bold text-[#141210] mb-4">Direct Contact Channels</h2>
                <p className="text-stone-600 leading-relaxed mb-8">
                  Reach us directly by WhatsApp, phone or email — serving businesses and students in
                  Kolhapur, Pune, Maharashtra and globally.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: Send,
                      title: "WhatsApp Chat",
                      details: "+91 94048 95667 (Direct WhatsApp)",
                      href: "https://wa.me/919404895667?text=Hi%20Dievekter%20Tech!%20I%27d%20like%20to%20connect.",
                      external: true,
                      track: () => trackContactAction("whatsapp", "/contact", vertical),
                    },
                    {
                      icon: Phone,
                      title: "Call Directly",
                      details: "+91 94048 95667",
                      href: "tel:+919404895667",
                      external: false,
                      track: () => trackContactAction("phone", "/contact", vertical),
                    },
                    {
                      icon: Mail,
                      title: "Email Us",
                      details: "team.dievekter@gmail.com",
                      href: "mailto:team.dievekter@gmail.com",
                      external: false,
                      track: () => trackContactAction("email", "/contact", vertical),
                    },
                    {
                      icon: Code,
                      title: "Instagram",
                      details: "@dievekter_tech",
                      href: "https://www.instagram.com/dievekter_tech/",
                      external: true,
                    },
                    {
                      icon: MapPin,
                      title: "Registered Location & Service Coverage",
                      details:
                        "DIEVEKTER · Radhanagari, Kolhapur, Maharashtra, India (UDYAM-MH-15-0320983 · D-U-N-S 312163123) · Serving Kolhapur, Pune, India & Global Remote Clients",
                      external: false,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-[#FBE0D4] bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF5422] text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#141210]">{item.title}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            onClick={item.track}
                            className="text-sm text-stone-600 hover:text-[#FF5422] transition-colors"
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-sm text-stone-600 leading-relaxed">{item.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Column */}
              <div className="rounded-2xl border border-[#FBE0D4] bg-white p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#141210] mb-2">Send an Enquiry</h2>
                <p className="text-xs text-stone-500 mb-6">
                  Select whether you need Technology Engineering or Study Abroad guidance.
                </p>

                {/* Vertical Selector */}
                <div className="mb-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {VERTICAL_OPTIONS.map((opt) => {
                    const selected = vertical === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setVertical(opt.id);
                          trackEnquiryVerticalSelect(opt.id, "/contact");
                        }}
                        className={cn(
                          "rounded-xl border px-3 py-2.5 text-left transition-colors",
                          selected
                            ? "border-[#FF5422] bg-[#FFF5F1] text-[#141210]"
                            : "border-stone-200 bg-white text-stone-600 hover:border-stone-300",
                        )}
                      >
                        <p className="text-xs font-bold">{opt.label}</p>
                      </button>
                    );
                  })}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#141210] mb-1.5">
                      Your Name <span className="text-[#FF5422]">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="bg-stone-50/70 border-stone-200 focus-visible:ring-[#FF5422]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#141210] mb-1.5">
                      Your Email <span className="text-[#FF5422]">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@domain.com"
                      className="bg-stone-50/70 border-stone-200 focus-visible:ring-[#FF5422]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#141210] mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="bg-stone-50/70 border-stone-200 focus-visible:ring-[#FF5422]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#141210] mb-1.5"
                    >
                      Project Scope or Study Plan <span className="text-[#FF5422]">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={
                        vertical === "study_abroad"
                          ? "Share target intake, preferred country (e.g., Germany), Bachelor's/Master's track..."
                          : "Tell us about your website, app, AI agent or automation goal..."
                      }
                      className="min-h-[130px] bg-stone-50/70 border-stone-200 focus-visible:ring-[#FF5422]"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className={cn(
                        "w-full rounded-full py-6 font-semibold text-white transition-all",
                        isSubmitted
                          ? "bg-emerald-600 hover:bg-emerald-600"
                          : "bg-[#FF5422] hover:bg-[#e8460e]",
                      )}
                      disabled={isSubmitting || isSubmitted}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Connecting to WhatsApp...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Ready to Send via WhatsApp
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Enquiry via WhatsApp
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-stone-500 mt-3">
                      Submitting opens WhatsApp with your structured brief. See our{" "}
                      <Link to="/privacy" className="underline hover:text-[#FF5422]">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link to="/terms" className="underline hover:text-[#FF5422]">
                        Terms
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
