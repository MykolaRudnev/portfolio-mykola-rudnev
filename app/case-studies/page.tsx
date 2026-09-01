import type { Metadata } from "next"
import { CaseStudiesPage } from "@/views/CaseStudiesPage"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const dynamic = "force-static"

export const metadata: Metadata = getMetadataForPath(ROUTES.caseStudies)

export default function CaseStudiesRoute() {
  return <CaseStudiesPage />
}
