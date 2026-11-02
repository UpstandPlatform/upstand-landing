import { defaultLocale, Locale, isValidLocale } from "./config";
import { Dictionary } from "./types";
import { en } from "./dictionaries/en";
import { fa } from "./dictionaries/fa";
import { zh } from "./dictionaries/zh";
import { ru } from "./dictionaries/ru";
import { fr } from "./dictionaries/fr";
import { hi } from "./dictionaries/hi";
import { de } from "./dictionaries/de";
import { es } from "./dictionaries/es";
import { ar } from "./dictionaries/ar";
import { ja } from "./dictionaries/ja";

const dictionaries: Record<Locale, Dictionary> = {
  en,
  fa,
  zh,
  ru,
  fr,
  hi,
  de,
  es,
  ar,
  ja,
};

export function getDictionary(locale: string): Dictionary {
  if (isValidLocale(locale)) {
    return dictionaries[locale];
  }
  return dictionaries[defaultLocale];
}
