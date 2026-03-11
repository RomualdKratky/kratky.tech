"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

/**
 * Syncs `document.documentElement.lang` with the active next-intl locale.
 *
 * This must be a dedicated client component: the server layout sets the initial
 * `lang` attribute via the static `locale` param, but when client-side navigation
 * changes the locale the HTML attribute needs to be updated in the browser.
 * Inlining this into the server layout would force the entire layout to become
 * a client component, so it lives here instead.
 */
export function LocaleSetter() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
