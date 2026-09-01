import type { Metadata } from "next"
import { MagentoHyvaSupportPage } from "@/views/MagentoHyvaSupportPage"
import { JsonLdScript } from "@/components/seo/JsonLdScript"
import { faqJsonLd, professionalServiceJsonLd } from "@/lib/json-ld"
import { MAGENTO_FAQ } from "@/constants/faq"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const dynamic = "force-static"

export const metadata: Metadata = getMetadataForPath(ROUTES.magentoSupport)

export default function MagentoHyvaSupportRoute() {
  return (
    <>
      <JsonLdScript data={[professionalServiceJsonLd(), faqJsonLd(MAGENTO_FAQ)]} />
      <MagentoHyvaSupportPage />
    </>
  )
}
