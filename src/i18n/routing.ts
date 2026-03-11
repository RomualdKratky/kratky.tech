import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
});

export type Locale = (typeof routing.locales)[number];

/** Type guard — narrows an unknown string to a valid Locale. */
export function isValidLocale(locale: string): locale is Locale {
  return (routing.locales as readonly string[]).includes(locale);
}
