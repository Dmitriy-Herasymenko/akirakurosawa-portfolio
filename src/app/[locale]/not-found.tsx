import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="font-display text-5xl">404</h1>
      <p className="mt-4 text-xl">{t("heading")}</p>
      <p className="mt-2 text-muted">{t("text")}</p>
      <Link
        href="/"
        className="mt-8 border-b border-current pb-1 text-sm tracking-wide"
      >
        {t("cta")}
      </Link>
    </div>
  );
}
