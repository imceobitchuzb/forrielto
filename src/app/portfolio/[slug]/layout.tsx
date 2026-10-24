import type { Metadata } from "next";
import { portfolioCases } from "@/content/portfolio";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = portfolioCases.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Проект не найден | GONCHAROVA.EXPERT",
    };
  }

  return {
    title: `${project.titleRu} — Кейс приёмки и надзора`,
    description: project.scopeRu,
    openGraph: {
      title: `${project.titleRu} | GONCHAROVA.EXPERT`,
      description: project.scopeRu,
      images: [project.coverImage],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
