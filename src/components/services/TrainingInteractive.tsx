"use client";

import { useState } from "react";
import { ArrowRight, Calendar, Play } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONFIG } from "@/config/site";

export function BookWorkshopButton({
  label = "Book a Workshop",
  className,
}: {
  label?: string;
  className?: string;
}) {
  const handleBookWorkshop = () => {
    window.open(
      `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
        "Hi, I'm interested in booking an AI Training Workshop for our school. Please share more details.",
      )}`,
      "_blank",
    );
  };

  return (
    <Button size="lg" className={className} onClick={handleBookWorkshop}>
      <Calendar className="w-4 h-4 mr-2" /> {label}
    </Button>
  );
}

export function ScrollToInquiryButton({
  label = "Enroll Now",
  className,
  showIcon = true,
}: {
  label?: string;
  className?: string;
  showIcon?: boolean;
}) {
  return (
    <Button
      size="lg"
      className={className}
      onClick={() => document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" })}
    >
      {showIcon && <Play className="mr-2 h-4 w-4" />}
      {label}
    </Button>
  );
}

export function AgenticTrainingInquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please enter your name and email");
      return;
    }
    const text = `Agentic AI Training Inquiry\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.open(`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Opening WhatsApp with your training inquiry!");
  };

  return (
    <Card className="border-[#FBE0D4] bg-white rounded-2xl shadow-sm p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-center text-[#141210] mb-2">Get Program Details</h2>
      <p className="text-sm text-center text-stone-600 mb-6">
        Send your details and we&apos;ll share the syllabus and upcoming cohort dates.
      </p>
      <form onSubmit={handleInquiry} className="space-y-4">
        <div>
          <Label htmlFor="t-name">Full Name</Label>
          <Input
            id="t-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <Label htmlFor="t-email">Email Address</Label>
          <Input
            id="t-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <Label htmlFor="t-msg">Goals / Questions</Label>
          <Textarea
            id="t-msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you want to learn..."
          />
        </div>
        <Button type="submit" className="w-full rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white">
          Send Inquiry <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Card>
  );
}

export function ReferWhatsAppButton({
  label = "Refer Someone Now",
  className,
  showArrow = false,
}: {
  label?: string;
  className?: string;
  showArrow?: boolean;
}) {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
      "Hi, I'd like to refer someone for your services.",
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button onClick={handleWhatsAppClick} size="lg" className={className}>
      {label}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  );
}
