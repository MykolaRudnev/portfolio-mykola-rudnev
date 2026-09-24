import type { Metadata } from "next"
import { Fraunces, Inter } from "next/font/google"
import Script from "next/script"
import Navbar from "@/components/Navbar"
import { BackToTop } from "@/components/ui/BackToTop"
import Footer from "@/components/Footer"
import { JsonLdScript } from "@/components/seo/JsonLdScript"
import { personJsonLd, websiteJsonLd } from "@/lib/json-ld"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES, SITE_URL } from "@/constants/routes"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...getMetadataForPath(ROUTES.home),
  verification: {
    google: "KKQ-tlyd6OxMLIEsi7OzSwUcX_7PDCs-nwvgwEHGI4U",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} scroll-smooth`}>
      <head>
        <meta
          name="google-site-verification"
          content="KKQ-tlyd6OxMLIEsi7OzSwUcX_7PDCs-nwvgwEHGI4U"
        />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/mrudnev-avatar.png" />
        <JsonLdScript data={[personJsonLd, websiteJsonLd]} />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="min-h-screen bg-paper text-ink selection:bg-accent selection:text-paper">
          <Navbar />
          <main id="main-content" className="relative z-10 flex flex-col">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </div>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="13e968d5-9d24-42d1-bbb9-7985af0b33df"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
