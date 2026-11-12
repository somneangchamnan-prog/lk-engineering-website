import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, MapPin, Building2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, quoteHref, site } from "@/data/site";
import { getProject, projects } from "@/data/projects";
import { services } from "@/data/services";
import { getRelatedProjectsForProject } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { ProjectImage } from "@/components/ProjectImage";
import { ProjectCard } from "@/components/ProjectCard";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTASection } from "@/components/CTASection";

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.name} — ${p.type} Project`,
    description: p.summary.startsWith("[")
      ? `${p.type} project in Cambodia: ${p.scope.join(", ")}.`
      : p.summary,
    path: `/projects/${p.slug}`,
    // Don't let search engines index placeholder content.
    noIndex: p.placeholder,
  });
}

function Block({ title, items, id }: { title: string; items: string[]; id: string }) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-2xl font-bold">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((t, i) => (
          <li key={i} className="flex gap-4 border-l-2 border-volt pl-4 leading-relaxed text-steel-600">{t}</li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const relatedServices = services.filter((s) => s.categories.some((c) => project.categories.includes(c))).slice(0, 4);
  const relatedProjects = getRelatedProjectsForProject(project);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") },
            { "@type": "ListItem", position: 3, name: project.name, item: absoluteUrl(`/projects/${project.slug}`) },
          ],
        }}
      />
      <PageHeader
        eyebrow={project.type}
        title={project.name}
        text={project.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }, { label: project.name }]}
      />

      <section className="pt-12 lg:pt-16">
        <div className="container-page">
          <ProjectImage project={project} priority sizes="100vw" className="aspect-[16/9] w-full" />
        </div>
      </section>

      <section aria-labelledby="overview" className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-14">
            <section aria-labelledby="overview">
              <h2 id="overview" className="text-2xl font-bold">Project overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-steel-600">{project.overview}</p>
            </section>
            <Block id="challenges" title="Project challenges" items={project.challenges} />
            <Block id="solutions" title="Solutions" items={project.solutions} />
            <Block id="results" title="Project results" items={project.results} />
          </div>

          <aside aria-label="Project details" className="h-fit space-y-8 border border-steel-200 p-7 lg:sticky lg:top-28">
            <dl className="space-y-4 text-sm">
              <div className="flex items-start gap-3"><Building2 aria-hidden className="mt-0.5 h-4 w-4 text-volt" /><div><dt className="label text-steel-500">Type</dt><dd className="mt-1 font-medium">{project.type}</dd></div></div>
              <div className="flex items-start gap-3"><MapPin aria-hidden className="mt-0.5 h-4 w-4 text-volt" /><div><dt className="label text-steel-500">Location</dt><dd className="mt-1 font-medium">{project.location}</dd></div></div>
              <div className="flex items-start gap-3"><Calendar aria-hidden className="mt-0.5 h-4 w-4 text-volt" /><div><dt className="label text-steel-500">Year</dt><dd className="mt-1 font-mono font-medium">{project.year}</dd></div></div>
            </dl>
            <div>
              <h3 className="label text-steel-500">Scope of work</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.scope.map((s) => <li key={s} className="border border-steel-200 px-2.5 py-1 text-xs font-medium">{s}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="label text-steel-500">Engineering systems</h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {project.systems.map((s) => <li key={s} className="flex gap-2"><span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-volt" />{s}</li>)}
              </ul>
            </div>
            {relatedServices.length > 0 && (
              <div>
                <h3 className="label text-steel-500">Related services</h3>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {relatedServices.map((s) => (
                    <li key={s.slug}><Link href={`/services/${s.slug}`} className="font-medium text-volt-dark hover:underline">{s.title}</Link></li>
                  ))}
                </ul>
              </div>
            )}
            <Link href={quoteHref} className="btn-primary w-full">Request a Quote <ArrowRight aria-hidden className="h-4 w-4" /></Link>
          </aside>
        </div>
      </section>

      <section aria-labelledby="gallery" className="pb-20 lg:pb-28">
        <div className="container-page">
          <h2 id="gallery" className="text-2xl font-bold">Gallery</h2>
          <div className="mt-6"><Gallery project={project} /></div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section aria-labelledby="more" className="section-y bg-steel-50">
          <div className="container-page">
            <h2 id="more" className="text-3xl font-bold">More projects</h2>
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => <li key={p.slug}><ProjectCard project={p} /></li>)}
            </ul>
          </div>
        </section>
      )}

      <CTASection title={`Planning a project like this in ${site.country}?`} />
    </>
  );
}
