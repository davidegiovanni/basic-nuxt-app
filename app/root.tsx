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
  Link,
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
  useParams,
} from "@remix-run/react";

import tailwind from "./styles/tailwind.css"
import custom from "./styles/index.css"
import { loadTranslations, fallbackLocale, getMatchingLocale } from "./helpers/i18n";
import { fluidType } from "./utils/helpers";
import { safeGet } from "./utils/safe-post";
import { website } from "./api";
import { Website } from "./models";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: custom },
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
  favicon: string;
  fontUrl: string;
  fontFamily: string;
  canonical: string;
  mainColor: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const [webRes, webErr] = await website(request, params)
  if (webErr !== null) {
    throw new Response(`Page do not exist: ${webErr.message} ${webErr.code}`, {
      status: 404,
    });
  }

  const websiteObject: Website = webRes.website
  
  const favicon = websiteObject.theme.iconUrl
  const fontUrl = websiteObject.theme.fontFamilyUrl
  const fontFamily = websiteObject.theme.fontFamily

  const canonical = request.url
  const mainColor = websiteObject.theme.accentColor

  const loaderData: LoaderData = {
    favicon,
    fontUrl,
    fontFamily,
    canonical,
    mainColor
  }

  return json(loaderData)
};

export default function App() {
  const loaderData = useLoaderData<LoaderData>()
  const matches = useMatches()
  const params = useParams()

  const style = {
    "--customfont": loaderData.fontFamily,
    fontFamily: loaderData.fontFamily,
    backgroundColor: loaderData.mainColor
  }

  const allCanonicals = matches.map((match) => match.data)
    .filter((data) => Boolean(data.canonical))
    .map((data) => data.canonical);
  const canonical = allCanonicals[1]

  return (
    <html lang={params.lang}>
      <head>
      <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <link rel="canonical" href={canonical} />
        <link rel="icon" type="image/x-icon" href={loaderData.favicon} />
        <Links />
      </head>
      <body style={style}>
        <div className="fixed inset-0 overflow-hidden selection:bg-blue-300 selection:text-blue-900">
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

export function CatchBoundary() {

  return (
    <html lang={params.lang}>
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
            <Link to={'/'} className="block underline mb-4 text-white" reloadDocument>
              Go to homepage
            </Link>
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
            <p className="text-white my-4">
              {error.message} {error.stack}
            </p>
            <Link to={'/'} className="block underline mb-4 text-white" reloadDocument>
              Go to homepage
            </Link>
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