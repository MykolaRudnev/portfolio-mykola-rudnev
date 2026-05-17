import { useEffect } from "react"
import { SITE_URL } from "../constants/routes"

interface UsePageSeoOptions {
  title: string
  description: string
  path: string
  lang?: "en"
}

const HREFLANG_ID = "page-hreflang"

export function usePageSeo({ title, description, path, lang = "en" }: UsePageSeoOptions): void {
  useEffect(() => {
    document.title = title
    document.documentElement.lang = lang

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement("meta")
      metaDescription.setAttribute("name", "description")
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute("content", description)

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    canonical.href = `${SITE_URL}${path === "/" ? "" : path}`

    const existingHreflang = document.getElementById(HREFLANG_ID)
    if (existingHreflang) existingHreflang.remove()

    const link = document.createElement("link")
    link.id = HREFLANG_ID
    link.rel = "alternate"
    link.hreflang = "en"
    link.href = `${SITE_URL}${path === "/" ? "" : path}`
    document.head.appendChild(link)
  }, [title, description, path, lang])
}

export function injectJsonLd(id: string, data: Record<string, unknown>): () => void {
  const scriptId = `jsonld-${id}`
  const existing = document.getElementById(scriptId)
  if (existing) existing.remove()

  const script = document.createElement("script")
  script.id = scriptId
  script.type = "application/ld+json"
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)

  return () => {
    document.getElementById(scriptId)?.remove()
  }
}
