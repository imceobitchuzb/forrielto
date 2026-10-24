"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Shield, Wrench, FileCheck, CheckCircle2 } from "lucide-react";

export function TrustBar() {
  const { t } = useLanguage();

  const points = [
    {
      icon: Shield,
      title: t.trust.point1Title,
      desc: t.trust.point1Desc,
    },
    {
      icon: Wrench,
      title: t.trust.point2Title,
      desc: t.trust.point2Desc,
    },
    {
      icon: FileCheck,
      title: t.trust.point3Title,
      desc: t.trust.point3Desc,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#EAE5DC]/60 border-b border-[#20211F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
            {t.trust.label}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#20211F] mt-2 leading-tight">
            {t.trust.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-[#20211F]/10 p-6 sm:p-8 rounded-sm hover:border-[#A8794A]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-sm bg-[#20211F] text-[#F5F2EC] group-hover:bg-[#A8794A] flex items-center justify-center transition-colors mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#20211F] mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
