import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { JsonLd } from "@/components/json-ld";
import { getWorkBySlug, works } from "@/lib/works";
import { siteConfig } from "@/lib/site-config";
import { buildAlternates } from "@/lib/seo";

type Locale = "uk" | "en";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    works.map((work) => ({ locale, slug: work.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  const loc = locale as Locale;

  return {
    title: work.title[loc],
    description: work.excerpt[loc],
    alternates: buildAlternates({
      pathname: "/works/[slug]",
      params: { slug },
    }),
    openGraph: {
      title: work.title[loc],
      description: work.excerpt[loc],
      images: [{ url: work.gallery[0].src }],
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const t = await getTranslations("works");
  const currentIndex = works.findIndex((w) => w.slug === slug);
  const nextWork = works[(currentIndex + 1) % works.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: work.title[loc],
    description: work.description[loc],
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
    datePublished: `${work.year}`,
    image: work.gallery.map((g) => g.src),
  };

  return (
    <article>
      <header className="container-page pt-16 sm:pt-24">
        <Link
          href="/works"
          className="text-sm opacity-60 transition-opacity hover:opacity-100"
        >
          ← {t("back")}
        </Link>
        <div className="mt-8 flex flex-col justify-between gap-6 sm:mt-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {work.category[loc]}
            </p>
            <h1 className="mt-3 font-display text-4xl italic sm:text-6xl">
              {work.title[loc]}
            </h1>
          </div>
          <dl className="flex gap-8 text-sm">
            <div>
              <dt className="text-muted">{t("year")}</dt>
              <dd className="mt-1">{work.year}</dd>
            </div>
            <div>
              <dt className="text-muted">{t("category")}</dt>
              <dd className="mt-1">{work.category[loc]}</dd>
            </div>
          </dl>
        </div>
        <p className="mt-8 max-w-2xl text-balance text-lg text-muted">
          {work.description[loc]}
        </p>
      </header>

      <div className="container-page mt-16 flex flex-col gap-6 pb-24 sm:mt-20 sm:gap-10 sm:pb-32">
        {work.gallery.map((image, i) => (
          <div
            key={image.src}
            className="relative w-full overflow-hidden bg-surface"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
          >
            <Image
              src={image.src}
              alt={image.alt[loc]}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 90vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="border-t border-foreground/10">
        <Link
          href={{ pathname: "/works/[slug]", params: { slug: nextWork.slug } }}
          className="group container-page flex items-center justify-between py-16 sm:py-20"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {t("nextProject")}
            </p>
            <h2 className="mt-3 font-display text-3xl italic transition-transform group-hover:translate-x-2 sm:text-5xl">
              {nextWork.title[loc]}
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="text-2xl transition-transform group-hover:translate-x-2"
          >
            →
          </span>
        </Link>
      </div>
      <JsonLd data={jsonLd} />
    </article>
  );
}
