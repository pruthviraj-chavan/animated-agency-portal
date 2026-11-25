# Rollback & Recovery Plan

`main` remains **completely untouched** at commit `5656d14`, and the pre-migration Vite + SEO foundation was preserved at checkpoint `ac707f0` on `feature/nextjs-migration`.

## 1. Option A — Instant Vercel Deployment Rollback (Zero Git Delay)

If an issue is discovered after merging to production on Vercel:

1. Open **Vercel Dashboard -> Deployments**.
2. Locate the last verified Vite production deployment prior to the Next.js merge.
3. Click **`...` -> Instant Rollback** (restores traffic immediately within seconds).
4. Ensure Vercel Project Settings -> Framework Preset matches the rolled-back build if triggering fresh rebuilds.

## 2. Option B — Git Branch Revert (`main` Stays Safe Until Merge)

### Before Merging `feature/nextjs-migration`

Simply delete or switch away from the migration branch — production is unaffected:

```bash
git checkout main
```

### Reverting After Merging to `main`

```bash
git checkout main
git pull origin main
git revert -m 1 <MERGE_COMMIT_SHA>
git push origin main
```

Or hard-reset to the pre-migration Vite codebase checkpoint (`ac707f0` / `5656d14`) on a recovery branch if full code restoration is desired:

```bash
git checkout -b rollback/vite-restore 5656d14
```

## 3. Search Engine Safety After Rollback

- Keep URL paths and permanent redirects (`301`/`308`) aligned (`www.dievekter.tech` canonical host, legacy `/services/*`, `/about-us`, `/contact-us`).
- Re-submit `https://www.dievekter.tech/sitemap.xml` in Google Search Console if rolling back permanently so crawl queues stay synced.
