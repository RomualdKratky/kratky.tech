import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/impressum", "/datenschutz"];

  return routing.locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${siteConfig.url}/${locale}${page}/`,
      // Use BUILD_DATE env var when set (CI); fall back to build time.
      lastModified: process.env.BUILD_DATE
        ? new Date(process.env.BUILD_DATE)
        : new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.5,
    })),
  );
}
