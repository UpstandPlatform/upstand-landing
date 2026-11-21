import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

interface StructuredDataProps {
  dict: Dictionary;
  locale: Locale;
}

export function StructuredData({ dict, locale }: StructuredDataProps) {
  const url = "https://upstand.dev/" + locale;
  const organization = {
    "@type": "Organization",
    name: "Upstand",
    url: "https://upstand.dev",
    logo: "https://upstand.dev/brand/logo.svg",
    description: dict.seo.description,
    sameAs: [
      "https://github.com/UpstandPlatform/upstand",
      "https://twitter.com/UpstandPlatform",
      "https://discord.gg/upstand",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Upstand",
    url: "https://upstand.dev",
    inLanguage: locale,
    publisher: organization,
  };

  const portfolio = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: dict.ecosystem.title,
    description: dict.ecosystem.description,
    url,
    about: organization,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: dict.ecosystem.projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: project.name,
          description: project.description,
          url: project.url,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...organization }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolio) }}
      />
    </>
  );
}
