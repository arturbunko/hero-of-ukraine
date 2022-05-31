/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'nodejs',
    serverComponents: true,
    images: {
      layoutRaw: true,
    },
  },
};

module.exports = nextConfig;
