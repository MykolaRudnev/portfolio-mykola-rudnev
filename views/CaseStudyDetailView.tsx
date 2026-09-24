import { PageHeader } from "@/components/ui/PageHeader"
import { PrefetchLink } from "@/components/ui/PrefetchLink"
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
        <p className="text-sm text-ink-2">
          {study.client} · {study.industry} · {study.projectType}{study.year ? ` · ${study.year}` : ""}
        </p>
        {study.liveUrl && (
          <p className="mt-3">
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:text-accent text-sm"
            >
              Visit live site →
            </a>
          </p>
        )}
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
          <h2 className="font-bold text-accent mb-2">My role</h2>
          <p className="text-ink-2">{study.myRole}</p>
        </GlassCard>
        <div className="text-center pt-8">
          <CtaButton to={ROUTES.contact}>Discuss a similar project</CtaButton>
          <p className="mt-6">
            <PrefetchLink href={ROUTES.caseStudies} className="text-ink-2 hover:text-ink text-sm">
              ← All case studies
            </PrefetchLink>
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
        <span className="text-ink-2">Stack</span>
        <p className="text-ink">{study.stack.join(", ")}</p>
      </div>
      <div>
        <span className="text-ink-2">Collaboration</span>
        <p className="text-ink">{study.collaboration}</p>
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
      {content && <p className="text-ink-2 leading-relaxed">{content}</p>}
      {items && (
        <ul className="space-y-2 text-ink-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-accent">•</span>
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
            <p className="text-ink-2 text-xs mb-2">{metric.label}</p>
            {metric.before && (
              <p className="text-ink-2 text-sm line-through">{metric.before}</p>
            )}
            <p className="text-accent font-semibold">{metric.after}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
