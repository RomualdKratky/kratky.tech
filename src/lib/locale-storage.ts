/**
 * Safe wrappers around localStorage for persisting the user's locale preference.
 *
 * localStorage can throw SecurityError in private browsing (Safari/Firefox) or
 * when storage quota is exceeded. All access goes through these helpers so
 * callers never need individual try/catch blocks.
 */
export const LOCALE_STORAGE_KEY = "locale";

/** Returns the stored locale string, or null if unavailable or unset. */
export function getStoredLocale(): string | null {
  try {
    return localStorage.getItem(LOCALE_STORAGE_KEY);
  } catch {
    return null;
  }
}

/** Persists the locale preference. Silently no-ops if storage is unavailable. */
export function setStoredLocale(locale: string): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Storage unavailable (private browsing, quota exceeded) — not fatal.
  }
}
