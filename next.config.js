
const isDev = process.env.NODE_ENV === "development";

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ua'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  basePath: isDev ? '' : '/hero-of-ukraine',
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
    images: {
      layoutRaw: true,
    },
  },
};

module.exports = nextConfig;
