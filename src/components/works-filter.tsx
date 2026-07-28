"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { WorkCard } from "@/components/work-card";
import { categories } from "@/lib/categories";
import type { Work } from "@/lib/works";

export function WorksFilter({ works }: { works: Work[] }) {
  const locale = useLocale() as "uk" | "en";
  const t = useTranslations("works");
  const [active, setActive] = useState("all");

  const availableCategories = useMemo(() => {
    const slugs = new Set(works.map((w) => w.categorySlug));
    return categories.filter((c) => slugs.has(c.slug));
  }, [works]);

  const filtered = useMemo(
    () =>
      active === "all"
        ? works
        : works.filter((w) => w.categorySlug === active),
    [works, active],
  );

  return (
    <div>
      <div
        role="group"
        aria-label={t("filterLabel")}
        className="flex flex-wrap gap-3"
      >
        <FilterPill
          active={active === "all"}
          onClick={() => setActive("all")}
          label={t("allCategories")}
          count={works.length}
        />
        {availableCategories.map((category) => (
          <FilterPill
            key={category.slug}
            active={active === category.slug}
            onClick={() => setActive(category.slug)}
            label={category.label[locale]}
            count={works.filter((w) => w.categorySlug === category.slug).length}
          />
        ))}
      </div>

      {filtered.length > 0 ? (
        <div
          key={active}
          className="mt-16 columns-1 gap-3 sm:columns-2 lg:gap-4"
        >
          {filtered.map((work, i) => (
            <div
              key={work.slug}
              className="animate-fade-in mb-3 break-inside-avoid lg:mb-4"
              style={{ animationDelay: `${(i % 6) * 60}ms` }}
            >
              <WorkCard work={work} priority={i < 2} index={i} />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-16 text-muted">{t("emptyState")}</p>
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-foreground/15 text-muted hover:border-foreground/40 hover:text-foreground"
      }`}
    >
      {label}
      <span
        className={`text-xs ${active ? "text-background/60" : "text-muted/70"}`}
      >
        {count}
      </span>
    </button>
  );
}
