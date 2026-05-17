export type AnalyticsEvent =
  | "cta_frontend_hire"
  | "cta_magento_support"
  | "cta_book_call"
  | "cta_download_cv"
  | "cta_send_brief"
  | "cta_emergency"
  | "form_submit_contact"
  | "form_submit_recruiter"
  | "form_submit_client"
  | "form_submit_emergency"

interface UmamiTracker {
  track?: (event: string) => void
}

export function trackEvent(event: AnalyticsEvent): void {
  const umami = (window as Window & { umami?: UmamiTracker }).umami
  if (umami?.track) umami.track(event)
}
