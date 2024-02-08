import type { FeedItemUI } from "~/models";

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import type { FeedItemsProps } from ".";
import FeedItems from ".";

describe("Feed block items", async () => {
  it("should render items", async () => {
    const feedItemProps: FeedItemsProps = {
      items: [
        {
          title: "Block item title 1",
          description: "Block item description 1",
          attachmentMediaType: "image/*",
          attachmentUrl: "image1",
          attachmentCaption: "",
          attachmentDescription: "description1",
          attachmentMetadata: {},
          publishedOn: "publishedon1",
          content: "",
          metadata: {},
          url: "/it-IT/-/feed/item-1"
        },
        {
          title: "Block item title 2",
          description: "Block item description 2",
          attachmentMediaType: "image/*",
          attachmentUrl: "",
          attachmentCaption: "",
          attachmentDescription: "",
          attachmentMetadata: {},
          publishedOn: "publishedon2",
          content: "",
          metadata: {},
          url: "/it-IT/-/feed/item-2"
        }
      ] as FeedItemUI[],
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <FeedItems {...feedItemProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block item title 1");
    screen.getByText("Block item description 1");
    screen.getByAltText("description1");
    expect(screen.getByRole("link", { name: "Block item title 1"})).toHaveAttribute(
      "href",
      "/it-IT/-/feed/item-1",
    );
    screen.getByText("Block item title 2");
    screen.getByText("Block item description 2");
    expect(screen.getByRole("link", { name: "Block item title 2"})).toHaveAttribute(
      "href",
      "/it-IT/-/feed/item-2",
    );
  });
});
