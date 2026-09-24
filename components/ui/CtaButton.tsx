"use client"

import { PrefetchLink } from "@/components/ui/PrefetchLink"
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics"

interface CtaButtonProps {
  to?: string
  href?: string
  onClick?: () => void
  event?: AnalyticsEvent
  variant?: "primary" | "secondary"
  children: React.ReactNode
  className?: string
}

export function CtaButton({
  to,
  href,
  onClick,
  event,
  variant = "primary",
  children,
  className = "",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-colors duration-200"
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-ink/85"
      : "bg-sheet border border-rule text-ink hover:bg-paper-2"

  function handleClick() {
    if (event) trackEvent(event)
    onClick?.()
  }

  const classes = `${base} ${styles} ${className}`

  if (to)
    return (
      <PrefetchLink href={to} className={classes} onClick={handleClick}>
        {children}
      </PrefetchLink>
    )

  if (href)
    return (
      <a
        href={href}
        className={classes}
        onClick={handleClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    )

  return (
    <button type="button" className={classes} onClick={handleClick}>
      {children}
    </button>
  )
}
