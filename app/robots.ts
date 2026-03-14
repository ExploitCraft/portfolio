import { MetadataRoute } from 'next'
import { portfolioConfig } from '@/config/portfolio.config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${portfolioConfig.seo.url}/sitemap.xml`,
  }
}
