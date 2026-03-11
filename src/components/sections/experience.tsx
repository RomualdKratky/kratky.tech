import { useTranslations } from "next-intl";
import { experiences } from "@/data/experience";
import { GlassCard } from "@/components/ui/glass-card";
import { Container } from "@/components/ui/container";

export function ExperienceSection() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight mb-16">
          {t("title")}
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <GlassCard key={exp.id} hover className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-wide">
                    {t(`${exp.id}.role`)}
                  </h3>
                  <p className="text-accent text-sm tracking-wider mt-1">
                    {t(`${exp.id}.company`)}
                  </p>
                </div>
                <span className="text-sm text-muted tracking-wider font-mono shrink-0">
                  {t(`${exp.id}.period`)}
                </span>
              </div>

              <p className="text-muted leading-relaxed mb-4">
                {t(`${exp.id}.description`)}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs tracking-wider px-3 py-1 rounded-full bg-surface border border-border text-muted"
                  >
                    {t(`${exp.id}.highlights.${h}`)}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
