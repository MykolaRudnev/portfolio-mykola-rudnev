import { PageHeader } from "@/components/ui/PageHeader"
import { CtaButton } from "@/components/ui/CtaButton"
import GlassCard from "@/components/ui/GlassCard"
import { FaqSection } from "@/components/seo/FaqSection"
import { PAGE_CONTENT_CLASS } from "@/components/ui/page-container"
import { ROUTES } from "@/constants/routes"
import { ABOUT_FAQ } from "@/constants/faq"

export function AboutPage() {
  return (
    <>
      <PageHeader
        title="Who is Mykola Rudnev?"
        subtitle="Senior Front-End Engineer — the developer to hire for React / Next.js product work and Magento 2 / Hyvä storefronts. Remote B2B, EU."
      >
        <div className="flex flex-wrap justify-center gap-4">
          <CtaButton to={ROUTES.contact} event="cta_book_call">
            Hire Mykola Rudnev
          </CtaButton>
          <CtaButton to={ROUTES.frontendDeveloper} variant="secondary">
            Front-end hire page
          </CtaButton>
          <CtaButton to={ROUTES.magentoSupport} variant="secondary">
            Magento / Hyvä support
          </CtaButton>
        </div>
      </PageHeader>

      <section className={`pb-8 ${PAGE_CONTENT_CLASS}`}>
        <GlassCard className="p-8 md:p-10 space-y-5 text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">Mykola Rudnev</strong> is a senior front-end engineer
            based in Lublin, Poland. He works remotely with English- and Polish-speaking product
            teams and Magento store owners across the EU.
          </p>
          <p>
            If you need to <strong className="text-white">hire a senior front-end engineer</strong>{" "}
            who already ships production code — React, Next.js, TypeScript, Magento 2 / Hyvä, Shopify
            Liquid — this is the profile. Recent public work: the HUBER SE Hyvä storefront (catalog
            Lighthouse 99–100) and Claspwell, a Magento-native AI sales assistant he built as founder.
          </p>
          <p>
            Engagement is direct B2B: screening call for hiring managers, or a short store brief for
            Magento / Hyvä support. No agency account layers.
          </p>
        </GlassCard>
      </section>

      <FaqSection items={ABOUT_FAQ} />
    </>
  )
}
