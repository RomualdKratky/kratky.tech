import { getRequestConfig } from "next-intl/server";
import { routing, isValidLocale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !isValidLocale(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // Dynamic import ensures each locale's JSON is only bundled when that
    // locale is actually requested — required by next-intl's server-side
    // message loading model.
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
