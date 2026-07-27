"use client";

import type { ComponentProps } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { clsx } from "clsx";

type Props = ComponentProps<typeof Link> & {
  activeClassName?: string;
};

export function NavLink({
  href,
  className,
  activeClassName,
  ...rest
}: Props) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(String(href)));

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={clsx(className, isActive && activeClassName)}
      {...rest}
    />
  );
}
