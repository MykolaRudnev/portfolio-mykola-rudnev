import type { Metadata } from "next"
import { SITE_URL, PAGE_SEO, ROUTES } from "@/constants/routes"
import { getCaseStudyBySlug } from "@/constants/case-studies"

const DEFAULT_OG_IMAGE = "/images/og-image.png"

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = path === ROUTES.home ? SITE_URL : `${SITE_URL}${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "Mykola Rudnev Portfolio",
      locale: "en_US",
      images: [
        {
          url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
          width: 1200,
          height: 630,
          alt: "Mykola Rudnev — Senior Front-End Developer Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
    },
  }
}

export function getMetadataForPath(path: string): Metadata {
  const meta = PAGE_SEO.find((page) => page.path === path)
  if (!meta) return buildPageMetadata({
    title: "Mykola Rudnev | Senior Front-End Developer",
    description: "Senior Front-End Developer — React, Next.js, Magento 2 / Hyvä.",
    path,
  })
  return buildPageMetadata(meta)
}

export function getCaseStudyMetadata(slug: string): Metadata | null {
  const study = getCaseStudyBySlug(slug)
  if (!study) return null
  return buildPageMetadata({
    title: study.seoTitle,
    description: study.seoDescription,
    path: ROUTES.caseStudyDetail(slug),
  })
}
