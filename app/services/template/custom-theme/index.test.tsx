import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import CustomTheme, { getContrastFrom } from ".";

describe("Custom Theme", async () => {
  it("should set custom primary color", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <CustomTheme
            primary={"red"}
            inverted={"black"}
            radius={8}
            fontFamily={"Inter"}
            fontFamilyUrl={"httos://familyurl"}
            faviconUrl="faviconurl"
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(document.body).toHaveStyle({
      "--primary-color": "red",
    });
  });
  it("should set custom contrast color", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <CustomTheme
            primary={"red"}
            inverted={"black"}
            radius={8}
            fontFamily={"Inter"}
            fontFamilyUrl={"httos://familyurl"}
            faviconUrl="faviconurl"
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(document.body).toHaveStyle({
      "--primary-contrast-color": "black",
    });
  });
  it("should set custom darkened color", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <CustomTheme
            primary={"#8154ec"}
            inverted={"black"}
            radius={8}
            fontFamily={"Inter"}
            fontFamilyUrl={"httos://familyurl"}
            faviconUrl="faviconurl"
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(document.body).toHaveStyle({
      "--darker-primary-color": "#603fb1",
    });
  });
  it("should set custom border radius", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <CustomTheme
            primary={"red"}
            inverted={"black"}
            radius={8}
            fontFamily={"Inter"}
            fontFamilyUrl={"httos://familyurl"}
            faviconUrl="faviconurl"
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(document.body).toHaveStyle({
      "--border-radius": "8px",
    });
    expect(document.body).toHaveStyle({
      "--border-radius-inner": "4px",
    });
  });
  it("should set custom fonts", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <CustomTheme
            primary={"red"}
            inverted={"black"}
            radius={8}
            fontFamily={"Inter"}
            fontFamilyUrl={"httos://familyurl"}
            faviconUrl="faviconurl"
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(document.body).toHaveStyle({
      "--custom-font": "Inter",
    });
  });
});

describe("Contrast color", async () => {
  it("should return light contrast color given primary", async () => {
    const contrast = getContrastFrom("#000000");

    expect(contrast).toBe("white");
  });
  it("should return dark contrast color given primary", async () => {
    const contrast = getContrastFrom("#ffffff");

    expect(contrast).toBe("black");
  });
  it("should return contrast color given preicse primary", async () => {
    const contrast = getContrastFrom("#8154ec");

    expect(contrast).toBe("white");
  });
  it("should return contrast color given 3-values primary", async () => {
    const contrast = getContrastFrom("#aaa");

    expect(contrast).toBe("black");
  });
});
