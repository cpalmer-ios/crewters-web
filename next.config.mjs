import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
    // unoptimized: true
  },
  experimental: {
    appDir: true,
  },
}

export default withContentlayer(nextConfig)
