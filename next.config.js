/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;