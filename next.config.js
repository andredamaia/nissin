/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nissinsolutions.com.br'
      },
      {
        protocol: 'http',
        hostname: 'nissinsolutions.com.br'
      }
    ]
  }
}

module.exports = nextConfig