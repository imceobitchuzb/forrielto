"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function CoreServices() {
  const { t } = useLanguage();

  const services = [
    {
      num: t.services.s1.num,
      badge: t.services.s1.badge,
      title: t.services.s1.title,
      desc: t.services.s1.desc,
      benefit: t.services.s1.benefit,
      cta: t.services.s1.cta,
      href: t.services.s1.href,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    },
    {
      num: t.services.s2.num,
      badge: t.services.s2.badge,
      title: t.services.s2.title,
      desc: t.services.s2.desc,
      benefit: t.services.s2.benefit,
      cta: t.services.s2.cta,
      href: t.services.s2.href,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    },
    {
      num: t.services.s3.num,
      badge: t.services.s3.badge,
      title: t.services.s3.title,
      desc: t.services.s3.desc,
      benefit: t.services.s3.benefit,
      cta: t.services.s3.cta,
      href: t.services.s3.href,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5F2EC] border-b border-[#20211F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
            {t.services.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20211F] mt-2 leading-[1.05]">
            {t.services.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#77746D] mt-3 leading-relaxed">
            {t.services.subheadline}
          </p>
        </div>

        {/* 3 Editorial Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#FAF8F5] border border-[#20211F]/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#A8794A] transition-all duration-300 shadow-editorial hover:shadow-luxury"
            >
              <div>
                {/* Image Container with zoom hover effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE5DC]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20211F]/60 via-transparent to-transparent" />
                  
                  {/* Service Number Watermark */}
                  <div className="absolute top-4 left-4 font-mono text-xs tracking-widest bg-[#20211F]/80 text-[#F5F2EC] px-2.5 py-1 rounded-sm uppercase">
                    № {service.num}
                  </div>

                  {/* Badge */}
                  <div className="absolute bottom-3 left-4 text-[10px] font-mono tracking-wider bg-[#A8794A] text-white px-2 py-0.5 rounded-sm uppercase">
                    {service.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#20211F] group-hover:text-[#A8794A] transition-colors leading-tight">
                    <Link href={service.href}>{service.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#77746D] leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="p-3 bg-[#EAE5DC]/60 rounded-sm border-l-2 border-[#A8794A]">
                    <p className="text-[11px] sm:text-xs text-[#20211F] font-medium leading-normal">
                      💡 {service.benefit}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="p-6 sm:p-8 pt-0">
                <Link
                  href={service.href}
                  className="w-full flex items-center justify-between px-5 py-3.5 bg-[#20211F] group-hover:bg-[#A8794A] text-[#F5F2EC] text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-300"
                >
                  <span>{service.cta}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
