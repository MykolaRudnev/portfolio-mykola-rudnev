import type { Metadata } from "next"
import { FrontendDeveloperPage } from "@/views/FrontendDeveloperPage"
import { JsonLdScript } from "@/components/seo/JsonLdScript"
import { faqJsonLd } from "@/lib/json-ld"
import { HIRE_FAQ, IDENTITY_FAQ } from "@/constants/faq"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const dynamic = "force-static"

export const metadata: Metadata = getMetadataForPath(ROUTES.frontendDeveloper)

export default function FrontendDeveloperRoute() {
  return (
    <>
      <JsonLdScript data={faqJsonLd([...IDENTITY_FAQ, ...HIRE_FAQ])} />
      <FrontendDeveloperPage />
    </>
  )
}
