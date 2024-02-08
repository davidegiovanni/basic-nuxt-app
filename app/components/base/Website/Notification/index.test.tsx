import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import type { NotificationProps } from ".";
import Notification from ".";
import type { WebsiteNotificationUI } from "~/models";

describe("Notification", async () => {
  it("should render block data", async () => {
    const blockProps: NotificationProps = {
      notification: {
        title: "Notification title",
        description: "Notification description",
        linkUrl: "/it-IT/page",
        linkTitle: "Notification link",
        metadata: {},
      } as WebsiteNotificationUI,
    };
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: () => <Notification {...blockProps} />,
      },
    ]);
    render(<RemixStub initialEntries={["/"]} />);

    screen.getByText("Notification title");
    screen.getByText("Notification description");
    screen.getByText("Notification link");
    expect(screen.getByText("Notification link")).toHaveAttribute(
      "href",
      "/it-IT/page",
    );
  });
});
