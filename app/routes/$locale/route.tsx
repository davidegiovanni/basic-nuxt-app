import { type LoaderFunction, type LoaderFunctionArgs } from "@remix-run/node";
import { a11yCookie, i18nCookie } from "~/cookies";
import type { ParsedI18nCookie, ParsedA11yCookie } from "~/cookies";
import { headersDecoder } from "~/services/api/headers-decoder";
import { asyncGetWebsite } from "~/services/api/websites";
import type { LoaderData} from "~/services/api/websites/website-data-loader";

import { newLoader as websiteLoader } from "~/services/api/websites/website-data-loader";
import { Outlet, useLoaderData } from "@remix-run/react";

import Injection from "~/services/template/code-injection";
import AppLayout from "~/components/base/Layout/App";
import CustomTheme from "~/services/template/custom-theme";
import A11ySetup from "~/services/template/a11y-setup";
import Error from "~/components/base/Website/Error";
import { TranslationsProvider, useTranslationsContext } from "~/services/template/i18n-provider";

export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
  const { websiteName, publicKey } = headersDecoder(args.request)
  
  const cookieHeader = args.request.headers.get("cookie") || "";
  const a11yCookieParsed = await a11yCookie(websiteName).parse(cookieHeader);
  let a11yWebsiteCookie: ParsedA11yCookie = {
    contrastMode: "default",
    textIncreaseAmount: "default"
  };
  if (a11yCookieParsed !== null) {
    a11yWebsiteCookie = a11yCookieParsed;
  }

  const i18nCookieParsed = await i18nCookie(websiteName).parse(cookieHeader);
  let i18nWebsiteCookie: ParsedI18nCookie = {
    selectedLocale: ""
  };
  if (i18nCookieParsed !== null) {
    i18nWebsiteCookie = i18nCookieParsed;
  }

  return websiteLoader({
    websiteName,
    publicKey,
    a11yWebsiteCookie,
    i18nWebsiteCookie,
    asyncGetWebsite
  })(args);
};

type IndexProps = {
  loaderData: LoaderData;
};

export function IndexComponent({ loaderData }: IndexProps) {

  const A11Y_VARIABLES = {
    textBaseUnit: loaderData.textBaseUnit, 
    textLineBaseUnit: loaderData.textLineBaseUnit, 
    spacingBaseUnit: loaderData.spacingBaseUnit
  }

  const CUSTOM_THEME = {
    primary: loaderData.primaryColor,
    inverted: loaderData.contrastColor,
    radius: loaderData.borderRadiusAmount,
    fontFamily: loaderData.fontFamily,
    fontFamilyUrl: loaderData.fontFamilyUrl,
    faviconUrl: loaderData.faviconUrl
  }

  const websiteError = loaderData.error && loaderData.errors?.getWebsite
  const { t } = useTranslationsContext()

  if (websiteError) {
    return (
      <TranslationsProvider locales={loaderData.availableLanguages}
      currentLocale={loaderData.selectedLocale} translations={loaderData.translations}>
        <Error title={t("website_error")} description={t("wait_website_and_retry")} linkTitle={""} linkUrl={""} />
      </TranslationsProvider>
    )
  }

  return (
    <>
      <A11ySetup {...A11Y_VARIABLES}>
        <CustomTheme {...CUSTOM_THEME} />
        <Injection code={loaderData.headCodeInjection} position={"head"} />
        <Injection code={loaderData.bodyCodeInjection} position={"body"} />
        <TranslationsProvider
          translations={loaderData.translations}
          locales={loaderData.availableLanguages}
          currentLocale={loaderData.selectedLocale}>
          {/* <Toolbar
            path={path}
            currentContrastMode={loaderData.currentContrastMode}
            currentTextIncreaseAmount={loaderData.textIncreaseAmount}
            currentLocale={loaderData.websiteLocale}
            availableLocales={loaderData.availableLanguages}
            submit={submit} /> */}
          <AppLayout
            locale={loaderData.websiteLocale}
            logoUrl={loaderData.websiteLogoUrl}
            websiteTitle={loaderData.websiteTitle}
            navigation={loaderData.navigation}
            notification={loaderData.notification}
            mainLink={loaderData.mainLink}
            authors={loaderData.authors}
            links={loaderData.links}
            socials={loaderData.socials}
            mainItem={loaderData.mainItem}
            metadata={loaderData.metadata}>
            <Outlet />
          </AppLayout>
        </TranslationsProvider>
      </A11ySetup>
    </>
  )
}

export default function Index() {
  const loaderData = useLoaderData<LoaderData>();

  return (
    <IndexComponent
      loaderData={loaderData}
    ></IndexComponent>
  );
}
