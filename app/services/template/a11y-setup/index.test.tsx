import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import A11ySetup from ".";

describe("A11Y Setup", async () => {
  it("should set accessibility variables", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/b",
        Component: () => (
          <A11ySetup
            textBaseUnit={2}
            textLineBaseUnit={3}
            spacingBaseUnit={4}
          />
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/b"]} />);

    expect(document.body).toHaveStyle({
      "--text-base-unit": "2rem",
      "--text-line-base-unit": "3rem",
      "--spacing-base-unit": "4rem",
    });
  });
})