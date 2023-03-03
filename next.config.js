/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com', 'res.cloudinary.com', 'images.ctfassets.net']
  },
}

module.exports = nextConfig
