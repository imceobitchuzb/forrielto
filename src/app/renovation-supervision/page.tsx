"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { FAQSection } from "@/components/sections/FAQSection";
import { LeadForm } from "@/components/sections/LeadForm";
import { ArrowUpRight, Send } from "lucide-react";

export default function RenovationSupervisionPage() {
  const { t, locale } = useLanguage();

  const stages = [
    {
      num: "01",
      titleRu: "Подготовительный этап и демонтаж",
      titleUz: "Tayyorgarlik va buzish bosqichi",
      descRu: "Контроль сноса и возведения перегородок, проверка осевых привязок и дверных проемов по проекту.",
      descUz: "Devorlarni buzish va tiklash nazorati, loyiha bo'yicha o'qlarni va eshik oraliqlarini tekshirish.",
    },
    {
      num: "02",
      titleRu: "Инженерные трассы и коммуникации",
      titleUz: "Muhandislik trassalari va simlar",
      descRu: "Аудит прокладки электрических кабелей без скруток, опрессовка труб водоснабжения и отопления до заливки.",
      descUz: "Elektr simlarini to'g'ri o'tkazish, suv va isitish quvurlarini yopilishidan oldin bosim bilan tekshirish.",
    },
    {
      num: "03",
      titleRu: "Гидроизоляция мокрых зон",
      titleUz: "Ho'l hududlar gidroizolyatsiyasi",
      descRu: "Проверка нанесения эластичной ленты во внутренних углах, проклейка манжет вокруг выводов труб и гидроизоляционный тест.",
      descUz: "Burchaklarda elastik lenta yopishtirilishi, quvurlar atrofi zichlanishi va gidroizolyatsiya sinovi.",
    },
    {
      num: "04",
      titleRu: "Штукатурка и геометрия помещений",
      titleUz: "Suvoq va xonalar geometriyasi",
      descRu: "Лазерная проверка вертикалей стен, прямых углов 90° в зоне кухни и санузлов, удаление маяков.",
      descUz: "Devorlar vertikalligi, oshxona va hammomda 90° burchaklar, mayoqlarning olib tashlanishi.",
    },
    {
      num: "05",
      titleRu: "Стяжка пола и звукоизоляция",
      titleUz: "Pol stajkasi va shovqin izolyatsiyasi",
      descRu: "Контроль укладки шумоизоляционных матов, демпферной ленты по периметру и деформационных швов.",
      descUz: "Shovqin izolyatsiyasi gilamchalari, devor bo'ylab lenta va deformatsiya choklarining to'g'riligi.",
    },
    {
      num: "06",
      titleRu: "Чистовая отделка и оборудование",
      titleUz: "Toza pardozlash va jihozlar",
      descRu: "Приёмка плоскости укладки керамогранита, малярных работ при контрольном боковом свете и монтажа санфаянса.",
      descUz: "Kafel terilishi tekisligi, bo'yoq ishlari va santexnika montajini nazorat chiroqlari ostida qabul qilish.",
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
                <span>{locale === "ru" ? "ТАШКЕНТ · ТЕХНАДЗОР РЕМОНТА" : "TOSHKENT · TA'MIR TEXNAZORATI"}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#1C1D1A] leading-[1.02]">
                {locale === "ru"
                  ? "Независимый технический надзор за ремонтом квартир"
                  : "Xonadonlar ta'miri ustidan mustaqil texnik nazorat"}
              </h1>

              <p className="text-base sm:text-lg text-[#6E6B64] leading-relaxed max-w-xl">
                {locale === "ru"
                  ? "Защищаем ваши деньги и нервы. Контролируем строительную бригаду на всех критических этапах скрытых работ, предотвращая дорогостоящие переделки и грубые нарушения технологий."
                  : "Mablag'ingiz va xotirjamligingizni himoya qilamiz. Quruvchilar brigadasini yashirin ishlarning barcha bosqichlarida nazorat qilib, xatolar va ortiqcha xarajatlarning oldini olamiz."}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-all border border-[#1C1D1A] group"
                >
                  <span>{locale === "ru" ? "Обсудить контроль ремонта" : "Ta'mir nazoratini muhokama qilish"}</span>
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt="Технический надзор за ремонтом"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#F6F3EC]">
                  <span className="text-[10px] font-mono text-[#B88E5E] uppercase tracking-widest block mb-1">
                    КОНТРОЛЬ СКРЫТЫХ РАБОТ
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-normal">
                    {locale === "ru"
                      ? "То, что скроет плитка и штукатурка, останется навсегда"
                      : "Suvoq va kafel ostida qoladigan xatolarni oldini olamiz"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Stages of Supervision */}
      <section className="py-24 bg-[#FAF8F4] border-b border-[#1C1D1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-14 border-b border-[#1C1D1A]/10 gap-4">
            <div className="max-w-3xl">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
                {locale === "ru" ? "КОНТРОЛЬНЫЕ ТОЧКИ" : "NAZORAT BOSQICHLARI"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1A]">
                {locale === "ru" ? "6 ключевых этапов технического надзора" : "Texnazoratning 6 ta asosiy bosqichi"}
              </h2>
            </div>
            <div className="font-mono text-[10px] text-[#6E6B64] tracking-widest uppercase">
              PHASED QUALITY ASSURANCE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((st, i) => (
              <div
                key={i}
                className="bg-white border border-[#1C1D1A]/12 p-7 flex flex-col justify-between hover:border-[#9E7448] transition-colors group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1C1D1A]/8">
                    <span className="font-mono text-lg text-[#9E7448]">{st.num}</span>
                    <span className="w-1.5 h-1.5 bg-[#1C1D1A]/20" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#1C1D1A] group-hover:text-[#9E7448] transition-colors leading-snug">
                    {locale === "ru" ? st.titleRu : st.titleUz}
                  </h3>
                  <p className="text-xs text-[#6E6B64] leading-relaxed">
                    {locale === "ru" ? st.descRu : st.descUz}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Supervision Report Callout */}
      <section className="py-24 bg-[#1C1D1A] text-[#F6F3EC] border-b border-white/10 bg-grain-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono text-[#B88E5E] uppercase tracking-[0.25em] font-semibold block">
                ПРОЗРАЧНАЯ ОТЧЁТНОСТЬ // SITE LOG
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F6F3EC] leading-tight">
                {locale === "ru" ? "Технический протокол с указаниями после каждого выезда" : "Har bir tashrifdan so'ng aniq ko'rsatmalar bilan foto-hisobot"}
              </h2>
              <p className="text-sm sm:text-base text-[#F6F3EC]/70 leading-relaxed">
                {locale === "ru"
                  ? "Вам не нужно тратить время на споры с прорабом. Эксперт указывает строителям точные технологические нормы, дает срок на устранение и проверяет исправление."
                  : "Usta bilan bahslashishga vaqt sarflashingiz shart emas. Ekspert brigadaga aniq texnologik me'yorlarni ko'rsatadi va to'g'rilanishini tekshiradi."}
              </p>
              <div className="space-y-2.5 pt-2 border-t border-white/10 text-xs sm:text-sm text-[#F6F3EC]/90 font-mono">
                <div className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 bg-[#B88E5E]" />
                  <span>{locale === "ru" ? "Фиксация скрытых работ на фото и видео в архив объекта" : "Yashirin ishlarni arxiv uchun foto va videoga muhrlash"}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 bg-[#B88E5E]" />
                  <span>{locale === "ru" ? "Оперативная связь с автором дизайн-проекта" : "Dizayn-loyiha muallifi bilan tezkor aloqa"}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="w-1.5 h-1.5 bg-[#B88E5E]" />
                  <span>{locale === "ru" ? "Контроль объёмов и сметных списаний материалов" : "Materiallar hajmi va sarfini nazorat qilish"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 bg-[#242522] border border-white/10 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[11px] font-mono uppercase text-[#B88E5E] tracking-widest font-semibold">
                    ТЕХНИЧЕСКИЙ ОТЧЕТ № 04
                  </span>
                  <span className="text-[9px] font-mono text-white/40 uppercase">
                    ДЕМОНСТРАЦИОННЫЙ ПРИМЕР
                  </span>
                </div>
                <div className="space-y-2.5 text-xs font-mono text-[#F6F3EC]/80 leading-relaxed">
                  <p className="text-[#B88E5E]">Этап: Разводка сантехники и гидроизоляция санузлов</p>
                  <p>1. Трасса слива ванны смонтирована с контруклоном: предписано перебрать с уклоном 2%</p>
                  <p>2. Отсутствует гидроизоляционный бортик высотой 15 см по периметру перегородок</p>
                  <p>3. Проведены гидроиспытания коллекторной группы под давлением 8 атм — герметично</p>
                  <p>4. Срок устранения замечаний бригадой: 48 часов до начала облицовки</p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[10px] text-[#F6F3EC]/50 italic font-mono">
                  * Все замечания отправляются прорабу и дублируются заказчику в Telegram.
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
              {locale === "ru" ? "ЗАПРОС НА НАДЗОР" : "NAZORAT UCHUN SO'ROV"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1A]">
              {locale === "ru" ? "Заявка на контроль ремонта" : "Ta'mir nazoratiga ariza"}
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6B64] mt-2">
              {locale === "ru"
                ? "Укажите площадь квартиры и текущий этап ремонта. Подберём оптимальный график выездов."
                : "Maydon va ta'mirning hozirgi bosqichini ko'rsating. Qulay tashriflar jadvalini tuzamiz."}
            </p>
          </div>

          <LeadForm defaultService="supervision" />
        </div>
      </section>

      {/* FAQ for Supervision */}
      <section className="py-24 bg-[#FAF8F4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
              FAQ // SUPERVISION
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1D1A]">
              {locale === "ru" ? "Частые вопросы по технадзору" : "Texnazorat bo'yicha savollar"}
            </h2>
          </div>
          <FAQSection categoryFilter="supervision" />
        </div>
      </section>
    </div>
  );
}
