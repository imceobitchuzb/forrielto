"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/config";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Send, Calendar } from "lucide-react";

export function StickyMobileCTA() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling 300px down, stay visible for easy consultation access
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 p-2.5 sm:p-3 bg-[#F6F3EC]/95 backdrop-blur-md border-t border-[#1C1D1A]/10 lg:hidden shadow-2xl pb-safe"
          style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom, 12px))" }}
        >
          <div className="flex items-center space-x-2 max-w-md mx-auto">
            <a
              href={siteConfig.telegramDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[46px] flex items-center justify-center space-x-1.5 py-3 px-3 bg-[#1C1D1A] text-[#F6F3EC] text-xs font-mono tracking-wider uppercase border border-[#1C1D1A] active:scale-[0.98] transition-transform"
            >
              <Send className="w-3.5 h-3.5 text-[#B88E5E]" />
              <span>Telegram</span>
            </a>

            <Link
              href="/contact"
              className="flex-1 min-h-[46px] flex items-center justify-center space-x-1.5 py-3 px-3 bg-[#9E7448] text-white text-xs font-mono tracking-wider uppercase active:scale-[0.98] transition-transform"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.bookConsultation}</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
