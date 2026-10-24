"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function PortfolioPage() {
  const { locale } = useLanguage();

  return (
    <div className="pt-24 sm:pt-32">
      {/* Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
            {locale === "ru" ? "ПОРТФОЛИО И ПРАКТИКА" : "PORTFOLIO VA AMALIYOT"}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#20211F] mt-2 leading-[1.05]">
            {locale === "ru"
              ? "Реальные кейсы, строительные дефекты и готовые интерьеры"
              : "Haqiqiy keyslar, qurilish nuqsonlari va tayyor interyerlar"}
          </h1>
          <p className="text-base sm:text-lg text-[#77746D] mt-4 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "Каждый проект — это документальное подтверждение экспертизы. Фильтрация по типам услуг и подробный разбор дефектов."
              : "Har bir loyiha — ekspertizaning hujjatli tasdig'idir. Xizmat turlari bo'yicha saralash va nuqsonlarning batafsil tahlili."}
          </p>
        </div>
      </section>

      {/* Main Grid with Category Filters */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid showFilter={true} />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
