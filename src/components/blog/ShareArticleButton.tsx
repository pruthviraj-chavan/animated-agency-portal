"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function ShareArticleButton() {
  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Article link copied to clipboard");
    }
  };

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleShare}
      className="rounded-full border-stone-200 hover:border-[#FF5422] hover:text-[#FF5422]"
    >
      <Share2 className="h-4 w-4 mr-2" /> Share article
    </Button>
  );
}
