import type { MetadataRoute } from "next"
import { SITE_URL, ALL_ROUTES, ROUTES } from "@/constants/routes"
import { detailedCaseStudies } from "@/constants/case-studies"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticEntries: MetadataRoute.Sitemap = ALL_ROUTES.map((path) => ({
    url: path === ROUTES.home ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === ROUTES.home ? "weekly" : "monthly",
    priority: path === ROUTES.home ? 1 : path === ROUTES.frontendDeveloper || path === ROUTES.magentoSupport ? 0.9 : 0.8,
  }))

  const caseStudyEntries: MetadataRoute.Sitemap = detailedCaseStudies.map((study) => ({
    url: `${SITE_URL}${ROUTES.caseStudyDetail(study.slug)}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.7,
  }))

  return [...staticEntries, ...caseStudyEntries]
}
