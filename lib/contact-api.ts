export type ContactFormType = "contact" | "recruiter" | "client" | "emergency" | "qualify"

export interface ContactPayload {
  formType: ContactFormType
  recaptchaToken?: string
  [key: string]: string | undefined
}

export async function submitContactForm(payload: ContactPayload): Promise<{ ok: boolean; message: string }> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const data = (await response.json()) as { message?: string; error?: string }

  if (!response.ok)
    return { ok: false, message: data.error ?? data.message ?? "Failed to send message" }

  return { ok: true, message: data.message ?? "Message sent successfully" }
}
