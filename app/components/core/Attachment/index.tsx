import { useEffect, useRef, useState } from "react";

import type { Attributes as AttributesModel } from "~/models";

import Attributes from "~/services/template/custom-attributes";
import Metadata from "~/services/template/custom-metadata-style";

const ATTACHMENT_SIZES = [600, 800, 1024, 1280, 1536];
const IMAGE_TPES = ["avif", "webp"];
const VIDEO_TYPES = ["application/vnd.youtube.video"];

export default function Attachment({
  attachmentUrl,
  attachmentMediaType,
  attachmentCaption,
  attachmentDescription,
  metadata,
  attributes,
  className,
}: AttachmentProps) {
  const blockRef = useRef<any>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const callbackFunction = (entries: any) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (blockRef.current) observer.observe(blockRef.current)

    return () => {
      if (blockRef.current) observer.unobserve(blockRef.current)
    }
  }, [blockRef])

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  if (isVideo(attachmentMediaType, attachmentUrl)) {
    return (
      <>
        <iframe
          ref={blockRef}
          className={`Attachment--video ${className} OverrideAttachment--video`}
          src={attachmentUrl}
          title={attachmentDescription}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          role="presentation"
        ></iframe>
        {attributes && (
          <Attributes applyTo={blockRef} attributes={attributes} />
        )}
        {metadata && <Metadata applyTo={blockRef} metadata={metadata} />}
      </>
    );
  }

  return (
    <figure
      ref={blockRef}
      data-is-visible={isVisible}
      data-is-loaded={isLoaded}
      className={`Attachment--figure ${className} group OverrideAttachment--figure`}
      key={attachmentUrl}
      role="figure"
    >
      {attributes && <Attributes applyTo={blockRef} attributes={attributes} />}
      {metadata && <Metadata applyTo={blockRef} metadata={metadata} />}
      {isVisible && <picture className="AttachmentFigure--picture OverrideAttachmentFigure--picture">
        {IMAGE_TPES.map((type, index) => (
          <source
            key={`source-${type}-${index}`}
            type={`image/${type}`}
             sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 800px) 800px, 600px"
            srcSet={buildSrcset(attachmentUrl, type, ATTACHMENT_SIZES)}
            className="AttachmentPicture--source OverrideAttachmentPicture--source"
          />
        ))}
        <img
          srcSet={buildSrcset(attachmentUrl, "", ATTACHMENT_SIZES)}
           sizes="(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 800px) 800px, 600px"
          src={attachmentUrl}
          loading="lazy"
          decoding="async"
          alt={attachmentDescription}
          onLoad={() => setIsLoaded(true)}
          className="AttachmentPicture--image OverrideAttachmentPicture--image"
        />
      </picture>}
      {attachmentCaption !== "" && (
        <p className="AttachmentFigure--caption OverrideAttachmentFigure--caption">
          {attachmentCaption}
        </p>
      )}
    </figure>
  );
}

function buildSrcset(url: any, format: string, sizes: number[]): any {
  const u = url.replace("cdn.revas.app", "static.eu1.revas-cdn.com");
  const urls = sizes.map(
    (size) => `${u}?format=${format}&size=${size}w ${size}w`,
  );
  return urls.join(",");
}

// const responsiveImageSizes = (sizes: number[]): string => {
//   let formattedSizes: string[] = [];
//   sizes.forEach((size) =>
//     formattedSizes.push(`(min-width: ${size}px) ${size}px`),
//   );
//   return formattedSizes.join(", ").trim().toString();
// };

export const isVideo = (mediaType: string, url: string) => {
  return (
    VIDEO_TYPES.find((vt) => vt === mediaType) !== undefined ||
    url.includes("youtube")
  );
};

export interface AttachmentProps {
  attachmentUrl: string;
  attachmentMediaType: string;
  attachmentCaption: string;
  attachmentDescription: string;

  metadata?: Record<string, string>;
  attributes?: AttributesModel;
  className?: string;
}
