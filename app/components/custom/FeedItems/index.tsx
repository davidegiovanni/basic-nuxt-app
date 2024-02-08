import { useRef } from "react";
import type { FeedItemUI, Attributes as AttributesModel, } from "~/models"

import Attributes from "~/services/template/custom-attributes";
import Metadata from "~/services/template/custom-metadata-style";
import Attachment, { isVideo } from "~/components/core/Attachment";
import Title from "~/components/core/Title";
import Description from "~/components/core/Description";
import { Link } from "@remix-run/react";

type FeedItemProps = {
  item: FeedItemUI;
  index: number;
}

function FeedItem({ index, item }: FeedItemProps) {
  const blockRef = useRef<HTMLDivElement>(null);

  const hasImage = item.attachmentUrl !== ""
  const hasTitle = item.title !== ""
  const hasDescription = item.description !== ""
  const hasPublishedOn = item.publishedOn !== ""
  const hasLink = item.url !== ""
  const hasText = hasTitle || hasDescription

  const attributes: AttributesModel = {
    "has-image": hasImage,
    "is-item-video": isVideo(item.attachmentMediaType, item.attachmentUrl),
    "item-index": index,
    "has-link": hasLink,
    "feed-item": true
  };

  if (!hasLink) {
    return (
      <div ref={blockRef} className={`FeedBlockItem OverrideFeedBlockItem group`}>
        <Attributes applyTo={blockRef} attributes={attributes} />
        <Metadata applyTo={blockRef} metadata={item.metadata} />
        <div
          className={`FeedBlockItem--container OverrideFeedBlockItem--container`}
        >
          {hasImage && (
            <div
              className={`FeedBlockItemContainer--first-slot OverrideFeedBlockItemContainer--first-slot`}
            >
              <div
                className={`FeedBlockItem--attachment OverrideFeedBlockItem--attachment`}
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
              className={`FeedBlockItemContainer--second-slot OverrideFeedBlockItemContainer--second-slot`}
            >
              {hasTitle && (
                <Title
                  size={"2"}
                  className={`FeedBlockItem--title OverrideFeedBlockItem--title`}
                >
                  {item.title}
                </Title>
              )}
              {hasDescription && (
                <Description
                  size={"3"}
                  className={`FeedBlockItem--description OverrideFeedBlockItem--description`}
                >
                  {item.description}
                </Description>
              )}
              {hasPublishedOn && (
                <p
                  className={`FeedBlockItem--date OverrideFeedBlockItem--description`}
                >
                  {item.publishedOn}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
  
  return (
    <Link to={item.url} className="w-full h-full block" aria-label={item.title}>
      <div ref={blockRef} className={`FeedBlockItem OverrideFeedBlockItem group`}>
        <Attributes applyTo={blockRef} attributes={attributes} />
        <Metadata applyTo={blockRef} metadata={item.metadata} />
        <div
          className={`FeedBlockItem--container OverrideFeedBlockItem--container`}
        >
          {hasImage && (
            <div
              className={`FeedBlockItemContainer--first-slot OverrideFeedBlockItemContainer--first-slot`}
            >
              <div
                className={`FeedBlockItem--attachment OverrideFeedBlockItem--attachment`}
              >
                <Attachment
                  attachmentUrl={item.attachmentUrl}
                  attachmentMediaType={item.attachmentMediaType}
                  attachmentCaption={item.attachmentCaption}
                  attachmentDescription={item.attachmentDescription}
                  metadata={item.attachmentMetadata}
                  className={"FeedBlockItem--attachment-image OverrideFeedBlockItem--attachment-image"}
                />
              </div>
            </div>
          )}
          {hasText && (
            <div
              className={`FeedBlockItemContainer--second-slot OverrideFeedBlockItemContainer--second-slot`}
            >
              {hasTitle && (
                <Title
                  size={"2"}
                  className={`FeedBlockItem--title OverrideFeedBlockItem--title`}
                >
                  {item.title}
                </Title>
              )}
              {hasDescription && (
                <Description
                  size={"3"}
                  className={`FeedBlockItem--description OverrideFeedBlockItem--description`}
                >
                  {item.description}
                </Description>
              )}
              {hasPublishedOn && (
                <p
                  className={`FeedBlockItem--date OverrideFeedBlockItem--description`}
                >
                  {item.publishedOn}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export type FeedItemsProps = {
  items: FeedItemUI[]
}

export default function FeedItems ({ items }: FeedItemsProps) {
  return items.map((item, index) => (
    <FeedItem key={`${index}-${item.url}`} item={item} index={index} />
  ))
}