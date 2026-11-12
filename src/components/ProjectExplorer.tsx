"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectCategories, type Project, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type Filter = "All" | ProjectCategory;

/** Category filter + animated project grid. */
export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...projectCategories];

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["All", projects.length]]);
    for (const c of projectCategories) map.set(c, projects.filter((p) => p.categories.includes(c)).length);
    return map;
  }, [projects]);

  const visible = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`border px-4 py-2 text-sm font-semibold transition-colors ${
              active === f
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-steel-300 text-navy-800 hover:border-navy-900"
            }`}
          >
            {f} <span className="ml-1 font-mono text-xs opacity-60">{counts.get(f)}</span>
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-steel-500">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {active !== "All" && <> in <strong className="text-navy-900">{active}</strong></>}
      </p>

      <motion.ul layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <p className="mt-10 border border-dashed border-steel-300 p-10 text-center text-steel-500">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
