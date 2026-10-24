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
    <div className="pt-24 sm:pt-32">
      {/* Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
            {locale === "ru" ? "ВОПРОСЫ И ОТВЕТЫ" : "SAVOL-JAVOBLAR"}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#20211F] mt-2 leading-[1.05] max-w-4xl">
            {locale === "ru"
              ? "Часто задаваемые вопросы о приёмке и контроле ремонта"
              : "Qabul va ta'mir nazorati bo'yicha tez-tez beriladigan savollar"}
          </h1>
          <p className="text-base sm:text-lg text-[#77746D] mt-4 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "Подробно разбираем технические и организационные моменты: от сроков передачи дефектного акта застройщику до порядка выездов эксперта."
              : "Texnik va tashkiliy masalalarni batafsil ko'rib chiqamiz: dalolatnomani topshirish muddatlaridan to ekspert tashriflarigacha."}
          </p>

          {/* Search Input Bar */}
          <div className="mt-8 max-w-xl relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#77746D]/60" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={locale === "ru" ? "Поиск по вопросам (например, стяжка, сроки, акт)..." : "Savollar bo'yicha qidiruv..."}
              className="w-full pl-12 pr-4 py-3.5 bg-[#FAF8F5] border border-[#20211F]/15 rounded-sm text-sm text-[#20211F] placeholder-[#77746D]/50 focus:outline-none focus:border-[#A8794A] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Categories & Accordion */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 pb-8">
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
                  "px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all",
                  activeCategory === cat.id
                    ? "bg-[#20211F] text-[#F5F2EC]"
                    : "bg-white text-[#77746D] hover:text-[#20211F] border border-[#20211F]/10"
                )}
              >
                {locale === "ru" ? cat.labelRu : cat.labelUz}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="p-8 text-center bg-[#FAF8F5] border border-[#20211F]/10 rounded-sm text-sm text-[#77746D]">
                {locale === "ru" ? "По вашему запросу вопросов не найдено." : "So'rovingiz bo'yicha savollar topilmadi."}
              </div>
            ) : (
              filtered.map((item) => {
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
              })
            )}
          </div>

          {/* Did not find answer callout */}
          <div className="mt-12 p-6 sm:p-8 bg-[#EAE5DC]/60 border border-[#20211F]/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-[#20211F]">
                {locale === "ru" ? "Не нашли ответ на свой вопрос?" : "Savolingizga javob topmadingizmi?"}
              </h4>
              <p className="text-xs text-[#77746D] mt-1">
                {locale === "ru"
                  ? "Напишите лично Анне в Telegram — оперативно ответим на любые вопросы по объекту."
                  : "Telegram orqali to'g'ridan-to'g'ri Annaga yozing — tez orada javob beramiz."}
              </p>
            </div>
            <a
              href={siteConfig.telegramDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center space-x-2 px-5 py-3 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
            >
              <Send className="w-4 h-4 text-[#A8794A]" />
              <span>Задать вопрос в TG</span>
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
