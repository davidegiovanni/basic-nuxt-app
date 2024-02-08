import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import type { MainLinkProps } from ".";
import MainLink from ".";

describe("Main Link", async () => {
  it("should render internal main link", async () => {
    const linksProps: MainLinkProps = {
      link: {
        title: "Link 1",
        url: "internalurl",
        metadata: {},
      },
      className: "customClass",
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <MainLink {...linksProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByText(linksProps.link.title)).toHaveAttribute(
      "href",
      `/${linksProps.link.url}`,
    );
    expect(screen.getByText(linksProps.link.title)).toHaveClass("customClass");
  });
  it("should render external main link", async () => {
    const linksProps: MainLinkProps = {
      link: {
        title: "Link 1",
        url: "https://externalurl",
        metadata: {},
      },
      className: "customClass",
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <MainLink {...linksProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByText(linksProps.link.title)).toHaveAttribute(
      "href",
      `${linksProps.link.url}`,
    );
    expect(screen.getByText(linksProps.link.title)).toHaveClass("customClass");
  });
});
