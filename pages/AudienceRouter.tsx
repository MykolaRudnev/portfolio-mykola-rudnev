import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import GlassCard from "../components/ui/GlassCard"
import { CtaButton } from "../components/ui/CtaButton"
import { ProjectHighlightList } from "../components/ui/ProjectHighlightList"
import { usePageSeoFromRoute } from "../hooks/use-page-seo-from-route"
import { ROUTES } from "../constants/routes"
import { workExperiences } from "../constants.tsx"
import {
  MAGENTO_PROJECT_HIGHLIGHTS,
  REACT_PROJECT_HIGHLIGHTS,
} from "../constants/audience-highlights"
import { PAGE_CONTENT_CLASS } from "../components/ui/page-container"

const STACK_BADGES = ["React", "Next.js", "TypeScript", "Magento 2", "Hyvä", "Core Web Vitals"]

const PROOF_ITEMS = [
  "Full frontend ownership on Magento 2 / Hyvä: PLP, PDP, cart, checkout, account, CMS",
  "React / Next.js production apps for e-commerce, recruitment and content platforms",
  "16+ Magento stores delivered; migrations, redesigns and ongoing support",
]

const CAREER_HIGHLIGHTS = [
  { label: "Experience", value: "6+ years front-end" },
  { label: "Collaboration", value: "Remote · EU · B2B" },
  { label: "Languages", value: "EN · PL · UA · RU" },
  { label: "Focus", value: "E-commerce & product teams" },
]

export function AudienceRouter() {
  usePageSeoFromRoute()

  return (
    <>
      <PersonalIntro />
      <AudiencePathSection />
      <ProjectExperienceSection />
      <TrustStrip />
      <ProofSection />
      <AvailabilitySection />
      <CareerTimelineSection />
    </>
  )
}

function PersonalIntro() {
  const previousRole = workExperiences[1]

  return (
    <section className="pt-28 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto lg:mx-0 shrink-0"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-white/5">
              <img
                src="/images/mrudnev-avatar.png"
                alt="Mykola Rudnev"
                width={176}
                height={176}
                loading="eager"
                fetchPriority="high"
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/mrudnev/300/300"
                }}
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
                <strong className="text-white">What I do now:</strong> For the last six years I&apos;ve been
                building frontends for e-commerce — roughly{" "}
                <strong className="text-white">50/50 Magento 2 / Hyvä and React / Next.js</strong>. I&apos;m
                comfortable across the stack: storefronts, CMS, checkout, performance, and product-grade SPAs —
                and I adapt quickly when the project needs a different tool or workflow.
              </p>
              <p>
                <strong className="text-white">What I did before:</strong>{" "}
                <span className="text-gray-200">{previousRole.company}</span> ({previousRole.period}) — 16+
                Magento builds (Housetipster, Edycja, Paypair, FMIC, Dreamroots, 3MK and more) plus React/Next.js
                products (Ponadczasowi, Copernicspace, HRK, PMI Careers, LearningSpace, Carneoo). Earlier
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
            description="React, Next.js, TypeScript — e-commerce, marketplaces, recruitment and product UIs. Work across Ponadczasowi, Copernicspace, HRK, PMI Careers, LearningSpace, Carneoo and more (not a single-stack CV)."
            to={ROUTES.frontendDeveloper}
            event="cta_frontend_hire"
            ctaLabel="Front-end Developer page"
          />
          <AudienceCard
            title="I need Magento 2 / Hyvä Support"
            description="Direct storefront help after 16+ Magento projects — Housetipster, Edycja, Paypair, enterprise BAT/Catering24/Solar, Hyvä migration, PLP/PDP/checkout/CMS, performance and ongoing support."
            to={ROUTES.magentoSupport}
            event="cta_magento_support"
            ctaLabel="Magento / Hyvä support"
          />
        </div>
      </div>
    </section>
  )
}

function ProjectExperienceSection() {
  return (
    <section className="px-6 py-14 border-t border-white/5">
      <div className={PAGE_CONTENT_CLASS}>
        <h2 className="text-2xl font-bold text-center mb-2">Project experience — both tracks</h2>
        <p className="text-gray-400 text-center text-sm max-w-2xl mx-auto mb-10">
          I work across many production codebases, not just one or two flagship projects. Below is a sample from
          recent years — the full portfolio is on{" "}
          <Link to={ROUTES.caseStudies} className="text-cyan-400 hover:underline">
            case studies
          </Link>
          .
        </p>
        <GlassCard className="p-8 md:p-10">
          <ProjectHighlightGrid>
            <ProjectHighlightList
              title="Magento 2 / Hyvä"
              subtitle={`${MAGENTO_PROJECT_HIGHLIGHTS.length}+ examples from CV & delivery history`}
              items={MAGENTO_PROJECT_HIGHLIGHTS}
              accentClass="text-orange-400"
            />
            <ProjectHighlightList
              title="React / Next.js / Gatsby"
              subtitle={`${REACT_PROJECT_HIGHLIGHTS.length}+ product & platform projects`}
              items={REACT_PROJECT_HIGHLIGHTS}
              accentClass="text-cyan-400"
            />
          </ProjectHighlightGrid>
        </GlassCard>
      </div>
    </section>
  )
}

function ProjectHighlightGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">{children}</div>
}

function TrustStrip() {
  return (
    <section className="px-6 py-10 border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm text-gray-500 mb-5 uppercase tracking-widest">Core stack</p>
        <div className="flex flex-wrap justify-center gap-2">
          {STACK_BADGES.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProofSection() {
  return (
    <section className="px-6 py-14">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Why teams work with me</h2>
        <ul className="space-y-4">
          {PROOF_ITEMS.map((item) => (
            <li key={item} className="flex gap-3 text-gray-300">
              <span className="text-cyan-400 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function AvailabilitySection() {
  return (
    <section className="px-6 py-8">
      <GlassCard className="max-w-3xl mx-auto p-8">
        <h2 className="text-xl font-bold mb-4 text-cyan-400">Current availability</h2>
        <ul className="space-y-2 text-gray-300">
          <li>• Direct Magento 2 / Hyvä support (audit, sprint, ongoing)</li>
          <li>• B2B front-end roles — React / Next.js, remote EU</li>
          <li>• Short performance & frontend audit sprints</li>
        </ul>
      </GlassCard>
    </section>
  )
}

function CareerTimelineSection() {
  return (
    <section className="px-6 py-14 pb-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Career path</h2>
        <div className="space-y-5">
          {workExperiences.slice(0, 4).map((exp) => (
            <div key={exp.company} className="flex gap-4 items-start border-l-2 border-cyan-500/30 pl-5">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-11 h-11 rounded-lg object-contain bg-white/5 shrink-0 -ml-[1.35rem] ring-4 ring-black"
              />
              <div className="pt-0.5">
                <h3 className="font-semibold text-white">{exp.position}</h3>
                <p className="text-cyan-400 text-sm">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.period}</p>
              </div>
            </div>
          ))}
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
