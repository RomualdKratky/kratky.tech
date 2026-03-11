import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold tracking-tight text-accent">404</h1>
        <p className="text-xl text-muted">{t("title")}</p>
        <p className="text-muted/70">{t("description")}</p>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-accent/10 text-accent border border-accent/20 rounded-md text-sm tracking-wider hover:bg-accent/20 transition-colors"
        >
          {t("back")}
        </Link>
      </div>
    </div>
  );
}
