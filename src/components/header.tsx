"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { Container } from "./ui/container";
import type { Locale } from "@/i18n/routing";

const navItems = ["services", "skills", "contact"] as const;
const legalItems = ["impressum", "datenschutz"] as const;

/** Shared nav links rendered in both desktop and mobile menus. */
function NavLinks({
  locale,
  block = false,
  onClick,
}: {
  locale: Locale;
  block?: boolean;
  onClick?: () => void;
}) {
  const t = useTranslations("nav");
  const cls = `${block ? "block " : ""}text-sm tracking-wide text-muted hover:text-foreground transition-colors`;

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item}
          href={`/${locale}/#${item}`}
          onClick={onClick}
          className={cls}
        >
          {t(item)}
        </a>
      ))}
      {legalItems.map((item) => (
        <a
          key={item}
          href={`/${locale}/${item}/`}
          onClick={onClick}
          className={cls}
        >
          {t(item)}
        </a>
      ))}
    </>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const locale = useLocale() as Locale;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass-bg backdrop-blur-xl border-b border-glass-border">
      <Container className="h-16 flex items-center justify-between">
        <a
          href={`/${locale}/`}
          className="text-lg font-semibold tracking-wider text-foreground"
        >
          kratky.tech
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks locale={locale} />
          <div className="flex items-center gap-1 ml-2 pl-4 border-l border-glass-border">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 flex items-center justify-center text-muted hover:text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-glass-bg backdrop-blur-xl border-b border-glass-border px-6 py-4 space-y-4">
          <NavLinks locale={locale} block onClick={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}
