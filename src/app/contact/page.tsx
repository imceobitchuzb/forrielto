"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { LeadForm } from "@/components/sections/LeadForm";
import {
  Send,
  Instagram,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36">
      {/* Header */}
      <section className="pb-16 sm:pb-24 border-b border-[#1C1D1A]/10 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 font-mono text-[10px] tracking-[0.25em] text-[#9E7448] uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#9E7448]" />
            <span>{locale === "ru" ? "СВЯЗАТЬСЯ С ЭКСПЕРТОМ" : "EKSPERT BILAN BOG'LANISH"}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1D1A] leading-[1.02] max-w-4xl">
            {locale === "ru"
              ? "Обсудить вашу задачу, приёмку или надзор за ремонтом"
              : "Xonadoningiz, qabul qilish yoki ta'mir nazoratini muhokama qilish"}
          </h1>
          <p className="text-base sm:text-lg text-[#6E6B64] mt-5 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "Оставьте заявку на сайте или напишите напрямую в Telegram. Согласуем дату осмотра или формат технического надзора."
              : "Saytda ariza qoldiring yoki to'g'ridan-to'g'ri Telegram orqali yozing. Ko'rik sanasini yoki texnazorat formatini kelishib olamiz."}
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24 bg-[#F6F3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left side: Channels & Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2 pb-4 border-b border-[#1C1D1A]/10">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#9E7448] font-semibold block">
                  ПРЯМАЯ СВЯЗЬ // DISPATCH
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1A]">
                  Официальные каналы связи
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6B64] leading-relaxed">
                  Быстрее всего связаться с нами через личный Telegram или оставить заявку в форме.
                </p>
              </div>

              {/* Direct channels list */}
              <div className="space-y-3 font-mono">
                <a
                  href={siteConfig.telegramDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-5 bg-[#FAF8F4] border border-[#1C1D1A]/12 hover:border-[#9E7448] transition-all shadow-sm group"
                >
                  <div className="w-10 h-10 bg-[#9E7448]/10 text-[#9E7448] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6E6B64] uppercase tracking-wider block">
                      Личный Telegram
                    </span>
                    <span className="text-sm font-semibold text-[#1C1D1A] group-hover:text-[#9E7448] transition-colors block">
                      @Anna_040506
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.telegramChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-5 bg-[#FAF8F4] border border-[#1C1D1A]/12 hover:border-[#9E7448] transition-all shadow-sm group"
                >
                  <div className="w-10 h-10 bg-[#9E7448]/10 text-[#9E7448] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6E6B64] uppercase tracking-wider block">
                      Канал в Telegram
                    </span>
                    <span className="text-sm font-semibold text-[#1C1D1A] group-hover:text-[#9E7448] transition-colors block">
                      @goncharovaexpert
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-5 bg-[#FAF8F4] border border-[#1C1D1A]/12 hover:border-[#9E7448] transition-all shadow-sm group"
                >
                  <div className="w-10 h-10 bg-[#9E7448]/10 text-[#9E7448] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6E6B64] uppercase tracking-wider block">
                      Instagram Блог (17K+)
                    </span>
                    <span className="text-sm font-semibold text-[#1C1D1A] group-hover:text-[#9E7448] transition-colors block">
                      @goncharova.expert
                    </span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-5 bg-[#FAF8F4] border border-[#1C1D1A]/12">
                  <div className="w-10 h-10 bg-[#1C1D1A]/5 text-[#1C1D1A] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#9E7448]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6E6B64] uppercase tracking-wider block">
                      Локация
                    </span>
                    <span className="text-sm text-[#1C1D1A] block">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-5 bg-[#FAF8F4] border border-[#1C1D1A]/12">
                  <div className="w-10 h-10 bg-[#1C1D1A]/5 text-[#1C1D1A] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#9E7448]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6E6B64] uppercase tracking-wider block">
                      График работы
                    </span>
                    <span className="text-xs text-[#1C1D1A] block">
                      Пн — Сб: 09:00 – 19:00 (выезды по согласованию)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Lead Consultation Form (7 cols) */}
            <div className="lg:col-span-7">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
