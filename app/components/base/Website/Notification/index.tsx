import { useRef } from "react";

import type { WebsiteNotificationUI } from "~/models";

import WebsiteLink from "~/components/core/Link";
import Metadata from "~/services/template/custom-metadata-style";

export interface NotificationProps {
  notification: WebsiteNotificationUI;
}

export default function Notification({ notification }: NotificationProps) {
  const blockRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={blockRef} className={`Notification OverrideNotification group`}>
      <Metadata applyTo={blockRef} metadata={notification.metadata} />
      <div
        className={`Notification--container OverrideNotification--container`}
      >
        {notification.title !== "" && (
          <p className={`Notification--title`}>{notification.title}</p>
        )}
        {notification.description !== "" && (
          <p
            className={`Notification--description OverrideNotification--description`}
          >
            {notification.description}
          </p>
        )}
        {notification.linkUrl !== "" && (
          <WebsiteLink
            url={notification.linkUrl}
            metadata={notification.linkMetadata}
            className={`Notification--link OverrideNotification--link`}
          >
            {notification.linkTitle}
          </WebsiteLink>
        )}
      </div>
    </div>
  );
}
