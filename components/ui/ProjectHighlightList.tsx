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
  accentClass = "text-accent",
}: ProjectHighlightListProps) {
  return (
    <div>
      {title && <h3 className={`text-lg font-bold mb-1 ${accentClass}`}>{title}</h3>}
      {subtitle && <p className="text-ink-2 text-sm mb-4">{subtitle}</p>}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name} className="text-sm border-b border-rule pb-3 last:border-0 last:pb-0">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline underline-offset-4 hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <span className="font-medium text-ink">{item.name}</span>
            )}
            <span className="text-ink-2"> — {item.summary}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
