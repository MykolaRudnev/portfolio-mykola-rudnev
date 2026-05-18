import { projects } from "@/constants"
import type { Project } from "../types"

export type ProjectCategory = "magento" | "react" | "wordpress" | "other"

function normalizeTech(tech: string): string {
  return tech.toLowerCase()
}

export function getProjectCategory(project: Project): ProjectCategory {
  const techs = project.technologies.map(normalizeTech).join(" ")
  if (techs.includes("magento")) return "magento"
  if (
    techs.includes("react") ||
    techs.includes("next") ||
    techs.includes("gatsby") ||
    techs.includes("typescript")
  )
    return "react"
  if (techs.includes("wordpress")) return "wordpress"
  return "other"
}

export function getAllProjects(): Project[] {
  return projects
}

export function getMagentoProjects(): Project[] {
  return projects.filter((p) => getProjectCategory(p) === "magento")
}

export function getWordPressProjects(): Project[] {
  return projects.filter((p) => getProjectCategory(p) === "wordpress")
}

export function getReactProjects(): Project[] {
  return projects.filter((p) => getProjectCategory(p) === "react")
}

export function slugifyProjectName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function getProjectLink(link?: string): string | undefined {
  if (!link) return undefined
  if (link.startsWith("http")) return link
  return `https://${link}`
}
