import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Технический надзор за ремонтом квартир в Ташкенте — Контроль качества",
  description:
    "Независимый технадзор за ремонтом квартир в Ташкенте. Поэтапный контроль скрытых работ, электромонтажа, гидроизоляции и стяжки. Фотоотчёты и предписания для стройбригады.",
  openGraph: {
    title: "Технадзор за ремонтом в Ташкенте | GONCHAROVA.EXPERT",
    description: "Предотвращаем дорогостоящие переделки и брак при ремонте. Личный контроль эксперта.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
