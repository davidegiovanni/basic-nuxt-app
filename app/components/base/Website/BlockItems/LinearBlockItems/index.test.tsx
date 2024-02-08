import type { BlockItemUI, BlockUI } from "~/models";

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import type { LinearBlockItemsProps } from ".";
import LinearBlockItems from ".";

describe("Default block block items", async () => {
  it("should render grid block items", async () => {
    const blockItemProps: LinearBlockItemsProps = {
      index: 0,
      block: {
        title: "Block title",
        description: "Block description",
        attachmentUrl: "imgurl",
        attachmentDescription: "Block image",
        blockLayout: "default",
        itemsLayout: "grid",
        linkUrl: "/it-IT/page",
        linkTitle: "Block link",
        html: "",
        items: [
          {
            title: "Block item title 1",
            description: "Block item description 1",
            attachmentUrl: "imgurlitem1",
            attachmentDescription: "Block item image 1",
            linkUrl: "/it-IT/page-item-1",
            linkTitle: "Block item link 1",
            linkMetadata: {},
            metadata: {},
          } as BlockItemUI,
        ] as BlockItemUI[],
        metadata: {},
      } as BlockUI,
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <LinearBlockItems {...blockItemProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block item title 1");
    screen.getByText("Block item description 1");
    screen.getByAltText("Block item image 1");
    screen.getByText("Block item link 1");
    expect(screen.getByText("Block item link 1")).toHaveAttribute(
      "href",
      "/it-IT/page-item-1",
    );
  });
  it("should render columns block items", async () => {
    const blockItemProps: LinearBlockItemsProps = {
      index: 0,
      block: {
        title: "Block title",
        description: "Block description",
        attachmentUrl: "imgurl",
        attachmentDescription: "Block image",
        blockLayout: "default",
        itemsLayout: "columns",
        linkUrl: "/it-IT/page",
        linkTitle: "Block link",
        html: "",
        items: [
          {
            title: "Block item title 1",
            description: "Block item description 1",
            attachmentUrl: "imgurlitem1",
            attachmentDescription: "Block item image 1",
            linkUrl: "/it-IT/page-item-1",
            linkTitle: "Block item link 1",
            linkMetadata: {},
            metadata: {},
          } as BlockItemUI,
        ] as BlockItemUI[],
        metadata: {},
      } as BlockUI,
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <LinearBlockItems {...blockItemProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block item title 1");
    screen.getByText("Block item description 1");
    screen.getByAltText("Block item image 1");
    screen.getByText("Block item link 1");
    expect(screen.getByText("Block item link 1")).toHaveAttribute(
      "href",
      "/it-IT/page-item-1",
    );
  });
  it("should render linear block items", async () => {
    const blockItemProps: LinearBlockItemsProps = {
      index: 0,
      block: {
        title: "Block title",
        description: "Block description",
        attachmentUrl: "imgurl",
        attachmentDescription: "Block image",
        blockLayout: "default",
        itemsLayout: "linear",
        linkUrl: "/it-IT/page",
        linkTitle: "Block link",
        html: "",
        items: [
          {
            title: "Block item title 1",
            description: "Block item description 1",
            attachmentUrl: "imgurlitem1",
            attachmentDescription: "Block item image 1",
            linkUrl: "/it-IT/page-item-1",
            linkTitle: "Block item link 1",
            linkMetadata: {},
            metadata: {},
          } as BlockItemUI,
        ] as BlockItemUI[],
        metadata: {},
      } as BlockUI,
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <LinearBlockItems {...blockItemProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block item title 1");
    screen.getByText("Block item description 1");
    screen.getByAltText("Block item image 1");
    screen.getByText("Block item link 1");
    expect(screen.getByText("Block item link 1")).toHaveAttribute(
      "href",
      "/it-IT/page-item-1",
    );
  });
});

describe("Main block block items", async () => {
  it("should render grid block items", async () => {
    const blockItemProps: LinearBlockItemsProps = {
      index: 0,
      block: {
        title: "Block title",
        description: "Block description",
        attachmentUrl: "imgurl",
        attachmentDescription: "Block image",
        blockLayout: "main",
        itemsLayout: "grid",
        linkUrl: "/it-IT/page",
        linkTitle: "Block link",
        html: "",
        items: [
          {
            title: "Block item title 1",
            description: "Block item description 1",
            attachmentUrl: "imgurlitem1",
            attachmentDescription: "Block item image 1",
            linkUrl: "/it-IT/page-item-1",
            linkTitle: "Block item link 1",
            linkMetadata: {},
            metadata: {},
          } as BlockItemUI,
        ] as BlockItemUI[],
        metadata: {},
      } as BlockUI,
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <LinearBlockItems {...blockItemProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block item title 1");
    screen.getByText("Block item description 1");
    screen.getByAltText("Block item image 1");
    screen.getByText("Block item link 1");
    expect(screen.getByText("Block item link 1")).toHaveAttribute(
      "href",
      "/it-IT/page-item-1",
    );
  });
  it("should render columns block items", async () => {
    const blockItemProps: LinearBlockItemsProps = {
      index: 0,
      block: {
        title: "Block title",
        description: "Block description",
        attachmentUrl: "imgurl",
        attachmentDescription: "Block image",
        blockLayout: "main",
        itemsLayout: "columns",
        linkUrl: "/it-IT/page",
        linkTitle: "Block link",
        html: "",
        items: [
          {
            title: "Block item title 1",
            description: "Block item description 1",
            attachmentUrl: "imgurlitem1",
            attachmentDescription: "Block item image 1",
            linkUrl: "/it-IT/page-item-1",
            linkTitle: "Block item link 1",
            linkMetadata: {},
            metadata: {},
          } as BlockItemUI,
        ] as BlockItemUI[],
        metadata: {},
      } as BlockUI,
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <LinearBlockItems {...blockItemProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block item title 1");
    screen.getByText("Block item description 1");
    screen.getByAltText("Block item image 1");
    screen.getByText("Block item link 1");
    expect(screen.getByText("Block item link 1")).toHaveAttribute(
      "href",
      "/it-IT/page-item-1",
    );
  });
  it("should render linear block items", async () => {
    const blockItemProps: LinearBlockItemsProps = {
      index: 0,
      block: {
        title: "Block title",
        description: "Block description",
        attachmentUrl: "imgurl",
        attachmentDescription: "Block image",
        blockLayout: "main",
        itemsLayout: "linear",
        linkUrl: "/it-IT/page",
        linkTitle: "Block link",
        html: "",
        items: [
          {
            title: "Block item title 1",
            description: "Block item description 1",
            attachmentUrl: "imgurlitem1",
            attachmentDescription: "Block item image 1",
            linkUrl: "/it-IT/page-item-1",
            linkTitle: "Block item link 1",
            linkMetadata: {},
            metadata: {},
          } as BlockItemUI,
        ] as BlockItemUI[],
        metadata: {},
      } as BlockUI,
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <LinearBlockItems {...blockItemProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block item title 1");
    screen.getByText("Block item description 1");
    screen.getByAltText("Block item image 1");
    screen.getByText("Block item link 1");
    expect(screen.getByText("Block item link 1")).toHaveAttribute(
      "href",
      "/it-IT/page-item-1",
    );
  });
});
