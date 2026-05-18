import type { Metadata } from "next"
// Metadata type used in generateMetadata
import { notFound } from "next/navigation"
import { CaseStudyDetailView } from "@/views/CaseStudyDetailView"
import { JsonLdScript } from "@/components/seo/JsonLdScript"
import { breadcrumbJsonLd } from "@/lib/json-ld"
import { getCaseStudyMetadata } from "@/lib/metadata"
import { detailedCaseStudies, getCaseStudyBySlug } from "@/constants/case-studies"
import { ROUTES, SITE_URL } from "@/constants/routes"

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return detailedCaseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const metadata = getCaseStudyMetadata(slug)
  if (!metadata) return {}
  return metadata
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) notFound()

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", item: SITE_URL },
    { name: "Case studies", item: `${SITE_URL}${ROUTES.caseStudies}` },
    { name: study.title, item: `${SITE_URL}${ROUTES.caseStudyDetail(study.slug)}` },
  ])

  return (
    <>
      <JsonLdScript data={breadcrumb} />
      <CaseStudyDetailView study={study} />
    </>
  )
}
