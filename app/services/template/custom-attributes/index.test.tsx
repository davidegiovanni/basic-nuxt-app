import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import Attributes from ".";

describe("Attributes", async () => {
  it("should apply attributes to referenced div", async () => {
    const targetRef: any = {
      current: <div>Test div</div>,
    };
    const RemixStub = createRemixStub([
      {
        path: "/a",
        Component: () => (
          <div ref={targetRef}>
            Test div
            <Attributes
              attributes={{
                custom: "attribute",
                string: "value",
                number: 2,
                boolean: false,
              }}
              applyTo={targetRef}
            />
          </div>
        ),
      },
    ]);
    render(<RemixStub initialEntries={["/a"]} />);

    expect(screen.getByText("Test div")).toHaveAttribute(
      "data-custom",
      "attribute",
    );
    expect(screen.getByText("Test div")).toHaveAttribute(
      "data-string",
      "value",
    );
    expect(screen.getByText("Test div")).toHaveAttribute("data-number", "2");
    expect(screen.getByText("Test div")).toHaveAttribute(
      "data-boolean",
      "false",
    );
  });
});
