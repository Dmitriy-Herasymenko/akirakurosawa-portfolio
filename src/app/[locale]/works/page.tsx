import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { WorkCard } from "@/components/work-card";
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
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">
          {t("kicker")}
        </p>
        <h1 className="mt-3 font-display text-4xl italic sm:text-5xl">
          {t("heading")}
        </h1>
        <p className="mt-5 text-muted">{t("intro")}</p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {works.map((work, i) => (
          <WorkCard key={work.slug} work={work} priority={i < 2} />
        ))}
      </div>
    </div>
  );
}
