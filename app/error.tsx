"use client"

import { useEffect } from "react"
import { CtaButton } from "@/components/ui/CtaButton"
import { ROUTES } from "@/constants/routes"

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-400 max-w-md mb-8">
        This page failed to render. You can retry, or go back to the homepage.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          type="button"
          onClick={reset}
          className="px-8 py-3 rounded-full font-semibold bg-white text-black"
        >
          Try again
        </button>
        <CtaButton to={ROUTES.home} variant="secondary">
          Home
        </CtaButton>
      </div>
    </section>
  )
}
