import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");
const ssrBundlePath = path.join(rootDir, "dist-ssr", "entry-ssr.js");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function injectRouteHtml(templateHtml, routePath, headHtml, appHtml) {
  let out = templateHtml.replace(
    /<!--SEO_HEAD_START-->[\s\S]*?<!--SEO_HEAD_END-->/,
    `<!--SEO_HEAD_START-->\n    ${headHtml}\n    <!--SEO_HEAD_END-->`,
  );
  out = out.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  return out;
}

function writeRouteOutput(routePath, html) {
  const clean = routePath === "/" ? "/" : routePath.replace(/^\/+|\/+$/g, "");
  const outFile =
    clean === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, `${clean}.html`);
  ensureDir(path.dirname(outFile));
  fs.writeFileSync(outFile, html, "utf-8");
}

function generateSitemapXml(entries) {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${escapeXml(entry.changefreq)}</changefreq>
    <priority>${escapeXml(entry.priority)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function generateRobotsTxt(siteUrl) {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

function generateLlmsTxt(siteUrl) {
  return `# dieVekter (DIEVEKTER / DieVekter Tech)

> Registered Indian engineering & advisory enterprise (UDYAM-MH-15-0320983, D-U-N-S 312163123) based in Radhanagari, Kolhapur, Maharashtra, India.

## Core Business Verticals
- Technology & Software Solutions: Custom websites, e-commerce storefronts, cross-platform mobile apps, custom business software, multilingual AI agents (Hindi, Marathi, Hinglish, English), AI chatbots, CRM & business workflow automation, API integrations, cloud & backend engineering, UI/UX design, technical SEO.
- Study Abroad Consultancy: Overseas education counselling, university shortlisting, Study in Germany checklists (public vs private institutions, APS India, uni-assist, student visa documentation checklist alignment via DAAD and German Missions in India).

## Primary Pages
- Home: ${siteUrl}/
- Technology Services: ${siteUrl}/services
- Study Abroad Hub: ${siteUrl}/study-abroad
- Study in Germany Guide: ${siteUrl}/study-abroad/germany
- Shipped Websites: ${siteUrl}/projects
- Journal & Guides: ${siteUrl}/blog
- About Us: ${siteUrl}/about
- Contact: ${siteUrl}/contact

## Contact
- Email: team.dievekter@gmail.com
- Phone / WhatsApp: +91 94048 95667
`;
}

async function main() {
  if (!fs.existsSync(ssrBundlePath)) {
    throw new Error(`Missing SSR bundle at ${ssrBundlePath}`);
  }
  const templateHtmlPath = path.join(distDir, "index.html");
  if (!fs.existsSync(templateHtmlPath)) {
    throw new Error(`Missing client build HTML at ${templateHtmlPath}`);
  }
  const templateHtml = fs.readFileSync(templateHtmlPath, "utf-8");

  const ssrModule = await import(pathToFileURL(ssrBundlePath).href);
  const { renderRoute, getPrerenderPaths } = ssrModule;
  const { indexableRoutes, noindexRoutes, sitemapEntries } = getPrerenderPaths();
  const allRoutes = [...indexableRoutes, ...noindexRoutes];

  let renderedCount = 0;
  for (const routePath of allRoutes) {
    const { appHtml, headHtml } = renderRoute(routePath);
    const fullHtml = injectRouteHtml(templateHtml, routePath, headHtml, appHtml);
    writeRouteOutput(routePath, fullHtml);
    renderedCount += 1;
  }

  const rawSiteUrl = (process.env.VITE_SITE_URL || "https://www.dievekter.tech").replace(/\/+$/, "");
  const sitemapXml = generateSitemapXml(sitemapEntries);
  const robotsTxt = generateRobotsTxt(rawSiteUrl);
  const llmsTxt = generateLlmsTxt(rawSiteUrl);

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf-8");
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
  fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt, "utf-8");
  fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt, "utf-8");
  fs.writeFileSync(path.join(publicDir, "llms.txt"), llmsTxt, "utf-8");
  fs.writeFileSync(path.join(distDir, "llms.txt"), llmsTxt, "utf-8");

  fs.rmSync(path.join(rootDir, "dist-ssr"), { recursive: true, force: true });

  console.log(
    `[prerender] Rendered ${renderedCount} static HTML routes (${indexableRoutes.length} indexable + ${noindexRoutes.length} noindex) and generated sitemap.xml (${sitemapEntries.length} URLs), robots.txt, llms.txt.`,
  );
}

main().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
