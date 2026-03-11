"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { routing, isValidLocale } from "@/i18n/routing";
import { getStoredLocale } from "@/lib/locale-storage";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const stored = getStoredLocale();
    const locale =
      (stored && isValidLocale(stored) ? stored : null) ??
      routing.locales.find((l) =>
        navigator.language.toLowerCase().startsWith(l),
      ) ??
      routing.defaultLocale;
    router.replace(`/${locale}/`);
  }, [router]);

  return null;
}
