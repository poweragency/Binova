import type { LocaleKey } from "./collections";

// A localized record where any locale may be present. Falls back to EN
// (the international reference) when a target locale is missing, and to
// IT as a final fallback for the canonical Italian text.
export type Localized<T = string> = Partial<Record<LocaleKey, T>>;

export function pick<T>(rec: Localized<T>, locale: LocaleKey): T {
  return (rec[locale] ?? rec.en ?? rec.it) as T;
}
