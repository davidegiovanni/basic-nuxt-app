import type { AuthorUI } from "~/models";

import WebsiteLink from "~/components/core/Link";
import Attachment from "~/components/core/Attachment";

export interface AuthorsProps {
  authors: AuthorUI[];
}

export default function Authors({ authors }: AuthorsProps) {
  return authors.map((author, index) => (
    <div key={`a-${index}`} className={`Author OverrideAuthor`}>
      {author.attachmentUrl !== "" && (
        <div data-attachment-width="auto" className={`Author--image group OverrideAuthor--image`}>
          <Attachment
            attachmentUrl={author.attachmentUrl}
            attachmentMediaType={author.attachmentMediaType}
            attachmentCaption={author.attachmentCaption}
            attachmentDescription={author.attachmentDescription}
            metadata={author.attachmentMetadata}
          />
        </div>
      )}
      <div className={`Author--container OverrideAuthor--container`}>
        <p className={`Author--title OverrideAuthor--title`}>{author.title}</p>
        <p className={`Author--description OverrideAuthor--description`}>
          {author.description}
        </p>
        {author.links.length > 0 && (
          <div className={`Author--links OverrideAuthor--links`}>
            {author.links.map((link, lIndex) => (
              <WebsiteLink
                key={`al-${lIndex}`}
                url={link.url}
                metadata={link.metadata}
                className={`Author--link OverrideAuthor--link`}
              >
                {link.title}
              </WebsiteLink>
            ))}
          </div>
        )}
      </div>
    </div>
  ));
}
