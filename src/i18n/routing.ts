import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uk", "en"],
  defaultLocale: "uk",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/works": {
      uk: "/roboty",
      en: "/works",
    },
    "/about": {
      uk: "/pro-mene",
      en: "/about",
    },
    "/contact": {
      uk: "/kontakty",
      en: "/contact",
    },
    "/works/[slug]": {
      uk: "/roboty/[slug]",
      en: "/works/[slug]",
    },
  },
});

export type AppLocale = (typeof routing.locales)[number];
