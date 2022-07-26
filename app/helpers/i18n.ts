import { pick } from "accept-language-parser";
import i18nData from "~/locales/i18n";

const fallbackLocale = 'it-it';
const locales: { slug: string; label: string }[] = [
  { slug: "en-us", label: "English (US)" },
  { slug: "it-it", label: "Italiano" }
];
const _i18n: any = i18nData;

/**
 * Get localized keys for a given locale
 * @param locale - Locale code, e.g., "en-ch" or "en"
 * @param keys - Keys required
 * @returns Object containing localized terms
 */
const loadTranslations = <T extends string>(locale: string, keys: readonly string[]): Record<T, string> => {
  let result: Record<string, any> = {};
  keys.forEach((key: string) => {
    result[key.toLowerCase()] = _i18n.data[locale][key.toLowerCase()] ?? _i18n.data[fallbackLocale][key.toLowerCase()] ?? key.toLowerCase()
    }
  );
  return result;
};

/**
 * Get the recommended locale for a request using its `Accept-Language` header and IP address
 * @param request - HTTP request
 * @param currentLocale - Currently active locale
 * @returns Locale, e.g., "en-ch" or "en"
 */
const getMatchingLocale = (
  request: Request,
  currentLocale: string
): string | undefined => {
  const _localeSlugs: string[] = locales.map((locale) => locale.slug);
  // check if browser language is in available locales
  const { headers } = request;
  const locale = pick(_localeSlugs, headers.get("accept-language")?.toLowerCase() ?? "");

  if (locale === null) {
    const filteredLocale = _localeSlugs.filter(l => l === currentLocale.toLowerCase())
    if (filteredLocale.length === 0) {
      return undefined
    } else {
      return filteredLocale[0]
    }
  } else {
    return locale
  }
}

export {
  locales,
  fallbackLocale,
  loadTranslations,
  getMatchingLocale
}