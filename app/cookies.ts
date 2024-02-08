import type { Cookie } from "@remix-run/node";
import { createCookie } from "@remix-run/node";

export type ParsedA11yCookie = {
  contrastMode: "high" | "default" | string;
  textIncreaseAmount: "default" | "50" | "100" | "200" | string;
};

export const a11yCookie = (websiteName: string): Cookie => {
  return createCookie(
    `${websiteName}/a11y`,
    {
      path: "/",
      sameSite: "lax",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400,
    }
  )
}

export type ParsedI18nCookie = {
  selectedLocale: string;
};

export const i18nCookie = (websiteName: string): Cookie => {
  return createCookie(
    `${websiteName}/i18n`,
    {
      path: "/",
      sameSite: "lax",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400,
    }
  )
}