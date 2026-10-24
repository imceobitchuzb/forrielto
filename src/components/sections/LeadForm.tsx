"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/content/config";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  defaultService?: string;
  className?: string;
}

export function LeadForm({ defaultService, className }: LeadFormProps) {
  const { t, locale } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: defaultService || "inspection",
    channel: "telegram",
    comment: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Произошла ошибка при отправке");
      }

      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err.message ||
          "Не удалось отправить форму. Пожалуйста, напишите нам напрямую в Telegram."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#FAF8F4] border border-[#9E7448]/40 p-8 sm:p-12 text-center space-y-6 animate-fadeIn shadow-2xl">
        <div className="w-14 h-14 mx-auto rounded-none bg-[#9E7448]/10 border border-[#9E7448] flex items-center justify-center text-[#9E7448]">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <span className="font-mono text-[10px] tracking-widest text-[#9E7448] uppercase">
            REGISTRATION CONFIRMED
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#1C1D1A]">
            {t.contact.successTitle}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#6E6B64] max-w-md mx-auto leading-relaxed">
          {t.contact.successDesc}
        </p>
        <div className="pt-2">
          <a
            href={siteConfig.telegramDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1C1D1A] text-[#F6F3EC] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#9E7448] transition-colors border border-[#1C1D1A]"
          >
            <Send className="w-3.5 h-3.5 text-[#B88E5E]" />
            <span>Перейти в Telegram (@Anna_040506)</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "bg-[#FAF8F4] border border-[#1C1D1A]/15 p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6 shadow-2xl",
        className
      )}
    >
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="website_token"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="space-y-1.5 pb-2 border-b border-[#1C1D1A]/10">
        <span className="font-mono text-[9px] tracking-[0.25em] text-[#9E7448] uppercase block font-semibold">
          INQUIRY DOSSIER
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#1C1D1A]">
          {t.contact.formTitle}
        </h3>
        <p className="text-xs text-[#6E6B64] leading-relaxed">
          {locale === "ru"
            ? "Заполните форму — эксперт свяжется для согласования выезда на объект"
            : "Shaklni to'ldiring — ekspert obyektga chiqishni kelishish uchun bog'lanadi"}
        </p>
      </div>

      {status === "error" && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-start space-x-2">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#6E6B64] block font-medium">
            {t.contact.namePlaceholder} *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={locale === "ru" ? "Имя и фамилия" : "Ismingiz"}
            className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-[#1C1D1A]/15 rounded-none text-base sm:text-sm text-[#1C1D1A] placeholder-[#6E6B64]/50 focus:outline-none focus:border-[#9E7448] transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#6E6B64] block font-medium">
            {t.contact.phonePlaceholder} *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+998 (90) 000-00-00"
            className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-[#1C1D1A]/15 rounded-none text-base sm:text-sm text-[#1C1D1A] placeholder-[#6E6B64]/50 focus:outline-none focus:border-[#9E7448] transition-colors font-mono"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Service */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#6E6B64] block font-medium">
            {t.contact.serviceSelect}
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-[#1C1D1A]/15 rounded-none text-base sm:text-sm text-[#1C1D1A] focus:outline-none focus:border-[#9E7448] transition-colors"
          >
            <option value="inspection">{t.contact.serviceOptions.inspection}</option>
            <option value="supervision">{t.contact.serviceOptions.supervision}</option>
            <option value="turnkey">{t.contact.serviceOptions.turnkey}</option>
            <option value="consult">{t.contact.serviceOptions.consult}</option>
          </select>
        </div>

        {/* Preferred Channel */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#6E6B64] block font-medium">
            {t.contact.channelSelect}
          </label>
          <select
            value={formData.channel}
            onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
            className="w-full min-h-[46px] px-3.5 py-2.5 bg-white border border-[#1C1D1A]/15 rounded-none text-base sm:text-sm text-[#1C1D1A] focus:outline-none focus:border-[#9E7448] transition-colors"
          >
            <option value="telegram">{t.contact.channelTelegram}</option>
            <option value="whatsapp">{t.contact.channelWhatsApp}</option>
            <option value="phone">{t.contact.channelPhone}</option>
          </select>
        </div>
      </div>

      {/* Comment / Details */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#6E6B64] block font-medium">
          {locale === "ru" ? "Детали объекта" : "Obyekt tafsilotlari"}
        </label>
        <textarea
          rows={3}
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          placeholder={t.contact.commentPlaceholder}
          className="w-full px-3.5 py-3 bg-white border border-[#1C1D1A]/15 rounded-none text-base sm:text-sm text-[#1C1D1A] placeholder-[#6E6B64]/50 focus:outline-none focus:border-[#9E7448] transition-colors resize-none"
        />
      </div>

      {/* Consent & Submit */}
      <div className="space-y-4 pt-2">
        <p className="text-[10px] font-mono text-[#6E6B64] leading-tight">
          {t.contact.consent}
        </p>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full min-h-[48px] flex items-center justify-center space-x-2 py-3.5 px-6 bg-[#1C1D1A] hover:bg-[#9E7448] active:scale-[0.99] text-[#F6F3EC] text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 disabled:opacity-50 border border-[#1C1D1A] touch-manipulation"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{t.contact.submitting}</span>
            </>
          ) : (
            <>
              <span>{t.contact.submit}</span>
              <Send className="w-3.5 h-3.5 opacity-80" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
