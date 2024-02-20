import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { a11yCookie, i18nCookie } from "~/cookies";
import type { ParsedI18nCookie, ParsedA11yCookie } from "~/cookies";
import type { AuthorUI, BlockItemUI, RevasError, SocialLinkUI, Website, WebsiteLinkUI, WebsiteNotificationUI } from "~/models";
import { type GetWebsiteFunction } from "~/services/api/websites";
import { getContrastFrom } from "~/services/template/custom-theme";
import translations from "~/i18n";

export type LoaderData = {
  textBaseUnit: number;
  textLineBaseUnit: number;
  spacingBaseUnit: number;
  isHighContrastMode: boolean;

  currentContrastMode: string;
  textIncreaseAmount: string;

  headCodeInjection: string;
  bodyCodeInjection: string;

  primaryColor: string;
  contrastColor: string;
  borderRadiusAmount: number;
  fontFamily: string;
  fontFamilyUrl: string;
  faviconUrl: string;
  websiteLogoUrl: string;

  websiteLocale: string;
  websiteTitle: string;

  availableLanguages: string[],
  selectedLocale: string;
  
  canonicalUrl: string;

  navigation: WebsiteLinkUI[];
  authors: AuthorUI[];
  links: WebsiteLinkUI[];
  socials: SocialLinkUI[];

  notification?: WebsiteNotificationUI;
  mainLink?: WebsiteLinkUI;
  mainItem?: BlockItemUI;

  metadata: Record<string, string>;

  translations: Record<string, string>;

  error?: RevasError;
  errors?: {
    getWebsite?: boolean;
  }
}

type LoaderContainer = {
  a11yWebsiteCookie: ParsedA11yCookie;
  i18nWebsiteCookie: ParsedI18nCookie;
  asyncGetWebsite?: GetWebsiteFunction;
  websiteName: string;
  publicKey: string;
};

