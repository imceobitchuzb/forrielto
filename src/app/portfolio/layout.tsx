import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио и примеры проверок — Реальные кейсы в Ташкенте",
  description:
    "Реальные кейсы приёмки квартир и технического надзора в жилых комплексах Ташкента. Фотофиксация выявленных дефектов, протоколы обследований и результаты.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
