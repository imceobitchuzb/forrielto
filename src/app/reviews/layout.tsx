import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Отзывы клиентов — Реальный опыт приёмки квартир в Ташкенте",
  description:
    "Отзывы реальных владельцев квартир в Ташкенте об экспертной приёмке и техническом надзоре Анны Гончаровой. Истории предотвращённых расходов и защищённого бюджета.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
