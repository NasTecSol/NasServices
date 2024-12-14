import en from "../locales/en.json";
import ar from "../locales/ar.json";

type Locales = "en" | "ar";
const translations: Record<Locales, Record<string, any>> = { en, ar };

export function t(key: string, locale: Locales = "en"): string {
  const keys = key.split(".");
  let translation: any = translations[locale];

  for (const k of keys) {
    translation = translation?.[k];
    if (!translation) return key; 
  }

  return translation;
}
