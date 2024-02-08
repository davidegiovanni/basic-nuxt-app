import { type RevasError, type Feed, feedValidator } from "~/models";
import { safeGet } from "~/services/api/safe-get";

type GetFeedArgs = {
  websiteName: string;
  publicKey: string;
  feedSlug: string;
};

export type GetFeedFunction = {
  (args: GetFeedArgs): Promise<
    [
      {
        feed: Feed;
      },
      RevasError?,
    ]
  >;
};

export const asyncGetFeed: GetFeedFunction = async ({websiteName, publicKey, feedSlug}: GetFeedArgs) => {

  const [res, err] = await safeGet<any>(
    `https://revas-os-web-proxy-webcdn-cz23hhnfha-lz.a.run.app/contents/v0/directories/${feedSlug}/feed.json?publicKey=${publicKey}`,
  );

  if (err !== null) {
    return [
      {
        feed: {} as Feed
      },
      err
    ]
  }
  const parsedResult = feedValidator(res);
  if (!parsedResult.success) {
    return [
      {
        feed: {} as Feed
      },
      {
        message: "invalid_feed_data_schema_from_api",
        code: 0,
      },
    ];
  }

  return [
    {
      feed: res
    }
  ];
};
