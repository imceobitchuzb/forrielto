"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { FAQSection } from "@/components/sections/FAQSection";
import { LeadForm } from "@/components/sections/LeadForm";
import {
  FileSpreadsheet,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Send,
} from "lucide-react";

export default function TurnkeyRenovationPage() {
  const { t, locale } = useLanguage();

  const journeySteps = [
    {
      step: "01",
      phase: "INITIAL BRIEF",
      titleRu: "Встреча и техническое задание",
      titleUz: "Uchrashuv va texnik topshiriq",
      descRu: "Выезжаем на объект, обсуждаем планировочные решения, бюджетные ориентиры, инженерные требования и материалы.",
      descUz: "Obyektga chiqamiz, rejalashtirish, byudjet, muhandislik talablari va materiallarni muhokama qilamiz.",
    },
    {
      step: "02",
      phase: "SPECIFICATION",
      titleRu: "Детализированная смета",
      titleUz: "Batafsil smeta",
      descRu: "Разрабатываем прозрачную ведомость объемов работ и спецификацию черновых материалов. Фиксируем условия в договоре.",
      descUz: "Ish hajmlari va qora materiallar spetsifikatsiyasini tuzamiz. Shartnomada barchasini mustahkamlaymiz.",
    },
    {
      step: "03",
      phase: "ENGINEERING",
      titleRu: "Инженерная подготовка",
      titleUz: "Muhandislik tayyorgarligi",
      descRu: "Возведение перегородок, акустическая изоляция, монтаж электрощита, прокладка водоснабжения и трасс кондиционеров.",
      descUz: "Devorlarni tiklash, shovqin izolyatsiyasi, elektr qalqoni, suv va konditsioner trassalarini montaj qilish.",
    },
    {
      step: "04",
      phase: "HAUTE FINISH",
      titleRu: "Чистовая отделка премиум",
      titleUz: "Premial toza pardoz",
      descRu: "Сложные малярные работы под боковой свет, крупноформатный керамогранит с запилом под 45°, установка дверей скрытого монтажа.",
      descUz: "Devorlarni sifatli bo'yash, 45° burchak ostida kafel terish, yashirin eshiklar va yoritish tizimlarini o'rnatish.",
    },
    {
      step: "05",
      phase: "KEY HANDOVER",
      titleRu: "Клининг и сдача объекта",
      titleUz: "Klining va obyektni topshirish",
      descRu: "Профессиональная генеральная уборка, проверка всех сценариев освещения и сантехники, торжественная передача ключей.",
      descUz: "Professional tozalash, barcha yoritish va santexnika tizimlarini tekshirish va kalitlarni topshirish.",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36">
      {/* Hero Section */}
      <section className="pb-16 sm:pb-24 border-b border-[#1C1D1A]/10 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 font-mono text-[10px] tracking-[0.25em] text-[#9E7448] uppercase font-semibold">
                <span className="w-1.5 h-1.5 bg-[#9E7448]" />
                <span>{locale === "ru" ? "ТАШКЕНТ · РЕМОНТ ПОД КЛЮЧ" : "TOSHKENT · KALIT OSTIDA TA'MIR"}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1D1A] leading-[1.02]">
                {locale === "ru"
                  ? "Ремонт квартир под ключ под экспертным контролем"
                  : "Ekspert nazorati ostida kalit ostida xonadonlar ta'miri"}
              </h1>

              <p className="text-base sm:text-lg text-[#6E6B64] leading-relaxed max-w-xl">
                {locale === "ru"
                  ? "Полный цикл реализации интерьера в Ташкенте: от проверки квартиры при сдаче застройщиком до готового жилого пространства. Прозрачная смета, проверенные мастера и бескомпромиссное соблюдение строительных норм."
                  : "Toshkentda interyerni to'liq amalga oshirish sikli: uyni quruvchidan qabul qilishdan to tayyor yashash maydonigacha. Shaffof smeta, tajribali ustalar va sifat kafolati."}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-all border border-[#1C1D1A] group"
                >
                  <span>{locale === "ru" ? "Рассчитать стоимость ремонта" : "Ta'mir narxini hisoblash"}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={siteConfig.telegramDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-4 bg-transparent border border-[#1C1D1A]/20 text-[#1C1D1A] hover:bg-[#EBE6DC] text-xs uppercase tracking-[0.2em] font-medium transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-[#9E7448]" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="arch-img-frame aspect-[4/5] border border-[#1C1D1A]/15 shadow-2xl bg-[#EBE6DC]">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
                  alt="Премиальный интерьер под ключ"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#F6F3EC]">
                  <span className="text-[10px] font-mono text-[#B88E5E] uppercase tracking-widest block mb-1">
                    СТАНДАРТ РЕАЛИЗАЦИИ
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-normal">
                    {locale === "ru"
                      ? "Без внезапных доплат и скрытых расходов"
                      : "Kutilmagan to'lovlar va yashirin xarajatlarsiz"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Journey - 5 Steps */}
      <section className="py-24 bg-[#FAF8F4] border-b border-[#1C1D1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-14 border-b border-[#1C1D1A]/10 gap-4">
            <div className="max-w-3xl">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
                {locale === "ru" ? "ЭТАПЫ РЕАЛИЗАЦИИ" : "AMALGA OSHIRISH BOSQICHLARI"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1A]">
                {locale === "ru" ? "Путь от пустой коробки до готового дома" : "Bo'sh qutidan to tayyor xonadongacha"}
              </h2>
            </div>
            <div className="font-mono text-[10px] text-[#6E6B64] tracking-widest uppercase">
              SEAMLESS WORKFLOW
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#1C1D1A]/12 p-6 flex flex-col justify-between hover:border-[#9E7448] transition-colors group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1C1D1A]/8">
                    <span className="font-mono text-lg text-[#9E7448]">{step.step}</span>
                    <span className="font-mono text-[9px] text-[#6E6B64] tracking-wider uppercase">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-[#1C1D1A] group-hover:text-[#9E7448] transition-colors leading-snug">
                    {locale === "ru" ? step.titleRu : step.titleUz}
                  </h3>
                  <p className="text-xs text-[#6E6B64] leading-relaxed">
                    {locale === "ru" ? step.descRu : step.descUz}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Guarantee Callout */}
      <section className="py-24 bg-[#1C1D1A] text-[#F6F3EC] border-b border-white/10 bg-grain-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#242522] border border-white/10 space-y-4 shadow-2xl">
              <FileSpreadsheet className="w-8 h-8 text-[#B88E5E]" />
              <h3 className="font-serif text-2xl font-normal text-[#F6F3EC]">
                {locale === "ru" ? "Прозрачная смета" : "Shaffof smeta"}
              </h3>
              <p className="text-xs sm:text-sm text-[#F6F3EC]/70 leading-relaxed">
                {locale === "ru"
                  ? "Никаких абстрактных «за квадратный метр». Детальный расчёт каждого вида работ и точная ведомость материалов."
                  : "Mavhum narxlar yo'q. Har bir ish turi va materialning aniq hisob-kitobi."}
              </p>
            </div>

            <div className="p-8 bg-[#242522] border border-white/10 space-y-4 shadow-2xl">
              <ShieldCheck className="w-8 h-8 text-[#B88E5E]" />
              <h3 className="font-serif text-2xl font-normal text-[#F6F3EC]">
                {locale === "ru" ? "Личный надзор эксперта" : "Ekspertning shaxsiy nazorati"}
              </h3>
              <p className="text-xs sm:text-sm text-[#F6F3EC]/70 leading-relaxed">
                {locale === "ru"
                  ? "Работы принимаются по тем же строгим критериям, по которым мы инспектируем новостройки. Никаких компромиссов в качестве."
                  : "Ishlar xuddi yangi uylarni qabul qilishdagi qat'iy mezonlar bo'yicha qabul qilinadi."}
              </p>
            </div>

            <div className="p-8 bg-[#242522] border border-white/10 space-y-4 shadow-2xl">
              <Clock className="w-8 h-8 text-[#B88E5E]" />
              <h3 className="font-serif text-2xl font-normal text-[#F6F3EC]">
                {locale === "ru" ? "Точный график и отчёты" : "Aniq jadval va hisobotlar"}
              </h3>
              <p className="text-xs sm:text-sm text-[#F6F3EC]/70 leading-relaxed">
                {locale === "ru"
                  ? "Еженедельная видео- и фотофиксация прогресса в Telegram. Вы в курсе каждого этапа без необходимости ежедневно приезжать на стройку."
                  : "Telegram orqali haftalik video va foto hisobotlar bilan doimiy xabardorlik."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="booking" className="py-24 bg-[#F6F3EC] border-b border-[#1C1D1A]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
              {locale === "ru" ? "РАСЧЁТ ПРОЕКТА" : "LOYIHA HISOBI"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1A]">
              {locale === "ru" ? "Заявка на ремонт под ключ" : "Kalit ostida ta'mirga ariza"}
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6B64] mt-2">
              {locale === "ru"
                ? "Расскажите о вашей квартире и желаемом стиле интерьера. Анна свяжется для обсуждения встречи на объекте."
                : "Xonadoningiz va istalgan interyer uslubi haqida so'zlab bering. Anna uchrashuvni muhokama qilish uchun bog'lanadi."}
            </p>
          </div>

          <LeadForm defaultService="turnkey" />
        </div>
      </section>

      {/* FAQ for Turnkey */}
      <section className="py-24 bg-[#FAF8F4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
              FAQ // TURNKEY
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1D1A]">
              {locale === "ru" ? "Частые вопросы по ремонту под ключ" : "Kalit ostida ta'mir bo'yicha savollar"}
            </h2>
          </div>
          <FAQSection categoryFilter="turnkey" />
        </div>
      </section>
    </div>
  );
}
