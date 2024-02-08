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
      itemSlug: "abcdefg",
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
      itemSlug: "abcdefg",
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
      itemSlug: "abcdefg",
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

  it("should return content matching slug", async () => {
    const feedItem: FeedItem = {
      title: "Item title",
      id: "https://example.com?content=abcdefg",
    }
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      feedSlug: "feed-slug",
      itemSlug: "abcdefg",
      asyncGetFeed: async () => {
        return [
          {
            feed: {
              title: "Feed title",
              description: "Feed description",
              items: [
                {
                  ...feedItem,
                  id: "https://example.com?content=123/123-abc",
                },
                {
                  ...feedItem,
                  title: "Feed item 2",
                  id: "https://example.com?content=abcdefg",
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

    expect(res.title).toBe("Feed item 2")
    expect(res.description).toBe("Item description")

    expect(res.attachmentUrl).toBe("feeditemimage")
    expect(res.attachmentMediaType).toBe("image/*")
    expect(res.attachmentDescription).toBe("Feed item 2")
    expect(res.attachmentCaption).toBe("")
    expect(res.attachmentMetadata).toStrictEqual({})

    expect(res.content).toBe("htmlcontent")
    expect(res.publishedOn).toBe("domenica 1 gennaio 2023")

    expect(res.metadata).toStrictEqual({})
  });
  it("should return 404 when no matching slug is found", async () => {
    const feedItem: FeedItem = {
      title: "Item title",
      id: "https://example.com?content=1",
    }
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      feedSlug: "feed-slug",
      itemSlug: "0123",
      asyncGetFeed: async () => {
        return [
          {
            feed: {
              title: "Feed title",
              description: "Feed description",
              items: [
                {
                  ...feedItem,
                  url: "123/123"
                },
                {
                  ...feedItem,
                  title: "Feed item 2",
                  id: "https://example.com?content=abcdefg",
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

    expect(response.status).toBe(404)
    expect(res.errors?.pageNotFound).toBe(true)
  });
  it("should return metadata", async () => {
    const feedItem: FeedItem = {
      title: "Item title",
      id: "https://example.com?content=abcdefg",
    }
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      feedSlug: "feed-slug",
      itemSlug: "abcdefg",
      asyncGetFeed: async () => {
        return [
          {
            feed: {
              title: "Feed title",
              description: "Feed description",
              items: [
                {
                  ...feedItem,
                  id: "https://example.com?content=1",
                },
                {
                  ...feedItem,
                  title: "Feed item 2",
                  id: "https://example.com?content=abcdefg",
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
      title: "Feed item 2",
      description: "Item description",
      imageUrl: "feeditemimage"
    })
    expect(res.openGraphData).toStrictEqual({
      title: "Feed item 2",
      description: "Item description",
      imageUrl: "feeditemimage"
    })
    expect(res.twitterMeta).toStrictEqual({
      title: "Feed item 2",
      description: "Item description",
      imageUrl: "feeditemimage"
    })
  });
})
