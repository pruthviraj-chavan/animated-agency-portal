import type { Metadata } from "next";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { InternshipClient } from "@/components/careers/InternshipClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schema";

const TITLE = "Student Internships in Software & AI";
const DESC =
  "Apply for hands-on Python, React, backend, UI/UX and AI engineering internships at dieVekter.";

export const metadata: Metadata = buildPageMetadata({
  path: "/internship",
  title: TITLE,
  description: DESC,
});

export default function InternshipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({ title: TITLE, description: DESC, path: "/internship" }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Internships", path: "/internship" },
          ]),
        ]}
      />
      <SiteNav />
      <InternshipClient />
      <SiteFooter />
    </div>
  );
}
