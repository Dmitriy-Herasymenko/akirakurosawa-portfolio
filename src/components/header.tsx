"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NavLink } from "@/components/nav-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/" as const, key: "home" },
  { href: "/works" as const, key: "works" },
  { href: "/about" as const, key: "about" },
  { href: "/contact" as const, key: "contact" },
];

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/0 bg-background/80 backdrop-blur supports-backdrop-blur:bg-background/60">
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-display text-lg tracking-tight sm:text-xl"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <NavLink
              key={link.key}
              href={link.href}
              className="opacity-70 transition-opacity hover:opacity-100"
              activeClassName="opacity-100 underline underline-offset-8"
            >
              {t(link.key)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("close") : t("menu")}
            className="flex h-9 w-9 items-center justify-center"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-full bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`grid overflow-hidden border-foreground/10 transition-[grid-template-rows,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0">
          <nav className="container-page flex flex-col gap-1 py-4 text-base">
            {links.map((link, i) => (
              <NavLink
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${i * 60}ms` : "0ms",
                }}
                className={`py-2 opacity-70 transition-[opacity,transform] duration-300 ease-out hover:opacity-100 ${
                  open ? "translate-y-0 opacity-70" : "-translate-y-1 opacity-0"
                }`}
                activeClassName="opacity-100"
              >
                {t(link.key)}
              </NavLink>
            ))}
            <div className="mt-2 pt-3">
              <LocaleSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
