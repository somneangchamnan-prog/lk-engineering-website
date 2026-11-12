import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site, absoluteUrl } from "@/data/site";
import { services } from "@/data/services";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Electrical, MEP, HVAC, Solar & BIM Services in Cambodia",
  description:
    "Our services: electrical engineering, MEP design, HVAC, plumbing, fire protection, ELV, CCTV, solar PV, control panels, BIM/Revit, installation and commissioning in Cambodia.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${site.name} services`,
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: absoluteUrl(`/services/${s.slug}`),
          })),
        }}
      />
      <PageHeader
        eyebrow="Services"
        title="Electrical & MEP engineering services in Cambodia"
        text="From design and BIM modelling to installation, testing and commissioning — everything a building needs, delivered by one team."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section aria-label="All services" className="section-y">
        <div className="container-page">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Reveal delay={(i % 3) * 0.06} className="h-full">
                  <ServiceCard service={s} index={i} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
