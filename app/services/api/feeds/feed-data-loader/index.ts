import { json, type LoaderFunctionArgs } from "@remix-run/node";
import type { Feed, FeedItemUI, RevasError } from "~/models";
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

  title: string;
  description: string;

  items: FeedItemUI[];

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
};

export const newLoader = ({
  asyncGetFeed,
  websiteName,
  publicKey,
  feedSlug
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
      items: [],
      metadata: {}
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
        publicKey,
        websiteName,
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

    loaderData.title = feed.title
    loaderData.description = feed.description

    loaderData.meta.title = feed.title
    loaderData.meta.description = feed.description

    loaderData.openGraphData.title = feed.title
    loaderData.openGraphData.description = feed.description

    loaderData.twitterMeta.title = feed.title
    loaderData.twitterMeta.description = feed.description

    if (feed.items && feed.items.length > 0) {
      loaderData.items = feed.items.map(item => {
        return {
          title: item.title,
          description: item.summary || "",
          attachmentUrl: item.image || "",
          attachmentCaption: "",
          attachmentMediaType: "image/*",
          attachmentDescription: item.title || "",
          attachmentMetadata: {},
          content: item.content_html || "",
          publishedOn: fromUTCDatetoLocaleDate(item.date_published || "", incomingLocale),
          url: postSlug(item.id, incomingLocale, feedSlug),
          metadata: {}
        }
      })
    }

    if (loaderData.items.length > 0) {
      const firstItemWithImage = loaderData.items.find(item => item.attachmentUrl !== "")
      if (firstItemWithImage) {
        loaderData.meta.imageUrl = firstItemWithImage.attachmentUrl
        loaderData.openGraphData.imageUrl = firstItemWithImage.attachmentUrl
        loaderData.twitterMeta.imageUrl = firstItemWithImage.attachmentUrl
      }
    }

    return json(loaderData,);
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

function postSlug(id: string, locale: string, feedSlug: string) {
  const url = new URL(id);
  const contentSlug = url.searchParams.get("content");
  return `/${locale}/-/${feedSlug}/${contentSlug}`;
}