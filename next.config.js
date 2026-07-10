/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    allowedDevOrigins: ['192.168.0.102'],
  },
};

module.exports = nextConfig;
