"use client"

import React, { Suspense, lazy } from "react"
import { FaFileAlt } from "react-icons/fa"
import { PageHeader } from "@/components/ui/PageHeader"
import { CtaButton } from "@/components/ui/CtaButton"
import GlassCard from "@/components/ui/GlassCard"
import { ROUTES } from "@/constants/routes"
import { technicalSkills } from "@/constants"
import { PAGE_CONTENT_CLASS } from "@/components/ui/page-container"
import { ProjectsGridSkeleton, SectionSkeleton } from "@/components/ui/PageSkeleton"
import { ProjectHighlightList } from "@/components/ui/ProjectHighlightList"
import { REACT_PROJECT_HIGHLIGHTS, SHOPIFY_PROJECT_HIGHLIGHTS } from "@/constants/audience-highlights"

const Experience = lazy(() => import("@/components/Experience"))
const Projects = lazy(() => import("@/components/Projects"))
const Recommendations = lazy(() => import("@/components/Recommendations"))
const Skills = lazy(() => import("@/components/Skills"))

const FIT_CASES = [
  "Product teams needing a reliable front-end developer",
  "Shipped product work (Claspwell — Next.js, CMS, API, Magento widget)",
  "Migration work from legacy frontends",
  "Design-to-code implementation from Figma",
  "Performance and Core Web Vitals improvements",
  "Component architecture and reusable UI",
  "E-commerce and conversion-focused pages",
]

export function FrontendDeveloperPage() {

  return (
    <>
      <PageHeader
        title="Senior Front-end Developer"
        subtitle="React, Next.js, TypeScript — product UI, e-commerce, and a shipped Next.js product (Claspwell)."
      >
        <div className="flex flex-wrap justify-center gap-4">
          <CtaButton href="mailto:rudnevmykola@gmail.com?subject=Screening%20call" event="cta_book_call">
            Book a screening call
          </CtaButton>
          <CtaButton
            href="/CV-Front-end__Developer_Mykola_Rudnev.pdf"
            event="cta_download_cv"
            variant="secondary"
          >
            <FaFileAlt /> Download CV
          </CtaButton>
          <CtaButton to={ROUTES.caseStudies} variant="secondary">
            View case studies
          </CtaButton>
        </div>
      </PageHeader>

      <section className={`py-12 ${PAGE_CONTENT_CLASS}`}>
        <h2 className="text-2xl font-bold mb-6">Core stack</h2>
        <div className="flex flex-wrap gap-2">
          {technicalSkills.slice(0, 12).map((skill) => (
            <span
              key={skill.name}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      <section className={`py-12 ${PAGE_CONTENT_CLASS}`}>
        <GlassCard className="p-8 md:p-10 mb-12">
          <h2 className="text-2xl font-bold mb-2">React / Next.js project experience</h2>
          <p className="text-gray-400 text-sm mb-6">
            Production apps across e-commerce, marketplaces, recruitment and education — not limited to a single
            flagship project.
          </p>
          <ProjectHighlightList
            title=""
            items={REACT_PROJECT_HIGHLIGHTS}
            accentClass="text-cyan-400"
          />
        </GlassCard>

        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold mb-2">Shopify / Liquid</h2>
          <p className="text-gray-400 text-sm mb-6">
            Custom themes from scratch — sections, blocks, Admin configuration, not preset restyles.
          </p>
          <ProjectHighlightList
            title=""
            items={SHOPIFY_PROJECT_HIGHLIGHTS}
            accentClass="text-green-400"
          />
        </GlassCard>

        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold mb-6">What I'm a strong fit for</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {FIT_CASES.map((item) => (
              <li key={item} className="flex gap-2 text-gray-300">
                <span className="text-cyan-400">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<ProjectsGridSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Recommendations />
      </Suspense>
    </>
  )
}
