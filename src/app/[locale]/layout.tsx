import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

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
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: `%s — ${siteConfig.name}`,
    },
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
    icons: {
      icon: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
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
      addressLocality: "Kyiv",
      addressCountry: "UA",
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.behance,
      siteConfig.social.facebook,
    ],
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
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
          </NextIntlClientProvider>
        </ThemeProvider>
        <JsonLd data={personJsonLd} />
      </body>
    </html>
  );
}
