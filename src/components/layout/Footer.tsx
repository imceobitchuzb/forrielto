"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { ArrowUp, Instagram, Send, ShieldCheck, Mail, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#20211F] text-[#F5F2EC] pt-16 pb-12 border-t border-[#F5F2EC]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#F5F2EC]/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-[0.08em] block text-[#F5F2EC]">
                GONCHAROVA
              </span>
              <span className="font-mono text-[10px] tracking-[0.35em] text-[#A8794A] uppercase block">
                EXPERT · QUALITY ASSURANCE
              </span>
            </div>
            <p className="text-sm text-[#F5F2EC]/70 max-w-sm leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#F5F2EC]/60 pt-2">
              <MapPin className="w-4 h-4 text-[#A8794A]" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#A8794A] uppercase">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-sm text-[#F5F2EC]/80">
              <li>
                <Link
                  href="/apartment-inspection"
                  className="hover:text-[#A8794A] transition-colors"
                >
                  {t.nav.apartmentInspection}
                </Link>
              </li>
              <li>
                <Link
                  href="/renovation-supervision"
                  className="hover:text-[#A8794A] transition-colors"
                >
                  {t.nav.renovationSupervision}
                </Link>
              </li>
              <li>
                <Link
                  href="/turnkey-renovation"
                  className="hover:text-[#A8794A] transition-colors"
                >
                  {t.nav.turnkeyRenovation}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#A8794A] transition-colors text-xs text-[#A8794A]"
                >
                  Все услуги →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#A8794A] uppercase">
              {t.footer.navigationTitle}
            </h4>
            <ul className="space-y-2 text-sm text-[#F5F2EC]/80">
              <li>
                <Link href="/portfolio" className="hover:text-[#A8794A] transition-colors">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#A8794A] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#A8794A] transition-colors">
                  {t.nav.reviews}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#A8794A] transition-colors">
                  {t.nav.faq}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#A8794A] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Confirmed Contacts & Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#A8794A] uppercase">
              {t.footer.contactsTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F5F2EC]/80">
              <li>
                <a
                  href={siteConfig.telegramDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#A8794A] transition-colors"
                >
                  <Send className="w-4 h-4 text-[#A8794A]" />
                  <span>Личный TG: @Anna_040506</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.telegramChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#A8794A] transition-colors"
                >
                  <Send className="w-4 h-4 text-[#A8794A]" />
                  <span>Канал: @goncharovaexpert</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#A8794A] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#A8794A]" />
                  <span>Instagram: @goncharova.expert</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center space-x-2 hover:text-[#A8794A] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#A8794A]" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Legal note */}
        <div className="py-6 border-b border-[#F5F2EC]/10 text-xs text-[#F5F2EC]/50 leading-relaxed">
          <p>{t.footer.disclaimer}</p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F2EC]/60 gap-4">
          <div className="flex items-center space-x-4">
            <span>© {new Date().getFullYear()} GONCHAROVA.EXPERT. {t.footer.rights}</span>
            <Link
              href="/privacy"
              className="underline hover:text-[#A8794A] transition-colors"
            >
              {t.footer.privacy}
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 hover:text-[#A8794A] transition-colors focus:outline-none"
            aria-label="Наверх"
          >
            <span className="uppercase tracking-wider text-[11px]">Наверх</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
