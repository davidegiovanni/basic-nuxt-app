import type { LoaderFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import type { LoaderData } from "~/services/api/feeds/feed-data-loader";
import { newLoader as feedLoader } from "~/services/api/feeds/feed-data-loader";

import Error from "~/components/base/Website/Error";
import { headersDecoder } from "~/services/api/headers-decoder";
import { Feed } from "~/components/base/Layout/Feed";
import { useLoaderData } from "@remix-run/react";
import { asyncGetFeed } from "~/services/api/feeds";
import CanonicalUrl from "~/services/template/canonical-url";
import { useTranslationsContext } from "~/services/template/i18n-provider";

export const meta: MetaFunction<any> = ({ data }) => {
  let hasError = data === undefined || data === null || data.error !== undefined
  let title =  hasError ? "Error" : data.meta.title
  let description = hasError ? "Error loading the page" : data.meta.description
  let image = hasError ? "Error" : data.meta.imageUrl
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
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: image,
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: image,
    },
  ]
}

export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
  const { websiteName, publicKey } = headersDecoder(args.request)
  const feedSlug = args.params.feed || ""

  return feedLoader({
    publicKey,
    websiteName,
    feedSlug,
    asyncGetFeed
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
    return (
      <>
        <CanonicalUrl url={loaderData.canonicalUrl} />
        <Error title={pageNotFoundError ? t("page_not_found") : t("error_loading_page")} description={`${pageNotFoundError ? t("page_does_not_exist") : t("wait_and_retry")}`} linkTitle={pageNotFoundError ? t("go_back_home") : ""} linkUrl={pageNotFoundError ? "/" : ""} />
      </>
    )
  }

  return (
    <>
      <CanonicalUrl url={loaderData.canonicalUrl} />
      <Feed items={loaderData.items} metadata={loaderData.metadata} title={loaderData.title} description={loaderData.description} />
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
