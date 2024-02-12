import * as Menubar from '@radix-ui/react-menubar';
import { Link, useLocation } from '@remix-run/react';
import type { ReactNode} from 'react';
import { useState } from 'react';
import { useTranslationsContext } from '~/services/template/i18n-provider';

export type LocaleConfiguratorProps = {
  children: ReactNode;
}

export default function LocaleConfigurator({ children }: LocaleConfiguratorProps) {
  const { t, locales, currentLocale } = useTranslationsContext()
  const location = useLocation()
  const [menuBarOpen, toggleMenuBar] = useState(false)

  const formattedLocale = (locale: string): string => {
    return t(`language_${locale.toLowerCase()}`)
  }

  const translatedUrl = (pathname: string, locale: string): string => {
    const splitted = pathname.split("/").slice(2).join("/")
    return `/${locale}/${splitted}?selectedLocale=${locale}`
  }

  if (locales.length <= 1) return null

  return (
    <Menubar.Root className="Toolbar--locale-configurator OverrideToolbar--locale-configurator" onValueChange={() => toggleMenuBar(!menuBarOpen)}>
      <Menubar.Menu value="language-switcher">
        <Menubar.Trigger asChild>
          {children}
        </Menubar.Trigger>
        {
          menuBarOpen && (
            <Menubar.Content
              className="LocaleConfigurator--navigation-menu OverrideLocaleConfigurator--navigation-menu"
              sideOffset={0}
              align={"start"}
              alignOffset={0}>
              <Menubar.RadioGroup value={currentLocale} className="LocaleConfigurator--radio-group OverrideLocaleConfigurator--radio-group">
                {locales.map(locale => (
                  <Menubar.RadioItem value={locale} disabled={currentLocale === locale} asChild key={locale} className="LocaleNavigationMenu--link OverrideLocaleNavigationMenu--link">
                    <Link to={translatedUrl(location.pathname, locale)} reloadDocument>
                      {formattedLocale(locale)}
                    </Link>
                  </Menubar.RadioItem>
                ))}
              </Menubar.RadioGroup>
            </Menubar.Content>
          )
        }
      </Menubar.Menu>
    </Menubar.Root>
  );
}