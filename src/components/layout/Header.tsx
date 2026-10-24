"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { Menu, X, ArrowUpRight, Send, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const navLinks = [
    {
      name: t.nav.services,
      href: "/services",
      hasDropdown: true,
      subItems: [
        { name: t.nav.apartmentInspection, href: "/apartment-inspection", index: "01" },
        { name: t.nav.renovationSupervision, href: "/renovation-supervision", index: "02" },
        { name: t.nav.turnkeyRenovation, href: "/turnkey-renovation", index: "03" },
      ],
    },
    { name: t.nav.portfolio, href: "/portfolio" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.reviews, href: "/reviews" },
    { name: t.nav.faq, href: "/faq" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#F6F3EC]/94 backdrop-blur-md border-b border-[#1C1D1A]/10 py-3.5 shadow-sm"
            : "bg-transparent py-6 border-b border-[#1C1D1A]/5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Architectural Wordmark Logo */}
            <Link href="/" className="group flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.14em] text-[#1C1D1A] group-hover:text-[#9E7448] transition-colors leading-none uppercase">
                Goncharova
              </span>
              <div className="flex items-center space-x-1.5 mt-1 font-mono text-[9px] tracking-[0.3em] text-[#6E6B64] uppercase">
                <span>Expert</span>
                <span className="text-[#9E7448]">•</span>
                <span>Tashkent</span>
              </div>
            </Link>

            {/* Desktop Navigation with Animated Underline */}
            <nav
              onMouseLeave={() => setHoveredNav(null)}
              className="hidden lg:flex items-center space-x-8 text-[12px] tracking-[0.16em] uppercase font-sans font-medium text-[#1C1D1A]/85"
            >
              {navLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href) ||
                      (item.hasDropdown &&
                        (pathname.startsWith("/apartment") ||
                          pathname.startsWith("/renovation") ||
                          pathname.startsWith("/turnkey")));

                return item.hasDropdown ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => {
                      setServicesDropdown(true);
                      setHoveredNav(item.href);
                    }}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-1 py-1 transition-colors relative group",
                        isActive ? "text-[#9E7448] font-semibold" : "hover:text-[#9E7448]"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 opacity-50 transition-transform duration-300",
                          servicesDropdown ? "rotate-180" : ""
                        )}
                      />
                      {(isActive || hoveredNav === item.href) && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E7448]"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                        />
                      )}
                    </Link>

                    {/* Architectural Dropdown with Smooth Animation */}
                    <AnimatePresence>
                      {servicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full -left-4 w-72 pt-3"
                        >
                          <div className="bg-[#FAF8F4] border border-[#1C1D1A]/12 shadow-2xl p-3 flex flex-col space-y-1">
                            <div className="px-3 py-1 text-[9px] font-mono tracking-widest text-[#9E7448] uppercase border-b border-[#1C1D1A]/8 pb-1.5 mb-1">
                              Направления экспертизы
                            </div>
                            {item.subItems?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={cn(
                                  "flex items-center justify-between px-3 py-2 text-xs normal-case tracking-normal transition-colors rounded-none",
                                  pathname === sub.href
                                    ? "bg-[#1C1D1A] text-[#F6F3EC]"
                                    : "text-[#1C1D1A] hover:bg-[#EBE6DC]"
                                )}
                              >
                                <span className="font-serif font-medium">{sub.name}</span>
                                <span className="font-mono text-[10px] opacity-60">
                                  № {sub.index}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredNav(item.href)}
                    className={cn(
                      "py-1 transition-colors relative",
                      isActive ? "text-[#9E7448] font-semibold" : "hover:text-[#9E7448]"
                    )}
                  >
                    <span>{item.name}</span>
                    {(isActive || hoveredNav === item.href) && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E7448]"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 text-[11px] font-mono tracking-wider">
                <button
                  onClick={() => setLocale("ru")}
                  className={cn(
                    "transition-colors",
                    locale === "ru"
                      ? "text-[#1C1D1A] font-bold border-b border-[#9E7448]"
                      : "text-[#6E6B64] hover:text-[#1C1D1A]"
                  )}
                >
                  RU
                </button>
                <span className="text-[#1C1D1A]/20">/</span>
                <button
                  onClick={() => setLocale("uz")}
                  className={cn(
                    "transition-colors",
                    locale === "uz"
                      ? "text-[#1C1D1A] font-bold border-b border-[#9E7448]"
                      : "text-[#6E6B64] hover:text-[#1C1D1A]"
                  )}
                >
                  UZ
                </button>
              </div>

              {/* Telegram direct contact */}
              <a
                href={siteConfig.telegramDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Написать напрямую Анне в Telegram"
                className="flex items-center space-x-1.5 text-xs text-[#1C1D1A]/80 hover:text-[#9E7448] transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#9E7448]" />
                <span className="font-mono text-[11px]">@Anna_040506</span>
              </a>

              {/* Consultation Button with subtle hover spring */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#1C1D1A] hover:bg-[#9E7448] text-[#F6F3EC] text-[11px] uppercase tracking-[0.2em] font-medium transition-colors border border-[#1C1D1A]"
                >
                  <span>{t.nav.bookConsultation}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Actions: Language + Hamburger */}
            <div className="flex lg:hidden items-center space-x-4">
              <div className="flex items-center space-x-1 text-[11px] font-mono">
                <button
                  onClick={() => setLocale("ru")}
                  className={cn(
                    "px-1.5 py-0.5",
                    locale === "ru" ? "text-[#1C1D1A] font-bold" : "text-[#6E6B64]"
                  )}
                >
                  RU
                </button>
                <span>/</span>
                <button
                  onClick={() => setLocale("uz")}
                  className={cn(
                    "px-1.5 py-0.5",
                    locale === "uz" ? "text-[#1C1D1A] font-bold" : "text-[#6E6B64]"
                  )}
                >
                  UZ
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1C1D1A] hover:text-[#9E7448] transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F6F3EC] pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#1C1D1A]/10 pb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#9E7448] uppercase">
                  Навигация по разделам
                </span>
                <span className="text-[10px] font-mono text-[#6E6B64]">ТАШКЕНТ</span>
              </div>

              <div className="flex flex-col space-y-4 text-left">
                <Link
                  href="/services"
                  className="text-2xl font-serif font-normal text-[#1C1D1A]"
                >
                  {t.nav.services}
                </Link>
                <div className="pl-4 flex flex-col space-y-2.5 text-xs font-mono text-[#6E6B64] border-l border-[#9E7448]/40">
                  <Link href="/apartment-inspection">01. {t.nav.apartmentInspection}</Link>
                  <Link href="/renovation-supervision">02. {t.nav.renovationSupervision}</Link>
                  <Link href="/turnkey-renovation">03. {t.nav.turnkeyRenovation}</Link>
                </div>

                <Link href="/portfolio" className="text-2xl font-serif font-normal text-[#1C1D1A]">
                  {t.nav.portfolio}
                </Link>
                <Link href="/about" className="text-2xl font-serif font-normal text-[#1C1D1A]">
                  {t.nav.about}
                </Link>
                <Link href="/reviews" className="text-2xl font-serif font-normal text-[#1C1D1A]">
                  {t.nav.reviews}
                </Link>
                <Link href="/faq" className="text-2xl font-serif font-normal text-[#1C1D1A]">
                  {t.nav.faq}
                </Link>
                <Link href="/contact" className="text-2xl font-serif font-normal text-[#1C1D1A]">
                  {t.nav.contact}
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-[#1C1D1A]/10 space-y-3">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center space-x-2 py-3.5 bg-[#1C1D1A] text-[#F6F3EC] text-xs uppercase tracking-widest font-medium"
              >
                <span>{t.nav.bookConsultation}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.telegramDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 border border-[#1C1D1A]/20 text-[#1C1D1A] text-xs uppercase tracking-widest font-medium"
              >
                <Send className="w-4 h-4 text-[#9E7448]" />
                <span>Telegram: @Anna_040506</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
