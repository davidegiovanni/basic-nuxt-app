import type { RemixLinkProps } from "@remix-run/react/components";
import { NavLink, useParams } from "@remix-run/react";

/**
 * Get a link with the current locale parameter
 * @returns A localized <Link>
 */
export const Link: React.FC<
  RemixLinkProps & React.RefAttributes<HTMLAnchorElement>
> = ({ children, ...args }) => {
  const { locale } = useParams();

  return (
    <NavLink {...args} to={`/${params.lang}/${locale}${args.to}`}>
      {children}
    </NavLink>
  );
};