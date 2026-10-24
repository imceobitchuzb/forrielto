"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { LeadForm } from "@/components/sections/LeadForm";
import {
  Send,
  Instagram,
  MapPin,
  Mail,
  Clock,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-24 sm:pt-32">
      {/* Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
            {locale === "ru" ? "СВЯЗАТЬСЯ С ЭКСПЕРТОМ" : "EKSPERT BILAN BOG'LANISH"}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#20211F] mt-2 leading-[1.05] max-w-4xl">
            {locale === "ru"
              ? "Обсудить вашу квартиру, приёмку или надзор за ремонтом"
              : "Xonadoningiz, qabul qilish yoki ta'mir nazoratini muhokama qilish"}
          </h1>
          <p className="text-base sm:text-lg text-[#77746D] mt-4 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "Оставьте заявку на сайте или напишите напрямую в Telegram. Согласуем дату осмотра или формат технического надзора."
              : "Saytda ariza qoldiring yoki to'g'ridan-to'g'ri Telegram orqali yozing. Ko'rik sanasini yoki texnazorat formatini kelishib olamiz."}
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left side: Channels & Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A8794A] font-semibold">
                  ПРЯМАЯ СВЯЗЬ
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#20211F]">
                  Мессенджеры и социальные сети
                </h3>
                <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed">
                  Быстрее всего связаться с нами через личный Telegram или оставить заявку в форме.
                </p>
              </div>

              {/* Direct channels list */}
              <div className="space-y-3">
                <a
                  href={siteConfig.telegramDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-4 bg-[#FAF8F5] border border-[#20211F]/10 hover:border-[#A8794A] rounded-sm transition-all shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#A8794A]/10 text-[#A8794A] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#77746D] uppercase block">
                      Личный Telegram
                    </span>
                    <span className="text-sm font-semibold text-[#20211F] group-hover:text-[#A8794A] transition-colors block">
                      @Anna_040506
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.telegramChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-4 bg-[#FAF8F5] border border-[#20211F]/10 hover:border-[#A8794A] rounded-sm transition-all shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#A8794A]/10 text-[#A8794A] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#77746D] uppercase block">
                      Канал в Telegram
                    </span>
                    <span className="text-sm font-semibold text-[#20211F] group-hover:text-[#A8794A] transition-colors block">
                      @goncharovaexpert
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-4 bg-[#FAF8F5] border border-[#20211F]/10 hover:border-[#A8794A] rounded-sm transition-all shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#A8794A]/10 text-[#A8794A] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#77746D] uppercase block">
                      Instagram Блог (17K+)
                    </span>
                    <span className="text-sm font-semibold text-[#20211F] group-hover:text-[#A8794A] transition-colors block">
                      @goncharova.expert
                    </span>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 p-4 bg-[#FAF8F5] border border-[#20211F]/10 rounded-sm shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#20211F]/5 text-[#20211F] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#A8794A]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#77746D] uppercase block">
                      Локация
                    </span>
                    <span className="text-sm font-semibold text-[#20211F] block">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 p-4 bg-[#FAF8F5] border border-[#20211F]/10 rounded-sm shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#20211F]/5 text-[#20211F] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#A8794A]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#77746D] uppercase block">
                      График работы
                    </span>
                    <span className="text-sm font-semibold text-[#20211F] block">
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
