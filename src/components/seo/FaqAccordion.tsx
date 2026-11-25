"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqAccordionItem {
  question: string;
  answer: string;
}

export function FaqAccordion({
  items,
  tone = "white",
}: {
  items: FaqAccordionItem[];
  tone?: "white" | "peach";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.question}
            className={cn(
              "rounded-2xl border border-[#FBE0D4] transition-colors hover:border-[#FF5422]/45",
              tone === "peach" ? "bg-[#FFF8F5]" : "bg-white",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left"
            >
              <h3 className="text-sm sm:text-base font-semibold text-[#141210]">
                {item.question}
              </h3>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-[#FF5422] transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div
                  className={cn(
                    "border-t px-5 pb-5 pt-3 sm:px-6 text-sm leading-relaxed text-stone-600 rounded-b-2xl",
                    tone === "peach" ? "border-[#FBE0D4] bg-white" : "border-stone-100",
                  )}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
