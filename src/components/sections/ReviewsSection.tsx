"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { reviewsData } from "@/content/reviews";
import { siteConfig } from "@/content/config";
import { MessageSquare, Instagram, Send, ShieldCheck } from "lucide-react";

export function ReviewsSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#EAE5DC]/50 border-b border-[#20211F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              {locale === "ru" ? "РЕАЛЬНЫЙ ОПЫТ КЛИЕНТОВ" : "MIJOZLAR TAJRIBASI"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20211F] mt-2 leading-[1.08]">
              {locale === "ru" ? "Отзывы владельцев квартир" : "Xonadon egalarining fikrlari"}
            </h2>
            <p className="text-sm text-[#77746D] mt-2">
              {locale === "ru"
                ? "Отклики заказчиков из Telegram и Instagram по итогам приёмок и надзора за ремонтом в жилых комплексах Ташкента."
                : "Toshkent turar-joy majmualarida qabul va ta'mir nazorati bo'yicha Telegram va Instagram orqali mijozlar fikrlari."}
            </p>
          </div>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#20211F] hover:text-[#A8794A] transition-colors border-b border-[#20211F]/30 pb-0.5"
          >
            <Instagram className="w-4 h-4 text-[#A8794A]" />
            <span>{locale === "ru" ? "Смотреть хайлайтс в Instagram" : "Instagram highlights ko'rish"}</span>
          </a>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF8F5] border border-[#20211F]/10 p-6 sm:p-8 rounded-sm flex flex-col justify-between hover:border-[#A8794A] transition-all shadow-editorial"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-[#A8794A]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{rev.source}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#77746D]">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#20211F]/80 leading-relaxed italic">
                  «{locale === "ru" ? rev.textRu : rev.textUz}»
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#20211F]/10">
                <p className="font-serif font-bold text-base text-[#20211F]">
                  {rev.author}
                </p>
                <p className="text-[11px] text-[#A8794A] font-medium mt-0.5">
                  {locale === "ru" ? rev.serviceRu : rev.serviceUz}
                </p>
                <p className="text-[11px] text-[#77746D]">
                  {locale === "ru" ? rev.complexRu : rev.complexUz}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
