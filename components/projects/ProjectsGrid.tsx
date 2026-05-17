import React, { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa"
import type { Project } from "../../types"
import GlassCard from "../ui/GlassCard"
import { getProjectLink } from "../../constants/projects-utils"

interface ProjectsGridProps {
  projects: Project[]
  categories?: string[]
  initialCount?: number
  title?: string
  showTitle?: boolean
  showFilters?: boolean
}

const DEFAULT_CATEGORIES = ["All", "Magento 2", "React/Next", "WordPress"]

function filterByCategory(list: Project[], category: string): Project[] {
  if (category === "All") return list
  return list.filter((p) => {
    const techs = p.technologies.map((t) => t.toLowerCase()).join(" ")
    if (category === "Magento 2") return techs.includes("magento")
    if (category === "React/Next")
      return techs.includes("react") || techs.includes("next") || techs.includes("gatsby")
    if (category === "WordPress") return techs.includes("wordpress")
    return false
  })
}

function categoryHasProjects(list: Project[], category: string): boolean {
  return filterByCategory(list, category).length > 0
}

export function ProjectsGrid({
  projects: projectList,
  categories = DEFAULT_CATEGORIES,
  initialCount = 999,
  title = "Selected Works",
  showTitle = true,
  showFilters = true,
}: ProjectsGridProps) {
  const [activeTab, setActiveTab] = useState("All")
  const [showAll, setShowAll] = useState(initialCount >= 999)

  const visibleCategories = showFilters
    ? categories.filter((cat) => categoryHasProjects(projectList, cat))
    : []

  const filteredProjects = useMemo(
    () => filterByCategory(projectList, activeTab),
    [activeTab, projectList]
  )

  const displayedProjects = useMemo(
    () => (showAll ? filteredProjects : filteredProjects.slice(0, initialCount)),
    [filteredProjects, showAll, initialCount]
  )

  const hasMoreProjects = filteredProjects.length > initialCount && initialCount < 999

  useEffect(() => {
    if (initialCount < 999) setShowAll(false)
  }, [activeTab, initialCount])

  if (projectList.length === 0) {
    return (
      <section className="py-12 px-6">
        <p className="text-center text-gray-500">No projects to display.</p>
      </section>
    )
  }

  return (
    <section className="py-12 relative">
      <ProjectsGridContent
        showTitle={showTitle}
        title={title}
        visibleCategories={visibleCategories}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        filteredCount={filteredProjects.length}
        displayedProjects={displayedProjects}
        hasMoreProjects={hasMoreProjects}
        showAll={showAll}
        setShowAll={setShowAll}
      />
    </section>
  )
}

interface ContentProps {
  showTitle: boolean
  title: string
  visibleCategories: string[]
  activeTab: string
  setActiveTab: (tab: string) => void
  filteredCount: number
  displayedProjects: Project[]
  hasMoreProjects: boolean
  showAll: boolean
  setShowAll: (show: boolean) => void
}

function ProjectsGridContent(props: ContentProps) {
  const {
    showTitle,
    title,
    visibleCategories,
    activeTab,
    setActiveTab,
    filteredCount,
    displayedProjects,
    hasMoreProjects,
    showAll,
    setShowAll,
  } = props

  return (
    <div className="max-w-7xl mx-auto px-6">
      {showTitle && (
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-6" />
          {visibleCategories.length > 1 && (
            <CategoryTabs
              categories={visibleCategories}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
          <p className="text-gray-500 text-sm mt-4">{filteredCount} projects</p>
        </div>
      )}

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={`${project.name}-${idx}`} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMoreProjects && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full text-sm font-medium border bg-white text-black border-white shadow-lg hover:scale-105"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  )
}

function CategoryTabs({
  categories,
  activeTab,
  setActiveTab,
}: {
  categories: string[]
  activeTab: string
  setActiveTab: (tab: string) => void
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => setActiveTab(cat)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
            activeTab === cat
              ? "bg-white text-black border-white shadow-lg shadow-white/20"
              : "bg-glass-100 text-gray-400 border-glass-border hover:bg-white/10 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const href = getProjectLink(project.link)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard className="h-full flex flex-col group" hoverEffect>
        <div className="relative h-44 overflow-hidden rounded-t-2xl bg-black/40">
          <img
            src={project.image}
            alt={project.name}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = `https://picsum.photos/seed/${project.name.replace(/\s/g, "")}/800/600`
            }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
          {href && <ProjectCardOverlay href={href} />}
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold mb-2">{project.name}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-cyan-200/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

function ProjectCardOverlay({ href }: { href: string }) {
  return (
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 bg-white text-black rounded-full hover:scale-105 transition-transform flex items-center gap-2 font-medium text-sm"
      >
        Visit Site <FaExternalLinkAlt size={12} />
      </a>
    </div>
  )
}
