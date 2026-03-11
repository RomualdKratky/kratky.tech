import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

/** Type guard — narrows an unknown string to a valid locale. */
function isValidLocale(
  locale: string,
): locale is (typeof routing.locales)[number] {
  return (routing.locales as readonly string[]).includes(locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !isValidLocale(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
