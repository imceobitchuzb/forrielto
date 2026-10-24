import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты и запись на консультацию — GONCHAROVA.EXPERT",
  description:
    "Записаться на приёмку квартиры или консультацию по ремонту в Ташкенте. Официальные каналы связи: личный Telegram @Anna_040506, Instagram @goncharova.expert.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
