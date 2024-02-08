import { Link as RemixLink } from "@remix-run/react";
import type { ReactNode } from "react";
import { useRef } from "react";
import type { Attributes as AttributesModel } from "~/models";
import Attributes from "~/services/template/custom-attributes";
import Metadata from "~/services/template/custom-metadata-style";

const WebsiteLink = function LinkConstructor({
  metadata,
  url,
  className,
  children,
  attributes,
}: WebsiteLinkProps) {
  return (
    <Link
      metadata={metadata}
      url={url}
      className={className}
      attributes={attributes}
    >
      {children}
    </Link>
  );
};

//
//
// Link internal utils
export interface WebsiteLinkProps {
  url: string;
  metadata: Record<string, string>;
  className?: string;
  children?: ReactNode;

  attributes?: AttributesModel;
}

const Link = function LinkConstructor({
  metadata,
  url,
  className,
  children,
  attributes,
}: WebsiteLinkProps): ReactNode {
  const blockRef = useRef<HTMLAnchorElement>(null);

  if (isExternalLink(url)) {
    return (
      <a
        ref={blockRef}
        href={url}
        className={className}
        target="_blank"
        rel="noopener, noreferrer"
      >
        <Attributes applyTo={blockRef} attributes={attributes || {}} />
        <Metadata applyTo={blockRef} metadata={metadata} />
        {children}
      </a>
    );
  }

  return (
    <RemixLink ref={blockRef} to={url} className={className}>
      <Attributes applyTo={blockRef} attributes={attributes || {}} />
      <Metadata applyTo={blockRef} metadata={metadata} />
      {children}
    </RemixLink>
  );
};

function isExternalLink(url: string): boolean {
  const EXTERNAL_URL_RE = /^[a-z]+:/i;
  return EXTERNAL_URL_RE.test(url);
}

export default WebsiteLink;
