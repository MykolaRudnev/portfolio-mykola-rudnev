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
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-white/5">
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
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-2">
              Senior Front-End Developer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mykola{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Rudnev
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I build production-ready storefronts and web apps —{" "}
              <strong className="text-white">Magento 2 / Hyvä</strong> on one side,{" "}
              <strong className="text-white">React / Next.js / TypeScript</strong> on the other.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {CAREER_HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="px-3 py-3 rounded-xl bg-white/5 border border-white/10 text-center sm:text-left"
                >
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-sm text-white font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed text-base">
              <p>
                <strong className="text-white">Profile:</strong> Senior front-end developer focused on
                e-commerce and product teams. I work remotely with teams across the EU — B2B-friendly
                engagement and direct communication.
              </p>
              <p>
                <strong className="text-white">What I do now:</strong> Direct freelance frontend for{" "}
                <strong className="text-white">HUBER SE</strong> — Magento Open Source + Hyvä Theme,
                Checkout and CMS after an Adobe Commerce headless stack. I also ship{" "}
                <strong className="text-white">Claspwell</strong>, my own Magento 2 / Hyvä AI sales
                assistant (Next.js, Payload CMS, Fastify, Alpine widget). Comfortable across
                storefronts, CMS, checkout, performance, and product-grade SPAs.
              </p>
              <p>
                <strong className="text-white">What I did before:</strong>{" "}
                <span className="text-gray-200">{previousRole?.company}</span> ({previousRole?.period}) — 16+
                Magento builds (Housetipster, Edycja, Paypair, FMIC, Dreamroots, 3MK and more), React/Next.js
                products (Ponadczasowi, Copernicspace, HRK, PMI Careers, LearningSpace, Carneoo) and custom
                Shopify themes (Glasy, Pixel25, Warmsome, Ascent, Berg&apos;s, Diamandia). Earlier
                enterprise delivery at <span className="text-gray-200">Cloudflight</span> (~9 Magento stores:
                BAT ×4, Catering24, Solar, and others).
              </p>
              <p>
                <strong className="text-white">How I work:</strong> Problem → clear scope → delivery with
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
    <section className="px-6 py-12 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">How can I help you?</h2>
        <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
          Choose the path that matches your goal — hiring a developer or fixing and growing a Magento store.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <AudienceCard
            title="I'm hiring a Front-end Developer"
            description="React, Next.js, TypeScript — e-commerce, marketplaces, recruitment and product UIs, plus a shipped Next.js product (Claspwell). Shopify Liquid themes alongside Magento work."
            to={ROUTES.frontendDeveloper}
            event="cta_frontend_hire"
            ctaLabel="Front-end Developer page"
          />
          <AudienceCard
            title="I need Magento 2 / Hyvä Support"
            description="Direct storefront help after 16+ Magento projects — HUBER SE Hyvä rebuild (Lighthouse 99–100 on catalog), Claspwell Magento AI, Housetipster, Edycja, enterprise BAT/Catering24/Solar, PLP/PDP/checkout/CMS, performance and ongoing support."
            to={ROUTES.magentoSupport}
            event="cta_magento_support"
            ctaLabel="Magento / Hyvä support"
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
    <GlassCard className="p-7 flex flex-col h-full border border-white/10" hoverEffect>
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{description}</p>
      <CtaButton to={to} event={event} variant="primary" className="w-full justify-center">
        {ctaLabel}
      </CtaButton>
    </GlassCard>
  )
}
