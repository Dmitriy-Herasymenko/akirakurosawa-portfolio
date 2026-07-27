import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";

const social = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "Behance", href: siteConfig.social.behance },
  { label: "Facebook", href: siteConfig.social.facebook },
];

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale() as "uk" | "en";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10">
      <div className="container-page flex flex-col gap-8 py-12 sm:py-16">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div>
            <Link href="/" className="font-display text-xl">
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">
              {siteConfig.location[locale]}
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-muted">{tNav("home")}</span>
              <Link
                href="/works"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                {tNav("works")}
              </Link>
              <Link
                href="/services"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                {tNav("services")}
              </Link>
              <Link
                href="/about"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                {tNav("about")}
              </Link>
              <Link
                href="/contact"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                {tNav("contact")}
              </Link>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <span className="text-muted">Social</span>
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-foreground/10 pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. {t("rights")}
          </p>
          <a href="#top" className="opacity-80 transition-opacity hover:opacity-100">
            {t("backToTop")}
          </a>
        </div>
      </div>
    </footer>
  );
}
