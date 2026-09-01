import type { Metadata } from "next"
import { ContactPage } from "@/views/ContactPage"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const dynamic = "force-static"

export const metadata: Metadata = getMetadataForPath(ROUTES.contact)

export default function ContactRoute() {
  return <ContactPage />
}
