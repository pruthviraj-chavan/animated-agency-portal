import type { Metadata } from "next";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { FunGameClient } from "@/components/sections/FunGameClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "Memory Card Game";
const DESC = "Interactive mini game built by dieVekter.";

export const metadata: Metadata = buildPageMetadata({
  path: "/fun",
  title: TITLE,
  description: DESC,
  noindex: true,
});

export default function FunPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/fun" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Fun", path: "/fun" },
          ]),
        ]}
      />
      <SiteNav />
      <FunGameClient />
      <SiteFooter />
    </div>
  );
}
