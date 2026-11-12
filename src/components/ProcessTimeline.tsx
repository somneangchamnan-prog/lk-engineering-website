import { processSteps } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

/** Horizontal timeline on desktop, vertical on mobile. */
export function ProcessTimeline() {
  return (
    <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
      {/* connector line (desktop) */}
      <span aria-hidden className="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-steel-300 lg:block" />
      {/* connector line (mobile) */}
      <span aria-hidden className="absolute bottom-2 left-[1.4rem] top-2 w-px bg-steel-300 lg:hidden" />
      {processSteps.map((s, i) => (
        <li key={s.n} className="relative pl-16 lg:pl-0 lg:pt-16">
          <Reveal delay={i * 0.08}>
            <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center border border-volt bg-white font-mono text-sm font-bold text-volt-dark">
              {s.n}
            </span>
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel-600">{s.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
