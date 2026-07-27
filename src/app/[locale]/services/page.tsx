import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";
import { PricingCard } from "@/components/pricing-card";
import { Accordion } from "@/components/accordion";
import { pricingTiers } from "@/lib/services";
import { faqItems } from "@/lib/faq";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/services"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const loc = (await getLocale()) as "uk" | "en";

  const faq = faqItems.map((item) => ({
    question: item.question[loc],
    answer: item.answer[loc],
  }));

  return (
    <div>
      <section className="container-page pt-16 sm:pt-24">
        <Reveal className="max-w-2xl">
          <Kicker>{t("kicker")}</Kicker>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-5 text-muted">{t("intro")}</p>
        </Reveal>
      </section>

      <section className="container-page py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.slug} delay={i * 120}>
              <PricingCard tier={tier} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-surface">
        <div className="container-page py-20 sm:py-28">
          <Reveal className="max-w-2xl">
            <Kicker>{t("faqKicker")}</Kicker>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              {t("faqHeading")}
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <Accordion items={faq} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
