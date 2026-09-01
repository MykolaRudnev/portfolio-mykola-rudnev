"use client"

import { useEffect } from "react"

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-400 max-w-md mb-8">
          The site hit an unexpected error. Retry, or refresh the page.
        </p>
        <button
          type="button"
          onClick={reset}
          className="px-8 py-3 rounded-full font-semibold bg-white text-black"
        >
          Try again
        </button>
      </body>
    </html>
  )
}
