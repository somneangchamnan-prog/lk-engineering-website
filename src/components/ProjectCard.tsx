import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col border border-steel-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-volt hover:shadow-[0_18px_40px_-18px_rgba(10,22,40,0.25)]">
      <ProjectImage project={project} className="aspect-[4/3] w-full" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-1.5">
          {project.categories.map((c) => (
            <span key={c} className="label border border-steel-200 px-2 py-1 !text-[0.6rem] text-steel-600">{c}</span>
          ))}
          {project.placeholder && (
            <span className="label border border-amber-ink/60 px-2 py-1 !text-[0.6rem] text-amber-ink">Placeholder</span>
          )}
        </div>
        <h3 className="mt-4 text-lg font-bold">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-steel-600">{project.type}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-600">{project.summary}</p>
        <dl className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-steel-100 pt-4 text-xs text-steel-500">
          <div className="flex items-center gap-1.5">
            <MapPin aria-hidden className="h-3.5 w-3.5" />
            <dt className="sr-only">Location</dt>
            <dd>{project.location}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Year</dt>
            <dd className="font-mono">{project.year}</dd>
            <ArrowUpRight aria-hidden className="h-4 w-4 text-volt transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </dl>
      </div>
    </article>
  );
}
