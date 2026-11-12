import { capabilities } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlueprintArt } from "@/components/art/BlueprintArt";

export function CapabilitiesSection() {
  return (
    <section aria-labelledby="cap-title" className="section-y relative overflow-hidden bg-navy-900 text-white">
      <div aria-hidden className="absolute inset-0 bg-grid-blueprint [background-size:48px_48px]" />
      <div className="container-page relative">
        <SectionHeading id="cap-title"
          tone="dark"
          index="03"
          eyebrow="Engineering capabilities"
          title="The engineering behind every installation"
          text="Calculations, drawings and models are what make a building services project buildable. This is the work that happens before anything is installed."
        />
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="ticks relative border border-white/15 p-6 text-volt-light">
              <BlueprintArt variant="sld" className="aspect-[4/3] w-full" />
              <p className="label mt-3 flex justify-between text-steel-300">
                <span>Fig. 02 — Single-line diagram</span>
                <span className="text-amber-signal">[SLD SAMPLE]</span>
              </p>
            </div>
          </Reveal>
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <li key={c.code} className="bg-navy-900">
                <Reveal delay={i * 0.05} className="h-full p-6">
                  <p className="label text-volt-light">{c.code}</p>
                  <h3 className="mt-3 font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-300">{c.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
