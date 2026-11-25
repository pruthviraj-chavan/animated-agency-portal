import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock,
  ExternalLink,
  List,
  User,
} from "lucide-react";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogArchiveClient } from "@/components/blog/BlogArchiveClient";
import { ArticleContent, extractArticleHeadings } from "@/components/blog/ArticleContent";
import { ShareArticleButton } from "@/components/blog/ShareArticleButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BLOG_CATEGORIES,
  type BlogCategorySlug,
  blogData,
  inferBlogCategory,
  toIsoDateString,
} from "@/lib/blog-data";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/lib/seo/schema";

const CATEGORY_SEO: Record<BlogCategorySlug, { title: string; description: string }> = {
  technology: {
    title: "Technology & Software Engineering Guides | Journal",
    description:
      "Articles covering custom software engineering, API integration, e-commerce optimization and technical SEO.",
  },
  "website-development": {
    title: "Website Development & SEO Guides | Journal",
    description:
      "Guides on website architecture, performance, technical SEO and conversion-focused web development for small businesses.",
  },
  "mobile-app-development": {
    title: "Mobile App Development Guides | Journal",
    description:
      "Technical guides on React Native, Flutter, mobile UX and shipping production iOS and Android apps.",
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence & AI Agents Guides | Journal",
    description:
      "Deep dives into agentic AI, voicebots, RAG assistants, AI literacy programs and responsible deployment.",
  },
  "business-automation": {
    title: "Business & CRM Automation Guides | Journal",
    description:
      "Guides on workflow automation, API integration, stock management and workspace data migration.",
  },
  "study-abroad": {
    title: "Study Abroad & Admissions Guides | Journal",
    description:
      "Guides on university selection, SOP/LOR preparation, student visa documentation checklists and pre-departure planning.",
  },
  "study-in-germany": {
    title: "Study in Germany Guides for Indian Students | Journal",
    description:
      "Accurate checklists for public German universities, APS certificate requirements, uni-assist and student visa documentation.",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...BLOG_CATEGORIES.map((c) => ({ slug: c.slug })),
    ...blogData.map((p) => ({ slug: p.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (category) {
    const seo = CATEGORY_SEO[category.slug];
    return buildPageMetadata({
      path: `/blog/${category.slug}`,
      title: seo.title,
      description: seo.description,
    });
  }

  const post = blogData.find((p) => p.slug === slug);
  if (!post) {
    return buildPageMetadata({
      path: `/blog/${slug}`,
      title: "Article Not Found",
      description: "The requested article could not be found.",
      noindex: true,
    });
  }

  const categorySlug = inferBlogCategory(post);
  const categoryInfo = BLOG_CATEGORIES.find((c) => c.slug === categorySlug);

  return buildPageMetadata({
    path: `/blog/${post.slug}`,
    title: `${post.title} | dieVekter Journal`,
    description: post.excerpt,
    image: post.coverImage,
    imageAlt: post.title,
    type: "article",
    publishedTime: toIsoDateString(post.date),
    modifiedTime: toIsoDateString(post.updatedDate || post.date),
    authors: [post.author.name],
    section: categoryInfo?.label,
  });
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const matchedCategory = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (matchedCategory) {
    const seo = CATEGORY_SEO[matchedCategory.slug];
    const currentPath = `/blog/${matchedCategory.slug}`;
    return (
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
        <JsonLd
          nodes={[
            buildWebPageSchema({
              title: seo.title,
              description: seo.description,
              path: currentPath,
            }),
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: matchedCategory.label, path: currentPath },
            ]),
          ]}
        />
        <SiteNav />
        <BlogArchiveClient initialCategory={matchedCategory.slug} />
        <SiteFooter />
      </div>
    );
  }

  const post = blogData.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  const categorySlug = inferBlogCategory(post);
  const categoryInfo = BLOG_CATEGORIES.find((c) => c.slug === categorySlug);
  const headings = extractArticleHeadings(post.content, post.title);
  const publishedIso = toIsoDateString(post.date);
  const modifiedIso = toIsoDateString(post.updatedDate || post.date);
  const articlePath = `/blog/${post.slug}`;

  const relatedPosts =
    post.relatedPosts && post.relatedPosts.length > 0
      ? blogData.filter((p) => post.relatedPosts?.includes(p.id))
      : blogData
          .filter((p) => p.id !== post.id && p.tags.some((tag) => post.tags.includes(tag)))
          .slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-[#141210]">
      <JsonLd
        nodes={[
          buildWebPageSchema({
            title: `${post.title} | dieVekter Journal`,
            description: post.excerpt,
            path: articlePath,
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            ...(categoryInfo
              ? [{ name: categoryInfo.label, path: `/blog/${categoryInfo.slug}` }]
              : []),
            { name: post.title, path: articlePath },
          ]),
          buildBlogPostingSchema({
            title: post.title,
            description: post.excerpt,
            path: articlePath,
            datePublished: publishedIso,
            dateModified: modifiedIso,
            authorName: post.author.name,
            image: post.coverImage,
            section: categoryInfo?.label,
          }),
        ]}
      />

      <SiteNav />

      <main className="flex-grow pt-24">
        <section className="dv-dot-bg py-12 sm:py-16">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="inline-flex flex-wrap items-center gap-1.5 text-xs text-stone-500">
                <li>
                  <Link href="/" className="hover:text-[#FF5422]">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#FF5422]">
                    Journal
                  </Link>
                </li>
                {categoryInfo && (
                  <>
                    <li aria-hidden="true">
                      <ChevronRight className="h-3.5 w-3.5 text-stone-400" />
                    </li>
                    <li>
                      <Link href={`/blog/${categoryInfo.slug}`} className="hover:text-[#FF5422]">
                        {categoryInfo.label}
                      </Link>
                    </li>
                  </>
                )}
              </ol>
            </nav>

            <Button
              variant="ghost"
              size="sm"
              asChild
              className="mb-4 -ml-2 text-stone-600 hover:text-[#FF5422]"
            >
              <Link href="/blog" className="inline-flex items-center">
                <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Journal
              </Link>
            </Button>

            <div className="flex flex-wrap gap-2 mb-4">
              {categoryInfo && (
                <Link href={`/blog/${categoryInfo.slug}`}>
                  <Badge className="bg-[#FF5422] text-white border-0 hover:bg-[#e8460e]">
                    {categoryInfo.label}
                  </Badge>
                </Link>
              )}
              {post.tags.slice(0, 4).map((tag, index) => (
                <Link href={`/blog?q=${encodeURIComponent(tag)}`} key={`${tag}-${index}`}>
                  <Badge variant="outline" className="bg-[#FFF4F0] text-[#FF5422] border-[#FBE0D4]">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#141210] mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-stone-500">
              <span className="flex items-center">
                <User className="h-4 w-4 mr-2 text-[#FF5422]" />
                {post.author.name}
              </span>
              <span className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-2 text-[#FF5422]" />
                Published: {post.date}
                {post.updatedDate ? ` · Updated: ${post.updatedDate}` : ""}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-[#FF5422]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl -mt-4 mb-10">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-[#FBE0D4] shadow-sm bg-stone-100">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </div>

        <section className="py-10 bg-white">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                {headings.length >= 2 && (
                  <nav
                    aria-label="Article contents"
                    className="mb-8 rounded-2xl border border-[#FBE0D4] bg-[#FFF8F5] p-5"
                  >
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5422] mb-3">
                      <List className="h-3.5 w-3.5" /> In This Guide
                    </p>
                    <ul className="space-y-1.5 text-sm">
                      {headings.map((h) => (
                        <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
                          <a
                            href={`#${h.id}`}
                            className="text-stone-700 hover:text-[#FF5422] transition-colors"
                          >
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}

                <article>
                  <ArticleContent content={post.content} articleTitle={post.title} />
                </article>

                {post.officialReferences && post.officialReferences.length > 0 && (
                  <div className="mt-8 rounded-2xl border border-stone-200 bg-stone-50 p-6">
                    <h2 className="text-base font-bold text-[#141210] mb-3">
                      Official Verification Links
                    </h2>
                    <div className="flex flex-wrap gap-2.5">
                      {post.officialReferences.map((ref) => (
                        <a
                          key={ref.url}
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3.5 py-1.5 text-xs font-medium text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422]"
                        >
                          {ref.name} <ExternalLink className="h-3 w-3 text-[#FF5422]" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {post.relatedServices && post.relatedServices.length > 0 && (
                  <div className="mt-6 rounded-2xl border border-[#FBE0D4] bg-[#FFF5F1] p-6">
                    <h2 className="text-base font-bold text-[#141210] mb-3">
                      Next Steps With dieVekter
                    </h2>
                    <div className="flex flex-wrap gap-2.5">
                      {post.relatedServices.map((srv) => (
                        <Link
                          key={srv.path}
                          href={srv.path}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#FBE0D4] px-4 py-2 text-xs font-semibold text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422]"
                        >
                          {srv.label} <ArrowUpRight className="h-3.5 w-3.5 text-[#FF5422]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <Separator className="my-8" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border border-[#FBE0D4]">
                      {post.author.avatar ? (
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      ) : (
                        <AvatarFallback className="bg-[#FF5422] text-white">
                          {post.author.name.charAt(0)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <p className="font-semibold text-[#141210]">{post.author.name}</p>
                      <p className="text-xs text-stone-500">dieVekter Editorial &amp; Engineering</p>
                    </div>
                  </div>

                  <ShareArticleButton />
                </div>
              </div>

              <div className="lg:col-span-4">
                <Card className="sticky top-28 border-[#FBE0D4] bg-[#FFF8F5]">
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-[#141210] mb-4">Related Articles</h2>
                    <div className="space-y-4">
                      {relatedPosts.map((rp, index) => (
                        <div key={`${rp.id}-${index}`} className="flex gap-3">
                          <Link
                            href={`/blog/${rp.slug}`}
                            className="relative shrink-0 w-16 h-16 overflow-hidden rounded-lg border border-[#FBE0D4]"
                          >
                            <Image
                              src={rp.coverImage}
                              alt={rp.title}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          </Link>
                          <div>
                            <Link
                              href={`/blog/${rp.slug}`}
                              className="block text-sm font-semibold text-[#141210] hover:text-[#FF5422] transition-colors line-clamp-2"
                            >
                              {rp.title}
                            </Link>
                            <p className="text-xs text-stone-500 mt-1">{rp.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-6" />

                    <h2 className="text-lg font-bold text-[#141210] mb-3">Explore Verticals</h2>
                    <div className="flex flex-col gap-2 text-xs font-semibold">
                      <Link
                        href="/services"
                        className="rounded-xl border border-[#FBE0D4] bg-white px-3.5 py-2.5 text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422]"
                      >
                        Technology &amp; AI Services →
                      </Link>
                      <Link
                        href="/study-abroad/germany"
                        className="rounded-xl border border-[#FBE0D4] bg-white px-3.5 py-2.5 text-[#141210] hover:border-[#FF5422] hover:text-[#FF5422]"
                      >
                        Study in Germany Consultancy →
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="border-t border-stone-100 bg-[#FFF8F5] py-16">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#141210]">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.slice(0, 3).map((p, index) => (
                  <BlogCard key={p.id} post={p} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
