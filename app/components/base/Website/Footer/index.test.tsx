import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import type { FooterProps } from ".";
import Footer from ".";
import type { BlockItemUI, BlockUI } from "~/models";

describe("Footer", async () => {
  it("should render website title", async () => {
    const headerProps: FooterProps = {
      websiteTitle: "WebsiteTitle",
      logoUrl: "logourl",
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Footer {...headerProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText(/WebsiteTitle/g);
  });
  it("should render links", async () => {
    const headerProps: FooterProps = {
      websiteTitle: "WebsiteTitle",
      logoUrl: "logourl",
      links: [
        {
          title: "Link 1",
          url: "internalurl",
          metadata: {},
        },
        {
          title: "Link 2",
          url: "https://externalurl",
          metadata: {},
        },
        {
          title: "Link 3",
          url: "internalurl",
          metadata: {},
        },
      ],
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Footer {...headerProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    headerProps.links?.forEach((link) => {
      screen.getByText(link.title);
    });
  });
  it("should render socials links", async () => {
    const headerProps: FooterProps = {
      websiteTitle: "WebsiteTitle",
      logoUrl: "logourl",
      socials: [
        {
          type: "facebook",
          title: "Link 1",
          url: "internalurl",
          metadata: {},
        },
        {
          type: "facebook",
          title: "Link 2",
          url: "https://externalurl",
          metadata: {},
        },
        {
          type: "facebook",
          title: "Link 3",
          url: "internalurl",
          metadata: {},
        },
      ],
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Footer {...headerProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    headerProps.socials?.forEach((link) => {
      screen.getByText(link.title);
    });
  });
  it("should render authors", async () => {
    const headerProps: FooterProps = {
      websiteTitle: "WebsiteTitle",
      logoUrl: "logourl",
      authors: [
        {
          title: "Author 1 title",
          description: "Author 1 description",
          attachmentMediaType: "image/*",
          attachmentUrl: "Author 1 imgurl",
          attachmentDescription: "Author 1 image",
          attachmentCaption: "",
          attachmentMetadata: {},
          metadata: {},
          links: [
            {
              title: "Author 1 Link 1 title",
              url: "Author 1 Link 1 url",
              metadata: {},
            },
            {
              title: "Author 1 Link 2 title",
              url: "Author 1 Link 2 url",
              metadata: {},
            },
          ],
        },
        {
          title: "Author 2 title",
          description: "Author 2 description",
          attachmentMediaType: "image/*",
          attachmentUrl: "Author 2 imgurl",
          attachmentDescription: "Author 2 image",
          attachmentCaption: "",
          attachmentMetadata: {},
          metadata: {},
          links: [
            {
              title: "Author 2 Link 1 title",
              url: "Author 2 Link 1 url",
              metadata: {},
            },
            {
              title: "Author 2 Link 2 title",
              url: "Author 2 Link 2 url",
              metadata: {},
            },
          ],
        },
      ],
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Footer {...headerProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    headerProps.authors?.forEach((link) => {
      screen.getByText(link.title);
    });
  });
  it("should render main item", async () => {
    const headerProps: FooterProps = {
      websiteTitle: "WebsiteTitle",
      logoUrl: "logourl",
      mainItem: {
        title: "Block title",
        description: "Block description",
        attachmentUrl: "imgurl",
        attachmentDescription: "Block image",
        blockLayout: "default",
        linkUrl: "/it-IT/page",
        linkTitle: "Block link",
        html: "",
        items: [] as BlockItemUI[],
        metadata: {},
      } as BlockUI,
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Footer {...headerProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block title");
  });
});
