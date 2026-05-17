import React from "react"
import { PageHeader } from "../components/ui/PageHeader"
import GlassCard from "../components/ui/GlassCard"
import { EmergencyForm } from "../components/forms/EmergencyForm"
import { usePageSeoFromRoute } from "../hooks/use-page-seo-from-route"

const CASES = [
  "Checkout or cart error on production",
  "Frontend regression after a deploy",
  "Critical mobile or PDP bug",
  "Hyvä CMS or component issue",
]

const SEND_LIST = [
  "Store URL and environment (production/staging)",
  "Short issue description (what, where, since when)",
  "Screenshot or screen recording if possible",
  "Whether it blocks sales",
  "Repo or admin access (if available)",
]

const STEPS = [
  { step: "1", text: "Submit the form with your store URL and issue summary" },
  { step: "2", text: "I reply with urgency assessment and availability (usually within 24h)" },
  { step: "3", text: "Quick diagnosis and a proposed first step" },
]

export function EmergencySupportPage() {
  usePageSeoFromRoute()

  return (
    <>
      <PageHeader
        title="Urgent Magento 2 / Hyvä support"
        subtitle="Production issue on your storefront? Send a short summary — I respond fastest when the problem is clearly described."
      />

      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Common cases</h2>
        <ul className="space-y-2 text-gray-300 mb-12">
          {CASES.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <GlassCard className="p-8 mb-12">
          <h2 className="text-xl font-bold mb-4">What to include in your first message</h2>
          <ul className="space-y-2 text-gray-300">
            {SEND_LIST.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </GlassCard>

        <h2 className="text-xl font-bold mb-6">What happens next</h2>
        <div className="space-y-4 mb-12">
          {STEPS.map((item) => (
            <div key={item.step} className="flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold shrink-0">
                {item.step}
              </span>
              <p className="text-gray-300 pt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 pb-24 max-w-xl mx-auto">
        <GlassCard className="p-8">
          <h2 className="text-xl font-bold mb-6 text-center">Urgent request form</h2>
          <EmergencyForm />
        </GlassCard>
      </section>
    </>
  )
}
