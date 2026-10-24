import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — GONCHAROVA.EXPERT",
  description:
    "Политика обработки персональных данных и конфиденциальности сервиса GONCHAROVA.EXPERT в соответствии с законодательством Республики Узбекистан.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
