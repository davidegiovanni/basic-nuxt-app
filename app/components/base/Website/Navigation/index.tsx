import type { WebsiteLinkUI } from "~/models";

import Link from "~/components/core/Link";

export interface NavigationLinksProps {
  links: WebsiteLinkUI[];
  className: string;
}

export default function NavigationLinks({
  links,
  className,
}: NavigationLinksProps) {
  return links.map((link, index) => (
    <li key={`nav-${index}`}>
      <Link
        url={link.url}
        metadata={link.metadata}
        className={className}
      >
        {link.title}
      </Link>
    </li>
  ));
}
