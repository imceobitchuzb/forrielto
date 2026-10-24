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
      <div className="bg-[#FAF8F5] border border-[#A8794A]/30 p-8 sm:p-10 rounded-sm text-center space-y-5 animate-fadeIn">
        <div className="w-14 h-14 mx-auto rounded-full bg-[#A8794A]/10 flex items-center justify-center text-[#A8794A]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-[#20211F]">
          {t.contact.successTitle}
        </h3>
        <p className="text-sm text-[#77746D] max-w-md mx-auto leading-relaxed">
          {t.contact.successDesc}
        </p>
        <div className="pt-2">
          <a
            href={siteConfig.telegramDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#20211F] text-[#F5F2EC] text-xs uppercase tracking-wider font-medium hover:bg-[#A8794A] transition-colors rounded-sm"
          >
            <Send className="w-4 h-4 text-[#A8794A]" />
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
        "bg-[#FAF8F5] border border-[#20211F]/10 p-6 sm:p-10 rounded-sm space-y-6 shadow-editorial",
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

      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#20211F]">
          {t.contact.formTitle}
        </h3>
        <p className="text-xs text-[#77746D]">
          {locale === "ru"
            ? "Заполните короткую форму — Анна свяжется с вами для уточнения деталей"
            : "Qisqa shaklni to'ldiring — Anna tafsilotlarni aniqlashtirish uchun siz bilan bog'lanadi"}
        </p>
      </div>

      {status === "error" && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm flex items-start space-x-2">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono tracking-wider uppercase text-[#77746D]">
            {t.contact.namePlaceholder} *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={locale === "ru" ? "Как к вам обращаться" : "Ismingiz"}
            className="w-full px-3.5 py-2.5 bg-white border border-[#20211F]/15 rounded-sm text-sm text-[#20211F] placeholder-[#77746D]/50 focus:outline-none focus:border-[#A8794A] transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono tracking-wider uppercase text-[#77746D]">
            {t.contact.phonePlaceholder} *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+998 (90) 000-00-00"
            className="w-full px-3.5 py-2.5 bg-white border border-[#20211F]/15 rounded-sm text-sm text-[#20211F] placeholder-[#77746D]/50 focus:outline-none focus:border-[#A8794A] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Service */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono tracking-wider uppercase text-[#77746D]">
            {t.contact.serviceSelect}
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-white border border-[#20211F]/15 rounded-sm text-sm text-[#20211F] focus:outline-none focus:border-[#A8794A] transition-colors"
          >
            <option value="inspection">{t.contact.serviceOptions.inspection}</option>
            <option value="supervision">{t.contact.serviceOptions.supervision}</option>
            <option value="turnkey">{t.contact.serviceOptions.turnkey}</option>
            <option value="consult">{t.contact.serviceOptions.consult}</option>
          </select>
        </div>

        {/* Preferred Channel */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-mono tracking-wider uppercase text-[#77746D]">
            {t.contact.channelSelect}
          </label>
          <select
            value={formData.channel}
            onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-white border border-[#20211F]/15 rounded-sm text-sm text-[#20211F] focus:outline-none focus:border-[#A8794A] transition-colors"
          >
            <option value="telegram">{t.contact.channelTelegram}</option>
            <option value="whatsapp">{t.contact.channelWhatsApp}</option>
            <option value="phone">{t.contact.channelPhone}</option>
          </select>
        </div>
      </div>

      {/* Comment / Details */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-mono tracking-wider uppercase text-[#77746D]">
          {locale === "ru" ? "Детали объекта" : "Obyekt tafsilotlari"}
        </label>
        <textarea
          rows={3}
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          placeholder={t.contact.commentPlaceholder}
          className="w-full px-3.5 py-2.5 bg-white border border-[#20211F]/15 rounded-sm text-sm text-[#20211F] placeholder-[#77746D]/50 focus:outline-none focus:border-[#A8794A] transition-colors resize-none"
        />
      </div>

      {/* Consent & Submit */}
      <div className="space-y-4">
        <p className="text-[11px] text-[#77746D] leading-tight">
          {t.contact.consent}
        </p>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center space-x-2 py-3.5 bg-[#20211F] hover:bg-[#A8794A] text-[#F5F2EC] text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 disabled:opacity-50"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{t.contact.submitting}</span>
            </>
          ) : (
            <>
              <span>{t.contact.submit}</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
