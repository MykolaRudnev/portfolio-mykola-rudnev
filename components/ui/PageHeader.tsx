import { PageBreadcrumbs, type BreadcrumbItem } from "./PageBreadcrumbs"
import { PAGE_CONTENT_CLASS } from "./page-container"

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  showBreadcrumbs?: boolean
  breadcrumbLabel?: string
  breadcrumbs?: BreadcrumbItem[]
}

export function PageHeader({
  title,
  subtitle,
  children,
  showBreadcrumbs = true,
  breadcrumbLabel,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="pt-28 pb-16">
      <div className={PAGE_CONTENT_CLASS}>
        {showBreadcrumbs && (
          <div className="mb-6 w-full">
            <PageBreadcrumbs items={breadcrumbs} currentLabel={breadcrumbLabel} />
          </div>
        )}

        <div className="text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}
