import type { MetadataRoute } from "next";
import { toAbsoluteUrl } from "@/config/site";
import { TECH_SERVICES_DATA } from "@/data/techServicesData";
import { BLOG_CATEGORIES, blogData, toIsoDateString } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticStableDate = new Date("2026-10-25");

  const corePages: MetadataRoute.Sitemap = [
    {
      url: toAbsoluteUrl("/"),
      lastModified: staticStableDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: toAbsoluteUrl("/services"),
      lastModified: staticStableDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: toAbsoluteUrl("/study-abroad"),
      lastModified: staticStableDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: toAbsoluteUrl("/study-abroad/germany"),
      lastModified: staticStableDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl("/study-abroad/university-selection"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/study-abroad/admission-assistance"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/study-abroad/visa-guidance"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/study-abroad/student-resources"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/about"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/projects"),
      lastModified: staticStableDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: toAbsoluteUrl("/portfolio"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/products"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/agents"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/solutions"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/solutions/ai"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: toAbsoluteUrl("/solutions/software"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/solutions/automation"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/ai-agents-library"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: toAbsoluteUrl("/development-kit"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: toAbsoluteUrl("/contact"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl("/blog"),
      lastModified: staticStableDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: toAbsoluteUrl("/jobs"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: toAbsoluteUrl("/internship"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: toAbsoluteUrl("/privacy"),
      lastModified: staticStableDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: toAbsoluteUrl("/terms"),
      lastModified: staticStableDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: toAbsoluteUrl("/services/agentic-ai-training"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: toAbsoluteUrl("/services/ai-training-workshops"),
      lastModified: staticStableDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = Object.keys(TECH_SERVICES_DATA).map((slug) => ({
    url: toAbsoluteUrl(`/services/${slug}`),
    lastModified: staticStableDate,
    changeFrequency: "monthly",
    priority:
      slug === "website-development" || slug === "ai-agents" ? 0.9 : 0.85,
  }));

  const categoryPages: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((cat) => ({
    url: toAbsoluteUrl(`/blog/${cat.slug}`),
    lastModified: staticStableDate,
    changeFrequency: "weekly",
    priority: cat.slug === "study-in-germany" ? 0.85 : 0.75,
  }));

  const articlePages: MetadataRoute.Sitemap = blogData.map((post) => ({
    url: toAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(toIsoDateString(post.updatedDate || post.date)),
    changeFrequency: "monthly",
    priority:
      post.category === "study-in-germany" || post.category === "study-abroad"
        ? 0.8
        : 0.7,
  }));

  return [...corePages, ...servicePages, ...categoryPages, ...articlePages];
}
