import type { Metadata } from "next"
import { AboutPage } from "@/views/AboutPage"
import { JsonLdScript } from "@/components/seo/JsonLdScript"
import { faqJsonLd, profilePageJsonLd } from "@/lib/json-ld"
import { ABOUT_FAQ } from "@/constants/faq"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const dynamic = "force-static"

export const metadata: Metadata = getMetadataForPath(ROUTES.about)

export default function AboutRoute() {
  return (
    <>
      <JsonLdScript data={[profilePageJsonLd(), faqJsonLd(ABOUT_FAQ)]} />
      <AboutPage />
    </>
  )
}
