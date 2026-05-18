import React from "react"
import type { ProjectHighlight } from "../../constants/audience-highlights"

interface ProjectHighlightListProps {
  title: string
  subtitle?: string
  items: ProjectHighlight[]
  accentClass?: string
}

export function ProjectHighlightList({
  title,
  subtitle,
  items,
  accentClass = "text-cyan-400",
}: ProjectHighlightListProps) {
  return (
    <div>
      {title && <h3 className={`text-lg font-bold mb-1 ${accentClass}`}>{title}</h3>}
      {subtitle && <p className="text-gray-500 text-sm mb-4">{subtitle}</p>}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name} className="text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline underline-offset-4 hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <span className="font-medium text-white">{item.name}</span>
            )}
            <span className="text-gray-500"> — {item.summary}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
