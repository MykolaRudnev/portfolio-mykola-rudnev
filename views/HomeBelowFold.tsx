"use client"

import GlassCard from "@/components/ui/GlassCard"
import { ProjectHighlightList } from "@/components/ui/ProjectHighlightList"
import { ROUTES } from "@/constants/routes"
import { workExperiences } from "@/constants"
import {
  MAGENTO_PROJECT_HIGHLIGHTS,
  REACT_PROJECT_HIGHLIGHTS,
  SHOPIFY_PROJECT_HIGHLIGHTS,
} from "@/constants/audience-highlights"
import { PAGE_CONTENT_CLASS } from "@/components/ui/page-container"
import { PrefetchLink } from "@/components/ui/PrefetchLink"

const STACK_BADGES = ["React", "Next.js", "TypeScript", "Magento 2", "Hyvä", "Shopify", "Core Web Vitals"]

const PROOF_ITEMS = [
  "HUBER SE: Adobe Commerce headless → Magento Open Source + Hyvä — Lighthouse 99–100 on catalog pages",
  "Claspwell: founder-built Magento 2 / Hyvä AI assistant — Next.js production site, API, widget, Magento module",
  "Shopify custom themes (Glasy, Pixel25, Warmsome and more) plus 16+ Magento stores and React / Next.js products",
]

const CAREER_TIMELINE_ITEMS = workExperiences.slice(0, 4)

export function HomeBelowFold() {
  return (
    <>
      <ProjectExperienceSection />
      <TrustStrip />
      <ProofSection />
      <AvailabilitySection />
      <CareerTimelineSection />
    </>
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
          <PrefetchLink
            href={ROUTES.caseStudies}
            className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
          >
            case studies
          </PrefetchLink>
          .
        </p>
        <GlassCard className="p-8 md:p-10">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
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
            <ProjectHighlightList
              title="Shopify / Liquid"
              subtitle={`${SHOPIFY_PROJECT_HIGHLIGHTS.length} custom themes`}
              items={SHOPIFY_PROJECT_HIGHLIGHTS}
              accentClass="text-green-400"
            />
          </div>
        </GlassCard>
      </div>
    </section>
  )
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
    <section className="px-6 py-16 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-bold mb-2">Career path</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Recent roles — responsibilities and project detail on the front-end page.
            </p>
          </div>
          <PrefetchLink
            href={ROUTES.frontendDeveloper}
            className="text-sm text-cyan-400 underline underline-offset-4 hover:text-cyan-300 shrink-0 transition-colors"
          >
            Full experience →
          </PrefetchLink>
        </div>

        <ol className="list-none m-0 p-0">
          {CAREER_TIMELINE_ITEMS.map((exp, index) => (
            <CareerTimelineItem
              key={`${exp.company}-${exp.period}`}
              experience={exp}
              isCurrent={index === 0}
              isLast={index === CAREER_TIMELINE_ITEMS.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

interface CareerTimelineItemProps {
  experience: (typeof workExperiences)[number]
  isCurrent: boolean
  isLast: boolean
}

function CareerTimelineItem({ experience, isCurrent, isLast }: CareerTimelineItemProps) {
  return (
    <li className="flex gap-5 items-stretch">
      <div className="flex w-12 shrink-0 flex-col items-center pt-0.5">
        <div
          className={`relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border bg-[#0a0a0a] ${
            isCurrent ? "border-cyan-500/40 shadow-md shadow-cyan-500/10" : "border-white/10"
          }`}
        >
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain p-1.5"
            onError={(e) => {
              e.currentTarget.src = `https://picsum.photos/seed/${experience.company.replace(/\s/g, "")}/96/96`
            }}
          />
          {isCurrent && (
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-cyan-400 ring-2 ring-[#050505]" />
          )}
        </div>
        {!isLast && (
          <span
            className="my-2 w-px min-h-8 flex-1 bg-gradient-to-b from-cyan-500/50 via-white/15 to-transparent"
            aria-hidden
          />
        )}
      </div>

      <article className={`min-w-0 flex-1 ${isLast ? "pb-0" : "pb-10"}`}>
        <h3 className="font-semibold text-white leading-snug">{experience.position}</h3>
        <p className="mt-0.5 text-sm font-medium text-cyan-400/90">{experience.company}</p>
        <p className="mt-2 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-gray-400">
          {experience.period}
        </p>
      </article>
    </li>
  )
}
