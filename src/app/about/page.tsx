"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ShieldCheck,
  CheckCircle2,
  Instagram,
  Send,
  Award,
  Compass,
  ArrowUpRight,
} from "lucide-react";

export default function AboutPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-24 sm:pt-32">
      {/* Editorial Header */}
      <section className="pb-16 sm:pb-20 border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
            {locale === "ru" ? "ОБ ЭКСПЕРТЕ" : "EKSPERT HAQIDA"}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#20211F] mt-2 leading-[1.05] max-w-4xl">
            {locale === "ru"
              ? "Анна Гончарова: независимый контроль качества недвижимости в Ташкенте"
              : "Anna Goncharova: Toshkentda ko'chmas mulk sifatining mustaqil nazorati"}
          </h1>
          <p className="text-base sm:text-lg text-[#77746D] mt-4 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "«Из Уфы в Ташкент, без связей построила имя в строительстве». Принципиальная защита интересов собственника, инструментальная точность и честный диалог."
              : "«Ufadan Toshkentga, tanish-bilishsiz qurilish sohasida o'z nomimni yaratdim». Mulk egasi manfaatlarini himoya qilish va sifatga qat'iy yondashuv."}
          </p>
        </div>
      </section>

      {/* Main Biography & Photos Grid */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visuals on the left (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-[#20211F]/15 shadow-luxury bg-[#EAE5DC]">
                <Image
                  src="/images/anna/post2.png"
                  alt="Анна Гончарова"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Smaller secondary image */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-sm overflow-hidden border border-[#20211F]/10 bg-[#EAE5DC]">
                  <Image
                    src="/images/anna/post3.png"
                    alt="Анна Гончарова на объекте"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-sm overflow-hidden border border-[#20211F]/10 bg-[#EAE5DC]">
                  <Image
                    src="/images/anna/post4.png"
                    alt="Анна Гончарова"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Social Channels Callout */}
              <div className="p-6 bg-[#EAE5DC]/60 border border-[#20211F]/10 rounded-sm space-y-3">
                <span className="text-[11px] font-mono text-[#77746D] uppercase tracking-wider block">
                  Официальные каналы эксперта
                </span>
                <div className="space-y-2">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs font-semibold text-[#20211F] hover:text-[#A8794A] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#A8794A]" />
                    <span>Instagram @goncharova.expert (17K+ подписчиков)</span>
                  </a>
                  <a
                    href={siteConfig.telegramChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs font-semibold text-[#20211F] hover:text-[#A8794A] transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#A8794A]" />
                    <span>Telegram-канал @goncharovaexpert</span>
                  </a>
                  <a
                    href={siteConfig.telegramDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs font-semibold text-[#20211F] hover:text-[#A8794A] transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#A8794A]" />
                    <span>Личный контакт в Telegram @Anna_040506</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Narrative Story (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F]">
                {locale === "ru"
                  ? "Путь в профессии: от первого объекта до более чем 5 000 проверенных квартир"
                  : "Kasbiy yo'l: birinchi obyektdan to 5 000 dan ortiq tekshirilgan xonadongacha"}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#77746D] leading-relaxed">
                <p>
                  {locale === "ru"
                    ? "Приехав в Ташкент из Уфы, я столкнулась с колоссальным строительным бумом в столице. Застройщики возводят десятки жилых комплексов, но скорость сдачи нередко опережает контроль качества."
                    : "Ufadan Toshkentga kelganimda, poytaxtdagi ulkan qurilish rivojlanishiga guvoh bo'ldim. Quruvchilar o'nlab majmualarni qurmoqda, biroq topshirish tezligi ko'pincha sifat nazoratidan o'zib ketadi."}
                </p>

                <p>
                  {locale === "ru"
                    ? "Большинство покупателей подписывают акты приёма-передачи, не подозревая, что под слоем штукатурки скрыты мостики холода, неработающая вентиляция, растрескавшаяся стяжка или перекошенные оконные блоки. С этого момента я сделала своей миссией — бескомпромиссную защиту интересов будущего жильца."
                    : "Ko'pchilik xaridorlar qabul qilish dalolatnomasini suvoq ostida sovuq ko'priklari, ishlamaydigan ventilyatsiya yoki buzilgan romlar borligini bilmay imzolaydilar. Shu paytdan boshlab mening maqsadim — kelajakdagi xonadon egasining manfaatlarini qat'iy himoya qilish bo'ldi."}
                </p>

                <p>
                  {locale === "ru"
                    ? "Сегодня за моими плечами — более 5 000 проверенных квартир в Ташкенте, сотни предотвращенных переделок и сэкономленные миллионы сумов для заказчиков. Я не сотрудничаю с застройщиками и не продвигаю чужие бригады: для меня существует только одна сторона — сторона собственника."
                    : "Bugungi kunda ortimda Toshkentda 5 000 dan ortiq tekshirilgan xonadonlar, yuzlab oldi olingan xatolar va tejalgan millionlab so'mlar turibdi. Men quruvchilar bilan sheriklik qilmayman: men uchun faqat bitta tomon mavjud — xonadon egasi tomoni."}
                </p>
              </div>

              {/* 3 Core Principles */}
              <div className="pt-6 space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#20211F]">
                  {locale === "ru" ? "Принципы нашей работы" : "Ishimizning asosiy tamoyillari"}
                </h3>

                <div className="space-y-3">
                  <div className="p-4 bg-white border border-[#20211F]/10 rounded-sm">
                    <span className="font-serif font-bold text-[#20211F] text-sm block">
                      1. Инструментальная объективность
                    </span>
                    <p className="text-xs text-[#77746D] mt-1">
                      Каждое замечание опирается на показания поверенных приборов (лазер, тепловизор, тестер) и нормативные акты ШНК/КМК.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-[#20211F]/10 rounded-sm">
                    <span className="font-serif font-bold text-[#20211F] text-sm block">
                      2. Полная независимость от застройщиков
                    </span>
                    <p className="text-xs text-[#77746D] mt-1">
                      Никаких компромиссов в актах: фиксируется абсолютно всё, что не соответствует нормативам качества.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-[#20211F]/10 rounded-sm">
                    <span className="font-serif font-bold text-[#20211F] text-sm block">
                      3. Честная коммуникация
                    </span>
                    <p className="text-xs text-[#77746D] mt-1">
                      Мы не сгущаем краски и не преуменьшаем проблемы. Мы даем ясное понимание реального технического состояния объекта.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
