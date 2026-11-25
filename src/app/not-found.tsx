import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/dv/SiteNav";
import { SiteFooter } from "@/components/dv/SiteFooter";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: "/404",
  title: "Page Not Found (404)",
  description: "The page you are looking for does not exist or has been moved on DieVekter Tech.",
  noindex: true,
});

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#141210]">
      <SiteNav />
      <main className="dv-dot-bg flex-grow flex items-center justify-center pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-8xl sm:text-9xl font-black text-[#FF5422] mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4 text-[#141210]">Page Not Found</h2>
          <p className="text-base sm:text-lg text-stone-600 mb-8 max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white px-8"
            >
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-stone-200 px-8">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
