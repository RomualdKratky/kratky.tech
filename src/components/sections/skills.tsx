import { useTranslations } from "next-intl";
import { skillCategories } from "@/data/skills";
import { GlassCard } from "@/components/ui/glass-card";
import { Container } from "@/components/ui/container";

export function SkillsSection() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="py-32 bg-surface/50">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight mb-16">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <GlassCard key={category.nameKey} hover className="p-6">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-5">
                {t(`categories.${category.nameKey}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-md bg-surface border border-border text-foreground/80 tracking-wide"
                  >
                    {skill}
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
