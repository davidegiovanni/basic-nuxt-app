import type { LoaderFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import type { LoaderData} from "~/services/api/pages/page-data-loader";
import { newLoader as pageLoader } from "~/services/api/pages/page-data-loader";

import Error from "~/components/base/Website/Error";
import { headersDecoder } from "~/services/api/headers-decoder";
import { asyncGetPage } from "~/services/api/pages";
import { Page } from "~/components/base/Layout/Page";
import { useLoaderData } from "@remix-run/react";
import CanonicalUrl from "~/services/template/canonical-url";
import { useTranslationsContext } from "~/services/template/i18n-provider";

export const meta: MetaFunction<any> = ({ data }) => {
  let hasError = data === undefined || data === null || data.error !== undefined
  let title =  hasError ? "Error" : data.meta.title
  let description = hasError ? "Error loading the page" : data.meta.description
  let image = hasError ? "Error" : data.meta.imageUrl

  let ogTitle =  hasError ? "Error" : data.openGraphData.title !== "" ? data.openGraphData.title : title
  let ogDescription = hasError ? "Error loading the page" : data.openGraphData.description !== "" ? data.openGraphData.description : description
  let ogImage = hasError ? "Error" : data.openGraphData.imageUrl !== "" ? data.openGraphData.imageUrl : image

  let twitterTitle =  hasError ? "Error" : data.twitterMeta.title !== "" ? data.twitterMeta.title : title
  let twitterDescription = hasError ? "Error loading the page" : data.twitterMeta.description !== "" ? data.twitterMeta.description : description
  let twitterImage = hasError ? "Error" : data.twitterMeta.imageUrl !== "" ? data.twitterMeta.imageUrl : image

  let url = hasError ? "Error" : data.canonicalUrl
  
  return [
    { title: title },
    {
      name: "description",
      content: description,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: url,
    },
    {
      property: "og:title",
      content: ogTitle,
    },
    {
      property: "og:description",
      content: ogDescription,
    },
    {
      property: "og:image",
      content: ogImage,
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:title",
      content: twitterTitle,
    },
    {
      name: "twitter:description",
      content: twitterDescription,
    },
    {
      name: "twitter:image",
      content: twitterImage,
    },
  ]
}

export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
  const { websiteName, publicKey } = headersDecoder(args.request)

  return pageLoader({
    publicKey,
    websiteName,
    pageSlug: "homepage",
    asyncGetPage
  })(args);
};

type IndexProps = {
  loaderData: LoaderData;
};

export function IndexComponent({ loaderData }: IndexProps) {
  const pageError = loaderData.error && loaderData.errors?.getPage
  const pageNotFoundError = loaderData.error && loaderData.errors?.pageNotFound
  const { t } = useTranslationsContext()

  if (pageError || pageNotFoundError) {
    return  (
    <>
      <CanonicalUrl url={loaderData.canonicalUrl} />
      <Error title={pageNotFoundError ? t("page_not_found") : t("error_loading_page")} description={`${pageNotFoundError ? t("page_does_not_exist") : t("wait_and_retry")}`} linkTitle={pageNotFoundError ? t("go_back_home") : ""} linkUrl={pageNotFoundError ? "/" : ""} />
    </>
    )
  }

  return (
    <>
    <CanonicalUrl url={loaderData.canonicalUrl} />
      <Page blocks={loaderData.blocks} metadata={loaderData.metadata} />
    </>
  );
}

export default function Index() {
  const loaderData = useLoaderData<LoaderData>();

  return (
    <IndexComponent
      loaderData={loaderData}
    ></IndexComponent>
  );
}
