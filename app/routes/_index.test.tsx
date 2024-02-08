import { describe, expect, it } from "vitest";
import type { LoaderData} from "./_index";
import { IndexComponent, newLoader } from "./_index";
import type { Website } from "~/models";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { render, screen } from "@testing-library/react";

describe("loader", async () => {
  it("should redirect to default language", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: "" },
      asyncGetDefaultWebsite: async () => {
        return [
          {
            website: {
              languageCode: "en-US"
            } as Website,
            languageCodes: ["it-IT"]
          }
        ]
      }
    })
    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });

    expect(response.headers.get("location")).toBe("/en-US")
  });
  it("should redirect to cookies selected language", async () => {
    let getWebsiteAssert = false
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: "fr-FR" },
      asyncGetDefaultWebsite: async () => {
        getWebsiteAssert = true
        return [
          {
            website: {
              languageCode: "en-US"
            } as Website,
            languageCodes: ["it-IT"]
          }
        ]
      }
    })
    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });

    expect(response.headers.get("location")).toBe("/fr-FR")
    expect(getWebsiteAssert).toBe(false)
  });
  it("should keep params on redirect", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: "" },
      asyncGetDefaultWebsite: async () => {
        return [
          {
            website: {
              languageCode: "en-US"
            } as Website,
            languageCodes: ["it-IT"]
          }
        ]
      }
    })
    const response = await loader({
      request: new Request("https://www.example.com?some=params"),
      context: {},
      params: {},
    });

    expect(response.headers.get("location")).toBe("/en-US?some=params")
  });
  it("should return 404 when website is not found", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: "" },
      asyncGetDefaultWebsite: async () => {
        return [
          {
            website: {
              languageCode: "en-US"
            } as Website,
            languageCodes: ["it-IT"]
          },
          {
            code: 5,
            message: "Not found"
          }
        ]
      }
    })
    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });
    const res = await response.json()

    expect(res.error).toBeDefined()
    expect(res.errors).toBeDefined()
    expect(res.errors?.getWebsite).toBe(true)
    expect(response.status).toBe(404)
  });
  it("should return 500 when get website fails", async () => {
    const loader = newLoader({
      websiteName: "www.example.com",
      publicKey: "abc",
      i18nWebsiteCookie: { selectedLocale: "" },
      asyncGetDefaultWebsite: async () => {
        return [
          {
            website: {
              languageCode: "en-US"
            } as Website,
            languageCodes: ["it-IT"]
          },
          {
            code: 1,
            message: "Error"
          }
        ]
      }
    })
    const response = await loader({
      request: new Request("https://www.example.com"),
      context: {},
      params: {},
    });
    const res = await response.json()

    expect(res.error).toBeDefined()
    expect(res.errors).toBeDefined()
    expect(res.errors?.getWebsite).toBe(true)
    expect(response.status).toBe(500)
  });
})

describe("index", async () => {
  it("should render error when present", async () => {
    const loaderData: LoaderData = {
      errors: {
        getWebsite: true
      },
      error: {
        code: 0,
        message: "Error"
      }
    } as LoaderData
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <IndexComponent loaderData={loaderData} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Website loading error")
    screen.getByText("The website did not load correctly. Wait a while and retry")
  })
})