import type { Metadata } from "next"
import { PricingPage } from "@/views/PricingPage"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const metadata: Metadata = getMetadataForPath(ROUTES.pricing)

export default function PricingRoute() {
  return <PricingPage />
}
