"use client"

import React from "react"
import { PageHeader } from "@/components/ui/PageHeader"
import { CtaButton } from "@/components/ui/CtaButton"
import GlassCard from "@/components/ui/GlassCard"
import { ROUTES } from "@/constants/routes"

const MODELS = [
  {
    name: "Audit",
    description: "Short store diagnosis: performance, frontend health, and prioritized next steps.",
    bestFor: "Post-launch chaos — unsure where to start",
    includes: ["Key page review", "Recommendation list", "Proposed next steps"],
  },
  {
    name: "Sprint",
    description: "Focused delivery: a clear scope over 1–4 weeks.",
    bestFor: "New section, PLP/PDP refactor, mobile improvements",
    includes: ["Fixed scope", "Regular demos", "Staging/production rollout"],
    highlighted: true,
  },
  {
    name: "Ongoing support",
    description: "Monthly hour package — support, fixes, and incremental development.",
    bestFor: "Stores without a dedicated front-end developer",
    includes: ["Ticket prioritization", "Direct contact", "Flexible backlog"],
  },
]

const COMPARISON = [
  { feature: "Time to start", audit: "3–5 days", sprint: "1 week", support: "ongoing" },
  { feature: "Scope", audit: "diagnosis", sprint: "implementation", support: "maintenance" },
  { feature: "Contact", audit: "report + call", sprint: "daily/async", support: "direct" },
]

export function PricingPage() {

  return (
    <>
      <PageHeader
        title="Engagement models"
        subtitle="Audit, implementation sprint, or ongoing support — pick the model that fits your store stage."
      />

      <section className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {MODELS.map((model) => (
          <GlassCard
            key={model.name}
            className={`p-8 flex flex-col ${model.highlighted ? "ring-2 ring-cyan-500/50" : ""}`}
            hoverEffect
          >
            <h2 className="text-xl font-bold mb-2">{model.name}</h2>
            <p className="text-gray-400 text-sm mb-4 flex-grow">{model.description}</p>
            <p className="text-cyan-400 text-xs mb-4">Best for: {model.bestFor}</p>
            <ul className="space-y-2 mb-6 text-sm text-gray-300">
              {model.includes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto overflow-x-auto">
        <h2 className="text-xl font-bold mb-6 text-center">Comparison</h2>
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3 pr-4 text-gray-500"> </th>
              <th className="py-3 px-4">Audit</th>
              <th className="py-3 px-4">Sprint</th>
              <th className="py-3 px-4">Ongoing support</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row) => (
              <tr key={row.feature} className="border-b border-white/5">
                <td className="py-3 pr-4 text-gray-400">{row.feature}</td>
                <td className="py-3 px-4">{row.audit}</td>
                <td className="py-3 px-4">{row.sprint}</td>
                <td className="py-3 px-4">{row.support}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="px-6 py-16 pb-24 text-center">
        <CtaButton to={ROUTES.contact} event="cta_send_brief">
          Request a quote
        </CtaButton>
      </section>
    </>
  )
}
