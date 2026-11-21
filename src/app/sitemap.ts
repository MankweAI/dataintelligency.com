import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dataintelligency.com",
      lastModified: new Date("2026-11-21"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://dataintelligency.com/privacy",
      lastModified: new Date("2026-11-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://dataintelligency.com/terms",
      lastModified: new Date("2026-11-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
