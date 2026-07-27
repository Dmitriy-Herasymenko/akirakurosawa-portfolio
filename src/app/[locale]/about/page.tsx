import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/reveal";
import { Kicker } from "@/components/kicker";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/about"),
  };
}

const clients = [
  "Vogue Poland",
  "Kraków Photo Biennale",
  "The Village",
  "L'Officiel",
  "Elle Poland",
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const philosophy = [
    { title: t("philosophy1Title"), text: t("philosophy1Text") },
    { title: t("philosophy2Title"), text: t("philosophy2Text") },
    { title: t("philosophy3Title"), text: t("philosophy3Text") },
  ];

  return (
    <div>
      <section className="container-page grid grid-cols-1 gap-10 pt-16 sm:pt-24 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Kicker>{t("kicker")}</Kicker>
          <h1 className="mt-3 font-display text-4xl italic sm:text-6xl">
            {t("heading")}
          </h1>
          <p className="mt-2 text-muted">{t("role")}</p>

          <div className="mt-8 flex max-w-lg flex-col gap-5 text-muted">
            <p>{t("bio1")}</p>
            <p>{t("bio2")}</p>
            <p>{t("bio3")}</p>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex w-fit items-center gap-2 border-b border-current pb-1 text-sm tracking-wide text-foreground"
          >
            {t("cta")}
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <Reveal
          delay={150}
          className="relative aspect-[4/5] w-full overflow-hidden bg-surface lg:aspect-auto"
        >
          <Image
            src="https://images.unsplash.com/photo-1578329764194-f011d4e75e43?auto=format&fit=crop&w=1200&q=80"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      <section className="container-page py-20 sm:py-28">
        <Reveal>
          <h2 className="font-display text-2xl italic sm:text-3xl">
            {t("philosophyHeading")}
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {philosophy.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <span className="text-sm text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl italic">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-surface">
        <div className="container-page grid grid-cols-1 gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="font-display text-2xl italic sm:text-3xl">
              {t("equipmentHeading")}
            </h2>
            <p className="mt-4 max-w-md text-muted">{t("equipmentText")}</p>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-2xl italic sm:text-3xl">
              {t("clientsHeading")}
            </h2>
            <ul className="mt-4 flex flex-col gap-2 text-muted">
              {clients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
