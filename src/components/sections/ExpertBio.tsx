"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { FadeIn, ImageReveal } from "@/components/motion/MotionPrimitives";
import { Instagram, Send } from "lucide-react";

export function ExpertBio() {
  const { t, locale } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#1C1D1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait side (5 cols) */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.1}>
              <div className="arch-img-frame aspect-[3/4] max-w-md mx-auto border border-[#1C1D1A]/15 shadow-2xl bg-[#EBE6DC]">
                <ImageReveal delay={0.2}>
                  <Image
                    src="/images/anna/post2.png"
                    alt="Анна Гончарова"
                    fill
                    className="object-cover"
                  />
                </ImageReveal>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-[#F6F3EC] z-20">
                  <p className="font-serif text-2xl font-normal">Анна Гончарова</p>
                  <p className="text-[10px] text-[#B88E5E] font-mono uppercase tracking-[0.2em] mt-1">
                    {locale === "ru"
                      ? "Независимый строительный эксперт"
                      : "Mustaqil qurilish eksperti"}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Architectural Drafting Stamp */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-[#1C1D1A] text-[#F6F3EC] p-4 text-center font-mono border border-white/10 shadow-xl z-20">
              <span className="text-sm font-bold text-[#B88E5E] block">5 000+</span>
              <span className="text-[9px] uppercase tracking-widest text-[#F6F3EC]/70 block mt-0.5">
                ОБЪЕКТОВ
              </span>
            </div>
          </div>

          {/* Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <FadeIn delay={0.15}>
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
                  {t.expert.tag}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1D1A] leading-tight">
                  {t.expert.headline}
                </h2>
              </div>
            </FadeIn>

            {/* Signature Quote in Italic Serif */}
            <FadeIn delay={0.25}>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#9E7448] italic font-light leading-relaxed pl-6 border-l-2 border-[#9E7448]">
                {t.expert.quote}
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="space-y-4 text-sm sm:text-base text-[#6E6B64] leading-relaxed">
                <p>{t.expert.bio1}</p>
                <p>{t.expert.bio2}</p>
              </div>
            </FadeIn>

            {/* Facts Tabular Matrix */}
            <FadeIn delay={0.45}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1C1D1A]/10">
                <div className="p-4 bg-[#EBE6DC]/40 border border-[#1C1D1A]/8">
                  <span className="text-[10px] font-mono text-[#6E6B64] block uppercase tracking-wider">Локация</span>
                  <span className="font-serif text-lg text-[#1C1D1A] mt-1 block">Ташкент</span>
                </div>
                <div className="p-4 bg-[#EBE6DC]/40 border border-[#1C1D1A]/8">
                  <span className="text-[10px] font-mono text-[#6E6B64] block uppercase tracking-wider">Аудитория</span>
                  <span className="font-serif text-lg text-[#9E7448] mt-1 block">17 000+ в Instagram</span>
                </div>
                <div className="p-4 bg-[#EBE6DC]/40 border border-[#1C1D1A]/8 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono text-[#6E6B64] block uppercase tracking-wider">Приоритет</span>
                  <span className="font-serif text-lg text-[#1C1D1A] mt-1 block">Заказчик 100%</span>
                </div>
              </div>
            </FadeIn>

            {/* Channels & Action */}
            <FadeIn delay={0.55}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={siteConfig.telegramDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-colors border border-[#1C1D1A]"
                >
                  <Send className="w-3.5 h-3.5 text-[#B88E5E]" />
                  <span>{t.expert.cta}</span>
                </a>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 border border-[#1C1D1A]/20 text-[#1C1D1A] hover:bg-[#EBE6DC] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#9E7448]" />
                  <span>Instagram @goncharova.expert</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
