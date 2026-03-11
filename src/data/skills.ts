/**
 * Valid category keys — must match `skills.categories.*` translation keys.
 * Note: individual skill names are intentionally English-only (industry-standard
 * tech terms that are not translated even on the German locale).
 */
export type SkillCategoryKey =
  | "frontendArchitecture"
  | "backendScale"
  | "aiModernDev";

export interface SkillCategory {
  nameKey: SkillCategoryKey;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    nameKey: "frontendArchitecture",
    skills: [
      "Next.js",
      "React Server Components",
      "TypeScript",
      "React Native",
      "Micro-Frontends",
      "Storybook",
      "Tailwind CSS",
      "Three.js",
    ],
  },
  {
    nameKey: "backendScale",
    skills: [
      "Node.js",
      "GraphQL Federation",
      "Security-first Design",
      "API Security",
      "PostgreSQL",
      "Redis / Caching",
      "REST APIs",
      "Legacy Modernization",
    ],
  },
  {
    nameKey: "aiModernDev",
    skills: [
      "AI-Augmented Engineering",
      "Cursor & Claude Code",
      "CI/CD Automation",
      "GitHub Actions",
      "Docker",
      "Cloud-Native",
      "Vitest",
      "Playwright",
    ],
  },
];
