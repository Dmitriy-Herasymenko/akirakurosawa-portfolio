import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";
import { works } from "@/lib/works";

type Href =
  | "/"
  | "/works"
  | "/about"
  | "/contact"
  | { pathname: "/works/[slug]"; params: { slug: string } };

function buildEntry(href: Href, priority: number): MetadataRoute.Sitemap[number] {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      `${siteConfig.url}${getPathname({ locale, href })}`,
    ]),
  ) as Record<string, string>;

  return {
    url: `${siteConfig.url}${getPathname({ locale: routing.defaultLocale, href })}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    buildEntry("/", 1),
    buildEntry("/works", 0.8),
    buildEntry("/about", 0.6),
    buildEntry("/contact", 0.6),
  ];

  const workEntries: MetadataRoute.Sitemap = works.map((work) =>
    buildEntry(
      { pathname: "/works/[slug]", params: { slug: work.slug } },
      0.7,
    ),
  );

  return [...staticEntries, ...workEntries];
}
