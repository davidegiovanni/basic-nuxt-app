import type { BlockItemUI, BlockUI } from "~/models";

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import MainBlock from ".";
import type { BlockProps } from "..";

describe("Main Block", async () => {
  it("should render block data", async () => {
    const blockProps: BlockProps = {
      index: 0,
      block: {
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
        Component: () => <MainBlock {...blockProps} />,
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
  it("should render block items", async () => {
    const blockProps: BlockProps = {
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
            title: "Block item 1 title",
            description: "Block item 1 description",
            attachmentDescription: "Block item 1 image",
            attachmentUrl: "imgurl1",
            linkTitle: "Block item 1 link",
            linkUrl: "linkurl1",
            metadata: {},
          },
          {
            title: "Block item 2 title",
            description: "Block item 2 description",
            attachmentDescription: "Block item 2 image",
            attachmentUrl: "imgurl2",
            linkTitle: "Block item 2 link",
            linkUrl: "linkurl2",
            metadata: {},
          },
        ] as BlockItemUI[],
        metadata: {},
      } as BlockUI,
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <MainBlock {...blockProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block item 1 title");
    screen.getByText("Block item 1 description");
    screen.getByText("Block item 1 link");
    expect(screen.getByText("Block item 1 link")).toHaveAttribute(
      "href",
      "/linkurl1",
    );
    screen.getByAltText("Block item 1 image");
    expect(screen.getByAltText("Block item 1 image")).toHaveAttribute(
      "src",
      "imgurl1",
    );

    screen.getByText("Block item 2 title");
    screen.getByText("Block item 2 description");
    screen.getByText("Block item 2 link");
    expect(screen.getByText("Block item 2 link")).toHaveAttribute(
      "href",
      "/linkurl2",
    );
    screen.getByAltText("Block item 2 image");
    expect(screen.getByAltText("Block item 2 image")).toHaveAttribute(
      "src",
      "imgurl2",
    );
  });
  it("should render custom html", async () => {
    const blockProps: BlockProps = {
      index: 0,
      block: {
        title: "",
        description: "",
        attachmentUrl: "",
        attachmentDescription: "",
        blockLayout: "default",
        itemsLayout: "grid",
        linkUrl: "",
        linkTitle: "",
        html: `<div>Hello custom div</div><meta name="title" content="title"><script>let hello = 0</script><link rel="rel" href="url"><style> .hello { color: yellow }</style>`,
        items: [] as BlockItemUI[],
        metadata: {},
      } as BlockUI,
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <div><MainBlock {...blockProps} /></div>,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);
    const metas = document.getElementsByTagName("meta");
    const links = document.getElementsByTagName("link");
    const scripts = document.getElementsByTagName("script");
    const styles = document.getElementsByTagName("style");

    expect(metas).toHaveLength(1);
    expect(metas[0].outerHTML).toStrictEqual(
      `<meta name="title" content="title">`,
    );

    expect(links).toHaveLength(1);
    expect(links[0].outerHTML).toStrictEqual(`<link rel="rel" href="url">`);

    expect(scripts).toHaveLength(1);
    expect(scripts[0].outerHTML).toStrictEqual(
      `<script>let hello = 0</script>`,
    );

    expect(styles).toHaveLength(1);
    expect(styles[0].outerHTML).toStrictEqual(
      `<style> .hello { color: yellow }</style>`,
    );

    screen.getByText("Hello custom div");
  });
});
