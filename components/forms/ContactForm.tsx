"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, inputClassName } from "./FormField"
import { useRecaptchaToken } from "./use-recaptcha-token"
import { submitContactForm, type ContactFormType } from "@/lib/contact-api"
import { trackEvent } from "@/lib/analytics"
import { FormStatusMessage } from "./FormStatusMessage"

const consentSchema = z.literal(true, { message: "Consent is required" })

const recruiterSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().min(1, "Company is required"),
  yourRole: z.string().optional(),
  workModel: z.string().optional(),
  roleTitle: z.string().min(1, "Role title is required"),
  stackContext: z.string().optional(),
  contractType: z.string().optional(),
  budgetRange: z.string().optional(),
  expectedStart: z.string().optional(),
  jdUrl: z.string().optional(),
  message: z.string().min(10, "Please add a short message"),
  consent: consentSchema,
})

const clientSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  websiteUrl: z.string().min(4, "Store URL is required"),
  platform: z.enum(["magento2", "adobe_commerce", "hyva", "unknown"], { message: "Select platform" }),
  needType: z.enum(["support", "development", "audit", "urgent"], { message: "Select need type" }),
  mainProblem: z.string().min(10, "Describe the main problem"),
  scope: z.string().optional(),
  preferredModel: z.enum(["sprint", "retainer", "audit"], { message: "Select preferred model" }),
  timeline: z.string().optional(),
  message: z.string().optional(),
  consent: consentSchema,
})

const generalSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  websiteUrl: z.string().optional(),
  message: z.string().min(10, "Please add a short message"),
  consent: consentSchema,
})

type TabId = "recruiter" | "client" | "general"
type RecruiterData = z.infer<typeof recruiterSchema>
type ClientData = z.infer<typeof clientSchema>
type GeneralData = z.infer<typeof generalSchema>

const TABS: { id: TabId; label: string }[] = [
  { id: "recruiter", label: "Recruiter / hiring" },
  { id: "client", label: "Magento / Hyvä client" },
  { id: "general", label: "General" },
]

interface ContactFormProps {
  size?: "default" | "large"
  defaultTab?: TabId
}

export function ContactForm({ size = "default", defaultTab = "general" }: ContactFormProps) {
  const [activeTab, setActiveTab] = useState<TabId>(defaultTab)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const { getToken } = useRecaptchaToken("contact_form")

  const isLarge = size === "large"
  const fieldClass = isLarge ? `${inputClassName} py-3.5 md:py-4 text-base` : inputClassName
  const buttonClass = isLarge
    ? "w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black text-base font-semibold hover:bg-gray-200 disabled:opacity-50"
    : "px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 disabled:opacity-50"

  async function submitPayload(
    formType: ContactFormType,
    fields: Record<string, string | undefined>,
    onSuccess?: () => void
  ) {
    setStatus("loading")
    const recaptchaToken = await getToken()
    const result = await submitContactForm({
      formType,
      recaptchaToken,
      consent: "yes",
      ...fields,
    })

    if (!result.ok) {
      setStatus("error")
      setStatusMessage(result.message)
      return
    }

    trackEvent("form_submit_contact")
    onSuccess?.()
    setStatus("success")
    setStatusMessage(result.message)
  }

  return (
    <div className={isLarge ? "flex flex-col gap-6" : "flex flex-col gap-5"}>
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4" role="tablist" aria-label="Inquiry type">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => {
              setActiveTab(tab.id)
              setStatus("idle")
              setStatusMessage("")
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-white text-black"
                : "bg-white/5 text-gray-400 hover:text-white border border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "recruiter" && (
        <RecruiterForm
          fieldClass={fieldClass}
          buttonClass={buttonClass}
          status={status}
          onSubmit={(data) =>
            submitPayload(
              "recruiter",
              { ...data, consent: "yes" },
              () => trackEvent("form_submit_recruiter")
            )
          }
        />
      )}
      {activeTab === "client" && (
        <ClientForm
          fieldClass={fieldClass}
          buttonClass={buttonClass}
          status={status}
          onSubmit={(data) =>
            submitPayload("client", { ...data, consent: "yes" }, () => trackEvent("form_submit_client"))
          }
        />
      )}
      {activeTab === "general" && (
        <GeneralForm
          fieldClass={fieldClass}
          buttonClass={buttonClass}
          status={status}
          onSubmit={(data) => submitPayload("contact", { ...data, consent: "yes", inquiryType: "general" })}
        />
      )}

      <FormStatusMessage status={status} message={statusMessage} />
    </div>
  )
}

interface SubFormProps<T> {
  fieldClass: string
  buttonClass: string
  status: "idle" | "loading" | "success" | "error"
  onSubmit: (data: T) => Promise<void>
}

