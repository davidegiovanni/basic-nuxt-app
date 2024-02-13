import { useState } from "react";
import { Link } from "@remix-run/react";

import type { WebsiteLinkUI } from "~/models";

import NavigationLinks from "~/components/base/Website/Navigation";
import MainLink from "~/components/base/Website/MainLink";
import Attachment from "~/components/core/Attachment";
import { AnimatePresence, motion } from "framer-motion";
import LocaleConfigurator from "~/components/core/Toolbar/LocaleConfigurator";
import { useTranslationsContext } from "~/services/template/i18n-provider";

export interface HeaderProps {
  websiteTitle: string;
  logoUrl: string;
  navigation?: WebsiteLinkUI[];
  mainLink?: WebsiteLinkUI;
  locale: string;
}

export default function Header({
  logoUrl,
  websiteTitle,
  navigation,
  mainLink,
  locale
}: HeaderProps) {
  const [mobileMenuOpen, toggleMobileMenu] = useState<boolean>(false);
  const { t } = useTranslationsContext()

  return (
    <motion.div 
      initial={{
        translateY: "120%"
      }}
      animate={{
        translateY: 0
      }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut"
      }}
      className={`Header OverrideHeader group`}>
      <div
        className={`Header--desktop-wrapper OverrideHeader--desktop-wrapper`}
      >
        <div className={`Header--container OverrideHeader--container`}>
          <Link to={`/${locale}`} onClick={() => toggleMobileMenu(false)} className="select-none cursor-pointer">
            {logoUrl !== "" && (
              <div className="select-none cursor-pointer">
                <div data-attachment-width="auto" data-attachment-object="contain" className={`Header--logo group OverrideHeader--logo`}>
                  <Attachment
                    attachmentUrl={logoUrl}
                    attachmentMediaType={"image/"}
                    attachmentCaption={""}
                    attachmentDescription={websiteTitle}
                    metadata={{}}/>
                </div>
              </div>
            )}
            {logoUrl === "" && (
              <div>
                <div className={`Header--title OverrideHeader--title`}>
                  <p>{websiteTitle}</p>
                </div>
              </div>
            )}
          </Link>
          <nav
            className={`Header--desktop-links-wrapper OverrideHeader--desktop-links-wrapper`}
          >
            {navigation && (
              <ul
                className={`Header--desktop-links OverrideHeader--desktop-links`}
              >
                  <NavigationLinks
                    links={navigation}
                    className={`Header--desktop-link OverrideHeader--desktop-link`}
                  />
                  <LocaleConfigurator>
                    <p className="Header--desktop-link OverrideHeader--desktop-link">
                      <span className="sr-only">{t("change_language")}</span>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </p>
                  </LocaleConfigurator>
              </ul>
            )}
            {mainLink && (
              <span className="flex-1 lg:flex-none" onClick={() => toggleMobileMenu(false)}>
                <MainLink
                  link={mainLink}
                  className={`Header--desktop-main-link OverrideHeader--desktop-main-link`}
                />
              </span>
            )}
            <button
              data-menu-open={mobileMenuOpen}
              className={`Header--menu-button OverrideHeader--menu-button`}
              onClick={() => toggleMobileMenu(!mobileMenuOpen)}
              aria-label="Menu Button"
            >
              {mobileMenuOpen && (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
              {!mobileMenuOpen && (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </nav>
        </div>
      </div>
      <AnimatePresence>
      {mobileMenuOpen && (

        <motion.nav
          initial={{
            translateY: 0
          }}
          animate={{
            translateY: "-100%"
          }}
          exit={{
            translateY: 0
          }}
          className={`Header--mobile-wrapper OverrideHeader--mobile-wrapper`}
        >
          {navigation && (
            <ul
              className={`Header--mobile-links OverrideHeader--mobile-links`}
              onClick={() => toggleMobileMenu(false)}
            >
              <NavigationLinks
                links={navigation}
                className={`Header--mobile-link OverrideHeader--mobile-link`}
              />
            </ul>
          )}
          <LocaleConfigurator>
            <p className="Header--mobile-link OverrideHeader--mobile-link">
              {t("change_language")}
            </p>
          </LocaleConfigurator>
        </motion.nav>
      )}
      </AnimatePresence>
    </motion.div>
  );
}
