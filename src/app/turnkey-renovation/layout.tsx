import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ремонт квартир под ключ в Ташкенте — Экспертный надзор и прозрачная смета",
  description:
    "Премиальный ремонт квартир под ключ в Ташкенте с личным надзором Анны Гончаровой. Фиксированная смета, проверенные мастера, соблюдение строительных норм и сроков.",
  openGraph: {
    title: "Ремонт квартир под ключ в Ташкенте | GONCHAROVA.EXPERT",
    description: "Полный цикл реализации интерьера: от приёмки новостройки до готового пространства для жизни.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
