import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { WorkCard } from "@/components/work-card";
import { works } from "@/lib/works";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  return { title: t("title"), description: t("description") };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const featured = works.slice(0, 3);

  return (
    <div>
      <section className="relative flex min-h-[calc(100svh-4rem)] items-end overflow-hidden sm:min-h-[calc(100svh-5rem)]">
        <Image
          src="https://picsum.photos/seed/hero-portfolio/2400/1600"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

        <div className="container-page relative z-10 pb-16 pt-40 text-white sm:pb-24">
          <p className="animate-fade-in text-xs uppercase tracking-[0.3em] opacity-80">
            {t("kicker")}
          </p>
          <h1 className="animate-fade-in mt-6 max-w-3xl text-balance font-display text-4xl italic leading-[1.05] sm:text-6xl lg:text-7xl">
            {t("heading")
              .split("\n")
              .map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
          </h1>
          <p className="animate-fade-in mt-6 max-w-md text-balance text-base opacity-90 sm:text-lg">
            {t("intro")}
          </p>
          <Link
            href="/works"
            className="animate-fade-in mt-8 inline-flex items-center gap-2 border-b border-white/60 pb-1 text-sm tracking-wide transition-colors hover:border-white"
          >
            {t("cta")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:mb-16 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {t("featuredKicker")}
            </p>
            <h2 className="mt-3 font-display text-3xl italic sm:text-4xl">
              {t("cta")}
            </h2>
          </div>
          <Link
            href="/works"
            className="text-sm underline underline-offset-4 opacity-70 transition-opacity hover:opacity-100"
          >
            {t("featuredCta")}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featured.map((work, i) => (
            <WorkCard key={work.slug} work={work} priority={i === 0} />
          ))}
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-surface">
        <div className="container-page grid grid-cols-1 gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://picsum.photos/seed/about-teaser/1200/1500"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {t("aboutKicker")}
            </p>
            <h2 className="mt-3 font-display text-3xl italic sm:text-4xl">
              {t("aboutHeading")}
            </h2>
            <p className="mt-6 max-w-md text-muted">{t("aboutText")}</p>
            <Link
              href="/about"
              className="mt-8 inline-flex w-fit items-center gap-2 border-b border-current pb-1 text-sm tracking-wide"
            >
              {t("aboutCta")}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-24 text-center sm:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">
          {t("contactKicker")}
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl italic sm:text-5xl">
          {t("contactHeading")}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">{t("contactText")}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 border-b border-current pb-1 text-sm tracking-wide"
        >
          {t("contactCta")}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
