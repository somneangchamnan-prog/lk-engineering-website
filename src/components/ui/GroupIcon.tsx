import { Layers, Ruler, Wrench, Zap, type LucideIcon } from "lucide-react";
import type { ServiceGroupIcon } from "@/data/content";

const icons: Record<ServiceGroupIcon, LucideIcon> = {
  zap: Zap,
  layers: Layers,
  ruler: Ruler,
  wrench: Wrench,
};

export function GroupIcon({ name, className }: { name: ServiceGroupIcon; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden className={className} strokeWidth={1.6} />;
}
