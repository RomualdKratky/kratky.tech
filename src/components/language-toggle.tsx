"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const localeList = routing.locales as readonly string[];
  const nextLocale =
    localeList[(localeList.indexOf(locale) + 1) % localeList.length];

  const switchLocale = () => {
    const segments = pathname.split("/");
    if (segments[1] && localeList.includes(segments[1])) {
      segments[1] = nextLocale;
    }
    router.push(segments.join("/"));
  };

  return (
    <button
      onClick={switchLocale}
      className="text-sm font-medium tracking-wider text-muted hover:text-foreground transition-colors px-2"
      aria-label="Switch language"
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}
