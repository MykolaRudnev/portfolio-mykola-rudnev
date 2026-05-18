"use client"

import Link from "next/link"
import { PageHeader } from "@/components/ui/PageHeader"
import GlassCard from "@/components/ui/GlassCard"
import { ProjectsGrid } from "@/components/projects/ProjectsGrid"
import { detailedCaseStudies } from "@/constants/case-studies"
import { ROUTES } from "@/constants/routes"
import { projects } from "@/constants"

export function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Projects & case studies"
        subtitle={`${projects.length} delivered projects — Magento 2, Hyvä, React and Next.js. Below: in-depth case studies plus the full project portfolio.`}
      />

      <section className="px-6 max-w-4xl mx-auto pb-8">
        <h2 className="text-2xl font-bold mb-6">In-depth case studies</h2>
        <div className="grid gap-6">
          {detailedCaseStudies.map((study) => (
            <Link key={study.slug} href={ROUTES.caseStudyDetail(study.slug)}>
              <GlassCard className="p-8 hoverEffect block">
                <p className="text-cyan-400 text-sm mb-2">
                  {study.client} · {study.year} · detailed write-up
                </p>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-gray-400">{study.summary}</p>
                <p className="mt-4 text-sm text-cyan-400/80">Read full case study →</p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      <ProjectsGrid
        projects={projects}
        title="All projects"
        showFilters
        initialCount={999}
      />
    </>
  )
}
