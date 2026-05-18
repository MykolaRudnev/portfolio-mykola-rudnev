import type { Metadata } from "next"
import { Providers } from "@/app/providers"
import { MagentoHyvaSupportPage } from "@/views/MagentoHyvaSupportPage"
import { JsonLdScript } from "@/components/seo/JsonLdScript"
import { professionalServiceJsonLd } from "@/lib/json-ld"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const metadata: Metadata = getMetadataForPath(ROUTES.magentoSupport)

export default function MagentoHyvaSupportRoute() {
  return (
    <Providers>
      <JsonLdScript data={professionalServiceJsonLd()} />
      <MagentoHyvaSupportPage />
    </Providers>
  )
}
