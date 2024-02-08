import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import type { HeaderProps } from ".";
import Header from ".";

describe("Header", async () => {
  it("should render logo", async () => {
    const headerProps: HeaderProps = {
      websiteTitle: "WebsiteTitle",
      logoUrl: "logourl",
      locale: "it-IT",
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Header {...headerProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByAltText("WebsiteTitle")).toHaveAttribute(
      "src",
      "logourl",
    );
  });
  it("should render main link", async () => {
    const headerProps: HeaderProps = {
      websiteTitle: "WebsiteTitle",
      logoUrl: "logourl",
      locale: "it-IT",
      mainLink: {
        title: "MainLink",
        url: "linkurl",
        metadata: {},
      },
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Header {...headerProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("MainLink");
  });
  it("should render navigation links", async () => {
    const headerProps: HeaderProps = {
      websiteTitle: "WebsiteTitle",
      logoUrl: "logourl",
      locale: "it-IT",
      mainLink: {
        title: "MainLink",
        url: "linkurl",
        metadata: {},
      },
      navigation: [
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
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Header {...headerProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    headerProps.navigation?.forEach((link) => {
      screen.getByText(link.title);
    });
  });
  it("should render mobile menu", async () => {
    window.innerWidth = 375;
    window.innerHeight = 667;

    const headerProps: HeaderProps = {
      websiteTitle: "WebsiteTitle",
      logoUrl: "logourl",
      locale: "it-IT",
      mainLink: {
        title: "MainLink",
        url: "linkurl",
        metadata: {},
      },
      navigation: [
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
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Header {...headerProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const mobileButton = screen.getByRole("button", { name: "Menu Button" });
    fireEvent.click(mobileButton);
    headerProps.navigation?.forEach((link) => {
      screen.getAllByText(link.title);
    });
    screen.getByText("MainLink");
  });
});
