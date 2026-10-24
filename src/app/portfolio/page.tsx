"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function PortfolioPage() {
  const { locale } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36">
      {/* Header */}
      <section className="pb-16 sm:pb-24 border-b border-[#1C1D1A]/10 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 font-mono text-[10px] tracking-[0.25em] text-[#9E7448] uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#9E7448]" />
            <span>{locale === "ru" ? "ПОРТФОЛИО И ПРАКТИКА" : "PORTFOLIO VA AMALIYOT"}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1D1A] leading-[1.02] max-w-4xl">
            {locale === "ru"
              ? "Реальные кейсы, строительные дефекты и готовые интерьеры"
              : "Haqiqiy keyslar, qurilish nuqsonlari va tayyor interyerlar"}
          </h1>
          <p className="text-base sm:text-lg text-[#6E6B64] mt-5 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "Каждый проект — это документальное подтверждение экспертизы. Фильтрация по типам услуг и подробный технический разбор дефектов."
              : "Har bir loyiha — ekspertizaning hujjatli tasdig'idir. Xizmat turlari bo'yicha saralash va nuqsonlarning batafsil tahlili."}
          </p>
        </div>
      </section>

      {/* Main Grid with Category Filters */}
      <section className="py-24 bg-[#F6F3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid showFilter={true} />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
