import { PageHeader } from "@/components/ui/PageHeader"
import GlassCard from "@/components/ui/GlassCard"
import { PrefetchLink } from "@/components/ui/PrefetchLink"
import { detailedCaseStudies } from "@/constants/case-studies"
import { ROUTES } from "@/constants/routes"
import { projects } from "@/constants"
import { ProjectsGridLazy } from "@/components/projects/ProjectsGridLazy"

export function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Projects & case studies"
        subtitle={`${projects.length} projects across Magento 2, Hyvä, Shopify, React and Next.js. ${detailedCaseStudies.length} in-depth case studies covering storefront builds, B2B functionality, redesigns and platform migrations.`}
      />

      <section className="px-6 max-w-6xl mx-auto pb-8">
        <h2 className="text-2xl font-bold mb-6">In-depth case studies</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {detailedCaseStudies.map((study) => (
            <PrefetchLink
              key={study.slug}
              href={ROUTES.caseStudyDetail(study.slug)}
              className="block h-full"
            >
              <GlassCard className="p-6 h-full flex flex-col" hoverEffect>
                <p className="text-accent text-sm mb-2">
                  {study.client}{study.year ? ` · ${study.year}` : ""} · detailed write-up
                </p>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-ink-2 flex-grow">{study.summary}</p>
                <p className="mt-4 text-sm text-accent">Read full case study →</p>
              </GlassCard>
            </PrefetchLink>
          ))}
        </div>
      </section>

      <ProjectsGridLazy
        projects={projects}
        title="All projects"
        showFilters
        initialCount={999}
      />
    </>
  )
}
