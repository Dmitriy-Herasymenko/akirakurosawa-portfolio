import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const futura = localFont({
  variable: "--font-futura",
  display: "swap",
  src: [
    {
      path: "../fonts/futura-pt/FuturaCyrillicBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/futura-pt/FuturaCyrillicMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/futura-pt/FuturaCyrillicBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={routing.defaultLocale}
      suppressHydrationWarning
      className={`${futura.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
