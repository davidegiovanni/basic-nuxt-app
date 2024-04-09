import type { LoaderFunction } from "@remix-run/node";
import { asyncGetFeed } from "~/services/api/feeds";
import { headersDecoder } from "~/services/api/headers-decoder";

function getSlug (url: string) {
  let newUrl = new URL(url);
  let params = new URLSearchParams(newUrl.search);
  return params.get("content")
}


const ALL_PAGES = [
  {
    locale: "it-IT",
    pages: [],
    feeds: []
  }
]

const HOST = "www.davidegiovanni.com"

export const loader: LoaderFunction = async ({ request }) => {

  let pagesUrl: string[] = []

  async function processPages() {
    for (const page of ALL_PAGES) {
      pagesUrl.push(`https://${HOST}/${page.locale}`);
      
      if (page.pages.length > 0) {
        pagesUrl.push(...getAllPagesUrl(HOST, page.pages, page.locale));
      }
      
      if (page.feeds.length > 0) {
        const feedUrls = await getAllFeedsItemsUrl(request, HOST, page.feeds, page.locale);
        pagesUrl.push(...feedUrls);
      }
    }
  }

  await processPages();

  const content =
`
${pagesUrl.map(page =>
`${page}

`
).join("")
}

`.trim()

  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
};

// Helpers functions


function getAllPagesUrl(host: string, pages: string[], lang: string): string[] {
  const pagesUrl: string[] = []
  pages.map((page) => pagesUrl.push(`https://${host}/${lang}/${page}`))
  return pagesUrl
}

async function getAllFeedsItemsUrl(request: Request, host: string, feeds: { key: string; value: string; }[], lang: string): Promise<string[]> {
  const itemsUrl: string[] = []
  const websiteName = headersDecoder(request).websiteName
  const publicKey = headersDecoder(request).publicKey
  for (const feed of feeds) {
    const [feedRes, err] = await asyncGetFeed({
      websiteName, publicKey, feedSlug: feed.key
    })
    if (err) {
      itemsUrl.push(`https://${host}/${lang}/${feed.value}`)
    } else {
      const itemsSlugs: string[] = feedRes.feed.items.map(item => getSlug(item.id) as string)
      itemsUrl.push(...itemsSlugs.map(slug => `https://${host}/${lang}/${feed.value}/${slug}`))
    }
  }
  return itemsUrl
}