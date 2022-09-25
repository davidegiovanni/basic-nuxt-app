import { LoaderFunction } from "@remix-run/node";
import { safeGet } from "~/utils/safe-post";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const origin = url.origin

  const [websiteRes, websiteErr] = await safeGet<any>(request, `https://cdn.revas.app/websites/v0/websites/illustrations.davidegiovanni.com?public_key=01exy3y9j9pdvyzhchkpj9vc5w`)
  if (websiteErr !== null) {
    throw new Error(`API website: ${websiteErr.message} ${websiteErr.code}`);
  }

  const locales: string[] = websiteRes.languageCodes

  const content = `
          <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/TR/xhtml11/xhtml11_schema.html http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/TR/xhtml11/xhtml11_schema.html">
          ${
            locales.map(l => `
            <url>
                <loc>${origin}/${l}</loc>
                <lastmod>2022-01-01T00:00:00+01:00</lastmod>
                ${ locales.length > 1 ? 
                  locales.map(al => 
                    al !== l ? `<xhtml:link rel="alternate" hreflang="${al}" href="${origin}/${al}"/>` : ''
                    ) : ''
                }
                <priority>1.0</priority>
            </url>
            `)
          } 
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