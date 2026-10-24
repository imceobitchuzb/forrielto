"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { InteractiveChecklist } from "@/components/sections/InteractiveChecklist";
import { FAQSection } from "@/components/sections/FAQSection";
import { LeadForm } from "@/components/sections/LeadForm";
import {
  Flame,
  Maximize2,
  Wind,
  Zap,
  ArrowUpRight,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ApartmentInspectionPage() {
  const { t, locale } = useLanguage();

  const inspectionAreas = [
    {
      icon: Maximize2,
      num: "01",
      titleRu: "Геометрия и плоскости",
      titleUz: "Geometriya va tekisliklar",
      descRu: "Проверка отклонений стен по лазерному нивелиру, углы 90° под мебель, отсутствие волн и перепадов.",
      descUz: "Lazer sath bilan devorlarning vertikalligi, 90° burchaklar va tekisliklarni tekshirish.",
    },
    {
      icon: Wind,
      num: "02",
      titleRu: "Окна, витражи и притворы",
      titleUz: "Derazalar va vitrajlar",
      descRu: "Тестирование на продувание, проверка целостности стеклопакетов, царапин, окалин, регулировка фурнитуры.",
      descUz: "Shamol kirishini tekshirish, oynalar butunligi, tirnalishlar va furnitura sozlanishini ko'rish.",
    },
    {
      icon: Zap,
      num: "03",
      titleRu: "Электрика и безопасность",
      titleUz: "Elektr va xavfsizlik",
      descRu: "Проверка наличия и правильности заземления, напряжения в фазах, срабатывания УЗО и сечения кабелей.",
      descUz: "Yerga ulash (zazemleniye), kuchlanish, UZO ishlashi va kabel kesimlarini tekshirish.",
    },
    {
      icon: Flame,
      num: "04",
      titleRu: "Тепловизионное обследование",
      titleUz: "Teplovizor auditi",
      descRu: "Поиск скрытых мостиков холода, утечек тепла, промерзания наружных стен и мест конденсата.",
      descUz: "Yashirin sovuq ko'priklari, issiqlik yo'qotishlari va mog'or xavfi bo'lgan zonalarni aniqlash.",
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
                <span>{locale === "ru" ? "ТАШКЕНТ · ПРИЁМКА НОВОСТРОЕК" : "TOSHKENT · YANGI UYNI QABUL QILISH"}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1D1A] leading-[1.02]">
                {locale === "ru"
                  ? "Инструментальная приёмка квартир перед подписанием акта"
                  : "Dalolatnomani imzolashdan oldin xonadonni instrumental qabul qilish"}
              </h1>

              <p className="text-base sm:text-lg text-[#6E6B64] leading-relaxed max-w-xl">
                {locale === "ru"
                  ? "Выявляем скрытый строительный брак и отступления от нормативных требований ШНК/КМК. Составляем юридически выверенный дефектный акт для устранения застройщиком за его счёт."
                  : "Qurilish nuqsonlari, yashirin xatolar va ShNK/KMK me'yorlariga nomuvofiqliklarni aniqlaymiz. Quruvchi o'z hisobidan to'g'irlashi uchun rasmiy dalolatnoma tuzamiz."}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-all border border-[#1C1D1A] group"
                >
                  <span>{locale === "ru" ? "Забронировать дату осмотра" : "Ko'rik sanasini band qilish"}</span>
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
              <div className="arch-img-frame aspect-[4/5] border border-[#1C1D1A]/15 shadow-2xl bg-[#EBE6DC] overflow-hidden">
                <Image
                  src="/images/anna/anna-level-tool.jpg"
                  alt="Инструментальный осмотр квартиры — Анна Гончарова"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A]/85 via-[#1C1D1A]/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-[#F6F3EC] z-20">
                  <span className="text-[10px] font-mono text-[#B88E5E] uppercase tracking-widest block mb-1 font-semibold">
                    {locale === "ru" ? "СТАНДАРТ БЕЗОПАСНОСТИ" : "XAVFSIZLIK STANDARTI"}
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-normal">
                    {locale === "ru"
                      ? "Юридически обоснованная фиксация замечаний"
                      : "Kamchiliklarning yuridik asoslangan qayd etilishi"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Key Audit Pillars */}
      <section className="py-24 bg-[#FAF8F4] border-b border-[#1C1D1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-14 border-b border-[#1C1D1A]/10 gap-4">
            <div className="max-w-3xl">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
                {locale === "ru" ? "ГЛУБОКИЙ АУДИТ" : "CHUQUR AUDIT"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1A]">
                {locale === "ru" ? "Что входит в приёмку новостройки" : "Yangi uyni qabul qilishga nimalar kiradi"}
              </h2>
            </div>
            <div className="font-mono text-[10px] text-[#6E6B64] tracking-widest uppercase">
              INSTRUMENTAL VERIFICATION
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectionAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#1C1D1A]/12 p-6 flex flex-col justify-between hover:border-[#9E7448] transition-colors group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1C1D1A]/8">
                    <span className="font-mono text-lg text-[#9E7448]">№ {area.num}</span>
                    <span className="w-1.5 h-1.5 bg-[#1C1D1A]/20" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#1C1D1A] group-hover:text-[#9E7448] transition-colors">
                    {locale === "ru" ? area.titleRu : area.titleUz}
                  </h3>
                  <p className="text-xs text-[#6E6B64] leading-relaxed">
                    {locale === "ru" ? area.descRu : area.descUz}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Checklist Explorer */}
      <section className="py-24 bg-[#F6F3EC] border-b border-[#1C1D1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveChecklist />
        </div>
      </section>

      {/* Defect Deliverable Dossier Callout */}
      <section className="py-24 bg-[#1C1D1A] text-[#F6F3EC] border-b border-white/10 bg-grain-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-[#B88E5E] uppercase tracking-[0.25em] font-semibold block">
                РЕЗУЛЬТАТ РАБОТЫ // ИТОГОВЫЙ ДОКУМЕНТ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F6F3EC] leading-tight">
                {locale === "ru" ? "Дефектный акт — ваш главный юридический аргумент" : "Nuqsonlar dalolatnomasi — asosiy yuridik dalilingiz"}
              </h2>
              <p className="text-sm sm:text-base text-[#F6F3EC]/70 leading-relaxed">
                {locale === "ru"
                  ? "После осмотра вы получаете структурированный документ с подробной фотофиксацией всех отступлений от строительных норм, номерами пунктов правил ШНК/КМК и сроками для обязательного устранения застройщиком."
                  : "Ko'rikdan so'ng siz me'yorlardan chetga chiqishlarning fotosuratlari, qurilish qoidalari bandlari va quruvchi uchun asoslangan batafsil rasmiy hujjat olasiz."}
              </p>
              <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs sm:text-sm text-[#F6F3EC]/90 font-mono">
                <div className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 bg-[#B88E5E]" />
                  <span>{locale === "ru" ? "Чёткие нормативные сроки устранения замечаний" : "Kamchiliklarni bartaraf etishning aniq muddatlari"}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 bg-[#B88E5E]" />
                  <span>{locale === "ru" ? "Помощь в официальном вручении представителю застройщика" : "Quruvchi vakiliga to'g'ri topshirishda yordam"}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 bg-[#B88E5E]" />
                  <span>{locale === "ru" ? "Повторный выезд после устранения недочётов" : "Tuzatish ishlari yakunlangach qayta tekshiruv"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-5 sm:p-8 bg-[#242522] border border-white/10 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[11px] font-mono uppercase text-[#B88E5E] tracking-widest font-semibold">
                    ДЕФЕКТНЫЙ АКТ № 2024-EX
                  </span>
                  <span className="text-[9px] font-mono text-white/40 uppercase">
                    ДЕМОНСТРАЦИОННЫЙ ОБРАЗЕЦ
                  </span>
                </div>
                <div className="space-y-2.5 text-xs font-mono text-[#F6F3EC]/80 leading-relaxed break-words">
                  <p className="text-[#B88E5E]">Объект: Новостройка, г. Ташкент</p>
                  <p>1. Отклонение стены по вертикали: 18 мм (КМК 3.01.01-85 п. 2.14)</p>
                  <p>2. Продувание по периметру витражного остекления (ШНК 2.01.03-19)</p>
                  <p>3. Отсутствие непрерывности цепи заземления розеточной группы кухни</p>
                  <p>4. Трещины стяжки пола с отслоением основания в прихожей</p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[10px] text-[#F6F3EC]/50 italic font-mono">
                  * Все пункты акта подлежат обязательному безвозмездному устранению застройщиком.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-24 bg-[#F6F3EC] border-b border-[#1C1D1A]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
              {locale === "ru" ? "БРОНИРОВАНИЕ ДАТЫ" : "SANANI BAND QILISH"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1A]">
              {locale === "ru" ? "Заявка на приёмку квартиры" : "Xonadonni qabul qilishga ariza"}
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6B64] mt-2">
              {locale === "ru"
                ? "Укажите название ЖК и ориентировочную дату сдачи застройщиком. Согласуем время выезда."
                : "Turar-joy majmuasi nomi va taxminiy topshirish sanasini ko'rsating. Tashrif vaqtini kelishamiz."}
            </p>
          </div>

          <LeadForm defaultService="inspection" />
        </div>
      </section>

      {/* FAQ for Inspection */}
      <section className="py-24 bg-[#FAF8F4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
              FAQ // INSPECTION
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1D1A]">
              {locale === "ru" ? "Частые вопросы по приёмке" : "Qabul bo'yicha ko'p beriladigan savollar"}
            </h2>
          </div>
          <FAQSection categoryFilter="inspection" />
        </div>
      </section>
    </div>
  );
}
