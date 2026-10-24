"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { inspectionChecklist, ChecklistCategory } from "@/content/checklist";
import { CheckSquare, Square, AlertCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function InteractiveChecklist() {
  const { locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(inspectionChecklist[0].id);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentCategory = inspectionChecklist.find((c) => c.id === activeCategory) || inspectionChecklist[0];

  return (
    <div className="bg-[#FAF8F5] border border-[#20211F]/10 rounded-sm p-6 sm:p-10 shadow-editorial">
      <div className="max-w-2xl mb-8">
        <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
          {locale === "ru" ? "Интерактивный чек-лист" : "Interaktiv tekshiruv ro'yxati"}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#20211F] mt-1.5 leading-snug">
          {locale === "ru" ? "Что необходимо проверить перед подписанием акта" : "Dalolatnomani imzolashdan oldin nimalarni tekshirish kerak"}
        </h3>
        <p className="text-xs sm:text-sm text-[#77746D] mt-2">
          {locale === "ru"
            ? "Переключайтесь между разделами и отмечайте пункты. Экспертная приёмка охватывает все эти параметры инструментально."
            : "Bo'limlar o'rtasida o'ting va bandlarni belgilang. Ekspert ko'rigi barcha parametrlarni instrumental tekshiradi."}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-[#20211F]/10">
        {inspectionChecklist.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "px-4 py-2 text-xs font-semibold rounded-sm transition-all",
              activeCategory === cat.id
                ? "bg-[#20211F] text-[#F5F2EC]"
                : "bg-white text-[#77746D] hover:text-[#20211F] border border-[#20211F]/10"
            )}
          >
            {locale === "ru" ? cat.titleRu : cat.titleUz}
          </button>
        ))}
      </div>

      {/* Checklist items in active category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
        {(locale === "ru" ? currentCategory.itemsRu : currentCategory.itemsUz).map((item, idx) => {
          const itemKey = `${currentCategory.id}-${idx}`;
          const isChecked = !!checkedItems[itemKey];

          return (
            <div
              key={idx}
              onClick={() => toggleCheck(itemKey)}
              className={cn(
                "p-4 sm:p-5 rounded-sm border cursor-pointer transition-all duration-200 select-none",
                isChecked
                  ? "bg-[#EAE5DC]/80 border-[#A8794A]"
                  : "bg-white border-[#20211F]/10 hover:border-[#20211F]/30"
              )}
            >
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 text-[#A8794A] flex-shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-[#A8794A]" />
                  ) : (
                    <Square className="w-5 h-5 text-[#77746D]/60" />
                  )}
                </div>
                <div className="space-y-1">
                  <h4
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      isChecked ? "text-[#20211F] line-through opacity-70" : "text-[#20211F]"
                    )}
                  >
                    {item.label}
                  </h4>
                  <p className="text-xs text-[#77746D] leading-relaxed">
                    <span className="text-[#A8794A] font-medium">
                      {locale === "ru" ? "Риск: " : "Xavf: "}
                    </span>
                    {item.risk}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Advice */}
      <div className="mt-8 pt-6 border-t border-[#20211F]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-[#77746D]">
          {locale === "ru"
            ? "⚠️ Визуального осмотра недостаточно: скрытые дефекты определяются тепловизором, нивелиром и тестерами."
            : "⚠️ Oddiy ko'z bilan ko'rik yetarli emas: yashirin nuqsonlar teplovizor va lazer asboblari orqali aniqlanadi."}
        </p>
        <a
          href="/contact"
          className="flex-shrink-0 inline-flex items-center space-x-1.5 text-xs font-semibold text-[#20211F] hover:text-[#A8794A] transition-colors uppercase tracking-wider font-mono"
        >
          <span>{locale === "ru" ? "Заказать инструментальный аудит →" : "Instrumental audit buyurtma qilish →"}</span>
        </a>
      </div>
    </div>
  );
}
