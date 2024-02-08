import type { BlockUI } from "~/models";

import DefaultBlock from "./DefaultBlock";
import MainBlock from "./MainBlock";
import { isVideo } from "../../../core/Attachment";

export interface BlockProps {
  index: number;
  block: BlockUI;
}

export default function PageBlock({ index, block }: BlockProps) {
  let layout = block.blockLayout;

  if (layout === "main") {
    return <MainBlock index={index} block={block} />;
  }

  return <DefaultBlock index={index} block={block} />;
}

export const BlockProperties = (block: BlockUI) => {
  const hasTitle = block.title !== "";
  const hasDescription = block.description !== "";
  const hasLink = block.linkUrl !== "";
  const hasText = hasTitle || hasDescription || hasLink;
  const hasImage = block.attachmentUrl !== "";
  const hasHtml = block.html !== "";
  const hasItems = block.items.length > 0;
  const attachmentIsVideo = isVideo(
    block.attachmentMediaType,
    block.attachmentUrl,
  );
  const hasFeed = block.metadata.hasOwnProperty("feed_url") && block.metadata["feed_url"] !== ""

  return {
    hasTitle,
    hasDescription,
    hasLink,
    hasImage,
    hasText,
    hasItems,
    hasHtml,
    hasFeed,
    attachmentIsVideo,
  };
};
