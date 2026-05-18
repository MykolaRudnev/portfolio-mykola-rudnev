import { describe, it, expect } from "vitest"
import { resolveBreadcrumbs } from "../components/ui/PageBreadcrumbs"
import { ROUTES } from "../constants/routes"

describe("resolveBreadcrumbs", () => {
  it("returns empty on home", () => {
    expect(resolveBreadcrumbs(ROUTES.home)).toEqual([])
  })

  it("builds frontend developer trail", () => {
    expect(resolveBreadcrumbs(ROUTES.frontendDeveloper)).toEqual([
      { label: "Home", href: ROUTES.home },
      { label: "Front-end Developer" },
    ])
  })

  it("builds pricing trail via Magento support", () => {
    expect(resolveBreadcrumbs(ROUTES.pricing)).toEqual([
      { label: "Home", href: ROUTES.home },
      { label: "Magento 2 / Hyvä Support", href: ROUTES.magentoSupport },
      { label: "Pricing" },
    ])
  })

  it("builds case study detail trail", () => {
    expect(resolveBreadcrumbs("/case-studies/hrk-seo-growth")).toEqual([
      { label: "Home", href: ROUTES.home },
      { label: "Case studies", href: ROUTES.caseStudies },
      { label: "HRK" },
    ])
  })

  it("uses custom label for current page", () => {
    expect(resolveBreadcrumbs(ROUTES.contact, "Get in touch")).toEqual([
      { label: "Home", href: ROUTES.home },
      { label: "Get in touch" },
    ])
  })
})
