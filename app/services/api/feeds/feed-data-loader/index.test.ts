import { describe, expect, it } from "vitest";
import { newLoader } from "./index";

import type { Feed, FeedItem } from "~/models";

describe("loader", async () => {
  it("should call get feed with right params", async () => {
    let getFeedAssert = false
    let feedParam = ""

    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      feedSlug: "feed-slug",
      asyncGetFeed: async ({ feedSlug }) => {
        getFeedAssert = true
        feedParam = feedSlug
        return [
          {
            feed: {
              title: "Feed title",
              description: "Feed description",
              items: [] as FeedItem[]
            } as Feed
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT",
        feed: "feed-slug"
      },
    });
    await response.json()

    expect(getFeedAssert).toBe(true)
    expect(feedParam).toBe("feed-slug")
  });
  it("should throw 404 error when feed is not found", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      feedSlug: "feed-slug",
      asyncGetFeed: async () => {
        return [
          {
            feed: {} as Feed
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
        locale: "it-IT",
        feed: "feed-slug"
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
      feedSlug: "feed-slug",
      asyncGetFeed: async () => {
        return [
          {
            feed: {} as Feed
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
        locale: "it-IT",
        feed: "feed-slug"
      },
    });
    const res = await response.json()

    expect(response.status).toBe(500)
    expect(res.errors?.getPage).toBe(true)
    expect(res.errors?.pageNotFound).toBe(false)
  });

  it("should return items", async () => {
    const feedItem: FeedItem = {
      title: "Item title",
      id: "http://example.com?content=123/abc"
    }
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      feedSlug: "feed-slug",
      asyncGetFeed: async () => {
        return [
          {
            feed: {
              title: "Feed title",
              description: "Feed description",
              items: [
                {
                  ...feedItem
                },
                {
                  ...feedItem,
                  summary: "Item description",
                  image: "feeditemimage",
                  content_html: "htmlcontent",
                  date_published: "2023-01-01T00:00:00Z"
                }
              ] as FeedItem[]
            } as Feed
          },
        ]
      }
    });

    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {
        locale: "it-IT",
        feed: "feed-slug"
      },
    });
    const res = await response.json()

    expect(res.title).toBe("Feed title")
    expect(res.description).toBe("Feed description")

    expect(res.items).toStrictEqual([
      {
        title: "Item title",
        description: "",
        attachmentUrl: "",
        attachmentMediaType: "image/*",
        attachmentDescription: "Item title",
        attachmentCaption: "",
        attachmentMetadata: {},
        content: "",
        publishedOn: "",
        url: "/it-IT/-/feed-slug/123/abc",
        metadata: {}
      },
      {
        title: "Item title",
        description: "Item description",
        attachmentUrl: "feeditemimage",
        attachmentMediaType: "image/*",
        attachmentDescription: "Item title",
        attachmentCaption: "",
        attachmentMetadata: {},
        content: "htmlcontent",
        publishedOn: "domenica 1 gennaio 2023",
        url: "/it-IT/-/feed-slug/123/abc",
        metadata: {}
      }
    ])
  });
  it("should return metadata", async () => {
    const feedItem: FeedItem = {
      title: "Item title",
      id: "http://example.com?content=123/abc"
    }
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      feedSlug: "feed-slug",
      asyncGetFeed: async () => {
        return [
          {
            feed: {
              title: "Feed title",
              description: "Feed description",
              items: [
                {
                  ...feedItem
                },
                {
                  ...feedItem,
                  summary: "Item description",
                  image: "feeditemimage",
                  content_html: "htmlcontent",
                  date_published: "2023-01-01T00:00:00Z"
                }
              ] as FeedItem[]
            } as Feed
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
      title: "Feed title",
      description: "Feed description",
      imageUrl: "feeditemimage"
    })
    expect(res.openGraphData).toStrictEqual({
      title: "Feed title",
      description: "Feed description",
      imageUrl: "feeditemimage"
    })
    expect(res.twitterMeta).toStrictEqual({
      title: "Feed title",
      description: "Feed description",
      imageUrl: "feeditemimage"
    })
  });
})
