import { describe, it, expect, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import Injection from ".";

afterEach(() => {
  document.head.innerHTML = "";
  document.body.innerHTML = "";
});

describe("Root Injection", async () => {
  it("should inject code in head", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/c",
        Component: () => (
          <Injection
            code={`<div>Hello custom div</div><meta name="title" content="title"><script>let hello = 0</script><link rel="rel" href="url"><style> .hello { color: yellow }</style>`}
            position={"head"}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/c"]} />);

    const metas = document.head.getElementsByTagName("meta");
    const links = document.head.getElementsByTagName("link");
    const scripts = document.head.getElementsByTagName("script");
    const styles = document.head.getElementsByTagName("style");

    expect(metas).toHaveLength(1);
    expect(metas[0].outerHTML).toStrictEqual(
      `<meta name="title" content="title">`,
    );

    expect(links).toHaveLength(1);
    expect(links[0].outerHTML).toStrictEqual(`<link rel="rel" href="url">`);

    expect(scripts).toHaveLength(1);
    expect(scripts[0].outerHTML).toStrictEqual(
      `<script>let hello = 0</script>`,
    );

    expect(styles).toHaveLength(1);
    expect(styles[0].outerHTML).toStrictEqual(
      `<style> .hello { color: yellow }</style>`,
    );
  });
  it("should inject code in body", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <Injection
            code={`<div>Hello custom div</div><meta name="title" content="title"><script>let hello = 0</script><link rel="rel" href="url"><style> .hello { color: yellow }</style>`}
            position={"body"}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    const metas = document.body.getElementsByTagName("meta");
    const links = document.body.getElementsByTagName("link");
    const scripts = document.body.getElementsByTagName("script");
    const styles = document.body.getElementsByTagName("style");

    expect(metas).toHaveLength(1);
    expect(metas[0].outerHTML).toStrictEqual(
      `<meta name="title" content="title">`,
    );

    expect(links).toHaveLength(1);
    expect(links[0].outerHTML).toStrictEqual(`<link rel="rel" href="url">`);

    expect(scripts).toHaveLength(1);
    expect(scripts[0].outerHTML).toStrictEqual(
      `<script>let hello = 0</script>`,
    );

    expect(styles).toHaveLength(1);
    expect(styles[0].outerHTML).toStrictEqual(
      `<style> .hello { color: yellow }</style>`,
    );

    screen.getByText("Hello custom div");
  });
  it("should inject code in div", async () => {
    const targetRef: any = {
      current: <div>Test</div>,
    };
    const RemixStub = createRemixStub([
      {
        path: "/a",
        Component: () => (
          <div>
            <div ref={targetRef}>
              <Injection
                code={`<div>Hello inline custom div</div><meta name="title" content="title-inline"><script>let helloInline = 0</script><link rel="rel" href="url-inline"><style> .helloInline { color: yellow }</style>`}
                position={"inline"}
                targetDiv={targetRef}
              />
            </div>
          </div>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/a"]} />);

    const metas = document.body.getElementsByTagName(
      "meta",
    ) as HTMLCollectionOf<HTMLMetaElement>;
    const links = document.body.getElementsByTagName(
      "link",
    ) as HTMLCollectionOf<HTMLLinkElement>;
    const scripts = document.body.getElementsByTagName(
      "script",
    ) as HTMLCollectionOf<HTMLScriptElement>;
    const styles = document.body.getElementsByTagName(
      "style",
    ) as HTMLCollectionOf<HTMLStyleElement>;

    expect(metas).toHaveLength(1);
    expect(metas[0].outerHTML).toStrictEqual(
      `<meta name="title" content="title-inline">`,
    );

    expect(links).toHaveLength(1);
    expect(links[0].outerHTML).toStrictEqual(
      `<link rel="rel" href="url-inline">`,
    );

    expect(scripts).toHaveLength(1);
    expect(scripts[0].outerHTML).toStrictEqual(
      `<script>let helloInline = 0</script>`,
    );

    expect(styles).toHaveLength(1);
    expect(styles[0].outerHTML).toStrictEqual(
      `<style> .helloInline { color: yellow }</style>`,
    );

    screen.getByText("Hello inline custom div");
  });
});
