import { MetadataRoute } from 'next';
import { properties } from '@/data/properties';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elegance-estate.vercel.app';
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  const propertyPages = properties.map((property) => ({
    url: `${baseUrl}/property/${property.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  return [...staticPages, ...propertyPages];
}
