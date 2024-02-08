import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import Title from ".";

describe("Title", async () => {
  it("should render h1 with size 1", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Title size="1" className="title-class">
            Title
          </Title>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Title" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h1");
    expect(headingElement).toHaveClass("title-class");
  });
  it("should render h2 with size 2", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Title size="2" className="title-class">
            Title
          </Title>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Title" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h2");
    expect(headingElement).toHaveClass("title-class");
  });
  it("should render h3 with size 3", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Title size="3" className="title-class">
            Title
          </Title>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Title" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h3");
    expect(headingElement).toHaveClass("title-class");
  });
  it("should render h4 with size 4", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Title size="4" className="title-class">
            Title
          </Title>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Title" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h4");
    expect(headingElement).toHaveClass("title-class");
  });
  it("should render h5 with size 5", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Title size="5" className="title-class">
            Title
          </Title>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Title" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h5");
    expect(headingElement).toHaveClass("title-class");
  });
  it("should render h6 with size 6", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Title size="6" className="title-class">
            Title
          </Title>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Title" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h6");
    expect(headingElement).toHaveClass("title-class");
  });
});
