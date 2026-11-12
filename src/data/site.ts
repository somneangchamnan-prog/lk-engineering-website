/**
 * Single source of truth for company information.
 *
 * Every value wrapped in [SQUARE BRACKETS] is a placeholder. Replace them with
 * real information. The UI automatically hides placeholder values from links
 * (tel:, mailto:) and from SEO schema markup until you replace them.
 */

export const site = {
  name: "L&K Engineering Co., Ltd",
  legalName: "L&K Engineering Co., Ltd",
  tagline: "Engineering Better Solutions for Modern Buildings",
  description:
    "Professional electrical and MEP engineering design, installation and commissioning solutions for buildings in Cambodia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  country: "Cambodia",
  locale: "L&K Engineering Co., Ltd",

  address: "Domnak Village, Sangkat Kouk Khleang, Khan Sen Sok, Phnom Penh, Cambodia",
  phone: "(+855) 78 78 2222",
  email: "l&kengineering@gmail.com",
  telegram: "[TELEGRAM LINK]",
  facebook: "[FACEBOOK PAGE LINK]",

  /** Paste the src URL of a Google Maps embed (Share → Embed a map). */
  mapEmbedUrl: "",

  /** Optional real hero photo, e.g. "/images/hero.jpg" placed in /public. Leave empty to use the blueprint artwork. */
  heroImage: "",

  hours: [
    { days: "Monday – Friday", time: "7:30 AM – 5:00 PM" },
    { days: "Saturday", time: "7:30 AM – 11:30 AM" },
    { days: "Sunday", time: "Day Off" },
  ],

  /** Add real certifications / licences here. The section stays hidden while empty. */
  certifications: [] as string[],

  /** Real values only. `null` renders a visible placeholder. */
  stats: {
    projects: null as number | null,
    engineers: null as number | null,
    qualityCommitment: 100,
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
] as const;

export const quoteHref = "/contact#quote";

/** True when a config value still contains a [PLACEHOLDER]. */
export function isPlaceholder(value: string | undefined | null): boolean {
  return !value || value.includes("[");
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}
