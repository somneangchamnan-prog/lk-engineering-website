import { projects, type Project } from "@/data/projects";
import type { Service } from "@/data/services";

export function getRelatedProjects(service: Service, limit = 3): Project[] {
  return projects.filter((p) => p.categories.some((c) => service.categories.includes(c))).slice(0, limit);
}

export function getRelatedProjectsForProject(project: Project, limit = 3): Project[] {
  return projects
    .filter((p) => p.slug !== project.slug && p.categories.some((c) => project.categories.includes(c)))
    .slice(0, limit);
}
