"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { faqItems, FAQItem } from "@/content/faq";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  categoryFilter?: "inspection" | "supervision" | "turnkey" | "general";
  limit?: number;
}

export function FAQSection({ categoryFilter, limit }: FAQSectionProps) {
  const { locale } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filtered = categoryFilter
    ? faqItems.filter((i) => i.category === categoryFilter || i.category === "general")
    : faqItems;

  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "border rounded-sm transition-all duration-200 bg-[#FAF8F5]",
              isOpen ? "border-[#A8794A]" : "border-[#20211F]/10 hover:border-[#20211F]/30"
            )}
          >
            <button
              onClick={() => toggleOpen(item.id)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base sm:text-lg font-bold text-[#20211F]">
                {locale === "ru" ? item.questionRu : item.questionUz}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-[#A8794A] flex-shrink-0 transition-transform duration-300",
                  isOpen ? "rotate-180" : ""
                )}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#77746D] leading-relaxed border-t border-[#20211F]/5 animate-fadeIn">
                <p>{locale === "ru" ? item.answerRu : item.answerUz}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
