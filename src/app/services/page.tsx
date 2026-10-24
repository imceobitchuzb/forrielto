"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowUpRight, CheckCircle2, Shield, Wrench, Sparkles } from "lucide-react";

export default function ServicesPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-24 sm:pt-32">
      {/* Header section */}
      <section className="pb-16 sm:pb-20 border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
            {locale === "ru" ? "НАПРАВЛЕНИЯ ЭКСПЕРТИЗЫ" : "EKSPERTIZA YO'NALISHLARI"}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#20211F] mt-2 leading-[1.05] max-w-4xl">
            {locale === "ru"
              ? "Комплексные услуги контроля качества недвижимости в Ташкенте"
              : "Toshkentda ko'chmas mulk sifatini nazorat qilish bo'yicha kompleks xizmatlar"}
          </h1>
          <p className="text-base sm:text-lg text-[#77746D] mt-4 max-w-2xl leading-relaxed">
            {locale === "ru"
              ? "Помогаем на каждом этапе: от проверки бетонной коробки при получении ключей до надзора за бригадой и сдачи интерьера под ключ."
              : "Har bir bosqichda yordam beramiz: kalitlarni olishda beton qutini tekshirishdan to brigada nazorati va interyerni kalit ostida topshirishgacha."}
          </p>
        </div>
      </section>

      {/* Service 1 Detail Banner */}
      <section className="py-20 border-b border-[#20211F]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs text-[#A8794A] tracking-widest uppercase">
                УСЛУГА № 01 · ПЕРЕД ПОДПИСАНИЕМ АКТА
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F] leading-tight">
                {t.services.s1.title}
              </h2>
              <p className="text-sm sm:text-base text-[#77746D] leading-relaxed">
                {t.services.s1.desc}
              </p>

              <div className="space-y-2.5">
                {[
                  locale === "ru" ? "Проверка лазерным нивелиром геометрии и отклонений стен" : "Lazer sath bilan devorlar geometriyasi va og'ishlarini tekshirish",
                  locale === "ru" ? "Тепловизионное обследование оконных блоков и наружных углов" : "Deraza bloklari va tashqi burchaklarni teplovizor orqali ko'rish",
                  locale === "ru" ? "Проверка стяжки на бухтение, пустоты и трещины" : "Pol stajkasidagi yoriqlar va bo'shliqlarni aniqlash",
                  locale === "ru" ? "Официальный дефектный акт со ссылками на строительные нормы" : "Qurilish me'yorlariga asoslangan rasmiy nuqsonlar dalolatnomasi",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#20211F]">
                    <CheckCircle2 className="w-4 h-4 text-[#A8794A] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/apartment-inspection"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
                >
                  <span>{locale === "ru" ? "Подробнее о приёмке" : "Qabul haqida batafsil"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#20211F]/10 shadow-editorial bg-[#EAE5DC]">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
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
      <section className="py-20 border-b border-[#20211F]/10 bg-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#20211F]/10 shadow-editorial bg-[#EAE5DC]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Контроль ремонта"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="font-mono text-xs text-[#A8794A] tracking-widest uppercase">
                УСЛУГА № 02 · НАДЗОР ЗА СТРОИТЕЛЯМИ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F] leading-tight">
                {t.services.s2.title}
              </h2>
              <p className="text-sm sm:text-base text-[#77746D] leading-relaxed">
                {t.services.s2.desc}
              </p>

              <div className="space-y-2.5">
                {[
                  locale === "ru" ? "Проверка скрытых коммуникаций до зашивки гипсокартоном" : "Yashirin kommunikatsiyalarni yopilishidan oldin tekshirish",
                  locale === "ru" ? "Контроль гидроизоляции мокрых зон и уклонов канализации" : "Hammomlar gidroizolyatsiyasi va quvurlar nishabini nazorat qilish",
                  locale === "ru" ? "Аудит соответствия дизайн-проекту и строительным нормам" : "Dizayn-loyiha va qurilish me'yorlariga muvofiqlik auditi",
                  locale === "ru" ? "Еженедельные фотоотчеты с фиксацией нарушений для прораба" : "Usta uchun kamchiliklar qayd etilgan haftalik foto-hisobotlar",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#20211F]">
                    <CheckCircle2 className="w-4 h-4 text-[#A8794A] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/renovation-supervision"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
                >
                  <span>{locale === "ru" ? "Подробнее о технадзоре" : "Texnazorat haqida batafsil"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 Detail Banner */}
      <section className="py-20 border-b border-[#20211F]/10 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs text-[#A8794A] tracking-widest uppercase">
                УСЛУГА № 03 · ПОЛНЫЙ ЦИКЛ ПОД КЛЮЧ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F] leading-tight">
                {t.services.s3.title}
              </h2>
              <p className="text-sm sm:text-base text-[#77746D] leading-relaxed">
                {t.services.s3.desc}
              </p>

              <div className="space-y-2.5">
                {[
                  locale === "ru" ? "Фиксированная смета без внезапных скрытых доплат" : "Kutilmagan to'lovlarsiz qat'iy belgilangan smeta",
                  locale === "ru" ? "Проверенные мастера узкой специализации" : "Tor mutaxassislikka ega tajribali ustalar",
                  locale === "ru" ? "Персональный надзор эксперта на каждом этапе" : "Har bir bosqichda ekspertning shaxsiy nazorati",
                  locale === "ru" ? "Официальный договор, график работ и гарантия" : "Rasmiy shartnoma, ish jadvali va sifat kafolati",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#20211F]">
                    <CheckCircle2 className="w-4 h-4 text-[#A8794A] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/turnkey-renovation"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
                >
                  <span>{locale === "ru" ? "Подробнее о ремонте под ключ" : "Kalit ostida ta'mir haqida"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#20211F]/10 shadow-editorial bg-[#EAE5DC]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
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
