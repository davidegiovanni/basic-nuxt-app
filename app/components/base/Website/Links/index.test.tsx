import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import type { LinksProps } from ".";
import Links from ".";

describe("Links", async () => {
  it("should render links", async () => {
    const linksProps: LinksProps = {
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
      className: "customClass",
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Links {...linksProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    linksProps.links.forEach((link, index) => {
      expect(screen.getByText(link.title)).toHaveAttribute(
        "href",
        index === 1 ? `${link.url}` : `/${link.url}`,
      );
      expect(screen.getByText(link.title)).toHaveClass("customClass");
    });
  });
});
