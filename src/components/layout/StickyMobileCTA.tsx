"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/config";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Send, Calendar } from "lucide-react";

export function StickyMobileCTA() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling 400px down
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#F5F2EC]/95 backdrop-blur-md border-t border-[#20211F]/10 lg:hidden shadow-lg animate-slideUp">
      <div className="flex items-center space-x-2">
        <a
          href={siteConfig.telegramDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-[#20211F] text-[#F5F2EC] rounded-sm text-xs font-medium tracking-wide uppercase"
        >
          <Send className="w-3.5 h-3.5 text-[#A8794A]" />
          <span>Telegram</span>
        </a>

        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 bg-[#A8794A] text-white rounded-sm text-xs font-medium tracking-wide uppercase"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.nav.bookConsultation}</span>
        </Link>
      </div>
    </div>
  );
}
