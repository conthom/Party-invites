/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
};