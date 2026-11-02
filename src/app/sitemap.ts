import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const BASE_URL = "https://upstand.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Root entry
  const entries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, `${BASE_URL}/${loc}`])
        ),
      },
    },
  ];

  // Localized homepages
  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, `${BASE_URL}/${loc}`])
        ),
      },
    });
  }

  return entries;
}
