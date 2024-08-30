import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

const manifest = () =>
  ({
    background_color: '#fff',
    description: siteConfig.description,
    display: 'standalone',
    icons: [
      {
        sizes: '192x192',
        src: '/android-chrome-192x192.png',
        type: 'image/png'
      },
      {
        sizes: '512x512',
        src: '/android-chrome-512x512.png',
        type: 'image/png'
      }
    ],
    name: siteConfig.naming,
    short_name: siteConfig.altNaming,
    start_url: '.',
    theme_color: '#fff'
  }) satisfies MetadataRoute.Manifest;

export default manifest;
