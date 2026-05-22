import type { MetadataRoute } from "next";
import { collections } from "@/data/collections";

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

  return [...staticRoutes, ...kitchenRoutes].map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })
  );
}
