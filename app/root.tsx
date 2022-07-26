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

const i18nKeys = ["shared"] as const;
type I18nKeys = typeof i18nKeys[number];

type LoaderData = {
  i18n: Record<any, any>;
  primary: string;
  favicon: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  let incomingLocale: string | undefined = params.lang === undefined ? fallbackLocale : params.lang
  let url = new URL(request.url)

  const pathname = url.pathname.replace(`/${incomingLocale}`, '')

  const matchingLocale = getMatchingLocale(request, incomingLocale)

  if (matchingLocale === undefined) {
    return redirect(`/it-it${pathname}`)
  }
  if (pathname === "/") {
    return redirect(`/${fallbackLocale}`)
  }
  if (incomingLocale !== 'it-it' && incomingLocale !== 'en-us') {
    return redirect(`/${fallbackLocale}${url.pathname}`)
  }
  const cookie = createCookie("careers.auctory.io_i18n_cookie_preferences", {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
  });
  const cookieHeader = request.headers.get("cookie");
  let i18nCookie = {
    lang: matchingLocale.toLowerCase()
  }
  let languageCookie = await cookie.parse(cookieHeader);
  if (languageCookie === undefined) {
    return redirect(`/${matchingLocale.toLowerCase()}${url.pathname}`, {
      headers: {
        "Set-Cookie": await cookie.serialize(i18nCookie),
      },
    });
  }

  const [websiteRes, websiteErr] = await safeGet<any>(request, `https://cdn.revas.app/websites/v0/websites/illustrations.davidegiovanni.com?public_key=01exy3y9j9pdvyzhchkpj9vc5w&language_code=it-IT`)
  if (websiteErr !== null) {
    throw new Error(`API website: ${websiteErr.message} ${websiteErr.code}`);
  }

  const primary: string = websiteRes.website.theme.primaryColor
  const favicon: string = websiteRes.website.theme.faviconUrl

  const i18n = loadTranslations<I18nKeys>(incomingLocale, i18nKeys);

  const loaderData: LoaderData = {
    i18n,
    primary,
    favicon
  }

  return json(loaderData, {
    headers: {
      "Set-Cookie": await cookie.serialize(languageCookie),
    },
  })
};

export default function App() {
  const matches = useMatches();
  const match = matches.find((match) => match.data && match.data.canonical);
  const canonical = match?.data.canonical;
  const alternates = match?.data.alternates;
  const loaderData = useLoaderData<LoaderData>()

  const favicon = loaderData.favicon || ""

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        {!!canonical && <link rel="canonical" href={canonical} />}
        {!!favicon && <link rel="icon" type="image/x-icon" href={favicon}></link>}
        <Links />
      </head>
      <body>
        <div className="fixed inset-0 overflow-hidden selection:bg-gray-300 selection:text-gray-900">
          <div className="w-full h-full overflow-hidden safari-only">
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

export function CatchBoundary() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Website error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="fixed inset-0 overflow-hidden bg-black p-2 selection:bg-gray-300 selection:text-gray-900">
          <div className="w-full h-full overflow-hidden safari-only">
            <div className="w-full h-full bg-white flex flex-col">
            <div className="w-full flex-1 flex items-center justify-center p-4 max-w-screen-md mx-auto text-center">
              <div>
                <h2 className="uppercase text-center" style={{ fontSize: fluidType(32, 120, 300, 2400, 1.5).fontSize, lineHeight: fluidType(24, 100, 300, 2400, 1.5).lineHeight }}>
                  The website didn't load correctly
                </h2>
                <p>
                  Wait a while and then refresh the page
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-t from-red-600 to-white h-full flex flex-col items-center justify-end pt-8 group" />
            </div>
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
        <title>Website error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="fixed inset-0 overflow-hidden bg-black p-2 selection:bg-gray-300 selection:text-gray-900">
          <div className="w-full h-full overflow-hidden safari-only">
            <div className="w-full h-full bg-white flex flex-col">
            <div className="w-full flex-1 flex items-center justify-center p-4 max-w-screen-md mx-auto text-center">
              <div>
                <h2 className="uppercase text-center" style={{ fontSize: fluidType(32, 120, 300, 2400, 1.5).fontSize, lineHeight: fluidType(24, 100, 300, 2400, 1.5).lineHeight }}>
                  The website didn't load correctly
                </h2>
                <p>
                  Wait a while and then refresh the page.
                </p>
                <p className="text-xs opacity-50 mt-2 text-left">
                  Details: {error.message} {error.stack}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-t from-red-600 via-red-500 to-white h-full flex flex-col items-center justify-end pt-8 group" />
            </div>
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