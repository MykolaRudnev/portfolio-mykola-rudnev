import { describe, it, expect } from "vitest"
import { getMetadataForPath, getCaseStudyMetadata } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"
import { detailedCaseStudies } from "@/constants/case-studies"

describe("metadata", () => {
  it("returns metadata for all primary routes", () => {
    for (const path of [
      ROUTES.home,
      ROUTES.frontendDeveloper,
      ROUTES.magentoSupport,
      ROUTES.pricing,
      ROUTES.emergencySupport,
      ROUTES.caseStudies,
      ROUTES.contact,
    ]) {
      const meta = getMetadataForPath(path)
      expect(meta.title).toBeTruthy()
      expect(meta.description).toBeTruthy()
    }
  })

  it("returns metadata for each case study slug", () => {
    for (const study of detailedCaseStudies) {
      const meta = getCaseStudyMetadata(study.slug)
      expect(meta?.title).toContain(study.client)
    }
  })
})
