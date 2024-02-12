import type { AuthorUI, BlockItemUI, SocialLinkUI, WebsiteLinkUI } from "~/models";

import WebsiteLinks from "~/components/base/Website/Links";
import SocialsLinks from "~/components/base/Website/Socials";
import MainItem from "~/components/base/Website/MainItem";
import Authors from "../Authors";
import { useTranslationsContext } from "~/services/template/i18n-provider";

export interface FooterProps {
  websiteTitle: string;
  logoUrl: string;
  authors?: AuthorUI[];
  links?: WebsiteLinkUI[];
  socials?: SocialLinkUI[];
  mainItem?: BlockItemUI;
}

export default function Footer({
  logoUrl,
  websiteTitle,
  authors,
  links,
  socials,
  mainItem,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslationsContext()

  return (
    <>
      {mainItem && <MainItem item={mainItem} />}
      <div className={`Footer OverrideFooter group`}>
        {((authors && authors.length > 0) || (links && links.length > 0) || (socials && socials.length > 0)) && <div className={`Footer--container OverrideFooter--container`}>
          {authors && (
            <div className={`Footer--authors OverrideFooter--authors`}>
              <Authors authors={authors} />
            </div>
          )}
          {links && (
            <div className={`Footer--links OverrideFooter--links`}>
              <WebsiteLinks
                links={links}
                className={`GhostLink__base-size OverrideGhostLink__base-size`}
              />
            </div>
          )}
          {socials && (
            <div className={`Footer--socials OverrideFooter--socials`}>
              <SocialsLinks
                links={socials}
                className={`GhostLink__base-size OverrideGhostLink__base-size`}
              />
            </div>
          )}
        </div>}
        <div className={`Footer--foot OverrideFooter--foot`}>
          <div
            className={`FooterFoot--container OverrideFooterFoot--container`}
          >
            <div className={`Footer--title OverrideFooter--title`}>
              {`Copyright © ${websiteTitle} — ${currentYear}`}
            </div>
            <div className="Footer--title">
              {t("fast_green_accessible_website_thanks_to")} <a href="https://www.revas.io/it-IT/features/web-marketing" className="underline">RevasOS</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
