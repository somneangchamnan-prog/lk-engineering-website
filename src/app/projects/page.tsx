import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { projects } from "@/data/projects";
import { PageHeader } from "@/components/PageHeader";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Projects — Electrical, MEP, HVAC, Solar & BIM Portfolio",
  description:
    "Project portfolio: electrical, MEP, HVAC, plumbing, fire protection, ELV, solar PV and BIM projects delivered in Cambodia.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Our project portfolio"
        text="Browse our work by discipline. Select a project for the full scope, systems, challenges and results."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />
      <section aria-label="Project portfolio" className="section-y">
        <div className="container-page">
          {projects.some((p) => p.placeholder) && (
            <p className="mb-8 border border-amber-signal/50 bg-amber-signal/10 p-4 font-mono text-xs text-navy-900">
              Sample entries are placeholders. Replace them with your real projects in <strong>src/data/projects.ts</strong>.
            </p>
          )}
          <ProjectExplorer projects={projects} />
        </div>
      </section>
      <CTASection title="Have a project in mind?" text="Share your requirements and drawings and we'll get back to you with a proposal." />
    </>
  );
}
