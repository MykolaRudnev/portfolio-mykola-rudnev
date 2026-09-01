"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { FaBars, FaTimes } from "react-icons/fa"
import { ROUTES } from "@/constants/routes"
import { detailedCaseStudies } from "@/constants/case-studies"
import { PrefetchLink } from "@/components/ui/PrefetchLink"

const navItems = [
  { label: "Home", path: ROUTES.home },
  { label: "Front-end", path: ROUTES.frontendDeveloper },
  { label: "Magento / Hyvä", path: ROUTES.magentoSupport },
  { label: "Case studies", path: ROUTES.caseStudies },
  { label: "Pricing", path: ROUTES.pricing },
  { label: "Contact", path: ROUTES.contact },
]

const CASE_STUDY_PREFETCH = detailedCaseStudies
  .slice(0, 3)
  .map((study) => ROUTES.caseStudyDetail(study.slug))

function extraPrefetch(path: string) {
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
        scrolled ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <PrefetchLink href={ROUTES.home} className="text-xl font-bold tracking-wider text-white">
            MR<span className="text-cyan-400">.</span>
          </PrefetchLink>

          <DesktopNav isActive={isActive} />

          <button
            type="button"
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-black/95 border-b border-white/10 backdrop-blur-xl">
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
}

function NavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  return (
    <PrefetchLink
      href={item.path}
      extraHrefs={extraPrefetch(item.path)}
      className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:text-white ${
        isActive ? "text-white bg-white/10" : "text-gray-400"
      }`}
    >
      <span className="relative z-10">{item.label}</span>
    </PrefetchLink>
  )
}

function MobileNavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  return (
    <PrefetchLink
      href={item.path}
      extraHrefs={extraPrefetch(item.path)}
      className={`w-full text-left px-4 py-3 rounded-xl transition-all block ${
        isActive ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {item.label}
    </PrefetchLink>
  )
}

export default Navbar
