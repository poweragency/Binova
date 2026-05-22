import type { MetadataRoute } from "next";
import { collections } from "@/data/collections";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://binova-git-main-poweragency.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/heritage", priority: 0.8, changeFrequency: "monthly" },
    { path: "/showroom", priority: 0.8, changeFrequency: "monthly" },
    { path: "/progettazione", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contract", priority: 0.8, changeFrequency: "monthly" },
    { path: "/eventi", priority: 0.6, changeFrequency: "monthly" },
    { path: "/durini-design", priority: 0.7, changeFrequency: "monthly" },
    { path: "/press", priority: 0.6, changeFrequency: "monthly" },
    { path: "/euroluce", priority: 0.5, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie", priority: 0.3, changeFrequency: "yearly" },
    { path: "/legal", priority: 0.3, changeFrequency: "yearly" },
    { path: "/accessibilita", priority: 0.3, changeFrequency: "yearly" },
  ];

  const kitchenRoutes = collections.map((c) => ({
    path: `/cucine/${c.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const allRoutes = [...staticRoutes, ...kitchenRoutes];

  // Emit one entry per (locale, route). The default locale gets the bare
  // path (e.g. /heritage); other locales get the /<locale>/<path> prefix.
  return routing.locales.flatMap((locale) =>
    allRoutes.map(({ path, priority, changeFrequency }) => {
      const localePrefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      return {
        url: `${BASE_URL}${localePrefix}${path}`,
        lastModified,
        changeFrequency,
        priority,
      };
    })
  );
}