export const newLoader = ({
  a11yWebsiteCookie,
  i18nWebsiteCookie,
  asyncGetWebsite,
  websiteName,
  publicKey
}: LoaderContainer) => {
  return async (args: LoaderFunctionArgs) => {
    const h = new Headers();
    const url = new URL(args.request.url);
    let incomingLocale = args.params.locale || ""
    if (args.params.locale === "it") incomingLocale = "it-IT"
    if (args.params.locale === "en") incomingLocale = "en-US"

    let localeTranslations = incomingLocale === "" ? {} : translations.translations[incomingLocale]
    if (localeTranslations === undefined) localeTranslations = {
      "error_loading_page": "The page did not load correctly",
      "wait_and_retry": "There was an error loading the page. Wait a minute and then retry.",
      "page_not_found": "This page does not exist",
      "page_does_not_exist": "This page does not exist. Try to go back home and retry.",
      "go_back_home": "Go back home",
      "website_error": "Website loading error",
      "wait_website_and_retry": "The website did not load correctly. Wait a while and retry.",
    }

    let canonicalUrl =`https://${websiteName}/${incomingLocale}`

    const textIncreaseAmountParam = url.searchParams.get("textIncrease") || "";
    const contrastModeParam = url.searchParams.get("contrastMode") || "";
    const selectedLocaleParam = url.searchParams.get("selectedLocale") || "";

    let a11yParsedCookie: ParsedA11yCookie = a11yWebsiteCookie
    let i18nParsedCookie: ParsedI18nCookie = i18nWebsiteCookie

    let increaseAmount = 0
    let textIncreaseAmount = "default"
    textIncreaseAmount = a11yParsedCookie.textIncreaseAmount
    if (textIncreaseAmountParam !== "") textIncreaseAmount = textIncreaseAmountParam

    if (textIncreaseAmount === "50") increaseAmount = 0.5
    if (textIncreaseAmount === "100") increaseAmount = 1
    if (textIncreaseAmount === "200") increaseAmount = 2

    let contrastMode = "default"
    contrastMode = a11yParsedCookie.contrastMode
    if (contrastModeParam !== "") contrastMode = contrastModeParam

    let textBaseUnit = 0.125 + 0.125 * increaseAmount
    let textLineBaseUnit = 0.125 + (increaseAmount / 10)
    let spacingBaseUnit = Math.abs(0.125 - (increaseAmount / (increaseAmount === 0 ? 1 : 20 * increaseAmount)))
    let isHighContrastMode = contrastMode === "high"

    let selectedLocale = ""
    selectedLocale = i18nParsedCookie.selectedLocale
    if (selectedLocaleParam !== "") selectedLocale = selectedLocaleParam

    let loaderData: LoaderData = {
      textBaseUnit,
      textLineBaseUnit,
      spacingBaseUnit,
      isHighContrastMode,
      headCodeInjection: "",
      bodyCodeInjection: "",
      primaryColor: "black",
      contrastColor: "white",
      borderRadiusAmount: 16,
      fontFamily: "",
      fontFamilyUrl: "",
      faviconUrl: "https://cdn.revas.app/v0/01f9ekbw2n7m4sfc4xhtftyarv/01hnbgnjq95d67vs559k7phqbm/01hq168p1gwzgtxrnf8267b2wj/davidillo-favicon-png.png",
      websiteLocale: "",
      canonicalUrl,
      metadata: {},
      websiteLogoUrl: "https://cdn.revas.app/v0/01f9ekbw2n7m4sfc4xhtftyarv/01hnbgnjq95d67vs559k7phqbm/01hp2ztraz9tq2cmw418175egr/davdiegiovannichrome-3-png.png",
      websiteTitle: "",
      navigation: [],
      authors: [],
      links: [],
      socials: [],
      currentContrastMode: contrastMode,
      textIncreaseAmount: textIncreaseAmount,

      translations: localeTranslations,

      availableLanguages: [],
      selectedLocale
    }

    if (websiteName === "" || publicKey === "") {
      loaderData.error = {
        code: 0,
        message: "Headers are empty"
      }
      loaderData.errors = {
        getWebsite: true
      }
      a11yParsedCookie.contrastMode = contrastMode
      a11yParsedCookie.textIncreaseAmount = textIncreaseAmount
      return json(loaderData, {
        status: 500,
        headers: {
          "Set-Cookie": await a11yCookie(websiteName).serialize(
            a11yParsedCookie
          ),
        },
      });
    }

    let website = {} as Website
    let availableLanguages: string[] = []
    if (asyncGetWebsite) {
      const [res, err] = await asyncGetWebsite({
        websiteName,
        publicKey,
        locale: incomingLocale
      })
      if (err) {
        loaderData.error = err
        loaderData.errors = {
          getWebsite: true
        }
        a11yParsedCookie.contrastMode = contrastMode
        a11yParsedCookie.textIncreaseAmount = textIncreaseAmount
        i18nParsedCookie.selectedLocale = selectedLocale

        h.append(
          "Set-Cookie",
          await a11yCookie(websiteName).serialize(a11yParsedCookie),
        );
        h.append(
          "Set-Cookie",
          await i18nCookie(websiteName).serialize(i18nParsedCookie),
        );
        return json(loaderData, {
          status: err.code === 5 ? 404 : 500,
          headers: h
        });
      }
      website = res.website
    }
    loaderData.headCodeInjection = website.headCodeInjection
    loaderData.bodyCodeInjection = website.bodyCodeInjection

    if (website.alternates && website.alternates.length > 0) {
      availableLanguages = website.alternates.map(alt => {
        return alt.languageCode
      })
    }

    if (website.theme) {
      loaderData.primaryColor = isHighContrastMode ? "#000000" : website.theme.accentColor
      loaderData.contrastColor = isHighContrastMode ? "#ffffff" :getContrastFrom(website.theme.accentColor)
      loaderData.borderRadiusAmount = parseInt(website.theme.borderRadius)
      loaderData.fontFamily = website.theme.fontFamily
      loaderData.fontFamilyUrl = website.theme.fontFamilyUrl
      loaderData.faviconUrl = website.theme.iconUrl
      loaderData.websiteLogoUrl = website.theme.logoUrl
    }

    if (website.notification) {
      loaderData.notification = {
        title: website.notification.title,
        description: website.notification.description,
        linkMetadata: {},
        linkTitle: "",
        linkUrl: "",
        metadata: website.notification.metadata
      }
      if (website.notification.link) {
        loaderData.notification = {
          ...loaderData.notification,
          linkMetadata: website.notification.link.metadata,
          linkTitle: website.notification.link.title,
          linkUrl: website.notification.link.url,
        }
      }
    }

    if (website.mainItem) {
      loaderData.mainItem = {
        title: website.mainItem.title,
        description: website.mainItem.description,
        linkMetadata: {},
        linkTitle: "",
        linkUrl: "",
        metadata: website.mainItem.metadata,
        attachmentCaption: "",
        attachmentDescription: "",
        attachmentMediaType: "image/*",
        attachmentMetadata: {},
        attachmentUrl: ""
      }
      if (website.mainItem.link) {
        loaderData.mainItem = {
          ...loaderData.mainItem,
          linkMetadata: website.mainItem.link.metadata,
          linkTitle: website.mainItem.link.title,
          linkUrl: website.mainItem.link.url,
        }
      }
      if (website.mainItem.attachment) {
        loaderData.mainItem = {
          ...loaderData.mainItem,
          attachmentCaption: website.mainItem.attachment.caption,
          attachmentDescription: website.mainItem.attachment.description,
          attachmentUrl: website.mainItem.attachment.url,
          attachmentMediaType: website.mainItem.attachment.mediaType,
          attachmentMetadata: website.mainItem.attachment.metadata,
        }
      }
    }

    if (website.mainLink) {
      loaderData.mainLink = {
        title: website.mainLink.title,
        url: website.mainLink.url,
        metadata: website.mainLink.metadata
      }
    }

    if (website.navigation && website.navigation.length > 0) {
      loaderData.navigation = website.navigation.map(link => {
        return {
          title: link.title,
          url: link.url,
          metadata: link.metadata
        }
      })
    }

    if (website.links && website.links.length > 0) {
      const allLinks = website.links.map(link => {
        return {
          title: link.title,
          url: link.url,
          metadata: link.metadata
        }
      })
      loaderData.links = allLinks.filter(link => !isSocialLink(link.url))
    }

    if (website.links && website.links.length > 0) {
      const allLinks = website.links.map(link => {
        return {
          type: typeFromUrl(link.url),
          title: link.title,
          url: link.url,
          metadata: link.metadata
        }
      })
      loaderData.socials = allLinks.filter(link => isSocialLink(link.url))
    }

    if (website.authors && website.authors.length > 0) {
      loaderData.authors = website.authors.map(author => {
        return {
          title: author.title,
          description: author.description,
          attachmentCaption: "",
          attachmentDescription: author.title,
          attachmentMediaType: "image/*",
          attachmentMetadata: {},
          attachmentUrl: author.imageUrl,
          links: author.links.map(link => {
            return {
              title: link.title,
              url: link.url,
              metadata: link.metadata
            }
          }),
          metadata: author.metadata
        }
      })
    }

    loaderData.websiteLocale = website.languageCode
    loaderData.websiteTitle = website.title
    loaderData.availableLanguages = availableLanguages

    a11yParsedCookie.contrastMode = contrastMode
    a11yParsedCookie.textIncreaseAmount = textIncreaseAmount
    i18nParsedCookie.selectedLocale = selectedLocale

    h.append(
      "Set-Cookie",
      await a11yCookie(websiteName).serialize(a11yParsedCookie),
    );
    h.append(
      "Set-Cookie",
      await i18nCookie(websiteName).serialize(i18nParsedCookie),
    );
    return json(loaderData, {
      headers: h
    });
  }
}

