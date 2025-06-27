/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com'],
  },
  // Enable static exports if needed
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig