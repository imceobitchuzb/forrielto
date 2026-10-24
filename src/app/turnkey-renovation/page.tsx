"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { FAQSection } from "@/components/sections/FAQSection";
import { LeadForm } from "@/components/sections/LeadForm";
import {
  Sparkles,
  CheckCircle2,
  FileSpreadsheet,
  Clock,
  ShieldCheck,
  Paintbrush,
  ArrowUpRight,
  Send,
} from "lucide-react";

export default function TurnkeyRenovationPage() {
  const { t, locale } = useLanguage();

  const journeySteps = [
    {
      step: "01",
      titleRu: "Встреча и техническое задание",
      titleUz: "Uchrashuv va texnik topshiriq",
      descRu: "Выезжаем на объект, обсуждаем планировочные решения, бюджетные ориентиры, инженерные требования и материалы.",
      descUz: "Obyektga chiqamiz, rejalashtirish, byudjet, muhandislik talablari va materiallarni muhokama qilamiz.",
    },
    {
      step: "02",
      titleRu: "Детализированная смета",
      titleUz: "Batafsil smeta",
      descRu: "Разрабатываем прозрачную ведомость объемов работ и спецификацию черновых материалов. Фиксируем условия в договоре.",
      descUz: "Ish hajmlari va qora materiallar spetsifikatsiyasini tuzamiz. Shartnomada barchasini mustahkamlaymiz.",
    },
    {
      step: "03",
      titleRu: "Инженерная подготовка",
      titleUz: "Muhandislik tayyorgarligi",
      descRu: "Возведение перегородок, акустическая изоляция, монтаж электрощита, прокладка водоснабжения и трасс кондиционеров.",
      descUz: "Devorlarni tiklash, shovqin izolyatsiyasi, elektr qalqoni, suv va konditsioner trassalarini montaj qilish.",
    },
    {
      step: "04",
      titleRu: "Чистовая отделка премиум",
      titleUz: "Premial toza pardoz",
      descRu: "Сложные малярные работы под боковой свет, крупноформатный керамогранит с запилом под 45°, установка дверей скрытого монтажа.",
      descUz: "Devorlarni sifatli bo'yash, 45° burchak ostida kafel terish, yashirin eshiklar va yoritish tizimlarini o'rnatish.",
    },
    {
      step: "05",
      titleRu: "Клининг и сдача объекта",
      titleUz: "Klining va obyektni topshirish",
      descRu: "Профессиональная генеральная уборка, проверка всех сценариев освещения и сантехники, торжественная передача ключей.",
      descUz: "Professional boshdan-oyoq tozalash, barcha yoritish va santexnika tizimlarini tekshirish va kalitlarni topshirish.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-32">
      {/* Hero Section */}
      <section className="pb-16 sm:pb-20 border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#20211F]/5 border border-[#20211F]/10 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8794A]" />
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-[#77746D] uppercase font-semibold">
                  {locale === "ru" ? "ТАШКЕНТ · РЕМОНТ ПОД КЛЮЧ" : "TOSHKENT · KALIT OSTIDA TA'MIR"}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#20211F] leading-[1.05]">
                {locale === "ru"
                  ? "Ремонт квартир под ключ под экспертным контролем"
                  : "Ekspert nazorati ostida kalit ostida xonadonlar ta'miri"}
              </h1>

              <p className="text-base sm:text-lg text-[#77746D] leading-relaxed max-w-2xl">
                {locale === "ru"
                  ? "Полный цикл реализации интерьера в Ташкенте: от проверки квартиры при сдаче застройщиком до готового жилого пространства. Прозрачная смета, проверенные мастера и бескомпромиссное соблюдение строительных норм."
                  : "Toshkentda interyerni to'liq amalga oshirish sikli: uyni quruvchidan qabul qilishdan to tayyor yashash maydonigacha. Shaffof smeta, tajribali ustalar va sifat kafolati."}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-sm transition-all"
                >
                  <span>{locale === "ru" ? "Рассчитать стоимость ремонта" : "Ta'mir narxini hisoblash"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.telegramDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-4 bg-transparent border border-[#20211F]/20 text-[#20211F] hover:bg-[#EAE5DC] text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-sm transition-all"
                >
                  <Send className="w-4 h-4 text-[#A8794A]" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#20211F]/15 shadow-luxury bg-[#EAE5DC]">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80"
                  alt="Премиальный интерьер под ключ"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#F5F2EC]">
                  <span className="text-xs font-mono text-[#A8794A] uppercase tracking-wider block">
                    В СРОК И ПО СМЕТЕ
                  </span>
                  <p className="font-serif text-lg font-bold mt-1">
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
      <section className="py-20 bg-[#FAF8F5] border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              {locale === "ru" ? "ЭТАПЫ РЕАЛИЗАЦИИ" : "AMALGA OSHIRISH BOSQICHLARI"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F] mt-2">
              {locale === "ru" ? "Путь от пустой коробки до уютного дома" : "Bo'sh qutidan to shinam xonadongacha"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#20211F]/10 p-6 rounded-sm space-y-3 hover:border-[#A8794A] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-[#A8794A]">{step.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#20211F]/30" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#20211F]">
                  {locale === "ru" ? step.titleRu : step.titleUz}
                </h3>
                <p className="text-xs text-[#77746D] leading-relaxed">
                  {locale === "ru" ? step.descRu : step.descUz}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Guarantee Callout */}
      <section className="py-20 bg-[#20211F] text-[#F5F2EC] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#2A2B28] border border-white/10 rounded-sm space-y-3">
              <FileSpreadsheet className="w-8 h-8 text-[#A8794A]" />
              <h3 className="font-serif text-xl font-bold text-[#F5F2EC]">
                {locale === "ru" ? "Прозрачная смета" : "Shaffof smeta"}
              </h3>
              <p className="text-xs sm:text-sm text-[#F5F2EC]/70 leading-relaxed">
                {locale === "ru"
                  ? "Никаких абстрактных «за квадратный метр». Детальный расчёт каждого вида работ и точная ведомость материалов."
                  : "Mavhum 'kvadrat metr uchun' degan tushunchalar yo'q. Har bir ish turi va materialning aniq hisob-kitobi."}
              </p>
            </div>

            <div className="p-8 bg-[#2A2B28] border border-white/10 rounded-sm space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#A8794A]" />
              <h3 className="font-serif text-xl font-bold text-[#F5F2EC]">
                {locale === "ru" ? "Личный надзор эксперта" : "Ekspertning shaxsiy nazorati"}
              </h3>
              <p className="text-xs sm:text-sm text-[#F5F2EC]/70 leading-relaxed">
                {locale === "ru"
                  ? "Работы принимаются по тем же строгим критериям, по которым мы инспектируем новостройки. Никаких компромиссов в качестве."
                  : "Ishlar xuddi yangi uylarni qabul qilishdagi qat'iy mezonlar bo'yicha qabul qilinadi. Sifatda murosasiz yondashuv."}
              </p>
            </div>

            <div className="p-8 bg-[#2A2B28] border border-white/10 rounded-sm space-y-3">
              <Clock className="w-8 h-8 text-[#A8794A]" />
              <h3 className="font-serif text-xl font-bold text-[#F5F2EC]">
                {locale === "ru" ? "Точный график и отчёты" : "Aniq jadval va hisobotlar"}
              </h3>
              <p className="text-xs sm:text-sm text-[#F5F2EC]/70 leading-relaxed">
                {locale === "ru"
                  ? "Еженедельная видео- и фотофиксация прогресса в Telegram. Вы в курсе каждого этапа без необходимости ежедневно приезжать на стройку."
                  : "Telegram orqali haftalik video va foto hisobotlar. Har kuni qurilishga kelmasdan barcha bosqichlardan xabardor bo'lasiz."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="booking" className="py-20 bg-[#F5F2EC] border-b border-[#20211F]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              {locale === "ru" ? "РАСЧЁТ ПРОЕКТА" : "LOYIHA HISOBI"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F] mt-2">
              {locale === "ru" ? "Заявка на ремонт под ключ" : "Kalit ostida ta'mirga ariza"}
            </h2>
            <p className="text-xs sm:text-sm text-[#77746D] mt-2">
              {locale === "ru"
                ? "Расскажите о вашей квартире и желаемом стиле интерьера. Анна свяжется для обсуждения встречи на объекте."
                : "Xonadoningiz va istalgan interyer uslubi haqida so'zlab bering. Anna uchrashuvni muhokama qilish uchun bog'lanadi."}
            </p>
          </div>

          <LeadForm defaultService="turnkey" />
        </div>
      </section>

      {/* FAQ for Turnkey */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              FAQ
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#20211F] mt-1.5">
              {locale === "ru" ? "Частые вопросы по ремонту под ключ" : "Kalit ostida ta'mir bo'yicha savollar"}
            </h2>
          </div>
          <FAQSection categoryFilter="turnkey" />
        </div>
      </section>
    </div>
  );
}
