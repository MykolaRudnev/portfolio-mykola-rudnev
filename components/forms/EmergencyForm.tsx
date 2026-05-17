import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, inputClassName } from "./FormField"
import { useRecaptchaToken } from "./use-recaptcha-token"
import { submitContactForm } from "../../lib/contact-api"
import { trackEvent } from "../../lib/analytics"

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  websiteUrl: z.string().min(4, "Store URL is required"),
  issueDescription: z.string().min(10, "Please describe the issue"),
  isProduction: z.enum(["yes", "no"], { message: "Select environment" }),
  accessAvailable: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export function EmergencyForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const { getToken } = useRecaptchaToken("emergency_form")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    setStatus("loading")
    trackEvent("cta_emergency")
    const recaptchaToken = await getToken()
    const result = await submitContactForm({
      formType: "emergency",
      recaptchaToken,
      ...data,
    })

    if (!result.ok) {
      setStatus("error")
      setStatusMessage(result.message)
      return
    }

    trackEvent("form_submit_emergency")
    setStatus("success")
    setStatusMessage(result.message)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <FormField label="Name" error={errors.name?.message}>
        <input {...register("name")} className={inputClassName} />
      </FormField>
      <FormField label="Email" error={errors.email?.message}>
        <input type="email" {...register("email")} className={inputClassName} />
      </FormField>
      <FormField label="Store URL" error={errors.websiteUrl?.message}>
        <input {...register("websiteUrl")} placeholder="https://" className={inputClassName} />
      </FormField>
      <FormField label="Issue description" error={errors.issueDescription?.message}>
        <textarea {...register("issueDescription")} rows={4} className={inputClassName} />
      </FormField>
      <FormField label="Is this on production?" error={errors.isProduction?.message}>
        <select {...register("isProduction")} className={inputClassName}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </FormField>
      <FormField label="Repo / admin access (optional)" error={errors.accessAvailable?.message}>
        <input {...register("accessAvailable")} className={inputClassName} />
      </FormField>
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-3 rounded-full bg-red-500/90 text-white font-semibold hover:bg-red-500 disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Send urgent request"}
      </button>
      {status === "success" && <p className="text-cyan-400 text-sm">{statusMessage}</p>}
      {status === "error" && <p className="text-red-400 text-sm">{statusMessage}</p>}
    </form>
  )
}
