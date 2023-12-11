/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
      },
      
      images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
