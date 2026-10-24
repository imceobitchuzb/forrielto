"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { reviewsData } from "@/content/reviews";
import { siteConfig } from "@/content/config";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Instagram, Send, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";
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
    <div className="pt-24 sm:pt-32">
      {/* Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
            {locale === "ru" ? "РЕПУТАЦИЯ И ДОВЕРИЕ" : "OBRO' VA ISHONCH"}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#20211F] mt-2 leading-[1.05] max-w-4xl">
            {locale === "ru"
              ? "Отзывы клиентов и результаты проверок в Ташкенте"
              : "Toshkentda mijozlar fikrlari va tekshiruv natijalari"}
          </h1>
          <p className="text-base sm:text-lg text-[#77746D] mt-4 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "Реальные истории покупателей квартир и владельцев недвижимости, которым профессиональная приёмка помогла защитить бюджет."
              : "Professional qabul byudjetni himoya qilishga yordam bergan xonadon egalarining haqiqiy hikoyalari."}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-[#FAF8F5] border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all",
                  filter === "all"
                    ? "bg-[#20211F] text-[#F5F2EC]"
                    : "bg-white text-[#77746D] border border-[#20211F]/10"
                )}
              >
                {locale === "ru" ? "Все отзывы" : "Barcha fikrlar"}
              </button>
              <button
                onClick={() => setFilter("inspection")}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all",
                  filter === "inspection"
                    ? "bg-[#20211F] text-[#F5F2EC]"
                    : "bg-white text-[#77746D] border border-[#20211F]/10"
                )}
              >
                {locale === "ru" ? "Приёмка квартир" : "Xonadon qabuli"}
              </button>
              <button
                onClick={() => setFilter("supervision")}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all",
                  filter === "supervision"
                    ? "bg-[#20211F] text-[#F5F2EC]"
                    : "bg-white text-[#77746D] border border-[#20211F]/10"
                )}
              >
                {locale === "ru" ? "Технадзор ремонта" : "Ta'mir texnazorati"}
              </button>
            </div>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#20211F] hover:text-[#A8794A] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#A8794A]" />
              <span>{locale === "ru" ? "Смотреть хайлайтс в Instagram →" : "Instagram highlights ko'rish →"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Cards Grid */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#FAF8F5] border border-[#20211F]/10 p-6 sm:p-8 rounded-sm flex flex-col justify-between hover:border-[#A8794A] transition-all shadow-editorial"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-xs font-mono text-[#A8794A]">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{rev.source}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#77746D]">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#20211F]/80 leading-relaxed italic">
                    «{locale === "ru" ? rev.textRu : rev.textUz}»
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#20211F]/10">
                  <p className="font-serif font-bold text-base text-[#20211F]">
                    {rev.author}
                  </p>
                  <p className="text-[11px] text-[#A8794A] font-medium mt-0.5">
                    {locale === "ru" ? rev.serviceRu : rev.serviceUz}
                  </p>
                  <p className="text-[11px] text-[#77746D]">
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
