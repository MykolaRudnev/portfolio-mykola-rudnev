import { SITE_URL, ROUTES } from "@/constants/routes"

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mykola Rudnev",
  givenName: "Mykola",
  familyName: "Rudnev",
  jobTitle: "Senior Front-End Developer",
  description:
    "Senior Front-End Developer with 6+ years of experience building high-performance web applications and production-ready e-commerce platforms (Magento 2 / Hyvä, React, Next.js, TypeScript).",
  url: SITE_URL,
  image: `${SITE_URL}/images/mrudnev-avatar.png`,
  email: "mailto:rudnevmykola@gmail.com",
  telephone: "+48790240418",
  sameAs: [
    "https://www.linkedin.com/in/mykola-rudnev-1525a5145/",
    "https://github.com/MykolaRudnev",
  ],
  worksFor: { "@type": "Organization", name: "Lufed IT" },
  knowsAbout: [
    "Senior Front-End Development",
    "React.js",
    "Next.js",
    "TypeScript",
    "Magento 2",
    "Hyvä Theme",
    "Core Web Vitals",
    "Technical SEO",
  ],
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mykola Rudnev Portfolio",
  url: `${SITE_URL}/`,
  inLanguage: "en",
  description:
    "Portfolio of Mykola Rudnev — Senior Front-End Developer specializing in Magento 2 (Hyvä), React, Next.js, and TypeScript.",
  author: { "@type": "Person", name: "Mykola Rudnev", url: SITE_URL },
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Magento 2 / Hyvä Support — Mykola Rudnev",
    description:
      "Direct Magento 2 / Hyvä frontend support: fixes, new sections, performance, checkout/CMS, and ongoing maintenance.",
    provider: { "@type": "Person", name: "Mykola Rudnev", url: SITE_URL },
    areaServed: ["Poland", "European Union", "Remote"],
    serviceType: ["Magento 2 Support", "Hyvä Theme Development", "E-commerce Frontend"],
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
