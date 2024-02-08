import { useRef } from "react";

import type { BlockItemUI, Attributes as AttributesModel } from "~/models";

import Attributes from "~/services/template/custom-attributes";
import Metadata from "~/services/template/custom-metadata-style";
import WebsiteLink from "~/components/core/Link";
import Attachment from "~/components/core/Attachment";
import Title from "~/components/core/Title";
import Description from "~/components/core/Description";

import { BlockItemProperties } from "~/components/base/Website/BlockItems";

export interface MainItemProps {
  item: BlockItemUI;
}

export default function MainItem({ item }: MainItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  const { hasImage, hasTitle, hasDescription, hasLink, hasText } =
    BlockItemProperties(item);

    const attributes: AttributesModel = {
      "has-text": hasText,
      "has-image": hasImage
    };

  return (
    <div ref={itemRef} className={`MainItem OverrideMainItem group`}>
      <Attributes applyTo={itemRef} attributes={attributes} />
      <Metadata applyTo={itemRef} metadata={item.metadata} />
      <div className={`MainItem--container OverrideMainItem--container`}>
        {hasText && (
          <div
            className={`MainItemContainer--first-slot OverrideMainItemContainer--first-slot`}
          >
            {hasTitle && (
              <Title
                size={"2"}
                className={`MainItem--title OverrideMainItem--title`}
              >
                {item.title}
              </Title>
            )}
            {hasDescription && (
              <Description
                size={"3"}
                className={`MainItem--description OverrideMainItem--description`}
              >
                {item.description}
              </Description>
            )}
            {hasLink && (
              <WebsiteLink
                url={item.linkUrl}
                className={`MainItem--link OverrideMainItem--link`}
                metadata={item.linkMetadata}
              >
                {item.linkTitle}
              </WebsiteLink>
            )}
          </div>
        )}
        {hasImage && (
          <div
            className={`MainItemContainer--second-slot OverrideMainItemContainer--second-slot`}
          >
            <div
              className={`MainItem--attachment OverrideMainItem--attachment`}
            >
              <Attachment
                attachmentUrl={item.attachmentUrl}
                attachmentMediaType={item.attachmentMediaType}
                attachmentCaption={item.attachmentCaption}
                attachmentDescription={item.attachmentDescription}
                metadata={item.attachmentMetadata}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
