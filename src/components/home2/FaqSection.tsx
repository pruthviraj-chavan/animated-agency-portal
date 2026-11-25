import Link from "next/link";
import type { FaqSchemaItem } from "@/lib/seo/schema";
import { FaqAccordion } from "@/components/seo/FaqAccordion";

export const HOME_FAQS: FaqSchemaItem[] = [
  {
    question: "What technology services does DieVekter Tech build?",
    answer:
      "DieVekter Tech builds custom React and WordPress websites, e-commerce stores, cross-platform Android/iOS mobile apps, bespoke software and retail billing systems, multilingual AI agents (Hindi, Marathi, Hinglish and English), AI chatbots, CRM/workflow automation, API integrations and cloud backends.",
  },
  {
    question: "Does DieVekter Tech offer Study Abroad Consultancy for Germany and other countries?",
    answer:
      "Yes. Alongside software engineering, we provide structured Study Abroad Consultancy supporting Indian students with country and university shortlisting, Study in Germany orientation, application document preparation, student visa checklist organisation and pre-departure guidance.",
  },
  {
    question: "Where is DieVekter Tech located, and do you work with clients outside Kolhapur?",
    answer:
      "DIEVEKTER (dieVekter) is registered in Radhanagari, Kolhapur, Maharashtra (UDYAM-MH-15-0320983) and works with clients and students across Kolhapur, Pune, Mumbai, across India, and internationally via remote collaboration.",
  },
  {
    question: "Can dieVekter automate existing WhatsApp, CRM and spreadsheet workflows?",
    answer:
      "Yes. We integrate website lead forms, WhatsApp notifications, CRM pipelines, billing systems and internal dashboards using custom APIs and webhook workflows so manual copy-pasting and follow-up delays are eliminated.",
  },
  {
    question: "Does dieVekter guarantee university admission or student visa approval?",
    answer:
      "No ethical consultancy can guarantee admissions or visas. Admission decisions belong exclusively to universities and student visa approvals rest solely with the respective embassies or consulates. We ensure your applications and checklists strictly follow official guidelines such as DAAD, APS India and German mission instructions.",
  },
  {
    question: "How can I start a software project or book a Study Abroad consultation?",
    answer:
      "You can submit a brief on our Contact page, message us on WhatsApp at +91 94048 95667, or email team.dievekter@gmail.com. Select whether your enquiry relates to Technology Solutions or Study Abroad Consultancy so the right team responds with next steps.",
  },
];

export function FaqSection() {
  return (
    <section
      className="border-t border-stone-100 bg-[#FFF8F5] py-16 sm:py-24"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            Common Questions
          </span>
          <h2
            id="faq-heading"
            className="mt-4 font-bold tracking-tight text-[#141210]"
            style={{ fontSize: "clamp(26px, 3.6vw, 42px)", lineHeight: 1.1 }}
          >
            Answers across Technology &amp;{" "}
            <span className="text-[#FF5422]">Study Abroad.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
            Straightforward details on how we scope software engineering engagements and guide
            overseas education applications.
          </p>
        </div>

        <FaqAccordion items={HOME_FAQS} tone="white" />

        <div className="mt-8 text-center text-xs sm:text-sm text-stone-500">
          Have a specific question?{" "}
          <Link
            href="/contact"
            className="font-semibold text-[#141210] underline underline-offset-4 hover:text-[#FF5422]"
          >
            Contact the dieVekter team
          </Link>{" "}
          or explore our{" "}
          <Link
            href="/study-abroad/student-resources"
            className="font-semibold text-[#141210] underline underline-offset-4 hover:text-[#FF5422]"
          >
            Study Abroad FAQs &amp; resources
          </Link>
          .
        </div>
      </div>
    </section>
  );
}
