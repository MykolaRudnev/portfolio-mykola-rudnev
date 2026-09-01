"use client"

import dynamic from "next/dynamic"
import { ProjectsGridSkeleton } from "@/components/ui/PageSkeleton"
import type { ProjectsGridProps } from "@/components/projects/ProjectsGrid"

const ProjectsGrid = dynamic(
  () => import("@/components/projects/ProjectsGrid").then((mod) => ({ default: mod.ProjectsGrid })),
  { loading: () => <ProjectsGridSkeleton /> }
)

export function ProjectsGridLazy(props: ProjectsGridProps) {
  return <ProjectsGrid {...props} />
}
