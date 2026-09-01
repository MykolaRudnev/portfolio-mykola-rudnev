import type { Metadata } from "next"
import { EmergencySupportPage } from "@/views/EmergencySupportPage"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const dynamic = "force-static"

export const metadata: Metadata = getMetadataForPath(ROUTES.emergencySupport)

export default function EmergencySupportRoute() {
  return <EmergencySupportPage />
}
