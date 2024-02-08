import { websiteValidator, type RevasError, type Website } from "~/models";
import { safeGet } from "~/services/api/safe-get";

type GetDefaultWebsiteArgs = {
  websiteName: string;
  publicKey: string;
};

export type GetDefaultWebsiteFunction = {
  (args: GetDefaultWebsiteArgs): Promise<
    [
      {
        website: Website;
      },
      RevasError?,
    ]
  >;
};

export const asyncGetDefaultWebsite: GetDefaultWebsiteFunction = async ({ websiteName, publicKey }: GetDefaultWebsiteArgs) => {
  const [res, err] = await safeGet<any>(
    `https://revas-os-web-proxy-webcdn-cz23hhnfha-lz.a.run.app/websites/v2/websites/${websiteName}?publicKey=${publicKey}`,
  );
  if (err !== null) {
    return [
      {
        website: {} as Website
      },
      err
    ]
  }

  const parsedResult = websiteValidator(res.website);
  if (!parsedResult.success) {
    return [
      {
        website: {} as Website
      },
      {
        message: "invalid_data_schema_from_api",
        code: 0,
      },
    ];
  }

  return [
    {
      website: res.website
    }
  ];
};

type GetWebsiteArgs = {
  websiteName: string;
  publicKey: string;
  locale: string
};

export type GetWebsiteFunction = {
  (args: GetWebsiteArgs): Promise<
    [
      {
        website: Website;
      },
      RevasError?,
    ]
  >;
};

export const asyncGetWebsite: GetWebsiteFunction = async ({websiteName, publicKey, locale}: GetWebsiteArgs) => {
  const [res, err] = await safeGet<any>(
    `https://revas-os-web-proxy-webcdn-cz23hhnfha-lz.a.run.app/websites/v2/websites/${websiteName}?publicKey=${publicKey}&languageCode=${locale}`,
  );
  if (err !== null) {
    return [
      {
        website: {} as Website
      },
      err
    ]
  }
  const parsedResult = websiteValidator(res.website);
  if (!parsedResult.success) {
    return [
      {
        website: {} as Website
      },
      {
        message: "invalid_data_schema_from_api",
        code: 0,
      },
    ];
  }

  return [
    {
      website: res.website
    }
  ];
};
