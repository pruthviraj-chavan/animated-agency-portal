import type { Metadata } from "next";
import { CheckCircle2, HelpCircle, Users, Wallet } from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { ReferWhatsAppButton } from "@/components/services/TrainingInteractive";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_CONFIG } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "Partner & Client Referral Program";
const DESC = "Refer technology or software projects to dieVekter.";

export const metadata: Metadata = buildPageMetadata({
  path: "/services/refer",
  title: TITLE,
  description: DESC,
  noindex: true,
});

export default function ReferPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/services/refer" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Refer", path: "/services/refer" },
          ]),
        ]}
      />
      <SiteNav />
      <main className="flex-grow pt-24">
        <section className="dv-dot-bg py-16 sm:py-24 text-center">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-3xl">
            <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-5">
              Referral Program
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#141210] mb-5">
              Refer &amp; Earn <span className="text-[#FF5422]">10%–15%</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-600 mb-8">
              Know someone who needs a website, AI agent, or custom software? Refer them to
              dieVekter and earn a 10% to 15% commission on the confirmed project value.
            </p>
            <ReferWhatsAppButton
              label="Refer Someone Now"
              className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white px-8"
            />
          </div>
        </section>

        <section className="border-t border-stone-100 bg-[#FFF8F5] py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#141210]">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "1. Make a Referral",
                  desc: "Introduce us to someone who needs software, websites, or AI automation.",
                },
                {
                  icon: CheckCircle2,
                  title: "2. We Close the Deal",
                  desc: "We handle consultation, scope, architecture, and full project delivery.",
                },
                {
                  icon: Wallet,
                  title: "3. Earn Commission",
                  desc: "Once the project is confirmed, receive your 10–15% payout directly.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-[#FBE0D4] bg-white p-6 text-center shadow-sm"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#FF5422] text-white flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#141210] mb-2">{step.title}</h3>
                  <p className="text-sm text-stone-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dv-dot-bg py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#141210]">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "How much can I earn?",
                  a: "Earn between 10% to 15% of the total project value (e.g. ₹10,000–₹15,000 on a ₹1,00,000 project).",
                },
                {
                  q: "When do I get paid?",
                  a: "Within 7 business days once the project is confirmed and the initial payment clears.",
                },
                {
                  q: "Is there a limit to referrals?",
                  a: "None at all — you can refer as many clients and teams as you'd like.",
                },
                {
                  q: "How do I refer someone?",
                  a: `Message us on WhatsApp at ${SITE_CONFIG.telephone} with their contact details or ask them to mention your name.`,
                },
              ].map((faq) => (
                <Card key={faq.q} className="border-[#FBE0D4] bg-white rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-[#141210]">
                      <HelpCircle className="h-5 w-5 text-[#FF5422]" />
                      {faq.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-stone-600">{faq.a}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8">
            <div className="dv-dot-orange max-w-4xl mx-auto rounded-3xl p-10 text-center text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Referring?</h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                No complicated signups — just introduce someone who needs great engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <ReferWhatsAppButton
                  label="Refer Someone Now"
                  showArrow
                  className="rounded-full bg-[#141210] hover:bg-black text-white px-7"
                />
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full border-white text-white bg-transparent hover:bg-white/10"
                >
                  <a href={`tel:${SITE_CONFIG.telephoneE164}`}>Call Us Directly</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
