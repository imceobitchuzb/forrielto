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
      <section className="py-20 sm:py-28 bg-[#F5F2EC] border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
                {locale === "ru" ? "ПРАКТИЧЕСКИЙ ОПЫТ" : "AMALIY TAJRIBA"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20211F] mt-2 leading-[1.08]">
                {locale === "ru" ? "Избранные кейсы и обследования" : "Saralangan keyslar va tekshiruvlar"}
              </h2>
              <p className="text-sm text-[#77746D] mt-2">
                {locale === "ru"
                  ? "Примеры реальных дефектов, скрытых работ и готовых интерьеров под контролем эксперта."
                  : "Ekspert nazorati ostida aniqlangan kamchiliklar, yashirin ishlar va tayyor interyerlar namunalari."}
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#20211F] hover:text-[#A8794A] transition-colors border-b border-[#20211F]/30 pb-0.5"
            >
              <span>{locale === "ru" ? "Смотреть все проекты" : "Barcha loyihalarni ko'rish"}</span>
              <ArrowUpRight className="w-4 h-4" />
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
      <section className="py-20 sm:py-28 bg-[#F5F2EC] border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              {locale === "ru" ? "ЧАСТЫЕ ВОПРОСЫ" : "KO'P SO'RALADIGAN SAVOLLAR"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20211F] mt-2 leading-[1.08]">
              {locale === "ru" ? "Ответы на ключевые вопросы" : "Asosiy savollarga javoblar"}
            </h2>
            <p className="text-sm text-[#77746D] mt-2">
              {locale === "ru"
                ? "Всё, что важно знать о сроках, стоимости, дефектных актах и ответственности сторон."
                : "Muddatlar, narxlar, dalolatnomalar va tomonlar mas'uliyati haqida bilishingiz kerak bo'lgan barcha narsalar."}
            </p>
          </div>

          <div className="max-w-3xl">
            <FAQSection limit={5} />
            <div className="mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider text-[#20211F] hover:text-[#A8794A] transition-colors border-b border-[#20211F]/30 pb-0.5"
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
