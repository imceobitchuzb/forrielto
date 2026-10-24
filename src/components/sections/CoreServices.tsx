"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { FadeIn, ImageReveal } from "@/components/motion/MotionPrimitives";
import { ArrowUpRight } from "lucide-react";

export function CoreServices() {
  const { t, locale } = useLanguage();

  const services = [
    {
      num: "01",
      badge: t.services.s1.badge,
      title: t.services.s1.title,
      desc: t.services.s1.desc,
      benefit: t.services.s1.benefit,
      cta: t.services.s1.cta,
      href: t.services.s1.href,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      specs: [
        locale === "ru" ? "Лазерная нивелировка стен и перегородок" : "Devorlar lazer tekshiruvi",
        locale === "ru" ? "Тепловизионный аудит продувания стеклопакетов" : "Derazalarning teplovizor auditi",
        locale === "ru" ? "Официальный акт со ссылками на ШНК/КМК" : "ShNK/KMK bo'yicha rasmiy dalolatnoma",
      ],
    },
    {
      num: "02",
      badge: t.services.s2.badge,
      title: t.services.s2.title,
      desc: t.services.s2.desc,
      benefit: t.services.s2.benefit,
      cta: t.services.s2.cta,
      href: t.services.s2.href,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      specs: [
        locale === "ru" ? "Поэтапная приёмка скрытых инженерных работ" : "Yashirin ishlarni bosqichma-bosqich qabul qilish",
        locale === "ru" ? "Контроль гидроизоляции и уклонов сантехники" : "Gidroizolyatsiya va quvurlar nishabi nazorati",
        locale === "ru" ? "Фотоотчёты и предписания для стройбригады" : "Quruvchilar uchun foto-hisobotlar va ko'rsatmalar",
      ],
    },
    {
      num: "03",
      badge: t.services.s3.badge,
      title: t.services.s3.title,
      desc: t.services.s3.desc,
      benefit: t.services.s3.benefit,
      cta: t.services.s3.cta,
      href: t.services.s3.href,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      specs: [
        locale === "ru" ? "Фиксированная смета и график в договоре" : "Shartnomada qat'iy smeta va ish jadvali",
        locale === "ru" ? "Проверенные мастера узкой квалификации" : "Tor mutaxassislikka ega saralangan ustalar",
        locale === "ru" ? "Полный надзор эксперта на каждом этапе" : "Har bir bosqichda ekspertning shaxsiy nazorati",
      ],
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F6F3EC] border-b border-[#1C1D1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#1C1D1A]/10 gap-6">
            <div className="max-w-3xl">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E7448] uppercase block mb-2 font-semibold">
                {t.services.tag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1D1A] leading-[1.04]">
                {t.services.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6B64] mt-3 leading-relaxed max-w-xl">
                {t.services.subheadline}
              </p>
            </div>
            <div className="font-mono text-[10px] text-[#6E6B64] tracking-widest uppercase">
              THREE SPECIALIZED PILLARS
            </div>
          </div>
        </FadeIn>

        {/* 3 Asymmetrical Editorial Service Spreads */}
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual side (6 cols) */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="arch-img-frame aspect-[16/11] border border-[#1C1D1A]/15 shadow-xl group">
                      <ImageReveal delay={0.15}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                        />
                      </ImageReveal>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D1A]/70 via-transparent to-transparent pointer-events-none" />

                      {/* Architectural Index Tag */}
                      <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest bg-[#1C1D1A]/80 text-[#F6F3EC] px-3 py-1 uppercase backdrop-blur-sm border border-white/10 z-20">
                        SERVICE // {service.num}
                      </div>

                      <div className="absolute bottom-4 left-4 text-[10px] font-mono tracking-wider bg-[#9E7448] text-white px-2.5 py-0.5 uppercase z-20">
                        {service.badge}
                      </div>
                    </div>
                  </div>

                  {/* Content Side (6 cols) */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="space-y-2">
                      <span className="font-mono text-xs text-[#9E7448] tracking-widest uppercase block font-semibold">
                        НАПРАВЛЕНИЕ {service.num}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1D1A] leading-tight">
                        <Link href={service.href} className="hover:text-[#9E7448] transition-colors">
                          {service.title}
                        </Link>
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-[#6E6B64] leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Specific audit features */}
                    <div className="space-y-2 pt-2 border-t border-[#1C1D1A]/10">
                      {service.specs.map((spec, i) => (
                        <div key={i} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#1C1D1A]">
                          <span className="w-1.5 h-1.5 bg-[#9E7448]" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Benefit Callout */}
                    <div className="p-4 bg-[#FAF8F4] border-l-2 border-[#9E7448] border-r border-t border-b border-[#1C1D1A]/8">
                      <p className="text-xs sm:text-sm text-[#1C1D1A] font-medium leading-normal">
                        💡 {service.benefit}
                      </p>
                    </div>

                    {/* Call to Action with subtle spring */}
                    <div className="pt-2">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                        <Link
                          href={service.href}
                          className="inline-flex items-center space-x-3 px-6 py-3.5 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium transition-colors border border-[#1C1D1A] group"
                        >
                          <span>{service.cta}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
