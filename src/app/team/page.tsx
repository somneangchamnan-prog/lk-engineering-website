import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { team, teamGroups } from "@/data/team";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Our Team — Electrical & MEP Engineers, Designers and Technicians",
  description:
    "Meet the engineers, BIM and CAD designers, site engineers, technicians and management behind our electrical and MEP projects in Cambodia.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="The people behind every project"
        text="Engineers, designers, site engineers, technicians and management working as one team."
        crumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />
      <div className="section-y">
        <div className="container-page space-y-20">
          <p className="border border-amber-signal/50 bg-amber-signal/10 p-4 font-mono text-xs">
            Team entries are placeholders. Replace them with your real team in <strong>src/data/team.ts</strong>.
          </p>
          {teamGroups.map(({ group, blurb }, gi) => {
            const members = team.filter((m) => m.group === group);
            if (members.length === 0) return null;
            const id = `group-${group.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <section key={group} aria-labelledby={id}>
                <SectionHeading id={id} index={String(gi + 1).padStart(2, "0")} eyebrow={group} title={group} text={blurb} />
                <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {members.map((m, i) => (
                    <li key={`${group}-${i}`}>
                      <Reveal delay={i * 0.06} className="h-full"><TeamCard member={m} /></Reveal>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
      <CTASection title="Work with our team" text="Talk to an engineer about your project." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
