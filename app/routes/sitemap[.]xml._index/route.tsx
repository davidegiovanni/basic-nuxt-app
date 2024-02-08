import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request, params }) => {
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

const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/TR/xhtml11/xhtml11_schema.html http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/TR/xhtml11/xhtml11_schema.html">
  <url>
    <loc>https://${websiteName}/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
`.trim()

  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      "encoding": "UTF-8"
    }
  });
};