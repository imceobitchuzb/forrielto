"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { portfolioCases } from "@/content/portfolio";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioGridProps {
  showFilter?: boolean;
  limit?: number;
}

export function PortfolioGrid({ showFilter = false, limit }: PortfolioGridProps) {
  const { locale } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", labelRu: "Все проекты", labelUz: "Barcha loyihalar" },
    { id: "inspection", labelRu: "Приёмка новостроек", labelUz: "Yangi uylarni qabul qilish" },
    { id: "supervision", labelRu: "Контроль ремонта", labelUz: "Ta'mir nazorati" },
    { id: "turnkey", labelRu: "Ремонт под ключ", labelUz: "Kalit ostida ta'mir" },
    { id: "defects", labelRu: "Строительные дефекты", labelUz: "Qurilish nuqsonlari" },
  ];

  const filtered = portfolioCases.filter((item) =>
    selectedCategory === "all" ? true : item.category === selectedCategory
  );

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="space-y-12">
      {/* Category filters */}
      {showFilter && (
        <div className="flex flex-wrap gap-2.5 pb-4 border-b border-[#1C1D1A]/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-4 py-2 text-xs font-mono uppercase tracking-[0.16em] transition-all",
                selectedCategory === cat.id
                  ? "bg-[#1C1D1A] text-[#F6F3EC]"
                  : "bg-[#FAF8F4] text-[#6E6B64] hover:text-[#1C1D1A] border border-[#1C1D1A]/12"
              )}
            >
              {locale === "ru" ? cat.labelRu : cat.labelUz}
            </button>
          ))}
        </div>
      )}

      {/* Grid of cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {displayed.map((item) => (
          <Link
            key={item.slug}
            href={`/portfolio/${item.slug}`}
            className="group bg-[#FAF8F4] border border-[#1C1D1A]/12 overflow-hidden hover:border-[#9E7448] transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Cover Image Container */}
              <div className="arch-img-frame aspect-[16/10] bg-[#EBE6DC] relative">
                <Image
                  src={item.coverImage}
                  alt={locale === "ru" ? item.titleRu : item.titleUz}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A]/75 via-transparent to-transparent" />

                {/* Category & Status Tags */}
                <div className="absolute top-4 left-4 bg-[#1C1D1A]/80 text-[#F6F3EC] px-3 py-1 text-[9px] font-mono uppercase tracking-[0.2em] backdrop-blur-sm border border-white/10">
                  {locale === "ru" ? item.categoryLabelRu : item.categoryLabelUz}
                </div>

                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#B88E5E] tracking-wider uppercase">
                  {locale === "ru" ? item.statusRu : item.statusUz}
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1A] group-hover:text-[#9E7448] transition-colors leading-snug">
                  {locale === "ru" ? item.titleRu : item.titleUz}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6B64] leading-relaxed line-clamp-3">
                  {locale === "ru" ? item.descriptionRu : item.descriptionUz}
                </p>

                {item.findingsRu && (
                  <div className="pt-3 border-t border-[#1C1D1A]/8">
                    <span className="text-[9px] font-mono text-[#9E7448] uppercase tracking-[0.2em] block mb-2 font-semibold">
                      {locale === "ru" ? "КЛЮЧЕВЫЕ ФИКСАЦИИ ПО ШНК:" : "ASOSIY NATIJALAR:"}
                    </span>
                    <ul className="space-y-1.5">
                      {(locale === "ru" ? item.findingsRu : item.findingsUz || []).slice(0, 2).map((f, i) => (
                        <li key={i} className="text-xs text-[#1C1D1A]/80 flex items-start space-x-2">
                          <span className="text-[#9E7448] mt-0.5">•</span>
                          <span className="line-clamp-1">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Read case study CTA link */}
            <div className="px-6 sm:px-8 pb-6 pt-3 flex items-center justify-between text-xs font-mono tracking-[0.2em] uppercase text-[#1C1D1A] group-hover:text-[#9E7448] transition-colors border-t border-[#1C1D1A]/8">
              <span>{locale === "ru" ? "Изучить кейс" : "Keysni ko'rish"}</span>
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
