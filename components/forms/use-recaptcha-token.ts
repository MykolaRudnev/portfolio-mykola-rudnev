import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

export function useRecaptchaToken(action: string) {
  const { executeRecaptcha } = useGoogleReCaptcha()

  async function getToken(): Promise<string | undefined> {
    if (!executeRecaptcha) return undefined
    try {
      return await executeRecaptcha(action)
    } catch {
      return undefined
    }
  }

  return { getToken }
}
