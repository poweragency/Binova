import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en"],
  defaultLocale: "it",
  // IT pages stay at /heritage, EN pages get /en/heritage prefix
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
