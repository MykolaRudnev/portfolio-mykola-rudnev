import type { Metadata } from "next"
import { Providers } from "@/app/providers"
import { EmergencySupportPage } from "@/views/EmergencySupportPage"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const metadata: Metadata = getMetadataForPath(ROUTES.emergencySupport)

export default function EmergencySupportRoute() {
  return (
    <Providers>
      <EmergencySupportPage />
    </Providers>
  )
}
