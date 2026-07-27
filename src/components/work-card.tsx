import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Work } from "@/lib/works";

export function WorkCard({ work, priority = false }: { work: Work; priority?: boolean }) {
  const locale = useLocale() as "uk" | "en";
  const t = useTranslations("works");
  const cover = work.gallery[0];

  return (
    <Link
      href={{ pathname: "/works/[slug]", params: { slug: work.slug } }}
      className="group block"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
        <Image
          src={cover.src}
          alt={cover.alt[locale]}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl italic">{work.title[locale]}</h3>
          <p className="mt-1 text-sm text-muted">{work.category[locale]}</p>
        </div>
        <span className="mt-1 shrink-0 text-sm text-muted">{work.year}</span>
      </div>
      <span className="sr-only">{t("viewProject")}</span>
    </Link>
  );
}
