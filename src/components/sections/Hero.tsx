"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { ArrowDown, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-32 overflow-hidden border-b border-[#20211F]/10">
      {/* Editorial background subtle grain / line grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#20211F_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Small eyebrow label */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1 bg-[#20211F]/5 border border-[#20211F]/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8794A] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-[#77746D] uppercase font-semibold">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* Massive Editorial Headline with deliberate line breaks */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#20211F] leading-[0.92]">
              <span className="block">{t.hero.titleLine1}</span>
              <span className="block text-[#A8794A] italic font-normal">
                {t.hero.titleLine2}
              </span>
              <span className="block">{t.hero.titleLine3}</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#77746D] font-normal max-w-2xl leading-relaxed text-balance">
              {t.hero.subtitle}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 shadow-md group"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-[#EAE5DC] text-[#20211F] text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-sm border border-[#20211F]/20 transition-all duration-300"
              >
                <span>{t.hero.secondaryCta}</span>
              </Link>
            </div>

            {/* Credibility Horizontal Metric Strip */}
            <div className="pt-8 border-t border-[#20211F]/10 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F] block">
                  {siteConfig.stats.inspectedApartments}
                </span>
                <span className="text-[11px] sm:text-xs text-[#77746D] block leading-tight font-medium mt-1">
                  {t.hero.metricApartments}
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#A8794A] block">
                  {siteConfig.stats.instagramFollowers}
                </span>
                <span className="text-[11px] sm:text-xs text-[#77746D] block leading-tight font-medium mt-1">
                  {t.hero.metricAudience}
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F] block">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-[#77746D] block leading-tight font-medium mt-1">
                  {locale === "ru" ? "независимый контроль" : "mustaqil nazorat"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual + Anna Goncharova Portrait (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card with architectural luxury interior */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-luxury border border-[#20211F]/10 bg-[#EAE5DC]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Премиальная квартира в Ташкенте"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/80 via-[#20211F]/20 to-transparent" />

                {/* Technical overlay tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#F5F2EC]/90 uppercase">
                  <span className="bg-[#20211F]/70 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-white/10">
                    ТАШКЕНТ · НОВОСТРОЙКИ
                  </span>
                  <span className="bg-[#A8794A]/80 backdrop-blur-sm px-2.5 py-1 rounded-sm text-white">
                    ТЕХНАДЗОР
                  </span>
                </div>

                {/* Bottom caption inside card */}
                <div className="absolute bottom-4 left-4 right-4 text-[#F5F2EC]">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#A8794A]">
                    СТАНДАРТ КАЧЕСТВА
                  </p>
                  <p className="font-serif text-lg sm:text-xl font-bold leading-tight mt-0.5">
                    Инструментальная точность до миллиметра
                  </p>
                </div>
              </div>

              {/* Floating Expert Card with Anna's authentic profile photo */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#FAF8F5] border border-[#20211F]/15 p-4 rounded-sm shadow-xl flex items-center space-x-3.5 max-w-[280px] sm:max-w-[320px] backdrop-blur-sm">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#A8794A] flex-shrink-0 bg-[#EAE5DC]">
                  <Image
                    src="/images/anna/avatar.png"
                    alt="Анна Гончарова"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-serif text-sm font-bold text-[#20211F] block">
                      Анна Гончарова
                    </span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A8794A]" />
                  </div>
                  <span className="text-[11px] text-[#77746D] block leading-tight">
                    {locale === "ru" ? "Эксперт по новостройкам Ташкента" : "Toshkent yangi uylari eksperti"}
                  </span>
                  <span className="text-[10px] font-mono text-[#A8794A] block mt-0.5 font-medium">
                    5 000+ объектов проверено
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discreet Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-1 text-[#77746D]/60 pointer-events-none">
        <span className="text-[9px] font-mono uppercase tracking-widest">
          {t.hero.scrollHint}
        </span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
