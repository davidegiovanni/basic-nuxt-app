import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import {IndexComponent} from "./route";
import type { LoaderData } from "../../services/api/websites/website-data-loader";

describe("Index", async () => {
  it("should render error when present", async () => {
    const loaderData: LoaderData = {
      translations: {},
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

    screen.getByText("website_error")
    screen.getByText("wait_website_and_retry")
  })
  it("should render layout", async () => {
    const loaderData: LoaderData = {
      textBaseUnit: 0,
      textLineBaseUnit: 0,
      spacingBaseUnit: 0,
      isHighContrastMode: false,
      headCodeInjection: "",
      bodyCodeInjection: "",
      primaryColor: "#8164ec",
      contrastColor: "",
      borderRadiusAmount: 0,
      fontFamily: "",
      fontFamilyUrl: "",
      faviconUrl: "",
      websiteLogoUrl: "",
      websiteLocale: "it-IT",
      websiteTitle: "Website title",
      availableLanguages: [],
      canonicalUrl: "canonicalurl",
      navigation: [],
      authors: [],
      links: [],
      socials: [],
      metadata: {},
      currentContrastMode: "",
      textIncreaseAmount: "",
      selectedLocale: "",
      translations: {}
    }
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <IndexComponent loaderData={loaderData} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getAllByText("Website title")
  })
})