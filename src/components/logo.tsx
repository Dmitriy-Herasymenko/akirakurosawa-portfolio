import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center gap-3"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-current/30 font-display text-xs tracking-tight transition-colors duration-300 group-hover:border-accent group-hover:text-accent sm:h-9 sm:w-9 sm:text-sm">
        {siteConfig.shortName}
      </span>
      <span className="font-display text-base tracking-tight sm:text-lg">
        {siteConfig.name}
      </span>
    </Link>
  );
}
