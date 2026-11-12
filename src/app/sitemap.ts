import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["/", "/about", "/services", "/projects", "/team", "/contact"].map((p) => ({
    url: absoluteUrl(p),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : 0.8,
  }));
  const servicePages = services.map((s) => ({
    url: absoluteUrl(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  // Placeholder projects are noindex, so keep them out of the sitemap.
  const projectPages = projects
    .filter((p) => !p.placeholder)
    .map((p) => ({
      url: absoluteUrl(`/projects/${p.slug}`),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));
  return [...staticPages, ...servicePages, ...projectPages];
}
