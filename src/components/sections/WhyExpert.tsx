"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionPrimitives";
import { ArrowUpRight } from "lucide-react";

export function WhyExpert() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#1C1D1A] text-[#F6F3EC] relative overflow-hidden bg-grain-dark border-b border-[#F6F3EC]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-white/10 gap-6">
            <div className="max-w-3xl">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#B88E5E] uppercase block mb-2 font-semibold">
                {t.whyExpert.tag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F6F3EC] leading-[1.06]">
                {t.whyExpert.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#F6F3EC]/70 mt-3 leading-relaxed max-w-xl">
                {t.whyExpert.subheadline}
              </p>
            </div>
            <div className="font-mono text-[10px] text-[#F6F3EC]/50 tracking-widest uppercase">
              STRUCTURAL VULNERABILITY AUDIT
            </div>
          </div>
        </FadeIn>

        {/* 6 Engineering Vulnerability Panels in Staggered Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyExpert.items.map((item, idx) => (
            <StaggerItem
              key={idx}
              className="bg-[#242522] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#9E7448] transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-mono text-[11px] text-[#B88E5E] tracking-widest font-semibold">
                    RISK PROTOCOL 0{idx + 1}
                  </span>
                  <span className="font-mono text-[9px] text-white/40 uppercase">
                    ШНК / КМК
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F6F3EC] group-hover:text-[#B88E5E] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#F6F3EC]/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase text-[#B88E5E] tracking-wider">
                <span>Устранение за счёт застройщика</span>
                <span>→</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Technical Callout Bar */}
        <FadeIn delay={0.2}>
          <div className="mt-12 p-8 bg-[#242522] border-l-2 border-[#9E7448] border-r border-t border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-serif text-xl font-normal text-[#F6F3EC]">
                Закон на стороне покупателя только до момента подписания приёмочного акта
              </h4>
              <p className="text-xs sm:text-sm text-[#F6F3EC]/65 max-w-2xl leading-relaxed">
                После подписания документов доказать вину строителей или застройщика в скрытых повреждениях практически невозможно. Инструментальный осмотр позволяет аргументированно обязать застройщика выполнить гарантийные обязательства.
              </p>
            </div>
            <Link
              href="/apartment-inspection"
              className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-3.5 bg-[#9E7448] hover:bg-[#7A5630] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              <span>Как проходит осмотр</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
