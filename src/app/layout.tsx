import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import PageTransition from '@/components/PageTransition'
import BackToTop from '@/components/BackToTop'
import MobileContact from '@/components/MobileContact'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  weight: 'variable',
  style: ['normal', 'italic'],
  axes: ['opsz'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nieuwniveau.nl'),
  title: {
    default: 'Nieuw Niveau — Ambulante begeleiding Amersfoort',
    template: '%s — Nieuw Niveau',
  },
  description:
    'Nieuw Niveau biedt ambulante WMO-begeleiding in regio Amersfoort, Utrecht en Hilversum. Individuele begeleiding voor volwassenen die vastlopen, thuis en op maat.',
  keywords: [
    'ambulante begeleiding Amersfoort',
    'WMO begeleiding Utrecht',
    'thuisbegeleiding GGZ',
    'PGB begeleiding Utrecht',
    'ambulante GGZ begeleiding',
    'begeleiding Hilversum',
    'begeleiding Utrecht Zuidoost',
    'bemoeizorg Amersfoort',
    'individuele begeleiding',
    'begeleiding Soest Baarn Zeist',
    'begeleiding Nieuwegein',
    'zorgbegeleiding thuis',
  ],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Nieuw Niveau Begeleiding',
    title: 'Nieuw Niveau — Ambulante begeleiding Amersfoort',
    description:
      'Individuele WMO-begeleiding voor volwassenen die vastlopen. Thuis, op jouw tempo, met jouw regie. Regio Amersfoort, Utrecht en Hilversum.',
    images: [{ url: '/images/hero.jpeg', width: 1200, height: 630, alt: 'Nieuw Niveau Begeleiding' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nieuw Niveau — Ambulante begeleiding Amersfoort',
    description: 'Individuele WMO-begeleiding voor volwassenen die vastlopen.',
    images: ['/images/hero.jpeg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Nieuw Niveau Begeleiding',
    description: 'Ambulante WMO-begeleiding voor volwassenen in regio Amersfoort, Utrecht en Hilversum.',
    telephone: '+31629242833',
    email: 'info@nieuwniveau.nl',
    url: 'https://www.nieuwniveau.nl',
    identifier: { '@type': 'PropertyValue', name: 'KvK', value: '42035269' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amersfoort',
      addressRegion: 'Utrecht',
      addressCountry: 'NL',
    },
    areaServed: [
      'Amersfoort', 'Utrecht', 'Utrecht Zuidoost', 'Hilversum',
      'Soest', 'Baarn', 'Zeist', 'Nieuwegein', 'Leusden', 'Weesp',
    ],
    knowsAbout: [
      'Ambulante begeleiding', 'WMO begeleiding', 'GGZ begeleiding',
      'PGB begeleiding', 'Thuisbegeleiding', 'Bemoeizorg',
    ],
    priceRange: 'Via WMO indicatie of PGB',
  }

  return (
    <html lang="nl" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Nav />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <CookieBanner />
        <BackToTop />
        <MobileContact />
      </body>
    </html>
  )
}
