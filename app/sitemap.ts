import { MetadataRoute } from 'next'
import { portfolioConfig } from '@/config/portfolio.config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: portfolioConfig.seo.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
