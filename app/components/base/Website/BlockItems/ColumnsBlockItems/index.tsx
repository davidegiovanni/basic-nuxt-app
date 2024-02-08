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
        {hasText && (
          <div
            className={`ColumnsBlockItemContainer--second-slot OverrideColumnsBlockItemContainer--second-slot`}
          >
            {
              hasLabel && (
                <p className={`ColumnsBlockItem--label OverrideColumnsBlockItem--label`}>
                    {label}
                  </p>
              )
            }
            {hasTitle && (
              <Title
                size={blockIndex === 0 ? "2" : "3"}
                className={`ColumnsBlockItem--title OverrideColumnsBlockItem--title`}
              >
                {item.title}
              </Title>
            )}
            {hasDescription && (
              <Description
                size={blockIndex === 0 ? "3" : ""}
                className={`ColumnsBlockItem--description OverrideColumnsBlockItem--description`}
              >
                <div dangerouslySetInnerHTML={{ __html: item.description}} />
              </Description>
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
