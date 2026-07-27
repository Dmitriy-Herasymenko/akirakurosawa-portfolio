import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { PricingTier } from "@/lib/services";

export function PricingCard({ tier }: { tier: PricingTier }) {
  const locale = useLocale() as "uk" | "en";
  const t = useTranslations("services");

  return (
    <div
      className={`relative flex flex-col p-8 sm:p-10 ${
        tier.featured
          ? "bg-foreground text-background"
          : "border border-foreground/15"
      }`}
    >
      {tier.featured && (
        <span className="absolute right-8 top-8 text-xs uppercase tracking-[0.2em] text-accent">
          {t("popular")}
        </span>
      )}

      <h3 className="font-display text-2xl sm:text-3xl">
        {tier.name[locale]}
      </h3>
      <p
        className={`mt-2 text-sm ${
          tier.featured ? "text-background/70" : "text-muted"
        }`}
      >
        {tier.description[locale]}
      </p>

      <div className="mt-8 flex items-baseline gap-2">
        <span className="font-display text-4xl sm:text-5xl">
          {tier.price[locale]}
        </span>
        <span
          className={`text-sm ${tier.featured ? "text-background/70" : "text-muted"}`}
        >
          {tier.unit[locale]}
        </span>
      </div>

      <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm">
        {tier.features[locale].map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={tier.featured ? "text-accent" : "text-accent"}
            >
              ✦
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`mt-10 inline-flex w-fit items-center gap-2 border-b pb-1 text-sm tracking-wide transition-colors ${
          tier.featured
            ? "border-background/60 hover:border-background"
            : "border-current"
        }`}
      >
        {t("cta")}
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
