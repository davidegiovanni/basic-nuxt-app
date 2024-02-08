import { redirect, json } from "@remix-run/node";
import type { LoaderFunctionArgs, LoaderFunction } from "@remix-run/node";
import type { RevasError } from "~/models";
import type { GetDefaultWebsiteFunction} from "~/services/api/websites";
import { asyncGetDefaultWebsite } from "~/services/api/websites";

import Error from "~/components/base/Website/Error";
import { useLoaderData } from "@remix-run/react";
import { headersDecoder } from "~/services/api/headers-decoder";
import { i18nCookie, type ParsedI18nCookie } from "~/cookies";

export type LoaderData = {
  error?: RevasError;
  errors?: {
    getWebsite?: boolean;
  }
}

type LoaderContainer = {
  websiteName: string;
  publicKey: string;
  i18nWebsiteCookie: ParsedI18nCookie;
  asyncGetDefaultWebsite?: GetDefaultWebsiteFunction;
};

export const newLoader = ({
  publicKey,
  websiteName,
  i18nWebsiteCookie,
  asyncGetDefaultWebsite
}: LoaderContainer) => {
  return async (args: LoaderFunctionArgs) => {
    const url = new URL(args.request.url);
    const searchParams = url.search
    let i18nParsedCookie: ParsedI18nCookie = i18nWebsiteCookie

    let loaderData: LoaderData = {}


    if (publicKey === "" || websiteName === "") {
      loaderData.error = {
        code: 0,
        message: "Headers are empty"
      }
      loaderData.errors = {
        getWebsite: true
      }
      return json(loaderData, {
        status: 500
      });
    }

    if (i18nParsedCookie.selectedLocale !== "") return redirect(`/${i18nParsedCookie.selectedLocale}${searchParams}`);

    let websiteLocale = ""
    if (asyncGetDefaultWebsite) {
      const [res, err] = await asyncGetDefaultWebsite({
        websiteName,
        publicKey
      })
      if (err) {
        loaderData.error = err
        loaderData.errors = {
          getWebsite: true
        }
        return json(loaderData, {
          status: err.code === 5 ? 404 : 500
        });
      }
      websiteLocale = res.website.languageCode
    }

    return redirect(`/${websiteLocale}${searchParams}`);
  }
}


export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
  const { publicKey, websiteName } = headersDecoder(args.request)
  
  const cookieHeader = args.request.headers.get("cookie") || "";
  const i18nCookieParsed = await i18nCookie(websiteName).parse(cookieHeader);
  let i18nWebsiteCookie: ParsedI18nCookie = {
    selectedLocale: ""
  };
  if (i18nCookieParsed !== null) {
    i18nWebsiteCookie = i18nCookieParsed;
  }

  return newLoader({
    publicKey,
    websiteName,
    i18nWebsiteCookie,
    asyncGetDefaultWebsite
  })(args);
};

type IndexProps = {
  loaderData: LoaderData;
};

export function IndexComponent({ loaderData }: IndexProps) {
  const websiteError = loaderData.error && loaderData.errors?.getWebsite

  if (websiteError) {
    return (
      <>
      <Error title={"Website loading error"} description={"The website did not load correctly. Wait a while and retry"} linkTitle={""} linkUrl={""} />
      </>
    )
  }

  return null
}


export default function Index() {
  const loaderData = useLoaderData<LoaderData>();

  return (
    <IndexComponent
      loaderData={loaderData}
    ></IndexComponent>
  );
}
