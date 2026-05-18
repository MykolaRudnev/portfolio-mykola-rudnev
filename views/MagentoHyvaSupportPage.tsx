"use client"

import Link from "next/link"
import { PageHeader } from "@/components/ui/PageHeader"
import { CtaButton } from "@/components/ui/CtaButton"
import GlassCard from "@/components/ui/GlassCard"
import { ProjectsGrid } from "@/components/projects/ProjectsGrid"
import { ROUTES } from "@/constants/routes"
import { MagentoBriefForm } from "@/components/forms/MagentoBriefForm"
import { getMagentoProjects } from "@/constants/projects-utils"
import { PAGE_CONTENT_CLASS } from "@/components/ui/page-container"
import { ProjectHighlightList } from "@/components/ui/ProjectHighlightList"
import { MAGENTO_PROJECT_HIGHLIGHTS } from "@/constants/audience-highlights"

const SERVICES = [
  "Frontend bug fixing on Magento 2 / Hyvä",
  "New sections and reusable components",
  "PDP, PLP, cart, checkout, and CMS page improvements",
  "Performance and Core Web Vitals optimization",
  "Cleaning up frontend after quick fixes",
  "Post-launch support and ongoing maintenance",
  "Short development sprints without a long onboarding process",
]

const PAIN_SCENARIOS = [
  {
    title: "The store runs — but the frontend hurts",
    description:
      "You have a backlog of fixes, tech debt, and “we’ll get to it later” items that never get priority.",
  },
  {
    title: "You need to ship faster",
    description:
      "New sections, landing pages, CMS blocks, UX tweaks, and mobile polish — without waiting weeks for estimates.",
  },
  {
    title: "Hyvä is live (or planned) — no frontend ownership",
    description:
      "You need someone who understands the storefront end-to-end and can step in without a heavy agency rollout.",
  },
  {
    title: "Post-launch — nobody owns the frontend",
    description:
      "Hyvä is deployed but components, CMS, and performance on the frontend have no clear owner.",
  },
  {
    title: "Bug backlog and messy quick fixes",
    description:
      "You need someone to stabilize the frontend and close tickets one by one with clear communication.",
  },
  {
    title: "Conversion drop / weak Core Web Vitals",
    description:
      "Mobile is slow, checkout has friction — you need measurable improvement, not another PDF-only audit.",
  },
]

const WORK_PRINCIPLES = [
  "Direct work with the store owner or e-commerce manager — no account layers",
  "Clearly defined scope before work starts",
  "Straightforward communication (async-friendly, B2B)",
  "Small sprints or ongoing support — whatever fits the store",
  "No “we’ll get back to you in two weeks with an estimate”",
]

const PROOF_BLOCKS = [
  { title: "Support", text: "Ongoing support and fast production fixes" },
  { title: "Performance", text: "Core Web Vitals, Lighthouse, asset optimization" },
  { title: "Migration", text: "Hyvä migrations and cleanup after legacy themes" },
  { title: "Checkout", text: "Cart, checkout, and purchase flow" },
  { title: "CMS", text: "Hyvä CMS and components for content teams" },
  { title: "Experience", text: "16+ Magento stores — enterprise builds, Hyvä migrations, long-term support" },
]

const ENGAGEMENT_MODELS = [
  {
    name: "One-off sprint",
    description: "A fixed scope over 1–4 weeks when you have a concrete task list.",
    bestFor: "New section, PLP/PDP work, mobile improvements, Hyvä components",
  },
  {
    name: "Ongoing support",
    description: "Regular fixes, development, and fast response when the store has no dedicated front-end owner.",
    bestFor: "Post-launch maintenance, ticket backlog, incremental growth",
  },
  {
    name: "Audit + action plan",
    description: "Short diagnosis of performance, frontend health, and priorities — then a clear next step.",
    bestFor: "Chaos after launch, unclear where to start, many open fronts",
  },
]

const DELIVERABLES = [
  "Short diagnosis (store URL + issue summary)",
  "Scope proposal and realistic work plan",
  "Implementation or hands-on support during rollout",
  "Clear communication without intermediaries",
  "Measurable outcomes where it matters (CWV, conversion paths, ticket closure)",
]

