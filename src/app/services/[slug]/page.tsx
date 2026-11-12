import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, quoteHref, site } from "@/data/site";
import { getService, services } from "@/data/services";
import { getRelatedProjects } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ServiceCard } from "@/components/ServiceCard";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/CTASection";

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = getRelatedProjects(service);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: service.title,
              description: service.seoDescription,
              serviceType: service.title,
              areaServed: { "@type": "Country", name: site.country },
              provider: { "@id": `${site.url}/#organization` },
              url: absoluteUrl(`/services/${service.slug}`),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
                { "@type": "ListItem", position: 3, name: service.title, item: absoluteUrl(`/services/${service.slug}`) },
              ],
            },
          ],
        }}
      />
      <PageHeader
        eyebrow="Service"
        title={`${service.title} in ${site.country}`}
        text={service.short}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section aria-labelledby="overview" className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center bg-navy-900 text-volt-light">
                <ServiceIcon name={service.icon} className="h-7 w-7" />
              </span>
              <h2 id="overview" className="mt-6 text-3xl font-bold">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-steel-600">{service.detail}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-12 text-2xl font-bold">Scope of work</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.scope.map((item) => (
                  <li key={item} className="flex gap-3 border border-steel-200 p-4 text-sm">
                    <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-volt" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside aria-label="Request this service" className="h-fit border border-navy-900 bg-navy-900 p-7 text-white lg:sticky lg:top-28">
            <p className="label text-volt-light">Get started</p>
            <h2 className="mt-3 text-xl font-bold">Need {service.title.toLowerCase()}?</h2>
            <p className="mt-3 text-sm leading-relaxed text-steel-300">
              Tell us about your project and we&apos;ll respond with a practical proposal.
            </p>
            <Link href={quoteHref} className="btn-primary mt-6 w-full">
              Request a Quote <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related" className="section-y bg-steel-50">
          <div className="container-page">
            <h2 id="related" className="text-3xl font-bold">Related projects</h2>
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}><ProjectCard project={p} /></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section aria-labelledby="more" className="section-y">
        <div className="container-page">
          <h2 id="more" className="text-3xl font-bold">Other services</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((s, i) => (
              <li key={s.slug}><ServiceCard service={s} index={services.indexOf(s)} /></li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
