import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

interface RecaptchaWrapperProps {
  children: React.ReactNode
}

const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? ""

export function RecaptchaWrapper({ children }: RecaptchaWrapperProps) {
  if (!siteKey) return <>{children}</>

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  )
}