export function MagentoHyvaSupportPage() {
  const magentoProjects = getMagentoProjects()

  return (
    <>
      <PageHeader
        title="Magento 2 / Hyvä support — direct, no middlemen"
        subtitle="I help e-commerce teams build and fix Magento 2 / Hyvä frontends: faster, cleaner, and without agency overhead. ~6 years on Magento storefronts, Hyvä end-to-end, B2B remote across the EU."
      >
        <HeaderCtas />
      </PageHeader>

      <section className={`py-12 ${PAGE_CONTENT_CLASS}`}>
        <GlassCard className="p-8 md:p-10 mb-12">
          <h2 className="text-2xl font-bold mb-2">Magento 2 stores I&apos;ve worked on</h2>
          <p className="text-gray-400 text-sm mb-6">
            16+ production storefronts — full builds, enterprise multi-market delivery, Hyvä migrations and
            long-term support. Examples from my CV and portfolio (not only BAT or a single client):
          </p>
          <ProjectHighlightList
            title=""
            items={MAGENTO_PROJECT_HIGHLIGHTS}
            accentClass="text-orange-400"
          />
        </GlassCard>

        <h2 className="text-2xl font-bold mb-6">What I help with</h2>
        <ul className="space-y-3">
          {SERVICES.map((item) => (
            <li key={item} className="flex gap-2 text-gray-300">
              <span className="text-cyan-400 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-3 text-center">Typical situations</h2>
        <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-8">
          When store owners and e-commerce managers usually reach out — and how I typically step in.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIN_SCENARIOS.map((scenario) => (
            <GlassCard key={scenario.title} className="p-6" hoverEffect>
              <h3 className="font-bold mb-3">{scenario.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{scenario.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 max-w-5xl mx-auto">
        <GlassCard className="p-8 mb-10">
          <h2 className="text-xl font-bold mb-4">How I work</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Direct contact, clear scope, and a fast start. First a short diagnosis (URL + issue summary),
            then a proposal: audit, sprint, or ongoing support. Async-friendly, B2B — Poland and EU remote.
          </p>
          <ul className="space-y-2">
            {WORK_PRINCIPLES.map((item) => (
              <li key={item} className="flex gap-2 text-gray-300 text-sm">
                <span className="text-cyan-400 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </GlassCard>

        <h2 className="text-xl font-bold mb-6 text-center">Areas I focus on</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {PROOF_BLOCKS.map((block) => (
            <GlassCard key={block.title} className="p-6">
              <h3 className="font-bold text-cyan-400 mb-2">{block.title}</h3>
              <p className="text-gray-400 text-sm">{block.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-2xl font-bold mb-3 text-center">Engagement models</h2>
        <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-8">
          Pick the model that matches where your store is today. Full comparison and details on the pricing page.
        </p>
        {motionFallbackEngagementModels()}
        <div className="text-center mt-8">
          <CtaButton to={ROUTES.pricing} variant="secondary" event="cta_magento_support">
            View full comparison
          </CtaButton>
        </div>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto">
        <GlassCard className="p-8">
          <h2 className="text-xl font-bold mb-4">What you get</h2>
          <ul className="space-y-3">
            {DELIVERABLES.map((item) => (
              <li key={item} className="flex gap-2 text-gray-300 text-sm">
                <span className="text-cyan-400 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      <section className="px-6 py-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Have a Magento 2 / Hyvä store and need support?</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          Send your store URL and a short description of the problem. I will reply whether I can take it on
          and which engagement model fits best.
        </p>
        {motionFallbackMidPageCtas()}
      </section>

      <section id="send-brief" className="px-6 py-12 max-w-xl mx-auto scroll-mt-28">
        <GlassCard className="p-8">
          <h2 className="text-xl font-bold mb-2">Send a brief</h2>
          <p className="text-gray-400 text-sm mb-6">
            Store URL, what you need, and a short problem description — I will reply with fit and next steps.
          </p>
          <MagentoBriefForm />
        </GlassCard>
      </section>

      <section className="border-t border-white/5">
        <GlassCard className="max-w-4xl mx-auto p-8 mb-4 mt-8 mx-6 md:mx-auto">
          <h2 className="text-2xl font-bold mb-3">Magento 2 projects</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-2">
            Stores and implementations I have worked on — full builds, enterprise delivery, and ongoing
            frontend support. I lead Hyvä storefront work end-to-end: migration, CMS, components, and Core Web
            Vitals.
          </p>
          <p className="text-gray-400 text-sm">
            See the{" "}
            <Link href={ROUTES.caseStudies} className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
              full portfolio
            </Link>{" "}
            for React / Next.js projects and in-depth case studies (HRK, Ponadczasowi).
          </p>
        </GlassCard>
        <ProjectsGrid
          projects={magentoProjects}
          title=""
          showTitle={false}
          showFilters={false}
          initialCount={999}
        />
      </section>

      <section className="px-6 py-16 pb-24 text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Ready to talk?</h2>
        <p className="text-gray-400 mb-6 text-sm max-w-lg mx-auto">
          General inquiries and project briefs — use the{" "}
          <Link href={ROUTES.contact} className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            contact page
          </Link>
          . For urgent production issues, see{" "}
          <Link href={ROUTES.emergencySupport} className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            emergency support
          </Link>
          .
        </p>
        {motionFallbackFooterCtas()}
      </section>
    </>
  )
}

function HeaderCtas() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <CtaButton href="#send-brief" event="cta_send_brief">
        Send brief
      </CtaButton>
      <CtaButton to={ROUTES.contact} variant="secondary" event="cta_magento_support">
        Need support
      </CtaButton>
      <CtaButton
        href="mailto:rudnevmykola@gmail.com?subject=Magento%20%2F%20Hyv%C3%A4%20%E2%80%94%2020%20min%20call"
        variant="secondary"
        event="cta_book_call"
      >
        Book a 20-min call
      </CtaButton>
    </div>
  )
}

function motionFallbackEngagementModels() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {ENGAGEMENT_MODELS.map((model) => (
        <GlassCard key={model.name} className="p-8 flex flex-col" hoverEffect>
          <h3 className="text-lg font-bold mb-2">{model.name}</h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow">{model.description}</p>
          <p className="text-cyan-400 text-xs">Best for: {model.bestFor}</p>
        </GlassCard>
      ))}
    </div>
  )
}


function motionFallbackMidPageCtas() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <CtaButton href="#send-brief" event="cta_send_brief">
        Send brief
      </CtaButton>
      <CtaButton to={ROUTES.emergencySupport} variant="secondary" event="cta_emergency">
        Urgent issue
      </CtaButton>
    </div>
  )
}

function motionFallbackFooterCtas() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <CtaButton href="#send-brief" event="cta_send_brief">
        Send brief
      </CtaButton>
      <CtaButton to={ROUTES.emergencySupport} variant="secondary" event="cta_emergency">
        Emergency support
      </CtaButton>
    </div>
  )
}
