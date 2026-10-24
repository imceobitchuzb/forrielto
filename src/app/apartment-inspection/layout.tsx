import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Приёмка квартир в новостройках Ташкента — Инструментальный аудит",
  description:
    "Инструментальная приёмка квартир перед подписанием акта приема-передачи в Ташкенте. Проверка геометрии, окон, электрики и тепловизионный осмотр. Юридически выверенный дефектный акт по ШНК/КМК.",
  openGraph: {
    title: "Приёмка квартир в новостройках Ташкента | GONCHAROVA.EXPERT",
    description: "Выявляем скрытый строительный брак до подписания документов. Защита интересов покупателя в Ташкенте.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
