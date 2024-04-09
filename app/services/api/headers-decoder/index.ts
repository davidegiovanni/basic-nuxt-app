export const headersDecoder = (request: Request) => {
  return {
    websiteName: request.headers.get("Revas-Authority") || process.env.REVAS_OS_WEB_UI_WEBSITE_NAME || "01hthtabz9yeg4najke51kqz78",
    publicKey: request.headers.get("Revas-Public-Key") || process.env.REVAS_OS_WEB_UI_PUBLIC_KEY || "01exy3y9j9pdvyzhchkpj9vc5w",
  };
};
