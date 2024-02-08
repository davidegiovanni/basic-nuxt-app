import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import CanonicalUrl from ".";

describe("canonical url", async () => {
  it("should canonical url", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <CanonicalUrl
            url="canonicalurl"
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    const links = document.head.getElementsByTagName("link");
    expect(links).toHaveLength(1);
    expect(links[0].outerHTML).toStrictEqual(`<link rel="canonical" href="canonicalurl">`);
  });
});
