import Link from "next/link";
import Image from "next/image";
import { MotionFadeIn } from "@/components/animation/MotionPrimitives";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const categoryLabel = post.tags[0] ? String(post.tags[0]) : "Journal";

  return (
    <MotionFadeIn delay={(index % 3) * 0.05} hoverLift>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-[0_6px_24px_-12px_rgba(20,18,16,0.08)] transition-all duration-300 hover:border-[#FF5422]/45 hover:shadow-[0_22px_44px_-18px_rgba(255,84,34,0.2)]">
        <Link href={`/blog/${post.slug}`} className="flex h-full flex-col focus:outline-none">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FFF4F0]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          <div className="flex flex-grow flex-col p-5 sm:p-6">
            <div className="mb-3">
              <span className="inline-block rounded-full bg-[#1E1C1A] px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 group-hover:bg-[#FF5422]">
                {categoryLabel}
              </span>
            </div>

            <h2 className="text-[15.5px] sm:text-base font-bold tracking-tight text-[#141210] leading-snug line-clamp-2 transition-colors group-hover:text-[#FF5422]">
              {post.title}
            </h2>

            <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-stone-500 line-clamp-2">
              {post.excerpt}
            </p>

            <p className="mt-auto pt-5 text-[11px] font-medium text-stone-500">
              — {post.author.name}
            </p>
          </div>
        </Link>
      </article>
    </MotionFadeIn>
  );
};
