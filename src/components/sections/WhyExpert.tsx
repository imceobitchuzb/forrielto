"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { AlertTriangle, Compass, ShieldAlert, CheckCircle } from "lucide-react";

export function WhyExpert() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#20211F] text-[#F5F2EC] relative overflow-hidden">
      {/* Decorative technical grid background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#F5F2EC_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
            {t.whyExpert.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F2EC] mt-2 leading-[1.08]">
            {t.whyExpert.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#F5F2EC]/70 mt-3 leading-relaxed">
            {t.whyExpert.subheadline}
          </p>
        </div>

        {/* 6 Problem / Risk Panels in an editorial dark grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyExpert.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2A2B28] border border-white/10 p-6 sm:p-8 rounded-sm hover:border-[#A8794A] transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#A8794A] tracking-widest">
                  РИСК № 0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#A8794A]/60" />
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5F2EC] mb-2.5 group-hover:text-[#A8794A] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#F5F2EC]/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Callout banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#2A2B28]/90 border-l-4 border-[#A8794A] rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#F5F2EC]">
              После подписания акта застройщик снимает с себя большинство обязательств
            </h4>
            <p className="text-xs sm:text-sm text-[#F5F2EC]/70 mt-1 max-w-2xl">
              Закон на стороне покупателя только до момента приёмки. Инструментальный осмотр позволяет официально зафиксировать все недочеты и обязать застройщика устранить их.
            </p>
          </div>
          <a
            href="/apartment-inspection"
            className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-3 bg-[#A8794A] hover:bg-[#8F6238] text-white text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
          >
            <span>Как проходит осмотр</span>
          </a>
        </div>
      </div>
    </section>
  );
}
