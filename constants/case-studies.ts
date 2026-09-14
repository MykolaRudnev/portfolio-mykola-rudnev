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
  year?: string
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
    slug: "ponadczasowi-nextjs-ecommerce",
    title: "Ponadczasowi — Next.js e-commerce checkout & performance",
    client: "Ponadczasowi",
    industry: "E-commerce / watches",
    projectType: "Next.js storefront",
    stack: ["Next.js", "React", "SCSS"],
    collaboration: "Direct B2B, end-to-end frontend",
    year: "2025",
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
          "Structured reusable Gatsby templates for job listings and content pages using Atomic Design architecture.",
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
      "Sole front-end developer on Gatsby implementation, Atomic Design component architecture, reusable templates, performance and technical SEO execution.",
    seoTitle: "HRK Case Study — Gatsby SEO & +50% Organic Traffic | Mykola Rudnev",
    seoDescription:
      "How frontend and technical SEO work on a Gatsby recruitment platform drove measurable organic growth.",
  },
  {
    "slug": "pmi-careers-react-nextjs",
    "title": "PMI Careers — React build and Next.js migration",
    "client": "PMI Careers",
    "industry": "Recruitment",
    "projectType": "React build and Next.js migration",
    "stack": [
      "React",
      "Next.js",
      "TypeScript",
      "Styled Components",
      "REST API"
    ],
    "collaboration": "Frontend developer — React implementation and subsequent Next.js migration.",
    "lang": "en",
    "summary": "Built a recruitment site in React in 2023–2024, then migrated it to Next.js after a year of use. The client later took it offline.",
    "startingPoint": "The recruitment website needed a complete React frontend. After a year in use, the project moved to Next.js.",
    "whatIDid": [
      {
        "title": "React implementation",
        "items": [
          "Built the site pages and custom UI components in React.",
          "Delivered the frontend used by PMI Careers in production."
        ]
      },
      {
        "title": "Next.js migration",
        "items": [
          "Migrated the existing React website to Next.js after its first year of use.",
          "Adapted the pages and custom components to the new application."
        ]
      }
    ],
    "outcome": "Delivered working React and Next.js versions. The site is no longer available because PMI Careers subsequently disconnected it from production.",
    "metrics": [
      {
        "label": "Platform",
        "after": "React"
      },
      {
        "label": "Scope",
        "after": "React build and Next.js migration"
      }
    ],
    "myRole": "Frontend developer — React implementation and subsequent Next.js migration.",
    "seoTitle": "PMI Careers Case Study | Mykola Rudnev",
    "seoDescription": "Built a recruitment site in React in 2023–2024, then migrated it to Next.js after a year of use. The client later took it offline.",
    "year": "2023–2024"
  },
  {
    "slug": "warmsome-shopify-mvp",
    "title": "Warmsome — Shopify storefront completion for MVP",
    "client": "Warmsome",
    "industry": "E-commerce",
    "projectType": "Existing Shopify storefront completed for MVP",
    "stack": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML/CSS"
    ],
    "collaboration": "Frontend contributor — final stage of storefront development",
    "lang": "en",
    "liveUrl": "https://warmsome.com/",
    "summary": "Joined an existing Shopify build and completed approximately the final 30% of the storefront: homepage updates, category and product pages, and MVP delivery.",
    "startingPoint": "The storefront was already in development with most of the implementation in place. The remaining work needed to be completed before the store could reach its MVP release.",
    "whatIDid": [
      {
        "title": "Storefront completion",
        "items": [
          "Updated the homepage within the existing Shopify theme.",
          "Completed the category and product pages needed for the MVP."
        ]
      },
      {
        "title": "MVP delivery",
        "items": [
          "Worked within the existing implementation to finish the remaining storefront scope.",
          "Helped take the project from an unfinished development build to a completed MVP."
        ]
      }
    ],
    "outcome": "Completed the remaining storefront work and helped the team deliver the MVP. My contribution covered approximately the final 30% of storefront development.",
    "metrics": [
      {
        "label": "Contribution",
        "after": "Final ~30% of storefront"
      },
      {
        "label": "Pages",
        "after": "Homepage, category and product"
      },
      {
        "label": "Delivery",
        "after": "MVP completed"
      }
    ],
    "myRole": "Shopify frontend developer — homepage updates, category and product page completion, and final storefront work for MVP.",
    "seoTitle": "Warmsome Case Study — Shopify MVP Delivery | Mykola Rudnev",
    "seoDescription": "Completing the final stage of a Shopify storefront: homepage updates, category and product pages, and MVP delivery for Warmsome."
  },
  {
    "slug": "housetipster-magento-b2b",
    "title": "Housetipster — Custom Magento Blank storefront and B2B functionality",
    "client": "Housetipster",
    "industry": "B2B e-commerce",
    "projectType": "Custom Magento Blank storefront and B2B functionality",
    "stack": [
      "Magento 2",
      "Magento Blank",
      "JavaScript",
      "jQuery",
      "LESS/SASS",
      "XML"
    ],
    "collaboration": "Frontend developer — all storefront pages, custom styling and B2B customer interfaces.",
    "lang": "en",
    "summary": "Built a fully custom Magento Blank storefront across all page types, with extensive B2B functionality and a B2B customer management panel. Delivered on time; the project later closed.",
    "startingPoint": "The project started from Magento Blank and required a fully custom storefront design, styling and B2B customer functionality.",
    "whatIDid": [
      {
        "title": "Complete storefront",
        "items": [
          "Implemented custom designs and styling from scratch on Magento Blank.",
          "Built the homepage, category and product pages, CMS content pages and customer account pages."
        ]
      },
      {
        "title": "Custom B2B functionality",
        "items": [
          "Developed custom B2B logic and interfaces throughout the storefront.",
          "Built a management panel for B2B customers and the associated account interfaces."
        ]
      }
    ],
    "outcome": "Completed the storefront and custom B2B scope on schedule. The project has since closed; this case study documents the delivered work.",
    "metrics": [
      {
        "label": "Platform",
        "after": "Magento 2"
      },
      {
        "label": "Scope",
        "after": "Custom Magento Blank storefront and B2B functionality"
      }
    ],
    "myRole": "Frontend developer — all storefront pages, custom styling and B2B customer interfaces.",
    "seoTitle": "Housetipster Case Study | Mykola Rudnev",
    "seoDescription": "Built a fully custom Magento Blank storefront across all page types, with extensive B2B functionality and a B2B customer management panel. Delivered on time; the project later closed."
  },
  {
    "slug": "solar-magento-redesign",
    "title": "Solar — Magento storefront redesign and CMS handover",
    "client": "Solar",
    "industry": "E-commerce / fashion",
    "projectType": "Magento storefront redesign and CMS handover",
    "stack": [
      "Magento 2",
      "JavaScript",
      "jQuery",
      "XML"
    ],
    "collaboration": "Frontend contributor during the initial redesign phase — categories, CMS pages and client training.",
    "lang": "en",
    "summary": "Contributed at the start of a complete Magento redesign: custom category pages, CMS page preparation and training for the client’s content editors.",
    "startingPoint": "Solar was undertaking a complete storefront redesign. My involvement began in the early phase, with category and CMS work alongside client support.",
    "whatIDid": [
      {
        "title": "Redesign implementation",
        "items": [
          "Created custom category pages as part of the wider redesign.",
          "Prepared Magento CMS pages for the redesigned storefront."
        ]
      },
      {
        "title": "Client support and training",
        "items": [
          "Helped the client use Magento CMS during the project.",
          "Trained the client to maintain and update CMS content independently."
        ]
      }
    ],
    "outcome": "Delivered category and CMS contributions to the redesign, with a practical handover that enabled the client to manage content independently.",
    "metrics": [
      {
        "label": "Platform",
        "after": "Magento 2"
      },
      {
        "label": "Scope",
        "after": "Magento storefront redesign and CMS handover"
      }
    ],
    "myRole": "Frontend contributor during the initial redesign phase — categories, CMS pages and client training.",
    "seoTitle": "Solar Case Study | Mykola Rudnev",
    "seoDescription": "Contributed at the start of a complete Magento redesign: custom category pages, CMS page preparation and training for the client’s content editors.",
    "liveUrl": "https://www.solar.com.pl/"
  },
  {
    "slug": "carneoo-vehicle-configurator",
    "title": "Carneoo — Vehicle configurator and frontend optimization",
    "client": "Carneoo",
    "industry": "Automotive",
    "projectType": "Vehicle configurator and frontend optimization",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API"
    ],
    "collaboration": "Frontend developer — joined midway through development to support the configurator, features and optimization.",
    "lang": "en",
    "summary": "Joined a car sales platform midway through development, contributing to the vehicle configurator, new features, bug fixes and image optimization.",
    "startingPoint": "The car sales platform was already in development and needed additional frontend support for its configurator, features and optimization work.",
    "whatIDid": [
      {
        "title": "Configurator and features",
        "items": [
          "Helped implement the vehicle configuration experience.",
          "Built additional frontend features and custom components within the existing application."
        ]
      },
      {
        "title": "Maintenance and optimization",
        "items": [
          "Investigated and fixed frontend bugs.",
          "Optimized images and worked on frontend performance across the project."
        ]
      }
    ],
    "outcome": "Extended the existing platform with configurator contributions and additional functionality, while addressing bugs and image performance.",
    "metrics": [
      {
        "label": "Platform",
        "after": "Next.js"
      },
      {
        "label": "Scope",
        "after": "Vehicle configurator and frontend optimization"
      }
    ],
    "myRole": "Frontend developer — joined midway through development to support the configurator, features and optimization.",
    "seoTitle": "Carneoo Case Study | Mykola Rudnev",
    "seoDescription": "Joined a car sales platform midway through development, contributing to the vehicle configurator, new features, bug fixes and image optimization.",
    "liveUrl": "https://carneoo.de/"
  },
  {
    "slug": "3mk-magento-smart-finder",
    "title": "3MK Protection — Smart Finder, storefront and CMS support",
    "client": "3MK Protection",
    "industry": "E-commerce / device protection",
    "projectType": "Smart Finder, storefront and CMS support",
    "stack": [
      "Magento 2",
      "JavaScript",
      "jQuery",
      "XML"
    ],
    "collaboration": "Frontend contributor — Smart Finder UI logic, storefront components, checkout, SEO templates and client training.",
    "lang": "en",
    "summary": "Custom Magento storefront contributions spanning Smart Finder frontend logic, banners, category and product styling, checkout, SEO templates and client CMS training.",
    "startingPoint": "The team was building a custom Magento 2 storefront. My scope combined storefront development with SEO collaboration and support for the client’s CMS workflow.",
    "whatIDid": [
      {
        "title": "Storefront implementation",
        "items": [
          "Worked on the frontend logic of the Smart Finder on the homepage.",
          "Implemented and optimized banners and related components across the storefront.",
          "Created category and product page styles and worked on checkout."
        ]
      },
      {
        "title": "SEO and client handover",
        "items": [
          "Communicated with SEO specialists and prepared templates for SEO requirements.",
          "Supported the client and trained them to work with Magento CMS."
        ]
      }
    ],
    "outcome": "Contributed core shopping interfaces and reusable content templates to the storefront, while supporting SEO requirements and the client’s ability to manage CMS content.",
    "metrics": [
      {
        "label": "Platform",
        "after": "Magento 2"
      },
      {
        "label": "Scope",
        "after": "Smart Finder, storefront and CMS support"
      }
    ],
    "myRole": "Frontend contributor — Smart Finder UI logic, storefront components, checkout, SEO templates and client training.",
    "seoTitle": "3MK Protection Case Study | Mykola Rudnev",
    "seoDescription": "Custom Magento storefront contributions spanning Smart Finder frontend logic, banners, category and product styling, checkout, SEO templates and client CMS training.",
    "liveUrl": "https://3mk.pl/"
  },
  {
    "slug": "internorm-headless-gatsby",
    "title": "Internorm — Complete headless WordPress and Gatsby website",
    "client": "Internorm",
    "industry": "Corporate website",
    "projectType": "Complete headless WordPress and Gatsby website",
    "stack": [
      "Gatsby",
      "React",
      "WordPress",
      "WordPress SEO",
      "GraphQL",
      "SSG",
      "Atomic Design"
    ],
    "collaboration": "Frontend developer — complete page implementation, templates and Atomic Design architecture.",
    "lang": "en",
    "summary": "Built all pages and templates for a headless WordPress website in 2024, with Gatsby/React static site generation, WordPress SEO and Atomic Design architecture.",
    "startingPoint": "The website needed a WordPress content backend with a separate Gatsby and React frontend, covering both standard and custom page types.",
    "whatIDid": [
      {
        "title": "Headless architecture",
        "items": [
          "Implemented the frontend using Gatsby and React with static site generation (SSG).",
          "Used WordPress for content management and WordPress SEO as part of the SEO setup."
        ]
      },
      {
        "title": "Pages and component system",
        "items": [
          "Implemented all standard pages, custom pages and reusable templates.",
          "Organized the component architecture using Atomic Design."
        ]
      }
    ],
    "outcome": "Delivered the complete frontend page set and reusable templates on a headless WordPress / Gatsby architecture, with a consistent component system and SEO setup.",
    "metrics": [
      {
        "label": "Platform",
        "after": "Gatsby"
      },
      {
        "label": "Scope",
        "after": "Complete headless WordPress and Gatsby website"
      }
    ],
    "myRole": "Frontend developer — complete page implementation, templates and Atomic Design architecture.",
    "seoTitle": "Internorm Case Study | Mykola Rudnev",
    "seoDescription": "Built all pages and templates for a headless WordPress website in 2024, with Gatsby/React static site generation, WordPress SEO and Atomic Design architecture.",
    "year": "2024"
  },
  {
    "slug": "novum-fertility-questionnaire",
    "title": "Novum Klinika — Custom fertility questionnaire application",
    "client": "Novum Klinika",
    "industry": "Healthcare application",
    "projectType": "Custom fertility questionnaire application",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Storybook",
      "Atomic Design"
    ],
    "collaboration": "Frontend contributor — questionnaire functionality, custom test flow and component development.",
    "lang": "en",
    "summary": "Developed frontend functionality for an extensive fertility questionnaire application with custom test logic, using Next.js, Tailwind CSS, Storybook and Atomic Design. The project did not reach a completed launch.",
    "startingPoint": "The clinic project was an application centered on an extensive questionnaire for people planning a pregnancy, with custom logic beyond a standard informational website.",
    "whatIDid": [
      {
        "title": "Application development",
        "items": [
          "Contributed to the frontend of the extended questionnaire and its custom test flow.",
          "Used React, Next.js, TypeScript and JavaScript to implement application functionality."
        ]
      },
      {
        "title": "UI architecture",
        "items": [
          "Built and styled UI components with Tailwind CSS.",
          "Used Atomic Design architecture and Storybook for component development."
        ]
      }
    ],
    "outcome": "Developed the questionnaire application and its UI during the project. It did not reach a completed launch; this case study describes development contributions without claiming production delivery.",
    "metrics": [
      {
        "label": "Platform",
        "after": "Next.js"
      },
      {
        "label": "Scope",
        "after": "Custom fertility questionnaire application"
      }
    ],
    "myRole": "Frontend contributor — questionnaire functionality, custom test flow and component development.",
    "seoTitle": "Novum Klinika Case Study | Mykola Rudnev",
    "seoDescription": "Developed frontend functionality for an extensive fertility questionnaire application with custom test logic, using Next.js, Tailwind CSS, Storybook and Atomic Design. The project did not reach a completed launch."
  },
  {
    "slug": "learningspace-platform-completion",
    "title": "LearningSpace — Learning platform completion",
    "client": "LearningSpace",
    "industry": "Online education",
    "projectType": "Learning platform completion",
    "stack": [
      "Next.js",
      "React",
      "Storybook"
    ],
    "collaboration": "Frontend contributor — joined near the end of development and helped finish the platform.",
    "lang": "en",
    "summary": "Joined near the end of development to help complete a learning platform where teachers create multimedia courses and assignments, using Next.js, React and Storybook.",
    "startingPoint": "The learning platform was already in development. Teachers could assemble courses from different lesson and content types, and the team needed support completing the project.",
    "whatIDid": [
      {
        "title": "Final-stage development",
        "items": [
          "Joined during the final stage and contributed to completing the existing platform.",
          "Worked within the Next.js and React application using Storybook for UI components."
        ]
      },
      {
        "title": "Course platform",
        "items": [
          "Contributed to a platform supporting teacher-created courses with image and text blocks.",
          "The course format included video lessons, audio lessons and assignments."
        ]
      }
    ],
    "outcome": "Helped complete the learning platform during its final development phase, supporting a product designed for teacher-created multimedia courses and assignments.",
    "metrics": [
      {
        "label": "Platform",
        "after": "Next.js"
      },
      {
        "label": "Scope",
        "after": "Learning platform completion"
      }
    ],
    "myRole": "Frontend contributor — joined near the end of development and helped finish the platform.",
    "seoTitle": "LearningSpace Case Study | Mykola Rudnev",
    "seoDescription": "Joined near the end of development to help complete a learning platform where teachers create multimedia courses and assignments, using Next.js, React and Storybook.",
    "liveUrl": "https://learningspace.app/en/"
  },
  {
    "slug": "edycja-magento-blank",
    "title": "Edycja — Magento Blank storefront from scratch",
    "client": "Edycja",
    "industry": "E-commerce",
    "projectType": "Magento Blank storefront from scratch",
    "stack": [
      "Magento 2",
      "Magento Blank",
      "JavaScript",
      "jQuery",
      "XML",
      "LESS/SASS"
    ],
    "collaboration": "Frontend developer — custom Magento Blank theme, styling and all storefront page types.",
    "lang": "en",
    "summary": "One of my earliest Magento builds: a storefront created from scratch on Magento Blank in 2023, with custom styling across all storefront pages.",
    "startingPoint": "Edycja needed a complete storefront built on Magento Blank with custom styles and page implementations.",
    "whatIDid": [
      {
        "title": "Custom theme implementation",
        "items": [
          "Implemented the storefront from scratch on Magento Blank.",
          "Created custom styles and frontend elements throughout the theme."
        ]
      },
      {
        "title": "Page coverage",
        "items": [
          "Worked across the homepage, category and product pages.",
          "Implemented CMS pages and custom elements across the storefront."
        ]
      }
    ],
    "outcome": "Delivered a complete custom Magento storefront. The store continues to operate, making this an early project with continued use after delivery.",
    "metrics": [
      {
        "label": "Platform",
        "after": "Magento 2"
      },
      {
        "label": "Scope",
        "after": "Magento Blank storefront from scratch"
      }
    ],
    "myRole": "Frontend developer — custom Magento Blank theme, styling and all storefront page types.",
    "seoTitle": "Edycja Case Study | Mykola Rudnev",
    "seoDescription": "One of my earliest Magento builds: a storefront created from scratch on Magento Blank in 2023, with custom styling across all storefront pages.",
    "year": "2023",
    "liveUrl": "https://edycja.pl/"
  },

]

/** @deprecated use detailedCaseStudies */
export const caseStudies = detailedCaseStudies

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return detailedCaseStudies.find((study) => study.slug === slug)
}
