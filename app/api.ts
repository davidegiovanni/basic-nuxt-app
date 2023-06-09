import { Params } from "@remix-run/react";
import { safeGet } from "./utils/safe-get";

let websiteName = "davidegiovanni.com";
let publicKey = "01exy3y9j9pdvyzhchkpj9vc5w";

export const website = async (
  request: Request,
  params: Params<string>,
  locale?: string
) => {
  const languageCode = locale !== undefined ? locale : params.lang || "";

  const [res, err] = await safeGet<any>(
    `https://cdn.revas.app/websites/v1/websites/${websiteName}?public_key=${publicKey}&language_code=${languageCode}`
  );
  const data = res;
  return [data, err];
};

export const page = async (page: string, params: Params<string>) => {
  const [res, err] = await safeGet<any>(
    `https://cdn.revas.app/websites/v1/websites/${websiteName}/pages/${
      page
    }?public_key=${publicKey}&language_code=${params.lang}`
  );
  const data = await res;
  return [data, err];
};

export const feed = async (feedName: string, params: Params<string>) => {
  const [res, err] = await safeGet<any>(
    `https://cdn.revas.app/contents/v0/directories/${feedName}/feed.json?public_key=${publicKey}`
  );
  const data = await res;
  return [data, err];
};
