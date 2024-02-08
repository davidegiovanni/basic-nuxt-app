import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import type { AuthorsProps } from ".";
import Authors from ".";

describe("Authors", async () => {
  it("should render authors", async () => {
    const authorsProps: AuthorsProps = {
      authors: [
        {
          title: "Author 1 title",
          description: "Author 1 description",
          attachmentMediaType: "image/*",
          attachmentUrl: "Author 1 imgurl",
          attachmentDescription: "Author 1 image",
          attachmentCaption: "",
          attachmentMetadata: {},
          metadata: {},
          links: [
            {
              title: "Author 1 Link 1 title",
              url: "Author 1 Link 1 url",
              metadata: {},
            },
            {
              title: "Author 1 Link 2 title",
              url: "Author 1 Link 2 url",
              metadata: {},
            },
          ],
        },
        {
          title: "Author 2 title",
          description: "Author 2 description",
          attachmentMediaType: "image/*",
          attachmentUrl: "Author 2 imgurl",
          attachmentDescription: "Author 2 image",
          attachmentCaption: "",
          attachmentMetadata: {},
          metadata: {},
          links: [
            {
              title: "Author 2 Link 1 title",
              url: "Author 2 Link 1 url",
              metadata: {},
            },
            {
              title: "Author 2 Link 2 title",
              url: "Author 2 Link 2 url",
              metadata: {},
            },
          ],
        },
      ],
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Authors {...authorsProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    authorsProps.authors.forEach((author) => {
      screen.getByText(author.title);
      screen.getByText(author.description);
      screen.getByAltText(author.attachmentDescription);
      author.links.forEach((link) => {
        expect(screen.getByText(link.title)).toHaveAttribute(
          "href",
          `/${link.url}`,
        );
      });
    });
  });
});
