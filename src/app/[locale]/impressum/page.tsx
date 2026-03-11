import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";
import { LegalPageWrapper } from "@/components/ui/legal-page";
import { getCanonicalUrl } from "@/lib/url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "impressum" });
  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: getCanonicalUrl(locale, "/impressum/"),
    },
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ImpressumContent />;
}

function ImpressumContent() {
  const t = useTranslations("impressum");

  // Austrian VAT IDs are displayed with a space after the country prefix: ATU 12345678
  const formattedUid = siteConfig.business.uid.replace(/^(ATU)(\d+)$/, "$1 $2");

  return (
    <LegalPageWrapper>
      <h1 className="text-3xl font-bold tracking-tight mb-12">{t("title")}</h1>

      <div className="space-y-4 text-muted leading-relaxed">
        <p className="text-foreground font-medium">{siteConfig.company}</p>
        <p className="text-foreground/70">{siteConfig.author.name}</p>
        <p>{siteConfig.contact.address}</p>
        <p>{t("businessSubject")}</p>
        <p>{t("membership")}</p>
        <p>{t("jurisdiction")}</p>
        <p>
          {t("uid")}: {formattedUid}
        </p>
        <p>
          <a
            href={siteConfig.business.wko}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-secondary transition-colors"
          >
            {t("wko")}
          </a>
        </p>
        <p>
          {t("legalBasis")}
          <br />
          {t("legalRef")}
        </p>
        <p>
          {t("contact")}
          <br />
          {t("email")}:{" "}
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
