import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en", "de", "es", "fr"],
  defaultLocale: "it",
  // IT pages stay at /heritage, other locales get /<locale>/heritage prefix
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
