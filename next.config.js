/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/hero-of-ukraine',
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
    images: {
      layoutRaw: true,
    },
  },
};

module.exports = nextConfig;
