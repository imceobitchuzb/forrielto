import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вопросы и ответы — Приёмка новостроек и контроль ремонта",
  description:
    "Ответы эксперта на частые вопросы: как застройщик реагирует на дефектный акт, какие нормы ШНК/КМК действуют, сколько длится осмотр и как забронировать выезд.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
