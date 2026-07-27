import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Href = Parameters<typeof getPathname>[0]["href"];

export function buildAlternates(href: Href) {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, getPathname({ locale, href })]),
  );

  return { languages };
}
