import { describe, it, expect, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import DefaultTheme from ".";

afterEach(() => {
  document.head.innerHTML = "";
  document.body.innerHTML = "";
});

describe("Default Theme", async () => {
  it("should set default primary color", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <DefaultTheme />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(document.body).toHaveStyle({
      "--primary-color": "black",
    });
  });
  it("should set default contrast color", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <DefaultTheme />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(document.body).toHaveStyle({
      "--primary-contrast-color": "white",
    });
  });
  it("should set default darkened color", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <DefaultTheme />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(document.body).toHaveStyle({
      "--darker-primary-color": "black",
    });
  });
  it("should set default border radius", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <DefaultTheme />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(document.body).toHaveStyle({
      "--border-radius": "4px",
    });
    expect(document.body).toHaveStyle({
      "--border-radius-inner": "2px",
    });
  });
  it("should set default fonts", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <DefaultTheme />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(document.body).toHaveStyle({
      "--custom-font": "'Inter', sans-serif",
    });
  });
  it("should set default favicon", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <DefaultTheme />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    const links = document.head.getElementsByTagName("link");
    expect(links).toHaveLength(1);
    expect(links[0].outerHTML).toStrictEqual(`<link type="image/x-icon" rel="icon" href="/default-favicon.png">`);
  });
  it("should set default font url", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <DefaultTheme />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    const links = document.body.getElementsByTagName("link");
    expect(links).toHaveLength(1);
    expect(links[0].outerHTML).toStrictEqual(`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">`);
  });
});