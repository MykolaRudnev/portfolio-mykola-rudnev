import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import { ROUTES } from "../constants/routes"

const navItems = [
  { label: "Home", path: ROUTES.home },
  { label: "Front-end", path: ROUTES.frontendDeveloper },
  { label: "Magento / Hyvä", path: ROUTES.magentoSupport },
  { label: "Case studies", path: ROUTES.caseStudies },
  { label: "Pricing", path: ROUTES.pricing },
  { label: "Contact", path: ROUTES.contact },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
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
          <Link to={ROUTES.home} className="text-xl font-bold tracking-wider text-white">
            MR<span className="text-cyan-400">.</span>
          </Link>

          <DesktopNav isActive={isActive} />

          <button
            type="button"
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 border-b border-white/10 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-2">
                {navItems.map((item) => (
                  <MobileNavLink key={item.path} item={item} isActive={isActive(item.path)} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
    <Link
      to={item.path}
      className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:text-white ${
        isActive ? "text-white" : "text-gray-400"
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-white/10 rounded-lg"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <span className="relative z-10">{item.label}</span>
    </Link>
  )
}

function MobileNavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  return (
    <Link
      to={item.path}
      className={`w-full text-left px-4 py-3 rounded-xl transition-all block ${
        isActive ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {item.label}
    </Link>
  )
}

export default Navbar
