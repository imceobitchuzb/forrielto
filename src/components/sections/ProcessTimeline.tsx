"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProcessTimeline() {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<"inspection" | "supervision" | "turnkey">("inspection");

  const processes = {
    inspection: [
      {
        step: "01",
        titleRu: "Консультация и бронирование даты",
        titleUz: "Konsultatsiya va sanani band qilish",
        descRu: "Вы сообщаете название жилого комплекса, площадь и ориентировочную дату сдачи застройщиком. Бронируем удобное время.",
        descUz: "Siz turar-joy majmuasi nomi, maydoni va taxminiy topshirish sanasini bildirasiz. Qulay vaqtni band qilamiz.",
      },
      {
        step: "02",
        titleRu: "Инструментальный выезд на объект",
        titleUz: "Obyektga instrumental tashrif",
        descRu: "Приезжаем на объект со всем диагностическим оборудованием: лазерные уровни, тепловизоры, влагомеры, тестеры сети.",
        descUz: "Barcha diagnostika asboblari bilan obyektga yetib kelamiz: lazer sathlari, teplovizorlar, namlik o'lchagichlar.",
      },
      {
        step: "03",
        titleRu: "Детальная проверка каждого узла",
        titleUz: "Har bir tugunni batafsil tekshirish",
        descRu: "Проверяем геометрию стен, стяжку, оконные блоки на продувание, вытяжку, электрические цепи и реальную площадь.",
        descUz: "Devorlar geometriyasi, pol stajkasi, derazalardan shamol o'tishi, ventilyatsiya, elektr va haqiqiy maydon tekshiriladi.",
      },
      {
        step: "04",
        titleRu: "Составление официального дефектного акта",
        titleUz: "Rasmiy nuqsonlar dalolatnomasini tuzish",
        descRu: "Формируем юридически грамотный акт со ссылками на строительные нормы ШНК/КМК и фотофиксацией для предъявления застройщику.",
        descUz: "Quruvchiga topshirish uchun ShNK/KMK me'yorlariga asoslangan, fotosuratlar bilan rasmiy dalolatnoma tuziladi.",
      },
      {
        step: "05",
        titleRu: "Инструктаж по передаче акта",
        titleUz: "Dalolatnomani topshirish bo'yicha ko'rsatma",
        descRu: "Разъясняем ваши права, помогаем правильно вручить акт застройщику и проконтролировать сроки устранения.",
        descUz: "Huquqlaringizni tushuntiramiz, dalolatnomani to'g'ri topshirish va bartaraf etish muddatlarini nazorat qilishga yordam beramiz.",
      },
    ],
    supervision: [
      {
        step: "01",
        titleRu: "Анализ дизайн-проекта и сметы",
        titleUz: "Dizayn-loyiha va smetani tahlil qilish",
        descRu: "Изучаем проектную документацию, планы разводки коммуникаций и согласовываем график контрольных выездов.",
        descUz: "Loyiha hujjatlari va muhandislik rejalarini o'rganamiz, nazorat tashriflari jadvalini kelishib olamiz.",
      },
      {
        step: "02",
        titleRu: "Контроль скрытых работ",
        titleUz: "Yashirin ishlarni nazorat qilish",
        descRu: "Проверяем правильность монтажа электропроводки, гидроизоляции санузлов, труб водоснабжения и отопления до заливки и зашивки.",
        descUz: "Elektr simlari, hammomlar gidroizolyatsiyasi va quvurlarni yopilishidan oldin sifatini tekshiramiz.",
      },
      {
        step: "03",
        titleRu: "Проверка геометрии и штукатурки",
        titleUz: "Geometriya va suvoqni tekshirish",
        descRu: "Контролируем вертикали, плоскости, прямые углы 90° под мебель и качество стяжки пола по СНиП.",
        descUz: "Mebel uchun devorlar tekisligi, 90° burchaklar va pol stajkasi sifatini me'yorlar bo'yicha tekshiramiz.",
      },
      {
        step: "04",
        titleRu: "Отчеты заказчику с фиксацией нарушений",
        titleUz: "Buyurtmachiga hisobotlar taqdim etish",
        descRu: "После каждого выезда вы получаете фотоотчет с четкими указаниями, что бригаде необходимо исправить.",
        descUz: "Har bir tashrifdan so'ng brigada nimani tuzatishi kerakligi bo'yicha aniq foto-hisobot olasiz.",
      },
      {
        step: "05",
        titleRu: "Финальная приёмка чистовой отделки",
        titleUz: "Toza pardozlashni yakuniy qabul qilish",
        descRu: "Принимаем у мастеров укладку плитки, покраску, напольные покрытия, установку сантехники и электроприборов.",
        descUz: "Ustalardan kafel yotqizish, bo'yash, pol qoplamalari va santexnika o'rnatilishini qabul qilamiz.",
      },
    ],
    turnkey: [
      {
        step: "01",
        titleRu: "Встреча на объекте и ТЗ",
        titleUz: "Obyektda uchrashuv va texnik topshiriq",
        descRu: "Обсуждаем ваши пожелания, планировку, стилистику, функциональные зоны и планируемый бюджет.",
        descUz: "Istaklaringiz, rejalashtirish, uslub, funksional zonalar va rejalashtirilgan byudjetni muhokama qilamiz.",
      },
      {
        step: "02",
        titleRu: "Прозрачная смета и договор",
        titleUz: "Shaffof smeta va shartnoma",
        descRu: "Фиксируем детальную ведомость работ и материалов без скрытых доплат. Прописываем график и сроки сдачи.",
        descUz: "Kutilmagan to'lovlarsiz ishlar va materiallarning batafsil smetasini tuzamiz. Muddatlarni belgilaymiz.",
      },
      {
        step: "03",
        titleRu: "Черновые и инженерные работы",
        titleUz: "Qora va muhandislik ishlari",
        descRu: "Демонтаж, возведение перегородок, разводка электрики, сантехники, вентиляции, штукатурка и стяжка.",
        descUz: "Devorlarni tiklash, elektr, santexnika, ventilyatsiya, suvoq va pol quyish ishlari.",
      },
      {
        step: "04",
        titleRu: "Чистовая отделка премиум-класса",
        titleUz: "Premial toza pardozlash",
        descRu: "Укладка широкоформатного керамогранита, паркета, покраска стен, монтаж света, розеток и сантехники.",
        descUz: "Katta formatli kafel, parket yotqizish, devorlarni bo'yash, yorug'lik va santexnika o'rnatish.",
      },
      {
        step: "05",
        titleRu: "Клининг и сдача объекта",
        titleUz: "Klining va obyektni topshirish",
        descRu: "Проводим профессиональный клининг, финальную проверку всех систем и передаем ключи от готовой квартиры.",
        descUz: "Professional tozalash, barcha tizimlarni yakuniy tekshirish va tayyor xonadon kalitlarini topshirish.",
      },
    ],
  };

  const currentSteps = processes[activeTab];

  return (
    <section className="py-20 sm:py-28 bg-[#F5F2EC] border-b border-[#20211F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
            {t.process.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20211F] mt-2 leading-[1.08]">
            {t.process.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#77746D] mt-3 leading-relaxed">
            {t.process.subheadline}
          </p>
        </div>

        {/* Process Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-[#20211F]/10">
          <button
            onClick={() => setActiveTab("inspection")}
            className={cn(
              "px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-sm transition-all",
              activeTab === "inspection"
                ? "bg-[#20211F] text-[#F5F2EC] shadow-sm"
                : "bg-white text-[#77746D] hover:text-[#20211F] border border-[#20211F]/10"
            )}
          >
            {t.process.tabs.inspection}
          </button>
          <button
            onClick={() => setActiveTab("supervision")}
            className={cn(
              "px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-sm transition-all",
              activeTab === "supervision"
                ? "bg-[#20211F] text-[#F5F2EC] shadow-sm"
                : "bg-white text-[#77746D] hover:text-[#20211F] border border-[#20211F]/10"
            )}
          >
            {t.process.tabs.supervision}
          </button>
          <button
            onClick={() => setActiveTab("turnkey")}
            className={cn(
              "px-5 py-2.5 text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-sm transition-all",
              activeTab === "turnkey"
                ? "bg-[#20211F] text-[#F5F2EC] shadow-sm"
                : "bg-white text-[#77746D] hover:text-[#20211F] border border-[#20211F]/10"
            )}
          >
            {t.process.tabs.turnkey}
          </button>
        </div>

        {/* Timeline Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pt-10">
          {currentSteps.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF8F5] border border-[#20211F]/10 p-6 rounded-sm flex flex-col justify-between hover:border-[#A8794A] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-[#A8794A] group-hover:scale-105 transition-transform">
                    {item.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#20211F]/20 group-hover:bg-[#A8794A] transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#20211F] mb-2 leading-snug">
                  {locale === "ru" ? item.titleRu : item.titleUz}
                </h3>
                <p className="text-xs text-[#77746D] leading-relaxed">
                  {locale === "ru" ? item.descRu : item.descUz}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#20211F]/5 text-[10px] font-mono text-[#A8794A] uppercase tracking-wider">
                {locale === "ru" ? `Шаг ${index + 1} из 5` : `${index + 1}-qadam`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
