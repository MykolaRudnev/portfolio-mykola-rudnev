import { SITE_URL, ROUTES } from "@/constants/routes"
import type { FaqItem } from "@/constants/faq"

export const PERSON_ID = `${SITE_URL}/#person`

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Mykola Rudnev",
  givenName: "Mykola",
  familyName: "Rudnev",
  alternateName: ["Mykola Rudniev"],
  jobTitle: "Senior Front-End Engineer",
  description:
    "Senior front-end engineer to hire for React, Next.js, TypeScript, Magento 2 / Hyvä and Shopify. Based in Lublin, Poland. Remote B2B across the EU. Current work: HUBER SE Hyvä storefront and Claspwell Magento AI.",
  url: SITE_URL,
  image: `${SITE_URL}/images/mrudnev-avatar.png`,
  email: "mailto:rudnevmykola@gmail.com",
  telephone: "+48790240418",
  sameAs: [
    "https://www.linkedin.com/in/mykola-r-1525a5145/",
    "https://github.com/MykolaRudnev",
    "https://himalayas.app/@mykolarudnev",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lublin",
    addressCountry: "PL",
  },
  homeLocation: {
    "@type": "Place",
    name: "Lublin, Poland",
  },
  worksFor: { "@type": "Organization", name: "HUBER SE" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Economics and Innovation in Lublin",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Front-End Developer",
    occupationalCategory: "15-1254.00",
    skills: "React, Next.js, TypeScript, Magento 2, Hyvä, Shopify, Core Web Vitals, technical SEO",
  },
  knowsLanguage: ["en", "pl", "uk", "ru"],
  knowsAbout: [
    "Senior Front-End Development",
    "Hire Senior Front-End Engineer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Magento 2 frontend",
    "Hyvä Theme",
    "Hyvä CMS",
    "Hyvä Checkout",
    "Shopify Liquid",
    "Alpine.js",
    "Core Web Vitals",
    "Technical SEO",
    "Payload CMS",
  ],
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mykola Rudnev — Senior Front-End Engineer",
  url: `${SITE_URL}/`,
  inLanguage: "en",
  description:
    "Hire Mykola Rudnev for senior front-end work: React, Next.js, TypeScript, Magento 2 / Hyvä, Shopify. Remote B2B, EU.",
  author: { "@id": PERSON_ID },
  about: { "@id": PERSON_ID },
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Who is Mykola Rudnev?",
    url: `${SITE_URL}${ROUTES.about}`,
    inLanguage: "en",
    mainEntity: { "@id": PERSON_ID },
  }
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Magento 2 / Hyvä Support — Mykola Rudnev",
    description:
      "Hire a Magento 2 / Hyvä frontend developer directly: migrations, Hyvä rebuilds, fixes, new sections, performance, checkout/CMS, and ongoing maintenance.",
    provider: { "@id": PERSON_ID },
    areaServed: ["Poland", "European Union", "Remote"],
    serviceType: [
      "Magento 2 Support",
      "Hyvä Theme Development",
      "Hire Magento frontend developer",
      "E-commerce Frontend",
    ],
    url: `${SITE_URL}${ROUTES.magentoSupport}`,
  }
}

export function breadcrumbJsonLd(items: { name: string; item?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      ...(entry.item ? { item: entry.item } : {}),
    })),
  }
}
