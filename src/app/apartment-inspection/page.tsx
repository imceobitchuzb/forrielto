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
  ShieldAlert,
  FileCheck2,
  CheckCircle2,
  Flame,
  Maximize2,
  Wind,
  Zap,
  ArrowUpRight,
  Send,
} from "lucide-react";

export default function ApartmentInspectionPage() {
  const { t, locale } = useLanguage();

  const inspectionAreas = [
    {
      icon: Maximize2,
      titleRu: "Геометрия и плоскости",
      titleUz: "Geometriya va tekisliklar",
      descRu: "Проверка отклонений стен по лазерному нивелиру, углы 90° под мебель, отсутствие волн и перепадов.",
      descUz: "Lazer sath bilan devorlarning vertikalligi, 90° burchaklar va tekisliklarni tekshirish.",
    },
    {
      icon: Wind,
      titleRu: "Окна, витражи и притворы",
      titleUz: "Derazalar va vitrajlar",
      descRu: "Тестирование на продувание, проверка целостности стеклопакетов, царапин, окалин, регулировка фурнитуры.",
      descUz: "Shamol kirishini tekshirish, oynalar butunligi, tirnalishlar va furnitura sozlanishini ko'rish.",
    },
    {
      icon: Zap,
      titleRu: "Электрика и безопасность",
      titleUz: "Elektr va xavfsizlik",
      descRu: "Проверка наличия и правильности заземления, напряжения в фазах, срабатывания УЗО и сечения кабелей.",
      descUz: "Yerga ulash (zazemleniye), kuchlanish, UZO ishlashi va kabel kesimlarini tekshirish.",
    },
    {
      icon: Flame,
      titleRu: "Тепловизионное обследование",
      titleUz: "Teplovizor auditi",
      descRu: "Поиск скрытых мостиков холода, утечек тепла, промерзания наружных стен и мест конденсата.",
      descUz: "Yashirin sovuq ko'priklari, issiqlik yo'qotishlari va mog'or xavfi bo'lgan zonalarni aniqlash.",
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
                  {locale === "ru" ? "ТАШКЕНТ · ПРИЁМКА НОВОСТРОЕК" : "TOSHKENT · YANGI UYNI QABUL QILISH"}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#20211F] leading-[1.05]">
                {locale === "ru"
                  ? "Инструментальная приёмка квартир перед подписанием акта"
                  : "Dalolatnomani imzolashdan oldin xonadonni instrumental qabul qilish"}
              </h1>

              <p className="text-base sm:text-lg text-[#77746D] leading-relaxed max-w-2xl">
                {locale === "ru"
                  ? "Выявляем строительный брак, скрытые дефекты и несоответствия нормам ШНК/КМК. Составляем официальный дефектный акт, чтобы застройщик устранил замечания за свой счёт."
                  : "Qurilish nuqsonlari, yashirin xatolar va ShNK/KMK me'yorlariga nomuvofiqliklarni aniqlaymiz. Quruvchi o'z hisobidan to'g'irlashi uchun rasmiy dalolatnoma tuzamiz."}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-sm transition-all"
                >
                  <span>{locale === "ru" ? "Забронировать дату осмотра" : "Ko'rik sanasini band qilish"}</span>
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
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
                  alt="Инструментальный осмотр квартиры"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#F5F2EC]">
                  <span className="text-xs font-mono text-[#A8794A] uppercase tracking-wider block">
                    ОФИЦИАЛЬНЫЙ АКТ
                  </span>
                  <p className="font-serif text-lg font-bold mt-1">
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

      {/* What We Inspect - 4 Key Zones */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              {locale === "ru" ? "ГЛУБОКИЙ АУДИТ" : "CHUQUR AUDIT"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F] mt-2">
              {locale === "ru" ? "Что входит в приёмку новостройки" : "Yangi uyni qabul qilishga nimalar kiradi"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectionAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#20211F]/10 p-6 rounded-sm space-y-3 hover:border-[#A8794A] transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#20211F] text-[#F5F2EC] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#A8794A]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#20211F]">
                    {locale === "ru" ? area.titleRu : area.titleUz}
                  </h3>
                  <p className="text-xs text-[#77746D] leading-relaxed">
                    {locale === "ru" ? area.descRu : area.descUz}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Checklist Explorer */}
      <section className="py-20 bg-[#F5F2EC] border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveChecklist />
        </div>
      </section>

      {/* Defect Deliverable Callout */}
      <section className="py-20 bg-[#20211F] text-[#F5F2EC] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono text-[#A8794A] uppercase tracking-widest">
                РЕЗУЛЬТАТ РАБОТЫ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F2EC] leading-tight">
                {locale === "ru" ? "Дефектный акт — ваш главный юридический аргумент" : "Nuqsonlar dalolatnomasi — asosiy yuridik dalilingiz"}
              </h2>
              <p className="text-sm sm:text-base text-[#F5F2EC]/70 leading-relaxed">
                {locale === "ru"
                  ? "После осмотра вы получаете структурированный документ с подробной фотофиксацией всех отступлений от норм, номерами пунктов строительных правил и обоснованием для застройщика."
                  : "Ko'rikdan so'ng siz me'yorlardan chetga chiqishlarning fotosuratlari, qurilish qoidalari bandlari va quruvchi uchun asoslangan batafsil hujjat olasiz."}
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#F5F2EC]/90">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8794A]" />
                  <span>{locale === "ru" ? "Четкие сроки устранения замечаний" : "Kamchiliklarni bartaraf etishning aniq muddatlari"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8794A]" />
                  <span>{locale === "ru" ? "Помощь в юридически грамотном вручении представителю застройщика" : "Quruvchi vakiliga to'g'ri topshirishda yordam"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8794A]" />
                  <span>{locale === "ru" ? "Повторная проверка после завершения работ по устранению" : "Tuzatish ishlari yakunlangach qayta tekshiruv"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 bg-[#2A2B28] border border-white/10 rounded-sm space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono uppercase text-[#A8794A]">ДЕФЕКТНЫЙ АКТ № 2024-EX</span>
                  <span className="text-[10px] font-mono text-white/50">ДЕМОНСТРАЦИОННЫЙ ОБРАЗЕЦ</span>
                </div>
                <div className="space-y-2 text-xs font-mono text-[#F5F2EC]/80">
                  <p className="text-[#A8794A]">Объект: Новостройка, Ташкент</p>
                  <p>1. Отклонение стены по вертикали: 18 мм (КМК 3.01.01-85 п. 2.14)</p>
                  <p>2. Продувание по периметру витражного остекления (ШНК 2.01.03-19)</p>
                  <p>3. Отсутствие непрерывности цепи заземления розеточной группы кухни</p>
                  <p>4. Трещины стяжки пола с отслоением основания в прихожей</p>
                </div>
                <div className="pt-2 text-[11px] text-[#F5F2EC]/50 italic">
                  * Все пункты акта подлежат обязательному безвозмездному устранению застройщиком до ввода в эксплуатацию.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 bg-[#F5F2EC] border-b border-[#20211F]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              {locale === "ru" ? "БРОНИРОВАНИЕ ДАТЫ" : "SANANI BAND QILISH"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F] mt-2">
              {locale === "ru" ? "Заявка на приёмку квартиры" : "Xonadonni qabul qilishga ariza"}
            </h2>
            <p className="text-xs sm:text-sm text-[#77746D] mt-2">
              {locale === "ru"
                ? "Укажите название ЖК и ориентировочную дату сдачи застройщиком. Согласуем время выезда."
                : "Turar-joy majmuasi nomi va taxminiy topshirish sanasini ko'rsating. Tashrif vaqtini kelishamiz."}
            </p>
          </div>

          <LeadForm defaultService="inspection" />
        </div>
      </section>

      {/* FAQ for Inspection */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              FAQ
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#20211F] mt-1.5">
              {locale === "ru" ? "Частые вопросы по приёмке" : "Qabul bo'yicha ko'p beriladigan savollar"}
            </h2>
          </div>
          <FAQSection categoryFilter="inspection" />
        </div>
      </section>
    </div>
  );
}
