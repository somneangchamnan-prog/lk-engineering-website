import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y bg-steel-50">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="services-title"
            index="02"
            eyebrow="Services"
            title="Complete building services under one roof"
            text="Twelve disciplines covering design, installation and commissioning."
          />
          <Reveal>
            <Link href="/services" className="btn-outline-dark shrink-0">
              All services <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={(i % 4) * 0.06} className="h-full">
                <ServiceCard service={s} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
