import Image from "next/image";
import type { Project } from "@/data/projects";
import { BlueprintArt, artLabel } from "@/components/art/BlueprintArt";

interface Props {
  project: Project;
  /** Which photo to show (index into project.images). Falls back to artwork. */
  imageIndex?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/** Shows the real project photo when available, else a labelled placeholder drawing. */
export function ProjectImage({ project, imageIndex = 0, className = "", priority, sizes = "(min-width:1024px) 33vw, 100vw" }: Props) {
  const src = project.images[imageIndex];
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-navy-900 ${className}`}>
        <Image
          src={src}
          alt={`${project.name} — ${project.type} project in ${project.location}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden bg-navy-900 text-volt-light ${className}`}>
      <div aria-hidden className="absolute inset-0 bg-grid-blueprint [background-size:32px_32px]" />
      <BlueprintArt variant={project.art} className="absolute inset-0 h-full w-full p-6" />
      <span className="label absolute bottom-3 left-3 bg-navy-950/80 px-2 py-1 !text-[0.6rem] text-amber-signal">
        [PROJECT IMAGE]
      </span>
    </div>
  );
}

export { artLabel };
