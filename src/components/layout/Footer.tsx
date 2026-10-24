"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { ArrowUp, Instagram, Send, Mail, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1C1D1A] text-[#F6F3EC] pt-20 pb-12 border-t border-white/10 bg-grain-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.14em] block text-[#F6F3EC] uppercase">
                Goncharova
              </span>
              <span className="font-mono text-[9px] tracking-[0.35em] text-[#B88E5E] uppercase block mt-1">
                Quality Assurance · Tashkent
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#F6F3EC]/70 max-w-sm leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#F6F3EC]/60 pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#B88E5E]" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono tracking-[0.25em] text-[#B88E5E] uppercase">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs text-[#F6F3EC]/80 font-sans">
              <li>
                <Link
                  href="/apartment-inspection"
                  className="hover:text-[#B88E5E] transition-colors"
                >
                  {t.nav.apartmentInspection}
                </Link>
              </li>
              <li>
                <Link
                  href="/renovation-supervision"
                  className="hover:text-[#B88E5E] transition-colors"
                >
                  {t.nav.renovationSupervision}
                </Link>
              </li>
              <li>
                <Link
                  href="/turnkey-renovation"
                  className="hover:text-[#B88E5E] transition-colors"
                >
                  {t.nav.turnkeyRenovation}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#B88E5E] transition-colors text-[11px] font-mono text-[#B88E5E] block pt-1"
                >
                  Все услуги →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono tracking-[0.25em] text-[#B88E5E] uppercase">
              {t.footer.navigationTitle}
            </h4>
            <ul className="space-y-2 text-xs text-[#F6F3EC]/80 font-sans">
              <li>
                <Link href="/portfolio" className="hover:text-[#B88E5E] transition-colors">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B88E5E] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#B88E5E] transition-colors">
                  {t.nav.reviews}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#B88E5E] transition-colors">
                  {t.nav.faq}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B88E5E] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono tracking-[0.25em] text-[#B88E5E] uppercase">
              {t.footer.contactsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F6F3EC]/80 font-mono">
              <li>
                <a
                  href={siteConfig.telegramDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#B88E5E] transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-[#B88E5E]" />
                  <span>TG: @Anna_040506</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.telegramChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#B88E5E] transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-[#B88E5E]" />
                  <span>Канал: @goncharovaexpert</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#B88E5E] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#B88E5E]" />
                  <span>@goncharova.expert</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center space-x-2 hover:text-[#B88E5E] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B88E5E]" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Legal note */}
        <div className="py-6 border-b border-white/10 text-[11px] text-[#F6F3EC]/50 leading-relaxed font-sans">
          <p>{t.footer.disclaimer}</p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#F6F3EC]/60 gap-4">
          <div className="flex items-center space-x-4">
            <span>© {new Date().getFullYear()} GONCHAROVA.EXPERT. {t.footer.rights}</span>
            <Link
              href="/privacy"
              className="underline hover:text-[#B88E5E] transition-colors"
            >
              {t.footer.privacy}
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 hover:text-[#B88E5E] transition-colors focus:outline-none"
            aria-label="Наверх"
          >
            <span className="uppercase tracking-[0.2em] text-[10px]">Наверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
