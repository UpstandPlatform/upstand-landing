export const defaultLocale = "en" as const;

export const locales = [
  "en",
  "fa",
  "zh",
  "ru",
  "fr",
  "hi",
  "de",
  "es",
  "ar",
  "ja",
] as const;

export type Locale = (typeof locales)[number];

export interface LocaleMetadata {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
  region: string;
}

export const localeDetails: Record<Locale, LocaleMetadata> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    dir: "ltr",
    region: "United States / Global",
  },
  fa: {
    code: "fa",
    name: "Persian",
    nativeName: "فارسی",
    flag: "🇮🇷",
    dir: "rtl",
    region: "Iran / Global Persian",
  },
  zh: {
    code: "zh",
    name: "Chinese (Simplified)",
    nativeName: "简体中文",
    flag: "🇨🇳",
    dir: "ltr",
    region: "China / Global Chinese",
  },
  ru: {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
    dir: "ltr",
    region: "Russia / Global Russian",
  },
  fr: {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    dir: "ltr",
    region: "France / Francophonie",
  },
  hi: {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳",
    dir: "ltr",
    region: "India / Bharat",
  },
  de: {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    dir: "ltr",
    region: "Germany / DACH",
  },
  es: {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    dir: "ltr",
    region: "Spain / Latin America",
  },
  ar: {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇦🇪",
    dir: "rtl",
    region: "MENA / Arab World",
  },
  ja: {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    dir: "ltr",
    region: "Japan",
  },
};

export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}
