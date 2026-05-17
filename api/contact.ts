import type { VercelRequest, VercelResponse } from "@vercel/node"
import { Resend } from "resend"

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify"
const SCORE_THRESHOLD = 0.5

interface ContactBody {
  formType: string
  recaptchaToken?: string
  [key: string]: string | undefined
}

async function verifyRecaptcha(token: string, secret: string): Promise<boolean> {
  const response = await fetch(RECAPTCHA_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  })
  const data = (await response.json()) as { success?: boolean; score?: number }
  if (!data.success) return false
  if (typeof data.score === "number" && data.score < SCORE_THRESHOLD) return false
  return true
}

function formatEmailBody(body: ContactBody): string {
  const { formType, recaptchaToken: _, ...fields } = body
  return Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const body = req.body as ContactBody
  if (!body?.formType) return res.status(400).json({ error: "Missing form type" })

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
  if (recaptchaSecret && body.recaptchaToken) {
    const isValid = await verifyRecaptcha(body.recaptchaToken, recaptchaSecret)
    if (!isValid) return res.status(400).json({ error: "reCAPTCHA verification failed" })
  }

  const resendKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "rudnevmykola@gmail.com"

  if (!resendKey) {
    console.info("Contact form submission (no RESEND_API_KEY):", body)
    return res.status(200).json({ message: "Message received (dev mode)" })
  }

  const resend = new Resend(resendKey)
  const subject = `[mrudnev.com] ${body.formType} — new inquiry`

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to: [toEmail],
    subject,
    text: formatEmailBody(body),
  })

  if (error) {
    console.error("Resend error:", error)
    return res.status(500).json({ error: "Failed to send email" })
  }

  return res.status(200).json({ message: "Message sent successfully" })
}
