import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { website } from "~/api";
import { Website } from "~/models";

export const loader: LoaderFunction = async ({ request, params }) => {
  const incomingLocale = params.lang || ""

  if (incomingLocale === "") {
    const [fullWebRes, fullWebErr] = await website(request, params, "");
    if (fullWebErr !== null) {
      throw new Response("Website: " + fullWebErr.message, {
        status: 404,
      });
    }
    return redirect(`/${fullWebRes.website.languageCode}`);
  }

  const [webRes, webErr] = await website(request, params, incomingLocale);
  if (webErr !== null) {
    if (webErr.code === 5) {
      const [fullWebRes, fullWebErr] = await website(request, params, "");
      if (fullWebErr !== null) {
        throw new Response("Website: " + fullWebErr.message, {
          status: 404,
        });
      }
      return redirect(`/${fullWebRes.website.languageCode}`);
    }
    throw new Response("Website: " + webErr.message, {
      status: 404,
    });
  }

  return redirect(`/${incomingLocale}`);
};
