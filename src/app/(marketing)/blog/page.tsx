import type { Metadata } from "next";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { BlogArchiveClient } from "@/components/blog/BlogArchiveClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "Journal | Software, AI Agents, Automation & Study Abroad Guides";
const DESC =
  "Practical engineering guides, AI implementation articles and verified Study in Germany & overseas education resources by DieVekter Tech.";

export const metadata: Metadata = buildPageMetadata({
  path: "/blog",
  title: TITLE,
  description: DESC,
});

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/blog" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <SiteNav />
      <BlogArchiveClient />
      <SiteFooter />
    </div>
  );
}
