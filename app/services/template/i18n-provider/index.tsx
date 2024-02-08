import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export const TranslationsContext = createContext<{ translations: Record<string, any>; } | null>(null);

export function useTranslationsContext() {
  const context = useContext(TranslationsContext);
  const translations = context?.translations || {}
  const t = (key: string) => {
    if (Object.keys(translations).length === 0) {
      return key;
    }
    if (translations.hasOwnProperty(key)) {
      return translations[key];
    }
    return key;
  }

  return { t };
}

export interface TranslationsProviderProps {
  translations: Record<string, string>;
  children: ReactNode;
}

export function TranslationsProvider({ children, translations }: TranslationsProviderProps) {
  return (
    <TranslationsContext.Provider value={{ translations }}>
      {children}
    </TranslationsContext.Provider>
  );
}