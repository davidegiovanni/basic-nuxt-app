import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import Description from ".";

describe("Description", async () => {
  it("should render h1 with size 1", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Description size="1" className="description-class">
            Description
          </Description>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Description" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h1");
    expect(headingElement).toHaveClass("description-class");
  });
  it("should render h2 with size 2", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Description size="2" className="description-class">
            Description
          </Description>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Description" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h2");
    expect(headingElement).toHaveClass("description-class");
  });
  it("should render h3 with size 3", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Description size="3" className="description-class">
            Description
          </Description>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Description" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h3");
    expect(headingElement).toHaveClass("description-class");
  });
  it("should render h4 with size 4", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Description size="4" className="description-class">
            Description
          </Description>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Description" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h4");
    expect(headingElement).toHaveClass("description-class");
  });
  it("should render h5 with size 5", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Description size="5" className="description-class">
            Description
          </Description>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Description" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h5");
    expect(headingElement).toHaveClass("description-class");
  });
  it("should render h6 with size 6", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Description size="6" className="description-class">
            Description
          </Description>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const headingElement = screen.getByRole("heading", { name: "Description" });
    const headingType = headingElement.tagName.toLowerCase();
    expect(headingType).toBe("h6");
    expect(headingElement).toHaveClass("description-class");
  });
  it("should render p with empty size", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Description size="" className="description-class">
            Description
          </Description>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    const paragraphElement = screen.getByText("Description");
    const paragraphType = paragraphElement.tagName.toLowerCase();
    expect(paragraphType).toBe("p");
    expect(paragraphElement).toHaveClass("description-class");
  });
});
