import { json, type LoaderFunctionArgs } from "@remix-run/node";
import type { BlockItemUI, BlockUI, Page, RevasError } from "~/models";
import type { GetPageFunction } from "~/services/api/pages";

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

  blocks: BlockUI[];

  metadata: Record<string, string>

  error?: RevasError;
  errors?: {
    pageNotFound?: boolean;
    getPage?: boolean;
  }
}

type LoaderContainer = {
  asyncGetPage?: GetPageFunction;
  websiteName: string;
  publicKey: string;
  pageSlug: string;
};

export const newLoader = ({
  asyncGetPage,
  websiteName,
  publicKey,
  pageSlug
}: LoaderContainer) => {
  return async (args: LoaderFunctionArgs) => {
    const url = new URL(args.request.url);
    let incomingLocale = args.params.locale || ""
    if (args.params.locale === "it") incomingLocale = "it-IT"
    if (args.params.locale === "en") incomingLocale = "en-US"
    const pathname = url.pathname

    let canonicalUrl =`https://${websiteName}${pathname}`

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
      blocks: [],
      metadata: {}
    }

    if (websiteName === "" || publicKey === "") {
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

    let page = {} as Page
    if (asyncGetPage) {
      const [res, err] = await asyncGetPage({
        websiteName,
        publicKey,
        locale: incomingLocale,
        pageSlug
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
      page = res.page
    }

    loaderData.meta.title = page.title
    loaderData.meta.description = page.description
    loaderData.meta.imageUrl = page.imageUrl

    loaderData.openGraphData.title = page.openGraphTitle
    loaderData.openGraphData.description = page.openGraphDescription
    loaderData.openGraphData.imageUrl = page.openGraphImageUrl

    loaderData.twitterMeta.title = page.twitterTitle
    loaderData.twitterMeta.description = page.twitterDescription
    loaderData.twitterMeta.imageUrl = page.twitterImageUrl

    loaderData.metadata = page.metadata

    if (page.blocks.length > 0) {
      loaderData.blocks = page.blocks.map(block => {
        let blockUI: BlockUI = {
          html: block.html,
          blockLayout: block.blockLayout,
          title: block.title,
          description: block.description,
          linkTitle: "",
          linkUrl: "",
          linkMetadata: {},
  
          attachmentMediaType: "image/*",
          attachmentUrl: "",
          attachmentDescription: "",
          attachmentCaption: "",
          attachmentMetadata: {},
  
          itemsLayout: block.itemsLayout,
          items: [],
          metadata: block.metadata
        }
  
        if (block.link) {
          blockUI.linkTitle = block.link.title
          blockUI.linkUrl = block.link.url
          blockUI.linkMetadata = block.link.metadata
        }
  
        if (block.attachment) {
          blockUI.attachmentCaption = block.attachment.caption
          blockUI.attachmentDescription = block.attachment.description
          blockUI.attachmentUrl = block.attachment.url
          blockUI.attachmentMediaType = block.attachment.mediaType
          blockUI.attachmentMetadata = block.attachment.metadata
        }
  
        if (block.items.length > 0) {
          blockUI.items = block.items.map((item) => {
            let blockItemUI: BlockItemUI = {
              title: item.title,
              description: item.description,
              linkTitle: "",
              linkUrl: "",
              linkMetadata: {},
              attachmentMediaType: "image/*",
              attachmentUrl: "",
              attachmentDescription: "",
              attachmentCaption: "",
              attachmentMetadata: {},
              metadata: item.metadata
            }
  
            if (item.link) {
              blockItemUI.linkTitle = item.link.title
              blockItemUI.linkUrl = item.link.url
              blockItemUI.linkMetadata = item.link.metadata
            }
      
            if (item.attachment) {
              blockItemUI.attachmentCaption = item.attachment.caption
              blockItemUI.attachmentDescription = item.attachment.description
              blockItemUI.attachmentUrl = item.attachment.url
              blockItemUI.attachmentMediaType = item.attachment.mediaType
              blockItemUI.attachmentMetadata = item.attachment.metadata
            }
  
            return blockItemUI
          })
        }
  
        return blockUI
      })
    }

    return json(loaderData,);
  }
}