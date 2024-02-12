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

function ColumnsBlockItem({ item, itemIndex, blockIndex, block }: ItemProps) {
  const blockRef = useRef<HTMLDivElement>(null);

  const {
    hasTitle,
    hasDescription,
    hasLink,
    hasText,
    hasImage,
    attachmentIsVideo,
  } = BlockItemProperties(item);

  const attributes: AttributesModel = {
    "is-column-item": true,
    "block-index": blockIndex,
    "block-layout": block.blockLayout,
    "block-image": block.attachmentUrl !== "",

    "has-item-image": hasImage,
    "is-item-video": attachmentIsVideo,
    "item-index": itemIndex,
  };

  if (!hasText && !hasImage) return <div className="hidden -mb-px"></div>

  return (
    <div
      ref={blockRef}
      className={`ColumnsBlockItem OverrideColumnsBlockItem group`}
    >
      <Attributes applyTo={blockRef} attributes={attributes} />
      <Metadata applyTo={blockRef} metadata={block.metadata} />
      <div
        className={`ColumnsBlockItem--container OverrideColumnsBlockItem--container`}
      >
        {hasImage && (
          <div
            className={`ColumnsBlockItemContainer--first-slot OverrideColumnsBlockItemContainer--first-slot`}
          >
            <div
              data-is-clickable={!hasTitle && !hasDescription && hasLink && hasImage}
              className={`ColumnsBlockItem--attachment OverrideColumnsBlockItem--attachment`}
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
        {(hasTitle || hasDescription) && hasLink && (
          <div
            className={`ColumnsBlockItemContainer--second-slot OverrideColumnsBlockItemContainer--second-slot`}
          >
            {hasTitle && (
              <Title
                size={blockIndex === 0 ? "2" : "3"}
                className={`ColumnsBlockItem--title OverrideColumnsBlockItem--title`}
              >
                {item.title}
              </Title>
            )}
            {hasDescription && (
              <div className={`ColumnsBlockItem--description OverrideColumnsBlockItem--description`} dangerouslySetInnerHTML={{ __html: item.description}} />
            )}
            {hasLink && (
              <WebsiteLink
                url={item.linkUrl}
                className={`ColumnsBlockItem--link OverrideColumnsBlockItem--link`}
                metadata={item.linkMetadata}
              >
                {item.linkTitle}
              </WebsiteLink>
            )}
          </div>
        )}
        {!hasTitle && !hasDescription && hasLink && hasImage && (
          <div className="bg-white translate-y-full group-data-[is-column-item]:group-hover:translate-y-0 group-data-[is-column-item]:group-focus:translate-y-0 p-4 absolute bottom-0 inset-x-0 transition-all duration-300 ease-in-out border-t border-black">
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

export default function ColumnsBlockItems({
  block,
  index,
  columns, 
  column
}: ColumnsBlockItemsProps) {
  return (
    <div className="BlockItemsColumns--column OverrideBlockItemsColumns--column">
      {block.items.filter((_, itemIndex) => itemIndex % columns === column).map((item, bIndex) => (
        <ColumnsBlockItem
          key={`${index}-${bIndex}`}
          item={item}
          itemIndex={bIndex}
          block={block}
          blockIndex={index}
        />
      ))}
    </div>
  );
}

export type ColumnsBlockItemsProps = {
  block: BlockUI;
  index: number;
  columns: number;
  column: number;
};
