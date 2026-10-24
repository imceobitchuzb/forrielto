"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { LeadForm } from "./LeadForm";
import { Send, Instagram, ShieldCheck, PhoneCall, Clock } from "lucide-react";

export function FinalCTA() {
  const { t, locale } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#20211F] text-[#F5F2EC] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F5F2EC_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Editorial Pitch & Direct Messengers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              {t.contact.tag}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F2EC] leading-[1.08]">
              {t.contact.headline}
            </h2>

            <p className="text-sm sm:text-base text-[#F5F2EC]/70 leading-relaxed">
              {t.contact.subheadline}
            </p>

            {/* Direct Connect Options */}
            <div className="pt-4 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-[#A8794A]">
                {t.contact.directConnect}
              </p>

              <div className="flex flex-col space-y-2">
                <a
                  href={siteConfig.telegramDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3.5 bg-[#2A2B28] hover:bg-[#343532] border border-white/10 rounded-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#A8794A]/20 flex items-center justify-center text-[#A8794A] group-hover:scale-110 transition-transform">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#F5F2EC] block">
                      {t.contact.telegramDirect}
                    </span>
                    <span className="text-[11px] font-mono text-[#A8794A] block">
                      @Anna_040506
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.telegramChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3.5 bg-[#2A2B28] hover:bg-[#343532] border border-white/10 rounded-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#A8794A]/20 flex items-center justify-center text-[#A8794A] group-hover:scale-110 transition-transform">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#F5F2EC] block">
                      {t.contact.telegramChannel}
                    </span>
                    <span className="text-[11px] font-mono text-[#A8794A] block">
                      @goncharovaexpert
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3.5 bg-[#2A2B28] hover:bg-[#343532] border border-white/10 rounded-sm transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#A8794A]/20 flex items-center justify-center text-[#A8794A] group-hover:scale-110 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#F5F2EC] block">
                      {t.contact.instagramProfile}
                    </span>
                    <span className="text-[11px] font-mono text-[#A8794A] block">
                      @goncharova.expert
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-[#F5F2EC]/60">
              <Clock className="w-4 h-4 text-[#A8794A]" />
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
