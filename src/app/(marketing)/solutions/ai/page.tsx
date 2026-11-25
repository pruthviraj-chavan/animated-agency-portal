import type { Metadata } from "next";
import { SolutionPage } from "@/components/dv/SolutionPage";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: "/solutions/ai",
  title: "AI Solutions | Multilingual Voice AI, RAG Assistants & LLM Systems",
  description:
    "Deploy production AI voice agents, Hindi/Marathi/English chat assistants and enterprise RAG pipelines connected to your CRM.",
});

export default function AISolutionsPage() {
  return (
    <SolutionPage
      path="/solutions/ai"
      serviceType="AI Agents and Voice Solutions"
      eyebrow="AI Solutions"
      title={
        <>
          Multilingual <span className="dv-text-gradient">AI agents</span> that complete real work
        </>
      }
      intro="We design conversational and voice AI systems that understand Indian languages and code-mixed speech, then take action inside your CRM, database and workflows."
      blocks={[
        {
          title: "Voice & chat agents",
          desc: "Agents that handle inbound and outbound conversations across phone, WhatsApp and web.",
          bullets: ["Speech-to-text & TTS", "Interruption-safe dialogue", "Human escalation paths"],
        },
        {
          title: "Knowledge assistants",
          desc: "RAG systems grounded in your documents, catalogues and policies — answers with sources.",
          bullets: ["Vector search", "Document ingestion", "Citation & confidence handling"],
        },
        {
          title: "Agentic workflows",
          desc: "Agents with tools: they book, update, route and notify instead of only replying.",
          bullets: ["Tool & API calling", "Guardrails and approvals", "Audit trails"],
        },
      ]}
      outcomes={[
        "Customer queries answered 24/7 in Hindi, English and code-mixed conversations.",
        "Lower cost per interaction without a drop in service quality.",
        "Leads qualified and written into CRM without manual data entry.",
        "Consistent, auditable responses across every channel.",
      ]}
    />
  );
}
