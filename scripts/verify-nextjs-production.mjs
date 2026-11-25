import http from "node:http";
import { spawn } from "node:child_process";

const PORT = 3199;
const BASE = `http://127.0.0.1:${PORT}`;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForServer(timeoutMs = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(`${BASE}/robots.txt`);
      if (res.ok) return;
    } catch {
      // retry until ready
    }
    await sleep(250);
  }
  throw new Error(`Next server did not respond on ${BASE} within ${timeoutMs}ms`);
}

function requestRaw(path) {
  return new Promise((resolve, reject) => {
    const req = http.request(`${BASE}${path}`, { method: "GET" }, (res) => {
      let body = "";
      res.on("data", (c) => (body += c));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body }));
    });
    req.on("error", reject);
    req.end();
  });
}

async function main() {
  const server = spawn("npx", ["next", "start", "-p", String(PORT), "-H", "127.0.0.1"], {
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, NODE_ENV: "production" },
  });

  let logs = "";
  server.stdout.on("data", (d) => (logs += d.toString()));
  server.stderr.on("data", (d) => (logs += d.toString()));

  const failures = [];
  const check = (cond, msg) => {
    if (!cond) failures.push(msg);
  };

  try {
    await waitForServer();

    const routesToCheck = [
      { path: "/", noindex: false },
      { path: "/about", noindex: false },
      { path: "/services", noindex: false },
      { path: "/services/website-development", noindex: false },
      { path: "/services/ai-agents", noindex: false },
      { path: "/services/ai-training-workshops", noindex: false },
      { path: "/services/agentic-ai-training", noindex: false },
      { path: "/study-abroad", noindex: false },
      { path: "/study-abroad/germany", noindex: false },
      { path: "/study-abroad/university-selection", noindex: false },
      { path: "/study-abroad/admission-assistance", noindex: false },
      { path: "/study-abroad/visa-guidance", noindex: false },
      { path: "/study-abroad/student-resources", noindex: false },
      { path: "/solutions", noindex: false },
      { path: "/solutions/ai", noindex: false },
      { path: "/solutions/software", noindex: false },
      { path: "/solutions/automation", noindex: false },
      { path: "/projects", noindex: false },
      { path: "/portfolio", noindex: false },
      { path: "/products", noindex: false },
      { path: "/agents", noindex: false },
      { path: "/blog", noindex: false },
      { path: "/blog/study-in-germany", noindex: false },
      { path: "/blog/study-in-germany-complete-guide-indian-students", noindex: false },
      { path: "/contact", noindex: false },
      { path: "/jobs", noindex: false },
      { path: "/internship", noindex: false },
      { path: "/ai-agents-library", noindex: false },
      { path: "/development-kit", noindex: false },
      { path: "/privacy", noindex: false },
      { path: "/terms", noindex: false },
      { path: "/fun", noindex: true },
      { path: "/services/refer", noindex: true },
    ];

    const seenTitles = new Map();

    for (const r of routesToCheck) {
      const { status, headers, body } = await requestRaw(r.path);
      check(status === 200, `${r.path}: expected HTTP 200, got ${status}`);

      const titleMatch = body.match(/<title>([\s\S]*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : "";
      check(title.length >= 10, `${r.path}: missing/short <title>: "${title}"`);
      if (seenTitles.has(title)) {
        failures.push(`${r.path}: duplicate title with ${seenTitles.get(title)} ("${title}")`);
      } else {
        seenTitles.set(title, r.path);
      }

      const descMatch = body.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
      check(Boolean(descMatch && descMatch[1].trim().length >= 25), `${r.path}: missing/short meta description`);

      if (!r.noindex) {
        const canonMatch = body.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
        check(Boolean(canonMatch && canonMatch[1].startsWith("https://www.dievekter.tech")), `${r.path}: invalid canonical tag`);
      }

      const h1Matches = body.match(/<h1[\s>]/gi) || [];
      check(h1Matches.length === 1, `${r.path}: expected 1 <h1>, got ${h1Matches.length}`);

      const jsonLdScripts = [...body.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
      check(jsonLdScripts.length >= 1, `${r.path}: missing JSON-LD script`);
      for (const m of jsonLdScripts) {
        try {
          const parsed = JSON.parse(m[1]);
          check(Boolean(parsed["@context"] || parsed["@graph"]), `${r.path}: invalid JSON-LD structure`);
        } catch (err) {
          failures.push(`${r.path}: malformed JSON-LD (${err.message})`);
        }
      }

      const strippedText = body
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      check(strippedText.length >= 400, `${r.path}: insufficient SSR text (${strippedText.length} chars)`);

      if (r.noindex) {
        const robotsHeader = String(headers["x-robots-tag"] || "");
        const hasNoindexMeta = /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(body);
        check(
          hasNoindexMeta || robotsHeader.toLowerCase().includes("noindex"),
          `${r.path}: expected noindex directive`,
        );
      } else {
        check(
          !/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(body),
          `${r.path}: unexpected noindex directive`,
        );
      }

      check(Boolean(headers["x-content-type-options"] === "nosniff"), `${r.path}: missing X-Content-Type-Options`);
    }

    // Check 404 routes return real 404
    for (const badPath of ["/this-route-does-not-exist-404", "/blog/nonexistent-article-xyz"]) {
      const { status } = await requestRaw(badPath);
      check(status === 404, `${badPath}: expected HTTP 404, got ${status}`);
    }

    // Check permanent redirects
    const redirectPairs = [
      ["/services/custom-website-development", "/services/website-development"],
      ["/services/ecommerce-solutions", "/services/ecommerce-development"],
      ["/services/api-development", "/services/api-integration"],
      ["/services/web-hosting", "/services/cloud-solutions"],
      ["/about-us", "/about"],
      ["/contact-us", "/contact"],
      ["/privacy-policy", "/privacy"],
      ["/terms-and-conditions", "/terms"],
      ["/blog/category/study-in-germany", "/blog/study-in-germany"],
    ];
    for (const [src, dest] of redirectPairs) {
      const { status, headers } = await requestRaw(src);
      check(status === 301 || status === 308, `${src}: expected 301/308, got ${status}`);
      check(String(headers.location || "").endsWith(dest), `${src}: expected Location ending with ${dest}, got ${headers.location}`);
    }

    // Check sitemap & robots
    const robotsRes = await requestRaw("/robots.txt");
    check(robotsRes.status === 200 && robotsRes.body.includes("Sitemap:"), "robots.txt invalid");

    const sitemapRes = await requestRaw("/sitemap.xml");
    check(sitemapRes.status === 200 && sitemapRes.body.includes("<urlset"), "sitemap.xml invalid");
    check(sitemapRes.body.includes("https://www.dievekter.tech/study-abroad/germany"), "sitemap.xml missing /study-abroad/germany");
    check(!sitemapRes.body.includes("/fun"), "sitemap.xml leaked /fun");
    check(!sitemapRes.body.includes("/services/refer"), "sitemap.xml leaked /services/refer");

    // Check /api/contact and /api/enquiry
    const validApi = await fetch(`${BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        phone: "+91 99999 00000",
        vertical: "technology",
        category: "website-development",
        message: "Testing Next.js SSR contact verification route.",
      }),
    });
    const validJson = await validApi.json();
    check(validApi.status === 200 && validJson.ok === true && Boolean(validJson.whatsappUrl), `/api/contact valid request failed: ${validApi.status}`);

    const badApi = await fetch(`${BASE}/api/enquiry`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "A", email: "bad", message: "hi" }),
    });
    check(badApi.status === 400, `/api/enquiry invalid request expected 400, got ${badApi.status}`);

    const spamApi = await fetch(`${BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Bot",
        email: "bot@example.com",
        message: "Spam message test",
        companyWebsite: "http://spam.invalid",
      }),
    });
    check(spamApi.status === 200, `/api/contact honeypot expected 200 silent discard, got ${spamApi.status}`);

    if (failures.length > 0) {
      console.error("VERIFICATION FAILURES:\n" + failures.map((f) => ` - ${f}`).join("\n"));
      process.exitCode = 1;
    } else {
      console.log(
        `ALL CHECKS PASSED: ${routesToCheck.length} HTML SSR routes, 2x 404 checks, ${redirectPairs.length} redirects, robots.txt, sitemap.xml, and /api/{contact,enquiry}.`,
      );
    }
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
