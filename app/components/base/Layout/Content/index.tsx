import { useRef } from "react";

import Attributes from "~/services/template/custom-attributes";
import Metadata from "~/services/template/custom-metadata-style";
import Title from "~/components/core/Title";
import Description from "~/components/core/Description";

import type { Attributes as AttributesModel } from "~/models";
import Attachment, { isVideo } from "~/components/core/Attachment";
import { Link } from "@remix-run/react";

export type ContentLayoutProps = {
  feedTitle: string;
  feedPath: string;

  title: string;
  description: string;

  attachmentUrl: string;
  attachmentMediaType: string;
  attachmentDescription: string;
  attachmentCaption: string;
  attachmentMetadata: Record<string,string>;

  content: string;
  publishedOn: string;

  metadata: Record<string, string>
}

export const Content = function ContentLayout({feedTitle, feedPath, title, description, attachmentUrl, attachmentCaption, attachmentDescription, attachmentMediaType, attachmentMetadata, content, publishedOn, metadata }: ContentLayoutProps) {
  const blockRef = useRef<HTMLDivElement>(null);

  const hasTitle = title !== ""
  const hasDescription = description !== ""
  const hasImage = attachmentUrl !== ""
  const hasPublishedOn = publishedOn !== ""
  const hasContent = content !== ""
  const hasFeedTitle = feedTitle !== ""
  const hasText = hasTitle || hasDescription || hasPublishedOn || hasFeedTitle

  const attributes: AttributesModel = {
    "has-text": hasText,
    "has-image": hasImage,
    "has-content": hasContent,
    "is-video": isVideo(attachmentMediaType, attachmentUrl),
  };

  return (
    <div ref={blockRef} className={`ContentPage OverrideContentPage group`}>
      <Attributes applyTo={blockRef} attributes={attributes} />
      <Metadata applyTo={blockRef} metadata={metadata} />
      <header className={`ContentPage--header OverrideContentPage--header group`}>
        <div
          className={`ContentHeader--container OverrideContentHeader--container`}
        >
          {hasText && (
            <div
              className={`ContentHeaderContainer--first-slot OverrideContentHeaderContainer--first-slot`}
            >
              {
                hasFeedTitle && (
                  <Link to={feedPath} className={`ContentHeader--feed-title OverrideContentHeader--feed-title`}>
                    {feedTitle}
                  </Link>
                )
              }
              {hasTitle && (
                <Title
                  size={"1"}
                  className={`ContentHeader--title OverrideContentHeader--title`}
                >
                  {title}
                </Title>
              )}
              {hasDescription && (
                <Description
                  size={"2"}
                  className={`ContentHeader--description OverrideContentHeader--description`}
                >
                  {description}
                </Description>
              )}
              {hasPublishedOn && (
                <Description
                  size={""}
                  className={`ContentHeader--published-date OverrideContentHeader--published-date`}
                >
                  {publishedOn}
                </Description>
              )}
            </div>
          )}
          {hasImage && (
            <div
              className={`ContentHeaderContainer--second-slot OverrideContentHeaderContainer--second-slot`}
            >
              <div
                className={`ContentHeader--attachment OverrideContentHeader--attachment`}
              >
                <Attachment
                  attachmentUrl={attachmentUrl}
                  attachmentMediaType={attachmentMediaType}
                  attachmentCaption={attachmentCaption}
                  attachmentDescription={attachmentDescription}
                  metadata={attachmentMetadata}
                />
              </div>
            </div>
          )}
        </div>
      </header>
      {
        hasContent && (
          <div className={`ContentPage--content-slot OverrideContentPage--content-slot group`}>
            <article className="ContentPage--content">
              <div className="w-full" dangerouslySetInnerHTML={{ __html: content}}></div>
            </article>
          </div>
        )
      }
    </div>
  )
}