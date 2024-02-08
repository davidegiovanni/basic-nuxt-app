import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import Metadata from ".";

describe("Metadata", async () => {
  it("should apply custom class from metadata to referenced div", async () => {
    const targetRef: any = {
      current: <div>Test div</div>,
    };
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <div ref={targetRef}>
            Test div
            <Metadata
              metadata={{
                class: "custom-class",
                random: "value",
              }}
              applyTo={targetRef}
            />
          </div>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(screen.getByText("Test div")).toHaveClass("custom-class");
  });
  it("should apply custom style from metadata to referenced div", async () => {
    const divRef: any = {
      current: <div>Test div 2</div>,
    };
    const RemixStub = createRemixStub([
      {
        path: "/a",
        Component: () => (
          <div ref={divRef} style={{ display: "none" }}>
            Test div 2
            <Metadata
              metadata={{
                random: "value",
                style: "background-color:red",
              }}
              applyTo={divRef}
            />
          </div>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/a"]} />);

    expect(screen.getByText("Test div 2")).toHaveStyle({
      "background-color": "red",
    });
    expect(screen.getByText("Test div 2")).toHaveStyle({
      display: "none",
    });
  });
  it("should apply custom style from metadata to referenced div", async () => {
    const divTestRef: any = {
      current: <div>Test div 2</div>,
    };
    const RemixStub = createRemixStub([
      {
        path: "/a",
        Component: () => (
          <div ref={divTestRef} style={{ textDecoration: "underline" }}>
            Test div 2
            <Metadata
              metadata={{
                random: "value",
                style:
                  "background-color:red; color: white; display: flex; box-shadow: 0 0 0 10 rgba(0,0,0,0)",
              }}
              applyTo={divTestRef}
            />
          </div>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/a"]} />);

    expect(screen.getByText("Test div 2")).toHaveStyle({
      "background-color": "red",
    });
    expect(screen.getByText("Test div 2")).toHaveStyle({
      color: "white",
    });
    expect(screen.getByText("Test div 2")).toHaveStyle({
      display: "flex",
    });
    expect(screen.getByText("Test div 2")).toHaveStyle({
      "box-shadow": "0 0 0 10 rgba(0,0,0,0)",
    });
    expect(screen.getByText("Test div 2")).toHaveStyle({
      "text-decoration": "underline",
    });
  });
});
