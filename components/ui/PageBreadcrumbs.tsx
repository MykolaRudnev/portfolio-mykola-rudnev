import React from "react"
import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../../constants/routes"
import { getCaseStudyBySlug } from "../../constants/case-studies"

export interface BreadcrumbItem {
  label: string
  to?: string
}

interface PageBreadcrumbsProps {
  items?: BreadcrumbItem[]
  currentLabel?: string
  className?: string
}

export function resolveBreadcrumbs(pathname: string, currentLabel?: string): BreadcrumbItem[] {
  const home: BreadcrumbItem = { label: "Home", to: ROUTES.home }

  if (pathname === ROUTES.home) return []

  if (pathname === ROUTES.frontendDeveloper)
    return [home, { label: currentLabel ?? "Front-end Developer" }]

  if (pathname === ROUTES.magentoSupport)
    return [home, { label: currentLabel ?? "Magento 2 / Hyvä Support" }]

  if (pathname === ROUTES.pricing)
    return [
      home,
      { label: "Magento 2 / Hyvä Support", to: ROUTES.magentoSupport },
      { label: currentLabel ?? "Pricing" },
    ]

  if (pathname === ROUTES.emergencySupport)
    return [
      home,
      { label: "Magento 2 / Hyvä Support", to: ROUTES.magentoSupport },
      { label: currentLabel ?? "Emergency support" },
    ]

  if (pathname === ROUTES.caseStudies)
    return [home, { label: currentLabel ?? "Case studies" }]

  if (pathname.startsWith("/case-studies/")) {
    const slug = pathname.replace("/case-studies/", "")
    const study = getCaseStudyBySlug(slug)
    const detailLabel = currentLabel ?? study?.client ?? "Case study"
    return [
      home,
      { label: "Case studies", to: ROUTES.caseStudies },
      { label: detailLabel },
    ]
  }

  if (pathname === ROUTES.contact)
    return [home, { label: currentLabel ?? "Contact" }]

  return [home, { label: currentLabel ?? "Page" }]
}

export function PageBreadcrumbs({ items, currentLabel, className = "" }: PageBreadcrumbsProps) {
  const { pathname } = useLocation()
  const crumbs = items ?? resolveBreadcrumbs(pathname, currentLabel)

  if (crumbs.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-400">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1

          return (
            <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5 min-w-0">
              {index > 0 && (
                <span className="text-gray-600 select-none" aria-hidden>
                  /
                </span>
              )}
              {crumb.to && !isLast ? (
                <Link
                  to={crumb.to}
                  className="hover:text-cyan-400 transition-colors truncate max-w-[12rem] sm:max-w-none"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className={`truncate max-w-[14rem] sm:max-w-none ${isLast ? "text-gray-300" : ""}`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {crumb.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
