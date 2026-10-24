"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { FAQSection } from "@/components/sections/FAQSection";
import { LeadForm } from "@/components/sections/LeadForm";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Camera,
  Layers,
  ArrowUpRight,
  Send,
} from "lucide-react";

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
    <div className="pt-24 sm:pt-32">
      {/* Hero Section */}
      <section className="pb-16 sm:pb-20 border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#20211F]/5 border border-[#20211F]/10 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8794A]" />
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-[#77746D] uppercase font-semibold">
                  {locale === "ru" ? "ТАШКЕНТ · ТЕХНАДЗОР РЕМОНТА" : "TOSHKENT · TA'MIR TEXNAZORATI"}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#20211F] leading-[1.05]">
                {locale === "ru"
                  ? "Независимый технический надзор за ремонтом квартир"
                  : "Xonadonlar ta'miri ustidan mustaqil texnik nazorat"}
              </h1>

              <p className="text-base sm:text-lg text-[#77746D] leading-relaxed max-w-2xl">
                {locale === "ru"
                  ? "Защищаем ваши деньги и нервы. Контролируем строительную бригаду на всех критических этапах скрытых работ, предотвращая переделки и грубые нарушения строительных норм."
                  : "Mablag'ingiz va xotirjamligingizni himoya qilamiz. Quruvchilar brigadasini yashirin ishlarning barcha bosqichlarida nazorat qilib, xatolar va ortiqcha xarajatlarning oldini olamiz."}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs sm:text-sm uppercase tracking-widest font-semibold rounded-sm transition-all"
                >
                  <span>{locale === "ru" ? "Обсудить контроль ремонта" : "Ta'mir nazoratini muhokama qilish"}</span>
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Технический надзор за ремонтом"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#F5F2EC]">
                  <span className="text-xs font-mono text-[#A8794A] uppercase tracking-wider block">
                    КОНТРОЛЬ СКРЫТЫХ РАБОТ
                  </span>
                  <p className="font-serif text-lg font-bold mt-1">
                    {locale === "ru"
                      ? "То, что скроет штукатурка и плитка, останется навсегда"
                      : "Suvoq va kafel ostida qoladigan kamchiliklarni oldini olamiz"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Stages of Supervision */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              {locale === "ru" ? "КОНТРОЛЬНЫЕ ТОЧКИ" : "NAZORAT BOSQICHLARI"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F] mt-2">
              {locale === "ru" ? "6 ключевых этапов технического надзора" : "Texnazoratning 6 ta asosiy bosqichi"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((st, i) => (
              <div
                key={i}
                className="bg-white border border-[#20211F]/10 p-6 rounded-sm space-y-3 hover:border-[#A8794A] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-[#A8794A]">{st.num}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#20211F]/30" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#20211F]">
                  {locale === "ru" ? st.titleRu : st.titleUz}
                </h3>
                <p className="text-xs text-[#77746D] leading-relaxed">
                  {locale === "ru" ? st.descRu : st.descUz}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Supervision Report Callout */}
      <section className="py-20 bg-[#20211F] text-[#F5F2EC] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono text-[#A8794A] uppercase tracking-widest">
                ПРОЗРАЧНАЯ ОТЧЕТНОСТЬ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F2EC] leading-tight">
                {locale === "ru" ? "Фотоотчет с конкретными предписаниями после каждого выезда" : "Har bir tashrifdan so'ng aniq ko'rsatmalar bilan foto-hisobot"}
              </h2>
              <p className="text-sm sm:text-base text-[#F5F2EC]/70 leading-relaxed">
                {locale === "ru"
                  ? "Вам не нужно тратить время на споры с прорабом. Эксперт указывает бригаде точные технологические нормы, дает срок на устранение и проверяет исправление."
                  : "Usta bilan bahslashishga vaqt sarflashingiz shart emas. Ekspert brigadaga aniq texnologik me'yorlarni ko'rsatadi va to'g'rilanishini tekshiradi."}
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#F5F2EC]/90">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8794A]" />
                  <span>{locale === "ru" ? "Фиксация скрытых работ на фото и видео в архив объекта" : "Yashirin ishlarni arxiv uchun foto va videoga muhrlash"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8794A]" />
                  <span>{locale === "ru" ? "Оперативная связь с дизайнером и автором проекта" : "Dizayner va loyiha muallifi bilan tezkor aloqa"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A8794A]" />
                  <span>{locale === "ru" ? "Проверка объёмов и сметных списаний материалов" : "Materiallar hajmi va sarfini nazorat qilish"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 bg-[#2A2B28] border border-white/10 rounded-sm space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono uppercase text-[#A8794A]">ТЕХНИЧЕСКИЙ ОТЧЕТ № 04</span>
                  <span className="text-[10px] font-mono text-white/50">ДЕМОНСТРАЦИОННЫЙ ПРИМЕР</span>
                </div>
                <div className="space-y-2 text-xs font-mono text-[#F5F2EC]/80">
                  <p className="text-[#A8794A]">Этап: Разводка сантехники и гидроизоляция санузлов</p>
                  <p>1. Трасса слива ванны смонтирована с контруклоном: предписано перебрать с уклоном 2%</p>
                  <p>2. Отсутствует гидроизоляционный бортик высотой 15 см по периметру перегородок</p>
                  <p>3. Проведены гидроиспытания коллекторной группы под давлением 8 атм — утечек нет</p>
                  <p>4. Срок устранения замечаний бригадой: 48 часов до начала облицовки</p>
                </div>
                <div className="pt-2 text-[11px] text-[#F5F2EC]/50 italic">
                  * Все замечания отправляются прорабу и дублируются заказчику в Telegram.
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
              {locale === "ru" ? "ЗАПРОС НА НАДЗОР" : "NAZORAT UCHUN SO'ROV"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F] mt-2">
              {locale === "ru" ? "Заявка на контроль ремонта" : "Ta'mir nazoratiga ariza"}
            </h2>
            <p className="text-xs sm:text-sm text-[#77746D] mt-2">
              {locale === "ru"
                ? "Укажите площадь квартиры и текущий этап ремонта. Подберём оптимальный график выездов."
                : "Maydon va ta'mirning hozirgi bosqichini ko'rsating. Qulay tashriflar jadvalini tuzamiz."}
            </p>
          </div>

          <LeadForm defaultService="supervision" />
        </div>
      </section>

      {/* FAQ for Supervision */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              FAQ
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#20211F] mt-1.5">
              {locale === "ru" ? "Частые вопросы по технадзору" : "Texnazorat bo'yicha savollar"}
            </h2>
          </div>
          <FAQSection categoryFilter="supervision" />
        </div>
      </section>
    </div>
  );
}
