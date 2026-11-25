import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppRoutes, UtilityRouteRegistry } from "@/AppRoutes";
import { STATIC_ROUTE_META, toAbsoluteUrl } from "@/data/seoConfig";
import { blogData, toIsoDateString } from "@/lib/blog-data";
import Products from "@/pages/Products";
import Jobs from "@/pages/Jobs";
import Internship from "@/pages/Internship";
import Fun from "@/pages/Fun";
import AIAgentsLibrary from "@/pages/AIAgentsLibrary";
import DevelopmentKit from "@/pages/DevelopmentKit";

const ssrUtilities: UtilityRouteRegistry = {
  Products,
  Jobs,
  Internship,
  Fun,
  AIAgentsLibrary,
  DevelopmentKit,
};

export interface SitemapUrlEntry {
  loc: string;
  path: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export function renderRoute(url: string) {
  const queryClient = new QueryClient();
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <AppRoutes utilities={ssrUtilities} includeClientEffects={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </StaticRouter>,
  );
  const helmet = Helmet.renderStatic();
  const headHtml = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");

  return { appHtml, headHtml };
}

export function getPrerenderPaths(): {
  indexableRoutes: string[];
  noindexRoutes: string[];
  sitemapEntries: SitemapUrlEntry[];
} {
  const todayIso = "2026-10-25";
  const sitemapEntries: SitemapUrlEntry[] = [];
  const indexableRoutes: string[] = [];
  const noindexRoutes: string[] = [];

  for (const [path, meta] of Object.entries(STATIC_ROUTE_META)) {
    if (meta.noindex) {
      noindexRoutes.push(path);
      continue;
    }
    indexableRoutes.push(path);
    sitemapEntries.push({
      loc: toAbsoluteUrl(path),
      path,
      lastmod: todayIso,
      changefreq: meta.changefreq || "monthly",
      priority: meta.priority || "0.7",
    });
  }

  for (const post of blogData) {
    const postPath = `/blog/${post.slug}`;
    indexableRoutes.push(postPath);
    sitemapEntries.push({
      loc: toAbsoluteUrl(postPath),
      path: postPath,
      lastmod: toIsoDateString(post.updatedDate || post.date),
      changefreq: "monthly",
      priority: post.category === "study-in-germany" || post.category === "study-abroad" ? "0.8" : "0.7",
    });
  }

  return { indexableRoutes, noindexRoutes, sitemapEntries };
}
