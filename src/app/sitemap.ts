import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nieuwniveau.nl'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '',           priority: 1.0,  freq: 'monthly' as const },
    { path: '/voor-wie',  priority: 0.85, freq: 'monthly' as const },
    { path: '/werkwijze', priority: 0.8,  freq: 'monthly' as const },
    { path: '/over-mij',  priority: 0.8,  freq: 'monthly' as const },
    { path: '/diensten',          priority: 0.75, freq: 'monthly' as const },
    { path: '/voor-verwijzers',   priority: 0.7,  freq: 'monthly' as const },
    { path: '/contact',           priority: 0.9,  freq: 'monthly' as const },
  ]

  return pages.map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }))
}
