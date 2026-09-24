"use client"

import React, { Suspense, lazy } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import GlassCard from "@/components/ui/GlassCard"
import { CtaButton } from "@/components/ui/CtaButton"
import { ROUTES } from "@/constants/routes"
import { workExperiences } from "@/constants"
import { SectionSkeleton } from "@/components/ui/PageSkeleton"

const HomeBelowFold = lazy(() =>
  import("@/views/HomeBelowFold").then((mod) => ({ default: mod.HomeBelowFold }))
)

const CAREER_HIGHLIGHTS = [
  { label: "Experience", value: "6+ years front-end" },
  { label: "Collaboration", value: "Remote · EU · B2B" },
  { label: "Languages", value: "EN · PL · UA · RU" },
  { label: "Focus", value: "E-commerce & product teams" },
]

export function AudienceRouter() {
  return (
    <>
      <PersonalIntro />
      <AudiencePathSection />
      <Suspense fallback={<SectionSkeleton />}>
        <HomeBelowFold />
      </Suspense>
    </>
  )
}

function PersonalIntro() {
  const previousRole = workExperiences.find((job) =>
    job.company.startsWith("For Better Future")
  )

  return (
    <section className="pt-28 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto lg:mx-0 shrink-0"
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-rule shadow-2xl bg-paper-2">
              <Image
                src="/images/mrudnev-avatar.png"
                alt="Mykola Rudnev"
                width={176}
                height={176}
                priority
                sizes="(max-width: 768px) 144px, 176px"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2">
              Hire a Senior Front-End Engineer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mykola{" "}
              <span className="text-accent">
                Rudnev
              </span>
            </h1>
            <p className="text-lg text-ink-2 mb-6 leading-relaxed">
              The front-end developer to hire for production{" "}
              <strong className="text-ink">Magento 2 / Hyvä</strong> storefronts and{" "}
              <strong className="text-ink">React / Next.js / TypeScript</strong> product UIs.
              Remote B2B across the EU — available now.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {CAREER_HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="px-3 py-3 rounded-xl bg-paper-2 border border-rule text-center sm:text-left"
                >
                  <p className="text-xs text-ink-2 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-sm text-ink font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-ink-2 leading-relaxed text-base">
              <p>
                <strong className="text-ink">Profile:</strong> Senior front-end developer focused on
                e-commerce and product teams. I work remotely with teams across the EU — B2B-friendly
                engagement and direct communication.
              </p>
              <p>
                <strong className="text-ink">What I do now:</strong> Direct freelance frontend for{" "}
                <strong className="text-ink">HUBER SE</strong> — Magento Open Source + Hyvä Theme,
                Checkout and CMS after an Adobe Commerce headless stack. I also ship{" "}
                <strong className="text-ink">Claspwell</strong>, my own Magento 2 / Hyvä AI sales
                assistant (Next.js, Payload CMS, Fastify, Alpine widget). Comfortable across
                storefronts, CMS, checkout, performance, and product-grade SPAs.
              </p>
              <p>
                <strong className="text-ink">What I did before:</strong>{" "}
                <span className="text-ink">{previousRole?.company}</span> ({previousRole?.period}) — 16+
                Magento builds (Housetipster, Edycja, Paypair, FMIC, Dreamroots, 3MK and more), React/Next.js
                products (Ponadczasowi, Copernicspace, HRK, PMI Careers, LearningSpace, Carneoo) and custom
                Shopify themes (Glasy, Pixel25, Warmsome, Ascent, Berg&apos;s, Diamandia). Earlier
                enterprise delivery at <span className="text-ink">Cloudflight</span> (~9 Magento stores:
                BAT ×4, Catering24, Solar, and others).
              </p>
              <p>
                <strong className="text-ink">How I work:</strong> Problem → clear scope → delivery with
                measurable outcomes (Core Web Vitals, conversion-sensitive UI, maintainable components). No
                unnecessary agency layers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AudiencePathSection() {
  return (
    <section className="px-6 py-12 border-t border-rule">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">How can I help you?</h2>
        <p className="text-ink-2 text-center mb-10 max-w-xl mx-auto">
          Choose the path that matches your goal — hiring a developer or fixing and growing a Magento store.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <AudienceCard
            title="Hire a Front-end Developer"
            description="React, Next.js, TypeScript — e-commerce, marketplaces, recruitment and product UIs, plus a shipped Next.js product (Claspwell). Shopify Liquid themes alongside Magento work."
            to={ROUTES.frontendDeveloper}
            event="cta_frontend_hire"
            ctaLabel="Hire a senior front-end engineer"
          />
          <AudienceCard
            title="Hire Magento 2 / Hyvä support"
            description="Direct storefront help after 16+ Magento projects — HUBER SE Hyvä rebuild (Lighthouse 99–100 on catalog), Claspwell Magento AI, Housetipster, Edycja, enterprise BAT/Catering24/Solar, PLP/PDP/checkout/CMS, performance and ongoing support."
            to={ROUTES.magentoSupport}
            event="cta_magento_support"
            ctaLabel="Hire a Hyvä frontend developer"
          />
        </div>
      </div>
    </section>
  )
}

interface AudienceCardProps {
  title: string
  description: string
  to: string
  event: "cta_frontend_hire" | "cta_magento_support"
  ctaLabel: string
}

function AudienceCard({ title, description, to, event, ctaLabel }: AudienceCardProps) {
  return (
    <GlassCard className="p-7 flex flex-col h-full border border-rule" hoverEffect>
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      <p className="text-ink-2 text-sm mb-6 flex-grow leading-relaxed">{description}</p>
      <CtaButton to={to} event={event} variant="primary" className="w-full justify-center">
        {ctaLabel}
      </CtaButton>
    </GlassCard>
  )
}
