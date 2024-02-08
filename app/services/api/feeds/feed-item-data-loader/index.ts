import { json, type LoaderFunctionArgs } from "@remix-run/node";
import type { Feed, FeedItem, RevasError } from "~/models";
import type { GetFeedFunction } from "~/services/api/feeds";

export type LoaderData = {
  meta: {
    title: string;
    description: string;
    imageUrl: string;
  },
  openGraphData: {
    title: string;
    description: string;
    imageUrl: string;
  },
  twitterMeta: {
    title: string;
    description: string;
    imageUrl: string;
  },

  canonicalUrl: string;

  feedTitle: string;
  feedPath: string;

  title: string;
  description: string;

  attachmentUrl: string;
  attachmentMediaType: string;
  attachmentDescription: string;
  attachmentCaption: string;
  attachmentMetadata: Record<string,string>;

  content: string;
  publishedOn: string;

  metadata: Record<string, string>

  error?: RevasError;
  errors?: {
    pageNotFound?: boolean;
    getPage?: boolean;
  }
}

type LoaderContainer = {
  asyncGetFeed?: GetFeedFunction;
  websiteName: string;
  publicKey: string;
  feedSlug: string;
  itemSlug: string;
};

export const newLoader = ({
  asyncGetFeed,
  websiteName,
  publicKey,
  feedSlug,
  itemSlug
}: LoaderContainer) => {
  return async (args: LoaderFunctionArgs) => {
    const url = new URL(args.request.url);
    const pathname = url.pathname
    let incomingLocale = args.params.locale as string
    if (args.params.locale === "it") incomingLocale = "it-IT"
    if (args.params.locale === "en") incomingLocale = "en-US"

    let canonicalUrl = `https://${websiteName}${pathname}`

    let loaderData: LoaderData = {
      meta: {
        title: "",
        description: "",
        imageUrl: ""
      },
      openGraphData: {
        title: "",
        description: "",
        imageUrl: ""
      },
      twitterMeta: {
        title: "",
        description: "",
        imageUrl: ""
      },
      canonicalUrl,
      title: "",
      description: "",
      metadata: {},

      feedTitle: "",
      feedPath: "",

      attachmentUrl: "",
      attachmentMediaType: "image/*",
      attachmentDescription: "",
      attachmentCaption: "",
      attachmentMetadata: {},

      content: "",
      publishedOn: ""
    }

    if (websiteName === "" || publicKey === "" ) {
      loaderData.error = {
        code: 0,
        message: "Headers are empty"
      }
      loaderData.errors = {
        getPage: true
      }
      return json(loaderData, {
        status: 500
      });
    }

    let feed = {} as Feed
    if (asyncGetFeed) {
      const [res, err] = await asyncGetFeed({
        websiteName,
        publicKey,
        feedSlug
      })
      if (err) {
        loaderData.error = err
        loaderData.errors = {
          getPage: err.code !== 5,
          pageNotFound: err.code === 5
        }
        return json(loaderData, {
          status: err.code === 5 ? 404 : 500
        });
      }
      feed = res.feed
    }

    loaderData.feedTitle = feed.title
    loaderData.feedPath = `/${incomingLocale}/-/${feedSlug}`

    const item: FeedItem | undefined = feed.items.find(item => item.id.endsWith(itemSlug))
    if (!item) {
      loaderData.errors = {
        pageNotFound: true
      }
      return json(loaderData, {
        status: 404
      });
    }
    loaderData.title = item.title
    loaderData.description = item.summary || ""
    if (item.image) {
      loaderData.attachmentUrl = item.image
      loaderData.attachmentMediaType = "image/*"
      loaderData.attachmentDescription = item.title || ""
      loaderData.attachmentCaption = ""
      loaderData.attachmentMetadata = {}
    }
    loaderData.content = item.content_html || ""
    loaderData.publishedOn = fromUTCDatetoLocaleDate(item.date_published || "", incomingLocale)

    loaderData.meta.title = item.title
    loaderData.meta.description = item.summary || ""
    loaderData.meta.imageUrl = item.image || ""

    loaderData.openGraphData.title = item.title
    loaderData.openGraphData.description = item.summary || ""
    loaderData.openGraphData.imageUrl = item.image || ""

    loaderData.twitterMeta.title = item.title
    loaderData.twitterMeta.description = item.summary || ""
    loaderData.twitterMeta.imageUrl = item.image || ""

    return json(loaderData);
  }
}

function fromUTCDatetoLocaleDate(date: string, locale: string): string {
  if (date === "") return date
  
  const convertedDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat(
    locale,
    { dateStyle: "full" }
  ).format(convertedDate);
  return formattedDate;
}