import { Quote } from "lucide-react";
import { partnerSlots, testimonialPlaceholders, testimonials } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection({ hideWhenEmpty = false }: { hideWhenEmpty?: boolean }) {
  const real = testimonials.length > 0;
  if (!real && hideWhenEmpty) return null;
  const items = real ? testimonials : testimonialPlaceholders;
  return (
    <section aria-labelledby="testimonials-title" className="section-y bg-steel-50">
      <div className="container-page">
        <SectionHeading id="testimonials-title" index="07" eyebrow="Testimonials" title="What clients say" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <li key={i}>
              <Reveal delay={i * 0.08} className="h-full">
                <figure className="flex h-full flex-col border border-steel-200 bg-white p-7">
                  <Quote aria-hidden className="h-7 w-7 text-volt" strokeWidth={1.5} />
                  <blockquote className={`mt-4 flex-1 text-sm leading-relaxed ${real ? "text-navy-800" : "font-mono text-amber-ink"}`}>
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-steel-100 pt-4">
                    <p className="font-bold">{t.name}</p>
                    <p className="label mt-1 text-steel-500">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <h3 className="label text-steel-500">Clients &amp; partners</h3>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: partnerSlots }).map((_, i) => (
              <li key={i} className="flex h-20 items-center justify-center border border-dashed border-steel-300 bg-white">
                <span className="label !text-[0.6rem] text-amber-ink">[CLIENT LOGO]</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
