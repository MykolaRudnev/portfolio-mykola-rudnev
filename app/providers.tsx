"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

interface ProvidersProps {
  children: React.ReactNode
}

const siteKey = process.env.VITE_RECAPTCHA_SITE_KEY ?? ""

export function Providers({ children }: ProvidersProps) {
  if (!siteKey) return <>{children}</>

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  )
}
