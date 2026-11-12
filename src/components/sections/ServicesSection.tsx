import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { serviceGroups } from "@/data/content";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GroupIcon } from "@/components/ui/GroupIcon";

const serviceBySlug = new Map(services.map((s) => [s.slug, s]));

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y relative overflow-hidden bg-navy-900 text-white">
      <div aria-hidden className="absolute inset-0 bg-grid-blueprint opacity-60 [background-size:40px_40px]" />
      <div className="container-page relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="services-title"
            index="02"
            eyebrow="Services"
            tone="dark"
            title="Four disciplines. One coordinated engineering team."
            text="Electrical, MEP, design and site services delivered together, from first calculation to final test report."
          />
          <Reveal>
            <Link href="/services" className="btn-outline-light shrink-0">
              All services <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {serviceGroups.map((g, i) => (
            <li key={g.id} id={g.id} className="scroll-mt-28 bg-navy-900">
              <Reveal delay={(i % 2) * 0.08} className="h-full">
                <article
                  aria-labelledby={`${g.id}-title`}
                  className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-navy-800/70 sm:p-9"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center border border-volt/40 text-volt-light transition-colors duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-white">
                      <GroupIcon name={g.icon} className="h-6 w-6" />
                    </span>
                    <span className="label !text-[0.62rem] text-steel-400">{g.code}</span>
                  </div>

                  <h3 id={`${g.id}-title`} className="mt-6 text-2xl font-bold">{g.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-steel-300">{g.text}</p>

                  <ul className="mt-6 grid gap-2.5 border-t border-white/10 pt-6 text-sm text-steel-200">
                    {g.scope.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-volt-light" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <p className="label !text-[0.6rem] text-steel-400">Related services</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {g.services.map((slug) => {
                        const s = serviceBySlug.get(slug);
                        if (!s) return null;
                        return (
                          <li key={slug}>
                            <Link
                              href={`/services/${slug}`}
                              className="inline-flex items-center gap-1.5 border border-white/15 px-3 py-1.5 text-xs font-medium text-steel-200 transition-colors hover:border-volt-light hover:text-white"
                            >
                              {s.title}
                              <ArrowUpRight aria-hidden className="h-3 w-3" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
