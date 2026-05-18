import Image from "next/image"
import type { CaseStudyVisualProof } from "@/constants/case-studies"

interface VisualProofSectionProps {
  items: CaseStudyVisualProof[]
}

export function VisualProofSection({ items }: VisualProofSectionProps) {
  if (items.length === 0) return null

  return (
    <section>
      <h2 className="text-xl font-bold mb-6">Before & after</h2>
      <div className="space-y-10">
        {items.map((item) => (
          <div key={item.label}>
            <h3 className="text-sm font-semibold text-cyan-400 mb-3">{item.label}</h3>
            {item.caption && <p className="text-gray-400 text-sm mb-4">{item.caption}</p>}
            <div className="grid sm:grid-cols-2 gap-4">
              {item.beforeSrc && (
                <figure className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
                  <div className="px-3 py-2 text-xs text-gray-500 border-b border-white/10">Before</div>
                  <Image
                    src={item.beforeSrc}
                    alt={`${item.label} before`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </figure>
              )}
              {item.afterSrc && (
                <figure className="rounded-xl overflow-hidden border border-cyan-500/20 bg-white/5">
                  <div className="px-3 py-2 text-xs text-cyan-400 border-b border-white/10">After</div>
                  <Image
                    src={item.afterSrc}
                    alt={`${item.label} after`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </figure>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
