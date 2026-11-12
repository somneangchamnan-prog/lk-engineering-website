import type { ProjectCategory } from "./projects";

export type ServiceIconName =
  | "zap"
  | "compass"
  | "wind"
  | "droplets"
  | "flame"
  | "cable"
  | "cctv"
  | "sun"
  | "circuit"
  | "box"
  | "wrench"
  | "gauge";

export interface Service {
  slug: string;
  title: string;
  icon: ServiceIconName;
  short: string;
  detail: string;
  scope: string[];
  /** Used to find related projects. */
  categories: ProjectCategory[];
  /** Used in the page <title>, e.g. "Electrical Engineering Cambodia". */
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    icon: "zap",
    short: "Power distribution, lighting and low-voltage design for buildings of every scale.",
    detail:
      "We design complete electrical systems — from the utility connection and main switchboard to final sub-circuits — so power is safe, efficient and ready for future expansion. Drawings and calculations are coordinated with the architectural, structural and mechanical teams before they reach site.",
    scope: [
      "Load assessment and maximum-demand calculation",
      "Single-line and riser diagrams",
      "Lighting design and layouts",
      "Power and small-power layouts",
      "Cable, breaker and earthing sizing",
      "Distribution board and panel schedules",
      "Specifications and bill of quantities",
    ],
    categories: ["Electrical"],
    seoTitle: "Electrical Engineering Cambodia",
    seoDescription:
      "Electrical engineering and electrical design services in Cambodia: load calculations, single-line diagrams, lighting and power distribution for commercial, industrial and residential buildings.",
  },
  {
    slug: "mep-design",
    title: "MEP Design",
    icon: "compass",
    short: "Coordinated mechanical, electrical and plumbing design in a single package.",
    detail:
      "Rather than treating each discipline in isolation, we develop MEP systems together so routes, equipment rooms and ceiling heights are resolved early. This reduces clashes on site and gives contractors clear, buildable information.",
    scope: [
      "Concept and schematic MEP design",
      "Detailed design drawings",
      "Equipment selection and schedules",
      "Services coordination and clash review",
      "Specifications and bill of quantities",
      "Shop drawing review",
      "As-built documentation",
    ],
    categories: ["MEP"],
    seoTitle: "MEP Design Cambodia",
    seoDescription:
      "MEP design in Cambodia: coordinated mechanical, electrical and plumbing engineering for hotels, offices, factories, warehouses and developments.",
  },
  {
    slug: "hvac-system",
    title: "HVAC System",
    icon: "wind",
    short: "Cooling, ventilation and air distribution matched to how a building is actually used.",
    detail:
      "We design and install HVAC systems that balance comfort, energy use and ease of maintenance. Equipment is selected from a proper cooling-load calculation, then laid out with ductwork, piping and controls that can be built and serviced.",
    scope: [
      "Cooling load calculation",
      "Equipment selection and layout",
      "Ductwork and refrigerant / chilled-water piping design",
      "Ventilation and exhaust design",
      "Installation supervision",
      "Testing, balancing and commissioning",
    ],
    categories: ["HVAC"],
    seoTitle: "HVAC Contractor Cambodia",
    seoDescription:
      "HVAC design and installation in Cambodia: cooling load calculation, air conditioning, ventilation and exhaust systems for commercial and industrial buildings.",
  },
  {
    slug: "plumbing-system",
    title: "Plumbing System",
    icon: "droplets",
    short: "Water supply, drainage and sanitary systems designed for reliable everyday use.",
    detail:
      "From pipe sizing and pump selection to drainage falls and venting, we design plumbing systems that perform properly and are straightforward to install. On site, we follow the design through pressure testing and handover.",
    scope: [
      "Cold and hot water supply",
      "Drainage, waste and vent systems",
      "Water tanks and booster pumps",
      "Rainwater and storm drainage",
      "Pipe sizing and riser diagrams",
      "Installation and pressure testing",
    ],
    categories: ["Plumbing"],
    seoTitle: "Plumbing System Design & Installation Cambodia",
    seoDescription:
      "Plumbing design and installation in Cambodia: water supply, drainage, sanitary and pump systems for buildings, factories and hotels.",
  },
  {
    slug: "fire-protection",
    title: "Fire Protection",
    icon: "flame",
    short: "Fire detection, alarm and suppression systems designed around building use and local requirements.",
    detail:
      "Fire protection systems are designed around the building's use, size and occupancy, and to meet the codes and authority requirements that apply to the project. We cover detection and alarm as well as water-based suppression, through to testing and handover.",
    scope: [
      "Fire alarm and detection systems",
      "Sprinkler, hydrant and hose-reel systems",
      "Fire pump and water supply",
      "Emergency lighting and exit signage",
      "Coordination with smoke control systems",
      "Testing and handover",
    ],
    categories: ["Fire Protection"],
    seoTitle: "Fire Protection Systems Cambodia",
    seoDescription:
      "Fire protection design and installation in Cambodia: fire alarm, detection, sprinkler and hydrant systems for commercial and industrial buildings.",
  },
  {
    slug: "elv-system",
    title: "ELV System",
    icon: "cable",
    short: "Extra-low-voltage communication and building systems, planned as one network.",
    detail:
      "ELV systems share cable routes, rooms and power, so we plan them together. That means cleaner containment, fewer clashes with other services, and a system the building owner can actually maintain.",
    scope: [
      "Structured cabling and data points",
      "Data and network infrastructure",
      "Public address and intercom",
      "CCTV and access control integration",
      "Cable containment and rack layouts",
      "Testing and documentation",
    ],
    categories: ["ELV"],
    seoTitle: "ELV System Installation Cambodia",
    seoDescription:
      "ELV system design and installation in Cambodia: structured cabling, data and network, intercom, CCTV and access control for offices, hotels and factories.",
  },
  {
    slug: "cctv-security",
    title: "CCTV & Security",
    icon: "cctv",
    short: "Camera coverage and access control designed around real site risks.",
    detail:
      "We plan camera positions for useful coverage rather than just a camera count, and pair them with access control that suits how people move through the building. Systems are installed, configured and handed over with documentation.",
    scope: [
      "Camera layout and coverage design",
      "IP CCTV installation",
      "Recording and storage sizing",
      "Access control — card and biometric",
      "Door controllers and intercom",
      "Remote viewing setup and maintenance",
    ],
    categories: ["ELV"],
    seoTitle: "CCTV & Access Control Installation Cambodia",
    seoDescription:
      "CCTV and access control installation in Cambodia for homes, offices, warehouses and factories: camera design, IP CCTV, recording and door access systems.",
  },
  {
    slug: "solar-pv",
    title: "Solar PV",
    icon: "sun",
    short: "Rooftop and ground-mounted solar PV systems sized around your load and your roof.",
    detail:
      "We start with the site and the electricity load, then size the PV array, inverter and protection to suit. Installation and commissioning are carried out to the design, with the electrical protection and earthing that a PV system needs.",
    scope: [
      "Site and roof survey",
      "Load analysis and system sizing",
      "PV array and inverter design",
      "DC / AC protection and earthing",
      "Installation and commissioning",
      "Monitoring setup",
    ],
    categories: ["Solar"],
    seoTitle: "Solar Installation Cambodia",
    seoDescription:
      "Solar PV design and installation in Cambodia: site survey, system sizing, rooftop installation and commissioning for homes, commercial buildings and factories.",
  },
  {
    slug: "control-panel",
    title: "Control Panel / DB / MCC / ATS",
    icon: "circuit",
    short: "Distribution boards, MCC and ATS panels built to your single-line diagram.",
    detail:
      "Panels are the heart of an electrical system. We design and build distribution boards, motor control centres, automatic transfer switches and control panels from clear drawings, then test them before they leave for site.",
    scope: [
      "Distribution board and main switchboard design",
      "Motor control centre (MCC)",
      "Automatic transfer switch (ATS) panels",
      "Control and automation panels",
      "Panel drawings and schedules",
      "Testing and site installation",
    ],
    categories: ["Electrical"],
    seoTitle: "Control Panel, DB, MCC & ATS Cambodia",
    seoDescription:
      "Electrical control panel, distribution board, MCC and ATS design and installation in Cambodia for factories, warehouses and commercial buildings.",
  },
  {
    slug: "bim-revit",
    title: "BIM / Revit",
    icon: "box",
    short: "Revit MEP models and coordinated drawings that catch problems before site.",
    detail:
      "We model MEP systems in Revit so routes, equipment and clearances can be checked against architecture and structure before construction. Coordination drawings, quantities and as-built models come straight from the model, alongside AutoCAD drawings where a project needs them.",
    scope: [
      "Revit MEP modelling",
      "Clash detection and coordination",
      "Quantity take-off",
      "Shop and coordination drawings",
      "As-built models",
      "AutoCAD engineering drawings",
    ],
    categories: ["BIM"],
    seoTitle: "BIM Revit Cambodia",
    seoDescription:
      "BIM and Revit MEP modelling in Cambodia: clash detection, coordination drawings, quantity take-off and AutoCAD engineering design for building projects.",
  },
  {
    slug: "electrical-installation",
    title: "Electrical Installation",
    icon: "wrench",
    short: "Site installation carried out to the drawings, by a team that understands the design.",
    detail:
      "Good design only works if it is installed properly. Our site teams install containment, cabling, boards and fittings to the approved drawings, with supervision and quality checks along the way.",
    scope: [
      "Cable tray, conduit and trunking",
      "Cable pulling and termination",
      "Distribution board and panel installation",
      "Lighting and power points",
      "Earthing and lightning protection",
      "Site supervision and quality checks",
    ],
    categories: ["Electrical"],
    seoTitle: "Electrical Installation Cambodia",
    seoDescription:
      "Electrical installation in Cambodia: cable containment, wiring, distribution boards, lighting and power for commercial, industrial and residential projects.",
  },
  {
    slug: "testing-commissioning",
    title: "Testing & Commissioning",
    icon: "gauge",
    short: "Systematic testing, fault-finding and documented handover.",
    detail:
      "Before a building is handed over, every system should be tested and recorded. We carry out measured tests, verify that systems work as designed, and issue documentation the owner can keep. For existing installations, we also troubleshoot faults.",
    scope: [
      "Insulation resistance and continuity tests",
      "Earth resistance testing",
      "Protection settings verification",
      "Functional testing of building systems",
      "Troubleshooting and fault finding",
      "Test reports and handover documents",
    ],
    categories: ["Electrical", "MEP"],
    seoTitle: "Electrical Testing & Commissioning Cambodia",
    seoDescription:
      "Testing, commissioning and troubleshooting of electrical and MEP systems in Cambodia, with documented test reports and handover.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
