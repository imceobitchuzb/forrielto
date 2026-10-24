"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/MotionPrimitives";
import { Shield, Wrench, FileCheck } from "lucide-react";

export function TrustBar() {
  const { t } = useLanguage();

  const points = [
    {
      index: "01",
      icon: Shield,
      title: t.trust.point1Title,
      desc: t.trust.point1Desc,
      standard: "ШОСТ / КМК СТАНДАРТ",
    },
    {
      index: "02",
      icon: Wrench,
      title: t.trust.point2Title,
      desc: t.trust.point2Desc,
      standard: "ПОВЕРЕННЫЙ ИНСТРУМЕНТ",
    },
    {
      index: "03",
      icon: FileCheck,
      title: t.trust.point3Title,
      desc: t.trust.point3Desc,
      standard: "ЮРИДИЧЕСКАЯ СИЛА АКТА",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#EBE6DC]/40 border-b border-[#1C1D1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#1C1D1A]/10 gap-4">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2">
                {t.trust.label}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#1C1D1A] leading-snug">
                {t.trust.headline}
              </h2>
            </div>
            <div className="font-mono text-[10px] text-[#6E6B64] tracking-widest uppercase">
              AUDIT & VERIFICATION STANDARDS
            </div>
          </div>
        </FadeIn>

        {/* 3 Columns with Staggered Entrance */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1C1D1A]/10 border-t md:border-t-0 border-b border-[#1C1D1A]/10">
          {points.map((point, idx) => (
            <StaggerItem
              key={idx}
              className="py-8 md:py-4 px-0 md:px-8 first:pl-0 last:pr-0 space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#9E7448] tracking-widest font-semibold">
                  № {point.index}
                </span>
                <span className="font-mono text-[9px] text-[#6E6B64] tracking-wider uppercase">
                  {point.standard}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1D1A] group-hover:text-[#9E7448] transition-colors leading-snug">
                {point.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#6E6B64] leading-relaxed">
                {point.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
