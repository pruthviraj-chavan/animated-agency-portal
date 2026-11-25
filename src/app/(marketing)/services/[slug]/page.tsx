import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/dv/ServiceDetailLayout";
import { TECH_SERVICES_DATA, type TechServiceKey } from "@/data/techServicesData";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(TECH_SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const spec = TECH_SERVICES_DATA[slug as TechServiceKey];
  if (!spec) {
    return buildPageMetadata({
      path: "/404",
      title: "Service Not Found",
      description: "The requested service page does not exist.",
      noindex: true,
    });
  }

  return buildPageMetadata({
    path: `/services/${slug}`,
    title: spec.seoTitle || spec.title,
    description: spec.seoDescription || spec.description,
  });
}

export default async function TechServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const spec = TECH_SERVICES_DATA[slug as TechServiceKey];
  if (!spec) {
    notFound();
  }

  return <ServiceDetailLayout {...spec} />;
}
