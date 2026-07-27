import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { LangSync } from "@/components/lang-sync";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: {
        uk: "/",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: locale === "uk" ? "uk_UA" : "en_US",
      url: locale === routing.defaultLocale ? "/" : `/${locale}`,
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: locale === "uk" ? "Фотограф" : "Photographer",
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kraków",
      addressCountry: "PL",
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.behance,
      siteConfig.social.facebook,
    ],
  };

  return (
    <NextIntlClientProvider>
      <LangSync />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <div id="top" />
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <JsonLd data={personJsonLd} />
    </NextIntlClientProvider>
  );
}
