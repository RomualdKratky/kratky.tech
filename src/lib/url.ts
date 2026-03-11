import { siteConfig } from "@/data/site";

/**
 * Builds an absolute canonical URL for a given locale and path.
 * Respects NEXT_PUBLIC_SITE_URL at build time (e.g. for ngrok preview).
 * The path is normalised to always start with `/`.
 *
 * @example getCanonicalUrl("de", "/impressum/") → "https://kratky.tech/de/impressum/"
 * @example getCanonicalUrl("en", "impressum/")  → "https://kratky.tech/en/impressum/"
 */
export function getCanonicalUrl(locale: string, path: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;
  const normalisedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}/${locale}${normalisedPath}`;
}
