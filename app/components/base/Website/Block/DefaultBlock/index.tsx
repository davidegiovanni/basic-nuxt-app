import { useRef } from "react";

import Attributes from "~/services/template/custom-attributes";
import Metadata from "~/services/template/custom-metadata-style";
import Attachment from "~/components/core/Attachment";
import PageBlockItems from "~/components/base/Website/BlockItems";
import WebsiteLink from "~/components/core/Link";
import Injection from "~/services/template/code-injection";
import Title from "~/components/core/Title";

import type { BlockUI, Attributes as AttributesModel } from "~/models";

import { BlockProperties } from "..";

export type DefaultBlockProps = {
  index: number;
  block: BlockUI;
};

export default function DefaultBlock({ index, block }: DefaultBlockProps) {
  const blockRef = useRef<HTMLDivElement>(null);

  const {
    hasTitle,
    hasDescription,
    hasLink,
    hasImage,
    hasText,
    hasItems,
    attachmentIsVideo,
    hasFeed
  } = BlockProperties(block);

  const attributes: AttributesModel = {
    index: index,
    "has-text": hasText,
    "has-image": hasImage,
    "has-items": hasItems,
    "block-layout": block.blockLayout,
    "is-video": attachmentIsVideo,
  };

  if (block.html !== "") {
    return (
      <div ref={blockRef}>
        <Injection position="inline" code={block.html} targetDiv={blockRef} />
      </div>
    );
  }

  return (
    <section ref={blockRef} className={`DefaultBlock OverrideDefaultBlock group`}>
      <Attributes applyTo={blockRef} attributes={attributes} />
      <Metadata applyTo={blockRef} metadata={block.metadata} />
      <div
        className={`DefaultBlock--container OverrideDefaultBlock--container`}
      >
        {hasText && (
          <div
            className={`DefaultBlockContainer--first-slot OverrideDefaultBlockContainer--first-slot`}
          >
            {hasTitle && (!hasFeed || !hasLink) && (
              <Title
                size={index === 0 ? "1" : "2"}
                className={`DefaultBlock--title OverrideDefaultBlock--title`}
              >
                {block.title}
              </Title>
            )}
            {hasFeed && hasLink && (
              <div>
                <WebsiteLink
                  url={block.linkUrl}
                  className={`DefaultBlock--clickable-title OverrideDefaultBlock--clickable-title`}
                  metadata={block.linkMetadata}
                >
                  <Title
                    size={index === 0 ? "1" : "2"}
                    className={`DefaultBlock--title OverrideDefaultBlock--title`}
                  >
                    {block.title}
                    <svg className="DefaultBlock--icon OverrideDefaultBlock--icon" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </Title>
                </WebsiteLink>
              </div>
            )}
            {hasDescription && (
              <div className={`DefaultBlock--description OverrideDefaultBlock--description`} dangerouslySetInnerHTML={{ __html: block.description}} />
            )}
            {hasLink && !hasFeed && (
              <div>
                <WebsiteLink
                  url={block.linkUrl}
                  className={`TextLink__base-size OverrideTextLink__base-size`}
                  metadata={block.linkMetadata}
                >
                  {block.linkTitle}
                  <svg className="DefaultLinkIcon__small-size OverrideDefaultLinkIcon__small-size" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </WebsiteLink>
              </div>
            )}
          </div>
        )}
        {hasImage && (
          <div
            className={`DefaultBlockContainer--second-slot OverrideDefaultBlockContainer--second-slot`}
          >
            <div
              className={`DefaultBlock--attachment OverrideDefaultBlock--attachment`}
            >
              <Attachment
                attachmentUrl={block.attachmentUrl}
                attachmentMediaType={block.attachmentMediaType}
                attachmentCaption={block.attachmentCaption}
                attachmentDescription={block.attachmentDescription}
                metadata={block.attachmentMetadata}
              />
            </div>
          </div>
        )}
      </div>
      {hasItems && (
        <div
          className={`DefaultBlock--items-wrapper OverrideDefaultBlock--items-wrapper`}
        >
          <div
            className={`DefaultBlock--items-container OverrideDefaultBlock--items-container`}
          >
            <PageBlockItems block={block} index={index} />
          </div>
        </div>
      )}
    </section>
  );
}
