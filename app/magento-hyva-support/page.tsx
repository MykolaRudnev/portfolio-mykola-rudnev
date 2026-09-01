import type { Metadata } from "next"
import { MagentoHyvaSupportPage } from "@/views/MagentoHyvaSupportPage"
import { JsonLdScript } from "@/components/seo/JsonLdScript"
import { professionalServiceJsonLd } from "@/lib/json-ld"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const dynamic = "force-static"

export const metadata: Metadata = getMetadataForPath(ROUTES.magentoSupport)

export default function MagentoHyvaSupportRoute() {
  return (
    <>
      <JsonLdScript data={professionalServiceJsonLd()} />
      <MagentoHyvaSupportPage />
    </>
  )
}
