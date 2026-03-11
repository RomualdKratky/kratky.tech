export const siteConfig = {
  title: "kratky.tech",
  url: "https://kratky.tech",
  company: "Kratky Tech KG",
  author: {
    name: "DI(FH) Romuald Kratky",
    role: "Senior Software Architect",
    photo: "/rk.jpg",
  },
  contact: {
    email: "romuald@kratky.tech",
    officeEmail: "office@kratky.tech",
    address: "Puffergasse 1/2/6, 1210 Wien",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/romuald-kratky-b36243170/",
    github: "https://github.com/RomualdKratky",
    xing: "https://www.xing.com/profile/Romuald_Kratky",
  },
  business: {
    subject: "IT-Dienstleistungen",
    uid: "ATU80941457", // Austrian VAT ID (Umsatzsteuer-Identifikationsnummer)
    wko: "https://firmen.wko.at/Web/DetailsInfos.aspx?FirmaID=45600f26-5273-4b0a-a966-fad96f2668aa",
  },
  analytics: {
    cfToken: process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN ?? "",
  },
  /** Static content for the OpenGraph image (always rendered in English). */
  og: {
    /** Short display name without academic title, for the OG image heading. */
    name: "Romuald Kratky",
    tagline: "Senior Expertise meets AI-Speed.",
    locationBlurb: "Vienna, Austria · 20+ years of mission-critical systems",
  },
} as const;

/** Logo marquee items — keys map to `trustedBy.*` translation keys.
 *  `padded`:   wraps the logo in a white pill (both modes).
 *  `pillDark`: wraps the logo in a white pill in dark mode only —
 *              for logos with dark content on a transparent background. */
export const trustedByItems = [
  {
    key: "brz",
    logo: "/logos/brz.webp",
    padded: true,
    pillDark: false,
    height: "h-7",
  },
  {
    key: "dataPad",
    logo: "/logos/datapad.webp",
    padded: false,
    pillDark: true,
    height: "h-10",
  },
  {
    key: "ersteGroup",
    logo: "/logos/erste-digital.webp",
    padded: true,
    pillDark: false,
    height: "h-10",
  },
  {
    key: "itPark",
    logo: "/logos/itpark.webp",
    padded: true,
    pillDark: false,
    height: "h-7",
  },
  {
    key: "kassandro",
    logo: "/logos/kassandro.webp",
    padded: false,
    pillDark: true,
    height: "h-7",
  },
  {
    key: "railCargo",
    logo: "/logos/rail-cargo.svg",
    padded: false,
    pillDark: true,
    height: "h-7",
  },
  {
    key: "reinisch",
    logo: "/logos/reinisch.webp",
    padded: true,
    pillDark: false,
    height: "h-9",
  },
] as const;

export type TrustedByKey = (typeof trustedByItems)[number]["key"];
