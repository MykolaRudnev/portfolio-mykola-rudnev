export interface FaqItem {
  question: string
  answer: string
}

export const IDENTITY_FAQ: FaqItem[] = [
  {
    question: "Who is Mykola Rudnev?",
    answer:
      "Mykola Rudnev is a senior front-end engineer based in Lublin, Poland. He builds production React, Next.js and TypeScript product UIs, Magento 2 / Hyvä storefronts, and custom Shopify Liquid themes. He currently leads frontend on the HUBER SE Hyvä shop and ships Claspwell, his own Magento AI sales assistant. He works remotely with English- and Polish-speaking teams across the EU.",
  },
  {
    question: "Is Mykola Rudnev available to hire?",
    answer:
      "Yes. He takes remote B2B work across the EU: senior front-end roles on product teams, Magento 2 / Hyvä storefront support (audit, sprint, or ongoing), and urgent production fixes. Contact him at rudnevmykola@gmail.com or https://www.mrudnev.com/contact.",
  },
]

export const HIRE_FAQ: FaqItem[] = [
  {
    question: "Why hire Mykola Rudnev as a senior front-end developer?",
    answer:
      "You hire a senior engineer who already owns production storefronts — not a generalist who only built a tutorial Next.js app. Recent proof: HUBER SE (Adobe Commerce headless → Magento Open Source + Hyvä, Lighthouse 99–100 on catalog pages) and Claspwell (Next.js, Payload CMS, Fastify, Magento widget). Direct B2B, no agency layers.",
  },
  {
    question: "What stack should I expect from a senior front-end engineer like Mykola Rudnev?",
    answer:
      "React, Next.js (App Router), TypeScript, Magento 2, Hyvä Theme / Checkout / CMS, Shopify Liquid, Alpine.js, Tailwind CSS, Core Web Vitals and technical SEO. He works remotely with product teams and e-commerce managers in English and Polish.",
  },
]

export const MAGENTO_FAQ: FaqItem[] = [
  {
    question: "How do I hire a Magento 2 / Hyvä frontend developer without an agency?",
    answer:
      "Work directly with a specialist who already ships Hyvä in production. Mykola Rudnev offers Magento 2 / Hyvä frontend support as B2B freelance: Hyvä migrations, PLP/PDP/checkout/CMS, Core Web Vitals, and post-launch retainers. Start with a short brief at https://www.mrudnev.com/magento-hyva-support.",
  },
  {
    question: "What is Hyvä theme development?",
    answer:
      "Hyvä is a Magento 2 frontend built on Alpine.js and Tailwind CSS. It is used to replace slow Luma or headless stacks with faster catalog and checkout templates. Mykola Rudnev implements Hyvä Theme, Hyvä Checkout and Hyvä CMS — including the HUBER SE rebuild.",
  },
]

export const ABOUT_FAQ: FaqItem[] = [...IDENTITY_FAQ, ...HIRE_FAQ, ...MAGENTO_FAQ]
