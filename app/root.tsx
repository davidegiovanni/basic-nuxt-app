import { useEffect, useState } from "react";
import {
  createCookie,
  ErrorBoundaryComponent,
  json,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
  useMatches,
} from "@remix-run/react";

import tailwind from "./styles/tailwind.css"
import { loadTranslations, fallbackLocale, getMatchingLocale } from "./helpers/i18n";
import { fluidType } from "./utils/helpers";
import { safeGet } from "./utils/safe-post";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: 'https://use.typekit.net/ert5ehm.css' },
    { rel: "stylesheet", href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300;1,400&display=swap' },
    { rel: "preconnect", href: 'https://fonts.googleapis.com' },
    { rel: "preconnect", href: 'https://fonts.gstatic.com'}
  ];
};

export const meta: MetaFunction = ({data}) => {
  let theme = ''
  if (data !== undefined) {
    theme = data.primary
  }
  return {
    'theme-color': '#ffffff',
    'twitter:card': 'summary_large_image'
  };
};

const i18nKeys = [] as const;
type I18nKeys = typeof i18nKeys[number];

type LoaderData = {
  i18n: Record<any, any>;
  primary: string;
  favicon: string;
  incomingLocale: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const incomingLocale = params.lang || ""
  let url = new URL(request.url)
  const host = url.host.includes('localhost') ? 'davidegiovanni.com' : url.host

  if (incomingLocale === "") {
    const [defaultWebsiteRes, defaultWebsiteErr] = await safeGet<any>(request, `https://cdn.revas.app/websites/v0/websites/${host}?public_key=01exy3y9j9pdvyzhchkpj9vc5w`)
    if (defaultWebsiteErr !== null) {
      throw new Error(`API website: ${defaultWebsiteErr.message} ${defaultWebsiteErr.code}`);
    }
    const defaultLocale = defaultWebsiteRes.website.languageCode
    return redirect(`/${defaultLocale}`)
  }

  const [initialWebsiteRes, initialWebsiteErr] = await safeGet<any>(request, `https://cdn.revas.app/websites/v0/websites/${host}?public_key=01exy3y9j9pdvyzhchkpj9vc5w&language_code=${incomingLocale}`)
    if (initialWebsiteErr !== null) {
      const [defaultWebsiteRes, defaultWebsiteErr] = await safeGet<any>(request, `https://cdn.revas.app/websites/v0/websites/${host}?public_key=01exy3y9j9pdvyzhchkpj9vc5w`)
      if (defaultWebsiteErr !== null) {
        throw new Error(`API website: ${defaultWebsiteErr.message} ${defaultWebsiteErr.code}`);
      }
      const defaultLocale = defaultWebsiteRes.website.languageCode
      return redirect(`/${defaultLocale}`)
    }
  
    const primary: string = initialWebsiteRes.website.theme.primaryColor
    const favicon: string = initialWebsiteRes.website.theme.faviconUrl
  
    const i18n = loadTranslations<I18nKeys>(incomingLocale, i18nKeys);
  
    const loaderData: LoaderData = {
      i18n,
      primary,
      favicon,
      incomingLocale
    }

  return json(loaderData)
};

export default function App() {
  const matches = useMatches();
  const match = matches.find((match) => match.data && match.data.canonical);
  const canonical = match?.data.canonical;
  const alternates = match?.data.alternates;
  const loaderData = useLoaderData<LoaderData>()

  const favicon = loaderData.favicon || ""

  return (
    <html lang={loaderData.incomingLocale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        {!!canonical && <link rel="canonical" href={canonical} />}
        {!!favicon && <link rel="icon" type="image/x-icon" href={favicon}></link>}
        <Links />
      </head>
      <body>
        <div className="fixed inset-0 overflow-hidden selection:bg-[#C1FF11] selection:text-[red]">
          <div className="w-full h-full overflow-hidden">
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function CatchBoundary({ error }: { error: Error }) {
  const catchError = useCatch()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>(Ｔ▽Ｔ)</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="fixed inset-0 overflow-hidden bg-[#0827F5] text-white p-2 selection:bg-white selection:text-white">
          <div className="w-full h-full overflow-hidden safari-only">
            <h1 style={{ fontSize: fluidType(32, 120, 300, 2400, 1.5).fontSize, lineHeight: fluidType(24, 100, 300, 2400, 1.5).lineHeight }}>
              Error ಥ_ಥ
            </h1>
            <p className="text-white my-4">
              {catchError ? catchError.statusText : error.message} ((({catchError ? catchError.status : error.stack})))
            </p>
            <img src="https://c.tenor.com/1zi9Ppr4YDsAAAAj/travolta-lost.gif" alt="" />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>(Ｔ▽Ｔ)</title>
        <Meta />
        <Links />
      </head>
      <body>
      <div className="fixed inset-0 overflow-hidden bg-[#0827F5] text-white p-2 selection:bg-yellow-500 selection:text-white">
          <div className="w-full h-full overflow-hidden safari-only">
            <h1 style={{ fontSize: fluidType(32, 120, 300, 2400, 1.5).fontSize, lineHeight: fluidType(24, 100, 300, 2400, 1.5).lineHeight }}>
              Error ಥ_ಥ
            </h1>
            <p className="text-white mt-4">
              {error.message} {error.stack}
            </p>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}