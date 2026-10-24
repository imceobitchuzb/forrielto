"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { portfolioCases } from "@/content/portfolio";
import { siteConfig } from "@/content/config";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ArrowLeft,
  ShieldCheck,
  Send,
  ArrowUpRight,
} from "lucide-react";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { locale } = useLanguage();

  const project = portfolioCases.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center max-w-xl mx-auto px-4">
        <h1 className="font-serif text-3xl font-normal text-[#1C1D1A]">
          {locale === "ru" ? "Проект не найден" : "Loyiha topilmadi"}
        </h1>
        <p className="text-sm text-[#6E6B64] mt-2">
          {locale === "ru" ? "К сожалению, запрошенный кейс не существует." : "Afsuski, so'ralgan keys mavjud emas."}
        </p>
        <Link
          href="/portfolio"
          className="inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-[#1C1D1A] text-[#F6F3EC] text-xs uppercase tracking-[0.2em]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{locale === "ru" ? "Вернуться в портфолио" : "Portfolioga qaytish"}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-36">
      {/* Back button & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[#6E6B64] hover:text-[#1C1D1A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{locale === "ru" ? "Все проекты" : "Barcha loyihalar"}</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="pb-16 border-b border-[#1C1D1A]/10 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-[#9E7448] font-semibold">
              <span>CASE PROTOCOL</span>
              <span>//</span>
              <span>{locale === "ru" ? project.categoryLabelRu : project.categoryLabelUz}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1C1D1A] leading-tight">
              {locale === "ru" ? project.titleRu : project.titleUz}
            </h1>

            <p className="text-base sm:text-lg text-[#6E6B64] leading-relaxed max-w-2xl">
              {locale === "ru" ? project.scopeRu : project.scopeUz}
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#9E7448] pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{locale === "ru" ? project.statusRu : project.statusUz}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cover Photograph */}
      <section className="py-12 bg-[#FAF8F4] border-b border-[#1C1D1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="arch-img-frame aspect-[16/9] border border-[#1C1D1A]/15 shadow-2xl bg-[#EBE6DC]">
            <Image
              src={project.coverImage}
              alt={project.titleRu}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Description & Technical Findings Details */}
      <section className="py-24 bg-[#F6F3EC] border-b border-[#1C1D1A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left side: Case Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
                  AUDIT LOG NARRATIVE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1A]">
                  {locale === "ru" ? "Описание задачи и ход обследования" : "Vazifa tavsifi va ko'rik jarayoni"}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#6E6B64] leading-relaxed">
                {locale === "ru" ? project.descriptionRu : project.descriptionUz}
              </p>

              {/* Technical findings */}
              {project.findingsRu && (
                <div className="p-5 sm:p-8 bg-[#FAF8F4] border border-[#1C1D1A]/12 space-y-4 shadow-sm">
                  <h3 className="font-serif text-xl font-normal text-[#1C1D1A] flex items-center space-x-2 pb-3 border-b border-[#1C1D1A]/8">
                    <span>{locale === "ru" ? "Зафиксированные дефекты и отступления" : "Qayd etilgan nuqsonlar va og'ishlar"}</span>
                  </h3>
                  <ul className="space-y-3 pt-2">
                    {(locale === "ru" ? project.findingsRu : project.findingsUz || []).map((finding, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#1C1D1A]">
                        <span className="font-mono text-xs text-[#9E7448] mt-0.5 font-bold flex-shrink-0">
                          0{idx + 1}.
                        </span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right side: Summary Card & Action */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF8F4] border border-[#1C1D1A]/15 p-5 sm:p-8 space-y-6 shadow-2xl sticky top-28">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase font-semibold block pb-2 border-b border-[#1C1D1A]/10">
                  {locale === "ru" ? "ПАРАМЕТРЫ ОБЪЕКТА" : "OBYEKT PARAMETRLARI"}
                </span>

                <div className="space-y-4 divide-y divide-[#1C1D1A]/10 text-xs sm:text-sm font-mono">
                  <div className="flex justify-between gap-3 pt-2">
                    <span className="text-[#6E6B64] flex-shrink-0">{locale === "ru" ? "Локация" : "Joylashuv"}</span>
                    <span className="text-[#1C1D1A] text-right">Ташкент, Узбекистан</span>
                  </div>
                  <div className="flex justify-between gap-3 pt-3">
                    <span className="text-[#6E6B64] flex-shrink-0">{locale === "ru" ? "Тип услуги" : "Xizmat turi"}</span>
                    <span className="text-[#1C1D1A] text-right">
                      {locale === "ru" ? project.categoryLabelRu : project.categoryLabelUz}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3 pt-3">
                    <span className="text-[#6E6B64] flex-shrink-0">{locale === "ru" ? "Эксперт" : "Ekspert"}</span>
                    <span className="text-[#1C1D1A] text-right">Анна Гончарова</span>
                  </div>
                  <div className="flex justify-between gap-3 pt-3">
                    <span className="text-[#6E6B64] flex-shrink-0">{locale === "ru" ? "Статус" : "Holati"}</span>
                    <span className="text-[#9E7448] text-right">
                      {locale === "ru" ? project.statusRu : project.statusUz}
                    </span>
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <Link
                    href="/contact"
                    className="w-full min-h-[46px] flex items-center justify-center space-x-2 py-3.5 px-4 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-colors border border-[#1C1D1A] touch-manipulation"
                  >
                    <span>{locale === "ru" ? "Обсудить аналогичную задачу" : "O'xshash vazifani muhokama qilish"}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </Link>

                  <a
                    href={siteConfig.telegramDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[46px] flex items-center justify-center space-x-2 py-3.5 px-4 border border-[#1C1D1A]/20 text-[#1C1D1A] hover:bg-[#EBE6DC] text-xs uppercase tracking-[0.2em] font-medium transition-colors touch-manipulation"
                  >
                    <Send className="w-3.5 h-3.5 text-[#9E7448]" />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery of Project Images */}
      {project.galleryImages && project.galleryImages.length > 1 && (
        <section className="py-24 bg-[#FAF8F4] border-b border-[#1C1D1A]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#1C1D1A]/10">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-1 font-semibold">
                  {locale === "ru" ? "ФОТОФИКСАЦИЯ ОБЪЕКТА" : "FOTO-HISOBOT"}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1A]">
                  {locale === "ru" ? "Галерея материалов и узлов" : "Obyekt materiallari galereyasi"}
                </h2>
              </div>
              <div className="font-mono text-[10px] text-[#6E6B64] uppercase tracking-widest">
                VERIFIED ASSETS
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="arch-img-frame aspect-[4/3] border border-[#1C1D1A]/10 bg-[#EBE6DC] shadow-sm hover:scale-[1.02] transition-transform duration-500"
                >
                  <Image
                    src={img}
                    alt={`${project.titleRu} - фото ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </div>
  );
}
