import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";
import { Mail, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/ui/social-links";
import { GlassCard } from "@/components/ui/glass-card";
import { Container } from "@/components/ui/container";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight mb-6">{t("title")}</h2>
        <p className="text-accent text-lg tracking-wide mb-16">
          {t("availability")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={20} className="text-accent" />
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase">
                {t("email")}
              </h3>
            </div>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-muted hover:text-foreground transition-colors tracking-wide"
            >
              {siteConfig.contact.email}
            </a>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={20} className="text-accent" />
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase">
                {t("location")}
              </h3>
            </div>
            <p className="text-muted tracking-wide">{t("locationValue")}</p>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              {t("connect")}
            </h3>
            <SocialLinks size={22} showXing />
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
