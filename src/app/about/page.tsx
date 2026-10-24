"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Instagram, Send, ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36">
      {/* Editorial Header */}
      <section className="pb-16 sm:pb-24 border-b border-[#1C1D1A]/10 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 font-mono text-[10px] tracking-[0.25em] text-[#9E7448] uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#9E7448]" />
            <span>{locale === "ru" ? "ОБ ЭКСПЕРТЕ" : "EKSPERT HAQIDA"}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1D1A] leading-[1.02] max-w-4xl">
            {locale === "ru"
              ? "Анна Гончарова: независимый контроль качества недвижимости в Ташкенте"
              : "Anna Goncharova: Toshkentda ko'chmas mulk sifatining mustaqil nazorati"}
          </h1>
          <p className="text-base sm:text-lg text-[#6E6B64] mt-5 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "«Из Уфы в Ташкент, без связей построила имя в строительстве». Принципиальная защита интересов собственника, инструментальная точность и честный диалог."
              : "«Ufadan Toshkentga, tanish-bilishsiz qurilish sohasida o'z nomimni yaratdim». Mulk egasi manfaatlarini himoya qilish va sifatga qat'iy yondashuv."}
          </p>
        </div>
      </section>

      {/* Main Biography & Photos Grid */}
      <section className="py-24 bg-[#FAF8F4] border-b border-[#1C1D1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visuals on the left (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="arch-img-frame aspect-[3/4] border border-[#1C1D1A]/15 shadow-2xl bg-[#EBE6DC]">
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
                <div className="arch-img-frame aspect-square border border-[#1C1D1A]/10 bg-[#EBE6DC]">
                  <Image
                    src="/images/anna/post3.png"
                    alt="Анна Гончарова на объекте"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="arch-img-frame aspect-square border border-[#1C1D1A]/10 bg-[#EBE6DC]">
                  <Image
                    src="/images/anna/post4.png"
                    alt="Анна Гончарова"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Social Channels Callout */}
              <div className="p-6 bg-[#EBE6DC]/40 border border-[#1C1D1A]/10 space-y-3 font-mono">
                <span className="text-[10px] text-[#6E6B64] uppercase tracking-widest block">
                  Официальные каналы эксперта
                </span>
                <div className="space-y-2">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs text-[#1C1D1A] hover:text-[#9E7448] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#9E7448]" />
                    <span>Instagram @goncharova.expert (17K+)</span>
                  </a>
                  <a
                    href={siteConfig.telegramChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs text-[#1C1D1A] hover:text-[#9E7448] transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-[#9E7448]" />
                    <span>Telegram-канал @goncharovaexpert</span>
                  </a>
                  <a
                    href={siteConfig.telegramDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs text-[#1C1D1A] hover:text-[#9E7448] transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-[#9E7448]" />
                    <span>Личный Telegram @Anna_040506</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Narrative Story (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1A] leading-snug">
                {locale === "ru"
                  ? "Путь в профессии: от первого объекта до более чем 5 000 проверенных квартир"
                  : "Kasbiy yo'l: birinchi obyektdan to 5 000 dan ortiq tekshirilgan xonadongacha"}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#6E6B64] leading-relaxed">
                <p>
                  {locale === "ru"
                    ? "Приехав в Ташкент из Уфы, я столкнулась с масштабным строительным бумом. Застройщики возводят десятки жилых комплексов, но скорость сдачи нередко опережает контроль качества."
                    : "Ufadan Toshkentga kelganimda, poytaxtdagi ulkan qurilish rivojlanishiga guvoh bo'ldim. Quruvchilar o'nlab majmualarni qurmoqda, biroq topshirish tezligi ko'pincha sifat nazoratidan o'zib ketadi."}
                </p>

                <p>
                  {locale === "ru"
                    ? "Большинство покупателей подписывают акты приёма-передачи, не подозревая, что под слоем штукатурки скрыты мостики холода, неработающая вентиляция, растрескавшаяся стяжка или перекошенные оконные блоки. С этого момента я сделала своей миссией бескомпромиссную защиту интересов будущего жильца."
                    : "Ko'pchilik xaridorlar qabul qilish dalolatnomasini suvoq ostida sovuq ko'priklari, ishlamaydigan ventilyatsiya yoki buzilgan romlar borligini bilmay imzolaydilar. Shu paytdan boshlab mening maqsadim — kelajakdagi xonadon egasining manfaatlarini qat'iy himoya qilish bo'ldi."}
                </p>

                <p>
                  {locale === "ru"
                    ? "Сегодня за моими плечами — более 5 000 проверенных квартир в Ташкенте, сотни предотвращенных переделок и сэкономленные миллионы сумов для заказчиков. Я не сотрудничаю с застройщиками и не продвигаю чужие бригады: для меня существует только одна сторона — сторона собственника."
                    : "Bugungi kunda ortimda Toshkentda 5 000 dan ortiq tekshirilgan xonadonlar, yuzlab oldi olingan xatolar va tejalgan millionlab so'mlar turibdi. Men quruvchilar bilan sheriklik qilmayman: men uchun faqat bitta tomon mavjud — xonadon egasi tomoni."}
                </p>
              </div>

              {/* 3 Core Principles */}
              <div className="pt-6 space-y-4 border-t border-[#1C1D1A]/10">
                <h3 className="font-serif text-2xl font-normal text-[#1C1D1A]">
                  {locale === "ru" ? "Принципы нашей работы" : "Ishimizning asosiy tamoyillari"}
                </h3>

                <div className="space-y-3">
                  <div className="p-5 bg-white border border-[#1C1D1A]/10">
                    <span className="font-serif text-base font-normal text-[#1C1D1A] block">
                      1. Инструментальная объективность
                    </span>
                    <p className="text-xs text-[#6E6B64] mt-1 leading-relaxed">
                      Каждое замечание опирается на показания поверенных приборов (лазер, тепловизор, тестер) и нормативные акты ШНК/КМК.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-[#1C1D1A]/10">
                    <span className="font-serif text-base font-normal text-[#1C1D1A] block">
                      2. Полная независимость от застройщиков
                    </span>
                    <p className="text-xs text-[#6E6B64] mt-1 leading-relaxed">
                      Никаких компромиссов в актах: фиксируется абсолютно всё, что не соответствует нормативам качества.
                    </p>
                  </div>

                  <div className="p-5 bg-white border border-[#1C1D1A]/10">
                    <span className="font-serif text-base font-normal text-[#1C1D1A] block">
                      3. Честная коммуникация
                    </span>
                    <p className="text-xs text-[#6E6B64] mt-1 leading-relaxed">
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
