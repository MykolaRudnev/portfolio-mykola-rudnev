import type { Metadata } from "next"
import { Providers } from "@/app/providers"
import { ContactPage } from "@/views/ContactPage"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"

export const metadata: Metadata = getMetadataForPath(ROUTES.contact)

interface ContactRouteProps {
  searchParams: Promise<{ intent?: string }>
}

export default async function ContactRoute({ searchParams }: ContactRouteProps) {
  const { intent } = await searchParams
  const defaultTab =
    intent === "magento" || intent === "client" ? "client" : intent === "recruiter" ? "recruiter" : "general"

  return (
    <Providers>
      <ContactPage defaultTab={defaultTab} />
    </Providers>
  )
}
