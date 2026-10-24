"use client";

import React from "react";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { CoreServices } from "@/components/sections/CoreServices";
import { WhyExpert } from "@/components/sections/WhyExpert";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { ExpertBio } from "@/components/sections/ExpertBio";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const { t, locale } = useLanguage();

  return (
    <>
      {/* SECTION A — HERO */}
      <Hero />

      {/* SECTION B — TRUST & CREDIBILITY */}
      <TrustBar />

      {/* SECTION C — THREE CORE SERVICES */}
      <CoreServices />

      {/* SECTION D — WHY CLIENTS NEED AN EXPERT */}
      <WhyExpert />

      {/* SECTION E — WORKING PROCESS */}
      <ProcessTimeline />

      {/* SECTION F — SELECTED PROJECTS PREVIEW */}
      <section className="py-24 sm:py-32 bg-[#F6F3EC] border-b border-[#1C1D1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-16 border-b border-[#1C1D1A]/10 gap-6">
            <div className="max-w-3xl">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
                {locale === "ru" ? "ПРАКТИЧЕСКИЙ ОПЫТ" : "AMALIY TAJRIBA"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1D1A] leading-[1.06]">
                {locale === "ru" ? "Избранные кейсы и обследования" : "Saralangan keyslar va tekshiruvlar"}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6B64] mt-3 leading-relaxed max-w-xl">
                {locale === "ru"
                  ? "Документированные примеры скрытых дефектов, контроля технологических узлов и готовых интерьеров под надзором эксперта."
                  : "Ekspert nazorati ostida aniqlangan kamchiliklar, yashirin ishlar va tayyor interyerlarning hujjatlashtirilgan namunalari."}
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[#1C1D1A] hover:text-[#9E7448] transition-colors border-b border-[#1C1D1A]/30 pb-1"
            >
              <span>{locale === "ru" ? "Смотреть все проекты" : "Barcha loyihalar"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <PortfolioGrid limit={4} />
        </div>
      </section>

      {/* SECTION G — THE EXPERT */}
      <ExpertBio />

      {/* SECTION H — CLIENT REVIEWS */}
      <ReviewsSection />

      {/* SECTION I — FAQ */}
      <section className="py-24 sm:py-32 bg-[#F6F3EC] border-b border-[#1C1D1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-14 border-b border-[#1C1D1A]/10 gap-6">
            <div className="max-w-3xl">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
                {locale === "ru" ? "ЧАСТЫЕ ВОПРОСЫ" : "KO'P SO'RALADIGAN SAVOLLAR"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1D1A] leading-[1.06]">
                {locale === "ru" ? "Ответы на ключевые вопросы" : "Asosiy savollarga javoblar"}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6B64] mt-3 leading-relaxed max-w-xl">
                {locale === "ru"
                  ? "Всё, что важно знать о сроках, стоимости, дефектных актах и ответственности сторон."
                  : "Muddatlar, narxlar, dalolatnomalar va tomonlar mas'uliyati haqida bilishingiz kerak bo'lgan barcha ma'lumotlar."}
              </p>
            </div>
            <div className="font-mono text-[10px] text-[#6E6B64] tracking-widest uppercase">
              GENERAL INQUIRIES & PROTOCOL
            </div>
          </div>

          <div className="max-w-3xl">
            <FAQSection limit={5} />
            <div className="mt-10">
              <Link
                href="/faq"
                className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[#1C1D1A] hover:text-[#9E7448] transition-colors border-b border-[#1C1D1A]/30 pb-0.5"
              >
                <span>{locale === "ru" ? "Все вопросы и ответы →" : "Barcha savol-javoblar →"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION J — FINAL CONVERSION CTA */}
      <FinalCTA />
    </>
  );
}
