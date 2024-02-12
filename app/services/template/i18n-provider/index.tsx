import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export const TranslationsContext = createContext<{
  translations: Record<string, any>;
  locales: string[];
  currentLocale: string; 
} | null>(null);

export function useTranslationsContext() {
  const context = useContext(TranslationsContext);
  const translations = context?.translations || {}
  const locales = context?.locales || []
  const currentLocale = context?.currentLocale || "en-US"

  const t = (key: string) => {
    if (Object.keys(translations).length === 0) {
      return key;
    }
    if (translations.hasOwnProperty(key)) {
      return translations[key];
    }
    return key;
  }

  return { t, locales, currentLocale };
}

export interface TranslationsProviderProps {
  translations: Record<string, string>;
  locales: string[];
  currentLocale: string;
  children: ReactNode;
}

export function TranslationsProvider({ children, translations, currentLocale, locales }: TranslationsProviderProps) {
  return (
    <TranslationsContext.Provider value={{ translations, currentLocale, locales }}>
      {children}
    </TranslationsContext.Provider>
  );
}