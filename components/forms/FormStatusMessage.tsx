interface FormStatusMessageProps {
  status: "idle" | "loading" | "success" | "error"
  message: string
}

export function FormStatusMessage({ status, message }: FormStatusMessageProps) {
  if (status !== "success" && status !== "error") return null

  return (
    <p
      role="status"
      aria-live="polite"
      className={`text-sm ${status === "success" ? "text-cyan-400" : "text-red-400"}`}
    >
      {message}
    </p>
  )
}
