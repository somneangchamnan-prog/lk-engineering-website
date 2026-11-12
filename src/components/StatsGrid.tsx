import { services } from "@/data/services";
import { site } from "@/data/site";
import { StatCard } from "./StatCard";

/** Stats shared by the hero and the Statistics section. */
export function StatsGrid({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
      <StatCard tone={tone} value={site.stats.projects} suffix="+" label="Projects" placeholder="[XX]" />
      <StatCard tone={tone} value={services.length} suffix="" label="Engineering Services" />
      <StatCard tone={tone} value={site.stats.engineers} suffix="+" label="Engineers" placeholder="[X]" />
      <StatCard tone={tone} value={site.stats.qualityCommitment} suffix="%" label="Commitment to Quality" />
    </div>
  );
}
