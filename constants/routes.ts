export const SITE_URL = "https://www.mrudnev.com"

export const ROUTES = {
  home: "/",
  frontendDeveloper: "/frontend-developer",
  magentoSupport: "/magento-hyva-support",
  pricing: "/pricing",
  emergencySupport: "/emergency-support",
  caseStudies: "/case-studies",
  caseStudyDetail: (slug: string) => `/case-studies/${slug}`,
  contact: "/contact",
} as const

export const ALL_ROUTES = [
  ROUTES.home,
  ROUTES.frontendDeveloper,
  ROUTES.magentoSupport,
  ROUTES.pricing,
  ROUTES.emergencySupport,
  ROUTES.caseStudies,
  ROUTES.contact,
] as const

export interface PageSeoMeta {
  path: string
  title: string
  description: string
  lang: "en"
}

export const PAGE_SEO: PageSeoMeta[] = [
  {
    path: ROUTES.home,
    title: "Mykola Rudnev | Front-end Developer and Magento 2 / Hyvä Support",
    description:
      "Front-end Developer for React / Next.js teams and direct Magento 2 / Hyvä support for e-commerce stores. Case studies, availability and direct contact.",
    lang: "en",
  },
  {
    path: ROUTES.frontendDeveloper,
    title: "Senior Front-end Developer React / Next.js / TypeScript | Mykola Rudnev",
    description:
      "Senior Front-end Developer with React, Next.js, TypeScript and e-commerce experience. Available for B2B roles, product teams and fast-moving frontend work.",
    lang: "en",
  },
  {
    path: ROUTES.magentoSupport,
    title: "Magento 2 / Hyvä Support — Direct Frontend Help | Mykola Rudnev",
    description:
      "Direct Magento 2 / Hyvä frontend support: fixes, new sections, performance, checkout/CMS, and ongoing maintenance. No agency layers.",
    lang: "en",
  },
  {
    path: ROUTES.pricing,
    title: "Engagement Models — Magento 2 / Hyvä & Front-end | Mykola Rudnev",
    description:
      "Audit, implementation sprint, or ongoing support. Choose the right model to start working on Magento 2 / Hyvä or front-end projects.",
    lang: "en",
  },
  {
    path: ROUTES.emergencySupport,
    title: "Urgent Magento 2 / Hyvä Support | Mykola Rudnev",
    description:
      "Urgent storefront issue on Magento 2 / Hyvä? Send your store URL and a short description. I will assess quickly whether I can help.",
    lang: "en",
  },
  {
    path: ROUTES.caseStudies,
    title: "Case Studies & Projects | Mykola Rudnev",
    description:
      "Magento 2, Hyvä, and React / Next.js projects with measurable outcomes — performance, delivery and frontend ownership.",
    lang: "en",
  },
  {
    path: ROUTES.contact,
    title: "Contact | Mykola Rudnev",
    description:
      "Get in touch for B2B front-end roles, Magento 2 / Hyvä support, or general inquiries.",
    lang: "en",
  },
]

export function getPageSeo(pathname: string): PageSeoMeta | undefined {
  if (pathname.startsWith("/case-studies/") && pathname !== ROUTES.caseStudies)
    return undefined
  return PAGE_SEO.find((page) => page.path === pathname)
}
