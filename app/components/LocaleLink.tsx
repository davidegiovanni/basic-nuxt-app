import type { RemixLinkProps } from "@remix-run/react/components";
import { Link, useParams } from "@remix-run/react";

/**
 * Get a link with the current locale parameter
 * @returns A localized <Link>
 */
export const Link: React.FC<
  RemixLinkProps & React.RefAttributes<HTMLAnchorElement>
> = ({ children, ...args }) => {
  const { locale } = useParams();

  return (
    <Link {...args} to={`/${params.lang}/${locale}${args.to}`}>
      {children}
    </Link>
  );
};