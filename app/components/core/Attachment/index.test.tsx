import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import Attachment from ".";

describe("Attachment component", async () => {
  it("should render video frame", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"https://youtube.com/video"}
            attachmentMediaType={"application/vnd.youtube.video"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
            metadata={{
              style: "backgroundColor:red",
            }}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByRole("presentation");
  });
  it("should apply custom class from metadata to video when present", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"https://youtube.com/video"}
            attachmentMediaType={"application/vnd.youtube.video"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
            metadata={{
              class: "custom-class",
            }}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(
      screen.getByRole("presentation"),
    ).toHaveClass("custom-class");
  });
  it("should apply custom style from metadata to video when present", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"https://youtube.com/video"}
            attachmentMediaType={"application/vnd.youtube.video"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
            metadata={{
              style: "backgroundColor:red",
            }}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(
      screen.getByRole("presentation"),
    ).toHaveAttribute("style", "background-color: red;");
  });
  it("should apply attributes to video when present", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"https://youtube.com/video"}
            attachmentMediaType={"application/vnd.youtube.video"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
            attributes={{
              "custom-attribute": "value",
            }}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(
      screen.getByRole("presentation"),
    ).toHaveAttribute("data-custom-attribute", "value");
  });
  it("should apply class name to video when present", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"https://youtube.com/video"}
            attachmentMediaType={"application/vnd.youtube.video"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
            className={"custom-class-name"}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(
      screen.getByRole("presentation"),
    ).toHaveClass("custom-class-name");
  });
  it("should render image", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"attachmentUrl"}
            attachmentMediaType={"image/png"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByAltText("attachmentDescription");
  });
  it("should render image with correct sizes", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"attachmentUrl"}
            attachmentMediaType={"image/png"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByAltText("attachmentDescription")).toHaveAttribute(
      "sizes",
      "(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 800px) 800px, 600px",
    );
  });
  it("should render image with correct srcSet", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"attachmentUrl"}
            attachmentMediaType={"image/png"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByAltText("attachmentDescription")).toHaveAttribute(
      "srcSet",
      "attachmentUrl?format=&size=600w 600w,attachmentUrl?format=&size=800w 800w,attachmentUrl?format=&size=1024w 1024w,attachmentUrl?format=&size=1280w 1280w,attachmentUrl?format=&size=1536w 1536w",
    );
  });
  it("should apply custom class from metadata to image when present", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"attachmentUrl"}
            attachmentMediaType={"image/png"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
            metadata={{
              class: "custom-class",
            }}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByRole("figure")).toHaveClass("custom-class");
  });
  it("should apply custom style from metadata to image when present", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"attachmentUrl"}
            attachmentMediaType={"image/png"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
            metadata={{
              style: "backgroundColor:red",
            }}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByRole("figure")).toHaveAttribute(
      "style",
      "background-color: red;",
    );
  });
  it("should apply attributes to image when present", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"attachmentUrl"}
            attachmentMediaType={"image/png"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
            attributes={{
              "custom-attribute": "value",
            }}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByRole("figure")).toHaveAttribute(
      "data-custom-attribute",
      "value",
    );
  });
  it("should apply class name to image when present", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => (
          <Attachment
            attachmentUrl={"attachmentUrl"}
            attachmentMediaType={"image/png"}
            attachmentCaption={"attachmentCaption"}
            attachmentDescription={"attachmentDescription"}
            className={"custom-class-name"}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    expect(screen.getByRole("figure")).toHaveClass("custom-class-name");
  });
});
