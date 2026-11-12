/**
 * Project portfolio.
 *
 * ALL ENTRIES BELOW ARE PLACEHOLDERS (`placeholder: true`). They show the
 * structure of the portfolio only — they are not real projects. Replace each
 * entry with a real project, add photos to /public/projects/<slug>/, and
 * remove the `placeholder` flag.
 */

export type ProjectCategory =
  | "Electrical"
  | "MEP"
  | "HVAC"
  | "Plumbing"
  | "Fire Protection"
  | "ELV"
  | "Solar"
  | "BIM";

export const projectCategories: ProjectCategory[] = [
  "Electrical",
  "MEP",
  "HVAC",
  "Plumbing",
  "Fire Protection",
  "ELV",
  "Solar",
  "BIM",
];

export type ArtVariant = "sld" | "floorplan" | "solar" | "panel" | "hvac" | "bim";

export interface Project {
  slug: string;
  name: string;
  type: string;
  location: string;
  year: string;
  categories: ProjectCategory[];
  art: ArtVariant;
  scope: string[];
  systems: string[];
  summary: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  featured: boolean;
  placeholder: boolean;
  /** Real images: ["/projects/my-project/01.jpg", ...]. Empty = placeholder tiles. */
  images: string[];
}

const challengeHint =
  "[Describe a real challenge on this project — e.g. limited ceiling space, tight schedule, existing building constraints.]";
const solutionHint =
  "[Describe how your team solved it — e.g. coordinated routing in BIM, phased installation, revised equipment layout.]";
const resultHint =
  "[State a real, verifiable result — e.g. handed over on schedule, passed inspection, energy or cost outcome.]";

export const projects: Project[] = [
  {
    slug: "project-01-commercial-building",
    name: "[PROJECT NAME 01]",
    type: "Commercial Building",
    location: "[LOCATION], Cambodia",
    year: "[YEAR]",
    categories: ["Electrical", "MEP"],
    art: "sld",
    scope: ["Electrical design", "Power distribution", "Lighting", "Installation"],
    systems: ["Main LV switchboard", "Distribution boards", "Lighting & power", "Earthing"],
    summary:
      "[One or two sentences describing the project and your role. Replace this placeholder.]",
    overview:
      "[Project overview: client type, building size and use, what was delivered and by whom. Replace this placeholder with real project information.]",
    challenges: [challengeHint],
    solutions: [solutionHint],
    results: [resultHint],
    featured: true,
    placeholder: true,
    images: [],
  },
  {
    slug: "project-02-hotel",
    name: "[PROJECT NAME 02]",
    type: "Hotel / Hospitality",
    location: "[LOCATION], Cambodia",
    year: "[YEAR]",
    categories: ["MEP", "HVAC", "Fire Protection", "Plumbing"],
    art: "hvac",
    scope: ["MEP design", "HVAC", "Fire protection", "Plumbing"],
    systems: ["Air conditioning & ventilation", "Fire alarm & sprinkler", "Water supply & drainage"],
    summary:
      "[One or two sentences describing the project and your role. Replace this placeholder.]",
    overview:
      "[Project overview: client type, building size and use, what was delivered and by whom. Replace this placeholder with real project information.]",
    challenges: [challengeHint],
    solutions: [solutionHint],
    results: [resultHint],
    featured: true,
    placeholder: true,
    images: [],
  },
  {
    slug: "project-03-factory",
    name: "[PROJECT NAME 03]",
    type: "Factory / Industrial",
    location: "[LOCATION], Cambodia",
    year: "[YEAR]",
    categories: ["Electrical"],
    art: "panel",
    scope: ["Control panels", "MCC", "ATS", "Site installation & commissioning"],
    systems: ["Motor control centre", "Automatic transfer switch", "Power distribution"],
    summary:
      "[One or two sentences describing the project and your role. Replace this placeholder.]",
    overview:
      "[Project overview: client type, facility size and use, what was delivered and by whom. Replace this placeholder with real project information.]",
    challenges: [challengeHint],
    solutions: [solutionHint],
    results: [resultHint],
    featured: true,
    placeholder: true,
    images: [],
  },
  {
    slug: "project-04-office-elv",
    name: "[PROJECT NAME 04]",
    type: "Office Building",
    location: "[LOCATION], Cambodia",
    year: "[YEAR]",
    categories: ["ELV"],
    art: "floorplan",
    scope: ["CCTV", "Access control", "Structured cabling", "Network"],
    systems: ["IP CCTV", "Access control", "Data & network", "Structured cabling"],
    summary:
      "[One or two sentences describing the project and your role. Replace this placeholder.]",
    overview:
      "[Project overview: client type, building size and use, what was delivered and by whom. Replace this placeholder with real project information.]",
    challenges: [challengeHint],
    solutions: [solutionHint],
    results: [resultHint],
    featured: false,
    placeholder: true,
    images: [],
  },
  {
    slug: "project-05-solar-pv",
    name: "[PROJECT NAME 05]",
    type: "Rooftop Solar PV",
    location: "[LOCATION], Cambodia",
    year: "[YEAR]",
    categories: ["Solar", "Electrical"],
    art: "solar",
    scope: ["System sizing", "PV design", "Installation", "Commissioning"],
    systems: ["PV array", "Inverter", "DC/AC protection", "Monitoring"],
    summary:
      "[One or two sentences describing the project and your role. Replace this placeholder.]",
    overview:
      "[Project overview: system size, roof type, what was delivered and by whom. Replace this placeholder with real project information.]",
    challenges: [challengeHint],
    solutions: [solutionHint],
    results: [resultHint],
    featured: false,
    placeholder: true,
    images: [],
  },
  {
    slug: "project-06-bim-modeling",
    name: "[PROJECT NAME 06]",
    type: "Residential / Mixed-Use",
    location: "[LOCATION], Cambodia",
    year: "[YEAR]",
    categories: ["BIM", "MEP"],
    art: "bim",
    scope: ["Revit MEP modeling", "Clash detection", "Coordination drawings"],
    systems: ["Revit MEP model", "Clash reports", "Coordination drawings"],
    summary:
      "[One or two sentences describing the project and your role. Replace this placeholder.]",
    overview:
      "[Project overview: building type and size, modelling scope, what was delivered and by whom. Replace this placeholder with real project information.]",
    challenges: [challengeHint],
    solutions: [solutionHint],
    results: [resultHint],
    featured: false,
    placeholder: true,
    images: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
