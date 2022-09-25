import { Attachment } from "api/models";


type AttachmentProps = {
  attachment: Attachment;
  align?: string;
  size?: string;
};

export function Attachment(props: AttachmentProps) {
  function buildSrcset(url: any, format: string): any {
    const sizes = [600, 800, 1024];
    const urls = sizes.map(
      (size) => `${url}?format=${format}&size=${size}w ${size}w`
    );
    return urls.join(",");
  }

  return (
    <figure className="w-full h-full relative" role="figure">
      {props.attachment.mediaType.startsWith("image/") && (
        <picture className="h-full w-full">
          <source
            className={(props.align) + " " + (props.size ? props.size : "object-contain ") + " relative z-10 h-full w-full"}
            type="image/webp"
            sizes="(min-width: 1024px) 1024px, (min-width: 800px) 800px, 600px"
            srcSet={buildSrcset(props.attachment.url, "webp")}
          ></source>
          <img
            srcSet={buildSrcset(props.attachment.url, "")}
            sizes="(min-width: 1024px) 1024px, (min-width: 800px) 800px, 600px"
            src={props.attachment.url}
            className={(props.align) + " " + (props.size ? props.size : "object-contain ") + " relative z-10 h-full w-full"}
            alt={props.attachment.description}
            loading="lazy"
            decoding="async"
          />
        </picture>
      )}
      {props.attachment.mediaType === "application/vnd.youtube.video" && (
        <iframe
          className="w-full h-full relative z-10"
          src={props.attachment.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {props.attachment.url === "" && <div className="absolute inset-0 w-full h-full bg-gray-100 animate-pulse" />}
    </figure>
  );
}
