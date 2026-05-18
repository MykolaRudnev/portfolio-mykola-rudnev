import { NextResponse } from "next/server"
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
  const { formType, recaptchaToken: _, consent: __, ...fields } = body
  return Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactBody
  if (!body?.formType) return NextResponse.json({ error: "Missing form type" }, { status: 400 })

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY
  if (recaptchaSecret && body.recaptchaToken) {
    const isValid = await verifyRecaptcha(body.recaptchaToken, recaptchaSecret)
    if (!isValid) return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "rudnevmykola@gmail.com"

  if (!resendKey) {
    console.info("Contact form submission (no RESEND_API_KEY):", body)
    return NextResponse.json({ message: "Message received (dev mode)" })
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
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }

  return NextResponse.json({ message: "Message sent successfully" })
}
