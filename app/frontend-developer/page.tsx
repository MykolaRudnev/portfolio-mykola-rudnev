import type { Metadata } from "next"
import { FrontendDeveloperPage } from "@/views/FrontendDeveloperPage"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const metadata: Metadata = getMetadataForPath(ROUTES.frontendDeveloper)

export default function FrontendDeveloperRoute() {
  return <FrontendDeveloperPage />
}
