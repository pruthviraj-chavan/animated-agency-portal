import type { Metadata } from "next";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { AIAgentsLibraryClient } from "@/components/sections/AIAgentsLibraryClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "AI Prompt & Agent Templates Library";
const DESC =
  "Interactive prompt library and workflow blueprints for marketing, operations, customer support and coding productivity.";

export const metadata: Metadata = buildPageMetadata({
  path: "/ai-agents-library",
  title: TITLE,
  description: DESC,
});

export default function AIAgentsLibraryPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/ai-agents-library" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "AI Agents Library", path: "/ai-agents-library" },
          ]),
        ]}
      />
      <SiteNav />
      <AIAgentsLibraryClient />
      <SiteFooter />
    </div>
  );
}
