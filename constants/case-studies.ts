export interface CaseStudyMetric {
  label: string
  before?: string
  after: string
}

export interface CaseStudyVisualProof {
  label: string
  beforeSrc?: string
  afterSrc?: string
  caption?: string
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
  liveUrl?: string
  visualProof?: CaseStudyVisualProof[]
}

export const detailedCaseStudies: CaseStudy[] = [
  {
    slug: "huber-se-hyva-migration",
    title: "HUBER SE — Adobe Commerce headless to Magento Open Source + Hyvä",
    client: "HUBER SE",
    industry: "Industrial / B2B equipment",
    projectType: "Storefront migration, redesign, and Hyvä rebuild",
    stack: [
      "Magento 2.4 Open Source",
      "Hyvä Theme",
      "Hyvä Checkout",
      "Hyvä CMS",
      "Alpine.js",
      "Tailwind CSS",
      "PHP",
    ],
    collaboration: "Started via Lufed IT, then direct freelance contract with HUBER SE",
    year: "2026",
    lang: "en",
    liveUrl: "https://shop.huber-se.com/",
    summary:
      "Sole frontend owner on a six-month rebuild: Adobe Commerce headless replaced with Magento Open Source, Hyvä Theme, Hyvä Checkout and Hyvä CMS. Catalog pages reach Lighthouse 99–100.",
    startingPoint:
      "The previous storefront ran on Adobe Commerce (Enterprise) as a headless setup. The business needed a maintainable open-source Magento stack, a full visual redesign, and a Hyvä storefront that marketing and SEO could actually own — without a long agency chain.",
    whatIDid: [
      {
        title: "Architecture & migration",
        items: [
          "Drove the frontend migration from Adobe Commerce headless to Magento Open Source with Hyvä Theme, Hyvä Checkout and Hyvä CMS.",
          "Owned the component system, layouts, translations and CMS-driven page structures used across the live store.",
          "Worked as the main frontend contact: turned business, SEO and marketing requirements into a sequenced delivery plan.",
        ],
      },
      {
        title: "Storefront delivery",
        items: [
          "Built the customer-facing layer end-to-end: home, PLP, PDP, cart, Hyvä Checkout, customer account, CMS and promotional content.",
          "Created frontend tasks for backend and frontend work, then implemented Magento modules together with backend (example: Cart Share from the cart — snapshot, review URL, live recipient prices, admin grid).",
          "Covered B2B flows around quotes, company accounts, multi-language store views and technical SEO (including product JSON-LD).",
        ],
      },
      {
        title: "Performance & quality",
        items: [
          "Tuned Core Web Vitals on catalog templates: category Performance 99, product Performance 100 (Lighthouse, Aug 2026).",
          "Homepage sits at 78 — FCP 0.6s, TBT 10ms, CLS 0; remaining gap is hero image payload (LCP), not JavaScript blocking.",
          "Playwright coverage on the Hyvä theme plus production verification after each release.",
        ],
      },
    ],
    outcome:
      "The Hyvä storefront went live after roughly six months of frontend work (January–July 2026). Catalog templates are in the green on Lighthouse; the stack is Magento Open Source rather than Adobe Commerce headless, with CMS and checkout that the client team can keep extending.",
    metrics: [
      { label: "Category page (Lighthouse)", after: "Performance 99" },
      { label: "Product page (Lighthouse)", after: "Performance 100" },
      { label: "Homepage (Lighthouse)", after: "78 — TBT 10ms, CLS 0" },
      { label: "PLP FCP / LCP", after: "0.6s / 0.6s" },
      { label: "Delivery", after: "Jan–Jul 2026 to production" },
      { label: "Stack", after: "Magento OS + Hyvä Theme / Checkout / CMS" },
    ],
    myRole:
      "Sole front-end owner and delivery lead: architecture, Hyvä UI, CMS, checkout, performance, technical SEO, task breakdown for backend, and custom Magento modules (including Cart Share) implemented with the backend developer.",
    seoTitle: "HUBER SE Case Study — Hyvä Migration & Lighthouse 99 | Mykola Rudnev",
    seoDescription:
      "Adobe Commerce headless migrated to Magento Open Source + Hyvä Theme, Checkout and CMS. Sole frontend owner, six months to production, Lighthouse 99–100 on catalog pages.",
    visualProof: [
      {
        label: "Live storefront — homepage",
        afterSrc: "/images/case-studies/huber-se/homepage.jpg",
        caption: "HUBER Digital Platform on Magento Open Source + Hyvä — hero, CMS content, category tiles.",
      },
      {
        label: "Live storefront — category (PLP)",
        afterSrc: "/images/case-studies/huber-se/plp.jpg",
        caption: "Manhole covers PLP: filters, product grid, Hyvä theme. Same template as the Lighthouse 99 run.",
      },
      {
        label: "Category page — Lighthouse",
        afterSrc: "/images/case-studies/huber-se/lighthouse-plp.png",
        caption:
          "Manhole covers PLP: Performance 99, Accessibility 91, Best Practices 96, SEO 92. FCP 0.6s, LCP 0.6s, TBT 70ms, CLS 0.",
      },
      {
        label: "Homepage — Lighthouse",
        afterSrc: "/images/case-studies/huber-se/lighthouse-homepage.png",
        caption:
          "Home Performance 78 is held back by hero image LCP (4.4s), not script cost — TBT 10ms and CLS 0.",
      },
    ],
  },
  {
    slug: "claspwell-magento-ai",
    title: "Claspwell — catalog-aware Magento 2 / Hyvä AI sales assistant",
    client: "Claspwell",
    industry: "B2B SaaS / Magento infrastructure",
    projectType: "Founder-built product: marketing site, API, widget, Magento module",
    stack: [
      "Next.js",
      "TypeScript",
      "Payload CMS",
      "PostgreSQL",
      "Fastify",
      "Alpine.js",
      "Magento 2 module",
      "Hyvä widget",
    ],
    collaboration: "Founder / solo builder — product, backend, frontend, Magento integration",
    year: "2026",
    lang: "en",
    liveUrl: "https://www.claspwell.com/",
    summary:
      "My own Magento 2 / Hyvä AI sales assistant: category-first catalog discovery, EU-hosted API, Alpine storefront widget, and a production Next.js site with Payload CMS.",
    startingPoint:
      "Generic website chatbots hallucinate stock and ignore Magento categories. Merchants on Magento 2 / Hyvä needed an assistant that resolves the category first, then searches live catalog data — with store isolation and no secrets in the browser.",
    whatIDid: [
      {
        title: "Product & architecture",
        items: [
          "Designed the product story: category-first Magento discovery, three-tier AI routing, Hyvä-ready widget, per-store isolation, EU hosting, high-touch install.",
          "Split the system into a thin Magento module, Alpine.js widget, and Node/Fastify backend with PostgreSQL and Redis.",
        ],
      },
      {
        title: "Production marketing site",
        items: [
          "Built claspwell.com in Next.js: domain, PostgreSQL, Payload CMS, auth, pricing, process, security and request-integration flows.",
          "Shipped the public site as a real production app, not a landing-page mock — CMS, database and onboarding paths included.",
        ],
      },
      {
        title: "Magento / Hyvä integration",
        items: [
          "Magento 2 module plus Alpine widget scoped by verified store_id, origin allow-list and session JWT after captcha.",
          "Catalog sync so replies use real SKUs, attributes and availability instead of crawled HTML.",
        ],
      },
    ],
    outcome:
      "A live product site and a Magento-native assistant architecture I own end-to-end — frontend, backend, CMS, module and widget. Recruiters see a shipped Next.js product; Magento clients see a catalog-aware Hyvä integration, not a generic JS chatbot.",
    metrics: [
      { label: "Role", after: "Founder / solo full-stack" },
      { label: "Surfaces", after: "Site + API + widget + Magento module" },
      { label: "Hosting", after: "EU, per-store isolation" },
      { label: "Site", after: "Next.js + Payload CMS in production" },
    ],
    myRole:
      "Founder and sole builder: product design, Next.js marketing site, Payload CMS, Fastify API, Alpine/Hyvä widget, Magento 2 module, production domain and database.",
    seoTitle: "Claspwell Case Study — Magento AI Sales Assistant | Mykola Rudnev",
    seoDescription:
      "Founder-built Magento 2 / Hyvä AI sales assistant: Next.js + Payload CMS site, Fastify API, Alpine widget and Magento module. Category-first catalog chat, EU-hosted.",
    visualProof: [
      {
        label: "Marketing site",
        afterSrc: "/images/case-studies/claspwell/homepage.jpg",
        caption: "Production Next.js site — product story, live widget preview, Magento 2 / Hyvä positioning.",
      },
      {
        label: "Pricing & plans",
        afterSrc: "/images/case-studies/claspwell/pricing.jpg",
        caption: "Per-store Magento plans shipped on the same Next.js + Payload stack.",
      },
    ],
  },
  {
    slug: "pixel25-shopify-garage",
    title: "Pixel25 — Shopify garage SaaS storefront",
    client: "Pixel25",
    industry: "Automotive / SaaS",
    projectType: "Custom Shopify theme — application-style garage UI",
    stack: ["Shopify", "Liquid", "JavaScript", "Custom sections & blocks", "JSON templates"],
    collaboration: "Custom theme from scratch on Liquid, Shopify Admin configuration",
    year: "2025–2026",
    lang: "en",
    summary:
      "Not a generic shop: an automotive garage SaaS storefront where AI-assisted garage creation for cars sits on a custom Shopify theme.",
    startingPoint:
      "The product needed a Shopify storefront that behaves more like an application than a brochure shop — custom Liquid sections, garage-style UI, and Admin-configurable blocks rather than an off-the-shelf theme.",
    whatIDid: [
      {
        title: "Custom theme",
        items: [
          "Built a custom Shopify theme from scratch in Liquid — sections, blocks, JSON templates and schema for the merchant Admin.",
          "Implemented application-style frontend components around the garage / vehicle-sales flow, not only homepage merchandising.",
        ],
      },
      {
        title: "Storefront scope",
        items: [
          "Homepage, collection/PLP, product/PDP, header, footer and reusable UI wired through Shopify Admin.",
          "Responsive components and production-minded theme structure for an in-development SaaS storefront.",
        ],
      },
    ],
    outcome:
      "A custom Liquid theme that can host an AI garage workflow on Shopify — closer to a product UI than a standard theme customization. Still in development; screenshots can be refreshed when a public URL is stable.",
    metrics: [
      { label: "Platform", after: "Shopify custom theme" },
      { label: "Build", after: "Liquid sections & blocks from scratch" },
      { label: "Shape", after: "Garage SaaS, not a catalog-only shop" },
    ],
    myRole:
      "Shopify theme developer — custom Liquid architecture, Admin schema, garage-oriented UI components.",
    seoTitle: "Pixel25 Case Study — Shopify Garage SaaS Theme | Mykola Rudnev",
    seoDescription:
      "Custom Shopify theme in Liquid for an automotive garage SaaS storefront — application-style sections, Admin configuration, AI garage flow.",
  },
  {
    slug: "glasy-shopify-storefront",
    title: "Glasy — custom Shopify eyewear storefront",
    client: "Glasy",
    industry: "E-commerce / eyewear",
    projectType: "Custom Shopify theme from scratch",
    stack: ["Shopify", "Liquid", "JavaScript", "Custom sections & blocks"],
    collaboration: "From-scratch Shopify theme — homepage, PLP, header, footer, Admin",
    year: "2025–2026",
    lang: "en",
    liveUrl: "https://glasy.pl/",
    summary:
      "Live eyewear store on a custom Shopify theme built from scratch — homepage, collections, header/footer and Admin-configurable sections.",
    startingPoint:
      "Glasy needed a production Shopify storefront for eyewear, not a lightly restyled preset theme. Work started from a blank custom theme: Liquid sections, navigation, merchandising blocks and Admin configuration.",
    whatIDid: [
      {
        title: "Theme from scratch",
        items: [
          "Custom homepage elements, collection/PLP improvements, header, footer and core theme functionality in Liquid.",
          "Shopify Admin configuration so merchandising and sections are editable without a developer on every copy change.",
        ],
      },
      {
        title: "Storefront coverage",
        items: [
          "Pages, footer, reusable components and custom elements across the live shop.",
          "Responsive layout and production UX for a Polish-language storefront (glasy.pl).",
        ],
      },
    ],
    outcome:
      "Live store at glasy.pl on a custom Liquid theme. No public conversion metrics — the proof is the shipped storefront, from first pages through Admin-driven sections.",
    metrics: [
      { label: "Status", after: "Live — glasy.pl" },
      { label: "Theme", after: "Custom Liquid from scratch" },
      { label: "Scope", after: "Home, PLP, header, footer, Admin sections" },
    ],
    myRole:
      "Shopify developer — custom theme, Liquid sections/blocks, storefront pages and Admin configuration.",
    seoTitle: "Glasy Case Study — Custom Shopify Eyewear Theme | Mykola Rudnev",
    seoDescription:
      "Custom Shopify theme from scratch for Glasy eyewear: Liquid sections, PLP, header/footer and Admin configuration. Live at glasy.pl.",
    visualProof: [
      {
        label: "Live storefront",
        afterSrc: "/images/projects/shopify/glasy.jpg",
        caption: "Production Shopify storefront — custom header, merchandising and collection entry points.",
      },
    ],
  },
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
    liveUrl: "https://www.hrk.pl/",
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
    liveUrl: "https://ponadczasowi.pl/",
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
