/** Valid experience IDs — must match `experience.*` translation keys. */
export type ExperienceId =
  | "ersteDigital"
  | "freelance"
  | "brz"
  | "banking"
  | "earlyCareer";

export interface Experience {
  id: ExperienceId;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "ersteDigital",
    highlights: [
      "leadFrontend",
      "reactTypescriptVite",
      "apiIntegration",
      "nodejsPdf",
      "jenkins",
      "ecp",
    ],
  },
  {
    id: "freelance",
    highlights: ["react", "typescript", "nodejs", "consulting"],
  },
  {
    id: "brz",
    highlights: ["govtech", "missionCritical", "security", "largeScale"],
  },
  {
    id: "banking",
    highlights: ["fintech", "compliance", "highAvailability"],
  },
  {
    id: "earlyCareer",
    highlights: ["webDev", "fullstack", "foundations"],
  },
];
