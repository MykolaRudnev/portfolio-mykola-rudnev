import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Head from "next/head";
const inter = Inter({ subsets: ['latin'] })
import { Maven_Pro, Expletus_Sans } from 'next/font/google'
import Script from "next/script";

export const metadata = {
    title: 'Mykola Rudnev - Front-End Developer',
    description: 'Personal portfolio of Mykola Rudnev, a Front-End Developer specializing in React.js, Next.js, and Magento 2.',
}

const mavenPro = Maven_Pro({
    subsets: ['latin'],
    variable: '--font-maven-pro',
    display: 'swap',
})

const expletusSans = Expletus_Sans({
    subsets: ['latin'],
    variable: '--font-expletus-sans',
    display: 'swap',
})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${mavenPro.variable} ${expletusSans.variable}`}>

        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700&display=swap"
                  rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Expletus+Sans:wght@400;500;600;700&display=swap"
                  rel="stylesheet"/>
        </Head>

        <body className={inter.className}>
        <Header/>
        <main className="min-h-screen">{children}</main>
        <Footer/>
        <Script
            src="https://cloud.umami.is/script.js"
            data-website-id="13e968d5-9d24-42d1-bbb9-7985af0b33df"
            strategy="afterInteractive"
        />
        </body>
        </html>
    )
}