import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { WorkCard } from "@/components/work-card";
import { Reveal } from "@/components/reveal";
import { Kicker } from "@/components/kicker";
import { Marquee } from "@/components/marquee";
import { Stats } from "@/components/stats";
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
  const marqueeItems = t.raw("marquee") as string[];
  const stats = t.raw("stats") as { value: string; label: string }[];

  return (
    <div>
      <section className="relative flex min-h-[calc(100svh-4rem)] items-end overflow-hidden sm:min-h-[calc(100svh-5rem)]">
        <Image
          src="https://images.unsplash.com/photo-1676304917549-5c42b40779a2?auto=format&fit=crop&w=2400&q=80"
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
          <h1 className="animate-fade-in mt-6 max-w-3xl text-balance font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
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

      <Marquee items={marqueeItems} />

      <section className="container-page py-20 sm:py-28">
        <Reveal className="mb-12 flex flex-col justify-between gap-4 sm:mb-16 sm:flex-row sm:items-end">
          <div>
            <Kicker>{t("featuredKicker")}</Kicker>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              {t("cta")}
            </h2>
          </div>
          <Link
            href="/works"
            className="text-sm underline underline-offset-4 opacity-70 transition-opacity hover:opacity-100"
          >
            {t("featuredCta")}
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featured.map((work, i) => (
            <Reveal key={work.slug} delay={i * 120}>
              <WorkCard work={work} priority={i === 0} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <Reveal>
          <Stats items={stats} />
        </Reveal>
      </section>

      <section className="border-t border-foreground/10 bg-surface">
        <div className="container-page grid grid-cols-1 gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1578329764194-f011d4e75e43?auto=format&fit=crop&w=1200&q=80"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={150} className="flex flex-col justify-center">
            <Kicker>{t("aboutKicker")}</Kicker>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
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
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="container-page py-24 text-center sm:py-32">
          <div className="mx-auto flex w-fit items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {t("contactKicker")}
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl sm:text-5xl">
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
      </Reveal>
    </div>
  );
}
