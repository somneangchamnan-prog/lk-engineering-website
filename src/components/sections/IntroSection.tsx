import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { targetCustomers } from "@/data/content";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlueprintArt } from "@/components/art/BlueprintArt";

export function IntroSection() {
  return (
    <section aria-labelledby="intro-title" className="section-y">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading id="intro-title"
            index="01"
            eyebrow="Who we are"
            title="Electrical and MEP engineering, from first drawing to final test."
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-steel-600">
              {site.name} is an electrical and MEP engineering company in {site.country}. We design, install and
              commission the building services that keep modern buildings safe, comfortable and running — electrical
              power, HVAC, plumbing, fire protection, ELV and solar PV.
            </p>
            <p className="mt-4 leading-relaxed text-steel-600">
              Our work covers homes, offices, hotels, factories, warehouses and developments, and we also support
              other engineering and construction companies with design, BIM and drawing services.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Who we work with">
              {targetCustomers.map((c) => (
                <li key={c} className="label border border-steel-200 px-3 py-1.5 !text-[0.65rem] text-steel-600">{c}</li>
              ))}
            </ul>
            <Link href="/about" className="btn-outline-dark mt-8">
              About us <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <figure className="ticks relative bg-navy-900 p-6 text-volt-light">
            <div aria-hidden className="absolute inset-0 bg-grid-blueprint [background-size:32px_32px]" />
            <BlueprintArt variant="floorplan" className="relative aspect-[4/3] w-full" />
            <figcaption className="label relative mt-3 flex justify-between text-steel-300">
              <span>Fig. 01 — Building services plan</span>
              <span className="text-amber-signal">[IMAGE]</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
