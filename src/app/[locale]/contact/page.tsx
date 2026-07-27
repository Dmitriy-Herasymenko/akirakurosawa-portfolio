import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Kicker } from "@/components/kicker";
import { siteConfig } from "@/lib/site-config";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/contact"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const loc = locale as "uk" | "en";

  return (
    <div className="container-page grid grid-cols-1 gap-14 py-16 sm:py-24 lg:grid-cols-2 lg:gap-24">
      <Reveal>
        <Kicker>{t("kicker")}</Kicker>
        <h1 className="mt-3 font-display text-4xl sm:text-6xl">
          {t("heading")}
        </h1>
        <p className="mt-5 max-w-md text-muted">{t("intro")}</p>

        <dl className="mt-12 flex flex-col gap-6 text-sm">
          <div>
            <dt className="text-muted">{t("emailLabel")}</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">{t("phoneLabel")}</dt>
            <dd className="mt-1 text-lg">{siteConfig.phone}</dd>
          </div>
          <div>
            <dt className="text-muted">{t("locationLabel")}</dt>
            <dd className="mt-1 text-lg">{siteConfig.location[loc]}</dd>
          </div>
          <div>
            <dt className="text-muted">{t("socialLabel")}</dt>
            <dd className="mt-2 flex gap-5">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="underline underline-offset-4"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.behance}
                target="_blank"
                rel="noreferrer noopener"
                className="underline underline-offset-4"
              >
                Behance
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="underline underline-offset-4"
              >
                Facebook
              </a>
            </dd>
          </div>
        </dl>
      </Reveal>

      <Reveal delay={150} className="lg:pt-20">
        <ContactForm />
      </Reveal>
    </div>
  );
}
