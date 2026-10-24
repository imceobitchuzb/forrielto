import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги строительной экспертизы и контроля качества в Ташкенте",
  description:
    "Полный спектр услуг эксперта Анны Гончаровой в Ташкенте: приёмка новостроек, независимый строительный технадзор и ремонт под ключ. Выберите формат под вашу задачу.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
