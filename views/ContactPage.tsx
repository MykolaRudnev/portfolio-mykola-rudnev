import { Suspense } from "react"
import { PageHeader } from "@/components/ui/PageHeader"
import GlassCard from "@/components/ui/GlassCard"
import { CtaButton } from "@/components/ui/CtaButton"
import { ContactForm } from "@/components/forms/ContactForm"
import { PAGE_CONTENT_CLASS } from "@/components/ui/page-container"
import { Providers } from "@/app/providers"
import { SectionSkeleton } from "@/components/ui/PageSkeleton"
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaArrowDown, FaCalendarAlt } from "react-icons/fa"
import { BOOKING_URL } from "@/constants/routes"

const CONTACT_FORM_ID = "contact-form"

export function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Hiring, Magento / Hyvä support, or a general question — use the form below to send a message."
      >
        <CtaButton href={`#${CONTACT_FORM_ID}`} event="cta_send_brief">
          <FaArrowDown className="text-sm" aria-hidden />
          Go to contact form
        </CtaButton>
      </PageHeader>

      <section className={`pb-24 ${PAGE_CONTENT_CLASS}`}>
        <GlassCard className="p-6 md:p-8 mb-10 border border-accent/25">
          <p className="text-ink-2 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            The fastest way to reach me is the{" "}
            <a
              href={`#${CONTACT_FORM_ID}`}
              className="text-accent font-medium hover:underline underline-offset-4"
            >
              contact form on this page
            </a>
            . Choose your inquiry type, add a short message, and I will get back to you by email.
          </p>
        </GlassCard>

        <div
          id={CONTACT_FORM_ID}
          className="scroll-mt-28 grid lg:grid-cols-5 gap-10 lg:gap-12 items-start"
        >
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-2">Send a message</h2>
            <p className="text-ink-2 text-sm mb-6">
              All fields marked without “optional” are required.
            </p>
            <GlassCard className="p-8 md:p-10 lg:p-12">
              <Providers>
                <Suspense fallback={<SectionSkeleton />}>
                  <ContactForm size="large" />
                </Suspense>
              </Providers>
            </GlassCard>
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-3">Direct contact</h2>
              <p className="text-ink-2 text-sm leading-relaxed mb-6">
                Prefer email or a call? You can also reach me here — but for project briefs and hiring,
                the form helps me respond faster with the right context.
              </p>
              <ContactLinks />
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

function ContactLinks() {
  return (
    <ul className="flex flex-col gap-4 text-ink-2">
      <li>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl bg-ink text-paper hover:bg-ink/85 transition-colors"
        >
          <FaCalendarAlt className="shrink-0" />
          <span className="text-sm">Book a 30-min call</span>
        </a>
      </li>
      <li>
        <a
          href="mailto:rudnevmykola@gmail.com"
          className="flex items-center gap-3 p-4 rounded-xl bg-paper-2 border border-rule hover:border-accent hover:text-accent transition-colors"
        >
          <FaEnvelope className="text-accent shrink-0" />
          <span className="text-sm break-all">rudnevmykola@gmail.com</span>
        </a>
      </li>
      <li>
        <a
          href="tel:+48790240418"
          className="flex items-center gap-3 p-4 rounded-xl bg-paper-2 border border-rule hover:border-accent hover:text-accent transition-colors"
        >
          <FaPhoneAlt className="text-accent shrink-0" />
          <span className="text-sm">+48 790 240 418</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/mykola-r-1525a5145/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl bg-paper-2 border border-rule hover:border-accent hover:text-accent transition-colors"
        >
          <FaLinkedin className="text-accent shrink-0" />
          <span className="text-sm">LinkedIn profile</span>
        </a>
      </li>
    </ul>
  )
}
