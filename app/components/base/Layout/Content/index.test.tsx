import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { Content } from ".";
import type { ContentLayoutProps } from ".";

describe("Content page", async () => {
  it("should render header data", async () => {
    const contentLayoutProps: ContentLayoutProps = {
      feedTitle: "feedTitle",
      feedPath: "feedpath",
      title: "Content title",
      description: "Content description",
      attachmentUrl: "contentimage",
      attachmentMediaType: "",
      attachmentDescription: "Image description",
      attachmentCaption: "",
      attachmentMetadata: {},
      content: "",
      publishedOn: "publishedon",
      metadata: {}
    }
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Content {...contentLayoutProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Content title");
    screen.getByText("Content description");
    screen.getByText("publishedon");
    expect(screen.getByRole("link", { name: "feedTitle" })).toHaveAttribute("href", "/feedpath")
    screen.getByAltText("Image description")
  });
  it("should render page content", async () => {
    const contentLayoutProps: ContentLayoutProps = {
      feedTitle: "feedTitle",
      feedPath: "feedpath",
      title: "Content title",
      description: "Content description",
      attachmentUrl: "contentimage",
      attachmentMediaType: "",
      attachmentDescription: "Image description",
      attachmentCaption: "",
      attachmentMetadata: {},
      content: "htmlcontent",
      publishedOn: "publishedon",
      metadata: {}
    }
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Content {...contentLayoutProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("htmlcontent");
  });
});
