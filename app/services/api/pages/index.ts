import { type RevasError, type Page, pageValidator } from "~/models";
import { safeGet } from "~/services/api/safe-get";

type GetPageArgs = {
  websiteName: string;
  publicKey: string;
  pageSlug: string;
  locale: string
};

export type GetPageFunction = {
  (args: GetPageArgs): Promise<
    [
      {
        page: Page;
      },
      RevasError?,
    ]
  >;
};

export const asyncGetPage: GetPageFunction = async ({websiteName, publicKey, pageSlug, locale}: GetPageArgs) => {
  const [res, err] = await safeGet<any>(
    `https://revas-os-web-proxy-webcdn-cz23hhnfha-lz.a.run.app/themes/websites/v2/websites/${websiteName}/pages/${pageSlug}?publicKey=${publicKey}&languageCode=${locale}`,
  );

  if (err !== null) {
    return [
      {
        page: {} as Page
      },
      err
    ]
  }
  const parsedResult = pageValidator(res.page);
  if (!parsedResult.success) {
    return [
      {
        page: {} as Page
      },
      {
        message: "invalid_page_data_schema_from_api",
        code: 0,
      },
    ];
  }

  return [
    {
      page: res.page
    }
  ];
};
