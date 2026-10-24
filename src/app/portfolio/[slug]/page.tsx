"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { portfolioCases, ProjectCase } from "@/content/portfolio";
import { siteConfig } from "@/content/config";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Calendar,
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
        <h1 className="font-serif text-3xl font-bold text-[#20211F]">
          {locale === "ru" ? "Проект не найден" : "Loyiha topilmadi"}
        </h1>
        <p className="text-sm text-[#77746D] mt-2">
          {locale === "ru" ? "К сожалению, запрошенный кейс не существует." : "Afsuski, so'ralgan keys mavjud emas."}
        </p>
        <Link
          href="/portfolio"
          className="inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-[#20211F] text-[#F5F2EC] text-xs uppercase tracking-wider rounded-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{locale === "ru" ? "Вернуться в портфолио" : "Portfolioga qaytish"}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-32">
      {/* Back button & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#77746D] hover:text-[#20211F] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{locale === "ru" ? "Все проекты" : "Barcha loyihalar"}</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="pb-16 border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#A8794A]">
              <span>№ {project.category.toUpperCase()}</span>
              <span>·</span>
              <span>{locale === "ru" ? project.categoryLabelRu : project.categoryLabelUz}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20211F] leading-tight">
              {locale === "ru" ? project.titleRu : project.titleUz}
            </h1>

            <p className="text-base sm:text-lg text-[#77746D] leading-relaxed">
              {locale === "ru" ? project.scopeRu : project.scopeUz}
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#A8794A] pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{locale === "ru" ? project.statusRu : project.statusUz}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cover Photograph */}
      <section className="py-12 bg-[#FAF8F5] border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-[#20211F]/15 shadow-luxury bg-[#EAE5DC]">
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
      <section className="py-20 bg-[#F5F2EC] border-b border-[#20211F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left side: Case Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F]">
                {locale === "ru" ? "Описание задачи и ход обследования" : "Vazifa tavsifi va ko'rik jarayoni"}
              </h2>
              <p className="text-sm sm:text-base text-[#77746D] leading-relaxed">
                {locale === "ru" ? project.descriptionRu : project.descriptionUz}
              </p>

              {/* Technical findings */}
              {project.findingsRu && (
                <div className="p-6 bg-[#FAF8F5] border border-[#20211F]/10 rounded-sm space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[#20211F] flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-[#A8794A]" />
                    <span>{locale === "ru" ? "Зафиксированные дефекты и замечания" : "Qayd etilgan nuqsonlar va kamchiliklar"}</span>
                  </h3>
                  <ul className="space-y-3">
                    {(locale === "ru" ? project.findingsRu : project.findingsUz || []).map((finding, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#20211F]">
                        <span className="font-mono text-xs text-[#A8794A] mt-0.5 font-bold">
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
              <div className="bg-[#FAF8F5] border border-[#20211F]/15 p-6 sm:p-8 rounded-sm space-y-6 shadow-editorial sticky top-28">
                <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold block">
                  {locale === "ru" ? "ПАРАМЕТРЫ ОБЪЕКТА" : "OBYEKT PARAMETRLARI"}
                </span>

                <div className="space-y-4 divide-y divide-[#20211F]/10 text-xs sm:text-sm">
                  <div className="flex justify-between pt-2">
                    <span className="text-[#77746D]">{locale === "ru" ? "Локация" : "Joylashuv"}</span>
                    <span className="font-medium text-[#20211F]">Ташкент, Узбекистан</span>
                  </div>
                  <div className="flex justify-between pt-3">
                    <span className="text-[#77746D]">{locale === "ru" ? "Тип услуги" : "Xizmat turi"}</span>
                    <span className="font-medium text-[#20211F]">
                      {locale === "ru" ? project.categoryLabelRu : project.categoryLabelUz}
                    </span>
                  </div>
                  <div className="flex justify-between pt-3">
                    <span className="text-[#77746D]">{locale === "ru" ? "Эксперт" : "Ekspert"}</span>
                    <span className="font-medium text-[#20211F]">Анна Гончарова</span>
                  </div>
                  <div className="flex justify-between pt-3">
                    <span className="text-[#77746D]">{locale === "ru" ? "Статус" : "Holati"}</span>
                    <span className="font-medium text-[#A8794A]">
                      {locale === "ru" ? project.statusRu : project.statusUz}
                    </span>
                  </div>
                </div>

                <div className="pt-2 space-y-3">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center space-x-2 py-3.5 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
                  >
                    <span>{locale === "ru" ? "Обсудить аналогичную задачу" : "O'xshash vazifani muhokama qilish"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={siteConfig.telegramDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 border border-[#20211F]/20 text-[#20211F] hover:bg-[#EAE5DC] text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-[#A8794A]" />
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
        <section className="py-20 bg-[#FAF8F5] border-b border-[#20211F]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
                {locale === "ru" ? "ФОТОФИКСАЦИЯ" : "FOTO-HISOBOT"}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F] mt-1.5">
                {locale === "ru" ? "Галерея материалов объекта" : "Obyekt materiallari galereyasi"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#20211F]/10 bg-[#EAE5DC] shadow-sm hover:scale-[1.02] transition-transform duration-300"
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
