"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
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
        { name: t.nav.apartmentInspection, href: "/apartment-inspection" },
        { name: t.nav.renovationSupervision, href: "/renovation-supervision" },
        { name: t.nav.turnkeyRenovation, href: "/turnkey-renovation" },
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#F5F2EC]/90 backdrop-blur-md shadow-sm border-b border-[#20211F]/10 py-3.5"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark Logo */}
            <Link
              href="/"
              className="group flex flex-col tracking-tight"
            >
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.08em] text-[#20211F] group-hover:text-[#A8794A] transition-colors leading-tight">
                GONCHAROVA
              </span>
              <span className="font-mono text-[9px] tracking-[0.35em] text-[#77746D] uppercase">
                EXPERT · TASHKENT
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 text-[13px] tracking-wide uppercase font-medium text-[#20211F]/80">
              {navLinks.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-1 py-1 hover:text-[#A8794A] transition-colors",
                        pathname.startsWith("/services") ||
                          pathname.startsWith("/apartment") ||
                          pathname.startsWith("/renovation") ||
                          pathname.startsWith("/turnkey")
                          ? "text-[#A8794A] font-semibold"
                          : ""
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </Link>

                    {/* Services Dropdown */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-64 pt-2 shadow-editorial">
                        <div className="bg-[#FAF8F5] border border-[#20211F]/10 rounded-sm p-2 flex flex-col space-y-1">
                          {item.subItems?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={cn(
                                "px-3 py-2 text-xs normal-case tracking-normal rounded-sm transition-colors",
                                pathname === sub.href
                                  ? "bg-[#20211F] text-[#F5F2EC]"
                                  : "text-[#20211F] hover:bg-[#EAE5DC]"
                              )}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "py-1 hover:text-[#A8794A] transition-colors relative",
                      pathname === item.href
                        ? "text-[#A8794A] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#A8794A]"
                        : ""
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Right actions: Language toggle, direct Telegram, and CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center border border-[#20211F]/15 rounded-full p-0.5 text-xs font-mono">
                <button
                  onClick={() => setLocale("ru")}
                  className={cn(
                    "px-2.5 py-0.5 rounded-full transition-all",
                    locale === "ru"
                      ? "bg-[#20211F] text-[#F5F2EC]"
                      : "text-[#77746D] hover:text-[#20211F]"
                  )}
                >
                  RU
                </button>
                <button
                  onClick={() => setLocale("uz")}
                  className={cn(
                    "px-2.5 py-0.5 rounded-full transition-all",
                    locale === "uz"
                      ? "bg-[#20211F] text-[#F5F2EC]"
                      : "text-[#77746D] hover:text-[#20211F]"
                  )}
                >
                  UZ
                </button>
              </div>

              {/* Direct Telegram link */}
              <a
                href={siteConfig.telegramDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Написать Анне в Telegram"
                className="flex items-center space-x-1.5 text-xs text-[#20211F]/80 hover:text-[#A8794A] transition-colors border-b border-transparent hover:border-[#A8794A]"
              >
                <Send className="w-3.5 h-3.5 text-[#A8794A]" />
                <span className="font-mono text-[11px]">@Anna_040506</span>
              </a>

              {/* Consultation Button */}
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs uppercase tracking-wider font-medium rounded-sm transition-all duration-300"
              >
                <span>{t.nav.bookConsultation}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions: Language + Hamburger */}
            <div className="flex lg:hidden items-center space-x-3">
              <div className="flex items-center border border-[#20211F]/15 rounded-full p-0.5 text-[11px] font-mono">
                <button
                  onClick={() => setLocale("ru")}
                  className={cn(
                    "px-2 py-0.5 rounded-full transition-all",
                    locale === "ru"
                      ? "bg-[#20211F] text-[#F5F2EC]"
                      : "text-[#77746D]"
                  )}
                >
                  RU
                </button>
                <button
                  onClick={() => setLocale("uz")}
                  className={cn(
                    "px-2 py-0.5 rounded-full transition-all",
                    locale === "uz"
                      ? "bg-[#20211F] text-[#F5F2EC]"
                      : "text-[#77746D]"
                  )}
                >
                  UZ
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#20211F] hover:text-[#A8794A] transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F5F2EC] pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto lg:hidden animate-fadeIn">
          <div className="space-y-4">
            <p className="text-[10px] font-mono tracking-widest text-[#77746D] uppercase">
              Меню · Навигация
            </p>
            <div className="flex flex-col space-y-3 divide-y divide-[#20211F]/10">
              <Link
                href="/services"
                className="text-lg font-serif font-medium text-[#20211F] pt-2"
              >
                {t.nav.services}
              </Link>
              <div className="pl-4 flex flex-col space-y-2 pt-2 text-sm text-[#77746D]">
                <Link href="/apartment-inspection">
                  — {t.nav.apartmentInspection}
                </Link>
                <Link href="/renovation-supervision">
                  — {t.nav.renovationSupervision}
                </Link>
                <Link href="/turnkey-renovation">
                  — {t.nav.turnkeyRenovation}
                </Link>
              </div>

              <Link
                href="/portfolio"
                className="text-lg font-serif font-medium text-[#20211F] pt-3"
              >
                {t.nav.portfolio}
              </Link>
              <Link
                href="/about"
                className="text-lg font-serif font-medium text-[#20211F] pt-3"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/reviews"
                className="text-lg font-serif font-medium text-[#20211F] pt-3"
              >
                {t.nav.reviews}
              </Link>
              <Link
                href="/faq"
                className="text-lg font-serif font-medium text-[#20211F] pt-3"
              >
                {t.nav.faq}
              </Link>
              <Link
                href="/contact"
                className="text-lg font-serif font-medium text-[#20211F] pt-3"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-[#20211F]/10 space-y-3">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center space-x-2 py-3 bg-[#20211F] text-[#F5F2EC] text-sm uppercase tracking-wider font-medium rounded-sm"
            >
              <span>{t.nav.bookConsultation}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.telegramDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 border border-[#20211F]/20 text-[#20211F] text-sm uppercase tracking-wider rounded-sm font-medium"
            >
              <Send className="w-4 h-4 text-[#A8794A]" />
              <span>Telegram: @Anna_040506</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
