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
  needType: z.enum(["support", "development", "audit", "urgent"], { message: "Select need type" }),
  mainProblem: z.string().min(10, "Describe the main problem"),
  consent: z.literal(true, { message: "Consent is required" }),
})

type FormData = z.infer<typeof schema>

const NEED_TYPES = [
  { value: "support", label: "Ongoing support" },
  { value: "development", label: "Development / new sections" },
  { value: "audit", label: "Audit" },
  { value: "urgent", label: "Urgent issue" },
] as const

export function MagentoBriefForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const { getToken } = useRecaptchaToken("magento_brief")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    setStatus("loading")
    const recaptchaToken = await getToken()
    const result = await submitContactForm({
      formType: "magento_brief",
      recaptchaToken,
      name: data.name,
      email: data.email,
      websiteUrl: data.websiteUrl,
      needType: data.needType,
      message: data.mainProblem,
      consent: "yes",
    })

    if (!result.ok) {
      setStatus("error")
      setStatusMessage(result.message)
      return
    }

    trackEvent("form_submit_client")
    trackEvent("cta_send_brief")
    setStatus("success")
    setStatusMessage(result.message)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <FormField label="Name" error={errors.name?.message}>
        {(field) => <input {...register("name")} {...field} className={inputClassName} autoComplete="name" />}
      </FormField>
      <FormField label="Email" error={errors.email?.message}>
        {(field) => (
          <input
            type="email"
            {...register("email")}
            {...field}
            className={inputClassName}
            autoComplete="email"
          />
        )}
      </FormField>
      <FormField label="Store URL" error={errors.websiteUrl?.message}>
        {(field) => (
          <input
            {...register("websiteUrl")}
            {...field}
            placeholder="https://"
            className={inputClassName}
          />
        )}
      </FormField>
      <FormField label="Type of need" error={errors.needType?.message}>
        {(field) => (
          <select {...register("needType")} {...field} className={inputClassName} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {NEED_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        )}
      </FormField>
      <FormField label="Main problem" error={errors.mainProblem?.message}>
        {(field) => <textarea {...register("mainProblem")} {...field} rows={4} className={inputClassName} />}
      </FormField>
      <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
        <input type="checkbox" {...register("consent")} className="mt-1 rounded border-white/20" />
        <span>I agree to be contacted about this inquiry.</span>
      </label>
      {errors.consent?.message && <p className="text-sm text-red-400">{errors.consent.message}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Send brief"}
      </button>
      <FormStatusMessage status={status} message={statusMessage} />
    </form>
  )
}
