import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3210';
const ROUTES = ['', '/solutions', '/governance', '/contact', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${SITE}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE}/${l}${route}`])
        )
      }
    }))
  );
}
