import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { PageTransition } from "@/components/motion/PageTransition";
import { siteConfig } from "@/content/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F6F3EC",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://goncharova.expert"),
  title: {
    default: "GONCHAROVA.EXPERT — Приёмка квартир, технадзор и ремонт под ключ в Ташкенте",
    template: "%s | GONCHAROVA.EXPERT",
  },
  description:
    "Профессиональная приёмка квартир в новостройках Ташкента, независимый технический надзор за ремонтом и ремонт под ключ. Более 5 000 проверенных объектов. Эксперт Анна Гончарова.",
  keywords: [
    "приёмка квартир Ташкент",
    "проверка новостройки Ташкент",
    "технадзор за ремонтом Ташкент",
    "ремонт квартир под ключ Ташкент",
    "Анна Гончарова",
    "строительный эксперт Ташкент",
    "дефектный акт новостройка",
    "yangi uyni qabul qilish Toshkent",
  ],
  authors: [{ name: "Анна Гончарова", url: siteConfig.instagramUrl }],
  openGraph: {
    title: "GONCHAROVA.EXPERT — Экспертиза новостроек и контроль ремонта в Ташкенте",
    description:
      "Защищаем интересы покупателей недвижимости. 5 000+ проверенных квартир в Ташкенте. Инструментальная приёмка, технадзор и ремонт под ключ.",
    url: "https://goncharova.expert",
    siteName: "GONCHAROVA.EXPERT",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans bg-[#F6F3EC] text-[#1C1D1A] min-h-screen flex flex-col selection:bg-[#1C1D1A] selection:text-[#F6F3EC] overflow-x-hidden">
        <LanguageProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-grow pb-24 lg:pb-0 overflow-x-hidden">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <StickyMobileCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
