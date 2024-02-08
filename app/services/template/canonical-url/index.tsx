import { useEffect } from "react";

export type CanonicalUrlProps = {
    url: string;
}

export default function CanonicalUrl({ url }: CanonicalUrlProps) {
  useEffect(() => {
    const links = document.getElementsByTagName('link');
    const canonicalLinks = Array.from(links).filter(link => link.rel  === 'canonical')

    if (canonicalLinks.length > 0) {
      canonicalLinks[0].href = url
    } else {
      const canonicalUrlLink = document.createElement('link');
      canonicalUrlLink.rel = 'canonical';
      canonicalUrlLink.href = url;
      document.head.appendChild(canonicalUrlLink);
    }
  });

  return null
}
