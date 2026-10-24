"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<"inspection" | "supervision" | "turnkey">("inspection");

  const processes = {
    inspection: [
      {
        step: "01",
        phase: "CONSULTATION",
        titleRu: "Консультация и согласование даты",
        titleUz: "Konsultatsiya va sanani kelishish",
        descRu: "Фиксируем название жилого комплекса, площадь, стадию готовности и удобное время выезда с диагностическим оборудованием.",
        descUz: "Turar-joy majmuasi nomi, maydoni va diagnostika asboblari bilan borish vaqtini kelishib olamiz.",
      },
      {
        step: "02",
        phase: "INSTRUMENT AUDIT",
        titleRu: "Инструментальный выезд на объект",
        titleUz: "Obyektga instrumental tashrif",
        descRu: "Выезжаем со всем комплексом приборов: лазерные нивелиры, тепловизоры, влагомеры, тестеры розеточных сетей и измерители тяги.",
        descUz: "Barcha asboblar bilan yetib boramiz: lazer sathlari, teplovizorlar, namlik o'lchagichlar va tarmoq testerlari.",
      },
      {
        step: "03",
        phase: "DIAGNOSTICS",
        titleRu: "Детальная проверка каждого узла",
        titleUz: "Har bir tugunni batafsil tekshirish",
        descRu: "Контроль геометрии стен, проверка стяжки пола на пустоты, тепловизионный осмотр оконных притворов, проверка вентиляции и заземления.",
        descUz: "Devorlar geometriyasi, pol stajkasi bo'shliqlari, deraza choklari, ventilyatsiya va yerga ulash tizimi tekshiriladi.",
      },
      {
        step: "04",
        phase: "DOCUMENTATION",
        titleRu: "Составление дефектного акта",
        titleUz: "Nuqsonlar dalolatnomasini tuzish",
        descRu: "Формируем юридически аргументированный отчёт со ссылками на строительные нормы ШНК/КМК для обязательного устранения застройщиком.",
        descUz: "Quruvchi tomonidan majburiy bartaraf etilishi uchun ShNK/KMK me'yorlariga asoslangan rasmiy dalolatnoma tuziladi.",
      },
      {
        step: "05",
        phase: "HANDOVER SUPPORT",
        titleRu: "Инструктаж по вручению акта",
        titleUz: "Dalolatnomani topshirish bo'yicha ko'rsatma",
        descRu: "Разъясняем права собственника, помогаем правильно вручить акт официальному представителю застройщика и контролируем сроки.",
        descUz: "Mulkdor huquqlarini tushuntiramiz, dalolatnomani quruvchiga to'g'ri topshirish va muddatlarni nazorat qilishda yordam beramiz.",
      },
    ],
    supervision: [
      {
        step: "01",
        phase: "SPECIFICATION",
        titleRu: "Анализ дизайн-проекта и сметы",
        titleUz: "Loyiha va smetani tahlil qilish",
        descRu: "Изучаем архитектурные чертежи, схемы прокладки коммуникаций и согласовываем регламент контрольных выездов.",
        descUz: "Chizmalar, muhandislik tarmoqlari rejalarini o'rganamiz va nazorat tashriflari reglamentini kelishamiz.",
      },
      {
        step: "02",
        phase: "ROUGH WORKS",
        titleRu: "Контроль скрытых работ",
        titleUz: "Yashirin ishlarni nazorat qilish",
        descRu: "Проверяем правильность расключения электропроводки, гидроизоляцию санузлов и опрессовку труб до зашивки гипсокартоном.",
        descUz: "Elektr simlari ulanishi, gidroizolyatsiya va quvurlar o'rnatilishini yopilishidan oldin tekshiramiz.",
      },
      {
        step: "03",
        phase: "GEOMETRY AUDIT",
        titleRu: "Штукатурка и плоскости стен",
        titleUz: "Suvoq va tekisliklar nazorati",
        descRu: "Контролируем вертикали по лазеру, прямые углы 90° под мебель и кухню, отсутствие волн и толщину защитного слоя.",
        descUz: "Lazer bilan devorlar tikligi, mebel uchun 90° burchaklar va suvoq qalinligini nazorat qilamiz.",
      },
      {
        step: "04",
        phase: "SITE REPORTING",
        titleRu: "Отчётность с фиксацией замечаний",
        titleUz: "Kamchiliklar bo'yicha hisobotlar",
        descRu: "После каждого выезда заказчик и прораб получают подробный фото- и видеоотчёт с конкретными технологическими указаниями.",
        descUz: "Har bir tashrifdan so'ng buyurtmachi va usta aniq ko'rsatmalar bilan foto va video hisobot oladi.",
      },
      {
        step: "05",
        phase: "FINAL ACCEPTANCE",
        titleRu: "Финальная приёмка чистового ремонта",
        titleUz: "Toza pardozlashni yakuniy qabul qilish",
        descRu: "Принимаем укладку керамогранита, малярные работы при контрольном боковом свете, монтаж сантехники и чистовой электрики.",
        descUz: "Kafel terilishi, devorlar bo'yalishi, santexnika va yoritish jihozlari sifatini yakuniy qabul qilamiz.",
      },
    ],
    turnkey: [
      {
        step: "01",
        phase: "CONSULTATION & BRIEF",
        titleRu: "Встреча на объекте и ТЗ",
        titleUz: "Obyektda uchrashuv va texnik topshiriq",
        descRu: "Детально обсуждаем эргономику, планировочные решения, бюджетные ориентиры, инженерные системы и материалы.",
        descUz: "Ergonomika, rejalashtirish, byudjet, muhandislik tizimlari va materiallarni batafsil muhokama qilamiz.",
      },
      {
        step: "02",
        phase: "FIXED ESTIMATE",
        titleRu: "Прозрачная смета и договор",
        titleUz: "Shaffof smeta va shartnoma",
        descRu: "Фиксируем детальную спецификацию объемов работ и материалов без скрытых доплат. Прописываем график и сроки сдачи.",
        descUz: "Kutilmagan to'lovlarsiz ish hajmlari va materiallar smetasini tuzamiz. Aniq muddatlarni belgilaymiz.",
      },
      {
        step: "03",
        phase: "ENGINEERING",
        titleRu: "Черновые и инженерные работы",
        titleUz: "Qora va muhandislik ishlari",
        descRu: "Возведение перегородок, акустическая изоляция, монтаж электрощита, коллекторных групп отопления и сантехники.",
        descUz: "Devorlarni tiklash, shovqin izolyatsiyasi, elektr qalqoni, isitish va santexnika tizimlarini montaj qilish.",
      },
      {
        step: "04",
        phase: "FINISHING",
        titleRu: "Чистовая отделка премиум-класса",
        titleUz: "Premial toza pardozlash",
        descRu: "Укладка крупноформатного керамогранита, паркета, покраска стен, монтаж света, розеток и скрытых дверей.",
        descUz: "Katta formatli kafel, parket yotqizish, devorlarni bo'yash, yorug'lik va yashirin eshiklarni o'rnatish.",
      },
      {
        step: "05",
        phase: "HANDOVER",
        titleRu: "Клининг и сдача ключей",
        titleUz: "Klining va kalitlarni topshirish",
        descRu: "Профессиональная генеральная уборка, финальное тестирование всех узлов и торжественная передача готового интерьера.",
        descUz: "Professional tozalash, barcha tizimlarni yakuniy sinovdan o'tkazish va tayyor interyerni topshirish.",
      },
    ],
  };

  const currentSteps = processes[activeTab];

  return (
    <section className="py-24 sm:py-32 bg-[#F6F3EC] border-b border-[#1C1D1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#1C1D1A]/10 gap-6">
          <div className="max-w-3xl">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
              {t.process.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1D1A] leading-[1.06]">
              {t.process.headline}
            </h2>
            <p className="text-sm sm:text-base text-[#6E6B64] mt-3 leading-relaxed max-w-xl">
              {t.process.subheadline}
            </p>
          </div>
          <div className="font-mono text-[10px] text-[#6E6B64] tracking-widest uppercase">
            STRUCTURED EXECUTION ROADMAP
          </div>
        </div>

        {/* Process Navigation Tabs */}
        <div className="flex flex-wrap gap-3 pb-8">
          <button
            onClick={() => setActiveTab("inspection")}
            className={cn(
              "px-5 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-all",
              activeTab === "inspection"
                ? "bg-[#1C1D1A] text-[#F6F3EC]"
                : "bg-[#FAF8F4] text-[#6E6B64] hover:text-[#1C1D1A] border border-[#1C1D1A]/12"
            )}
          >
            01. {t.process.tabs.inspection}
          </button>
          <button
            onClick={() => setActiveTab("supervision")}
            className={cn(
              "px-5 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-all",
              activeTab === "supervision"
                ? "bg-[#1C1D1A] text-[#F6F3EC]"
                : "bg-[#FAF8F4] text-[#6E6B64] hover:text-[#1C1D1A] border border-[#1C1D1A]/12"
            )}
          >
            02. {t.process.tabs.supervision}
          </button>
          <button
            onClick={() => setActiveTab("turnkey")}
            className={cn(
              "px-5 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-all",
              activeTab === "turnkey"
                ? "bg-[#1C1D1A] text-[#F6F3EC]"
                : "bg-[#FAF8F4] text-[#6E6B64] hover:text-[#1C1D1A] border border-[#1C1D1A]/12"
            )}
          >
            03. {t.process.tabs.turnkey}
          </button>
        </div>

        {/* 5 Phased Execution Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pt-6">
          {currentSteps.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF8F4] border border-[#1C1D1A]/12 p-6 flex flex-col justify-between hover:border-[#9E7448] transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#1C1D1A]/8">
                  <span className="font-mono text-xl font-normal text-[#9E7448]">
                    {item.step}
                  </span>
                  <span className="font-mono text-[9px] text-[#6E6B64] tracking-wider uppercase">
                    {item.phase}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-normal text-[#1C1D1A] leading-snug group-hover:text-[#9E7448] transition-colors">
                  {locale === "ru" ? item.titleRu : item.titleUz}
                </h3>

                <p className="text-xs text-[#6E6B64] leading-relaxed">
                  {locale === "ru" ? item.descRu : item.descUz}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1C1D1A]/5 text-[9px] font-mono text-[#9E7448] uppercase tracking-wider">
                {locale === "ru" ? `ЭТАП ${index + 1} / 5` : `${index + 1} / 5 BOSQICH`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
