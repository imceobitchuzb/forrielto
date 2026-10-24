"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { faqItems } from "@/content/faq";
import { ChevronDown } from "lucide-react";
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
              "border transition-colors duration-200 bg-[#FAF8F4]",
              isOpen ? "border-[#9E7448]" : "border-[#1C1D1A]/12 hover:border-[#9E7448]/40"
            )}
          >
            <button
              onClick={() => toggleOpen(item.id)}
              className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl font-normal text-[#1C1D1A]">
                {locale === "ru" ? item.questionRu : item.questionUz}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-4 h-4 text-[#9E7448]" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-7 pb-7 pt-1 text-xs sm:text-sm text-[#6E6B64] leading-relaxed border-t border-[#1C1D1A]/8">
                    <p>{locale === "ru" ? item.answerRu : item.answerUz}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
