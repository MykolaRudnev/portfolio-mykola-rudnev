"use client"

import Link from "next/link"
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
    "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-all"
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-cyan-500/20"
      : "bg-glass-200 border border-glass-border text-white hover:bg-white/20"

  function handleClick() {
    if (event) trackEvent(event)
    onClick?.()
  }

  const classes = `${base} ${styles} ${className}`

  if (to)
    return (
      <Link href={to} className={classes} onClick={handleClick}>
        {children}
      </Link>
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
