import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Work } from "@/lib/works";

export function WorkCard({
  work,
  priority = false,
  index,
}: {
  work: Work;
  priority?: boolean;
  index?: number;
}) {
  const locale = useLocale() as "uk" | "en";
  const t = useTranslations("works");
  const cover = work.gallery[0];

  return (
    <Link
      href={{ pathname: "/works/[slug]", params: { slug: work.slug } }}
      className="group block"
    >
      <div className="photo-frame">
        <div
          className="relative w-full overflow-hidden bg-surface"
          style={{ aspectRatio: `${work.cover.width} / ${work.cover.height}` }}
        >
          <Image
            src={cover.src}
            alt={cover.alt[locale]}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
          {typeof index === "number" && (
            <span className="absolute left-4 top-4 font-display text-sm text-white/80 mix-blend-difference">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span className="absolute bottom-0 left-0 translate-y-full bg-accent px-3 py-1 text-xs uppercase tracking-[0.2em] text-background transition-transform duration-500 ease-out group-hover:translate-y-0">
            {work.category[locale]}
          </span>
        </div>
      </div>
      <span className="sr-only">
        {work.title[locale]} — {work.category[locale]}, {work.year}.{" "}
        {t("viewProject")}
      </span>
    </Link>
  );
}
