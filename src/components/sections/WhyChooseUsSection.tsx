import { Check } from "lucide-react";
import { whyChooseUs } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUsSection() {
  return (
    <section aria-labelledby="why-title" className="section-y bg-steel-50">
      <div className="container-page">
        <SectionHeading id="why-title" index="05" eyebrow="Why choose us" title="What working with us looks like" />
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <li key={w.title}>
              <Reveal delay={(i % 3) * 0.07}>
                <div className="flex gap-4 border-t-2 border-navy-900 pt-5">
                  <Check aria-hidden className="mt-1 h-5 w-5 shrink-0 text-volt" strokeWidth={2.5} />
                  <div>
                    <h3 className="font-bold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-600">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
