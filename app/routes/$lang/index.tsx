import { json, LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, NavLink, useCatch, useLoaderData, useLocation, useParams } from "@remix-run/react";
import { safeGet } from "~/utils/safe-post";
import { loadTranslations } from "~/helpers/i18n";
import { WebPageModel, WebSectionModel } from "api/models";
import metadata from '~/utils/metadata'
import link from '~/utils/links'
import { fluidType } from '~/utils/helpers'

export const links: LinksFunction = () => {
  return link(
    {
      canonical: 'https://illos.davidegiovanni.com/it-it',
      alternate: 'https://illos.davidegiovanni.com/en-en'
    }
  )
};

export const meta: MetaFunction = ({ data, location }) => {
  let title = 'Website error'
  let description = 'The website didn\'t load correctly'
  let image = ''
  let url = 'https://illos.davidegiovanni.com' + location.pathname

  if (data !== undefined) {
    const { page } = data as LoaderData;
    title = (page.title !== '' ? page.title : "Homepage") + ' | Davide G. Steccanella'
    description = page.description !== '' ? page.description : "Illustrazioni di Davide Giovanni Steccanella"
    image = page.image !== '' ? page.image : ''
    url = 'https://illos.davidegiovanni.com' + location.pathname
  }

  return metadata(
    {
      title: title, 
      description: description, 
      image: image, 
      url: url, 
      robots: 'follow', 
      type: 'website',
    }
  )
};

const i18nKeys = ["shared"] as const;
type I18nKeys = typeof i18nKeys[number];

type LoaderData = {
  i18n: Record<I18nKeys, any>;
  page: WebPageModel;
  sections: WebSectionModel[];
  logo: string;
  primary: string;
  secondary: string;
};

export const loader: LoaderFunction = async ({request, params}) => {
  const i18n = loadTranslations<I18nKeys>(params.lang as string, i18nKeys);

  let lang = params.lang === 'it-it' ? 'it-IT' : 'en-US'

  const [websiteRes, websiteErr] = await safeGet<any>(request, `https://cdn.revas.app/websites/v0/websites/illustrations.davidegiovanni.com?public_key=01exy3y9j9pdvyzhchkpj9vc5w&language_code=${lang}`)
  if (websiteErr !== null) {
    throw new Error(`API website: ${websiteErr.message} ${websiteErr.code}`);
  }
  const logo = websiteRes.website.theme.logoUrl
  const primary = websiteRes.website.theme.primaryColor
  const secondary = websiteRes.website.theme.invertedPrimaryColor

  const [pageRes, pageErr] = await safeGet<any>(request, `https://cdn.revas.app/websites/v0/websites/illustrations.davidegiovanni.com/pages/index?public_key=01exy3y9j9pdvyzhchkpj9vc5w&language_code=${lang}`)
  if (pageErr !== null) {
    throw new Error(`API page: ${pageErr.message} ${pageErr.code}`);
  }

  const page: WebPageModel = pageRes.page

  const sections: WebSectionModel[] = page.sections

  const loaderData: LoaderData = {
    i18n,
    page: page,
    sections: sections,
    primary,
    secondary,
    logo
  }

  return json(loaderData)
};

export default function Index() {
  const { i18n, sections, logo, primary, secondary } = useLoaderData<LoaderData>();
  const params = useParams()

  const feeds: WebSectionModel[] = sections.length > 1 ? sections.splice(1) : [] as WebSectionModel[]

  const theme = {
    primary: primary || '#ffffff',
    secondary: secondary || '#000000'
  }

  const dynamicClass = `bg-white text-black h-full w-full flex flex-col-reverse lg:flex-row overflow-hidden items-stretch`

  return (
    <div className={dynamicClass}>
      <div className="w-full flex-1 lg:flex-none lg:w-4/12  max-w-screen-md flex flex-col items-center justify-between p-4 md:px-6 lg:px-12">
        <div className="h-16 w-full mb-8 lg:my-4">
          <img src={logo} className="h-full w-auto" alt="" />
        </div>
        <div className="overflow-y-auto">
          <h1 style={{ fontSize: fluidType(24, 48, 300, 2400, 1.5).fontSize, lineHeight: fluidType(20, 32, 300, 2400, 1.5).lineHeight }} className="w-full">{sections[0].title}</h1>
          <div className="columns-2 gap-4 py-4 my-4 border-y border-black w-full">
            <h2 className="text-justify" style={{ fontSize: fluidType(16, 12, 300, 2400, 1.5).fontSize, lineHeight: fluidType(12, 16, 300, 2400, 1.5).lineHeight }}>
              {sections[0].description}
            </h2>
          </div>
          <div className="flex items-center justify-between">
            { feeds.map((f, index) => (
              <Link to={`/${params.lang}/${f.description}`} className="uppercase underline hover:opacity-50">
                {index + 1}. {f.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: theme.primary}} className={`w-full flex-1 overflow-hidden relative flex items-center justify-center p-4`}>
        <img src={sections[0].image} className="scale-150 lg:transform-none h-auto w-full lg:w-2/3 lg:h-auto object-cover" alt="" />
      </div>
    </div>
  );
}