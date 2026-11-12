import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article className="group relative flex h-full flex-col border border-steel-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-volt hover:shadow-[0_18px_40px_-18px_rgba(10,22,40,0.25)]">
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center bg-navy-900 text-volt-light transition-colors group-hover:bg-volt group-hover:text-white">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>
        <span className="label text-steel-400">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-6 text-lg font-bold">
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 focus-visible:outline-offset-4">
          {service.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">{service.short}</p>
      <span className="label mt-6 inline-flex items-center gap-1.5 text-volt-dark">
        View service <ArrowUpRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </article>
  );
}
