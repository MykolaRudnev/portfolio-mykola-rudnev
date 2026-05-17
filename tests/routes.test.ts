import { describe, it, expect } from "vitest"
import { ALL_ROUTES, PAGE_SEO, ROUTES, getPageSeo } from "../constants/routes"
import { detailedCaseStudies, getCaseStudyBySlug } from "../constants/case-studies"

describe("routing constants", () => {
  it("defines all 7 primary routes plus case study pattern", () => {
    expect(ALL_ROUTES).toHaveLength(7)
    expect(ALL_ROUTES).toContain(ROUTES.home)
    expect(ALL_ROUTES).toContain(ROUTES.frontendDeveloper)
    expect(ALL_ROUTES).toContain(ROUTES.magentoSupport)
    expect(ALL_ROUTES).toContain(ROUTES.pricing)
    expect(ALL_ROUTES).toContain(ROUTES.emergencySupport)
    expect(ALL_ROUTES).toContain(ROUTES.caseStudies)
    expect(ALL_ROUTES).toContain(ROUTES.contact)
  })

  it("has unique SEO meta per static page", () => {
    const titles = PAGE_SEO.map((page) => page.title)
    expect(new Set(titles).size).toBe(titles.length)
  })

  it("uses English locale for all static pages", () => {
    for (const route of ALL_ROUTES) {
      expect(getPageSeo(route)?.lang).toBe("en")
    }
  })
})

describe("case studies", () => {
  it("includes two published case studies with required sections", () => {
    expect(detailedCaseStudies).toHaveLength(2)
    for (const study of detailedCaseStudies) {
      expect(study.slug).toBeTruthy()
      expect(study.startingPoint.length).toBeGreaterThan(20)
      expect(study.whatIDid.length).toBeGreaterThan(0)
      expect(study.metrics.length).toBeGreaterThan(0)
      expect(study.myRole.length).toBeGreaterThan(10)
    }
  })

  it("resolves case study by slug", () => {
    expect(getCaseStudyBySlug("hrk-seo-growth")?.client).toBe("HRK")
    expect(getCaseStudyBySlug("unknown")).toBeUndefined()
  })

  it("builds detail URLs from slug", () => {
    expect(ROUTES.caseStudyDetail("hrk-seo-growth")).toBe("/case-studies/hrk-seo-growth")
  })
})
