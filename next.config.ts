import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {root: import.meta.dirname},
  images: {formats: ['image/avif', 'image/webp']}
};

export default createNextIntlPlugin('./src/i18n/request.ts')(nextConfig);
