import type { MetadataRoute } from "next";
import { navPaths, site } from "@/lib/site";
import { locales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    navPaths.map((path) => ({
      url: `${site.url}/${locale}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    }))
  );
}
