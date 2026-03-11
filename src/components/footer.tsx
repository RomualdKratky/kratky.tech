import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "./ui/social-links";
import { Container } from "./ui/container";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border py-12 px-6">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <p className="text-sm text-muted tracking-wide">
            &copy; {new Date().getFullYear()} {siteConfig.author.name}.{" "}
            {t("copyright")}
          </p>
          <p className="text-xs text-muted/70 tracking-wide">
            {t("privacyNote")}
          </p>
        </div>
        <SocialLinks size={18} />
      </Container>
    </footer>
  );
}
