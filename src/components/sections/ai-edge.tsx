import { useTranslations } from "next-intl";
import { Zap, Shield, RefreshCw } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Container } from "@/components/ui/container";

// Explicit key mapping avoids template-literal type casts and keeps
// next-intl's strict key inference intact.
const CARDS = [
  { titleKey: "card1Title", bodyKey: "card1Body", icon: Zap },
  { titleKey: "card2Title", bodyKey: "card2Body", icon: Shield },
  { titleKey: "card3Title", bodyKey: "card3Body", icon: RefreshCw },
] as const;

export function AiEdgeSection() {
  const t = useTranslations("aiEdge");

  return (
    <section id="services" className="py-32 bg-surface/50">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight mb-16">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map(({ titleKey, bodyKey, icon: Icon }) => (
            <GlassCard key={titleKey} hover className="p-8">
              <Icon size={24} className="text-accent mb-4" />
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-3">
                {t(titleKey)}
              </h3>
              <p className="text-muted leading-relaxed">{t(bodyKey)}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
