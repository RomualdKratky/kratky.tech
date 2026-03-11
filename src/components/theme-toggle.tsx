"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useSyncExternalStore } from "react";

// useSyncExternalStore with a no-op subscribe + differing server/client snapshot
// is the React 18 idiomatic way to detect "mounted" without a setState-in-effect.
const useIsMounted = () =>
  useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();

  // Avoid hydration mismatch — render placeholder until client knows the theme.
  if (!mounted) {
    return <div className="w-16 h-9" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-9 flex items-center gap-1.5 px-2 rounded-md text-muted hover:text-foreground transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="text-xs font-medium tracking-wide">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
