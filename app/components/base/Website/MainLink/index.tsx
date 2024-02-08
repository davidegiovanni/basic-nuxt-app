import type { WebsiteLinkUI } from "~/models";

import Link from "~/components/core/Link";

export interface MainLinkProps {
  link: WebsiteLinkUI;
  className: string;
}

export default function MainLink({ link, className }: MainLinkProps) {
  return (
    <Link url={link.url} metadata={link.metadata} className={className}>
      {link.title}
    </Link>
  );
}
