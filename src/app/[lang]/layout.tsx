import type { Metadata } from 'next'
import '../../app/globals.css'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Merchtile | Tailored Fashion for Rising Brands',
  description: 'B2B service helping brands with fabric, printing & branding',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const lang = params.lang || 'en'

  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light`}
      >
        <Navbar lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  )
}
