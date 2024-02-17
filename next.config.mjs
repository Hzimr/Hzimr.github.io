/** @type {import('next').NextConfig} */
// eslint-disable-next-line prefer-const
let envImageUnoptimize = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: process.env.NODE_ENV !== 'production' ? undefined : 'export',
  images: {
    unoptimized: envImageUnoptimize,
  },
}

export default nextConfig
