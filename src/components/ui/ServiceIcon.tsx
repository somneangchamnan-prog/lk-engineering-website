import {
  Box, Cable, CircuitBoard, Compass, Droplets, Flame, Gauge, Sun, Webcam, Wind, Wrench, Zap,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/data/services";

const icons: Record<ServiceIconName, LucideIcon> = {
  zap: Zap,
  compass: Compass,
  wind: Wind,
  droplets: Droplets,
  flame: Flame,
  cable: Cable,
  cctv: Webcam,
  sun: Sun,
  circuit: CircuitBoard,
  box: Box,
  wrench: Wrench,
  gauge: Gauge,
};

export function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden className={className} strokeWidth={1.6} />;
}
