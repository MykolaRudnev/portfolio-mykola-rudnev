"use client"

import { useCallback, useRef } from "react"
import { useRouter } from "next/navigation"

const inflight = new Set<string>()

function isInternalPath(href: string) {
  return href.startsWith("/") && !href.startsWith("//")
}

/** Prefetch a route once. Skips duplicates and in-flight requests (CCDAO / Juntao Qiu). */
export function usePrefetchRoute() {
  const router = useRouter()
  const routerRef = useRef(router)
  routerRef.current = router

  return useCallback((href: string) => {
    if (!href || !isInternalPath(href) || inflight.has(href)) return
    inflight.add(href)
    void Promise.resolve(routerRef.current.prefetch(href)).catch(() => {
      inflight.delete(href)
    })
  }, [])
}
