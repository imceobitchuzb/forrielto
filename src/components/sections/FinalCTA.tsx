"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { LeadForm } from "./LeadForm";
import { Send, Instagram, Clock } from "lucide-react";

export function FinalCTA() {
  const { t, locale } = useLanguage();

  return (
    <section className="py-20 sm:py-32 bg-[#1C1D1A] text-[#F6F3EC] relative overflow-hidden bg-grain-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Side: Editorial Pitch & Direct Messengers (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#B88E5E] uppercase block mb-2 font-semibold">
                {t.contact.tag}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F6F3EC] leading-[1.06]">
                {t.contact.headline}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#F6F3EC]/70 leading-relaxed">
              {t.contact.subheadline}
            </p>

            {/* Direct Connect Options */}
            <div className="pt-2 space-y-3.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B88E5E] block font-medium">
                {t.contact.directConnect}
              </span>

              <div className="flex flex-col space-y-2.5">
                <a
                  href={siteConfig.telegramDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3.5 sm:p-4 bg-[#242522] hover:bg-[#2C2D2A] border border-white/10 transition-colors group min-h-[50px] touch-manipulation"
                >
                  <div className="w-9 h-9 bg-[#B88E5E]/15 text-[#B88E5E] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#F6F3EC] block">
                      {t.contact.telegramDirect}
                    </span>
                    <span className="text-[11px] font-mono text-[#B88E5E] block">
                      @Anna_040506
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.telegramChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3.5 sm:p-4 bg-[#242522] hover:bg-[#2C2D2A] border border-white/10 transition-colors group min-h-[50px] touch-manipulation"
                >
                  <div className="w-9 h-9 bg-[#B88E5E]/15 text-[#B88E5E] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#F6F3EC] block">
                      {t.contact.telegramChannel}
                    </span>
                    <span className="text-[11px] font-mono text-[#B88E5E] block">
                      @goncharovaexpert
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3.5 sm:p-4 bg-[#242522] hover:bg-[#2C2D2A] border border-white/10 transition-colors group min-h-[50px] touch-manipulation"
                >
                  <div className="w-9 h-9 bg-[#B88E5E]/15 text-[#B88E5E] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#F6F3EC] block">
                      {t.contact.instagramProfile}
                    </span>
                    <span className="text-[11px] font-mono text-[#B88E5E] block">
                      @goncharova.expert
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-2 text-[11px] font-mono text-[#F6F3EC]/50">
              <Clock className="w-3.5 h-3.5 text-[#B88E5E]" />
              <span>{locale === "ru" ? "Ответ обычно в течение 1–2 часов" : "Odatda 1–2 soat ichida javob beriladi"}</span>
            </div>
          </div>

          {/* Right Side: Reusable Lead Form (7 cols) */}
          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
