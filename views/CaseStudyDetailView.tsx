"use client"

import Link from "next/link"
import { PageHeader } from "@/components/ui/PageHeader"
import GlassCard from "@/components/ui/GlassCard"
import { CtaButton } from "@/components/ui/CtaButton"
import { VisualProofSection } from "@/components/case-studies/VisualProofSection"
import type { CaseStudy } from "@/constants/case-studies"
import { ROUTES } from "@/constants/routes"

interface CaseStudyDetailViewProps {
  study: CaseStudy
}

export function CaseStudyDetailView({ study }: CaseStudyDetailViewProps) {
  return (
    <>
      <PageHeader
        title={study.title}
        subtitle={study.summary}
        breadcrumbLabel={study.client}
      >
        <p className="text-sm text-gray-500">
          {study.client} · {study.industry} · {study.projectType} · {study.year}
        </p>
      </PageHeader>

      <article className="px-6 max-w-3xl mx-auto pb-24 space-y-12">
        <MetaBlock study={study} />
        <Section title="Starting point" content={study.startingPoint} />
        {study.whatIDid.map((block) => (
          <Section key={block.title} title={block.title} items={block.items} />
        ))}
        <Section title="Outcome" content={study.outcome} />
        {study.visualProof && study.visualProof.length > 0 && (
          <VisualProofSection items={study.visualProof} />
        )}
        <MetricsBlock metrics={study.metrics} />
        <GlassCard className="p-6">
          <h2 className="font-bold text-cyan-400 mb-2">My role</h2>
          <p className="text-gray-300">{study.myRole}</p>
        </GlassCard>
        <div className="text-center pt-8">
          <CtaButton to={ROUTES.contact}>Discuss a similar project</CtaButton>
          <p className="mt-6">
            <Link href={ROUTES.caseStudies} className="text-gray-500 hover:text-white text-sm">
              ← All case studies
            </Link>
          </p>
        </div>
      </article>
    </>
  )
}

function MetaBlock({ study }: { study: CaseStudy }) {
  return (
    <GlassCard className="p-6 grid sm:grid-cols-2 gap-4 text-sm">
      <div>
        <span className="text-gray-500">Stack</span>
        <p className="text-white">{study.stack.join(", ")}</p>
      </div>
      <div>
        <span className="text-gray-500">Collaboration</span>
        <p className="text-white">{study.collaboration}</p>
      </div>
    </GlassCard>
  )
}

interface SectionProps {
  title: string
  content?: string
  items?: string[]
}

function Section({ title, content, items }: SectionProps) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {content && <p className="text-gray-300 leading-relaxed">{content}</p>}
      {items && (
        <ul className="space-y-2 text-gray-300">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-cyan-400">•</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function MetricsBlock({ metrics }: { metrics: CaseStudy["metrics"] }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Metrics</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <GlassCard key={metric.label} className="p-4 text-center">
            <p className="text-gray-500 text-xs mb-2">{metric.label}</p>
            {metric.before && (
              <p className="text-gray-600 text-sm line-through">{metric.before}</p>
            )}
            <p className="text-cyan-400 font-semibold">{metric.after}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
