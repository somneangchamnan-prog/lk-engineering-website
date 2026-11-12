/**
 * Marketing copy that is not company-specific fact. Review all of it and
 * edit anything that does not describe your company accurately.
 */

export const processSteps = [
  {
    n: "01",
    title: "Consultation",
    text: "We listen to your goals, budget and programme, and review any drawings you already have.",
  },
  {
    n: "02",
    title: "Site Survey",
    text: "We visit the site to check existing conditions, available space, power supply and constraints.",
  },
  {
    n: "03",
    title: "Engineering Design",
    text: "Calculations, drawings and specifications — coordinated across disciplines and issued for approval.",
  },
  {
    n: "04",
    title: "Installation & Construction",
    text: "Installation to the approved design, with site supervision and quality checks at each stage.",
  },
  {
    n: "05",
    title: "Testing & Commissioning",
    text: "Every system is tested, recorded and handed over with documentation.",
  },
] as const;

export const capabilities = [
  {
    code: "CAP-01",
    title: "Single-line diagrams & load calculations",
    text: "Clear SLDs and demand calculations that tie equipment, cables and protection together.",
  },
  {
    code: "CAP-02",
    title: "Lighting & power layouts",
    text: "Coordinated layouts for lighting, power and containment, drawn in AutoCAD or Revit.",
  },
  {
    code: "CAP-03",
    title: "BIM coordination",
    text: "Revit MEP models used to check clearances and clashes before construction.",
  },
  {
    code: "CAP-04",
    title: "Panel & DB engineering",
    text: "Panel layouts, schedules and builds for distribution boards, MCC and ATS.",
  },
  {
    code: "CAP-05",
    title: "Multi-discipline MEP design",
    text: "Mechanical, electrical and plumbing developed together rather than in isolation.",
  },
  {
    code: "CAP-06",
    title: "Testing & fault-finding",
    text: "Measured tests, protection checks and structured troubleshooting on live installations.",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Design and build under one team",
    text: "The people who design the system also understand how it is installed and commissioned.",
  },
  {
    title: "Coordinated drawings",
    text: "Disciplines are reviewed against each other early, so problems are found on screen, not on site.",
  },
  {
    title: "Safety-first site practice",
    text: "Safe working methods and tidy, supervised sites are part of how we deliver every installation.",
  },
  {
    title: "Documented handover",
    text: "Test records, as-built drawings and clear documentation come with the finished system.",
  },
  {
    title: "Clear communication",
    text: "Plain-language updates, realistic programmes and a direct line to the engineers on your project.",
  },
  {
    title: "Built for what comes next",
    text: "Systems are designed with maintenance and future expansion in mind.",
  },
] as const;

export const coreValues = [
  { title: "Safety", text: "No shortcuts on electrical safety — for our people, our clients or building users." },
  { title: "Precision", text: "Accurate calculations, drawings and installation, checked before they are issued." },
  { title: "Integrity", text: "Honest advice, realistic programmes and clear communication, including bad news." },
  { title: "Reliability", text: "We do what we said we would do, and we stand behind the work." },
  { title: "Continuous learning", text: "Standards, software and techniques change; we keep up with them." },
] as const;

export const targetCustomers = [
  "Homeowners",
  "Commercial buildings",
  "Offices",
  "Factories",
  "Hotels",
  "Restaurants",
  "Warehouses",
  "Developers",
  "Construction companies",
  "Other engineering companies",
] as const;

export const testimonialPlaceholders = [
  {
    quote: "[CLIENT TESTIMONIAL — add a real quote from a client, with their permission.]",
    name: "[CLIENT NAME]",
    role: "[ROLE, COMPANY]",
  },
  {
    quote: "[CLIENT TESTIMONIAL — add a real quote from a client, with their permission.]",
    name: "[CLIENT NAME]",
    role: "[ROLE, COMPANY]",
  },
  {
    quote: "[CLIENT TESTIMONIAL — add a real quote from a client, with their permission.]",
    name: "[CLIENT NAME]",
    role: "[ROLE, COMPANY]",
  },
] as const;

/** Add real testimonials here; when non-empty they replace the placeholders. */
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const partnerSlots = 6;
