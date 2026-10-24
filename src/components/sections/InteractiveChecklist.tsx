"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { inspectionChecklist } from "@/content/checklist";
import { CheckSquare, Square } from "lucide-react";
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
    <div className="bg-[#FAF8F4] border border-[#1C1D1A]/12 p-5 sm:p-8 md:p-10 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-6 border-b border-[#1C1D1A]/10 gap-4">
        <div className="max-w-2xl">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-1 font-semibold">
            {locale === "ru" ? "ПРОТОКОЛ ПРИЁМКИ" : "QABUL PROTOKOLI"}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1D1A]">
            {locale === "ru"
              ? "Что обязательно проверяется перед подписанием акта"
              : "Dalolatnoma imzolashdan oldin nimalar tekshiriladi"}
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6B64] mt-2">
            {locale === "ru"
              ? "Интерактивный перечень критических узлов. Отметьте параметры, чтобы оценить важность инструментального контроля."
              : "Muhim tugunlarning interaktiv ro'yxati. Instrumental nazorat muhimligini baholang."}
          </p>
        </div>
        <div className="font-mono text-[10px] text-[#6E6B64] uppercase tracking-widest">
          STANDARDS // ШНК & КМК
        </div>
      </div>

      {/* Category Tabs with horizontal scroll on mobile */}
      <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 pb-4 -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap border-b border-[#1C1D1A]/10">
        {inspectionChecklist.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "flex-shrink-0 min-h-[44px] px-4 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-all touch-manipulation",
              activeCategory === cat.id
                ? "bg-[#1C1D1A] text-[#F6F3EC]"
                : "bg-white text-[#6E6B64] hover:text-[#1C1D1A] border border-[#1C1D1A]/12"
            )}
          >
            {locale === "ru" ? cat.titleRu : cat.titleUz}
          </button>
        ))}
      </div>

      {/* Checklist items in active category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 pt-6">
        {(locale === "ru" ? currentCategory.itemsRu : currentCategory.itemsUz).map((item, idx) => {
          const itemKey = `${currentCategory.id}-${idx}`;
          const isChecked = !!checkedItems[itemKey];

          return (
            <div
              key={idx}
              onClick={() => toggleCheck(itemKey)}
              className={cn(
                "p-4 sm:p-5 border cursor-pointer transition-all duration-200 select-none touch-manipulation min-h-[56px] flex flex-col justify-center",
                isChecked
                  ? "bg-[#EBE6DC]/80 border-[#9E7448]"
                  : "bg-white border-[#1C1D1A]/10 hover:border-[#9E7448]/50 active:scale-[0.99]"
              )}
            >
              <div className="flex items-start space-x-3.5">
                <div className="mt-0.5 text-[#9E7448] flex-shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-[#9E7448]" />
                  ) : (
                    <Square className="w-4 h-4 text-[#6E6B64]/50" />
                  )}
                </div>
                <div className="space-y-1">
                  <h4
                    className={cn(
                      "text-sm font-medium transition-colors font-serif",
                      isChecked ? "text-[#1C1D1A] line-through opacity-60" : "text-[#1C1D1A]"
                    )}
                  >
                    {item.label}
                  </h4>
                  <p className="text-xs text-[#6E6B64] leading-relaxed">
                    <span className="text-[#9E7448] font-mono text-[10px] uppercase tracking-wider block">
                      {locale === "ru" ? "Риск без проверки: " : "Tekshiruvsiz xavf: "}
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
      <div className="mt-8 pt-6 border-t border-[#1C1D1A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
        <p className="text-[#6E6B64] text-[11px] leading-relaxed">
          {locale === "ru"
            ? "⚠️ Визуальный осмотр не выявляет пустоты в стяжке и продувание рам. Необходима аппаратная диагностика."
            : "⚠️ Oddiy ko'z bilan ko'rik yashirin nuqsonlarni aniqlamaydi. Apparat diagnostikasi zarur."}
        </p>
        <a
          href="/contact"
          className="flex-shrink-0 min-h-[44px] inline-flex items-center text-[#1C1D1A] hover:text-[#9E7448] transition-colors uppercase tracking-[0.2em] font-semibold border-b border-[#1C1D1A] pb-0.5"
        >
          {locale === "ru" ? "Заказать аудит →" : "Audit buyurtma qilish →"}
        </a>
      </div>
    </div>
  );
}
