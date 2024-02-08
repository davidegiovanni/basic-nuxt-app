import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { Page } from ".";
import type { BlockItemUI, BlockUI } from "~/models";

describe("Page Layout", async () => {
  it("should render blocks", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Page
            metadata={{}}
            blocks={[
              {
                title: "Block 1",
                description: "",
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
              {
                title: "Block 2",
                description: "",
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
            ]}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Block 1");
    screen.getByText("Block 2");
  });
});
