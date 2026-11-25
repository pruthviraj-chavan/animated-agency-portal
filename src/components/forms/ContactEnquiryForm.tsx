"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONFIG } from "@/config/site";
import {
  trackEnquiryVerticalSelect,
  trackLeadSubmission,
  type AnalyticsVertical,
} from "@/lib/analytics/gtag";
import { enquirySchema } from "@/lib/validation/enquiry";
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

export function ContactEnquiryForm() {
  const [vertical, setVertical] = useState<AnalyticsVertical>("technology");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    companyWebsite: "",
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
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
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setErrorMsg(null);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const parsed = enquirySchema.safeParse({
      ...formData,
      vertical,
      category: vertical === "study_abroad" ? "study-abroad" : "general-consultation",
    });

    if (!parsed.success) {
      const firstErr = parsed.error.issues[0]?.message || "Please check your form details";
      setErrorMsg(firstErr);
      toast.error(firstErr);
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

    let whatsappUrl = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
      `New ${activeVerticalLabel} Enquiry from dievekter.tech:\nName: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone || "Not provided"}\nVertical: ${activeVerticalLabel}\nMessage: ${parsed.data.message}`,
    )}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (res.ok) {
        const json = (await res.json()) as { whatsappUrl?: string };
        if (json.whatsappUrl) whatsappUrl = json.whatsappUrl;
      }
    } catch {
      // Fallback to direct client-generated WhatsApp handoff if offline/network interrupted
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Enquiry validated! Opening WhatsApp with your structured brief.");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    window.setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "", companyWebsite: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="rounded-2xl border border-[#FBE0D4] bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#141210] mb-2">Send an Enquiry</h2>
      <p className="text-xs text-stone-500 mb-6">
        Select whether you need Technology Engineering or Study Abroad guidance.
      </p>

      <div className="mb-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {VERTICAL_OPTIONS.map((opt) => {
          const selected = vertical === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              aria-pressed={selected}
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

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Honeypot anti-spam field hidden from real visitors */}
        <input
          type="text"
          name="companyWebsite"
          value={formData.companyWebsite}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        {errorMsg && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-medium text-red-700"
          >
            {errorMsg}
          </div>
        )}

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
          <label htmlFor="message" className="block text-sm font-medium text-[#141210] mb-1.5">
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
              isSubmitted ? "bg-emerald-600 hover:bg-emerald-600" : "bg-[#FF5422] hover:bg-[#e8460e]",
            )}
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Enquiry...
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
            Submitting validates your enquiry and opens WhatsApp with your brief. See our{" "}
            <Link href="/privacy" className="underline hover:text-[#FF5422]">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline hover:text-[#FF5422]">
              Terms
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
