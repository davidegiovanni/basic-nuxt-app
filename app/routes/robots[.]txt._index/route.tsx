import { LoaderFunction } from "@remix-run/node";

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

  const robotText = `
    User-agent: *
    Allow: /

    Sitemap: https://${websiteName}/sitemap.xml
    `
  // return the text content, a status 200 success response, and set the content type to text/plain 
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    }
  });
};