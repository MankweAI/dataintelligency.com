import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "AhrefsBot",
          "SemrushBot",
          "DotBot",
          "MJ12bot",
          "Bytespider",
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "CCBot",
          "PerplexityBot",
          "PetalBot",
          "BLEXBot",
          "DataForSeoBot",
        ],
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/portal",
      },
    ],
    sitemap: "https://dataintelligency.com/sitemap.xml",
  };
}
