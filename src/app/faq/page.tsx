"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { faqItems } from "@/content/faq";
import { siteConfig } from "@/content/config";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Search, ChevronDown, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const { locale } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filtered = faqItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" ? true : item.category === activeCategory;

    const query = search.toLowerCase().trim();
    const matchesSearch =
      query === ""
        ? true
        : item.questionRu.toLowerCase().includes(query) ||
          item.answerRu.toLowerCase().includes(query) ||
          item.questionUz.toLowerCase().includes(query) ||
          item.answerUz.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 sm:pt-36">
      {/* Header */}
      <section className="pb-16 sm:pb-24 border-b border-[#1C1D1A]/10 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 font-mono text-[10px] tracking-[0.25em] text-[#9E7448] uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#9E7448]" />
            <span>{locale === "ru" ? "ВОПРОСЫ И ОТВЕТЫ" : "SAVOL-JAVOBLAR"}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1D1A] leading-[1.02] max-w-4xl">
            {locale === "ru"
              ? "Часто задаваемые вопросы о приёмке и контроле ремонта"
              : "Qabul va ta'mir nazorati bo'yicha tez-tez beriladigan savollar"}
          </h1>
          <p className="text-base sm:text-lg text-[#6E6B64] mt-5 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "Подробно разбираем технические и организационные моменты: от сроков передачи дефектного акта застройщику до порядка выездов эксперта."
              : "Texnik va tashkiliy masalalarni batafsil ko'rib chiqamiz: dalolatnomani topshirish muddatlaridan to ekspert tashriflarigacha."}
          </p>

          {/* Search Input Bar */}
          <div className="mt-8 sm:mt-10 max-w-xl relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6B64]/60 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={locale === "ru" ? "Поиск по вопросам (стяжка, сроки, акт)..." : "Savollar bo'yicha qidiruv..."}
              className="w-full min-h-[46px] pl-12 pr-4 py-2.5 bg-[#FAF8F4] border border-[#1C1D1A]/15 rounded-none text-base sm:text-sm text-[#1C1D1A] placeholder-[#6E6B64]/50 focus:outline-none focus:border-[#9E7448] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Categories & Accordion */}
      <section className="py-20 sm:py-24 bg-[#F6F3EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Pills */}
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 pb-4 -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap border-b border-[#1C1D1A]/10 mb-8">
            {[
              { id: "all", labelRu: "Все вопросы", labelUz: "Barcha savollar" },
              { id: "inspection", labelRu: "Приёмка квартир", labelUz: "Xonadon qabuli" },
              { id: "supervision", labelRu: "Технадзор ремонта", labelUz: "Ta'mir texnazorati" },
              { id: "turnkey", labelRu: "Ремонт под ключ", labelUz: "Kalit ostida ta'mir" },
              { id: "general", labelRu: "Стоимость и запись", labelUz: "Narx va yozilish" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex-shrink-0 min-h-[44px] px-4 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-all touch-manipulation",
                  activeCategory === cat.id
                    ? "bg-[#1C1D1A] text-[#F6F3EC]"
                    : "bg-[#FAF8F4] text-[#6E6B64] hover:text-[#1C1D1A] border border-[#1C1D1A]/12"
                )}
              >
                {locale === "ru" ? cat.labelRu : cat.labelUz}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="p-8 text-center bg-[#FAF8F4] border border-[#1C1D1A]/12 text-xs font-mono text-[#6E6B64]">
                {locale === "ru" ? "По вашему запросу вопросов не найдено." : "So'rovingiz bo'yicha savollar topilmadi."}
              </div>
            ) : (
              filtered.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={cn(
                      "border transition-all duration-200 bg-[#FAF8F4]",
                      isOpen ? "border-[#9E7448]" : "border-[#1C1D1A]/12 hover:border-[#9E7448]/40"
                    )}
                  >
                    <button
                      onClick={() => toggleOpen(item.id)}
                      className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-serif text-lg sm:text-xl font-normal text-[#1C1D1A]">
                        {locale === "ru" ? item.questionRu : item.questionUz}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-[#9E7448] flex-shrink-0 transition-transform duration-300",
                          isOpen ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 sm:px-7 pb-7 pt-1 text-xs sm:text-sm text-[#6E6B64] leading-relaxed border-t border-[#1C1D1A]/8 animate-fadeIn">
                        <p>{locale === "ru" ? item.answerRu : item.answerUz}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Inquiry Callout */}
          <div className="mt-14 p-8 bg-[#FAF8F4] border border-[#1C1D1A]/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-serif text-xl font-normal text-[#1C1D1A]">
                {locale === "ru" ? "Не нашли ответ на свой вопрос?" : "Savolingizga javob topmadingizmi?"}
              </h4>
              <p className="text-xs text-[#6E6B64]">
                {locale === "ru"
                  ? "Напишите лично Анне в Telegram — оперативно ответим на любые вопросы по объекту."
                  : "Telegram orqali to'g'ridan-to'g'ri Annaga yozing — tez orada javob beramiz."}
              </p>
            </div>
            <a
              href={siteConfig.telegramDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-colors border border-[#1C1D1A]"
            >
              <Send className="w-3.5 h-3.5 text-[#B88E5E]" />
              <span>Задать вопрос в TG</span>
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