function isSocialLink(url: string): boolean {
  if (url.includes("dribbble")) return true
  if (url.includes("facebook")) return true
  if (url.includes("github")) return true
  if (url.includes("gitlab")) return true
  if (url.includes("instagram")) return true
  if (url.includes("linkedin")) return true
  if (url.includes("snapchat")) return true
  if (url.includes("tiktok")) return true
  if (url.includes("twitch")) return true
  if (url.includes("twitter")) return true
  if (url.includes("wechat")) return true
  if (url.includes("whatsapp")) return true
  if (url.includes("youtube")) return true
  return false
}

function typeFromUrl(url: string): string {
  if (url.includes("dribbble")) return "dribbble"
  if (url.includes("facebook")) return "facebook"
  if (url.includes("github")) return "github"
  if (url.includes("gitlab")) return "gitlab"
  if (url.includes("instagram")) return "instagram"
  if (url.includes("linkedin")) return "linkedin"
  if (url.includes("snapchat")) return "snapchat"
  if (url.includes("tiktok")) return "tiktok"
  if (url.includes("twitch")) return "twitch"
  if (url.includes("twitter")) return "twitter"
  if (url.includes("wechat")) return "wechat"
  if (url.includes("whatsapp")) return "whatsapp"
  if (url.includes("youtube")) return "youtube"
  return "link"
}