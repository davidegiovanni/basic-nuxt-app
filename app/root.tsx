import { cssBundleHref } from "@remix-run/css-bundle";
import { type LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

import DefaultTheme from "./services/template/default-theme";

import tailwind from "./styles/tailwind.css";
import defaultCss from "./default.css";

import RadixCss from '@radix-ui/themes/styles.css'
import { Theme } from "@radix-ui/themes";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  {
    rel: "stylesheet",
    href: tailwind,
  },
  {
    rel: "stylesheet",
    href: defaultCss,
  },
  {
    rel: "stylesheet",
    href: RadixCss,
  },
];

const DEFAULT_HTML_DOC_LANG = "it-IT"

export default function App() {
  return (
    <html lang={DEFAULT_HTML_DOC_LANG}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <DefaultTheme />
        <Theme className="flex-1 flex flex-col items-stretch justify-start">
          <Outlet />
        </Theme>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </body>
    </html>
  );
}
