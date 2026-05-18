"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, inputClassName } from "./FormField"
import { useRecaptchaToken } from "./use-recaptcha-token"
import { submitContactForm } from "@/lib/contact-api"
import { trackEvent } from "@/lib/analytics"
import { FormStatusMessage } from "./FormStatusMessage"

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  websiteUrl: z.string().min(4, "Store URL is required"),
  issueDescription: z.string().min(10, "Please describe the issue"),
  isProduction: z.enum(["yes", "no"], { message: "Select environment" }),
  accessAvailable: z.string().optional(),
  consent: z.literal(true, { message: "Consent is required" }),
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
    const { consent: _, ...fields } = data
    const result = await submitContactForm({
      formType: "emergency",
      recaptchaToken,
      consent: "yes",
      ...fields,
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
        {(field) => <input {...register("name")} {...field} className={inputClassName} />}
      </FormField>
      <FormField label="Email" error={errors.email?.message}>
        {(field) => <input type="email" {...register("email")} {...field} className={inputClassName} />}
      </FormField>
      <FormField label="Store URL" error={errors.websiteUrl?.message}>
        {(field) => (
          <input {...register("websiteUrl")} {...field} placeholder="https://" className={inputClassName} />
        )}
      </FormField>
      <FormField label="Issue description" error={errors.issueDescription?.message}>
        {(field) => <textarea {...register("issueDescription")} {...field} rows={4} className={inputClassName} />}
      </FormField>
      <FormField label="Is this on production?" error={errors.isProduction?.message}>
        {(field) => (
          <select {...register("isProduction")} {...field} className={inputClassName} defaultValue="">
            <option value="" disabled>Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        )}
      </FormField>
      <FormField label="Repo / admin access (optional)" error={errors.accessAvailable?.message}>
        {(field) => <input {...register("accessAvailable")} {...field} className={inputClassName} />}
      </FormField>
      <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
        <input type="checkbox" {...register("consent")} className="mt-1 rounded border-white/20" />
        <span>I agree to be contacted about this inquiry.</span>
      </label>
      {errors.consent?.message && <p className="text-sm text-red-400">{errors.consent.message}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-3 rounded-full bg-red-500/90 text-white font-semibold hover:bg-red-500 disabled:opacity-50"
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send urgent request"}
      </button>
      <FormStatusMessage status={status} message={statusMessage} />
    </form>
  )
}
