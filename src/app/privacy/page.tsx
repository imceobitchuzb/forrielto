"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  const { locale } = useLanguage();

  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#77746D] hover:text-[#20211F] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{locale === "ru" ? "На главную" : "Asosiy sahifaga"}</span>
        </Link>

        <div className="bg-[#FAF8F5] border border-[#20211F]/10 p-8 sm:p-12 rounded-sm space-y-8 shadow-editorial">
          <div className="border-b border-[#20211F]/10 pb-6">
            <span className="text-[11px] font-mono tracking-widest text-[#A8794A] uppercase font-semibold">
              ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#20211F] mt-2">
              Политика конфиденциальности и обработки данных
            </h1>
            <p className="text-xs text-[#77746D] mt-1 font-mono">
              Действует с {new Date().getFullYear()} года · GONCHAROVA.EXPERT (г. Ташкент)
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#20211F]/80 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-[#20211F]">
                1. Общие положения
              </h2>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональной информации пользователей, которую бренд GONCHAROVA.EXPERT (далее — «Эксперт») может получить во время использования пользователем сайта goncharova.expert и отправки контактных форм.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-[#20211F]">
                2. Собираемая информация
              </h2>
              <p>
                Мы запрашиваем только минимально необходимые данные для связи с заказчиком и согласования условий оказания услуг:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Имя заказчика для корректного обращения</li>
                <li>Контактный номер телефона для звонка или сообщений в мессенджерах (Telegram, WhatsApp)</li>
                <li>Название жилого комплекса и примерная площадь объекта (по желанию пользователя)</li>
                <li>Выбранный тип услуги (приёмка, технадзор, ремонт под ключ)</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-[#20211F]">
                3. Цели обработки персональных данных
              </h2>
              <p>
                Персональные данные используются исключительно для:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Предоставления первичной консультации и ответа на запрос пользователя</li>
                <li>Согласования даты и времени выезда эксперта на объект</li>
                <li>Подготовки проекта дефектного акта или предварительной сметы</li>
              </ul>
              <p className="text-xs text-[#77746D]">
                Мы не передаем персональные данные третьим лицам, застройщикам, агентствам недвижимости или рекламным сетям.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-[#20211F]">
                4. Безопасность и хранение данных
              </h2>
              <p>
                Эксперт принимает необходимые организационные и технические меры для защиты персональной информации от неправомерного или случайного доступа, уничтожения, изменения или распространения.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-[#20211F]">
                5. Отзыв согласия и контактные данные
              </h2>
              <p>
                Пользователь вправе в любой момент отозвать согласие на обработку данных, написав на контактный адрес электронной почты <strong>consult@goncharova.expert</strong> или напрямую в Telegram <strong>@Anna_040506</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
