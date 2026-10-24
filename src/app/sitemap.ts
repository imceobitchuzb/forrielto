import { MetadataRoute } from "next";
import { portfolioCases } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goncharova.expert";

  const staticRoutes = [
    "",
    "/services",
    "/apartment-inspection",
    "/renovation-supervision",
    "/turnkey-renovation",
    "/portfolio",
    "/about",
    "/reviews",
    "/faq",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const caseRoutes = portfolioCases.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseRoutes];
}
