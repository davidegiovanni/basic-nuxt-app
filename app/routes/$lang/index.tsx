import { json, LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, NavLink, useCatch, useLoaderData, useLocation, useParams } from "@remix-run/react";
import { safeGet } from "~/utils/safe-post";
import { loadTranslations } from "~/helpers/i18n";
import { Feed, FeedItem, WebPageModel, WebSectionModel } from "api/models";
import metadata from '~/utils/metadata'
import link from '~/utils/links'
import { fluidType } from '~/utils/helpers'
import { Attachment } from "~/components/Attachment";

export const links: LinksFunction = () => {
  return link(
    {
      canonical: 'https://davidegiovanni.com/it-it',
      alternate: 'https://davidegiovanni.com/en-en'
    }
  )
};

export const meta: MetaFunction = ({ data, location }) => {
  let title = 'Website error'
  let description = 'The website didn\'t load correctly'
  let image = ''
  let url = 'https://davidegiovanni.com' + location.pathname

  if (data !== undefined) {
    const { page, origin } = data as LoaderData;
    title = (page.title !== '' ? page.title : "Homepage") + ' | Davide G. Steccanella'
    description = page.description !== '' ? page.description : page.title
    image = page.image !== '' ? page.image : ''
    url = origin + location.pathname
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
  origin: string
};

export const loader: LoaderFunction = async ({request, params}) => {
  const i18n = loadTranslations<I18nKeys>(params.lang as string, i18nKeys);
  const origin = new URL(request.url).origin

  let lang = 'en-US'

  const [websiteRes, websiteErr] = await safeGet<any>(request, `https://cdn.revas.app/websites/v0/websites/davidegiovanni.com?public_key=01exy3y9j9pdvyzhchkpj9vc5w&language_code=${lang}`)
  if (websiteErr !== null) {
    throw new Error(`API website: ${websiteErr.message} ${websiteErr.code}`);
  }
  const logo = websiteRes.website.theme.logoUrl
  const primary = websiteRes.website.theme.primaryColor
  const secondary = websiteRes.website.theme.invertedPrimaryColor

  const [pageRes, pageErr] = await safeGet<any>(request, `https://cdn.revas.app/websites/v0/websites/davidegiovanni.com/pages/index?public_key=01exy3y9j9pdvyzhchkpj9vc5w&language_code=${lang}`)
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
    logo,
    origin
  }

  return json(loaderData)
};

export default function Index() {
  const { i18n, sections, logo, primary, secondary } = useLoaderData<LoaderData>();
  const params = useParams()

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-white">
      <div className="w-full lg:text-lg flex-none h-fit">
        <span>
          {
            sections.map((s, index) => (
              index === 0 ? 
              <span className="mr-2 last:mr-0" key={index}>
                <h1 className="inline-block"><span className="font-bold">{s.title}</span> <span className="italic">{s.description}</span></h1>
                {
                  s.primaryLink.url ? <a href={s.primaryLink.url} className="text-blue-500 underline hover:text-blue-800 visited:text-purple-700 ml-2"  target="_blank" rel="noopener">{s.primaryLink.title}</a> : null
                }
              </span> :
              <span className="mr-2 last:mr-0" key={index}>
                <span>
                  <span>{s.title} </span> <span className="italic">{s.description}</span>
                </span>
                {
                s.primaryLink.url ? <a href={s.primaryLink.url} className="text-blue-500 underline hover:text-blue-800 visited:text-purple-700 ml-2" target="_blank" rel="noopener">{s.primaryLink.title}</a> : null
              }
              </span>
            ))
          }
        </span>
      </div>
      <div className="w-full flex-1 h-8">
        <Attachment size="object-fill" attachment={{
          id: "",
          mediaType: "image/",
          url: sections[0].image,
          description: ""
        }} />
      </div>
    </div>
  );
}