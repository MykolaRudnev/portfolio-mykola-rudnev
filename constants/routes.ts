export const SITE_URL = "https://www.mrudnev.com"

export const ROUTES = {
  home: "/",
  about: "/about",
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
  ROUTES.about,
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
    title: "Mykola Rudnev | Hire a Senior Front-End Engineer — React, Next.js, Magento 2 / Hyvä",
    description:
      "Hire Mykola Rudnev — senior front-end engineer for React / Next.js product teams and Magento 2 / Hyvä storefronts. Remote B2B, EU. HUBER SE Hyvä rebuild, Claspwell, case studies.",
    lang: "en",
  },
  {
    path: ROUTES.about,
    title: "Who is Mykola Rudnev? | Senior Front-End Engineer to Hire",
    description:
      "Mykola Rudnev is a senior front-end engineer in Lublin, Poland. Hire him for React, Next.js, TypeScript, Magento 2 / Hyvä and Shopify — remote B2B with English- and Polish-speaking teams across the EU.",
    lang: "en",
  },
  {
    path: ROUTES.frontendDeveloper,
    title: "Hire a Senior Front-End Developer (React / Next.js) | Mykola Rudnev",
    description:
      "Need to hire a senior front-end developer? Mykola Rudnev ships React, Next.js, TypeScript and e-commerce UIs — plus Claspwell, a production Next.js product. Available for B2B / remote EU roles.",
    lang: "en",
  },
  {
    path: ROUTES.magentoSupport,
    title: "Hire a Magento 2 / Hyvä Frontend Developer | Mykola Rudnev",
    description:
      "Hire a Magento 2 / Hyvä frontend developer directly: Hyvä migrations (HUBER SE, Lighthouse 99–100 on catalog), checkout/CMS, Core Web Vitals, ongoing support. No agency layers.",
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
      "Magento 2, Hyvä, Shopify, React and Next.js projects with measurable outcomes — HUBER SE Lighthouse 99, Claspwell, Glasy, HRK and more.",
    lang: "en",
  },
  {
    path: ROUTES.contact,
    title: "Contact | Mykola Rudnev",
    description:
      "Get in touch to hire Mykola Rudnev — B2B senior front-end roles, Magento 2 / Hyvä support, or a general question.",
    lang: "en",
  },
]

export function getPageSeo(pathname: string): PageSeoMeta | undefined {
  if (pathname.startsWith("/case-studies/") && pathname !== ROUTES.caseStudies)
    return undefined
  return PAGE_SEO.find((page) => page.path === pathname)
}
