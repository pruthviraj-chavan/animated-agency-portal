import type { Metadata } from "next";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { DevelopmentKitClient } from "@/components/sections/DevelopmentKitClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "Developer Tools & System Simulators Kit";
const DESC =
  "Free browser-based developer utilities: JSON formatter, UUID generator, JWT decoder, regex tester and distributed systems visualizers.";

export const metadata: Metadata = buildPageMetadata({
  path: "/development-kit",
  title: TITLE,
  description: DESC,
});

export default function DevelopmentKitPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/development-kit" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Developer Kit", path: "/development-kit" },
          ]),
        ]}
      />
      <SiteNav />
      <DevelopmentKitClient />
      <SiteFooter />
    </div>
  );
}
