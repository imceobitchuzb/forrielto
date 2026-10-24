"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { portfolioCases, ProjectCase } from "@/content/portfolio";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
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
    <div className="space-y-10">
      {/* Category filters */}
      {showFilter && (
        <div className="flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all",
                selectedCategory === cat.id
                  ? "bg-[#20211F] text-[#F5F2EC]"
                  : "bg-[#FAF8F5] text-[#77746D] hover:text-[#20211F] border border-[#20211F]/10"
              )}
            >
              {locale === "ru" ? cat.labelRu : cat.labelUz}
            </button>
          ))}
        </div>
      )}

      {/* Grid of cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayed.map((item) => (
          <Link
            key={item.slug}
            href={`/portfolio/${item.slug}`}
            className="group bg-[#FAF8F5] border border-[#20211F]/10 rounded-sm overflow-hidden hover:border-[#A8794A] transition-all duration-300 shadow-editorial hover:shadow-luxury flex flex-col justify-between"
          >
            <div>
              {/* Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE5DC]">
                <Image
                  src={item.coverImage}
                  alt={locale === "ru" ? item.titleRu : item.titleUz}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/70 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#20211F]/80 text-[#F5F2EC] px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-sm backdrop-blur-sm">
                  {locale === "ru" ? item.categoryLabelRu : item.categoryLabelUz}
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-3 left-4 text-xs font-serif text-[#F5F2EC] italic">
                  {locale === "ru" ? item.statusRu : item.statusUz}
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#20211F] group-hover:text-[#A8794A] transition-colors leading-snug">
                  {locale === "ru" ? item.titleRu : item.titleUz}
                </h3>
                <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed line-clamp-3">
                  {locale === "ru" ? item.descriptionRu : item.descriptionUz}
                </p>

                {item.findingsRu && (
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-[#A8794A] uppercase tracking-wider block mb-1">
                      {locale === "ru" ? "Ключевые фиксации:" : "Asosiy natijalar:"}
                    </span>
                    <ul className="space-y-1">
                      {(locale === "ru" ? item.findingsRu : item.findingsUz || []).slice(0, 2).map((f, i) => (
                        <li key={i} className="text-xs text-[#20211F]/80 flex items-start space-x-1.5">
                          <span className="text-[#A8794A] mt-0.5">•</span>
                          <span className="line-clamp-1">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Read case study CTA link */}
            <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between text-xs font-mono tracking-wider uppercase text-[#20211F] group-hover:text-[#A8794A] transition-colors border-t border-[#20211F]/5">
              <span>{locale === "ru" ? "Изучить кейс" : "Keysni o'rganish"}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
