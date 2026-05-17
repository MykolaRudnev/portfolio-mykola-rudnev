export interface CaseStudyMetric {
  label: string
  before?: string
  after: string
}

export interface CaseStudySection {
  title: string
  items: string[]
}

export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  projectType: string
  stack: string[]
  collaboration: string
  year: string
  lang: "en"
  summary: string
  startingPoint: string
  whatIDid: CaseStudySection[]
  outcome: string
  metrics: CaseStudyMetric[]
  myRole: string
  seoTitle: string
  seoDescription: string
}

export const detailedCaseStudies: CaseStudy[] = [
  {
    slug: "hrk-seo-growth",
    title: "HRK — recruitment platform SEO & performance",
    client: "HRK",
    industry: "Recruitment / HR tech",
    projectType: "Gatsby.js platform rebuild & SEO",
    stack: ["Gatsby.js", "TypeScript", "GraphQL", "WordPress"],
    collaboration: "B2B contract, frontend ownership",
    year: "2023",
    lang: "en",
    summary:
      "Scalable recruitment platform with measurable organic growth after technical SEO and frontend improvements.",
    startingPoint:
      "HRK needed a faster, SEO-friendly recruitment site. Organic visibility was limited and key landing pages underperformed on mobile. The team wanted a maintainable frontend without sacrificing content flexibility from WordPress.",
    whatIDid: [
      {
        title: "Analysis & architecture",
        items: [
          "Audited page templates, Core Web Vitals risks and crawlability blockers.",
          "Structured reusable Gatsby templates for job listings and content pages.",
        ],
      },
      {
        title: "Implementation",
        items: [
          "Built scalable listing and detail pages with TypeScript and GraphQL.",
          "Improved internal linking, metadata and semantic HTML for key templates.",
        ],
      },
      {
        title: "Performance & SEO",
        items: [
          "Optimized images, bundle splitting and critical rendering path.",
          "Implemented technical SEO improvements aligned with content team workflows.",
        ],
      },
    ],
    outcome:
      "Delivered a production-ready platform with stronger mobile performance and a clear SEO foundation. Organic traffic increased by approximately 50% within three months after launch-focused optimizations (executive metric, not client-confidential KPI).",
    metrics: [
      { label: "Organic traffic", after: "~+50% in 3 months" },
      { label: "Delivery", after: "Full frontend templates + SEO pass" },
      { label: "Stack", after: "Gatsby + TypeScript + GraphQL" },
    ],
    myRole:
      "Sole front-end developer on Gatsby implementation, template architecture, performance and technical SEO execution.",
    seoTitle: "HRK Case Study — Gatsby SEO & +50% Organic Traffic | Mykola Rudnev",
    seoDescription:
      "How frontend and technical SEO work on a Gatsby recruitment platform drove measurable organic growth.",
  },
  {
    slug: "ponadczasowi-nextjs-ecommerce",
    title: "Ponadczasowi — Next.js e-commerce checkout & performance",
    client: "Ponadczasowi",
    industry: "E-commerce / watches",
    projectType: "Next.js storefront",
    stack: ["Next.js", "React", "SCSS"],
    collaboration: "Direct B2B, end-to-end frontend",
    year: "2024",
    lang: "en",
    summary:
      "Watch retailer on Next.js — checkout, payments, shipping, and mobile performance optimizations.",
    startingPoint:
      "The store needed a modern frontend with a full purchase flow and better mobile responsiveness. Previous solutions created checkout friction and slower loading on key product pages.",
    whatIDid: [
      {
        title: "Store implementation",
        items: [
          "Built key product and category pages with a mobile-first UX focus.",
          "Implemented checkout, payment integrations, and shipping methods.",
        ],
      },
      {
        title: "Performance",
        items: [
          "Code splitting and lazy loading for heavier modules.",
          "Asset and rendering path optimization on mobile.",
        ],
      },
    ],
    outcome:
      "A stable store with a complete purchase flow, improved responsiveness, and faster perceived loading on mobile — ready for further growth without a full rebuild.",
    metrics: [
      { label: "Scope", after: "Checkout + payments + shipping" },
      { label: "Optimization", after: "Code splitting + lazy loading" },
      { label: "Platform", after: "Next.js production storefront" },
    ],
    myRole:
      "Front-end developer — UI implementation, checkout, integrations, and performance optimization.",
    seoTitle: "Ponadczasowi Case Study — Next.js E-commerce | Mykola Rudnev",
    seoDescription:
      "Next.js storefront delivery with checkout, payments, and mobile performance optimization for e-commerce.",
  },
]

/** @deprecated use detailedCaseStudies */
export const caseStudies = detailedCaseStudies

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return detailedCaseStudies.find((study) => study.slug === slug)
}
