import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Об эксперте — Анна Гончарова (GONCHAROVA.EXPERT)",
  description:
    "Биография, принципы и опыт Анны Гончаровой: более 5 000 проверенных квартир в Ташкенте, независимость от застройщиков, инструментальная точность и честная защита собственника.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
