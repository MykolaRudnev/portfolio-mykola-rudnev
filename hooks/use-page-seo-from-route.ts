import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { getPageSeo } from "../constants/routes"
import { usePageSeo } from "../lib/seo"
import { getCaseStudyBySlug } from "../constants/case-studies"

const DEFAULT_TITLE = "Mykola Rudnev | Senior Front-End Developer"
const DEFAULT_DESCRIPTION =
  "Senior Front-End Developer — React, Next.js, Magento 2 / Hyvä."

export function usePageSeoFromRoute(): void {
  const { pathname } = useLocation()

  const seo = useMemo(() => {
    const caseSlugMatch = pathname.match(/^\/case-studies\/([^/]+)$/)
    if (caseSlugMatch) {
      const study = getCaseStudyBySlug(caseSlugMatch[1])
      if (study)
        return {
          title: study.seoTitle,
          description: study.seoDescription,
          path: pathname,
          lang: "en" as const,
        }
    }

    const meta = getPageSeo(pathname)
    if (meta)
      return {
        title: meta.title,
        description: meta.description,
        path: meta.path,
        lang: meta.lang,
      }

    return {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      path: pathname,
      lang: "en" as const,
    }
  }, [pathname])

  usePageSeo(seo)
}
