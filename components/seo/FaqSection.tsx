import { PAGE_CONTENT_CLASS } from "@/components/ui/page-container"
import type { FaqItem } from "@/constants/faq"

interface FaqSectionProps {
  items: FaqItem[]
  title?: string
}

export function FaqSection({ items, title = "Questions people ask before they hire" }: FaqSectionProps) {
  if (items.length === 0) return null

  return (
    <section className={`py-12 ${PAGE_CONTENT_CLASS}`}>
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <dl className="space-y-5">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <dt className="text-lg font-semibold text-white">{item.question}</dt>
            <dd className="mt-3 text-gray-400 leading-relaxed">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
