import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";
import { LegalPageWrapper } from "@/components/ui/legal-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "datenschutz" });
  const isDE = locale === "de";
  return {
    title: t("title"),
    description: isDE
      ? "Datenschutzerklärung der Kratky Tech KG gemäß DSGVO und TKG 2021."
      : "Privacy policy of Kratky Tech KG pursuant to GDPR and TKG 2021.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://kratky.tech"}/${locale}/datenschutz/`,
    },
  };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DatenschutzContent />;
}

function DatenschutzContent() {
  const t = useTranslations("datenschutz");

  return (
    <LegalPageWrapper>
      <h1 className="text-3xl font-bold tracking-tight mb-12">{t("title")}</h1>

      <div className="space-y-6 text-muted text-sm leading-relaxed">
        <h2 className="text-xl font-semibold text-foreground">
          {t("infoTitle")}
        </h2>
        <p>{t("intro")}</p>

        <h2 className="text-base font-semibold text-foreground pt-4">
          {t("visitTitle")}
        </h2>
        <p>{t("visitText")}</p>

        <h2 className="text-base font-semibold text-foreground pt-4">
          {t("contactTitle")}
        </h2>
        <p>{t("contactText")}</p>

        <h2 className="text-base font-semibold text-foreground pt-4">
          {t("analyticsTitle")}
        </h2>
        <p>{t("analyticsText1")}</p>
        <p>{t("analyticsText2")}</p>

        <h2 className="text-base font-semibold text-foreground pt-4">
          {t("hostingTitle")}
        </h2>
        <p>{t("hostingText")}</p>

        <h2 className="text-base font-semibold text-foreground pt-4">
          {t("rightsTitle")}
        </h2>
        <p>{t("rightsText")}</p>

        <h2 className="text-base font-semibold text-foreground pt-4">
          {t("contactDetailsTitle")}
        </h2>
        <p className="text-foreground font-medium">{siteConfig.company}</p>
        <p className="text-foreground/70">{siteConfig.author.name}</p>
        <p>{siteConfig.contact.address}</p>
        <p>{t("austria")}</p>
        <p>
          <a
            href={`mailto:${siteConfig.contact.officeEmail}`}
            className="text-accent hover:text-accent-secondary transition-colors"
          >
            {siteConfig.contact.officeEmail}
          </a>
        </p>
      </div>
    </LegalPageWrapper>
  );
}
