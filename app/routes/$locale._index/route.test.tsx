import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import type { LoaderData } from "~/services/api/pages/page-data-loader";
import { IndexComponent } from "./route";
import type { BlockItemUI, BlockUI } from "~/models";

describe("Page index", async () => {
  it("should render not found error when present", async () => {
    const loaderData: LoaderData = {
      errors: {
        pageNotFound: true
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

    screen.getByText("page_not_found")
    screen.getByText("page_does_not_exist")
  })
  it("should render page error when present", async () => {
    const loaderData: LoaderData = {
      errors: {
        getPage: true
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

    screen.getByText("error_loading_page")
    screen.getByText("wait_and_retry")
  })
  it("should render feed", async () => {
    const loaderData: LoaderData = {
      meta: {
        title: "",
        description: "",
        imageUrl: ""
      },
      openGraphData: {
        title: "",
        description: "",
        imageUrl: ""
      },
      twitterMeta: {
        title: "",
        description: "",
        imageUrl: ""
      },
      canonicalUrl: "canonicalurl",

      metadata: {},
      blocks: [
        {
          title: "Block title",
          description: "Block description",
          attachmentUrl: "",
          attachmentDescription: "",
          blockLayout: "default",
          itemsLayout: "grid",
          linkUrl: "",
          linkTitle: "",
          html: ``,
          items: [] as BlockItemUI[],
          metadata: {},
        } as BlockUI,
      ]
    }
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <IndexComponent loaderData={loaderData} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block title")
    screen.getByText("Block description")
  })
})