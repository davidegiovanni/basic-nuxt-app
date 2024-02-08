import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs, LoaderFunction } from "@remix-run/node";

export const newLoader = () => {
  return async (args: LoaderFunctionArgs) => {
    const url = new URL(args.request.url)
    const urlSearchParams = url.searchParams
    return redirect(`/${urlSearchParams}`);
  }
}

export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
  return newLoader()(args);
};
