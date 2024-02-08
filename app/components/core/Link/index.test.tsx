import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import type { WebsiteLinkProps } from ".";
import WebsiteLink from ".";

describe("Website Link Constructor", async () => {
  it("should render children", async () => {
    const websiteLinkProps: WebsiteLinkProps = {
      url: "internalurl",
      metadata: {},
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <WebsiteLink {...websiteLinkProps}>Children of component</WebsiteLink>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Children of component");
  });
  it("should apply custom class from metadata when present", async () => {
    const websiteLinkProps: WebsiteLinkProps = {
      url: "https://externalurl",
      metadata: {
        class: "custom-class",
      },
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <WebsiteLink {...websiteLinkProps}>Link</WebsiteLink>,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByText("Link")).toHaveClass("custom-class");
  });
  it("should apply custom style from metadata when present", async () => {
    const websiteLinkProps: WebsiteLinkProps = {
      url: "https://externalurl",
      metadata: {
        style: "backgroundColor:red",
      },
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <WebsiteLink {...websiteLinkProps}>Link</WebsiteLink>,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByText("Link")).toHaveAttribute(
      "style",
      "background-color: red;",
    );
  });
  it("should apply attributes when present", async () => {
    const websiteLinkProps: WebsiteLinkProps = {
      url: "https://externalurl",
      metadata: {},
      attributes: {
        "custom-attribute": "value",
      },
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <WebsiteLink {...websiteLinkProps}>Link</WebsiteLink>,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByText("Link")).toHaveAttribute(
      "data-custom-attribute",
      "value",
    );
  });
  it("should apply class name", async () => {
    const websiteLinkProps: WebsiteLinkProps = {
      url: "https://externalurl",
      metadata: {},
      className: "custom-class-name",
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <WebsiteLink {...websiteLinkProps}>Link</WebsiteLink>,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByText("Link")).toHaveClass("custom-class-name");
  });
  it("should render anchor when link is external", async () => {
    const websiteLinkProps: WebsiteLinkProps = {
      url: "https://externalurl",
      metadata: {},
      className: "custom-class-name",
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <WebsiteLink {...websiteLinkProps}>Link</WebsiteLink>,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByText("Link")).toHaveAttribute(
      "href",
      "https://externalurl",
    );
    expect(screen.getByText("Link")).toHaveAttribute(
      "rel",
      "noopener, noreferrer",
    );
    expect(screen.getByText("Link")).toHaveAttribute("target", "_blank");
  });
  it("should render internal link when link is interal", async () => {
    const websiteLinkProps: WebsiteLinkProps = {
      url: "internalurl",
      metadata: {},
      className: "custom-class-name",
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <WebsiteLink {...websiteLinkProps}>Link</WebsiteLink>,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByText("Link")).toHaveAttribute("href", "/internalurl");
  });
});
