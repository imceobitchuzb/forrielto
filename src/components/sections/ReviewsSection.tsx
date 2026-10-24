"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { reviewsData } from "@/content/reviews";
import { siteConfig } from "@/content/config";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionPrimitives";
import { Instagram, ShieldCheck } from "lucide-react";

export function ReviewsSection() {
  const { locale } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#EBE6DC]/40 border-b border-[#1C1D1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#1C1D1A]/10 gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
                {locale === "ru" ? "РЕАЛЬНЫЙ ОПЫТ КЛИЕНТОВ" : "MIJOZLAR TAJRIBASI"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1D1A] leading-[1.06]">
                {locale === "ru" ? "Отзывы владельцев квартир" : "Xonadon egalarining fikrlari"}
              </h2>
              <p className="text-sm text-[#6E6B64] mt-3">
                {locale === "ru"
                  ? "Отклики заказчиков из Telegram и Instagram по итогам приёмок и надзора за ремонтом в жилых комплексах Ташкента."
                  : "Toshkent turar-joy majmualarida qabul va ta'mir nazorati bo'yicha Telegram va Instagram orqali mijozlar fikrlari."}
              </p>
            </div>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[#1C1D1A] hover:text-[#9E7448] transition-colors border-b border-[#1C1D1A]/30 pb-1"
            >
              <Instagram className="w-3.5 h-3.5 text-[#9E7448]" />
              <span>{locale === "ru" ? "Смотреть хайлайтс в Instagram" : "Instagram highlights ko'rish"}</span>
            </a>
          </div>
        </FadeIn>

        {/* Reviews Cards with Staggered Entrance */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((rev) => (
            <StaggerItem
              key={rev.id}
              className="bg-[#FAF8F4] border border-[#1C1D1A]/12 p-8 flex flex-col justify-between hover:border-[#9E7448] transition-all shadow-sm group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#1C1D1A]/8">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-[#9E7448]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{rev.source}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6E6B64]">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#1C1D1A]/80 leading-relaxed italic font-serif">
                  «{locale === "ru" ? rev.textRu : rev.textUz}»
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1C1D1A]/8">
                <p className="font-serif text-lg font-normal text-[#1C1D1A]">
                  {rev.author}
                </p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#9E7448] mt-0.5">
                  {locale === "ru" ? rev.serviceRu : rev.serviceUz}
                </p>
                <p className="text-[11px] text-[#6E6B64] mt-0.5">
                  {locale === "ru" ? rev.complexRu : rev.complexUz}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
