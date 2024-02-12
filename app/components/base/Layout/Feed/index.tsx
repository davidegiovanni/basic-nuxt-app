import { useRef } from "react";

import Attributes from "~/services/template/custom-attributes";
import Metadata from "~/services/template/custom-metadata-style";
import Title from "~/components/core/Title";
import Description from "~/components/core/Description";

import type { Attributes as AttributesModel, FeedItemUI } from "~/models";
import FeedItems from "~/components/custom/FeedItems";

export type FeedLayoutProps = {
  title: string;
  description: string;
  metadata: Record<string, string>;
  items: FeedItemUI[];
};

export const Feed = function FeedLayout({ title, description, items, metadata }: FeedLayoutProps) {
  const blockRef = useRef<HTMLDivElement>(null);

  const hasTitle = title !== ""
  const hasDescription = description !== ""
  const hasText = hasTitle || hasDescription
  const hasItems = items.length > 0

  const attributes: AttributesModel = {
    "has-description": hasDescription,
    "has-items": hasItems,
  };

  return (
    <div ref={blockRef} className={`FeedPage OverrideFeedPage`}>
      <Attributes applyTo={blockRef} attributes={attributes} />
      <Metadata applyTo={blockRef} metadata={metadata} />
      <div
        className={`FeedPage--header-container OverrideFeedPage--container`}
      >
        {hasText && (
          <div
            className={`FeedPage--header OverrideFeedPage--header`}
          >
            {hasTitle && (
              <Title
                size={"1"}
                className={`FeedPage--title OverrideFeedPage--title`}
              >
                {title}
              </Title>
            )}
            {hasDescription && (
              <Description
                size={"2"}
                className={`FeedPage--description OverrideFeedPage--description`}
              >
                {description}
              </Description>
            )}
          </div>
        )}
      </div>
      {hasItems && (
        <div
          className={`FeedPage--items-container OverrideFeedPage--items-container`}
        >
          <div
            className={`FeedPage--items OverrideFeedPage--items`}
          >
            <FeedItems items={items} />
          </div>
          <div className="w-full h-px border-t border-black -mt-px" />
        </div>
      )}
    </div>
  );
}
