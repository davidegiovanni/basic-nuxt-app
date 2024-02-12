import type { BlockUI, BlockItemUI } from "~/models";
import GridBlockItems from "./GridBlockItems";
import ColumnsBlockItems from "./ColumnsBlockItems";
import LinearBlockItems from "./LinearBlockItems";
import { isVideo } from "~/components/core/Attachment";
import FeedItems from "~/components/custom/FeedItems";
import { BlockProperties } from "../Block";
import Attributes from "~/services/template/custom-attributes";
import Metadata from "~/services/template/custom-metadata-style";
import { useRef } from "react";

export type BlockItemsProps = {
  block: BlockUI;
  index: number;
};

export default function PageBlockItems({ block, index }: BlockItemsProps) {
  const layout = block.itemsLayout;
  const blockRef = useRef<HTMLDivElement| null>(null)

  const { hasFeed, columns } = BlockProperties(block)

  if (hasFeed)
    return (
      <div className="FeedPage--items OverrideFeedPage--items">
        <FeedItems items={block.items.map(item => {
          return {
            ...item,
            publishedOn: "",
            content: "",
            url: item.linkUrl
          }
        })} />
      </div>
    );


  if (layout === "columns")
    return (
      <div ref={blockRef} className="BlockItemsColumns OverrideBlockItemsColumns">
        <Attributes applyTo={blockRef} attributes={{
          "data-cols": columns
        }} />
        <Metadata applyTo={blockRef} metadata={block.metadata} />
        {
          Array.from({ length: columns }, (_, i) => (
            <ColumnsBlockItems key={i} block={block} index={index} column={i} columns={columns} />
          ))
        }
      </div>
    );

  if (layout === "grid")
    return (
      <div className="BlockItemsGrid OverrideBlockItemsGrid">
        <GridBlockItems block={block} index={index} />
      </div>
    );

  return (
    <div className="BlockItemsLinear OverrideBlockItemsLinear">
      <LinearBlockItems block={block} index={index} />
    </div>
  );
}

export const BlockItemProperties = (blockItem: BlockItemUI) => {
  const hasTitle = blockItem.title !== "";
  const hasDescription = blockItem.description !== "";
  const hasLink = blockItem.linkUrl !== "";
  const hasText = hasTitle || hasDescription || hasLink;
  const hasImage = blockItem.attachmentUrl !== "";
  const attachmentIsVideo = isVideo(
    blockItem.attachmentMediaType,
    blockItem.attachmentUrl,
  );

  return {
    hasTitle,
    hasDescription,
    hasLink,
    hasImage,
    hasText,
    attachmentIsVideo,
  };
};
