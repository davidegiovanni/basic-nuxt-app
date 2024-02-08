import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import AppLayout from ".";
import type { BlockItemUI, BlockUI, WebsiteNotificationUI } from "~/models";

describe("App Layout", async () => {
  it("should render children", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <AppLayout metadata={{}} logoUrl={""} websiteTitle={""} locale={""}>
            Children of component
          </AppLayout>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Children of component");
  });
  it("should render header", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <AppLayout
            metadata={{}}
            logoUrl={"logourl"}
            websiteTitle={"Website Title"}
            locale={""}
            navigation={[
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
            ]}
            mainLink={{
              title: "Main Link",
              url: "internalurl",
              metadata: {},
            }}
          >
            Children of component
          </AppLayout>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getAllByAltText("Website Title");
    screen.getAllByText("Link 1");
    screen.getAllByText("Link 2");
    screen.getAllByText("Main Link");
  });
  it("should render footer", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <AppLayout
            metadata={{}}
            logoUrl={"logourl"}
            websiteTitle={"Website Title"}
            locale={""}
            links={[
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
            ]}
            socials={[
              {
                type: "facebook",
                title: "Social Link 1",
                url: "internalurl",
                metadata: {},
              },
              {
                type: "facebook",
                title: "Social Link 2",
                url: "https://externalurl",
                metadata: {},
              },
              {
                type: "facebook",
                title: "Social Link 3",
                url: "internalurl",
                metadata: {},
              },
            ]}
            authors={[
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
            ]}
            mainItem={
              {
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
              } as BlockUI
            }
          >
            Children of component
          </AppLayout>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getAllByAltText("Website Title");
    screen.getAllByText("Author 1 title");
    screen.getAllByText("Author 2 title");
    screen.getAllByText("Link 1");
    screen.getAllByText("Link 2");
    screen.getAllByText("Social Link 1");
    screen.getAllByText("Social Link 2");
    screen.getAllByText("Social Link 3");
  });
  it("should render notification", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <AppLayout
            metadata={{}}
            logoUrl={"logourl"}
            websiteTitle={"Website Title"}
            locale={""}
            notification={
              {
                title: "Notification title",
                description: "Notification description",
                linkUrl: "/it-IT/page",
                linkTitle: "Notification link",
                metadata: {},
              } as WebsiteNotificationUI
            }
          >
            Children of component
          </AppLayout>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getAllByText("Notification title");
    screen.getAllByText("Notification description");
  });
});
