const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['strapi.myplantin.com'],
  },
  reactStrictMode: true,
  basePath: isDev ? '' : '/hero-of-ukraine',
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
    images: { allowFutureImage: true },
  },
};

module.exports = withBundleAnalyzer(nextConfig);
