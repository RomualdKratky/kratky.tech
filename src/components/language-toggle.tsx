"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setStoredLocale } from "@/lib/locale-storage";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const localeList = routing.locales as readonly string[];
  const currentIndex = localeList.indexOf(locale);
  // indexOf returns -1 if locale is somehow invalid; clamp to 0 before cycling.
  const nextLocale =
    localeList[
      ((currentIndex >= 0 ? currentIndex : 0) + 1) % localeList.length
    ];

  const switchLocale = () => {
    setStoredLocale(nextLocale);
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
