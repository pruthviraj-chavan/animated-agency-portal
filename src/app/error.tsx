"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary caught:", error.message);
  }, [error]);

  return (
    <div className="dv-dot-bg flex min-h-screen flex-col items-center justify-center px-5 text-center text-[#141210]">
      <span className="inline-block rounded-full bg-[#FF5422] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-4">
        Temporary Issue
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        Something went wrong loading this view
      </h1>
      <p className="text-sm sm:text-base text-stone-600 max-w-md mb-8">
        Please try refreshing or return to the homepage while we keep your session intact.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          onClick={reset}
          className="rounded-full bg-[#FF5422] hover:bg-[#e8460e] text-white px-7"
        >
          Try Again
        </Button>
        <Button asChild variant="outline" className="rounded-full border-stone-200 px-7">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
