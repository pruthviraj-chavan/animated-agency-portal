import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

function collectHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "assets" || entry.name === "projects" || entry.name === "lovable-uploads") {
        continue;
      }
      results.push(...collectHtmlFiles(full));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

function fileToRoute(filePath) {
  const rel = path.relative(distDir, filePath).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  return `/${rel.replace(/\.html$/, "")}`;
}

function countMatches(str, regex) {
  const m = str.match(regex);
  return m ? m.length : 0;
}

function run() {
  const errors = [];
  const warnings = [];
  const htmlFiles = collectHtmlFiles(distDir);
  if (htmlFiles.length === 0) {
    throw new Error("No HTML files found in dist/");
  }

  const routeSet = new Set(htmlFiles.map(fileToRoute));
  const titleMap = new Map();
  const descMap = new Map();
  const canonicalMap = new Map();

  for (const file of htmlFiles) {
    const route = fileToRoute(file);
    const html = fs.readFileSync(file, "utf-8");

    if (!html.includes("<html") || !html.includes("lang=\"en-IN\"")) {
      errors.push(`${route}: missing lang="en-IN"`);
    }
    if (countMatches(html, /<title\b/gi) !== 1) {
      errors.push(`${route}: expected exactly 1 <title>, found ${countMatches(html, /<title\b/gi)}`);
    }
    if (countMatches(html, /name="description"/gi) !== 1) {
      errors.push(`${route}: expected exactly 1 meta description, found ${countMatches(html, /name="description"/gi)}`);
    }
    if (countMatches(html, /name="keywords"/gi) > 0) {
      errors.push(`${route}: contains deprecated <meta name="keywords">`);
    }

    const isNoindex = route === "/404" || route === "/fun" || route === "/services/refer";
    const robotsMatch = html.match(/name="robots"[^>]*content="([^"]+)"/i);
    const canonicalCount = countMatches(html, /rel="canonical"/gi);

    if (isNoindex) {
      if (!robotsMatch || !robotsMatch[1].includes("noindex")) {
        errors.push(`${route}: expected noindex robots meta`);
      }
      if (canonicalCount > 0) {
        errors.push(`${route}: noindex route must not emit rel="canonical"`);
      }
    } else {
      if (canonicalCount !== 1) {
        errors.push(`${route}: expected exactly 1 rel="canonical", found ${canonicalCount}`);
      }
      const canonMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i);
      if (canonMatch) {
        const canonUrl = canonMatch[1];
        if (canonicalMap.has(canonUrl)) {
          errors.push(`${route}: duplicate canonical URL ${canonUrl} shared with ${canonicalMap.get(canonUrl)}`);
        }
        canonicalMap.set(canonUrl, route);
      }

      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : "";
      if (!title) {
        errors.push(`${route}: empty <title>`);
      } else {
        if (titleMap.has(title)) {
          errors.push(`${route}: duplicate title "${title}" shared with ${titleMap.get(title)}`);
        }
        titleMap.set(title, route);
      }

      const descMatch = html.match(/name="description"[^>]*content="([^"]+)"/i);
      const desc = descMatch ? descMatch[1].trim() : "";
      if (!desc) {
        errors.push(`${route}: empty meta description`);
      } else {
        if (descMap.has(desc)) {
          errors.push(`${route}: duplicate description shared with ${descMap.get(desc)}`);
        }
        descMap.set(desc, route);
      }
    }

    const h1Matches = countMatches(html, /<h1\b/gi);
    if (h1Matches !== 1) {
      errors.push(`${route}: expected exactly 1 <h1>, found ${h1Matches}`);
    }
    if (html.includes('<div id="root"></div>')) {
      errors.push(`${route}: empty un-prerendered #root container`);
    }

    // Validate JSON-LD blocks parse cleanly
    const ldScripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    if (!isNoindex && ldScripts.length === 0) {
      errors.push(`${route}: missing JSON-LD structured data`);
    }
    for (const match of ldScripts) {
      try {
        const parsed = JSON.parse(match[1]);
        if (!parsed["@context"]) {
          errors.push(`${route}: JSON-LD missing @context`);
        }
      } catch (err) {
        errors.push(`${route}: invalid JSON-LD (${err.message})`);
      }
    }

    // Check internal links inside <a href="/...">
    const linkMatches = [...html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/gi)];
    const legacyPaths = new Set([
      "/services/custom-website-development",
      "/services/ecommerce-solutions",
      "/services/api-development",
      "/services/web-hosting",
      "/about-us",
      "/contact-us",
    ]);
    for (const m of linkMatches) {
      const target = m[1];
      if (
        target.startsWith("/assets/") ||
        target.startsWith("/projects/") ||
        target.endsWith(".png") ||
        target.endsWith(".ico") ||
        target.endsWith(".svg") ||
        target.endsWith(".jpg") ||
        target.endsWith(".css") ||
        target.endsWith(".js")
      ) {
        continue;
      }
      if (legacyPaths.has(target)) {
        warnings.push(`${route}: internal link still points to legacy redirect path ${target}`);
        continue;
      }
      if (!routeSet.has(target)) {
        errors.push(`${route}: broken internal link target "${target}"`);
      }
    }
  }

  // Validate sitemap.xml matches indexable built routes
  const sitemapPath = path.join(distDir, "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) {
    errors.push("Missing dist/sitemap.xml");
  } else {
    const sitemap = fs.readFileSync(sitemapPath, "utf-8");
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (locs.length === 0) {
      errors.push("dist/sitemap.xml contains 0 <loc> entries");
    }
    for (const loc of locs) {
      const urlPath = new URL(loc).pathname;
      const normalized = urlPath === "/" ? "/" : urlPath.replace(/\/+$/, "");
      if (!routeSet.has(normalized)) {
        errors.push(`sitemap.xml contains URL without matching prerendered file: ${loc}`);
      }
      if (canonicalMap.has(loc) === false) {
        errors.push(`sitemap.xml URL does not match any indexable canonical tag: ${loc}`);
      }
    }
  }

  if (!fs.existsSync(path.join(distDir, "robots.txt"))) {
    errors.push("Missing dist/robots.txt");
  }

  if (warnings.length > 0) {
    console.warn(`[seo:check] Warnings (${warnings.length}):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }
  if (errors.length > 0) {
    console.error(`[seo:check] FAILED with ${errors.length} error(s):`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  console.log(
    `[seo:check] PASSED: Verified ${htmlFiles.length} prerendered HTML routes, ${canonicalMap.size} unique canonical URLs, JSON-LD graphs, internal links and sitemap.xml integrity.`,
  );
}

run();
