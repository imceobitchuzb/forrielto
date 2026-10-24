"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { reviewsData } from "@/content/reviews";
import { siteConfig } from "@/content/config";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Instagram, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ReviewsPage() {
  const { locale } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const filtered = reviewsData.filter((r) => {
    if (filter === "all") return true;
    if (filter === "inspection") return r.serviceRu.includes("Приёмка");
    if (filter === "supervision") return r.serviceRu.includes("Технадзор") || r.serviceRu.includes("Контроль");
    return true;
  });

  return (
    <div className="pt-28 sm:pt-36">
      {/* Header */}
      <section className="pb-16 sm:pb-24 border-b border-[#1C1D1A]/10 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 font-mono text-[10px] tracking-[0.25em] text-[#9E7448] uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#9E7448]" />
            <span>{locale === "ru" ? "РЕПУТАЦИЯ И ДОВЕРИЕ" : "OBRO' VA ISHONCH"}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1D1A] leading-[1.02] max-w-4xl">
            {locale === "ru"
              ? "Отзывы клиентов и результаты проверок в Ташкенте"
              : "Toshkentda mijozlar fikrlari va tekshiruv natijalari"}
          </h1>
          <p className="text-base sm:text-lg text-[#6E6B64] mt-5 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "Реальные истории покупателей квартир и владельцев недвижимости, которым профессиональная приёмка помогла защитить бюджет."
              : "Professional qabul byudjetni himoya qilishga yordam bergan xonadon egalarining haqiqiy hikoyalari."}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sm:py-12 bg-[#FAF8F4] border-b border-[#1C1D1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 pb-2 -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap">
              <button
                onClick={() => setFilter("all")}
                className={cn(
                  "flex-shrink-0 min-h-[44px] px-4 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-all touch-manipulation",
                  filter === "all"
                    ? "bg-[#1C1D1A] text-[#F6F3EC]"
                    : "bg-white text-[#6E6B64] border border-[#1C1D1A]/12"
                )}
              >
                {locale === "ru" ? "Все отзывы" : "Barcha fikrlar"}
              </button>
              <button
                onClick={() => setFilter("inspection")}
                className={cn(
                  "flex-shrink-0 min-h-[44px] px-4 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-all touch-manipulation",
                  filter === "inspection"
                    ? "bg-[#1C1D1A] text-[#F6F3EC]"
                    : "bg-white text-[#6E6B64] border border-[#1C1D1A]/12"
                )}
              >
                {locale === "ru" ? "Приёмка квартир" : "Xonadon qabuli"}
              </button>
              <button
                onClick={() => setFilter("supervision")}
                className={cn(
                  "flex-shrink-0 min-h-[44px] px-4 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-all touch-manipulation",
                  filter === "supervision"
                    ? "bg-[#1C1D1A] text-[#F6F3EC]"
                    : "bg-white text-[#6E6B64] border border-[#1C1D1A]/12"
                )}
              >
                {locale === "ru" ? "Технадзор ремонта" : "Ta'mir texnazorati"}
              </button>
            </div>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[#1C1D1A] hover:text-[#9E7448] transition-colors border-b border-[#1C1D1A]/30 pb-0.5 min-h-[44px] self-start sm:self-auto"
            >
              <Instagram className="w-3.5 h-3.5 text-[#9E7448]" />
              <span>{locale === "ru" ? "Смотреть хайлайтс в Instagram →" : "Instagram highlights ko'rish →"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Cards Grid */}
      <section className="py-24 bg-[#F6F3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#FAF8F4] border border-[#1C1D1A]/12 p-8 flex flex-col justify-between hover:border-[#9E7448] transition-all shadow-sm group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1C1D1A]/8">
                    <div className="flex items-center space-x-1.5 text-xs font-mono text-[#9E7448]">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{rev.source}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#6E6B64]">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1C1D1A]/80 leading-relaxed italic font-serif">
                    «{locale === "ru" ? rev.textRu : rev.textUz}»
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1C1D1A]/8">
                  <p className="font-serif text-lg font-normal text-[#1C1D1A]">
                    {rev.author}
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#9E7448] mt-0.5">
                    {locale === "ru" ? rev.serviceRu : rev.serviceUz}
                  </p>
                  <p className="text-[11px] text-[#6E6B64] mt-0.5">
                    {locale === "ru" ? rev.complexRu : rev.complexUz}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
