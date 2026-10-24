"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { ArrowUpRight, Instagram, Send, ShieldCheck } from "lucide-react";

export function ExpertBio() {
  const { t, locale } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#20211F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait side (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden border border-[#20211F]/15 shadow-luxury bg-[#EAE5DC]">
              <Image
                src="/images/anna/post2.png"
                alt="Анна Гончарова"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#20211F]/80 backdrop-blur-md p-4 rounded-sm text-[#F5F2EC] border border-white/10">
                <p className="font-serif text-lg font-bold">Анна Гончарова</p>
                <p className="text-xs text-[#A8794A] font-mono uppercase tracking-wider">
                  {locale === "ru" ? "Независимый строительный эксперт" : "Mustaqil qurilish eksperti"}
                </p>
              </div>
            </div>

            {/* Credibility Stamp Tag */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-[#20211F] text-[#F5F2EC] p-3 rounded-sm shadow-md text-center font-mono">
              <span className="text-xs font-bold text-[#A8794A] block">5 000+</span>
              <span className="text-[9px] uppercase tracking-widest text-[#F5F2EC]/80 block">
                КВАРТИР
              </span>
            </div>
          </div>

          {/* Bio Copy Side (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              {t.expert.tag}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20211F] leading-tight">
              {t.expert.headline}
            </h2>

            <p className="font-serif text-lg sm:text-xl text-[#A8794A] italic font-medium leading-relaxed border-l-2 border-[#A8794A] pl-4">
              {t.expert.quote}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#77746D] leading-relaxed">
              <p>{t.expert.bio1}</p>
              <p>{t.expert.bio2}</p>
            </div>

            {/* Key Facts Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#20211F]/10">
              <div className="p-3 bg-[#EAE5DC]/50 rounded-sm">
                <span className="text-xs font-mono text-[#77746D] block uppercase">Локация</span>
                <span className="font-medium text-[#20211F] text-sm mt-0.5 block">Ташкент</span>
              </div>
              <div className="p-3 bg-[#EAE5DC]/50 rounded-sm">
                <span className="text-xs font-mono text-[#77746D] block uppercase">Аудитория</span>
                <span className="font-medium text-[#20211F] text-sm mt-0.5 block">17K+ в Instagram</span>
              </div>
              <div className="p-3 bg-[#EAE5DC]/50 rounded-sm col-span-2 sm:col-span-1">
                <span className="text-xs font-mono text-[#77746D] block uppercase">Позиция</span>
                <span className="font-medium text-[#20211F] text-sm mt-0.5 block">Заказчик 100%</span>
              </div>
            </div>

            {/* Social channels & CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={siteConfig.telegramDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
              >
                <Send className="w-4 h-4 text-[#A8794A]" />
                <span>{t.expert.cta}</span>
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 border border-[#20211F]/20 text-[#20211F] hover:bg-[#EAE5DC] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#A8794A]" />
                <span>Instagram @goncharova.expert</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
