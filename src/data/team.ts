/**
 * Team. ALL ENTRIES ARE PLACEHOLDERS — replace with real people, add photos
 * to /public/team/, and set `photo`.
 */

export type TeamGroup =
  | "Management"
  | "Engineers"
  | "Designers"
  | "Site Engineers"
  | "Technicians";

export interface TeamMember {
  name: string;
  role: string;
  group: TeamGroup;
  bio: string;
  photo?: string;
}

export const teamGroups: { group: TeamGroup; blurb: string }[] = [
  { group: "Management", blurb: "Leadership, project direction and client relationships." },
  { group: "Engineers", blurb: "Electrical and MEP design engineers." },
  { group: "Designers", blurb: "CAD and BIM drafters and modellers." },
  { group: "Site Engineers", blurb: "On-site supervision, coordination and quality control." },
  { group: "Technicians", blurb: "Installation, testing and commissioning." },
];

const bio = "[Short biography: experience, specialism and qualifications. Replace this placeholder.]";

export const team: TeamMember[] = [
  { name: "[FULL NAME]", role: "[Managing Director]", group: "Management", bio },
  { name: "[FULL NAME]", role: "[Project Manager]", group: "Management", bio },
  { name: "[FULL NAME]", role: "[Senior Electrical Engineer]", group: "Engineers", bio },
  { name: "[FULL NAME]", role: "[MEP Engineer]", group: "Engineers", bio },
  { name: "[FULL NAME]", role: "[BIM / Revit Modeller]", group: "Designers", bio },
  { name: "[FULL NAME]", role: "[AutoCAD Designer]", group: "Designers", bio },
  { name: "[FULL NAME]", role: "[Site Engineer]", group: "Site Engineers", bio },
  { name: "[FULL NAME]", role: "[Site Engineer]", group: "Site Engineers", bio },
  { name: "[FULL NAME]", role: "[Lead Technician]", group: "Technicians", bio },
  { name: "[FULL NAME]", role: "[Technician]", group: "Technicians", bio },
];
