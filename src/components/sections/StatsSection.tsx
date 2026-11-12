import { StatsGrid } from "@/components/StatsGrid";

export function StatsSection() {
  return (
    <section aria-label="Company statistics" className="bg-navy-950 py-16 text-white">
      <div className="container-page">
        <p className="label mb-8 flex items-center gap-3 text-volt-light">
          <span className="text-steel-400">07</span>
          <span aria-hidden className="h-px w-8 bg-volt-light/60" />
          By the numbers
        </p>
        <StatsGrid />
        <p className="mt-8 text-xs text-steel-400">
          Figures shown as [XX] are placeholders — add real values in <code className="font-mono">src/data/site.ts</code>.
        </p>
      </div>
    </section>
  );
}
