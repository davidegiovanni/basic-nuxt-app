import type { ReactNode } from "react";
import type {
  Attributes as AttributesModel,
  AuthorUI,
  BlockItemUI,
  SocialLinkUI,
  WebsiteLinkUI,
  WebsiteNotificationUI,
} from "~/models";

import { useRef } from "react";
import Footer from "~/components/base/Website/Footer";
import Header from "~/components/base/Website/Header";
import Notification from "~/components/base/Website/Notification";

import Attributes from "~/services/template/custom-attributes";
import Metadata from "~/services/template/custom-metadata-style";

export default function AppLayout({
  logoUrl,
  websiteTitle,
  navigation,
  authors,
  links,
  socials,
  notification,
  mainLink,
  mainItem,
  locale,
  children,
  metadata,
}: AppLayoutProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const attributes: AttributesModel = {};

  return (
    <div ref={blockRef} className={`App group OverrideApp`}>
      <Attributes applyTo={blockRef} attributes={attributes} />
      <Metadata applyTo={blockRef} metadata={metadata} />
      {notification && <Notification notification={notification} />}
      <Header
        locale={locale}
        websiteTitle={websiteTitle}
        logoUrl={logoUrl}
        navigation={navigation}
        mainLink={mainLink}
      />
      {children}
      {<Footer
        websiteTitle={websiteTitle}
        logoUrl={logoUrl}
        mainItem={mainItem}
        authors={authors}
        links={links}
        socials={socials}
      />}
    </div>
  );
}

export interface AppLayoutProps {
  logoUrl: string;
  websiteTitle: string;
  locale: string;

  navigation?: WebsiteLinkUI[];
  authors?: AuthorUI[];
  links?: WebsiteLinkUI[];
  socials?: SocialLinkUI[];

  notification?: WebsiteNotificationUI;
  mainLink?: WebsiteLinkUI;
  mainItem?: BlockItemUI;

  children: ReactNode;
  metadata: Record<string, string>;
}
