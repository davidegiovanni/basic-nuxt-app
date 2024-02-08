import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import type { SocialsLinksProps } from ".";
import SocialsLinks from ".";

describe("Socials", async () => {
  it("should render social links", async () => {
    const socialsProps: SocialsLinksProps = {
      links: [
        {
          type: "facebook",
          title: "facebook",
          url: "https://facebookurl",
          metadata: {},
        },
        {
          type: "twitter",
          title: "twitter",
          url: "https://twitterurl",
          metadata: {},
        },
        {
          type: "instagram",
          title: "instagram",
          url: "https://instagramurl",
          metadata: {},
        },
      ],
      className: "customClass",
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <SocialsLinks {...socialsProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    socialsProps.links.forEach((link) => {
      expect(screen.getByText(link.title)).toHaveAttribute(
        "href",
        `${link.url}`,
      );
      expect(screen.getByText(link.title)).toHaveClass("customClass");
    });
  });
});
