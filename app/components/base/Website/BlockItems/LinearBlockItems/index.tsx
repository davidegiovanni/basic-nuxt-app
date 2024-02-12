import { useRef } from "react";

import { BlockItemProperties } from "..";
import type {
  BlockUI,
  BlockItemUI,
  Attributes as AttributesModel,
} from "~/models";

import Attributes from "~/services/template/custom-attributes";
import WebsiteLink from "~/components/core/Link";
import Metadata from "~/services/template/custom-metadata-style";
import Attachment from "~/components/core/Attachment";
import Title from "~/components/core/Title";

type ItemProps = {
  item: BlockItemUI;
  block: BlockUI;
  itemIndex: number;
  blockIndex: number;
};

function LinearBlockItem({ item, itemIndex, blockIndex, block }: ItemProps) {
  const blockRef = useRef<HTMLDivElement>(null);

  const {
    hasTitle,
    hasDescription,
    hasLink,
    hasImage,
    hasText,
    attachmentIsVideo,
  } = BlockItemProperties(item);

  const attributes: AttributesModel = {
    "block-index": blockIndex,
    "block-layout": block.blockLayout,
    "block-image": block.attachmentUrl !== "",

    "has-image": hasImage,
    "is-item-video": attachmentIsVideo,
    "item-index": itemIndex,
  };

  if (!hasText && !hasImage) return <div className="hidden -mb-px"></div>

  return (
    <>
      <div
      ref={blockRef}
      className={`LinearBlockItem OverrideLinearBlockItem group`}
    >
      <Attributes applyTo={blockRef} attributes={attributes} />
      <Metadata applyTo={blockRef} metadata={block.metadata} />
      <div
        className={`LinearBlockItem--container OverrideLinearBlockItem--container`}
      >
        {hasImage && (
          <div
            className={`LinearBlockItemContainer--first-slot OverrideLinearBlockItemContainer--first-slot`}
          >
            <div
              className={`LinearBlockItem--attachment OverrideLinearBlockItem--attachment`}
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
        {hasText && (
          <div
            className={`LinearBlockItemContainer--second-slot OverrideLinearBlockItemContainer--second-slot`}
          >
            {hasTitle && (
              <Title
                size={blockIndex === 0 ? "2" : "3"}
                className={`LinearBlockItem--title OverrideLinearBlockItem--title`}
              >
                {item.title}
              </Title>
            )}
            {hasDescription && (
              <div className={`LinearBlockItem--description OverrideLinearBlockItem--description`} dangerouslySetInnerHTML={{ __html: item.description}} />
            )}
            {hasLink && (
              <WebsiteLink
                url={item.linkUrl}
                className={`LinearBlockItem--link OverrideLinearBlockItem--link`}
                metadata={item.linkMetadata}
              >
                {item.linkTitle}
              </WebsiteLink>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default function LinearBlockItems({
  block,
  index,
}: LinearBlockItemsProps) {
  return block.items.map((item, bIndex) => (
    <LinearBlockItem
      key={`${index}-${bIndex}`}
      item={item}
      itemIndex={bIndex}
      block={block}
      blockIndex={index}
    />
  ));
}

export type LinearBlockItemsProps = {
  block: BlockUI;
  index: number;
};
