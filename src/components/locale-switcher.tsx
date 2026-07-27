"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";

const labels: Record<string, string> = {
  uk: "UA",
  en: "EN",
};

export function LocaleSwitcher() {
  const t = useTranslations("locale");
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div
      className="flex items-center gap-1 text-xs tracking-wide"
      aria-label={t("label")}
    >
      {routing.locales.map((loc, index) => (
        <span key={loc} className="flex items-center gap-1">
          {index > 0 && <span className="opacity-30">/</span>}
          <Link
            // @ts-expect-error -- pathname/params are dynamic across routes
            href={{ pathname, params }}
            locale={loc}
            aria-current={loc === locale ? "true" : undefined}
            className={
              loc === locale
                ? "font-medium underline underline-offset-4"
                : "opacity-50 transition-opacity hover:opacity-100"
            }
          >
            {labels[loc]}
          </Link>
        </span>
      ))}
    </div>
  );
}
