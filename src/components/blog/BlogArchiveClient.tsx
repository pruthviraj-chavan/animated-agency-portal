"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { DriftWatermark } from "@/components/animation/MotionPrimitives";
import { trackBlogCategorySelect } from "@/lib/analytics/gtag";
import {
  BLOG_CATEGORIES,
  BlogCategorySlug,
  blogData,
  inferBlogCategory,
} from "@/lib/blog-data";
import { cn } from "@/lib/utils";

export function BlogArchiveClient({
  initialCategory,
}: {
  initialCategory?: BlogCategorySlug;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setSearchTerm(q);
  }, []);

  const activeCategoryInfo = useMemo(
    () => BLOG_CATEGORIES.find((c) => c.slug === initialCategory) || null,
    [initialCategory],
  );

  const categoryPosts = useMemo(() => {
    if (!initialCategory) return blogData;
    return blogData.filter((post) => inferBlogCategory(post) === initialCategory);
  }, [initialCategory]);

  const quickTags = useMemo(() => {
    const counts = new Map<string, number>();
    categoryPosts.forEach((post) => {
      post.tags.forEach((t) => {
        const key = String(t);
        counts.set(key, (counts.get(key) || 0) + 1);
      });
    });
    const top = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([tag]) => tag);
    return ["All", ...top];
  }, [categoryPosts]);

  const filteredPosts = useMemo(() => {
    return categoryPosts.filter((post) => {
      const matchesTag =
        selectedTag === "All" ||
        post.tags.some((tag) => String(tag).toLowerCase() === selectedTag.toLowerCase());
      const q = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => String(tag).toLowerCase().includes(q));
      return matchesTag && matchesSearch;
    });
  }, [categoryPosts, searchTerm, selectedTag]);

  return (
    <main className="dv-dot-bg flex-grow pt-24 sm:pt-28 pb-20 sm:pb-24">
      <section className="relative pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
          <div className="relative mx-auto max-w-2xl">
            <span className="inline-block rounded-full bg-[#FF5422] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              {activeCategoryInfo ? activeCategoryInfo.label : "Journal"}
            </span>

            <h1
              className="mt-4 font-bold tracking-tight text-[#141210]"
              style={{ fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: 1.06 }}
            >
              {activeCategoryInfo ? (
                <>
                  {activeCategoryInfo.label} <span className="text-[#FF5422]">Guides.</span>
                </>
              ) : (
                <>
                  Notes from the studio
                  <br />
                  on AI, software &amp; <span className="text-[#FF5422]">study abroad.</span>
                </>
              )}
            </h1>

            <p className="mt-4 max-w-lg text-xs sm:text-sm leading-relaxed text-stone-500">
              {activeCategoryInfo
                ? activeCategoryInfo.description
                : "Practical engineering articles, technical SEO insights and verified Study in Germany & admissions checklists."}
            </p>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Blog categories">
              <Link
                href="/blog"
                onClick={() => {
                  setSelectedTag("All");
                  trackBlogCategorySelect("all");
                }}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                  !initialCategory
                    ? "border-[#FF5422] bg-[#FF5422] text-white"
                    : "border-stone-200 bg-white text-stone-600 hover:border-[#FF5422] hover:text-[#FF5422]",
                )}
              >
                All Topics ({blogData.length})
              </Link>
              {BLOG_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/${cat.slug}`}
                  onClick={() => {
                    setSelectedTag("All");
                    trackBlogCategorySelect(cat.slug);
                  }}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                    initialCategory === cat.slug
                      ? "border-[#FF5422] bg-[#FF5422] text-white"
                      : "border-stone-200 bg-white text-stone-600 hover:border-[#FF5422] hover:text-[#FF5422]",
                  )}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none select-none overflow-hidden pt-6" aria-hidden="true">
          <DriftWatermark className="whitespace-nowrap text-center font-bold tracking-tight text-stone-200/70 text-[46px] sm:text-[90px] lg:text-[134px] leading-none">
            engineering, ai agents &amp; study in germany journal
          </DriftWatermark>
        </div>
      </section>

      <section className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl mb-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles, Germany guide, AI..."
              className="w-full rounded-full border border-stone-200 bg-white pl-10 pr-9 py-2.5 text-sm text-[#141210] placeholder:text-stone-400 focus:border-[#FF5422] focus:outline-none"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#141210]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {quickTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                  selectedTag === tag
                    ? "border-[#141210] bg-[#141210] text-white"
                    : "border-stone-200 bg-white text-stone-600 hover:border-[#FF5422]",
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-stone-200 bg-white p-12 text-center">
            <p className="text-lg font-semibold text-[#141210]">No matching articles found.</p>
            <p className="mt-2 text-sm text-stone-500">
              Try clearing your search or switching back to All Topics.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("All");
              }}
              className="mt-5 rounded-full bg-[#FF5422] px-5 py-2 text-xs font-semibold text-white hover:bg-[#e8460e]"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
