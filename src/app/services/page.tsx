"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-28 sm:pt-36">
      {/* Header section */}
      <section className="pb-16 sm:pb-24 border-b border-[#1C1D1A]/10 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 font-mono text-[10px] tracking-[0.25em] text-[#9E7448] uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 bg-[#9E7448]" />
            <span>{locale === "ru" ? "НАПРАВЛЕНИЯ ЭКСПЕРТИЗЫ" : "EKSPERTIZA YO'NALISHLARI"}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1D1A] leading-[1.02] max-w-4xl">
            {locale === "ru"
              ? "Комплексный контроль качества недвижимости в Ташкенте"
              : "Toshkentda ko'chmas mulk sifatini nazorat qilish bo'yicha kompleks xizmatlar"}
          </h1>
          <p className="text-base sm:text-lg text-[#6E6B64] mt-5 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "Три взаимодополняющие услуги: от инструментальной проверки квартиры при получении ключей до независимого технического надзора и реализации ремонта под ключ."
              : "Uchta o'zaro bog'liq xizmat: kalitlarni olishda xonadonni instrumental tekshirishdan to texnazorat va kalit ostida ta'mirgacha."}
          </p>
        </div>
      </section>

      {/* Service 1 Detail Banner */}
      <section className="py-24 border-b border-[#1C1D1A]/10 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-[10px] text-[#9E7448] tracking-[0.25em] uppercase font-semibold block">
                SERVICE 01 // PRE-HANDOVER AUDIT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1D1A] leading-tight">
                {t.services.s1.title}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6B64] leading-relaxed">
                {t.services.s1.desc}
              </p>

              <div className="space-y-3 pt-2 border-t border-[#1C1D1A]/10">
                {[
                  locale === "ru" ? "Проверка лазерным нивелиром геометрии и отклонений стен" : "Lazer sath bilan devorlar geometriyasi va og'ishlarini tekshirish",
                  locale === "ru" ? "Тепловизионное обследование оконных блоков и наружных углов" : "Deraza bloklari va tashqi burchaklarni teplovizor orqali ko'rish",
                  locale === "ru" ? "Проверка стяжки на бухтение, пустоты и трещины" : "Pol stajkasidagi yoriqlar va bo'shliqlarni aniqlash",
                  locale === "ru" ? "Официальный дефектный акт со ссылками на строительные нормы" : "Qurilish me'yorlariga asoslangan rasmiy nuqsonlar dalolatnomasi",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-xs sm:text-sm text-[#1C1D1A]">
                    <span className="w-1.5 h-1.5 bg-[#9E7448] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/apartment-inspection"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-colors border border-[#1C1D1A] group"
                >
                  <span>{locale === "ru" ? "Подробнее о приёмке" : "Qabul haqida batafsil"}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="arch-img-frame aspect-[4/3] border border-[#1C1D1A]/15 shadow-2xl bg-[#EBE6DC]">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
                  alt="Приёмка новостройки"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 Detail Banner */}
      <section className="py-24 border-b border-[#1C1D1A]/10 bg-[#F6F3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="arch-img-frame aspect-[4/3] border border-[#1C1D1A]/15 shadow-2xl bg-[#EBE6DC]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt="Контроль ремонта"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="font-mono text-[10px] text-[#9E7448] tracking-[0.25em] uppercase font-semibold block">
                SERVICE 02 // TECHNICAL SUPERVISION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1D1A] leading-tight">
                {t.services.s2.title}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6B64] leading-relaxed">
                {t.services.s2.desc}
              </p>

              <div className="space-y-3 pt-2 border-t border-[#1C1D1A]/10">
                {[
                  locale === "ru" ? "Проверка скрытых коммуникаций до зашивки гипсокартоном" : "Yashirin kommunikatsiyalarni yopilishidan oldin tekshirish",
                  locale === "ru" ? "Контроль гидроизоляции мокрых зон и уклонов канализации" : "Hammomlar gidroizolyatsiyasi va quvurlar nishabi nazorati",
                  locale === "ru" ? "Аудит соответствия дизайн-проекту и строительным нормам" : "Dizayn-loyiha va qurilish me'yorlariga muvofiqlik auditi",
                  locale === "ru" ? "Еженедельные фотоотчеты с фиксацией нарушений для прораба" : "Usta uchun kamchiliklar qayd etilgan haftalik foto-hisobotlar",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-xs sm:text-sm text-[#1C1D1A]">
                    <span className="w-1.5 h-1.5 bg-[#9E7448] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/renovation-supervision"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-colors border border-[#1C1D1A] group"
                >
                  <span>{locale === "ru" ? "Подробнее о технадзоре" : "Texnazorat haqida batafsil"}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 Detail Banner */}
      <section className="py-24 border-b border-[#1C1D1A]/10 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-[10px] text-[#9E7448] tracking-[0.25em] uppercase font-semibold block">
                SERVICE 03 // FULL TURNKEY EXECUTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1D1A] leading-tight">
                {t.services.s3.title}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6B64] leading-relaxed">
                {t.services.s3.desc}
              </p>

              <div className="space-y-3 pt-2 border-t border-[#1C1D1A]/10">
                {[
                  locale === "ru" ? "Фиксированная смета без внезапных скрытых доплат" : "Kutilmagan to'lovlarsiz qat'iy belgilangan smeta",
                  locale === "ru" ? "Проверенные мастера узкой квалификации" : "Tor mutaxassislikka ega saralangan ustalar",
                  locale === "ru" ? "Персональный надзор эксперта на каждом этапе" : "Har bir bosqichda ekspertning shaxsiy nazorati",
                  locale === "ru" ? "Официальный договор, график работ и гарантия" : "Rasmiy shartnoma, ish jadvali va sifat kafolati",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-xs sm:text-sm text-[#1C1D1A]">
                    <span className="w-1.5 h-1.5 bg-[#9E7448] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/turnkey-renovation"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-colors border border-[#1C1D1A] group"
                >
                  <span>{locale === "ru" ? "Подробнее о ремонте под ключ" : "Kalit ostida ta'mir haqida"}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="arch-img-frame aspect-[4/3] border border-[#1C1D1A]/15 shadow-2xl bg-[#EBE6DC]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                  alt="Ремонт под ключ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
