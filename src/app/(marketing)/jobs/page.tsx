import type { Metadata } from "next";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { JobsClient } from "@/components/careers/JobsClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "Careers & Open Roles";
const DESC = "Explore engineering, AI and growth opportunities with the dieVekter team.";

export const metadata: Metadata = buildPageMetadata({
  path: "/jobs",
  title: TITLE,
  description: DESC,
});

export default function JobsPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/jobs" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Jobs", path: "/jobs" },
          ]),
        ]}
      />
      <SiteNav />
      <JobsClient />
      <SiteFooter />
    </div>
  );
}
