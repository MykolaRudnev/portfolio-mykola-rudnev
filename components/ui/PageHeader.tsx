import React from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { PageBreadcrumbs, type BreadcrumbItem } from "./PageBreadcrumbs"
import { ROUTES } from "../../constants/routes"
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
  const { pathname } = useLocation()
  const shouldShowBreadcrumbs = showBreadcrumbs && pathname !== ROUTES.home

  return (
    <section className="pt-28 pb-16">
      <div className={PAGE_CONTENT_CLASS}>
        {shouldShowBreadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 w-full"
          >
            <PageBreadcrumbs items={breadcrumbs} currentLabel={breadcrumbLabel} />
          </motion.div>
        )}

        <PageHeaderInner>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </PageHeaderInner>
      </div>
    </section>
  )
}

function PageHeaderInner({ children }: { children: React.ReactNode }) {
  return <div className="text-center w-full">{children}</div>
}
