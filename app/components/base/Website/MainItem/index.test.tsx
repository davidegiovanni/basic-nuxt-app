import type { BlockItemUI, BlockUI } from "~/models";

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import type { MainItemProps } from ".";
import MainItem from ".";

describe("MainItem", async () => {
  it("should render block data", async () => {
    const blockProps: MainItemProps = {
      item: {
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
        Component: () => <MainItem {...blockProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block title");
    screen.getByText("Block description");
    screen.getByAltText("Block image");
    screen.getByText("Block link");
    expect(screen.getByText("Block link")).toHaveAttribute(
      "href",
      "/it-IT/page",
    );
  });
});
