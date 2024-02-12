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

function GridBlockItem({ item, itemIndex, blockIndex, block }: ItemProps) {
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
    "is-grid-item": true,
    "block-index": blockIndex,
    "block-layout": block.blockLayout,
    "block-image": block.attachmentUrl !== "",

    "has-item-image": hasImage,
    "is-item-video": attachmentIsVideo,
    "item-index": itemIndex,
  };

  if (!hasText && !hasImage) return <div className="hidden -mb-px"></div>

  return (
    <div ref={blockRef} className={`GridBlockItem OverrideGridBlockItem group`}>
      <Attributes applyTo={blockRef} attributes={attributes} />
      <Metadata applyTo={blockRef} metadata={block.metadata} />
      <div
        className={`GridBlockItem--container OverrideGridBlockItem--container`}
      >
        {hasImage && (
          <div
            className={`GridBlockItemContainer--first-slot OverrideGridBlockItemContainer--first-slot`}
          >
            <div
              data-is-clickable={!hasTitle && !hasDescription && hasLink && hasImage}
              className={`GridBlockItem--attachment OverrideGridBlockItem--attachment`}
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
        {hasText && !(!hasTitle && !hasDescription && hasLink && hasImage)  && (
          <div
            className={`GridBlockItemContainer--second-slot OverrideGridBlockItemContainer--second-slot`}
          >
            {hasTitle && (
              <Title
                size={blockIndex === 0 ? "2" : "3"}
                className={`GridBlockItem--title OverrideGridBlockItem--title`}
              >
                {item.title}
              </Title>
            )}
            {hasDescription && (
              <div className={`GridBlockItem--description OverrideGridBlockItem--description`} dangerouslySetInnerHTML={{ __html: item.description}} />
            )}
            {hasLink && (
              <WebsiteLink
                url={item.linkUrl}
                className={`GridBlockItem--link OverrideGridBlockItem--link`}
                metadata={item.linkMetadata}
              >
                {item.linkTitle}
              </WebsiteLink>
            )}
          </div>
        )}
        {!hasTitle && !hasDescription && hasLink && hasImage && (
          <div className="bg-white lg:translate-y-full group-data-[is-grid-item]:group-hover:lg:translate-y-0 group-data-[is-grid-item]:group-focus:lg:translate-y-0 p-4 absolute bottom-0 inset-x-0 transition-all duration-300 ease-in-out border-t border-black">
            <div className="hidden lg:block w-10 rounded-full bg-white shadow absolute top-0 inset-x-0 mx-auto -translate-y-4 h-1" />
            <WebsiteLink
                url={item.linkUrl}
                className={`GridBlockItem--link OverrideGridBlockItem--link`}
                metadata={item.linkMetadata}
              >
                {item.linkTitle}
              </WebsiteLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GridBlockItems({ block, index }: GridBlockItemsProps) {
  return block.items.map((item, bIndex) => (
    <GridBlockItem
      key={`${index}-${bIndex}`}
      item={item}
      itemIndex={bIndex}
      block={block}
      blockIndex={index}
    />
  ));
}

export type GridBlockItemsProps = {
  block: BlockUI;
  index: number;
};
