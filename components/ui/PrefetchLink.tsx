"use client"

import Link, { type LinkProps } from "next/link"
import type { ReactNode, MouseEvent, FocusEvent } from "react"
import { usePrefetchRoute } from "@/hooks/use-prefetch-route"

interface PrefetchLinkProps extends Omit<LinkProps, "href" | "onMouseEnter" | "onFocus"> {
  href: string
  className?: string
  children: ReactNode
  extraHrefs?: string[]
  onMouseEnter?: (event: MouseEvent<HTMLAnchorElement>) => void
  onFocus?: (event: FocusEvent<HTMLAnchorElement>) => void
}

export function PrefetchLink({
  href,
  extraHrefs = [],
  className,
  children,
  onMouseEnter,
  onFocus,
  prefetch = true,
  ...rest
}: PrefetchLinkProps) {
  const prefetchRoute = usePrefetchRoute()

  function warm() {
    prefetchRoute(href)
    extraHrefs.forEach((path) => prefetchRoute(path))
  }

  function handleMouseEnter(event: MouseEvent<HTMLAnchorElement>) {
    warm()
    onMouseEnter?.(event)
  }

  function handleFocus(event: FocusEvent<HTMLAnchorElement>) {
    warm()
    onFocus?.(event)
  }

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={className}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      {...rest}
    >
      {children}
    </Link>
  )
}
