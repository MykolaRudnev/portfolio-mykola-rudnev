import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, inputClassName } from "./FormField"
import { useRecaptchaToken } from "./use-recaptcha-token"
import { submitContactForm } from "../../lib/contact-api"
import { trackEvent } from "../../lib/analytics"

const INQUIRY_TYPES = [
  { value: "hiring", label: "Hiring — front-end role" },
  { value: "magento", label: "Magento 2 / Hyvä support" },
  { value: "general", label: "General inquiry" },
] as const

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  inquiryType: z.enum(["hiring", "magento", "general"], { message: "Select inquiry type" }),
  websiteUrl: z.string().optional(),
  roleTitle: z.string().optional(),
  message: z.string().min(10, "Please add a short message"),
})

type FormData = z.infer<typeof schema>

interface ContactFormProps {
  size?: "default" | "large"
}

export function ContactForm({ size = "default" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const { getToken } = useRecaptchaToken("contact_form")

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { inquiryType: "general" },
  })

  const inquiryType = watch("inquiryType")

  async function onSubmit(data: FormData) {
    setStatus("loading")
    const recaptchaToken = await getToken()
    const result = await submitContactForm({
      formType: "contact",
      recaptchaToken,
      ...data,
    })

    if (!result.ok) {
      setStatus("error")
      setStatusMessage(result.message)
      return
    }

    trackEvent("form_submit_contact")
    if (data.inquiryType === "hiring") trackEvent("form_submit_recruiter")
    else if (data.inquiryType === "magento") trackEvent("form_submit_client")
    setStatus("success")
    setStatusMessage(result.message)
    reset({ inquiryType: "general" })
  }

  const isLarge = size === "large"
  const fieldClass = isLarge
    ? `${inputClassName} py-3.5 md:py-4 text-base`
    : inputClassName
  const formClass = isLarge ? "flex flex-col gap-6" : "flex flex-col gap-5"
  const buttonClass = isLarge
    ? "w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black text-base font-semibold hover:bg-gray-200 disabled:opacity-50"
    : "px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 disabled:opacity-50"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
      <FormField label="Name" error={errors.name?.message}>
        <input {...register("name")} className={fieldClass} autoComplete="name" />
      </FormField>
      <FormField label="Email" error={errors.email?.message}>
        <input type="email" {...register("email")} className={fieldClass} autoComplete="email" />
      </FormField>
      <FormField label="Company (optional)" error={errors.company?.message}>
        <input {...register("company")} className={fieldClass} />
      </FormField>
      <FormField label="Inquiry type" error={errors.inquiryType?.message}>
        <select {...register("inquiryType")} className={fieldClass}>
          {INQUIRY_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </FormField>
      {inquiryType === "hiring" && (
        <FormField label="Role title (optional)" error={errors.roleTitle?.message}>
          <input {...register("roleTitle")} placeholder="e.g. Senior Front-end Developer" className={fieldClass} />
        </FormField>
      )}
      {(inquiryType === "magento" || inquiryType === "general") && (
        <FormField label="Website URL (optional)" error={errors.websiteUrl?.message}>
          <input {...register("websiteUrl")} placeholder="https://" className={fieldClass} />
        </FormField>
      )}
      <FormField label="Message" error={errors.message?.message}>
        <textarea {...register("message")} rows={isLarge ? 7 : 5} className={fieldClass} />
      </FormField>
      <button
        type="submit"
        disabled={status === "loading"}
        className={buttonClass}
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      {status === "success" && <p className="text-cyan-400 text-sm">{statusMessage}</p>}
      {status === "error" && <p className="text-red-400 text-sm">{statusMessage}</p>}
    </form>
  )
}
