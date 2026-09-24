"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { FaBars, FaTimes } from "react-icons/fa"
import { BOOKING_URL, ROUTES } from "@/constants/routes"
import { detailedCaseStudies } from "@/constants/case-studies"
import { PrefetchLink } from "@/components/ui/PrefetchLink"

const navItems = [
  { label: "Home", path: ROUTES.home },
  { label: "About", path: ROUTES.about },
  { label: "Front-end", path: ROUTES.frontendDeveloper },
  { label: "Magento / Hyvä", path: ROUTES.magentoSupport },
  { label: "Case studies", path: ROUTES.caseStudies },
  { label: "Pricing", path: ROUTES.pricing },
  { label: "Contact", path: BOOKING_URL, external: true },
]

const CASE_STUDY_PREFETCH = detailedCaseStudies
  .slice(0, 3)
  .map((study) => ROUTES.caseStudyDetail(study.slug))

function extraPrefetch(path: string) {
  if (path === ROUTES.about) return [ROUTES.frontendDeveloper, ROUTES.magentoSupport]
  if (path === ROUTES.caseStudies) return CASE_STUDY_PREFETCH
  if (path === ROUTES.frontendDeveloper) return [ROUTES.caseStudies]
  if (path === ROUTES.magentoSupport) return [ROUTES.caseStudies, ROUTES.pricing]
  return []
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  function isActive(path: string) {
    if (path === ROUTES.home) return pathname === ROUTES.home
    return pathname.startsWith(path)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-paper/95 border-rule" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <PrefetchLink href={ROUTES.home} className="text-xl font-bold tracking-wider text-ink">
            MR<span className="text-accent">.</span>
          </PrefetchLink>

          <DesktopNav isActive={isActive} />

          <button
            type="button"
            className="lg:hidden p-2 text-ink-2 hover:text-ink"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-paper border-b border-rule">
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <MobileNavLink key={item.path} item={item} isActive={isActive(item.path)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function DesktopNav({ isActive }: { isActive: (path: string) => boolean }) {
  return (
    <div className="hidden lg:flex items-center space-x-1">
      {navItems.map((item) => (
        <NavLink key={item.path} item={item} isActive={isActive(item.path)} />
      ))}
    </div>
  )
}

interface NavItem {
  label: string
  path: string
  external?: boolean
}

function NavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const className = `relative px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:text-ink ${
    isActive ? "text-ink bg-paper-3" : "text-ink-2"
  }`

  if (item.external)
    return (
      <a href={item.path} target="_blank" rel="noopener noreferrer" className={className}>
        <span className="relative z-10">{item.label}</span>
      </a>
    )

  return (
    <PrefetchLink href={item.path} extraHrefs={extraPrefetch(item.path)} className={className}>
      <span className="relative z-10">{item.label}</span>
    </PrefetchLink>
  )
}

function MobileNavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const className = `w-full text-left px-4 py-3 rounded-xl transition-all block ${
    isActive ? "bg-paper-3 text-ink" : "text-ink-2 hover:bg-paper-2 hover:text-ink"
  }`

  if (item.external)
    return (
      <a href={item.path} target="_blank" rel="noopener noreferrer" className={className}>
        {item.label}
      </a>
    )

  return (
    <PrefetchLink href={item.path} extraHrefs={extraPrefetch(item.path)} className={className}>
      {item.label}
    </PrefetchLink>
  )
}

export default Navbar
