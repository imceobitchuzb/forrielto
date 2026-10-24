"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { ArrowDown, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#1C1D1A]/10 bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Architectural Drafting Coordinates */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-[#1C1D1A]/10 font-mono text-[10px] tracking-[0.25em] text-[#6E6B64] uppercase">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-[#9E7448]" />
            <span>41°19&apos;N · 69°16&apos;E // ТАШКЕНТ</span>
          </div>
          <div className="hidden sm:block">
            <span>НЕЗАВИСИМАЯ СТРОИТЕЛЬНАЯ ЭКСПЕРТИЗА</span>
          </div>
          <div>
            <span>REG. № 5000+ ОБЪЕКТОВ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Headlines & Haute Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Small eyebrow label */}
            <div className="inline-flex items-center space-x-3 text-xs font-mono tracking-[0.2em] text-[#9E7448] uppercase">
              <span className="h-[1px] w-6 bg-[#9E7448]" />
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Haute-Editorial Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal tracking-[-0.03em] text-[#1C1D1A] leading-[0.94] text-balance">
              <span className="block font-normal">КВАРТИРА.</span>
              <span className="block font-light italic text-[#9E7448] pl-2 sm:pl-6">
                ПРОВЕРЕННАЯ
              </span>
              <span className="block font-normal">НА КАЧЕСТВО.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#6E6B64] font-normal max-w-xl leading-relaxed text-balance">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 group border border-[#1C1D1A]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-[#EBE6DC] text-[#1C1D1A] text-xs uppercase tracking-[0.2em] font-medium border border-[#1C1D1A]/20 transition-all duration-300"
              >
                <span>{t.hero.secondaryCta}</span>
              </Link>
            </div>

            {/* Credibility Horizontal Metric Strip */}
            <div className="pt-10 border-t border-[#1C1D1A]/10 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1A] block">
                  {siteConfig.stats.inspectedApartments}
                </span>
                <span className="text-[11px] text-[#6E6B64] font-mono uppercase tracking-wider block mt-1">
                  {t.hero.metricApartments}
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#9E7448] block">
                  {siteConfig.stats.instagramFollowers}
                </span>
                <span className="text-[11px] text-[#6E6B64] font-mono uppercase tracking-wider block mt-1">
                  {t.hero.metricAudience}
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1A] block">
                  100%
                </span>
                <span className="text-[11px] text-[#6E6B64] font-mono uppercase tracking-wider block mt-1">
                  {locale === "ru" ? "Защита собственника" : "Mulkdor himoyasi"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative lg:pl-4">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Architectural Photograph */}
              <div className="arch-img-frame aspect-[4/5] bg-[#EBE6DC] border border-[#1C1D1A]/15 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Премиальная архитектура Ташкента"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A]/85 via-[#1C1D1A]/20 to-transparent" />

                {/* Technical Corner Annotations */}
                <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest text-[#F6F3EC]/80 uppercase bg-[#1C1D1A]/70 px-2.5 py-1 backdrop-blur-sm border border-white/10">
                  REF. 01 // HANDOVER PROTOCOL
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-[#F6F3EC] z-20">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E7448] block mb-1">
                    СТАНДАРТ ТЕХНАДЗОРА
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-normal leading-snug">
                    Инструментальная точность до 0.5 мм
                  </p>
                </div>
              </div>

              {/* Editorial Seal: Expert Portrait Overlay */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-[#FAF8F4] border border-[#1C1D1A]/20 p-4 sm:p-5 shadow-2xl flex items-center space-x-4 max-w-[310px] sm:max-w-[340px]">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#9E7448] flex-shrink-0 bg-[#EBE6DC]">
                  <Image
                    src="/images/anna/avatar.png"
                    alt="Анна Гончарова"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-serif text-base font-medium text-[#1C1D1A]">
                      Анна Гончарова
                    </span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#9E7448]" />
                  </div>
                  <span className="text-[11px] text-[#6E6B64] font-mono uppercase tracking-wider block">
                    {locale === "ru" ? "Ведущий эксперт" : "Yetakchi ekspert"}
                  </span>
                  <span className="text-[10px] font-mono text-[#9E7448] block">
                    5 000+ проверенных квартир
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discreet Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-1 text-[#6E6B64]/50 pointer-events-none">
        <span className="text-[8px] font-mono uppercase tracking-[0.3em]">SCROLL</span>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </div>
    </section>
  );
}
