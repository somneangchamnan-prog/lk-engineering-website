import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";

export function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  return (
    <section aria-labelledby="projects-title" className="section-y">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="projects-title" index="04" eyebrow="Featured projects" title="Selected work" text="A look at the kinds of buildings and systems we work on." />
          <Reveal>
            <Link href="/projects" className="btn-outline-dark shrink-0">
              View all projects <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 0.08} className="h-full">
                <ProjectCard project={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
