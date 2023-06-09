import { json, LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, NavLink, useCatch, useLoaderData, useLocation, useParams } from "@remix-run/react";
import metadata from '~/utils/metadata'
import parse from 'html-react-parser'
import { fluidType, getContrast, isExternalLink } from '~/utils/helpers'
import { Attachment } from "~/components/Attachment";
import { website, page, feed } from "~/api";
import { Feed, FeedItem, Page, Website } from "~/models";

export const meta: MetaFunction = ({ data, location }) => {
  let title = 'Website error'
  let description = 'The website didn\'t load correctly'
  let image = ''
  let url = 'https://davidegiovanni.com' + location.pathname

  if (data !== undefined) {
    const loaderData = data as LoaderData;
    title = (loaderData.meta.title !== '' ? loaderData.meta.title : "Error") + ' | Davide Giovanni Steccanella'
    description = loaderData.meta.description !== '' ? loaderData.meta.description : title
    image = loaderData.meta.image !== '' ? loaderData.meta.image : ''
    url = 'https://davidegiovanni.com' + location.pathname
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

type LoaderData = {
  canonical: string;
  title: string;
  content: string;
  link: {
    title: string;
    url: string;
    isExternal: boolean;
  } | null,

  desktopMainImage: string;
  mobileMainImage: string;

  desktopBackgroundImage: string;
  mobileBackgroundImage: string;

  mainColor: string;
  textColor: string;

  meta: {
    title: string;
    description: string;
    image: string;
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const incomingLocale = params.lang || ""

  const [webRes, webErr] = await website(request, params)
  if (webErr !== null) {
    throw new Response(`Page do not exist: ${webErr.message} ${webErr.code}`, {
      status: 404,
    });
  }

  const websiteObject: Website = webRes.website

  const mainColor = websiteObject.theme.accentColor
  const textColor = getContrast(mainColor)

  let meta = {
    title: "",
    description: "",
    image: ""
  }

  const [pageRes, pageErr] = await page("index", params)
  if (pageErr !== null) {
    throw new Response(`Page do not exist: ${pageErr.message} ${pageErr.code}`, {
      status: 404,
    });
  }

  const pageObject: Page = pageRes.page

  let desktopMainImage = pageObject.blocks[0].items[0].attachment?.url || ""
  let mobileMainImage = pageObject.blocks[1].items[0].attachment?.url || ""

  let desktopBackgroundImage = pageObject.blocks[2].items[0].attachment?.url || ""
  let mobileBackgroundImage = pageObject.blocks[3].items[0].attachment?.url || ""

  let link = pageObject.blocks[0].items[0].link ? {
    title: pageObject.blocks[0].items[0].link.title,
    url: pageObject.blocks[0].items[0].link.url,
    isExternal: isExternalLink(pageObject.blocks[0].items[0].link.url)
  } : null

  meta.title = pageObject.title
  meta.description = pageObject.description
  meta.image = pageObject.imageUrl

  const canonical = `https://davidegiovanni.com/${incomingLocale}`

  const [feedRes, feedErr] = await feed("davidegiovanni-com", params)
  if (feedErr !== null) {
    throw new Response(`Feed do not exist: ${feedErr.message} ${feedErr.code}`, {
      status: 404,
    });
  }

  const feedObject: Feed = feedRes
  const slug = incomingLocale.toLowerCase()
  let foundNews = feedObject.items.find((i: any) => {
    return i.id.endsWith(slug)
  })
  if (foundNews === undefined) {
    throw new Error("Website didn't load correctly");
  }
  const item: FeedItem = foundNews

  let content = item.content_html
  let title = item.title

  const loaderData: LoaderData = {
    mainColor,
    textColor,
    title,
    canonical,
    content,
    link,
    desktopMainImage,
    mobileMainImage,
    desktopBackgroundImage,
    mobileBackgroundImage,
    meta
  }

  return json(loaderData)
};

export default function Index() {
  const loaderData = useLoaderData<LoaderData>();

  const content = loaderData.content
  const title = loaderData.title
  const link = loaderData.link

  const desktopMainImage = loaderData.desktopMainImage
  const mobileMainImage = loaderData.mobileMainImage

  const desktopBackgroundImage = loaderData.desktopBackgroundImage
  const mobileBackgroundImage = loaderData.mobileBackgroundImage

  const style = {
    backgroundColor: loaderData.mainColor,
    color: loaderData.textColor
  }

  function getCurrentYear(): number {
    return new Date().getFullYear();
  }
  const currentYear = getCurrentYear();

  function getLanguageName (lang: string) {
    switch (lang) {
      case 'it-IT':
        return 'Italiano'
      case 'en-US':
        return 'English'
      case 'fr-FR':
        return 'Français'
      case 'es-ES':
        return 'Espanol'
      case 'de-DE':
        return 'Deutsch'
      default:
        break;
    }
  }

  return (
    <div style={style} className={`bg-white flex flex-col h-full w-full overflow-hidden items-center justify-center p-[2vmin]`}>
      <div className="relative z-20 w-full max-w-screen-md h-full flex-1 overflow-hidden flex flex-col items-start justify-between uppercase text-center gap-[2vmin]">
        <div className="w-full flex-none">
          {currentYear}
          <br />
          {title}
        </div>
        <div className="flex-1 hidden lg:block">
          <div className="h-full w-full">
            <Attachment size="object-fill" attachment={{
              id: "",
              mediaType: "image/",
              url: desktopMainImage,
              description: loaderData.meta.title
            }} />
          </div>
        </div>
        <div className="flex-1 lg:hidden">
          <div className="h-full w-full">
            <Attachment size="object-fill" attachment={{
              id: "",
              mediaType: "image/",
              url: mobileMainImage,
              description: loaderData.meta.title
            }} />
          </div>
        </div>
        <div className="text-sm lg:text-base flex-none max-w-none body-content">
          {parse(content)}
        </div>
      </div>
      {
        desktopBackgroundImage !== "" && (
          <div style={style} className="fixed inset-0 w-full h-auto hidden lg:block">
            <Attachment size="object-fill" attachment={{
              id: "",
              mediaType: "image/",
              url: desktopBackgroundImage,
              description: loaderData.meta.title
            }} />
          </div>
        )
      }
      {
        mobileBackgroundImage !== "" && (
          <div style={style} className="absolute inset-0 w-full h-auto hidden lg:block">
            <Attachment size="object-fill" attachment={{
              id: "",
              mediaType: "image/",
              url: mobileBackgroundImage,
              description: loaderData.meta.title
            }} />
          </div>
        )
      }
    </div>
  );
}