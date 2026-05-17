import { describe, it, expect } from "vitest"
import { projects } from "../constants.tsx"
import { getMagentoProjects, getReactProjects } from "../constants/projects-utils"

describe("projects-utils", () => {
  it("includes all Magento projects from portfolio", () => {
    const magento = getMagentoProjects()
    expect(magento.length).toBeGreaterThanOrEqual(10)
    expect(magento.every((p) => p.technologies.some((t) => t.toLowerCase().includes("magento")))).toBe(
      true
    )
  })

  it("includes React and Next.js projects", () => {
    const react = getReactProjects()
    expect(react.length).toBeGreaterThanOrEqual(8)
    expect(react.some((p) => p.name.toLowerCase().includes("hrk"))).toBe(true)
    expect(react.some((p) => p.name.toLowerCase().includes("ponadczasowi"))).toBe(true)
  })

  it("lists majority of portfolio in Magento or React buckets", () => {
    const magento = getMagentoProjects()
    const react = getReactProjects()
    const covered = new Set([...magento, ...react].map((p) => p.name))
    expect(covered.size).toBeGreaterThanOrEqual(Math.floor(projects.length * 0.85))
  })
})
