import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ request }) => {
  const url = request.url
  const origin = new URL(url).host

  let websiteName = origin;

  if (process.env.REVAS_OS_WEB_UI_PUBLIC_KEY) {
    websiteName = process.env.REVAS_OS_WEB_UI_WEBSITE_NAME || "";
  }

  const headerWebsiteName = request.headers.get("Revas-Public-Key");
  if (headerWebsiteName) {
    websiteName = request.headers.get("Revas-Authority") || "";
  }

  // GET /websites/v2/website/websiteId/sitemap.json?publicKey=languageCode=&template=https://www.example.com/{locale}/{page}

  return websiteName
};