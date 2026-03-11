import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/data/site";
import { HeroSection } from "@/components/sections/hero";
import { AiEdgeSection } from "@/components/sections/ai-edge";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";

  return {
    title: `${siteConfig.author.name} | ${siteConfig.author.role}`,
    description: isDE
      ? "Senior Software Architect mit 20+ Jahren in missionskritischen Systemen für Erste Group, BRZ und mehr. Jetzt mit Startup-Geschwindigkeit. Wien, Österreich."
      : "Senior Software Architect with 20+ years building mission-critical systems for Erste Group, BRZ and more. Now at startup velocity. Vienna, Austria.",
    alternates: {
      canonical: `${siteConfig.url}/${locale}/`,
      languages: {
        de: `${siteConfig.url}/de/`,
        en: `${siteConfig.url}/en/`,
      },
    },
  };
}

/** JSON-LD Person schema for rich search results. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  jobTitle: siteConfig.author.role,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Puffergasse 1/2/6",
    addressLocality: "Wien",
    postalCode: "1210",
    addressCountry: "AT",
  },
  worksFor: {
    "@type": "Organization",
    name: siteConfig.company,
  },
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.xing,
  ],
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AiEdgeSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