function RecruiterForm({ fieldClass, buttonClass, status, onSubmit }: SubFormProps<RecruiterData>) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RecruiterData>({ resolver: zodResolver(recruiterSchema) })

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await onSubmit(data)
        reset()
      })}
      className="flex flex-col gap-5"
    >
      <FormField label="Name" error={errors.name?.message}>
        {(field) => <input {...register("name")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Email" error={errors.email?.message}>
        {(field) => <input type="email" {...register("email")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Company" error={errors.company?.message}>
        {(field) => <input {...register("company")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Your role" error={errors.yourRole?.message}>
        {(field) => <input {...register("yourRole")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Work model" error={errors.workModel?.message}>
        {(field) => (
          <input {...register("workModel")} {...field} placeholder="Remote / hybrid / onsite" className={fieldClass} />
        )}
      </FormField>
      <FormField label="Role title" error={errors.roleTitle?.message}>
        {(field) => <input {...register("roleTitle")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Stack / team context" error={errors.stackContext?.message}>
        {(field) => <textarea {...register("stackContext")} {...field} rows={2} className={fieldClass} />}
      </FormField>
      <FormField label="Contract type" error={errors.contractType?.message}>
        {(field) => (
          <input {...register("contractType")} {...field} placeholder="B2B / employment" className={fieldClass} />
        )}
      </FormField>
      <FormField label="Budget / rate range" error={errors.budgetRange?.message}>
        {(field) => <input {...register("budgetRange")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Expected start" error={errors.expectedStart?.message}>
        {(field) => <input {...register("expectedStart")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="JD URL" error={errors.jdUrl?.message}>
        {(field) => <input {...register("jdUrl")} {...field} placeholder="https://" className={fieldClass} />}
      </FormField>
      <FormField label="Message" error={errors.message?.message}>
        {(field) => <textarea {...register("message")} {...field} rows={4} className={fieldClass} />}
      </FormField>
      <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
        <input type="checkbox" {...register("consent")} className="mt-1 rounded border-white/20" />
        <span>I agree to be contacted about this inquiry.</span>
      </label>
      {errors.consent?.message && <p className="text-sm text-red-400">{errors.consent.message}</p>}
      <SubmitButton status={status} className={buttonClass} label="Send message" />
    </form>
  )
}

function ClientForm({ fieldClass, buttonClass, status, onSubmit }: SubFormProps<ClientData>) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClientData>({ resolver: zodResolver(clientSchema) })

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await onSubmit(data)
        reset()
      })}
      className="flex flex-col gap-5"
    >
      <FormField label="Name" error={errors.name?.message}>
        {(field) => <input {...register("name")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Email" error={errors.email?.message}>
        {(field) => <input type="email" {...register("email")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Company (optional)" error={errors.company?.message}>
        {(field) => <input {...register("company")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Store URL" error={errors.websiteUrl?.message}>
        {(field) => <input {...register("websiteUrl")} {...field} placeholder="https://" className={fieldClass} />}
      </FormField>
      <FormField label="Platform" error={errors.platform?.message}>
        {(field) => (
          <select {...register("platform")} {...field} className={fieldClass} defaultValue="">
            <option value="" disabled>Select</option>
            <option value="magento2">Magento 2</option>
            <option value="adobe_commerce">Adobe Commerce</option>
            <option value="hyva">Hyvä</option>
            <option value="unknown">Not sure</option>
          </select>
        )}
      </FormField>
      <FormField label="Type of need" error={errors.needType?.message}>
        {(field) => (
          <select {...register("needType")} {...field} className={fieldClass} defaultValue="">
            <option value="" disabled>Select</option>
            <option value="support">Support</option>
            <option value="development">Development</option>
            <option value="audit">Audit</option>
            <option value="urgent">Urgent</option>
          </select>
        )}
      </FormField>
      <FormField label="Main problem" error={errors.mainProblem?.message}>
        {(field) => <textarea {...register("mainProblem")} {...field} rows={3} className={fieldClass} />}
      </FormField>
      <FormField label="Scope / task list" error={errors.scope?.message}>
        {(field) => <textarea {...register("scope")} {...field} rows={3} className={fieldClass} />}
      </FormField>
      <FormField label="Preferred model" error={errors.preferredModel?.message}>
        {(field) => (
          <select {...register("preferredModel")} {...field} className={fieldClass} defaultValue="">
            <option value="" disabled>Select</option>
            <option value="sprint">Sprint</option>
            <option value="retainer">Ongoing support</option>
            <option value="audit">Audit</option>
          </select>
        )}
      </FormField>
      <FormField label="Timeline" error={errors.timeline?.message}>
        {(field) => <input {...register("timeline")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Additional message" error={errors.message?.message}>
        {(field) => <textarea {...register("message")} {...field} rows={2} className={fieldClass} />}
      </FormField>
      <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
        <input type="checkbox" {...register("consent")} className="mt-1 rounded border-white/20" />
        <span>I agree to be contacted about this inquiry.</span>
      </label>
      {errors.consent?.message && <p className="text-sm text-red-400">{errors.consent.message}</p>}
      <SubmitButton status={status} className={buttonClass} label="Send brief" />
    </form>
  )
}

function GeneralForm({ fieldClass, buttonClass, status, onSubmit }: SubFormProps<GeneralData>) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GeneralData>({ resolver: zodResolver(generalSchema) })

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await onSubmit(data)
        reset()
      })}
      className="flex flex-col gap-5"
    >
      <FormField label="Name" error={errors.name?.message}>
        {(field) => <input {...register("name")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Email" error={errors.email?.message}>
        {(field) => <input type="email" {...register("email")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Company (optional)" error={errors.company?.message}>
        {(field) => <input {...register("company")} {...field} className={fieldClass} />}
      </FormField>
      <FormField label="Website URL (optional)" error={errors.websiteUrl?.message}>
        {(field) => <input {...register("websiteUrl")} {...field} placeholder="https://" className={fieldClass} />}
      </FormField>
      <FormField label="Message" error={errors.message?.message}>
        {(field) => <textarea {...register("message")} {...field} rows={5} className={fieldClass} />}
      </FormField>
      <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
        <input type="checkbox" {...register("consent")} className="mt-1 rounded border-white/20" />
        <span>I agree to be contacted about this inquiry.</span>
      </label>
      {errors.consent?.message && <p className="text-sm text-red-400">{errors.consent.message}</p>}
      <SubmitButton status={status} className={buttonClass} label="Send message" />
    </form>
  )
}

function SubmitButton({
  status,
  className,
  label,
}: {
  status: string
  className: string
  label: string
}) {
  return (
    <button type="submit" disabled={status === "loading"} className={className} aria-busy={status === "loading"}>
      {status === "loading" ? "Sending…" : label}
    </button>
  )
}
