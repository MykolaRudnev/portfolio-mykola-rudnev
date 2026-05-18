import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { JsonLdScript } from "@/components/seo/JsonLdScript"
import { personJsonLd, websiteJsonLd } from "@/lib/json-ld"
import { getMetadataForPath } from "@/lib/metadata"
import { ROUTES } from "@/constants/routes"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = getMetadataForPath(ROUTES.home)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/mrudnev-avatar.png" />
        <JsonLdScript data={[personJsonLd, websiteJsonLd]} />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-white">
          <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px]" />
          </div>
          <Navbar />
          <main id="main-content" className="relative z-10 flex flex-col">
            {children}
          </main>
          <Footer />
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
