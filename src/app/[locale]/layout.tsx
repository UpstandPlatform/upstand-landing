import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { locales, localeDetails, defaultLocale, Locale, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { StructuredData } from "@/components/landing/StructuredData";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale: Locale = isValidLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(currentLocale);
  const details = localeDetails[currentLocale];
  const baseUrl = "https://upstand.dev";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: dict.seo.title,
      template: "%s | Upstand",
    },
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    authors: [{ name: "Upstand Platform Team", url: baseUrl }],
    creator: "Upstand Platform",
    publisher: "Upstand Platform",
    applicationName: "Upstand",
    alternates: {
      canonical: `${baseUrl}/${currentLocale}`,
      languages: {
        ...Object.fromEntries(
          locales.map((loc) => [loc, `${baseUrl}/${loc}`])
        ),
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: currentLocale,
      url: `${baseUrl}/${currentLocale}`,
      title: dict.seo.ogTitle,
      description: dict.seo.ogDescription,
      siteName: "Upstand Platform",
      images: [
        {
          url: `${baseUrl}/images/dashboard_hero.png`,
          width: 1200,
          height: 630,
          alt: "Upstand Container PaaS Console",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.ogTitle,
      description: dict.seo.ogDescription,
      images: [`${baseUrl}/images/dashboard_hero.png`],
      creator: "@UpstandPlatform",
    },
    icons: {
      icon: [
        { url: "/favicon/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: [
        { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale: Locale = isValidLocale(locale) ? locale : defaultLocale;
  const details = localeDetails[currentLocale];
  const dict = getDictionary(currentLocale);

  return (
    <html
      lang={currentLocale}
      dir={details.dir}
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <head>
        <StructuredData dict={dict} locale={currentLocale} />
      </head>
      <body className="min-h-full flex flex-col bg-[#070a12] text-slate-100 selection:bg-[#0068ff]/30 selection:text-[#38bdf8]">
        {children}
      </body>
    </html>
  );
}
