import { whyChooseUs } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUsSection() {
  return (
    <section aria-labelledby="why-title" className="section-y relative overflow-hidden bg-navy-950 text-white">
      <div aria-hidden className="absolute inset-0 bg-grid-blueprint opacity-50 [background-size:40px_40px]" />
      <div className="container-page relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="why-title"
            index="05"
            eyebrow="Why choose us"
            tone="dark"
            title="What working with us looks like"
            text="Clear engineering, coordinated drawings and site work that matches the design. These are the standards we hold every project to."
          />
        </div>
        <ol className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
          {whyChooseUs.map((w, i) => (
            <li key={w.title} className="bg-navy-950">
              <Reveal delay={(i % 2) * 0.07} className="h-full">
                <div className="group h-full p-7 transition-colors hover:bg-navy-900">
                  <span className="font-mono text-sm font-bold text-volt-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="mt-4 block h-px w-10 bg-volt transition-all duration-300 group-hover:w-16" />
                  <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-300">{w.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
