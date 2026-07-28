import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/reveal";
import { Kicker } from "@/components/kicker";
import { WorksFilter } from "@/components/works-filter";
import { works } from "@/lib/works";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.works" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/works"),
  };
}

export default async function WorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("works");

  return (
    <div className="container-page py-16 sm:py-24">
      <Reveal className="max-w-2xl">
        <Kicker>{t("kicker")}</Kicker>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">
          {t("heading")}
        </h1>
        <p className="mt-5 text-muted">{t("intro")}</p>
      </Reveal>

      <div className="mt-12">
        <WorksFilter works={works} />
      </div>
    </div>
  );
}
