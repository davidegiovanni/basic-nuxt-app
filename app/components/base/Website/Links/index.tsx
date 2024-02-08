import type { WebsiteLinkUI } from "~/models";

import Link from "~/components/core/Link";

export interface LinksProps {
  links: WebsiteLinkUI[];
  className: string;
}

export default function Links({ links, className }: LinksProps) {
  return links.map((link, index) => (
    <Link
      key={`link-${index}`}
      url={link.url}
      metadata={link.metadata}
      className={className}
    >
      {link.title}
    </Link>
  ));
}
