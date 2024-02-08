import { describe, expect, it } from "vitest";
import { newLoader } from "./index";

import type { Block, BlockItem, Page } from "~/models";

describe("loader", async () => {
  it("should call get page with right params", async () => {
    let getPageAssert = false
    let pageParam = ""
    let localeParam = ""

    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      pageSlug: "index",
      asyncGetPage: async ({ locale, pageSlug }) => {
        localeParam = locale
        pageParam = pageSlug
        getPageAssert = true
        return [
          {
            page: {
              blocks: [] as Block[]
            } as Page
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    await response.json()

    expect(getPageAssert).toBe(true)
    expect(localeParam).toBe("it-IT")
    expect(pageParam).toBe("index")
  });
  it("should throw 404 error when page is not found", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      pageSlug: "index",
      asyncGetPage: async () => {
        return [
          {
            page: {} as Page
          },
          {
            code: 5,
            message: "Error"
          }
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res = await response.json()

    expect(response.status).toBe(404)
    expect(res.errors?.getPage).toBe(false)
    expect(res.errors?.pageNotFound).toBe(true)
  });
  it("should throw 500 error when get page fails", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      pageSlug: "index",
      asyncGetPage: async () => {
        return [
          {
            page: {} as Page
          },
          {
            code: 4,
            message: "Error"
          }
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res = await response.json()

    expect(response.status).toBe(500)
    expect(res.errors?.getPage).toBe(true)
    expect(res.errors?.pageNotFound).toBe(false)
  });

  it("should return metadata when present", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      pageSlug: "index",
      asyncGetPage: async () => {
        return [
          {
            page: {
              title: "Page title",
              description: "Page description",
              imageUrl: "imageurl",

              openGraphTitle: "OG page title",
              openGraphDescription: "OG page description",
              openGraphImageUrl: "og-imageurl",

              twitterTitle: "Twitter page title",
              twitterDescription: "Twitter page description",
              twitterImageUrl: "twitter-imageurl",

              blocks: [] as Block[]
            } as Page
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res = await response.json()

    expect(res.meta).toStrictEqual({
      title: "Page title",
      description: "Page description",
      imageUrl: "imageurl"
    })
    expect(res.openGraphData).toStrictEqual({
      title: "OG page title",
      description: "OG page description",
      imageUrl: "og-imageurl"
    })
    expect(res.twitterMeta).toStrictEqual({
      title: "Twitter page title",
      description: "Twitter page description",
      imageUrl: "twitter-imageurl"
    })
  });

  it("should return blocks", async () => {
    const blockItem: BlockItem = {
      title: "Item title",
      description: "Item description",
      metadata: {
        "item-key": "value"
      },
      link: {
        title: "Link item title",
        url: "linkitemurl",
        metadata: {
          "link-item-key": "value"
        }
      },
      attachment: {
        description: "Image item description",
        caption: "Image item caption",
        mediaType: "image/*",
        url: "imageitemurl",
        metadata: {
          "image-item-key": "value"
        }
      },
    }
    const block: Block = {
      title: "Block title",
      description: "Block description",
      html: "htmlstring",
      blockLayout: "main",
      metadata: {
        "key": "value"
      },
      link: {
        title: "Link title",
        url: "linkurl",
        metadata: {
          "link-key": "value"
        }
      },
      attachment: {
        description: "Image description",
        caption: "Image caption",
        mediaType: "image/*",
        url: "imageurl",
        metadata: {
          "image-key": "value"
        }
      },
      itemsLayout: "linear",
      items: [
        {
          ...blockItem
        },
        {
          ...blockItem,
          attachment: null,
          link: null,
          metadata: {}
        }
      ]
    }
    const pageBlocks: Block[] = [
      {
        ...block
      },
      {
        ...block,
        link: null,
        attachment: null,
        metadata: {}
      }]
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      pageSlug: "index",
      asyncGetPage: async () => {
        return [
          {
            page: {
              blocks: pageBlocks as Block[]
            } as Page
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT"
      },
    });
    const res = await response.json()

    expect(res.blocks).toStrictEqual([
      {
        title: "Block title",
        description: "Block description",
        html: "htmlstring",
        blockLayout: "main",
        metadata: {
          "key": "value"
        },
        linkTitle: "Link title",
        linkUrl: "linkurl",
        linkMetadata: {
          "link-key": "value"
        },
        attachmentDescription: "Image description",
        attachmentCaption: "Image caption",
        attachmentMediaType: "image/*",
        attachmentUrl: "imageurl",
        attachmentMetadata: {
          "image-key": "value"
        },
        itemsLayout: "linear",
        items: [
          {
            title: "Item title",
            description: "Item description",
            metadata: {
              "item-key": "value"
            },
            linkTitle: "Link item title",
            linkUrl: "linkitemurl",
            linkMetadata: {
              "link-item-key": "value"
            },
            attachmentDescription: "Image item description",
            attachmentCaption: "Image item caption",
            attachmentMediaType: "image/*",
            attachmentUrl: "imageitemurl",
            attachmentMetadata: {
              "image-item-key": "value"
            }
          },
          {
            title: "Item title",
            description: "Item description",
            metadata: {},
            linkTitle: "",
            linkUrl: "",
            linkMetadata: {},
            attachmentDescription: "",
            attachmentCaption: "",
            attachmentMediaType: "image/*",
            attachmentUrl: "",
            attachmentMetadata: {}
          }
        ]
      },
      {
        title: "Block title",
        description: "Block description",
        html: "htmlstring",
        blockLayout: "main",
        metadata: {},
        linkTitle: "",
        linkUrl: "",
        linkMetadata: {},
        attachmentDescription: "",
        attachmentCaption: "",
        attachmentMediaType: "image/*",
        attachmentUrl: "",
        attachmentMetadata: {},
        itemsLayout: "linear",
        items: [
          {
            title: "Item title",
            description: "Item description",
            metadata: {
              "item-key": "value"
            },
            linkTitle: "Link item title",
            linkUrl: "linkitemurl",
            linkMetadata: {
              "link-item-key": "value"
            },
            attachmentDescription: "Image item description",
            attachmentCaption: "Image item caption",
            attachmentMediaType: "image/*",
            attachmentUrl: "imageitemurl",
            attachmentMetadata: {
              "image-item-key": "value"
            }
          },
          {
            title: "Item title",
            description: "Item description",
            metadata: {},
            linkTitle: "",
            linkUrl: "",
            linkMetadata: {},
            attachmentDescription: "",
            attachmentCaption: "",
            attachmentMediaType: "image/*",
            attachmentUrl: "",
            attachmentMetadata: {}
          }
        ]
      }
    ])
  });
})
