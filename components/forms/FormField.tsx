"use client"

import { useId } from "react"

interface FormFieldProps {
  label: string
  error?: string
  children: (fieldProps: {
    id: string
    "aria-invalid"?: boolean
    "aria-describedby"?: string
  }) => React.ReactNode
}

export function FormField({ label, error, children }: FormFieldProps) {
  const id = useId()
  const errorId = error ? `${id}-error` : undefined

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-ink-2">
        {label}
      </label>
      {children({
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": errorId,
      })}
      {error && (
        <p id={errorId} className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export const inputClassName =
  "w-full px-4 py-3 rounded-xl bg-paper-2 border border-rule text-ink placeholder:text-ink-2 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40"
